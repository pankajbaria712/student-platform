export const theoryOfComputationViva = [
{
chapterNumber: 1,
chapterName: "Review of Mathematical Theory",
questions: [
{
question: "What is a Set in mathematical theory?",
answer: "A set is a well-defined collection of distinct objects or elements. These objects can be anything like numbers, symbols, or even other sets, and the order of elements does not matter."
},
{
question: "What is a Power Set?",
answer: "The power set of a set S is the set of all possible subsets of S, including the empty set and the set itself. If a set has n elements, its power set has 2^n elements."
},
{
question: "Define a Relation.",
answer: "A relation between two sets A and B is a subset of their Cartesian product A × B. It describes a connection or mapping between elements of set A and elements of set B."
},
{
question: "What is an Equivalence Relation?",
answer: "An equivalence relation is a binary relation that is reflexive, symmetric, and transitive. It partitions a set into disjoint equivalence classes."
},
{
question: "Define an Injective (One-to-One) Function.",
answer: "A function is injective if every element in the codomain is mapped to by at most one element in the domain. No two different domain elements share the same image."
},
{
question: "What is a Bijective Function?",
answer: "A bijective function is a function that is both injective (one-to-one) and surjective (onto). It establishes a perfect one-to-one correspondence between the domain and codomain."
},
{
question: "What is an Alphabet in Theory of Computation?",
answer: "An alphabet (denoted by Σ) is a finite, non-empty set of basic symbols or characters, such as {0, 1} or {a, b, c}, from which strings are formed."
},
{
question: "What is a String over an alphabet?",
answer: "A string is a finite sequence of symbols chosen from a specific alphabet. The empty string (denoted by ε or Λ) is a string with zero occurrences of symbols."
},
{
question: "Define a Language in theoretical computer science.",
answer: "A language is a set of strings formed from a specific alphabet. It can be finite or infinite. For example, the set of all binary strings ending in '0' is a language over {0,1}."
},
{
question: "What is the Principle of Mathematical Induction (PMI)?",
answer: "PMI is a proof technique used to prove that a statement holds for all natural numbers. It consists of a base case (proving for n=0 or 1) and an inductive step (assuming true for k, proving for k+1)."
},
{
question: "What is the Strong Principle of Mathematical Induction?",
answer: "Strong induction is a variant of PMI where, in the inductive step, you assume the statement is true for all integers less than or equal to k, and then prove it for k+1."
},
{
question: "What is a Recursive Definition?",
answer: "A recursive definition defines a mathematical object (like a set, sequence, or function) in terms of itself. It contains base rules and recursive rules to generate new elements from existing ones."
},
{
question: "What is Structural Induction?",
answer: "Structural induction is a generalized proof technique used to prove properties about recursively defined structures, such as trees or logical formulas, by showing the property holds under recursive construction."
},
{
question: "What is a Logical Statement (Proposition)?",
answer: "A logical statement is a declarative sentence that is either true or false, but not both. It forms the basis of propositional logic used in formal proofs."
},
{
question: "What is Proof by Contradiction?",
answer: "Proof by contradiction is a logical method where you assume the opposite of what you want to prove, and show that this assumption leads to a logical impossibility or contradiction."
},
{
question: "What is the Cartesian Product of two sets?",
answer: "The Cartesian product of sets A and B (A × B) is the set of all ordered pairs (a, b) where 'a' is an element of A and 'b' is an element of B."
},
{
question: "What does the closure of a relation mean?",
answer: "The closure of a relation with respect to a property (like transitivity) is the smallest relation containing the original relation that also possesses that specific property."
},
{
question: "What is the difference between a Partial and Total Function?",
answer: "A total function maps every element in the domain to an element in the codomain. A partial function may leave some domain elements unmapped."
},
{
question: "What is an empty language vs an empty string?",
answer: "An empty language is a set containing no strings at all (∅). The empty string (ε) is a valid string with a length of zero. A language containing only the empty string is not an empty language."
},
{
question: "What is the Kleene Star closure of a set of strings?",
answer: "The Kleene Star (Σ*) represents the set of all possible strings of any finite length that can be formed from the symbols in the alphabet Σ, including the empty string."
}
],
mcqs: [
{
question: "If a set S has 3 elements, how many elements does its Power Set have?",
options: ["3", "6", "8", "9"],
correctAnswer: "8"
},
{
question: "A relation R on set A is called symmetric if:",
options: ["(a,b)∈R implies (b,a)∈R", "(a,a)∈R for all a∈A", "(a,b)∈R and (b,c)∈R implies (a,c)∈R", "It maps every element to itself"],
correctAnswer: "(a,b)∈R implies (b,a)∈R"
},
{
question: "Which of the following functions maps distinct elements of its domain to distinct elements of its codomain?",
options: ["Surjective", "Injective", "Constant", "Identity"],
correctAnswer: "Injective"
},
{
question: "The length of the empty string (ε) is:",
options: ["Undefined", "1", "0", "Infinite"],
correctAnswer: "0"
},
{
question: "Which proof technique assumes a statement is true for n=k to prove it for n=k+1?",
options: ["Proof by Contradiction", "Mathematical Induction", "Direct Proof", "Proof by Exhaustion"],
correctAnswer: "Mathematical Induction"
},
{
question: "A declarative sentence that is either true or false is known as a:",
options: ["Function", "Relation", "Logical Statement", "Variable"],
correctAnswer: "Logical Statement"
},
{
question: "What denotes the set of all strings of length exactly 2 over alphabet Σ?",
options: ["Σ*", "Σ+", "Σ^2", "2Σ"],
correctAnswer: "Σ^2"
},
{
question: "An equivalence relation must be:",
options: ["Reflexive, Symmetric, Transitive", "Reflexive, Antisymmetric, Transitive", "Irreflexive, Symmetric, Transitive", "Reflexive, Asymmetric, Transitive"],
correctAnswer: "Reflexive, Symmetric, Transitive"
},
{
question: "Which of the following represents an empty language?",
options: ["{ε}", "ε", "∅", "{∅}"],
correctAnswer: "∅"
},
{
question: "A function that is both injective and surjective is called:",
options: ["Partial", "Bijective", "Transitive", "Reflexive"],
correctAnswer: "Bijective"
},
{
question: "What is the base case in Mathematical Induction typically?",
options: ["n = k", "n = k+1", "n = 0 or 1", "n = infinity"],
correctAnswer: "n = 0 or 1"
},
{
question: "The Cartesian Product of A={1} and B={a,b} is:",
options: ["{(1,a), (1,b)}", "{1, a, b}", "{(a,1), (b,1)}", "{(1,a,b)}"],
correctAnswer: "{(1,a), (1,b)}"
},
{
question: "Structural induction is primarily used for proving properties of:",
options: ["Continuous functions", "Real numbers", "Recursively defined structures", "Random variables"],
correctAnswer: "Recursively defined structures"
},
{
question: "If A is a subset of B, then A ∪ B is equal to:",
options: ["A", "B", "∅", "A ∩ B"],
correctAnswer: "B"
},
{
question: "A logical statement that is always true regardless of the truth values of its variables is a:",
options: ["Contradiction", "Tautology", "Contingency", "Fallacy"],
correctAnswer: "Tautology"
},
{
question: "Which relation property defines a Partial Order along with Reflexive and Transitive?",
options: ["Symmetric", "Asymmetric", "Antisymmetric", "Irreflexive"],
correctAnswer: "Antisymmetric"
},
{
question: "The transitive closure of a relation R is the smallest transitive relation containing:",
options: ["∅", "Symmetric pairs", "R", "Equivalence classes"],
correctAnswer: "R"
},
{
question: "How many strings are in the language {a, b}^3?",
options: ["6", "8", "9", "12"],
correctAnswer: "8"
},
{
question: "Which operator is used to denote the Kleene closure?",
options: ["+", "*", "^", "!"],
correctAnswer: "*"
},
{
question: "If f(x) = x^2 maps real numbers to real numbers, the function is:",
options: ["Injective", "Surjective", "Bijective", "None of the above"],
correctAnswer: "None of the above"
}
]
},
{
chapterNumber: 2,
chapterName: "Regular Languages and Finite Automata",
questions: [
{
question: "What is a Finite Automaton (FA)?",
answer: "A finite automaton is a mathematical model of computation consisting of a finite set of states and transitions. It reads an input string symbol by symbol and changes states, ultimately accepting or rejecting the string."
},
{
question: "What is a Deterministic Finite Automaton (DFA)?",
answer: "A DFA is a finite automaton where, for every state and every input symbol, there is exactly one designated transition to a next state. It has no choices or randomness."
},
{
question: "What is a Non-Deterministic Finite Automaton (NFA)?",
answer: "An NFA is an automaton where a single state can have zero, one, or multiple transitions for a given input symbol. It can be simultaneously in multiple states."
},
{
question: "What is the difference between a Moore machine and a Mealy machine?",
answer: "Both are finite state machines with output. In a Moore machine, the output depends only on the current state. In a Mealy machine, the output depends on both the current state and the current input symbol."
},
{
question: "What is a Regular Expression (RE)?",
answer: "A regular expression is an algebraic formula used to define a regular language. It uses operators like union (+), concatenation (.), and Kleene star (*) to build patterns matching strings."
},
{
question: "What is a Regular Language?",
answer: "A regular language is a language that can be defined by a regular expression, or equivalently, accepted by a Deterministic or Non-Deterministic Finite Automaton."
},
{
question: "What does Kleene's Theorem state?",
answer: "Kleene's Theorem proves that any language that can be defined by a regular expression can be accepted by a finite automaton, and vice-versa, establishing their equivalence."
},
{
question: "What is an NFA with ε-transitions (NFA-Λ)?",
answer: "It is an NFA that allows state transitions without consuming any input symbol, utilizing the empty string (ε or Λ). This makes constructing complex automata easier without adding computational power."
},
{
question: "Are regular languages closed under union and intersection?",
answer: "Yes, regular languages are closed under union, intersection, complement, concatenation, and Kleene star. Performing these operations on regular languages yields another regular language."
},
{
question: "What is the Pumping Lemma for Regular Languages?",
answer: "The Pumping Lemma is a mathematical theorem used strictly to prove that a specific language is NOT regular. It states that any sufficiently long string in a regular language can be 'pumped' (a middle section repeated) while remaining in the language."
},
{
question: "How do you convert an NFA to a DFA?",
answer: "An NFA is converted to a DFA using the Subset Construction algorithm, where each state in the new DFA represents a subset of states from the original NFA."
},
{
question: "Why do we minimize a Finite Automaton?",
answer: "Minimization reduces the number of states in a DFA to its absolute minimum while accepting the exact same language. This optimizes memory and simplifies hardware/software implementation."
},
{
question: "What is the transition function in a DFA?",
answer: "The transition function (δ) in a DFA takes a current state and an input symbol as parameters and maps them strictly to one single next state: δ: Q × Σ → Q."
},
{
question: "How does a Moore machine define its output?",
answer: "The output function in a Moore machine maps a state directly to an output alphabet symbol. Therefore, the length of the output string is always one greater than the input string length."
},
{
question: "What happens if a DFA reaches a final state when the input ends?",
answer: "If the DFA halts in a state belonging to the set of accepting (final) states after processing the entire input string, the input string is said to be 'accepted' by the automaton."
},
{
question: "Can an NFA solve problems that a DFA cannot?",
answer: "No. DFAs and NFAs possess exactly the same computational power. Every NFA can be converted into an equivalent DFA that accepts the same regular language."
},
{
question: "What is the memory requirement for a finite automaton recognizer?",
answer: "A finite automaton requires extremely limited, fixed memory; it only needs enough memory to remember its current state, having no external memory like stacks or tapes."
},
{
question: "Provide an example of an application of Finite Automata.",
answer: "Applications include lexical analysis in compilers, text search algorithms (like regex engines), designing digital logic circuits, and network protocol state machines."
},
{
question: "What is a trap state (or dead state) in a DFA?",
answer: "A trap state is a non-accepting state with transitions pointing only to itself for all input symbols. It is used to reject invalid strings permanently."
},
{
question: "How is the complement of a regular language constructed using a DFA?",
answer: "To construct the complement of a regular language, you take its DFA and simply swap the accepting states with the non-accepting states, and vice versa."
}
],
mcqs: [
{
question: "A Deterministic Finite Automaton (DFA) is defined by how many tuples?",
options: ["4", "5", "6", "7"],
correctAnswer: "5"
},
{
question: "In a Moore machine, the output is associated with:",
options: ["Current Input only", "State and Input", "State only", "Previous state"],
correctAnswer: "State only"
},
{
question: "In a Mealy machine, the output depends on:",
options: ["State only", "Input only", "Both Current State and Input", "Next State"],
correctAnswer: "Both Current State and Input"
},
{
question: "Which of the following is used to prove that a language is NOT regular?",
options: ["Kleene's Theorem", "Pumping Lemma", "Subset Construction", "Myhill-Nerode Theorem"],
correctAnswer: "Pumping Lemma"
},
{
question: "If an NFA has 'n' states, what is the maximum number of states the equivalent DFA can have?",
options: ["n", "n^2", "2^n", "n!"],
correctAnswer: "2^n"
},
{
question: "Regular languages are closed under which of the following operations?",
options: ["Union", "Intersection", "Complement", "All of the above"],
correctAnswer: "All of the above"
},
{
question: "Which operator represents zero or more occurrences in regular expressions?",
options: ["+", ".", "*", "?"],
correctAnswer: "*"
},
{
question: "What is the equivalent regular expression for the language containing only the empty string?",
options: ["∅", "ε", "Σ*", "ε*"],
correctAnswer: "ε"
},
{
question: "A state from which there is no path to a final state is called a:",
options: ["Start state", "Trap state", "Accepting state", "Initial state"],
correctAnswer: "Trap state"
},
{
question: "Which automaton allows transitions without reading any input symbol?",
options: ["DFA", "Moore Machine", "Mealy Machine", "NFA with ε-transitions"],
correctAnswer: "NFA with ε-transitions"
},
{
question: "Which theorem proves the equivalence of finite automata and regular expressions?",
options: ["Pumping Lemma", "Chomsky Theorem", "Kleene's Theorem", "Turing Theorem"],
correctAnswer: "Kleene's Theorem"
},
{
question: "The process of reducing the number of states in a DFA is called:",
options: ["State Minimization", "NFA Conversion", "Pumping", "Subset Construction"],
correctAnswer: "State Minimization"
},
{
question: "In a DFA, for a given state and input symbol, how many transitions can exist?",
options: ["Exactly 1", "0 or 1", "More than 1", "Infinite"],
correctAnswer: "Exactly 1"
},
{
question: "For a Mealy machine processing a string of length 'n', the output string length is:",
options: ["n-1", "n", "n+1", "2n"],
correctAnswer: "n"
},
{
question: "Which machine typically requires fewer states to model the same logic?",
options: ["Moore Machine", "Mealy Machine", "DFA", "None"],
correctAnswer: "Mealy Machine"
},
{
question: "What defines the transition function for an NFA?",
options: ["Q × Σ → Q", "Q × Σ → 2^Q", "Q × Σ → Σ", "2^Q × Σ → Q"],
correctAnswer: "Q × Σ → 2^Q"
},
{
question: "If a language L is regular, then its complement L' is:",
options: ["Context-Free", "Not Regular", "Regular", "Recursively Enumerable"],
correctAnswer: "Regular"
},
{
question: "The intersection of two regular languages results in a language that is:",
options: ["Context-Free", "Non-Regular", "Regular", "Undecidable"],
correctAnswer: "Regular"
},
{
question: "Which part of a compiler heavily utilizes Finite Automata?",
options: ["Syntax Analyzer", "Lexical Analyzer", "Semantic Analyzer", "Code Optimizer"],
correctAnswer: "Lexical Analyzer"
},
{
question: "What string does the regular expression a*b* match?",
options: ["Only ab", "Any string of a's followed by b's", "Exactly one a and multiple b's", "Alternating a's and b's"],
correctAnswer: "Any string of a's followed by b's"
}
]
},
{
chapterNumber: 3,
chapterName: "Context Free Grammar (CFG)",
questions: [
{
question: "What is a Context-Free Grammar (CFG)?",
answer: "A CFG is a formal grammar consisting of a set of rules where a single non-terminal symbol on the left side is rewritten as a string of terminals and/or non-terminals on the right side."
},
{
question: "What are the four components of a CFG?",
answer: "A CFG is a 4-tuple (V, Σ, R, S) where V is a set of Variables (non-terminals), Σ is a set of Terminals, R is a finite set of Production Rules, and S is the Start symbol."
},
{
question: "What is a Terminal symbol?",
answer: "Terminal symbols are the basic, immutable symbols from which strings in the language are formed. They cannot be replaced by other symbols in production rules."
},
{
question: "What is a Non-Terminal symbol?",
answer: "Non-terminals (or variables) are placeholders that can be replaced by a sequence of terminals and non-terminals according to the production rules of the grammar."
},
{
question: "What is a Derivation?",
answer: "A derivation is a sequence of rule applications that transforms the start symbol into a final string of terminal symbols, showing how a string belongs to the language."
},
{
question: "What is the difference between Leftmost and Rightmost derivations?",
answer: "In a leftmost derivation, the leftmost non-terminal is always expanded first in every step. In a rightmost derivation, the rightmost non-terminal is expanded first."
},
{
question: "What is a Parse Tree?",
answer: "A parse tree is a graphical, hierarchical representation of a derivation. The root is the start symbol, interior nodes are non-terminals, and the leaves are terminal symbols."
},
{
question: "When is a CFG considered Ambiguous?",
answer: "A CFG is ambiguous if there exists at least one string in the language that has more than one distinct leftmost derivation, or equivalently, more than one distinct parse tree."
},
{
question: "What is Inherent Ambiguity?",
answer: "A context-free language is inherently ambiguous if every possible context-free grammar that generates that specific language is ambiguous; no unambiguous grammar exists for it."
},
{
question: "What is Chomsky Normal Form (CNF)?",
answer: "CNF is a restricted form of a CFG where every production rule must be either A → BC (a non-terminal producing two non-terminals) or A → a (a non-terminal producing one terminal)."
},
{
question: "What is Backus-Naur Form (BNF)?",
answer: "BNF is a formal notation syntax used to express context-free grammars. It is widely used to specify the syntax of programming languages, using symbols like ::= for production."
},
{
question: "What is a Regular Grammar?",
answer: "A regular grammar is a highly restricted CFG that generates a regular language. Production rules must be right-linear (A → aB or A → a) or left-linear (A → Ba or A → a)."
},
{
question: "How do CFGs relate to Context-Free Languages (CFLs)?",
answer: "A language is called a Context-Free Language if and only if there exists a Context-Free Grammar capable of generating all strings in that language."
},
{
question: "Can every Regular Language be generated by a CFG?",
answer: "Yes, every regular language is also a context-free language. A regular grammar is a subset of context-free grammars, so a CFG can be written for any regular language."
},
{
question: "Are Context-Free Languages closed under Union and Concatenation?",
answer: "Yes, Context-Free Languages are closed under union, concatenation, and Kleene star operations. Combining two CFLs using these operations yields another CFL."
},
{
question: "How do you remove ambiguity from a grammar?",
answer: "Ambiguity is usually removed by introducing new non-terminals to enforce precedence and associativity rules (e.g., adding Term and Factor variables for arithmetic expressions)."
},
{
question: "What is an Algebraic Expression in the context of CFGs?",
answer: "CFGs are commonly used to define the syntax of algebraic expressions, handling operator precedence and parentheses structure correctly through layered non-terminal rules."
},
{
question: "What is a unit production?",
answer: "A unit production is a rule of the form A → B, where one non-terminal produces exactly one other non-terminal. These are usually eliminated when converting a CFG to normal forms."
},
{
question: "What is an epsilon production (ε-production)?",
answer: "An ε-production is a rule of the form A → ε, meaning a non-terminal can derive the empty string. They are eliminated to simplify the grammar for standard algorithms."
},
{
question: "What is the yield of a parse tree?",
answer: "The yield of a parse tree is the string formed by concatenating all the leaf nodes (terminals) of the tree from left to right."
}
],
mcqs: [
{
question: "A Context-Free Grammar is defined by how many tuples?",
options: ["3", "4", "5", "7"],
correctAnswer: "4"
},
{
question: "In a CFG production A → α, the left-hand side 'A' must be a:",
options: ["Terminal", "String of terminals", "Single Non-Terminal", "Empty string"],
correctAnswer: "Single Non-Terminal"
},
{
question: "A grammar that produces more than one parse tree for some string is called:",
options: ["Unambiguous", "Regular", "Ambiguous", "Context-Sensitive"],
correctAnswer: "Ambiguous"
},
{
question: "Which of the following forms restrict rules to A → BC or A → a?",
options: ["Greibach Normal Form", "Chomsky Normal Form", "Backus-Naur Form", "Kuroda Normal Form"],
correctAnswer: "Chomsky Normal Form"
},
{
question: "In a parse tree, leaf nodes always represent:",
options: ["Variables", "Non-terminals", "Terminals", "Start symbols"],
correctAnswer: "Terminals"
},
{
question: "The rule S → aS | ε represents a grammar that is:",
options: ["Right-linear (Regular)", "Left-linear", "Context-Sensitive", "Unrestricted"],
correctAnswer: "Right-linear (Regular)"
},
{
question: "Context-Free Languages are closed under:",
options: ["Union", "Intersection", "Complement", "All of the above"],
correctAnswer: "Union"
},
{
question: "Which operation is NOT guaranteed to be closed for Context-Free Languages?",
options: ["Union", "Concatenation", "Kleene Star", "Intersection"],
correctAnswer: "Intersection"
},
{
question: "A derivation that always replaces the leftmost non-terminal is called:",
options: ["Rightmost derivation", "Leftmost derivation", "Top-down derivation", "Bottom-up derivation"],
correctAnswer: "Leftmost derivation"
},
{
question: "BNF stands for:",
options: ["Basic Normal Form", "Binary Natural Form", "Backus-Naur Form", "Boolean Naming Format"],
correctAnswer: "Backus-Naur Form"
},
{
question: "If a language cannot be parsed unambiguously by any grammar, it is:",
options: ["Regular", "Inherently ambiguous", "Deterministic", "Finite"],
correctAnswer: "Inherently ambiguous"
},
{
question: "Which phase of a compiler utilizes Context-Free Grammars?",
options: ["Lexical Analysis", "Syntax Analysis (Parsing)", "Code Generation", "Optimization"],
correctAnswer: "Syntax Analysis (Parsing)"
},
{
question: "The grammar S → SS | a | b is an example of:",
options: ["An unambiguous grammar", "An ambiguous grammar", "A regular grammar", "A Chomsky Normal Form grammar"],
correctAnswer: "An ambiguous grammar"
},
{
question: "A production of the form A → B is known as:",
options: ["Epsilon production", "Unit production", "Terminal production", "Null production"],
correctAnswer: "Unit production"
},
{
question: "To convert a CFG to Chomsky Normal Form, what must be eliminated first?",
options: ["Terminals", "Epsilon and Unit productions", "Start symbol", "Right-hand sides"],
correctAnswer: "Epsilon and Unit productions"
},
{
question: "Which class of grammar corresponds to Type-2 in the Chomsky Hierarchy?",
options: ["Regular Grammar", "Context-Free Grammar", "Context-Sensitive Grammar", "Unrestricted Grammar"],
correctAnswer: "Context-Free Grammar"
},
{
question: "In CNF, if the length of a generated string is 'n', the parse tree requires how many steps?",
options: ["n", "2n - 1", "n^2", "2^n"],
correctAnswer: "2n - 1"
},
{
question: "Every regular grammar is also a:",
options: ["Context-Free Grammar", "Context-Sensitive Grammar", "Unrestricted Grammar", "All of the above"],
correctAnswer: "All of the above"
},
{
question: "In a parse tree, interior nodes are always:",
options: ["Terminals", "Epsilon", "Non-terminals", "Strings"],
correctAnswer: "Non-terminals"
},
{
question: "A language that requires matching parentheses, like {a^n b^n}, is generated by:",
options: ["Regular Grammars", "Context-Free Grammars", "Finite Automata", "Mealy Machines"],
correctAnswer: "Context-Free Grammars"
}
]
},
{
chapterNumber: 4,
chapterName: "Pushdown Automata, CFL And NCFL",
questions: [
{
question: "What is a Pushdown Automaton (PDA)?",
answer: "A PDA is a computational model that extends a Finite Automaton by adding a stack (LIFO memory). This infinite memory allows it to recognize Context-Free Languages that FAs cannot."
},
{
question: "What are the 7 tuples of a Pushdown Automaton?",
answer: "A PDA is defined as (Q, Σ, Γ, δ, q0, Z0, F) where Γ is the stack alphabet and Z0 is the initial stack symbol, with other symbols matching standard finite automata."
},
{
question: "What is the function of the stack in a PDA?",
answer: "The stack provides infinite LIFO memory. It allows the PDA to count and match nested structures, such as ensuring the number of a's equals the number of b's in the string a^n b^n."
},
{
question: "What is a Deterministic PDA (DPDA)?",
answer: "A DPDA is a pushdown automaton where, for every state, input symbol (or ε), and stack top, there is at most one valid transition. It processes without ambiguity or guessing."
},
{
question: "What is a Non-Deterministic PDA (NPDA)?",
answer: "An NPDA allows multiple transition choices for a given state, input, and stack top. Unlike finite automata, NPDA is strictly more powerful than DPDA."
},
{
question: "Are NPDA and DPDA equivalent in computational power?",
answer: "No. NPDAs accept the entire class of Context-Free Languages (CFLs), whereas DPDAs only accept a subset known as Deterministic Context-Free Languages (DCFLs)."
},
{
question: "What are the two ways a PDA can accept a language?",
answer: "A PDA can accept strings either by reaching a designated Final State after reading the input, or by emptying its Stack completely at the end of the input (Empty Stack acceptance)."
},
{
question: "What is the equivalence of CFG and PDA?",
answer: "It is a foundational theorem that states for every Context-Free Grammar, there is an equivalent Pushdown Automaton that accepts the same language, and vice-versa."
},
{
question: "What is the Pumping Lemma for Context-Free Languages?",
answer: "The Pumping Lemma for CFLs is a mathematical tool used to prove a language is NOT context-free. It splits a string into 5 parts (uvwxy) and asserts that v and y can be pumped simultaneously."
},
{
question: "What are the conditions of the uvwxy split in the CFL Pumping Lemma?",
answer: "The string is split such that |vwx| ≤ n, |vy| ≥ 1, and for all i ≥ 0, the string u(v^i)w(y^i)x must also belong to the language."
},
{
question: "Why are CFLs NOT closed under intersection?",
answer: "Because intersecting two valid CFLs (like L1: a^n b^n c^m and L2: a^m b^n c^n) can yield a Non-CFL (like L3: a^n b^n c^n) which a single PDA stack cannot count."
},
{
question: "Why are CFLs NOT closed under complement?",
answer: "By De Morgan's laws, if CFLs were closed under complement and union, they would also be closed under intersection. Since they are not closed under intersection, they cannot be closed under complement."
},
{
question: "What is a Non-Context-Free Language (NCFL)?",
answer: "An NCFL is a language that cannot be generated by a CFG or recognized by a PDA. These languages require more advanced memory (like a Turing Machine). Example: {a^n b^n c^n}."
},
{
question: "Why can't a PDA accept {a^n b^n c^n}?",
answer: "A PDA uses a single LIFO stack. It can push 'a's and pop them to match 'b's, but once the stack is empty, it has lost the count 'n' and cannot verify the correct number of 'c's."
},
{
question: "How do you convert a CFG to a PDA?",
answer: "You construct an NPDA with a single state that pushes the start symbol onto the stack. It then nondeterministically expands non-terminals and matches terminals against the input string."
},
{
question: "What does a transition δ(q, a, X) = (p, YZ) mean in a PDA?",
answer: "It means if the PDA is in state q, reads input 'a', and the stack top is 'X', it transitions to state p, pops 'X', and pushes 'Z' followed by 'Y' onto the stack."
},
{
question: "What is an Instantaneous Description (ID) of a PDA?",
answer: "An ID is a snapshot of the PDA's current configuration, represented as (q, w, α), where q is the state, w is the unread input, and α is the current stack content."
},
{
question: "Are Deterministic Context-Free Languages closed under complement?",
answer: "Yes, interestingly, unlike general CFLs, the subset of Deterministic Context-Free Languages (accepted by DPDAs) is closed under complementation."
},
{
question: "What kind of grammar corresponds to a DPDA?",
answer: "A DPDA corresponds to an unambiguous grammar, specifically languages that can be parsed deterministically, such as those parsed by LR(k) parsers in modern compilers."
},
{
question: "What is the language {ww^R}?",
answer: "It is the language of even-length palindromes (a string w followed by its reverse). It requires an NPDA because the midpoint is not marked, forcing the PDA to guess where to start popping."
}
],
mcqs: [
{
question: "A Pushdown Automaton (PDA) is basically a Finite Automaton with:",
options: ["A Tape", "A Stack", "A Queue", "Two Registers"],
correctAnswer: "A Stack"
},
{
question: "How many tuples are used to formally define a PDA?",
options: ["5", "6", "7", "8"],
correctAnswer: "7"
},
{
question: "Which of the following languages is recognized by a PDA but NOT by an FA?",
options: ["a*b*", "a^n b^n", "(ab)*", "a^+ b^+"],
correctAnswer: "a^n b^n"
},
{
question: "Are DPDA and NPDA equivalent in their computational power?",
options: ["Yes", "No", "Depends on the alphabet", "Only for finite languages"],
correctAnswer: "No"
},
{
question: "The Pumping Lemma for Context-Free Languages breaks a string into how many parts?",
options: ["3 (xyz)", "4 (uvwx)", "5 (uvwxy)", "2 (xy)"],
correctAnswer: "5 (uvwxy)"
},
{
question: "Which of the following is an example of a Non-Context-Free Language?",
options: ["a^n b^n", "a^n b^m", "a^n b^n c^n", "ww^R (Palindromes)"],
correctAnswer: "a^n b^n c^n"
},
{
question: "Context-Free Languages are NOT closed under:",
options: ["Union", "Concatenation", "Intersection", "Kleene Star"],
correctAnswer: "Intersection"
},
{
question: "A PDA can accept an input string by:",
options: ["Final State", "Empty Stack", "Both Final State and Empty Stack mechanisms", "Halting abruptly"],
correctAnswer: "Both Final State and Empty Stack mechanisms"
},
{
question: "What symbol commonly denotes the initial element on a PDA stack?",
options: ["ε", "Z0", "$", "#"],
correctAnswer: "Z0"
},
{
question: "Which parser class directly correlates to languages accepted by a DPDA?",
options: ["LL parsers", "Regex engines", "Turing engines", "Finite state machines"],
correctAnswer: "LL parsers"
},
{
question: "In the Pumping Lemma for CFLs (uvwxy), which condition must hold true?",
options: ["|vy| > 0", "|vwx| > n", "|uvw| = 0", "|xy| = 0"],
correctAnswer: "|vy| > 0"
},
{
question: "The language of palindromes with a marked center (w c w^R) can be recognized by a:",
options: ["DFA", "DPDA", "NFA", "None of the above"],
correctAnswer: "DPDA"
},
{
question: "The language of palindromes without a marked center (w w^R) requires a:",
options: ["DFA", "DPDA", "NPDA", "Mealy Machine"],
correctAnswer: "NPDA"
},
{
question: "The intersection of a Context-Free Language and a Regular Language is always:",
options: ["Regular", "Context-Free", "Non-Context-Free", "Undecidable"],
correctAnswer: "Context-Free"
},
{
question: "What does the stack memory of a PDA operate on?",
options: ["First In First Out (FIFO)", "Last In First Out (LIFO)", "Random Access", "Sequential Access"],
correctAnswer: "Last In First Out (LIFO)"
},
{
question: "When converting a CFG to a PDA, the PDA primarily utilizes:",
options: ["Deterministic transitions", "Non-deterministic transitions", "No stack operations", "Two stacks"],
correctAnswer: "Non-deterministic transitions"
},
{
question: "If L1 and L2 are CFLs, then L1 ∪ L2 is:",
options: ["Always Regular", "Always Context-Free", "Always Context-Sensitive", "Never Context-Free"],
correctAnswer: "Always Context-Free"
},
{
question: "The memory of a PDA is:",
options: ["Strictly finite", "Infinite but restricted to LIFO access", "Infinite with random access", "Read-only"],
correctAnswer: "Infinite but restricted to LIFO access"
},
{
question: "Which automaton is exactly equivalent in power to a Context-Free Grammar?",
options: ["DFA", "Linear Bounded Automaton", "Turing Machine", "Pushdown Automaton"],
correctAnswer: "Pushdown Automaton"
},
{
question: "A transition in a PDA that does not consume any input symbol is called an:",
options: ["Alpha transition", "Empty stack transition", "Epsilon (ε) transition", "Null pointer transition"],
correctAnswer: "Epsilon (ε) transition"
}
]
},
{
chapterNumber: 5,
chapterName: "Turing Machine (TM)",
questions: [
{
question: "What is a Turing Machine (TM)?",
answer: "A Turing Machine is a theoretical mathematical model of computation possessing an infinite tape and a read/write head. It is capable of simulating the logic of any computer algorithm."
},
{
question: "What are the 7 tuples defining a Turing Machine?",
answer: "A TM is defined by (Q, Σ, Γ, δ, q0, B, F), where Γ is the tape alphabet, B is the blank symbol, and δ dictates state changes, tape writes, and Left/Right head movement."
},
{
question: "How does the tape of a TM operate?",
answer: "The tape is infinitely long in one or both directions, divided into cells. The read/write head can move Left or Right one cell at a time, overwriting or reading the symbols stored there."
},
{
question: "What does it mean for a TM to Halt?",
answer: "A TM halts when it reaches a state and reads a symbol for which no transition is defined. Depending on whether this state is an accepting state, the input is accepted or rejected."
},
{
question: "How does a TM compute Partial Functions?",
answer: "A TM acts as a computer by taking an input string on the tape, manipulating it using transitions, and halting. The string left on the tape at the end is considered the output of the function."
},
{
question: "What is the Church-Turing Thesis?",
answer: "The Church-Turing thesis is a fundamental hypothesis stating that any intuitive or algorithmic computation that can be performed by a human or computer can be executed by a Turing Machine."
},
{
question: "What is a Universal Turing Machine (UTM)?",
answer: "A UTM is a special Turing machine capable of simulating any other Turing machine. It takes as input the encoded description of a TM and the input string, executing the described TM on that string."
},
{
question: "What is a Non-Deterministic Turing Machine (NDTM)?",
answer: "An NDTM allows multiple possible transitions for a given state and tape symbol. Unlike PDAs, an NDTM is mathematically equivalent in computational power to a standard deterministic TM."
},
{
question: "What is a Multi-Tape Turing Machine?",
answer: "A variation of the TM equipped with multiple infinite tapes and read/write heads. Despite the structural advantage, a Multi-Tape TM has the exact same computing power as a single-tape TM."
},
{
question: "What is a Recursively Enumerable (RE) Language?",
answer: "An RE language (Type-0) is a language for which a Turing machine exists that will accept strings in the language. However, if a string is NOT in the language, the TM might loop forever."
},
{
question: "What is a Recursive (REC) Language?",
answer: "A language is Recursive if there is a Turing machine that accepts every string in the language AND strictly rejects every string not in it. The TM is guaranteed to halt for all inputs."
},
{
question: "What is a Linear Bounded Automaton (LBA)?",
answer: "An LBA is a restricted Turing Machine where the tape length is bounded by a linear function of the input length. The read/write head cannot move beyond the initial input boundaries."
},
{
question: "What are Context-Sensitive Languages (CSL)?",
answer: "CSLs (Type-1 languages) are generated by Context-Sensitive Grammars and are accepted by Linear Bounded Automata. They are more powerful than CFLs but less powerful than unrestricted RE languages."
},
{
question: "Outline the Chomsky Hierarchy.",
answer: "The Chomsky Hierarchy classifies languages into four levels: Type-3 (Regular, FA), Type-2 (Context-Free, PDA), Type-1 (Context-Sensitive, LBA), and Type-0 (Recursively Enumerable, TM)."
},
{
question: "What is a Turing Machine as a Language Acceptor?",
answer: "A TM accepts a language if, for any string in the language written initially on the tape, the TM eventually halts in an accepting final state."
},
{
question: "What is the Blank Symbol (B) in a TM?",
answer: "The blank symbol represents empty cells on the infinite tape. It is part of the tape alphabet Γ, but distinct from the input alphabet Σ."
},
{
question: "Can a Turing Machine run forever?",
answer: "Yes, for inputs not belonging to the language (if the language is RE but not Recursive), the TM may enter an infinite loop without ever halting to reject the input."
},
{
question: "What is the difference between Decidable and Semi-Decidable?",
answer: "A Decidable problem corresponds to a Recursive language (TM always halts). A Semi-Decidable problem corresponds to a Recursively Enumerable language (TM halts on acceptance, but may loop on rejection)."
},
{
question: "What does it mean to combine Turing Machines?",
answer: "Combining TMs involves creating complex algorithms by linking simpler TMs (like a TM that copies strings linked to a TM that adds binary numbers) as subroutines to form a larger system."
},
{
question: "Are there languages a Turing Machine cannot accept?",
answer: "Yes. Due to Cantor's diagonalization argument, there are uncountably infinite languages, but only countably infinite Turing machines. Thus, there exist Non-RE languages that no TM can accept."
}
],
mcqs: [
{
question: "A Turing Machine has access to memory in the form of an:",
options: ["Infinite Stack", "Infinite Tape", "Infinite Queue", "Fixed Register Array"],
correctAnswer: "Infinite Tape"
},
{
question: "The transition function of a standard Turing Machine dictates:",
options: ["New state only", "New state and stack push", "New state, symbol to write, and head movement (L/R)", "Tape expansion"],
correctAnswer: "New state, symbol to write, and head movement (L/R)"
},
{
question: "Which thesis asserts that any intuitively computable function is computable by a TM?",
options: ["Pumping Lemma", "Church-Turing Thesis", "Kleene's Thesis", "Halting Theorem"],
correctAnswer: "Church-Turing Thesis"
},
{
question: "A Turing Machine that can simulate any other Turing Machine is called a:",
options: ["Multi-Tape TM", "Universal Turing Machine (UTM)", "Non-Deterministic TM", "Linear Bounded Automaton"],
correctAnswer: "Universal Turing Machine (UTM)"
},
{
question: "Is a Non-Deterministic TM strictly more powerful than a Deterministic TM?",
options: ["Yes", "No, they have the exact same computational power", "Only for finite inputs", "Yes, it accepts Non-RE languages"],
correctAnswer: "No, they have the exact same computational power"
},
{
question: "Languages accepted by a Turing Machine that always halts are called:",
options: ["Recursively Enumerable", "Context-Free", "Recursive (Decidable)", "Context-Sensitive"],
correctAnswer: "Recursive (Decidable)"
},
{
question: "A Turing Machine that accepts a language but may loop infinitely for strings outside the language defines:",
options: ["Regular Languages", "Recursive Languages", "Recursively Enumerable (RE) Languages", "Context-Free Languages"],
correctAnswer: "Recursively Enumerable (RE) Languages"
},
{
question: "In the Chomsky Hierarchy, Type-0 languages are equivalent to:",
options: ["Regular Languages", "Context-Free Languages", "Context-Sensitive Languages", "Recursively Enumerable Languages"],
correctAnswer: "Recursively Enumerable Languages"
},
{
question: "A Linear Bounded Automaton (LBA) accepts which type of language?",
options: ["Regular", "Context-Free", "Context-Sensitive", "Recursively Enumerable"],
correctAnswer: "Context-Sensitive"
},
{
question: "Which automaton is considered the ultimate mathematical model of a computer?",
options: ["DFA", "PDA", "LBA", "Turing Machine"],
correctAnswer: "Turing Machine"
},
{
question: "The blank symbol 'B' in a Turing machine belongs to:",
options: ["Input Alphabet (Σ)", "Tape Alphabet (Γ)", "State Set (Q)", "Transitions"],
correctAnswer: "Tape Alphabet (Γ)"
},
{
question: "If a language L and its complement L' are both Recursively Enumerable, then L is:",
options: ["Regular", "Context-Free", "Recursive", "Non-RE"],
correctAnswer: "Recursive"
},
{
question: "A Turing machine halts when:",
options: ["It reads a blank symbol", "It reaches the end of the tape", "No valid transition exists for the current state and symbol", "It moves left continuously"],
correctAnswer: "No valid transition exists for the current state and symbol"
},
{
question: "Which of the following describes a TM acting to compute a function rather than accepting a language?",
options: ["Halting in a final state", "Computing Partial/Total Functions leaving output on the tape", "Moving only Right", "Pushing to a stack"],
correctAnswer: "Computing Partial/Total Functions leaving output on the tape"
},
{
question: "A Multi-tape Turing machine is equivalent to a standard single-tape TM in terms of:",
options: ["Execution speed", "Computational power (Recognizing identical languages)", "Number of states", "Hardware cost"],
correctAnswer: "Computational power (Recognizing identical languages)"
},
{
question: "What does the read/write head of a TM do in a single step?",
options: ["Read, Write, and move L or R", "Only Read", "Only Write", "Jump to any tape cell randomly"],
correctAnswer: "Read, Write, and move L or R"
},
{
question: "The set of all possible Turing machines is:",
options: ["Finite", "Countably infinite", "Uncountably infinite", "Empty"],
correctAnswer: "Countably infinite"
},
{
question: "Context-Sensitive Languages belong to which type in the Chomsky Hierarchy?",
options: ["Type-0", "Type-1", "Type-2", "Type-3"],
correctAnswer: "Type-1"
},
{
question: "Can a Turing machine move its head left infinitely?",
options: ["Yes, if the tape is unbounded on both sides", "No, it hits a wall immediately", "Only if it is deterministic", "Only in an NDTM"],
correctAnswer: "Yes, if the tape is unbounded on both sides"
},
{
question: "Which operation is NOT a standard single-step transition action in a TM?",
options: ["Change state", "Write a symbol to the tape", "Move head Left or Right", "Instantly jump to cell 100"],
correctAnswer: "Instantly jump to cell 100"
}
]
},
{
chapterNumber: 6,
chapterName: "Computable Functions",
questions: [
{
question: "What is a Computable Function?",
answer: "A computable function is a mathematical function for which there exists an algorithm (or Turing Machine) that can calculate its output for any valid input in a finite amount of time."
},
{
question: "What is a Total Function?",
answer: "A total function is defined for all possible inputs in its domain. If a TM computes a total function, it is guaranteed to halt and produce an output for every input string."
},
{
question: "What is a Partial Function?",
answer: "A partial function is defined only for a subset of possible inputs. If a TM computes a partial function, it may run infinitely (never halt) for inputs where the function is undefined."
},
{
question: "What are the three Initial (Basic) Functions in recursion theory?",
answer: "The three initial functions are the Zero function (always returns 0), the Successor function S(n) = n + 1, and the Projection function, which returns the i-th argument from a tuple."
},
{
question: "What is the Zero Function?",
answer: "The zero function, denoted as Z(x), is a fundamental computable function that takes any input 'x' and simply returns 0. It is used as a base block for building complex functions."
},
{
question: "What is the Successor Function?",
answer: "The successor function S(x) takes an integer input 'x' and returns 'x + 1'. It is the foundational mechanism for generating all natural numbers in recursive theory."
},
{
question: "What is the Projection Function?",
answer: "The projection (or identity) function P(i,n) takes 'n' arguments and returns the 'i-th' argument. It is used to select specific variables during complex recursive compositions."
},
{
question: "What is Composition in computable functions?",
answer: "Composition is an operation where the output of one or more computable functions is used as the input arguments for another function, creating a more complex computable function."
},
{
question: "What is Primitive Recursion?",
answer: "Primitive recursion defines a new function by defining its base case (usually for input 0) and defining its value for n+1 strictly in terms of its value for n and other parameters."
},
{
question: "What is a Primitive Recursive Function?",
answer: "A function is primitive recursive if it can be constructed starting from the initial functions (Zero, Successor, Projection) by applying a finite number of Compositions and Primitive Recursions."
},
{
question: "Are all computable functions primitive recursive?",
answer: "No. While most common mathematical functions (addition, multiplication, factorial) are primitive recursive, there are total computable functions, like the Ackermann function, that grow too fast to be primitive recursive."
},
{
question: "What is the Minimalization (μ) operator?",
answer: "The μ-operator (mu) searches for the smallest input 'y' such that a given function f(x, y) evaluates to zero. It introduces unbounded search, which can lead to infinite loops."
},
{
question: "What is Bounded Minimalization?",
answer: "Bounded minimalization restricts the search for 'y' up to a specific upper bound 'k'. Because the search is finite, functions built with bounded minimalization remain Primitive Recursive."
},
{
question: "What is a μ-Recursive (Mu-Recursive) Function?",
answer: "A function is μ-recursive if it can be generated from the basic functions using composition, primitive recursion, and unbounded minimalization (the μ-operator). They represent all partial computable functions."
},
{
question: "What is a Regular Function in computability?",
answer: "A total function f(x,y) is called a regular function if, for every x, there is guaranteed to be at least one y such that f(x,y) = 0. This guarantees the μ-operator will halt."
},
{
question: "What does the theorem 'All Computable Functions Are μ-Recursive' state?",
answer: "It mathematically formalizes the Church-Turing thesis, proving that the class of Turing-computable functions is exactly identical to the class of mathematically defined μ-Recursive functions."
},
{
question: "What happens if unbounded minimalization searches for a 'y' that doesn't exist?",
answer: "The search process enters an infinite loop, never returning a value. This is why the μ-operator is responsible for generating partial functions (analogous to TMs that never halt)."
},
{
question: "Give an example of constructing Addition using basic functions.",
answer: "Addition x+y is primitive recursive: Base case Add(x,0) = Projection(x). Recursive step Add(x, y+1) = Successor(Add(x, y))."
},
{
question: "Why is the Ackermann function significant?",
answer: "The Ackermann function is significant because it is computable (a TM can evaluate it), but it is NOT primitive recursive, demonstrating that primitive recursion alone does not cover all computability."
},
{
question: "What defines a Recursive Function in this theoretical model?",
answer: "A recursive function is a μ-recursive function that happens to be total (defined for all inputs). It equates to a Turing Machine that is guaranteed to halt on all inputs."
}
],
mcqs: [
{
question: "Which of the following is NOT one of the initial (basic) primitive recursive functions?",
options: ["Zero Function", "Successor Function", "Projection Function", "Exponential Function"],
correctAnswer: "Exponential Function"
},
{
question: "A function that is defined for every possible input in its domain is called a:",
options: ["Total Function", "Partial Function", "Empty Function", "Undecidable Function"],
correctAnswer: "Total Function"
},
{
question: "Which operation allows substituting the output of functions into another function?",
options: ["Minimalization", "Composition", "Primitive Recursion", "Induction"],
correctAnswer: "Composition"
},
{
question: "A function built exclusively using initial functions, composition, and primitive recursion is:",
options: ["μ-Recursive", "Non-Computable", "Primitive Recursive", "Partial"],
correctAnswer: "Primitive Recursive"
},
{
question: "Which function is computable but explicitly proven to NOT be primitive recursive?",
options: ["Addition", "Factorial", "Ackermann Function", "Multiplication"],
correctAnswer: "Ackermann Function"
},
{
question: "What does the μ-operator (Minimalization) do?",
options: ["Finds the maximum value", "Searches for the smallest y such that f(x,y)=0", "Multiplies inputs", "Returns 0 always"],
correctAnswer: "Searches for the smallest y such that f(x,y)=0"
},
{
question: "The introduction of the unbounded μ-operator allows the creation of:",
options: ["Only Total Functions", "Partial Functions (Infinite loops)", "Only Primitive Recursive Functions", "Constants"],
correctAnswer: "Partial Functions (Infinite loops)"
},
{
question: "Bounded minimalization keeps a function within the class of:",
options: ["Uncomputable functions", "Primitive Recursive functions", "Partial functions", "Non-deterministic functions"],
correctAnswer: "Primitive Recursive functions"
},
{
question: "According to theoretical computer science, the class of Turing Computable functions is exactly equivalent to:",
options: ["Primitive Recursive Functions", "μ-Recursive Functions", "Polynomial Functions", "Linear Functions"],
correctAnswer: "μ-Recursive Functions"
},
{
question: "The Zero function Z(x) always evaluates to:",
options: ["x", "1", "0", "x-1"],
correctAnswer: "0"
},
{
question: "The Successor function S(x) evaluates to:",
options: ["x-1", "x", "x+1", "x^2"],
correctAnswer: "x+1"
},
{
question: "The Projection function P_1^3 (x, y, z) returns:",
options: ["z", "y", "x", "x+y+z"],
correctAnswer: "x"
},
{
question: "If the μ-operator searches for a 'y' that yields 0, but no such 'y' exists, what happens?",
options: ["Returns 0", "Returns -1", "Computes forever (Undefined)", "Returns max integer"],
correctAnswer: "Computes forever (Undefined)"
},
{
question: "A total function f(x,y) where for every x, there exists a y such that f(x,y)=0 is called a:",
options: ["Regular function", "Irregular function", "Constant function", "Partial function"],
correctAnswer: "Regular function"
},
{
question: "The operation defining f(x, y+1) based on f(x, y) is called:",
options: ["Composition", "Primitive Recursion", "Minimalization", "Projection"],
correctAnswer: "Primitive Recursion"
},
{
question: "Which class encompasses ALL mathematically computable functions?",
options: ["Primitive Recursive", "μ-Recursive", "Context-Free", "Finite Automata"],
correctAnswer: "μ-Recursive"
},
{
question: "Primitive recursive functions are guaranteed to be:",
options: ["Partial", "Total and Computable", "Undecidable", "Exponential only"],
correctAnswer: "Total and Computable"
},
{
question: "Which of the following is equivalent to a Turing Machine that always halts?",
options: ["μ-Recursive function generating a partial result", "A Recursive (Total) Function", "An Undecidable problem", "An Infinite Loop"],
correctAnswer: "A Recursive (Total) Function"
},
{
question: "Which theorem is directly tied to 'All Computable Functions Are μ-Recursive'?",
options: ["Kleene's Theorem", "Pumping Lemma", "Church-Turing Thesis", "Rice's Theorem"],
correctAnswer: "Church-Turing Thesis"
},
{
question: "Building multiplication by repeatedly applying addition is an example of:",
options: ["Minimalization", "Primitive Recursion", "Projection", "Zero function"],
correctAnswer: "Primitive Recursion"
}
]
},
{
chapterNumber: 7,
chapterName: "Undecidability",
questions: [
{
question: "What is an Undecidable Problem?",
answer: "A problem is undecidable if there exists no algorithm (or Turing Machine) that can definitively answer 'Yes' or 'No' for all possible inputs in a finite amount of time."
},
{
question: "What is a Decidable Problem?",
answer: "A problem is decidable if there exists a Turing Machine that will always halt and return a correct 'Yes' or 'No' answer for every valid input instance."
},
{
question: "What is a language that cannot be accepted?",
answer: "Because there are uncountably infinite languages but only countably infinite Turing machines, there exist mathematical languages (Non-Recursively Enumerable) that no Turing machine can ever recognize."
},
{
question: "What is the Halting Problem?",
answer: "The Halting Problem asks: Given a description of an arbitrary computer program and an input, can you definitively predict whether the program will eventually halt or run forever? Alan Turing proved this is Undecidable."
},
{
question: "Why is the Halting Problem undecidable?",
answer: "Turing proved it via contradiction. If a 'Halting Predictor' existed, we could write a paradox program that does the exact opposite of what the predictor predicts, creating a logical impossibility."
},
{
question: "What is a Non-Recursively Enumerable (Non-RE) Language?",
answer: "A language is Non-RE if there is absolutely no Turing Machine that can even semi-decide it. If you feed strings into a TM, it cannot reliably recognize strings belonging to a Non-RE language."
},
{
question: "What is Reduction in computability theory?",
answer: "Reduction is a technique used to prove undecidability. If you can convert (reduce) an unknown problem A into a known undecidable problem B (like the Halting Problem), then A must also be undecidable."
},
{
question: "What is Post's Correspondence Problem (PCP)?",
answer: "PCP is an undecidable decision problem involving a set of dominos with strings on the top and bottom. The question is whether a sequence of dominos can be arranged so the top string equals the bottom string."
},
{
question: "Name an undecidable problem related to Context-Free Languages.",
answer: "It is undecidable whether a Context-Free Grammar generates all possible strings (L(G) = Σ*). It is also undecidable whether a CFG is ambiguous."
},
{
question: "Name a decidable problem related to Context-Free Languages.",
answer: "It is decidable whether a given string 'w' is generated by a specific CFG (this can be solved using the CYK or Early parsing algorithms)."
},
{
question: "What is the Class P?",
answer: "Class P consists of all decision problems that can be solved by a Deterministic Turing Machine in Polynomial time (e.g., O(n^2)). These are considered 'tractable' or easily solvable problems."
},
{
question: "What is the Class NP?",
answer: "Class NP (Non-deterministic Polynomial time) consists of problems where a proposed solution can be verified as correct by a Deterministic Turing Machine in polynomial time, even if finding the solution takes longer."
},
{
question: "What does 'NP' stand for?",
answer: "NP stands for Non-deterministic Polynomial time. It means the problem could theoretically be solved in polynomial time by a Non-Deterministic Turing Machine that always guesses the correct path."
},
{
question: "What is an NP-Complete problem?",
answer: "A problem is NP-Complete if it belongs to NP, and every other problem in NP can be translated (reduced) into it in polynomial time. If an efficient solution is found for one NP-Complete problem, all NP problems are solved."
},
{
question: "Give examples of NP-Complete problems.",
answer: "Famous NP-Complete problems include the Boolean Satisfiability Problem (SAT), the Traveling Salesman Problem (decision version), and the Knapsack problem."
},
{
question: "What is the P vs NP question?",
answer: "It is the biggest unsolved problem in computer science asking whether P = NP. That is, if a problem's solution can be quickly verified, can the solution also be quickly found?"
},
{
question: "What is Rice's Theorem?",
answer: "Rice's Theorem states that any non-trivial property of the language recognized by a Turing Machine is mathematically undecidable. For example, determining if a TM accepts a finite language is undecidable."
},
{
question: "What does it mean for a language to be Turing-Recognizable?",
answer: "It is synonymous with Recursively Enumerable. A TM can recognize (accept) strings in the language, but may loop endlessly on strings not in the language."
},
{
question: "Is the equivalence of two CFGs decidable?",
answer: "No. Determining whether two Context-Free Grammars generate the exact same language (L(G1) = L(G2)) is an undecidable problem."
},
{
question: "What is the Diagonalization argument?",
answer: "Introduced by Georg Cantor and adapted by Turing, it's a mathematical proof technique used to show that the set of all languages is larger than the set of all Turing machines, proving the existence of uncomputable problems."
}
],
mcqs: [
{
question: "A problem for which no algorithm exists to guarantee a 'Yes/No' answer in finite time is called:",
options: ["Decidable", "Polynomial", "Undecidable", "Tractable"],
correctAnswer: "Undecidable"
},
{
question: "The Halting Problem is famously known to be:",
options: ["Decidable in Polynomial Time", "NP-Complete", "Undecidable", "Regular"],
correctAnswer: "Undecidable"
},
{
question: "Which technique is commonly used to prove that a new problem is undecidable?",
options: ["Pumping Lemma", "Reduction from a known undecidable problem", "Mathematical Induction", "Subset Construction"],
correctAnswer: "Reduction from a known undecidable problem"
},
{
question: "Which of the following is an undecidable problem regarding Context-Free Grammars?",
options: ["Does a string 'w' belong to L(G)?", "Is L(G) empty?", "Is the grammar ambiguous?", "Is the grammar finite?"],
correctAnswer: "Is the grammar ambiguous?"
},
{
question: "Post's Correspondence Problem (PCP) is mathematically proven to be:",
options: ["Decidable", "Undecidable", "Regular", "Context-Free"],
correctAnswer: "Undecidable"
},
{
question: "The class P consists of problems solvable in polynomial time by a:",
options: ["Deterministic Turing Machine", "Non-Deterministic Turing Machine", "Pushdown Automaton", "Finite Automaton"],
correctAnswer: "Deterministic Turing Machine"
},
{
question: "The class NP consists of problems whose solutions can be VERIFIED in polynomial time by a:",
options: ["Non-Deterministic Turing Machine", "Deterministic Turing Machine", "Finite Automaton", "Oracle"],
correctAnswer: "Deterministic Turing Machine"
},
{
question: "NP stands for:",
options: ["Not Polynomial", "Non-Polynomial", "Non-deterministic Polynomial", "Normal Polynomial"],
correctAnswer: "Non-deterministic Polynomial"
},
{
question: "A problem to which all other NP problems can be reduced in polynomial time is called:",
options: ["P-Complete", "NP-Hard", "NP-Complete", "Undecidable"],
correctAnswer: "NP-Complete"
},
{
question: "Which of the following is a classic NP-Complete problem?",
options: ["Sorting an array", "Boolean Satisfiability (SAT)", "Finding the maximum in an array", "DFA Minimization"],
correctAnswer: "Boolean Satisfiability (SAT)"
},
{
question: "According to Rice's Theorem, checking any non-trivial property of a Turing Machine's language is:",
options: ["Decidable", "Polynomial", "Undecidable", "Tractable"],
correctAnswer: "Undecidable"
},
{
question: "A language for which a TM exists that will accept valid strings but may loop infinitely on invalid strings is:",
options: ["Recursive", "Decidable", "Recursively Enumerable", "Non-RE"],
correctAnswer: "Recursively Enumerable"
},
{
question: "If a language L and its complement are both Recursively Enumerable, then L is:",
options: ["Undecidable", "Decidable (Recursive)", "Non-RE", "NP-Complete"],
correctAnswer: "Decidable (Recursive)"
},
{
question: "Is determining if two DFAs accept the same language decidable or undecidable?",
options: ["Decidable", "Undecidable", "NP-Complete", "Non-RE"],
correctAnswer: "Decidable"
},
{
question: "Is determining if two CFGs accept the same language decidable or undecidable?",
options: ["Decidable", "Undecidable", "Polynomial", "NP-Complete"],
correctAnswer: "Undecidable"
},
{
question: "The problem of determining whether L(G) = Σ* for a Context-Free Grammar is:",
options: ["Decidable", "Undecidable", "Tractable", "Regular"],
correctAnswer: "Undecidable"
},
{
question: "Which argument proves there are more languages than Turing machines?",
options: ["Pumping Lemma", "Cantor's Diagonalization", "Kleene's Theorem", "Church's Thesis"],
correctAnswer: "Cantor's Diagonalization"
},
{
question: "Which of the following statements represents the biggest unsolved question in theoretical computer science?",
options: ["P = NP", "DFA = NFA", "TM = PDA", "RE = REC"],
correctAnswer: "P = NP"
},
{
question: "A language that cannot be recognized by any Turing machine at all is called:",
options: ["Recursive", "Recursively Enumerable", "Non-Recursively Enumerable", "Context-Sensitive"],
correctAnswer: "Non-Recursively Enumerable"
},
{
question: "If a problem is NP-Complete, finding a deterministic polynomial time algorithm for it would prove that:",
options: ["P = NP", "P ≠ NP", "Turing Machines are flawed", "Halting problem is decidable"],
correctAnswer: "P = NP"
}
]
}
];