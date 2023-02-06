initSidebarItems({"enum":[["Cis2DryRunError","Error which can occur when submitting a transaction such as `transfer` and `updateOperator` to a CIS2 smart contract."],["Cis2ErrorRejectReason","The different errors found in CIS2."],["Cis2QueryError","Error which can occur when invoking a query such as `balanceOf` and `operatorOf` or `tokenMetadata` to a CIS2 smart contract."],["Cis2TransactionError","Error which can occur when submitting a transaction such as `transfer` and `updateOperator` to a CIS2 smart contract."],["Event","Smart contract logged event, part of the CIS2 specification."],["FromStrAdditionalDataError","Error for constructing a `AdditionalData` from a string."],["OperatorUpdate","The type of update for an operator update."],["ParseTokenAddressError",""],["ParseTokenIdVecError","Error from parsing a token ID bytes from a hex encoded string."],["Receiver","Address to receive an amount of tokens, it differs from the [`Address`] type by additionally requiring a contract receive function name when the address is a contract address."]],"struct":[["AdditionalData","Additional data which can be included for each transfer in the transfer parameter for the CIS2 contract function `transfer`. Allows up to `u16::MAX` number of bytes."],["BalanceOfQuery","A query for the balance of a given address for a given token."],["BalanceOfQueryParams","The parameter type for the NFT contract function `CIS2-NFT.balanceOf`."],["BalanceOfQueryResponse","The response which is sent back when calling the contract function `balanceOf`. It consists of the list of token amounts in the same order as the queries."],["Cis2Contract","A wrapper around the client representing a CIS2 token smart contract, which provides functions for interaction."],["Cis2TransactionMetadata","Transaction metadata for CIS-2"],["MetadataUrl","A URL for the metadata."],["NewAdditionalDataError","Error for constructing a new `AdditionalData`."],["NewBalanceOfQueryParamsError","Error for constructing a new `BalanceOfQueryParams`."],["NewBalanceOfQueryResponseError","Error for constructing a new `BalanceOfQueryResponse`."],["NewMetadataUrlError","Error for constructing a new `MetadataUrl`."],["NewOperatorOfQueryParamsError","Error for constructing a new `OperatorOfQueryParams`."],["NewOperatorOfQueryResponseError","Error for constructing a new `OperatorOfQueryResponse`."],["NewTokenIdError","Error for constructing a new `TokenId`."],["NewTokenMetadataQueryParamsError","Error for constructing a new `TokenMetadataQueryParams`."],["NewTokenMetadataQueryResponseError","Error for constructing a new `TokenMetadataQueryResponse`."],["NewTransferParamsError","Error for constructing a new `TransferParams`."],["NewUpdateOperatorParamsError","Error for constructing a new `UpdateOperatorParams`."],["OperatorOfQuery","A query for the operator of a given address for a given token."],["OperatorOfQueryParams","The parameter type for the NFT contract function `CIS2-NFT.operatorOf`."],["OperatorOfQueryResponse","The response which is sent back when calling the contract function `operatorOf`. It consists of the list of results in the same order and length as the queries in the parameter."],["TokenAddress","Full address of a token."],["TokenAmount","CIS-2 token amount with serialization as according to CIS-2."],["TokenId","CIS2 Token ID can be up to 255 bytes in size."],["TokenMetadataQueryParams","The parameter type for the NFT contract function `CIS2-NFT.operatorOf`."],["TokenMetadataQueryResponse","The response which is sent back when calling the contract function `tokenMetadata`. It consists of the list of queries paired with their corresponding result."],["Transfer","A description of a transfer according to the CIS2 specification."],["TransferParams","The parameter type for the NFT contract function `CIS2-NFT.transfer`."],["UpdateOperator",""],["UpdateOperatorParams","The parameter type for the NFT contract function `CIS2-NFT.updateOperator`."]],"type":[["TokenMetadataQuery","A query for token metadata for a given token."]]});