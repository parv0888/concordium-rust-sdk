initSidebarItems({"enum":[["ParseError",""],["SectionId","All supported section IDs as specified by the Web assembly specification."]],"fn":[["decode_opcode","Decode the next opcode directly from the cursor."],["parse_custom","Parse a custom section."],["parse_sec_with_default",""],["parse_skeleton","Try to parse the input as a Wasm module in binary format. This function ensures"]],"struct":[["CodeSkeleton","The body of a function."],["CodeSkeletonSection","The Default instance of this type returns an empty code section."],["OpCodeIterator",""],["Skeleton","Skeleton of a module, which is a list of sections that are minimally processed."],["UnparsedSection","A section carved out of a module, but with no further processing. It can be serialized back by writing the section ID and bytes together with the length. The lifetime is the lifetime of the original byte array this section was carved from."]],"trait":[["GetParseable","A helper trait for more convenient use. The difference from the above is that typically the result type is determined by the context, which we take advantage of to reduce the need for typing annotations which would be needed by the Parseable trait."],["Parseable","A trait for parsing data. The lifetime is useful when we want to parse data without copying, which is useful to avoid copying all the unparsed sections."]],"type":[["Byte","Core datatypes."],["ParseResult","Auxiliary type alias used by all the parsing functions."]]});