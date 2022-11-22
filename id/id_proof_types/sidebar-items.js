initSidebarItems({"enum":[["AtomicProof","The different types of proofs, corresponding to the statements above."],["AtomicStatement","Statements are composed of one or more atomic statements. This type defines the different types of atomic statements."]],"struct":[["AttributeInRangeStatement","For the case where the verifier wants the user to prove that an attribute is in a range. The statement is that the attribute value lies in `[lower, upper)` in the scalar field."],["AttributeInSetStatement","For the case where the verifier wants the user to prove that an attribute is in a set of attributes."],["AttributeNotInSetStatement","For the case where the verifier wants the user to prove that an attribute is not in a set of attributes."],["Proof","A proof of a statement, composed of one or more atomic proofs."],["RevealAttributeStatement","For the case where the verifier wants the user to show the value of an attribute and prove that it is indeed the value inside the on-chain commitment. Since the verifier does not know the attribute value before seing the proof, the value is not present here."],["Statement","A statement is a list of atomic statements."],["StatementWithContext","A statement with a context is a statement about a credential, the context being the credential."]]});