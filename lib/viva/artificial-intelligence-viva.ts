export interface VivaQuestion {
question: string;
answer: string;
}
export interface MCQ {
question: string;
options: string[];
answer: string;
}
export interface ChapterData {
chapterNumber: number;
chapterName: string;
vivaQuestions: VivaQuestion[];
mcqs: MCQ[];
}
export interface SubjectData {
subjectName: string;
totalChapters: number;
chapters: ChapterData[];
}
export const gtuArtificialIntelligenceViva: SubjectData = {
subjectName: "Artificial Intelligence",
totalChapters: 12,
chapters: [
{
chapterNumber: 1,
chapterName: "Introduction",
vivaQuestions: [
{ question: "What are AI Problems?", answer: "Sir, AI problems refer to tasks that require human-like intelligence to solve, such as natural language processing, game playing, and theorem proving, rather than straightforward algorithmic calculations." },
{ question: "What is the 'Underlying Assumption' in AI?", answer: "Yes sir, the underlying assumption, often related to the physical symbol system hypothesis, is that general intelligent action can be achieved by manipulating symbolic representations." },
{ question: "What defines an AI technique?", answer: "Sir, an AI technique is a method that exploits knowledge that should be represented in such a way that the knowledge can be easily modified, understood by people, and used effectively even if it is incomplete." },
{ question: "What are the Criteria for Success in AI?", answer: "Sir, the criteria for success in AI often depend on whether the system can perform a specific task as well as a human expert, or pass evaluations like the Turing Test for generalized intelligence." },
{ question: "What is meant by the 'Level of the Model' in AI?", answer: "Sir, the level of the model refers to whether the AI system is trying to simulate exact human psychological and neurological processes, or simply trying to achieve the same final output regardless of the internal method." },
{ question: "What is Artificial Intelligence?", answer: "Sir, Artificial Intelligence is a branch of computer science focused on building systems capable of performing tasks that typically require human intelligence, such as learning, reasoning, and self-correction." },
{ question: "Why is the Turing Test important?", answer: "Sir, the Turing Test, proposed by Alan Turing, is a famous criterion for success in AI, used to determine if a machine can exhibit intelligent behavior indistinguishable from that of a human." },
{ question: "What is a heuristic in AI?", answer: "Sir, a heuristic is a rule-of-thumb or an educated guess that helps narrow down the search space in complex AI problems, providing a good enough solution when an exact algorithm is too slow." },
{ question: "Can you name a few common AI application areas?", answer: "Yes sir, common areas include expert systems, natural language processing, computer vision, robotics, and speech recognition." },
{ question: "What is the difference between strong AI and weak AI?", answer: "Sir, Weak AI is designed to perform a specific, narrow task like playing chess. Strong AI, which is currently theoretical, would possess generalized human cognitive abilities." }
],
mcqs: [
{ question: "Which of the following is considered an AI Problem?", options: ["Sorting an array", "Calculating payroll", "Natural Language Processing", "Printing a document"], answer: "Natural Language Processing" },
{ question: "The criteria for success in AI systems are typically evaluated using:", options: ["Compilation speed", "The Turing Test", "Syntax checkers", "Line count"], answer: "The Turing Test" },
{ question: "An AI technique focuses on representing what?", options: ["Hardware circuits", "Knowledge", "CSS stylesheets", "Network packets"], answer: "Knowledge" },
{ question: "The physical symbol system hypothesis relates to which AI concept?", options: ["The Underlying Assumption", "Database Normalization", "Object-Oriented Programming", "Software Testing"], answer: "The Underlying Assumption" },
{ question: "Which concept refers to whether an AI mimics human brain architecture or just the results?", options: ["Criteria for Success", "The Level of the Model", "Syntax Processing", "Forward Chaining"], answer: "The Level of the Model" },
{ question: "Which of the following is NOT an AI technique?", options: ["Heuristic Search", "Machine Learning", "Hardcoding all if-else paths", "Knowledge Representation"], answer: "Hardcoding all if-else paths" },
{ question: "Artificial Intelligence primarily focuses on making computers:", options: ["Faster", "Cheaper", "Think and learn like humans", "Store more data"], answer: "Think and learn like humans" },
{ question: "A rule of thumb that helps to solve a problem quickly is called a:", options: ["Heuristic", "Algorithm", "Compiler", "Lexeme"], answer: "Heuristic" },
{ question: "Who proposed the test to evaluate machine intelligence?", options: ["John McCarthy", "Alan Turing", "Marvin Minsky", "Charles Babbage"], answer: "Alan Turing" },
{ question: "Which of the following is a characteristic of AI knowledge?", options: ["It is strictly numerical", "It is easily modifiable and understandable", "It cannot handle uncertainty", "It must be compiled into assembly"], answer: "It is easily modifiable and understandable" }
]
},
{
chapterNumber: 2,
chapterName: "Problems, State Space Search & Heuristic Search Techniques",
vivaQuestions: [
{ question: "What is a State Space Search?", answer: "Sir, defining a problem as a state space search involves representing the problem as a set of initial states, a set of target states, and a set of legal operators or moves to transition between states." },
{ question: "What is a Production System?", answer: "Yes sir, a production system consists of a set of rules (production rules), a working memory to store the current state, and a control strategy to choose which rule to apply next." },
{ question: "What is Hill Climbing?", answer: "Sir, Hill Climbing is a heuristic search technique that continuously moves in the direction of increasing value or decreasing cost. It terminates when it reaches a peak where no neighbor has a better value." },
{ question: "What is the Best-First Search algorithm?", answer: "Sir, Best-First Search explores a graph by expanding the most promising node chosen according to a specified heuristic evaluation function. It uses a priority queue." },
{ question: "What is the Generate-And-Test method?", answer: "Sir, Generate-And-Test is a simple AI search technique that generates a possible solution and then tests it against the goal condition. If it fails, it generates another solution." },
{ question: "What is Constraint Satisfaction?", answer: "Sir, constraint satisfaction is a problem-solving technique where the goal is to find states that satisfy a given set of strict constraints, often used in puzzles like Sudoku or cryptarithmetic." },
{ question: "What is Means-Ends Analysis?", answer: "Sir, Means-Ends Analysis is a problem-solving strategy that involves detecting the difference between the current state and the goal state, and selecting an operator that reduces that specific difference." },
{ question: "What is a local maximum in Hill Climbing?", answer: "Sir, a local maximum is a major issue in Hill Climbing where the current state is better than all its immediate neighbors, but it is not the absolute best (global maximum) in the entire state space." },
{ question: "What are Production System Characteristics?", answer: "Sir, production system characteristics describe whether the system is monotonic (rules can be applied independently) or partially commutative, which helps in choosing the right search program design." },
{ question: "What is Problem Reduction?", answer: "Sir, Problem Reduction involves breaking down a complex problem into smaller, manageable sub-problems, solving them, and combining their results. This is often represented using AND-OR graphs." }
],
mcqs: [
{ question: "Defining a problem using initial states, goal states, and operators is known as:", options: ["State Space Search", "Constraint Satisfaction", "Generate-And-Test", "Means-Ends Analysis"], answer: "State Space Search" },
{ question: "Which search technique constantly moves towards a state with a better heuristic value and may get stuck at a local maximum?", options: ["Best-First Search", "Breadth-First Search", "Hill Climbing", "Generate-And-Test"], answer: "Hill Climbing" },
{ question: "Which system utilizes a set of rules, a working memory, and a control strategy?", options: ["Database System", "Production System", "Operating System", "File System"], answer: "Production System" },
{ question: "The process of breaking down a complex problem into simpler subproblems is known as:", options: ["Hill Climbing", "Problem Reduction", "Generate-And-Test", "Constraint Satisfaction"], answer: "Problem Reduction" },
{ question: "Which algorithm evaluates the difference between the current state and goal state to select an operator?", options: ["Means-Ends Analysis", "Hill Climbing", "Best-First Search", "Depth-First Search"], answer: "Means-Ends Analysis" },
{ question: "Which technique simply creates a possible solution and checks if it matches the goal?", options: ["Constraint Satisfaction", "Generate-And-Test", "Problem Reduction", "A* Algorithm"], answer: "Generate-And-Test" },
{ question: "Best-First Search typically requires which data structure to find the most promising node?", options: ["Stack", "Queue", "Priority Queue", "Linked List"], answer: "Priority Queue" },
{ question: "Sudoku and the N-Queens problem are classic examples solved using:", options: ["Hill Climbing", "Constraint Satisfaction", "Means-Ends Analysis", "Generate-And-Test"], answer: "Constraint Satisfaction" },
{ question: "In Hill Climbing, a plateau refers to:", options: ["The highest peak", "A flat area where all neighbors have the same value", "The lowest valley", "The starting state"], answer: "A flat area where all neighbors have the same value" },
{ question: "Which graph is commonly used to represent Problem Reduction?", options: ["OR Graph", "AND-OR Graph", "Directed Acyclic Graph", "Bipartite Graph"], answer: "AND-OR Graph" }
]
},
{
chapterNumber: 3,
chapterName: "Knowledge Representation",
vivaQuestions: [
{ question: "What is Knowledge Representation?", answer: "Sir, Knowledge Representation is the area of AI concerned with how knowledge can be represented formally in a computer system so that the system can use it to solve complex problems." },
{ question: "What is the difference between Procedural and Declarative Knowledge?", answer: "Sir, Declarative knowledge is simply knowing facts, like 'the sky is blue.' Procedural knowledge is knowing 'how' to do something, typically represented as sequences of instructions or rules." },
{ question: "What is Forward Reasoning?", answer: "Sir, Forward Reasoning, or forward chaining, starts with the available initial facts and applies inference rules to extract more data until a specific goal is reached." },
{ question: "What is Backward Reasoning?", answer: "Sir, Backward Reasoning starts with the goal or hypothesis and works backward to see if there are initial facts that support or prove that goal." },
{ question: "What are 'Instance' and 'Isa' relationships?", answer: "Sir, an 'Isa' relationship signifies that a class is a subclass of another class, like 'Dog isa Animal'. An 'Instance' relationship indicates that a specific object belongs to a class, like 'Fido instance-of Dog'." },
{ question: "How are simple facts represented in logic?", answer: "Sir, simple facts are represented using Propositional or Predicate logic. For example, 'Socrates is a man' can be written as the predicate Man(Socrates)." },
{ question: "What is Resolution in AI?", answer: "Sir, Resolution is a rule of inference used for automated theorem proving in propositional and first-order logic. It works by showing that the negation of the goal leads to a contradiction." },
{ question: "What are Computable Functions and Predicates?", answer: "Sir, computable functions and predicates are components of logic that can be evaluated to a specific value or a boolean truth value by a computer program." },
{ question: "What is Logic Programming?", answer: "Sir, Logic Programming is a programming paradigm based on formal logic, where programs are written as a set of sentences in logical form, expressing facts and rules, like in Prolog." },
{ question: "Why do we need representations and mappings?", answer: "Sir, we need mappings to translate real-world facts into internal computer representations, manipulate them to find new internal representations, and map them back to real-world solutions." }
],
mcqs: [
{ question: "Which type of reasoning starts from a goal and works backward to the initial facts?", options: ["Forward Reasoning", "Backward Reasoning", "Inductive Reasoning", "Non-monotonic Reasoning"], answer: "Backward Reasoning" },
{ question: "Knowing 'how to ride a bike' is an example of which type of knowledge?", options: ["Declarative Knowledge", "Procedural Knowledge", "Structural Knowledge", "Meta Knowledge"], answer: "Procedural Knowledge" },
{ question: "The relationship between 'Dog' and 'Animal' is best described as:", options: ["Instance", "Isa", "Has-a", "Part-of"], answer: "Isa" },
{ question: "Which inference technique aims to prove a theorem by contradiction?", options: ["Resolution", "Forward Chaining", "Means-Ends Analysis", "Semantic Mapping"], answer: "Resolution" },
{ question: "Representing 'Socrates is a man' as Man(Socrates) is an example of representing simple facts in:", options: ["Fuzzy Logic", "Logic", "Neural Networks", "Bayesian Networks"], answer: "Logic" },
{ question: "Logic Programming is heavily based on:", options: ["Procedural Knowledge", "Object-Oriented Concepts", "Declarative Knowledge and Formal Logic", "Connectionist Models"], answer: "Declarative Knowledge and Formal Logic" },
{ question: "Which approach uses if-then rules to generate new facts from existing ones?", options: ["Backward Reasoning", "Forward Reasoning", "Resolution", "Constraint Satisfaction"], answer: "Forward Reasoning" },
{ question: "The relationship showing that a specific object belongs to a class is:", options: ["Isa", "Instance", "Contains", "Includes"], answer: "Instance" },
{ question: "Which concept maps real-world problems to internal computer formats?", options: ["Representations and Mappings", "Neural Networks", "Game Playing", "Resolution"], answer: "Representations and Mappings" },
{ question: "Computable functions in knowledge representation are designed to be:", options: ["Ambiguous", "Evaluated by a computer", "Unsolvable", "Only understandable by humans"], answer: "Evaluated by a computer" }
]
},
{
chapterNumber: 4,
chapterName: "Symbolic Reasoning Under Uncertainty",
vivaQuestions: [
{ question: "What is Nonmonotonic Reasoning?", answer: "Sir, Nonmonotonic reasoning is a type of reasoning where adding new information or axioms can invalidate or retract previously reached conclusions. It handles dynamic and uncertain environments." },
{ question: "How does monotonic reasoning differ from nonmonotonic reasoning?", answer: "Sir, in monotonic logic, once a conclusion is proven true, adding new knowledge cannot make it false. In nonmonotonic logic, new evidence can force the system to withdraw a prior conclusion." },
{ question: "What are Logics for Non-monotonic Reasoning?", answer: "Yes sir, they are formal logical frameworks designed to handle exceptions and default assumptions, such as Default Logic, Autoepistemic Logic, and Circumscription." },
{ question: "Why do we need reasoning under uncertainty?", answer: "Sir, in real-world AI applications, knowledge is rarely complete or 100% accurate. Reasoning under uncertainty allows the system to make educated guesses and update them as new data arrives." },
{ question: "What is Default Logic?", answer: "Sir, Default logic is a nonmonotonic logic that allows AI to make default assumptions when information is missing. For example, 'Assume a bird can fly unless you know it is a penguin.'" },
{ question: "What is Circumscription?", answer: "Sir, Circumscription is a non-monotonic formalism that formalizes the common-sense assumption that things are exactly as they are stated, and no other exceptions exist unless explicitly mentioned." },
{ question: "Can a conclusion be withdrawn in standard First-Order Logic?", answer: "No sir, standard First-Order Logic is strictly monotonic. Once a fact is derived, it remains true forever within that logical system regardless of new facts." },
{ question: "What is Autoepistemic Logic?", answer: "Sir, Autoepistemic logic is a type of nonmonotonic logic that allows an AI system to reason about its own knowledge and ignorance. For instance, 'If I had a brother, I would know it.'" },
{ question: "What is the 'Bird-Penguin' example in nonmonotonic reasoning?", answer: "Sir, it's a classic example. We deduce Tweety can fly because Tweety is a bird. Later, we learn Tweety is a penguin. We must then nonmonotonically retract the conclusion that Tweety can fly." },
{ question: "What is Truth Maintenance System (TMS)?", answer: "Sir, a Truth Maintenance System works alongside an inference engine to record and maintain the dependencies of beliefs, enabling it to efficiently retract conclusions when nonmonotonic changes occur." }
],
mcqs: [
{ question: "Which type of reasoning allows the retraction of previous conclusions when new information is added?", options: ["Monotonic Reasoning", "Nonmonotonic Reasoning", "Deductive Reasoning", "Syllogistic Reasoning"], answer: "Nonmonotonic Reasoning" },
{ question: "In standard First-Order Logic, adding new facts:", options: ["Can invalidate old facts", "Cannot invalidate old facts", "Requires a neural network", "Creates a contradiction"], answer: "Cannot invalidate old facts" },
{ question: "Logics for non-monotonic reasoning include:", options: ["Default Logic", "Boolean Algebra", "Calculus", "Linear Algebra"], answer: "Default Logic" },
{ question: "The assumption 'Birds can fly unless proven otherwise' is an example of:", options: ["Monotonic Logic", "Default Reasoning", "Predicate Logic", "Propositional Logic"], answer: "Default Reasoning" },
{ question: "Which logic allows an agent to reason about its own state of knowledge?", options: ["Circumscription", "Autoepistemic Logic", "Fuzzy Logic", "Bayesian Logic"], answer: "Autoepistemic Logic" },
{ question: "Reasoning under uncertainty is necessary because real-world data is often:", options: ["Perfect and complete", "Incomplete or noisy", "Always numeric", "Non-existent"], answer: "Incomplete or noisy" },
{ question: "Which system is typically used to track dependencies and retract beliefs in nonmonotonic reasoning?", options: ["Database Management System", "Truth Maintenance System (TMS)", "Operating System", "File System"], answer: "Truth Maintenance System (TMS)" },
{ question: "Which non-monotonic logic formalizes the idea of 'jumping to conclusions' based on lack of contrary evidence?", options: ["Default Logic", "Monotonic Logic", "Fuzzy Logic", "First-Order Logic"], answer: "Default Logic" },
{ question: "If new evidence disproves a previously held belief, a monotonic system will:", options: ["Adapt smoothly", "Update its weights", "Fail or result in a contradiction", "Ignore the evidence"], answer: "Fail or result in a contradiction" },
{ question: "Circumscription in nonmonotonic logic refers to:", options: ["Drawing circles", "Minimizing the set of exceptions to a rule", "Maximizing error", "Searching a state space"], answer: "Minimizing the set of exceptions to a rule" }
]
},
{
chapterNumber: 5,
chapterName: "Probabilistic Reasoning",
vivaQuestions: [
{ question: "What is Bayes' Theorem?", answer: "Sir, Bayes' Theorem is a mathematical formula that calculates the probability of a hypothesis based on prior knowledge of conditions that might be related to the event." },
{ question: "What are Certainty Factors in Rule-Based Systems?", answer: "Sir, certainty factors are numerical values attached to rules and facts in an expert system, representing the degree of belief or confidence in that information, ranging from -1 to 1." },
{ question: "What is a Bayesian Network?", answer: "Sir, a Bayesian Network is a probabilistic graphical model that represents a set of variables and their conditional dependencies via a directed acyclic graph (DAG)." },
{ question: "What is Dempster-Shafer Theory?", answer: "Yes sir, the Dempster-Shafer theory is a mathematical theory of evidence that deals with uncertainty by allowing the combination of evidence from different sources to calculate the probability of an event." },
{ question: "What is Fuzzy Logic?", answer: "Sir, Fuzzy Logic is a form of many-valued logic in which the truth values of variables may be any real number between 0 and 1, handling the concept of partial truth rather than absolute true or false." },
{ question: "How does Fuzzy Logic differ from traditional Boolean logic?", answer: "Sir, Boolean logic only recognizes two absolute states: 0 (false) or 1 (true). Fuzzy logic recognizes infinite degrees of truth between 0 and 1, like 'somewhat true' or 'very high'." },
{ question: "What is 'prior probability' in Bayes' Theorem?", answer: "Sir, prior probability is the initial probability of an event occurring before new evidence is collected or observed." },
{ question: "How is Dempster-Shafer theory different from Bayesian probability?", answer: "Sir, while Bayesian probability assigns probabilities to mutually exclusive single events, Dempster-Shafer allows assigning belief mass to sets of events, naturally representing ignorance or lack of evidence." },
{ question: "Why use Bayesian Networks?", answer: "Sir, Bayesian Networks compactly model joint probability distributions and easily perform inferences, such as diagnosing a disease based on observed symptoms." },
{ question: "How do Rule-Based Systems use Certainty Factors?", answer: "Sir, when rules fire, the system mathematically combines the certainty factors of the premises and the rule itself to determine the overall certainty of the generated conclusion." }
],
mcqs: [
{ question: "Which theorem calculates posterior probability based on prior probability and new evidence?", options: ["Pythagoras Theorem", "Bayes' Theorem", "Dempster-Shafer Theorem", "Fuzzy Theorem"], answer: "Bayes' Theorem" },
{ question: "In Rule-Based Systems, numerical values indicating confidence in a rule are called:", options: ["Boolean values", "Certainty Factors", "Fuzzy Sets", "Prolog variables"], answer: "Certainty Factors" },
{ question: "A directed acyclic graph representing conditional dependencies among variables is a:", options: ["Neural Network", "Hopfield Network", "Bayesian Network", "Semantic Network"], answer: "Bayesian Network" },
{ question: "Which theory combines pieces of evidence from different sources to calculate the degree of belief?", options: ["Fuzzy Logic", "Dempster-Shafer Theory", "Nonmonotonic Logic", "First-Order Logic"], answer: "Dempster-Shafer Theory" },
{ question: "Which logic allows for degrees of truth between 0 and 1?", options: ["Boolean Logic", "Fuzzy Logic", "Predicate Logic", "Crisp Logic"], answer: "Fuzzy Logic" },
{ question: "In Fuzzy Logic, statements are evaluated based on:", options: ["Absolute True or False", "Degrees of truth", "Bayesian probability", "Certainty Factors"], answer: "Degrees of truth" },
{ question: "Bayesian Networks are primarily used for:", options: ["Sorting lists", "Probabilistic inference and modeling uncertainty", "Parsing natural language", "Spell checking"], answer: "Probabilistic inference and modeling uncertainty" },
{ question: "What defines 'Ignorance' mathematically in probabilistic reasoning frameworks?", options: ["Fuzzy Logic", "Bayesian Networks", "Dempster-Shafer Theory", "Minimax algorithm"], answer: "Dempster-Shafer Theory" },
{ question: "Certainty factors typically range from:", options: ["0 to 100", "-1 to 1", "0 to infinity", "-100 to 0"], answer: "-1 to 1" },
{ question: "If the probability of having a disease is known, Bayes' Theorem can be used to find:", options: ["Certainty factor of the disease", "The probability of having a specific symptom given the disease", "The exact cure", "The fuzzy truth value"], answer: "The probability of having a specific symptom given the disease" }
]
},
{
chapterNumber: 6,
chapterName: "Game Playing",
vivaQuestions: [
{ question: "What is the MiniMax Search Procedure?", answer: "Sir, MiniMax is an adversarial search algorithm used in two-player games. It assumes the 'Max' player tries to maximize the score, while the 'Min' player tries to minimize it, calculating the optimal move." },
{ question: "What are Alpha-Beta Cut-offs?", answer: "Yes sir, Alpha-Beta pruning is an optimization technique for the MiniMax algorithm. It cuts off branches of the game tree that don't need to be evaluated because a better move has already been found." },
{ question: "What is 'Alpha' in Alpha-Beta pruning?", answer: "Sir, Alpha represents the best (highest) value that the maximizer can guarantee at the current level or above." },
{ question: "What is 'Beta' in Alpha-Beta pruning?", answer: "Sir, Beta represents the best (lowest) value that the minimizer can guarantee at the current level or above." },
{ question: "What is Iterative Deepening in game playing?", answer: "Sir, Iterative Deepening is a search strategy that repeatedly performs depth-limited searches, gradually increasing the depth limit. It combines the space efficiency of DFS with the completeness of BFS." },
{ question: "Why do we need Refinements in game playing?", answer: "Sir, standard MiniMax is too slow for complex games like chess. Refinements, such as Alpha-Beta pruning and heuristic evaluation functions, heavily reduce the search space and execution time." },
{ question: "When does Alpha-Beta pruning cut off a branch?", answer: "Sir, a branch is pruned, or cut off, when the algorithm discovers that Alpha is greater than or equal to Beta, meaning the current path will never be chosen by the opponent." },
{ question: "What is an evaluation function in MiniMax?", answer: "Sir, an evaluation function is a heuristic that estimates the goodness of a given board position at the leaf nodes, since we cannot search the tree all the way to the end of the game." },
{ question: "Is the final decision of Alpha-Beta pruning different from MiniMax?", answer: "No sir, Alpha-Beta pruning always yields the exact same final move as the standard MiniMax algorithm. It simply arrives at the answer faster by skipping useless branches." },
{ question: "How does Iterative Deepening help under time constraints?", answer: "Sir, in timed games, iterative deepening ensures that if the time runs out suddenly, the AI still has a fully computed, 'good enough' move from the previously completed shallower depth." }
],
mcqs: [
{ question: "Which algorithm is fundamental for making decisions in two-player adversarial games?", options: ["A* Search", "MiniMax Search Procedure", "Hill Climbing", "Best-First Search"], answer: "MiniMax Search Procedure" },
{ question: "In the MiniMax algorithm, the 'Max' player seeks to:", options: ["Minimize the score", "Maximize the score", "Cut off branches", "Perform Iterative Deepening"], answer: "Maximize the score" },
{ question: "Which optimization technique reduces the number of nodes evaluated by the MiniMax algorithm?", options: ["Alpha-Beta Cut-offs", "Iterative deepening", "Goal Stack Planning", "Fuzzy Logic"], answer: "Alpha-Beta Cut-offs" },
{ question: "In Alpha-Beta pruning, 'Alpha' is associated with the:", options: ["Minimizer", "Maximizer", "Root node", "Leaf node"], answer: "Maximizer" },
{ question: "A cut-off occurs in Alpha-Beta pruning when:", options: ["Alpha < Beta", "Alpha >= Beta", "Alpha == 0", "Beta == 0"], answer: "Alpha >= Beta" },
{ question: "Which strategy performs a depth-limited search repeatedly with increasing depth limits?", options: ["Breadth-First Search", "Alpha-Beta Pruning", "Iterative deepening", "Minimax Refinements"], answer: "Iterative deepening" },
{ question: "Refinements in game playing are primarily used to:", options: ["Increase memory usage", "Decrease search time and space", "Generate random moves", "Simplify the game rules"], answer: "Decrease search time and space" },
{ question: "The function that estimates the value of a board state without reaching the end of the game is:", options: ["Alpha function", "Beta function", "Heuristic Evaluation function", "Minimax function"], answer: "Heuristic Evaluation function" },
{ question: "Alpha-Beta pruning changes the final move chosen by the MiniMax algorithm.", options: ["True", "False", "Only in Chess", "Only in Tic-Tac-Toe"], answer: "False" },
{ question: "Iterative Deepening combines the benefits of which two search strategies?", options: ["A* and Heuristic", "DFS and BFS", "Minimax and Alpha-Beta", "Forward and Backward Chaining"], answer: "DFS and BFS" }
]
},
{
chapterNumber: 7,
chapterName: "Planning",
vivaQuestions: [
{ question: "What is Planning in AI?", answer: "Sir, planning is the process of generating a sequence of actions or operators that will transform the initial state of the world into the desired goal state." },
{ question: "What is The Blocks World?", answer: "Yes sir, the Blocks World is a classic micro-world in AI used to test planning systems. It consists of a table and wooden blocks that a robotic arm must stack in a specific target order." },
{ question: "What are the Components of a Planning System?", answer: "Sir, a typical planning system requires a representation of the initial state, a representation of the goal state, and a set of operators (actions) with preconditions and effects." },
{ question: "What is Goal Stack Planning?", answer: "Sir, Goal Stack Planning uses a stack to hold both goals and actions. It works backward from the main goal, pushing sub-goals and necessary operators onto the stack until the initial state satisfies them." },
{ question: "What is a major drawback of Goal Stack Planning?", answer: "Sir, a major drawback is the 'Sussman Anomaly', where fulfilling one sub-goal undoes a previously achieved sub-goal because the planner orders them rigidly and linearly." },
{ question: "What is Nonlinear Planning Using Constraint Posting?", answer: "Sir, nonlinear planning builds a plan as a partially ordered sequence of actions rather than a strict linear list. It posts constraints on the order of actions only when absolutely necessary to avoid conflicts." },
{ question: "What is Hierarchical Planning?", answer: "Sir, Hierarchical Planning breaks a massive plan into high-level abstract tasks first. Once the high-level plan is verified, it expands each abstract task into more detailed sub-plans." },
{ question: "What are Reactive Systems in Planning?", answer: "Sir, reactive systems do not generate complex long-term plans. Instead, they use simple condition-action rules to react instantly to the current state of the dynamic environment." },
{ question: "What are 'Preconditions' and 'Effects' in planning operators?", answer: "Sir, preconditions are the conditions that must be true in the world before an action can be executed. Effects are the changes made to the world state after the action is executed." },
{ question: "How does Hierarchical Planning handle complexity?", answer: "Sir, it handles complexity by ignoring low-level details initially. It solves the problem at a macro level, which drastically reduces the search space compared to flat planning." }
],
mcqs: [
{ question: "A classic AI micro-world used to experiment with planning algorithms is:", options: ["The Blocks World", "Chess", "Tic-Tac-Toe", "Water Jug"], answer: "The Blocks World" },
{ question: "Which planning technique uses a stack to push sub-goals and operators?", options: ["Hierarchical Planning", "Goal Stack Planning", "Reactive Systems", "Constraint Posting"], answer: "Goal Stack Planning" },
{ question: "The 'Sussman Anomaly' is a known problem in which type of planning?", options: ["Goal Stack Planning (Linear)", "Nonlinear Planning", "Hierarchical Planning", "Reactive Planning"], answer: "Goal Stack Planning (Linear)" },
{ question: "Which planning approach creates partially ordered plans and applies ordering constraints only when needed?", options: ["Goal Stack Planning", "Nonlinear Planning Using Constraint Posting", "Reactive Systems", "Minimax Planning"], answer: "Nonlinear Planning Using Constraint Posting" },
{ question: "Which technique creates a high-level abstract plan first before detailing lower-level steps?", options: ["Goal Stack Planning", "Reactive Systems", "Hierarchical Planning", "Nonlinear Planning"], answer: "Hierarchical Planning" },
{ question: "Which systems avoid long-term planning and simply react to the immediate environment?", options: ["Reactive Systems", "Hierarchical Systems", "Goal Stack Planners", "Constraint Posters"], answer: "Reactive Systems" },
{ question: "Operators in a planning system typically consist of:", options: ["Nodes and Edges", "Preconditions and Effects", "Alpha and Beta", "Heuristics and Goals"], answer: "Preconditions and Effects" },
{ question: "The representation of what needs to be achieved is known as the:", options: ["Initial State", "Goal State", "Operator", "Reactive Rule"], answer: "Goal State" },
{ question: "Constraint posting is a technique mainly associated with:", options: ["Linear Planning", "Nonlinear Planning", "Game Playing", "Neural Networks"], answer: "Nonlinear Planning" },
{ question: "Hierarchical planning reduces complexity by:", options: ["Reacting instantly", "Using fuzzy logic", "Ignoring low-level details initially", "Using Goal Stacks strictly"], answer: "Ignoring low-level details initially" }
]
},
{
chapterNumber: 8,
chapterName: "Natural Language Processing",
vivaQuestions: [
{ question: "What is Natural Language Processing (NLP)?", answer: "Sir, Natural Language Processing is a branch of AI that gives computers the ability to understand, interpret, and generate human language in a valuable way." },
{ question: "What is Syntactic Processing?", answer: "Sir, syntactic processing, or parsing, analyzes the grammatical structure of a sentence. It checks if the sentence conforms to the rules of the language and generates a parse tree." },
{ question: "What is Semantic Analysis?", answer: "Yes sir, semantic analysis focuses on extracting the dictionary meaning of the words and understanding the literal, exact meaning of the sentence, rejecting grammatically correct but nonsensical phrases." },
{ question: "What is Discourse Processing?", answer: "Sir, discourse processing involves understanding the context of sentences by linking them to previous sentences in the paragraph. It resolves pronouns like 'he' or 'it' to the correct nouns." },
{ question: "What is Pragmatic Processing?", answer: "Sir, pragmatic processing goes beyond literal meaning to understand the intended real-world meaning based on context and the speaker's intent. For example, 'Can you pass the salt?' is a request, not a yes/no question." },
{ question: "What is Spell Checking in NLP?", answer: "Sir, spell checking is a fundamental NLP application that identifies misspelled words in a text and suggests corrections, often using algorithms like minimum edit distance." },
{ question: "Why is ambiguity a major problem in NLP?", answer: "Sir, human language is highly ambiguous. A single word or sentence can have multiple meanings depending on context, making it extremely difficult for a machine to parse and understand accurately." },
{ question: "What is Lexical Analysis in the context of NLP?", answer: "Sir, lexical analysis involves dividing the text into smaller units like paragraphs, sentences, and words (tokens), and analyzing individual words." },
{ question: "Can a sentence be syntactically correct but semantically wrong?", answer: "Yes sir. For example, 'Colorless green ideas sleep furiously' follows all English grammar rules (syntax) but makes absolutely no logical sense (semantics)." },
{ question: "How does discourse processing handle anaphora resolution?", answer: "Sir, anaphora resolution is the process where discourse processing algorithms figure out what a pronoun like 'he', 'she', or 'they' refers to from the preceding text." }
],
mcqs: [
{ question: "Which NLP phase is responsible for checking the grammatical structure of a sentence?", options: ["Semantic Analysis", "Syntactic Processing", "Pragmatic Processing", "Discourse Processing"], answer: "Syntactic Processing" },
{ question: "Extracting the literal, dictionary meaning of a sentence is the task of:", options: ["Semantic Analysis", "Syntactic Processing", "Spell Checking", "Discourse Processing"], answer: "Semantic Analysis" },
{ question: "Resolving references like pronouns (e.g., 'he' or 'it') to preceding nouns is part of:", options: ["Semantic Analysis", "Discourse Processing", "Syntactic Processing", "Spell Checking"], answer: "Discourse Processing" },
{ question: "Understanding the speaker's real-world intent beyond the literal text is known as:", options: ["Pragmatic Processing", "Semantic Analysis", "Syntactic Processing", "Discourse Processing"], answer: "Pragmatic Processing" },
{ question: "Which tool uses algorithms like Minimum Edit Distance to correct word errors?", options: ["Parser", "Spell Checking", "Semantic Analyzer", "Discourse Resolver"], answer: "Spell Checking" },
{ question: "The sentence 'The apple ate the boy' is syntactically valid but fails in:", options: ["Spell Checking", "Semantic Analysis", "Lexical Analysis", "Discourse Analysis"], answer: "Semantic Analysis" },
{ question: "Parsing a sentence typically results in a:", options: ["Parse Tree", "Neural Network", "Truth Table", "Bayesian Network"], answer: "Parse Tree" },
{ question: "Which processing phase handles the connections and context between multiple sentences?", options: ["Syntactic Processing", "Semantic Analysis", "Discourse Processing", "Pragmatic Processing"], answer: "Discourse Processing" },
{ question: "NLP stands for:", options: ["Natural Learning Process", "Natural Language Processing", "Neural Language Program", "Non-linear Processing"], answer: "Natural Language Processing" },
{ question: "Sarcasm and irony are primarily decoded during which NLP phase?", options: ["Syntactic Processing", "Lexical Analysis", "Pragmatic Processing", "Spell Checking"], answer: "Pragmatic Processing" }
]
},
{
chapterNumber: 9,
chapterName: "Connectionist Models",
vivaQuestions: [
{ question: "What are Connectionist Models?", answer: "Sir, connectionist models, or Artificial Neural Networks, are computing systems inspired by the biological neural networks of animal brains, solving problems through interconnected artificial neurons." },
{ question: "What is a Hopfield Network?", answer: "Yes sir, a Hopfield Network is a type of recurrent artificial neural network that acts as an associative memory system with binary threshold nodes. It is used to recover complete patterns from partial or noisy inputs." },
{ question: "How does Learning in a Neural Network work?", answer: "Sir, learning in a neural network involves adjusting the weights of the connections between neurons based on training data, typically using algorithms like backpropagation, to minimize the error in output." },
{ question: "What are Recurrent Networks?", answer: "Sir, Recurrent Neural Networks (RNNs) have connections that form directed cycles. This allows them to maintain a 'memory' of previous inputs, making them ideal for sequential or time-series data like text or speech." },
{ question: "What are Distributed Representations?", answer: "Sir, in connectionist models, distributed representation means that a concept is not stored in a single neuron. Instead, it is represented by the activation pattern of many neurons across the network." },
{ question: "What is the difference between Connectionist AI and Symbolic AI?", answer: "Sir, Symbolic AI uses explicit logic, rules, and symbols to process knowledge. Connectionist AI relies on learning patterns and adjusting numeric weights in a network of neurons without explicit rules." },
{ question: "Can you name an Application of Neural Networks?", answer: "Sir, Neural Networks are heavily applied in image recognition, natural language processing, predictive analytics, and autonomous driving." },
{ question: "What is an activation function in a neural network?", answer: "Sir, an activation function decides whether a neuron should be activated or not by calculating the weighted sum of its inputs and adding a bias. It introduces non-linearity into the network." },
{ question: "Why is 'memory' important in Recurrent Networks?", answer: "Sir, memory allows the network to process sequences of varying lengths where the context of the previous data points is crucial for predicting the next output, like predicting the next word in a sentence." },
{ question: "What makes Hopfield networks special?", answer: "Sir, they are fully connected networks guaranteed to converge to a stable local minimum, which makes them excellent for auto-associative memory tasks, like retrieving a saved image from a corrupted version." }
],
mcqs: [
{ question: "Connectionist Models are heavily inspired by:", options: ["Mathematical logic", "Biological neural networks", "Quantum mechanics", "Linguistics"], answer: "Biological neural networks" },
{ question: "Which network is an auto-associative memory system that uses binary threshold nodes?", options: ["Feedforward Network", "Hopfield Network", "Convolutional Network", "Expert System"], answer: "Hopfield Network" },
{ question: "Adjusting the weights of interconnections to minimize error is called:", options: ["Learning in Neural Network", "Distributed Representation", "Symbolic AI", "Hopfield Routing"], answer: "Learning in Neural Network" },
{ question: "Which neural network architecture is best suited for sequential data because it contains loops?", options: ["Hopfield Network", "Feedforward Network", "Recurrent Networks", "Decision Trees"], answer: "Recurrent Networks" },
{ question: "When a concept is represented by a pattern of activations across many neurons, it is called:", options: ["Local Representation", "Symbolic Representation", "Distributed Representations", "Semantic Representation"], answer: "Distributed Representations" },
{ question: "Which AI approach relies on explicit, human-readable logic and rules rather than weights?", options: ["Connectionist AI", "Symbolic AI", "Neural Networks", "Hopfield Network"], answer: "Symbolic AI" },
{ question: "Which of the following is a classic application of Neural Networks?", options: ["Simple arithmetic", "Database querying", "Image and speech recognition", "Web browsing"], answer: "Image and speech recognition" },
{ question: "Recurrent Networks differ from standard Feedforward Networks because they have:", options: ["No weights", "Only one layer", "Connections forming directed cycles (loops)", "No activation functions"], answer: "Connections forming directed cycles (loops)" },
{ question: "Connectionist models are also commonly known as:", options: ["Expert Systems", "Artificial Neural Networks", "Fuzzy Systems", "Prolog Programs"], answer: "Artificial Neural Networks" },
{ question: "Hopfield networks are guaranteed to:", options: ["Learn instantly", "Converge to a stable state", "Solve NP-Complete problems", "Prevent all errors"], answer: "Converge to a stable state" }
]
},
{
chapterNumber: 10,
chapterName: "Expert Systems",
vivaQuestions: [
{ question: "What is an Expert System?", answer: "Sir, an Expert System is an AI program designed to emulate the decision-making ability of a human expert in a specific domain, using a knowledge base and an inference engine." },
{ question: "How is Domain Knowledge represented in Expert Systems?", answer: "Sir, Domain Knowledge is usually represented in the form of IF-THEN production rules, frames, or semantic networks, explicitly storing facts and heuristics obtained from human experts." },
{ question: "What is an Expert System Shell?", answer: "Yes sir, an Expert System Shell is a ready-made software framework that includes an inference engine and a user interface, but lacks domain knowledge. You just plug in the rules to build a new system quickly." },
{ question: "What is the 'Explanation' facility in an Expert System?", answer: "Sir, the Explanation facility is a crucial feature that allows the system to explain its reasoning to the user, answering 'How' it reached a conclusion and 'Why' it is asking a specific question." },
{ question: "What is Knowledge Acquisition?", answer: "Sir, Knowledge Acquisition is the difficult process of extracting domain knowledge, heuristics, and rules of thumb from human experts and structuring it into a format the expert system can use." },
{ question: "What are the two main components of an Expert System?", answer: "Sir, the two main components are the Knowledge Base, which stores the rules and facts, and the Inference Engine, which applies logical rules to the knowledge base to deduce new information." },
{ question: "What is the role of a Knowledge Engineer?", answer: "Sir, a Knowledge Engineer acts as a bridge between the human expert and the AI. They conduct interviews to acquire knowledge and encode it into the expert system's knowledge base." },
{ question: "Why is the Explanation facility important?", answer: "Sir, it builds user trust. For example, if a medical expert system recommends a dangerous surgery, the doctor must see the exact logical steps and rules the system used to make that recommendation." },
{ question: "What is forward chaining in an Expert System inference engine?", answer: "Sir, forward chaining starts with known data and applies rules to extract more data until a goal is reached. It is data-driven reasoning." },
{ question: "What is backward chaining in an Expert System?", answer: "Sir, backward chaining starts with a hypothesis or goal and works backward to see if the facts support it. It is goal-driven reasoning, very common in medical diagnostic systems." }
],
mcqs: [
{ question: "An AI system that emulates the decision-making of a human expert is an:", options: ["Expert System", "Hopfield Network", "Reactive Planner", "Genetic Algorithm"], answer: "Expert System" },
{ question: "A complete expert system without the domain knowledge is called an:", options: ["Inference Engine", "Expert System Shell", "Knowledge Base", "Explanation Facility"], answer: "Expert System Shell" },
{ question: "Which facility allows an expert system to answer 'How' and 'Why' questions?", options: ["Knowledge Acquisition", "Explanation", "Representing Domain Knowledge", "User Interface"], answer: "Explanation" },
{ question: "The process of extracting knowledge from human experts to build the knowledge base is called:", options: ["Knowledge Acquisition", "Knowledge Explanation", "Inference Processing", "Shell Scripting"], answer: "Knowledge Acquisition" },
{ question: "Domain knowledge in expert systems is frequently represented using:", options: ["IF-THEN Rules", "Neural weights", "HTML tags", "SQL queries"], answer: "IF-THEN Rules" },
{ question: "The component that processes the rules and draws conclusions is the:", options: ["Knowledge Base", "User Interface", "Inference Engine", "Explanation Facility"], answer: "Inference Engine" },
{ question: "Who builds the knowledge base by interviewing human experts?", options: ["System Administrator", "Knowledge Engineer", "Database Manager", "Network Engineer"], answer: "Knowledge Engineer" },
{ question: "Which reasoning method starts with a goal and works backward to find supporting facts?", options: ["Forward Chaining", "Backward Chaining", "Lateral Chaining", "Nonmonotonic Reasoning"], answer: "Backward Chaining" },
{ question: "Expert System Shells help developers by:", options: ["Providing free data", "Writing the rules automatically", "Providing a pre-built inference engine so they only need to add rules", "Acting as human experts"], answer: "Providing a pre-built inference engine so they only need to add rules" },
{ question: "Explanation facilities are crucial primarily because they:", options: ["Speed up execution", "Build user trust and verify logic", "Reduce memory usage", "Eliminate syntax errors"], answer: "Build user trust and verify logic" }
]
},
{
chapterNumber: 11,
chapterName: "Genetic Algorithms",
vivaQuestions: [
{ question: "What are Genetic Algorithms (GAs)?", answer: "Sir, Genetic Algorithms are search and optimization techniques inspired by Charles Darwin's theory of natural evolution. They reflect the process of natural selection where the fittest individuals are selected for reproduction." },
{ question: "How do GAs take a 'Peek into the Biological World'?", answer: "Yes sir, GAs borrow biological concepts like populations, chromosomes, genes, survival of the fittest, crossover (mating), and mutation to evolve solutions to complex problems over generations." },
{ question: "What is a 'Population' in a Genetic Algorithm?", answer: "Sir, a population is a set of potential solutions to the given problem. Each individual solution is represented as a chromosome, often encoded as a binary string." },
{ question: "What is a Fitness Function?", answer: "Sir, a fitness function evaluates how 'good' or fit a particular solution (chromosome) is relative to the problem. Fitter individuals have a higher probability of being selected for reproduction." },
{ question: "What is the significance of the Selection operator?", answer: "Sir, the Selection operator ensures that chromosomes with higher fitness scores are chosen to pass their genes to the next generation, simulating survival of the fittest." },
{ question: "What is the Crossover operator?", answer: "Sir, Crossover is a genetic operator used to combine the genetic information of two parents to generate new offspring. It mimics biological reproduction by swapping segments of the parent chromosomes." },
{ question: "What is the significance of the Mutation operator?", answer: "Sir, Mutation involves randomly flipping a few bits in a chromosome. Its significance is to maintain genetic diversity within the population and prevent the algorithm from getting stuck in local optima." },
{ question: "What are Termination Parameters in GAs?", answer: "Sir, Termination Parameters are conditions that determine when the Genetic Algorithm should stop. Common parameters include reaching a maximum number of generations or achieving an acceptable fitness level." },
{ question: "Why do we use Genetic Algorithms?", answer: "Sir, GAs are highly effective for solving NP-Hard optimization problems and searching massive, complex, and non-linear search spaces where traditional mathematical algorithms fail or take too long." },
{ question: "What happens if the mutation rate is too high?", answer: "Sir, if the mutation rate is set too high, the algorithm loses its evolutionary nature and essentially degenerates into a completely random search, destroying good solutions." }
],
mcqs: [
{ question: "Genetic Algorithms are inspired by which biological concept?", options: ["Photosynthesis", "Natural selection and evolution", "Cell division", "Neural pathways"], answer: "Natural selection and evolution" },
{ question: "A candidate solution in a Genetic Algorithm is typically represented as a:", options: ["Node", "Neuron", "Chromosome", "Rule"], answer: "Chromosome" },
{ question: "Which function evaluates how 'good' a candidate solution is?", options: ["Heuristic Function", "Fitness Function", "Activation Function", "Hash Function"], answer: "Fitness Function" },
{ question: "Which genetic operator combines two parent chromosomes to produce offspring?", options: ["Selection", "Mutation", "Crossover", "Termination"], answer: "Crossover" },
{ question: "The primary significance of the Mutation operator is to:", options: ["Kill weak chromosomes", "Maintain genetic diversity and prevent premature convergence", "Evaluate fitness", "Combine parent traits"], answer: "Maintain genetic diversity and prevent premature convergence" },
{ question: "Which operator favors chromosomes with higher fitness scores?", options: ["Mutation", "Crossover", "Selection", "Encoding"], answer: "Selection" },
{ question: "Conditions like 'maximum generations reached' or 'optimal fitness achieved' are known as:", options: ["Genetic Operators", "Termination Parameters", "Biological Rules", "Fitness Functions"], answer: "Termination Parameters" },
{ question: "In a binary encoded GA, mutation typically involves:", options: ["Deleting half the string", "Flipping a bit from 0 to 1 or 1 to 0", "Adding two strings together", "Converting to decimal"], answer: "Flipping a bit from 0 to 1 or 1 to 0" },
{ question: "Genetic Algorithms are highly suited for:", options: ["Simple linear sorting", "Complex optimization problems", "Word processing", "Basic arithmetic"], answer: "Complex optimization problems" },
{ question: "A collection of chromosomes representing multiple possible solutions is called a:", options: ["Generation", "Population", "Species", "Network"], answer: "Population" }
]
},
{
chapterNumber: 12,
chapterName: "Introduction to Prolog",
vivaQuestions: [
{ question: "What is Prolog?", answer: "Sir, Prolog stands for 'Programming in Logic'. It is a declarative logic programming language widely used in artificial intelligence and computational linguistics." },
{ question: "How do you convert English to Prolog Facts and Rules?", answer: "Sir, an English fact like 'John is the father of Mary' is converted to a Prolog fact father(john, mary). Rules are written using the :- operator to represent 'if'." },
{ question: "What are Goals in Prolog?", answer: "Yes sir, Goals are the queries we ask the Prolog system. When we provide a goal, Prolog searches its knowledge base to prove whether the goal is true based on the defined facts and rules." },
{ question: "What are Variables in Prolog Terminology?", answer: "Sir, in Prolog, any word starting with an uppercase letter or an underscore is a variable. Prolog tries to instantiate or 'bind' these variables with values that make the goal true." },
{ question: "What is Backtracking in Prolog?", answer: "Sir, Backtracking is Prolog's built-in mechanism to find all possible solutions. If it goes down a path that fails to satisfy a goal, it backtracks to the last choice point and tries an alternative rule." },
{ question: "What is a 'Cut' in Prolog?", answer: "Sir, a Cut, represented by an exclamation mark !, is a control structure that prevents Prolog from backtracking past the point where the cut was placed, optimizing execution by pruning unnecessary search branches." },
{ question: "How does Matching work in Prolog?", answer: "Sir, Matching, or unification, is the process where Prolog tries to make two terms identical by assigning appropriate values to their variables." },
{ question: "How is Recursion used in Prolog?", answer: "Sir, since Prolog does not have traditional loop structures like 'for' or 'while', it heavily relies on Recursion to repeatedly execute logic, such as traversing lists or ancestral trees." },
{ question: "What are Lists in Prolog?", answer: "Sir, a List in Prolog is a fundamental data structure defined by square brackets [ ]. It can be split into a Head (the first element) and a Tail (the rest of the list) using the | operator." },
{ question: "Can you explain Prolog Arithmetic Operators?", answer: "Sir, Prolog uses standard arithmetic operators like +, -, *, /. However, to actually evaluate a mathematical expression, we must use the is keyword, like X is 5 + 3." }
],
mcqs: [
{ question: "Prolog is primarily based on which programming paradigm?", options: ["Object-Oriented", "Procedural", "Logic/Declarative", "Functional"], answer: "Logic/Declarative" },
{ question: "In Prolog, father(john, mary). is an example of a:", options: ["Rule", "Fact", "Variable", "Goal"], answer: "Fact" },
{ question: "A query asked to the Prolog interpreter is known as a:", options: ["Fact", "Rule", "Goal", "Cut"], answer: "Goal" },
{ question: "In Prolog terminology, variables must begin with:", options: ["A lowercase letter", "An uppercase letter or underscore", "A number", "A symbol like $"], answer: "An uppercase letter or underscore" },
{ question: "The process Prolog uses to go back and search for alternative solutions upon failure is called:", options: ["Matching", "Recursion", "Backtracking", "Unification"], answer: "Backtracking" },
{ question: "Which control structure is used to stop backtracking and improve efficiency?", options: ["Loop", "Cut (!)", "Fail", "Halt"], answer: "Cut (!)" },
{ question: "To evaluate mathematical arithmetic, Prolog uses the keyword:", options: ["=", "eval", "calculate", "is"], answer: "is" },
{ question: "Because Prolog lacks standard loops, repetitive tasks are performed using:", options: ["Recursion", "GOTO statements", "While loops", "Switch statements"], answer: "Recursion" },
{ question: "In Prolog Lists, the | operator is used to separate the:", options: ["Values and variables", "Head and Tail", "Facts and Rules", "Integers and strings"], answer: "Head and Tail" },
{ question: "The process of attempting to make two terms identical by assigning values to variables is known as:", options: ["Matching/Unification", "Cutting", "Backtracking", "Resolution"], answer: "Matching/Unification" }
]
}
]
};
