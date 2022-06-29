initSidebarItems({"enum":[["AccountStakingInfo",""],["AccountTransactionEffects","Effects of an account transactions. All variants apart from [AccountTransactionEffects::None] correspond to a unique transaction that was successful."],["Address","Either an account or contract address. Some operations are allowed on both types of items, hence the need for this type."],["BakerEvent","Events that may result from the [TransactionType::ConfigureBaker] transaction."],["BlockItemSummaryDetails","Details of a block item summary, split by the kind of block item it is for."],["BlockSummary","Summary of transactions, protocol generated transfers, and chain parameters in a given block."],["ContractTraceElement","A successful contract invocation produces a sequence of effects on smart contracts and possibly accounts (if any contract transfers CCD to an account)."],["ConvertPartsPerHundredThousandsError","An error that may be raised by converting from a `Decimal` to a [`PartsPerHundredThousands`]."],["CredentialType","Enumeration of the types of credentials."],["DelegationEvent","Events that may happen as a result of the [TransactionType::ConfigureDelegation] transaction."],["DelegationTarget",""],["Level1Update","An update with level 1 keys of either level 1 or level 2 keys. Each of the updates must be a separate transaction."],["OpenStatus","The status of whether a baking pool allows delegators to join."],["PoolPendingChange",""],["PoolStatus",""],["ProtocolVersion","An enumeration of the supported versions of the consensus protocol. Binary and JSON serializations are as Word64 corresponding to the protocol number."],["RejectReason","A reason for why a transaction was rejected. Rejected means included in a block, but the desired action was not achieved. The only effect of a rejected transaction is payment."],["RewardsOverview","Information about the state of the CCD distribution at a particular time."],["RootUpdate","An update with root keys of some other set of governance keys, or the root keys themselves. Each update is a separate transaction."],["SpecialTransactionOutcome","In addition to the user initiated transactions the protocol generates some events which are deemed “Special outcomes”. These are rewards for running the consensus and finalization protocols."],["StakePendingChange","Pending change in the baker’s stake."],["TransactionStatus","Status of a transaction known to the node."],["TransactionStatusInBlock","Status of a transaction in a given block. NB: If the transaction is committed or finalized, but not in the given block, then the API response will be `QueryError::NotFound`, hence those cases are not covered by this type."],["TransactionType","Types of account transactions."],["UpdatePayload","The type of an update payload."],["UpdateType","Enumeration of the types of updates that are possible."]],"mod":[["hashes","Different types of hashes based on SHA256."],["network","Network related types."],["queries","Types that appear in various queries of the node."],["smart_contracts","Types related to smart contracts."],["transactions","Definition of transactions and other transaction-like messages, together with their serialization, signing, and similar auxiliary methods."]],"struct":[["AbsoluteBlockHeight","Height of a block since chain genesis."],["AccessStructure","And access structure for performing chain updates. The access structure is only meaningful in the context of a list of update keys to which the indices refer to."],["AccountCreationDetails","Details of an account creation. These transactions are free, and we only ever get a response for them if the account is created, hence no failure cases."],["AccountEncryptedAmount","The state of the encrypted balance of an account."],["AccountIndex","Index of the account in the account table. These are assigned sequentially in the order of creation of accounts. The first account has index 0."],["AccountInfo","Account information exposed via the node’s API. This is always the state of an account in a specific block."],["AccountReleaseSchedule","State of the account’s release schedule. This is the balance of the account that is owned by the account, but cannot be used until the release point."],["AccountThreshold","The minimum number of credentials that need to sign any transaction coming from an associated account."],["AccountTransactionDetails","Details of an account transaction. This always has a sender and is paid for, and it might have some other effects on the state of the chain."],["AmountFraction","A fraction of an amount with a precision of `1/100_000`. The [`FromStr`] instance will parse a decimal fraction with up to `5` decimals."],["AuthorizationsV0","Access structures for each of the different possible chain updates, togehter with the context giving all the possible keys."],["AuthorizationsV1","Access structures for each of the different possible chain updates, togehter with the context giving all the possible keys."],["BakerAddedEvent",""],["BakerAggregationSignKey","FIXME: Move higher up in the dependency"],["BakerAggregationVerifyKey","FIXME: Move higher up in the dependency"],["BakerCredentials","Baker credentials type, which can be serialized to JSON and used by a concordium-node for baking."],["BakerElectionSignKey","FIXME: Move higher up in the dependency"],["BakerElectionVerifyKey","FIXME: Move higher up in the dependency"],["BakerId","Internal short id of the baker."],["BakerInfo","Information about a baker."],["BakerKeyPairs","Baker keys containing both public and secret keys. This is used to construct `BakerKeysPayload` for adding and updating baker keys. It is also used to build the `BakerCredentials` required to have a concordium node running as a baker."],["BakerKeysEvent","Result of a successful change of baker keys."],["BakerParameters",""],["BakerPoolInfo","Additional information about a baking pool. This information is added with the introduction of delegation."],["BakerSignatureSignKey","FIXME: Move higher up in the dependency"],["BakerSignatureVerifyKey","FIXME: Move higher up in the dependency"],["BakerStakeUpdatedData","Data contained in the transaction response in case a baker stake was updated (either increased or decreased.)"],["BirkBaker","State of an individual baker."],["BirkParameters","The state of consensus parameters, and allowed participants (i.e., bakers)."],["BlockHeight","Height of a block. Last genesis block is at height 0, a child of a block at height n is at height n+1. This height counts from the last protocol update."],["BlockItemSummary","Summary of the outcome of a block item in structured form. The summary determines which transaction type it was."],["BlockSummaryData",""],["CapitalBound","A bound on the relative share of the total staked capital that a baker can have as its stake. This is required to be greater than 0."],["ChainParameterVersion0",""],["ChainParameterVersion1",""],["ChainParametersV0","Values of chain parameters that can be updated via chain updates."],["ChainParametersV1","Values of chain parameters that can be updated via chain updates."],["CommissionRanges","Ranges of allowed commission values that pools may choose from."],["CommissionRates",""],["CommonRewardData","Reward data common to both V0 and V1 rewards."],["ContractAddress",""],["ContractIndex","Contract index. The default implementation produces contract index 0."],["ContractInitializedEvent",""],["ContractSubIndex","Contract subindex. The default implementation produces contract index 0."],["CooldownParameters",""],["CredentialRegistrationID","FIXME: Move to somewhere else in the dependency. This belongs to rust-src."],["CredentialsPerBlockLimit",""],["CurrentPaydayBakerPoolStatus",""],["DelegatorId","Internal short id of the delegator."],["DurationSeconds","Duration in seconds."],["ElectionDifficulty",""],["EncryptedAmountRemovedEvent","Event generated when one or more encrypted amounts are consumed from the account."],["EncryptedSelfAmountAddedEvent",""],["Energy","Energy measure."],["Epoch","Epoch number"],["ExchangeRate",""],["FinalizationIndex","Sequential index of finalization."],["FinalizationSummary","Summary of the finalization record in a block, if any."],["FinalizationSummaryParty","Details of a party in a finalization."],["GASRewards","The reward fractions related to the gas account and inclusion of special transactions."],["GenesisIndex","Type indicating the index of a (re)genesis block. The initial genesis block has index `0` and each subsequent regenesis has an incrementally higher index."],["HigherLevelAccessStructure","Either root, level1, or level 2 access structure. They all have the same structure, keys and a threshold. The phantom type parameter is used for added type safety to distinguish different access structures in different contexts."],["InclusiveRange",""],["InstanceUpdatedEvent","Data generated as part of updating a single contract instance. In general a single Update transaction will generate one or more of these events, together with possibly some transfers."],["LeverageFactor",""],["Memo","A data that was registered on the chain."],["MintDistributionV0",""],["MintDistributionV1",""],["MintRate",""],["NewEncryptedAmountEvent","Event generated when an account receives a new encrypted amount."],["Nonce",""],["PartsPerHundredThousands","A fraction between 0 and 1 with a precision of 1/100_000. The `Into<u32>` implementation returns the number of parts per `100_000`."],["PeerStatsResponse",""],["PendingUpdatesV0",""],["PendingUpdatesV1",""],["PoolParameters","Parameters related to staking pools."],["ProtocolUpdate","A generic protocol update. This is essentially an announcement of the update. The details of the update will be communicated in some off-chain way, and bakers will need to update their node software to support the update."],["RegisteredData","A data that was registered on the chain."],["Release","An individual release of a locked balance."],["RewardParametersSkeleton","Values of reward parameters."],["RewardPeriodLength","Length of a reward period in epochs. Must always be a strictly positive integer."],["ScheduledUpdate","A scheduled update of a given type."],["Slot","Slot number"],["SlotDuration","Duration of a slot in milliseconds."],["TimeParameters","The time parameters are introduced as of protocol version 4, and consist of the reward period length and the mint rate per payday. These are coupled as a change to either affects the overall rate of minting."],["TooBig","An error used to signal that an object was too big to be converted."],["TooLargeError","Registered data is too large."],["TransactionFeeDistribution","Update the transaction fee distribution to the specified value."],["TransactionIndex","Position of the transaction in a block."],["UnknownProtocolVersion","A structure to represent conversion errors when converting integers to protocol versions."],["UpdateDetails","Details of an update instruction. These are free, and we only ever get a response for them if the update is successfully enqueued, hence no failure cases."],["UpdateKeyPair","A ed25519 keypair. This is available in the `ed25519::dalek` crate, but the JSON serialization there is not compatible with what we use, so we redefine it there."],["UpdateKeysCollectionSkeleton","The current collection of keys allowed to do updates. Parametrized by the chain parameter version."],["UpdateKeysIndex",""],["UpdateKeysThreshold",""],["UpdatePublicKey","A single public key that can sign updates."],["UpdateQueue","A queue of updates of a given type."],["UpdateSequenceNumber","Equivalent of a transaction nonce but for update instructions. Update sequence numbers are per update type."],["UpdatesSkeleton","State of updates. This includes current values of parameters as well as any scheduled updates."],["UrlText","A unicode representation of a Url. The Utf8 encoding of the Url must be at most `MAX_URL_TEXT_LENGTH` bytes."],["ZeroSignatureThreshold","An error type that indicates that a 0 attempted to be used as a signature threshold."]],"trait":[["AuthorizationsFamily",""],["ChainParametersFamily",""],["MintDistributionFamily",""],["PendingUpdatesFamily",""]],"type":[["AggregateSigPairing",""],["Authorizations",""],["ChainParameters",""],["MintDistribution",""],["PendingUpdates",""],["RewardParameters",""],["UpdateKeysCollection",""],["Updates","State of updates. This includes current values of parameters as well as any scheduled updates."]]});