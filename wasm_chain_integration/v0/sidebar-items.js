initSidebarItems({"constant":[["MAX_EXPORT_NAME_LEN","Maximum length, in bytes, of an export function name."]],"enum":[["Action","Actions produced by running a receive function. NB: The first two variants are deliberately using an Rc as opposed to just inlining the SendAction/SimpleTransferAction. The reason for this is that the variants have quite a big size difference, and we do not wish to allocate 80 bytes for each Accept action, which would happen if we did not use an indirection via an Rc."],["CommonFunc",""],["ImportFunc","Enumeration of allowed imports."],["InitOnlyFunc",""],["InitResult",""],["ReceiveOnlyFunc",""],["ReceiveResult",""]],"fn":[["invoke_init","Invokes an init-function from a given artifact."],["invoke_init_from_artifact","Invokes an init-function from a given artifact bytes"],["invoke_init_from_source","Invokes an init-function from Wasm module bytes"],["invoke_init_with_metering_from_source","Same as `invoke_init_from_source`, except that the module has cost accounting instructions inserted before the init function is called."],["invoke_receive","Invokes an receive-function from a given artifact"],["invoke_receive_from_artifact","Invokes an receive-function from a given artifact bytes"],["invoke_receive_from_source","Invokes an receive-function from Wasm module bytes"],["invoke_receive_with_metering_from_source","Invokes an receive-function from Wasm module bytes, injects the module with metering."]],"struct":[["ConcordiumAllowedImports",""],["InitContext","Chain context accessible to the init methods."],["InitHost",""],["Logs","Structure to support logging of events from smart contracts."],["Outcome","The Default instance of this type constructs an empty list of outcomes."],["ProcessedImports",""],["ReceiveContext","Chain context accessible to the receive methods."],["ReceiveHost",""],["SendAction","Data that accompanies the send action."],["SimpleTransferAction","Data that accompanies the simple transfer action."],["State","Smart contract state."]],"trait":[["HasChainMetadata",""],["HasInitContext","Types which can act as init contexts."],["HasReceiveContext","Types which can act as receive contexts."]],"type":[["OwnedPolicyBytes",""],["PolicyBytes",""]]});