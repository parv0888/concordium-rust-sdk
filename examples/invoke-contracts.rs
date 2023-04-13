//! List accounts and their balances ordered by decreasing CCD amount in a CSV
//! file.
use anyhow::Context;
use clap::AppSettings;
use concordium_contracts_common::{ContractAddress, OwnedReceiveName, Address};
use concordium_rust_sdk::{
    common::SerdeSerialize,
    endpoints,
    id::types::AccountAddress,
    types::{
        hashes::{BlockHash, HashBytes},
        network::RemotePeerId,
        smart_contracts::{ContractContext, Parameter},
        AccountStakingInfo, CredentialType, Energy,
    },
};
use crypto_common::types::Amount;
use serde::Serializer;
use std::{path::PathBuf, str::FromStr};
use structopt::StructOpt;

#[derive(StructOpt)]
struct App {
    #[structopt(
        long = "node",
        help = "GRPC interface of the node.",
        default_value = "http://localhost:10001"
    )]
    endpoint: tonic::transport::Endpoint,
}

fn to_string<S: Serializer>(x: &Amount, ser: S) -> Result<S::Ok, S::Error> {
    ser.serialize_str(&x.to_string())
}

#[tokio::main(flavor = "multi_thread")]
async fn main() -> anyhow::Result<()> {
    let app = {
        let app = App::clap()
            // .setting(AppSettings::ArgRequiredElseHelp)
            .global_setting(AppSettings::ColoredHelp);
        let matches = app.get_matches();
        App::from_clap(&matches)
    };

    // create the file early so that we don't spend time querying all accounts and
    // then find the output file cannot be created.

    let mut client = endpoints::Client::connect(app.endpoint, "rpcadmin").await?;
    // let result = client
    //     .invoke_contract(
    //         &HashBytes::from_str(
    //             "38c66a1cda6faa8b742d711cda13bfe9f1d04cb8f7261fa652f18422728f5642",
    //         )
    //         .unwrap(),
    //         &ContractContext::new(
    //             ContractAddress::new(789, 0),
    //             OwnedReceiveName::from_str("CIS2-NFT.view").unwrap(),
    //         ),
    //     )
    //     .await?;
    
    let cc : ContractContext = ContractContext { 
        invoker: Option::Some(Address::Account(AccountAddress::from_str("48x2Uo8xCMMxwGuSQnwbqjzKtVqK5MaUud4vG7QEUgDmYkV85e").unwrap())), 
        contract: ContractAddress { index: 789, subindex: 0 }, 
        amount: Amount::zero(), 
        method: OwnedReceiveName::from_str("CIS2-NFT.view").unwrap(), 
        parameter: Parameter::default(), 
        energy: Energy { energy: 0 } 
    };

    let result = client
        .invoke_contract(
            &HashBytes::from_str(
                "38c66a1cda6faa8b742d711cda13bfe9f1d04cb8f7261fa652f18422728f5642",
            )
            .unwrap(),
            &cc,
        )
        .await?;
    Ok(())
}
