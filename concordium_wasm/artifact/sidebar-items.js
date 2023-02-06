initSidebarItems({"enum":[["InternalOpcode","Internal opcode. This is mostly the same as [`OpCode`], but with control instructions resolved to jumps in the instruction sequence, and function calls processed."]],"struct":[["Artifact","A processed Wasm module. This no longer has custom sections since they are not needed for further processing. The type parameter `ImportFunc` is instantiated with the representation of host functions. To efficiently and relatively safely execute the module we preprocess imported functions into an enum. However for testing we sometimes just use raw imports. This type parameter allows us flexibility."],["ArtifactData","The data segment of the artifact. This is a slightly processed data segment of the module. In contrast to the table we cannot use the same trick of initializing it here. In practice data segments are at high offsets, which would lead to big artifacts. Thus we store it pretty much in the same way that it was when it was part of the source, except we have resolved the offset."],["ArtifactLocal","A local variable declaration in a function. Because we know there are not going to be more than 2^16-1 locals we can store multiplicity more efficiently."],["ArtifactMemory","Memory of the artifact, with initial size, as well as maximum size set. If the maximum size is not part of the original module we set it to the constants::MAX_NUM_PAGES"],["ArtifactNamedImport","An example of a processed import with minimal processing. Useful for testing and experimenting, but not for efficient execution."],["CompiledFunction","A function which has been processed into a form suitable for execution."],["CompiledFunctionBytes","A borrowed variant of CompiledFunction that does not own the body and locals. This is used to make deserialization of artifacts cheaper."],["InstantiatedGlobals","Fully instantiated globals with initial values."],["InstantiatedTable","A fully instantiated table. This is possible because in the Wasm specification we have, the only way to write functions to the table is via the elements section of the module. Since we ensure the table is small enough we can afford to initialize it at compile time."],["Instructions","A sequence of internal opcodes, followed by any immediate arguments."],["LocalsIterator","An iterator over local variables."]],"trait":[["RunnableCode","A trait encapsulating the properties that are needed to run a function. This trait exists because we have two different kinds of code we run. A fully deserialized code, i.e., where instructions are essentially `Vec<InternalOpcode>` or we execute directly from `&[u8]` if the origin of the code is a serialized structure, such as an [`Artifact`] retrieved from a database."],["TryFromImport","Try to process an import into something that is perhaps more suitable for execution, i.e., quicker to resolve."]],"type":[["BorrowedArtifact","Ar artifact which does not own the code to run. The code is only a reference to a byte array."],["CompileResult","Result of compilation. Either Ok(_) or an error indicating the reason."],["OwnedArtifact","An artifact that owns the code to run."]],"union":[["StackValue","Either a short or long integer. The reason this is a union is that after Wasm module validation we are guaranteed that the program is well typed. Since all instructions have clear, fixed types, we can determine from the instruction which value we expect on the stack. Using a union saves on the discriminant compared to using an enum, leading to 50% less space used on the stack, as well as removes the need to handle impossible cases."]]});