//! This module contains types and their implementations related to the CIS-2
//! token standard.

use std::collections::BTreeMap;

// All code from this module has been moved to cis2_types in base, but this is
// still re-exported for backward compatibility.
pub use concordium_base::cis2_types::*;
use concordium_base::contracts_common::{Address, Serial, Write};
use derive_more::{AsRef, Into};
use thiserror::Error;

// Error for constructing a new [`MintParams`](MintParams).
#[derive(Debug, PartialEq, Eq, Error)]
#[error("Invalid number of transfers, must be withing a length of u16::MAX.")]
pub struct NewMintParamsError;

#[derive(Debug, Clone, Into)]
pub struct TokenMetadata {
    /// The URL following the specification RFC1738.
    pub url: String,
    /// A optional hash of the content.
    pub hash: String,
}

impl Serial for TokenMetadata {
    fn serial<W: Write>(&self, out: &mut W) -> Result<(), W::Err> {
        let url_bytes = self.url.as_bytes();
        let hash_bytes = self.hash.as_bytes();
        let url_len = url_bytes.len() as u16;
        let hash_len = hash_bytes.len() as u16;
        url_len.serial(out)?;
        out.write_all(url_bytes)?;
        hash_len.serial(out)?;
        out.write_all(hash_bytes)?;
        Ok(())
    }
}

/// The parameter for the contract function `mint` which mints a number of
/// token types and/or amounts of tokens to a given address.
#[derive(Debug, AsRef, Clone, Into)]
pub struct MintParams {
    /// Owner of the newly minted tokens.
    pub owner: Address,
    /// A collection of tokens to mint.
    pub tokens: BTreeMap<TokenId, (TokenMetadata, TokenAmount)>,
}

impl MintParams {
    pub fn new(
        owner: Address,
        tokens: BTreeMap<TokenId, (TokenMetadata, TokenAmount)>,
    ) -> Result<Self, NewMintParamsError> {
        if tokens.len() > u16::MAX.into() {
            return Err(NewMintParamsError);
        }
        Ok(Self { owner, tokens })
    }
}

impl Serial for MintParams {
    fn serial<W: Write>(&self, out: &mut W) -> Result<(), W::Err> {
        self.owner.serial(out)?;
        let len = u32::try_from(self.tokens.len()).map_err(|_| W::Err::default())?;
        len.serial(out)?;

        for (token_id, (metadata, amount)) in &self.tokens {
            token_id.serial(out)?;
            metadata.serial(out)?;
            amount.serial(out)?;
        }
        Ok(())
    }
}
