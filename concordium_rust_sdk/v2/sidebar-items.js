initSidebarItems({"enum":[["AccountIdentifier","An account identifier used in queries."],["BlockIdentifier","A block identifier used in queries."],["ChainParameters","Chain parameters. See [`ChainParametersV0`] and [`ChainParametersV1`] for details. `V0` parameters apply to protocol version `1..=3`, and `V1` parameters apply to protocol versions `4` and up."]],"struct":[["ChainParametersV0","Values of chain parameters that can be updated via chain updates. This applies to protocol version 1-3."],["ChainParametersV1","Values of chain parameters that can be updated via chain updates. This applies to protocol version 4 and up."],["Client","A client for gRPC API v2 of the Concordium node. Can be used to control the node, send transactions and query information about the node and the state of the chain."],["Endpoint","Channel builder."],["FinalizedBlockInfo","Information of a finalized block."],["FinalizedBlocksStream","A stream of finalized blocks. This contains a background task that polls for new finalized blocks indefinitely. The task can be stopped by dropping the object."],["QueryResponse","A query response with the addition of the block hash used by the query. The block hash used for querying might be unknown when providing the block as [BlockIdentifier::Best] or [BlockIdentifier::LastFinal]."],["Status","A gRPC status describing the result of an RPC call."]],"trait":[["IntoBlockIdentifier","A helper trait that is implemented by types that can be cheaply converted to a [`BlockIdentifier`]. This is esentially [`Into<BlockIdentifier>`] but orphan rules prevent using that exactly."]]});