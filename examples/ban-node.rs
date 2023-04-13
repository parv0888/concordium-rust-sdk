//! List accounts and their balances ordered by decreasing CCD amount in a CSV
//! file.
use anyhow::Context;
use clap::AppSettings;
use concordium_rust_sdk::{
    common::SerdeSerialize,
    endpoints,
    id::types::AccountAddress,
    types::{hashes::BlockHash, AccountStakingInfo, CredentialType, network::RemotePeerId},
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
    let nodeBanned = client.ban_node(concordium_rust_sdk::types::queries::BanMethod::Id(RemotePeerId::from_str("48872c8cbf507a42").unwrap())).await?;
    Ok(())
}
