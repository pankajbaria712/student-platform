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

export const gtuNaturalLanguageProcessingViva: SubjectData = {
  subjectName: "NATURAL LANGUAGE PROCESSING",
  totalChapters: 5,
  chapters: [
    {
      chapterNumber: 1,
      chapterName: "Introduction to NLP",
      vivaQuestions: [
        { 
          question: "What is Natural Language Processing (NLP)?", 
          answer: "Yes sir, NLP is a specialized branch of Artificial Intelligence that gives computers the capability to understand, interpret, analyze, and generate human language, making interactions between machines and humans more natural." 
        },
        { 
          question: "Why is NLP considered difficult compared to other AI fields?", 
          answer: "Sir, NLP is challenging because human language is inherently ambiguous, context-dependent, and relies heavily on cultural nuances. Words can have multiple meanings, and the structure of sentences can be interpreted in several different ways depending on the situation." 
        },
        { 
          question: "What are the core components of an NLP system?", 
          answer: "Sir, the core components typically include morphological analysis, lexical analysis, syntactic analysis (parsing), semantic analysis, discourse integration, and pragmatic analysis, which work together to process the language." 
        },
        { 
          question: "What is an NLP pipeline?", 
          answer: "Sir, an NLP pipeline is a series of structured processing steps, starting from raw text and moving through stages like tokenization, normalization, POS tagging, and entity recognition to convert unstructured text into a structured format for analysis." 
        },
        { 
          question: "Can you list some practical applications of NLP?", 
          answer: "Yes sir, NLP is used everywhere today. Some prominent applications include Machine Translation (like Google Translate), chatbots for customer support, automated sentiment analysis of reviews, and summarization tools that condense long documents." 
        },
        { 
          question: "What is the historical significance of NLP?", 
          answer: "Sir, NLP history is quite rich, starting back in the 1950s with early machine translation efforts and the Turing Test. Over the decades, it has evolved from simple rule-based systems to complex statistical models and modern deep learning-based approaches." 
        },
        { 
          question: "What are the main disadvantages of using NLP?", 
          answer: "Sir, the main disadvantages include the requirement for massive amounts of high-quality data to train effective models, the difficulty in handling slang or sarcasm, and the high computational cost of running state-of-the-art models." 
        },
        { 
          question: "How do you distinguish between advantages and disadvantages of NLP?", 
          answer: "Sir, the advantages lie in efficiency, scalability, and ability to handle multilingual tasks automatically, while the disadvantages are primarily related to accuracy issues when the context is complex or the data is domain-specific." 
        },
        { 
          question: "What are NLP libraries, and why do we need them?", 
          answer: "Sir, NLP libraries like NLTK, Spacy, or Hugging Face provide pre-built functions and models. We need them because they save us from writing complex algorithms for common tasks like tokenization or sentiment analysis from scratch." 
        },
        { 
          question: "What do you mean by Phases of NLP?", 
          answer: "Sir, the phases of NLP refer to the step-by-step methodology, starting from text preprocessing, proceeding through linguistic analysis at different levels, and finally producing an application-specific output." 
        }
      ],
      mcqs: [
        { question: "What is the primary goal of Natural Language Processing?", options: ["To compile code", "To enable machine-human language interaction", "To optimize database queries", "To design hardware"], answer: "To enable machine-human language interaction" },
        { question: "Which of the following is considered a major challenge in NLP?", options: ["Ambiguity", "Speed", "Memory usage", "Fixed grammar"], answer: "Ambiguity" },
        { question: "Which of the following is an application of NLP?", options: ["Compiler construction", "Sentiment Analysis", "OS kernel design", "Circuit simulation"], answer: "Sentiment Analysis" },
        { question: "What is the first step in a typical NLP pipeline?", options: ["Semantic analysis", "Parsing", "Text preprocessing/Tokenization", "Summarization"], answer: "Text preprocessing/Tokenization" },
        { question: "Which of these is a popular Python library for NLP?", options: ["NLTK", "NumPy", "Pandas", "Matplotlib"], answer: "NLTK" },
        { question: "Which phase of NLP deals with the literal meaning of words?", options: ["Syntactic", "Semantic", "Pragmatic", "Discourse"], answer: "Semantic" },
        { question: "Historical AI research in NLP began approximately in which decade?", options: ["1950s", "1990s", "2010s", "1920s"], answer: "1950s" },
        { question: "Why is sarcasm difficult for NLP systems?", options: ["It requires understanding context and intent", "It uses too many words", "It is always numerical", "It is too short"], answer: "It requires understanding context and intent" },
        { question: "Which component of NLP focuses on grammar rules?", options: ["Semantic", "Syntactic", "Pragmatic", "Morphological"], answer: "Syntactic" },
        { question: "What does NLP stand for?", options: ["Neural Language Processing", "Natural Language Processing", "Non-linear Language Processing", "Native Logic Processing"], answer: "Natural Language Processing" }
      ]
    },
    {
      chapterNumber: 2,
      chapterName: "Language Modeling and POS Tagging",
      vivaQuestions: [
        { question: "What is a Language Model?", answer: "Sir, a language model is a probabilistic model that predicts the next word in a sequence based on the preceding words. It is essential for tasks like speech recognition and text generation." },
        { question: "What is an N-gram model?", answer: "Sir, an N-gram model is a type of probabilistic language model that predicts the next item in a sequence using the previous (n-1) items. For example, a bigram (n=2) uses only the previous word." },
        { question: "What is the difference between Unigram, Bigram, and Trigram?", answer: "Sir, a Unigram considers words independently (n=1). A Bigram considers the current word and the one before it (n=2). A Trigram considers the current word and the two preceding words (n=3)." },
        { question: "What is 'Smoothing' in language modeling?", answer: "Sir, smoothing is a technique used to handle the zero-probability problem where a word sequence never appeared in the training data. It redistributes probability mass to ensure no sequence has a zero probability." },
        { question: "Why is smoothing necessary?", answer: "Sir, without smoothing, if a model encounters a word pair it hasn't seen during training, it assigns it a zero probability, which can break the entire model. Smoothing prevents this by giving it a small, non-zero probability." },
        { question: "What is Part-of-Speech (POS) Tagging?", answer: "Sir, POS Tagging is the process of assigning a grammatical category—such as noun, verb, adjective, or adverb—to each word in a given text based on its definition and context." },
        { question: "What is Morphology in NLP?", answer: "Sir, morphology is the study of word formation. It focuses on how words are constructed from smaller meaningful units called morphemes, like prefixes, suffixes, and roots." },
        { question: "What is Named Entity Recognition (NER)?", answer: "Sir, NER is a sub-task of information extraction that identifies and categorizes key information in text, such as names of persons, organizations, locations, dates, and currency values." },
        { question: "What is Natural Language Generation (NLG)?", answer: "Sir, NLG is the process of producing meaningful phrases or sentences in natural language from internal data representations, effectively the reverse of NLP comprehension." },
        { question: "How do you perform an empirical comparison of smoothing techniques?", answer: "Sir, we compare them by measuring 'Perplexity' on a held-out test set. The smoothing technique that results in lower perplexity is considered better as it predicts the test data more accurately." }
      ],
      mcqs: [
        { question: "In an N-gram model, what does 'n' represent?", options: ["Number of sentences", "Number of words in the sequence", "Number of files", "Number of errors"], answer: "Number of words in the sequence" },
        { question: "A Bigram model predicts the next word based on:", options: ["Zero previous words", "One previous word", "Two previous words", "The entire sentence"], answer: "One previous word" },
        { question: "What problem does smoothing solve?", options: ["Zero probability for unseen sequences", "Memory consumption", "Processing speed", "Syntax errors"], answer: "Zero probability for unseen sequences" },
        { question: "POS Tagging stands for:", options: ["Piece of Sentence Tagging", "Part-of-Speech Tagging", "Point of Speech Tagging", "Processing of Sentence Tagging"], answer: "Part-of-Speech Tagging" },
        { question: "Which of the following is an example of a Named Entity?", options: ["'Run'", "'Apple' (the company)", "'The'", "'And'"], answer: "'Apple' (the company)" },
        { question: "Morphology is the study of:", options: ["Sentence structure", "Word formation and morphemes", "Semantic meaning", "Document classification"], answer: "Word formation and morphemes" },
        { question: "What is the purpose of Perplexity in language modeling?", options: ["To count words", "To measure how well the model predicts test data", "To check for grammar", "To translate text"], answer: "To measure how well the model predicts test data" },
        { question: "Which model predicts a word independently of context?", options: ["Trigram", "Bigram", "Unigram", "None"], answer: "Unigram" },
        { question: "NER is used to identify:", options: ["Grammar errors", "Persons, places, and organizations", "Sentence length", "Word frequency"], answer: "Persons, places, and organizations" },
        { question: "What is Natural Language Generation?", options: ["Analyzing text", "Translating code", "Producing text from data", "Extracting keywords"], answer: "Producing text from data" }
      ]
    },
    {
      chapterNumber: 3,
      chapterName: "Words and Word Forms",
      vivaQuestions: [
        { question: "What is the 'Bag of Words' model?", answer: "Sir, Bag of Words is a simplifying representation used in NLP where a text is represented as the multiset of its words, completely disregarding grammar and word order but keeping track of word frequency." },
        { question: "What is a 'Skip-gram'?", answer: "Sir, a skip-gram is a model in word embedding where, given a target word, we try to predict the context words surrounding it. It is the opposite of the Continuous Bag-of-Words (CBOW) model." },
        { question: "What is the 'Continuous Bag-of-Words' (CBOW) model?", answer: "Sir, CBOW is an architecture in word embeddings where we predict the target word based on the surrounding context words." },
        { question: "What are word embeddings?", answer: "Sir, word embeddings are dense, low-dimensional vector representations of words where words with similar meanings are represented by vectors that are close to each other in the vector space." },
        { question: "What is Lexical Semantics?", answer: "Sir, Lexical Semantics is the study of how and what the words of a language denote. It focuses on the relationships between words, such as synonyms, antonyms, and hypernyms." },
        { question: "What is Word Sense Disambiguation (WSD)?", answer: "Sir, WSD is the process of identifying which 'sense' of a word is being used in a sentence when the word has multiple meanings. For example, 'bank' could mean a river bank or a financial bank." },
        { question: "What is Knowledge-Based WSD?", answer: "Sir, Knowledge-based WSD uses external knowledge sources, like dictionaries, thesauruses, or wordnets, to determine the correct sense of a word by comparing definitions and relations." },
        { question: "What is Supervised WSD?", answer: "Sir, Supervised WSD uses labeled training data, where a large corpus of text is manually annotated with the correct sense of each word, to train a machine learning classifier." },
        { question: "Why do we need vector representations for words?", answer: "Sir, computers cannot process raw text. We need to convert words into numbers (vectors) to perform mathematical operations, and dense embeddings capture semantic similarities that simple counts cannot." },
        { question: "What is the difference between Bag-of-Words and Embeddings?", answer: "Sir, Bag-of-Words represents words as sparse, high-dimensional vectors (only frequency matters), while Embeddings represent words as dense, low-dimensional vectors that encode actual semantic meaning." }
      ],
      mcqs: [
        { question: "What does the Bag of Words model ignore?", options: ["Word frequency", "Grammar and word order", "The document length", "Capitalization"], answer: "Grammar and word order" },
        { question: "Which embedding model predicts a word based on its context?", options: ["Skip-gram", "CBOW", "Bag of Words", "N-gram"], answer: "CBOW" },
        { question: "Which embedding model predicts context based on a target word?", options: ["CBOW", "Skip-gram", "Unigram", "None"], answer: "Skip-gram" },
        { question: "Word embeddings represent words as:", options: ["Sparse vectors", "Dense, low-dimensional vectors", "Strings", "HTML tags"], answer: "Dense, low-dimensional vectors" },
        { question: "What is the primary goal of Word Sense Disambiguation?", options: ["Identify the meaning of a polysemous word", "Check spelling", "Correct grammar", "Translate languages"], answer: "Identify the meaning of a polysemous word" },
        { question: "Which WSD approach uses manual annotations for training?", options: ["Knowledge-Based", "Supervised", "Rule-based", "Unsupervised"], answer: "Supervised" },
        { question: "Lexical Semantics focuses on:", options: ["Word formation", "Relationships between word meanings", "Sentence structure", "Document summaries"], answer: "Relationships between word meanings" },
        { question: "Knowledge-Based WSD relies on:", options: ["Training data", "Dictionaries/Wordnets", "Neural Networks", "Random guesses"], answer: "Dictionaries/Wordnets" },
        { question: "What captures semantic similarity between words?", options: ["Bag of Words", "Word Embeddings", "Simple Counts", "Parsing"], answer: "Word Embeddings" },
        { question: "In CBOW, 'Continuous' refers to:", options: ["The use of continuous vector spaces", "The infinite length of text", "The continuous clock", "Continuous updates"], answer: "The use of continuous vector spaces" }
      ]
    },
    {
      chapterNumber: 4,
      chapterName: "Text Analysis, Summarization and Extraction",
      vivaQuestions: [
        { question: "What is Sentiment Mining?", answer: "Sir, Sentiment Mining, or Sentiment Analysis, is the computational task of identifying and categorizing opinions expressed in a piece of text to determine whether the author's attitude is positive, negative, or neutral." },
        { question: "What is Text Classification?", answer: "Sir, Text Classification is the task of assigning predefined categories to free-text documents, such as automatically sorting emails into 'spam' or 'not spam'." },
        { question: "What is Text Summarization?", answer: "Sir, Text Summarization is the process of creating a shorter, condensed version of a document while preserving its key information and overall meaning." },
        { question: "What is Information Extraction (IE)?", answer: "Sir, Information Extraction is the process of automatically retrieving structured information from unstructured text, like extracting names and dates from news articles." },
        { question: "What is the difference between Extractive and Abstractive Summarization?", answer: "Sir, Extractive summarization picks the most important sentences directly from the original text. Abstractive summarization generates new sentences to describe the summary, similar to how a human would write it." },
        { question: "What is Relation Extraction?", answer: "Sir, Relation Extraction is the task of identifying semantic relationships between entities in text, such as determining that 'Steve Jobs' was the 'CEO' of 'Apple'." },
        { question: "What is Question Answering in a Multilingual Setting?", answer: "Sir, it is a system that can answer questions posed in one language by retrieving and synthesizing information from documents written in potentially different languages." },
        { question: "What is NLP in Information Retrieval (IR)?", answer: "Sir, NLP in IR helps improve search results by understanding the user's intent, handling synonyms (e.g., 'car' and 'automobile'), and ignoring irrelevant words, rather than just simple keyword matching." },
        { question: "What is Cross-Lingual Information Retrieval (CLIR)?", answer: "Sir, CLIR is a retrieval system where the query is in one language, but the documents being searched are in another language. It requires translating the query or documents." },
        { question: "What are the common features used in Text Classification?", answer: "Sir, common features include word frequency (Bag of Words), TF-IDF scores, and sometimes even character n-grams to identify topics or genres." }
      ],
      mcqs: [
        { question: "Sentiment mining determines the ________ of a text.", options: ["Grammar", "Structure", "Attitude/Polarity", "Length"], answer: "Attitude/Polarity" },
        { question: "Assigning predefined categories to documents is called:", options: ["Text Summarization", "Text Classification", "Relation Extraction", "Question Answering"], answer: "Text Classification" },
        { question: "Which summarization type creates new sentences to capture meaning?", options: ["Extractive", "Abstractive", "Supervised", "Manual"], answer: "Abstractive" },
        { question: "Information Extraction aims to retrieve:", options: ["Structured information", "Unstructured text", "Audio files", "Grammar rules"], answer: "Structured information" },
        { question: "In Relation Extraction, what are we identifying?", options: ["Sentence boundaries", "Synonyms", "Semantic relationships between entities", "Spelling errors"], answer: "Semantic relationships between entities" },
        { question: "What is the query and document language relationship in CLIR?", options: ["Same language", "Different languages", "Machine language", "No language"], answer: "Different languages" },
        { question: "Which phase of NLP helps IR systems understand intent?", options: ["Syntactic Analysis", "NLP in Information Retrieval", "Spell Checking", "Pragmatic Processing"], answer: "NLP in Information Retrieval" },
        { question: "Summarizing by selecting important existing sentences is:", options: ["Abstractive", "Extractive", "Manual", "Random"], answer: "Extractive" },
        { question: "What is a common task in Information Extraction?", options: ["Named Entity Recognition", "Generating stories", "Translating code", "Deleting data"], answer: "Named Entity Recognition" },
        { question: "Sentiment Mining is often used for:", options: ["Technical manual writing", "Customer reviews and social media", "Operating system development", "Circuit design"], answer: "Customer reviews and social media" }
      ]
    },
    {
      chapterNumber: 5,
      chapterName: "Machine Translation",
      vivaQuestions: [
        { question: "What is Machine Translation (MT)?", answer: "Sir, Machine Translation is the task of using software to automatically translate text or speech from one natural language (the source) into another (the target)." },
        { question: "What are the major problems in Machine Translation?", answer: "Sir, the problems include grammatical differences, loss of meaning during translation, polysemy (words with multiple meanings), and the need for deep cultural context." },
        { question: "What is Direct Machine Translation?", answer: "Sir, Direct MT is the simplest approach. It uses bilingual dictionaries and basic rules to translate words and phrases directly, without building a complex internal representation of the source language." },
        { question: "What is Rule-Based Machine Translation (RBMT)?", answer: "Sir, RBMT relies on sets of grammatical rules and linguistic structures developed by experts. It parses the source, transforms it, and generates target text using rules." },
        { question: "What is Statistical Machine Translation (SMT)?", answer: "Sir, SMT is an approach that uses statistical models to learn translation patterns from large parallel corpora (text translated by humans). It calculates the probability of a target sentence given a source sentence." },
        { question: "What are IBM Models?", answer: "Sir, IBM models are a series of probabilistic models used in SMT to align words between source and target languages. They calculate the probability of word-level translations." },
        { question: "What is Expectation-Maximization (EM) algorithm in SMT?", answer: "Sir, EM is an iterative algorithm used in SMT for parameter learning. It estimates the translation probabilities in the IBM models when the exact alignments are hidden/unknown." },
        { question: "What is Encoder-Decoder Architecture?", answer: "Sir, it is a Neural Machine Translation (NMT) architecture. The 'Encoder' network reads and compresses the source sentence into a vector, and the 'Decoder' network uses that vector to generate the target sentence." },
        { question: "What is Neural Machine Translation (NMT)?", answer: "Sir, NMT is a modern approach that uses large deep neural networks to translate sentences. It significantly outperforms SMT by modeling the entire sentence context in a continuous vector space." },
        { question: "What is a Parallel Corpus?", answer: "Sir, a parallel corpus is a dataset containing pairs of sentences, where each pair consists of a sentence in the source language and its human-translated version in the target language. It is essential for training MT models." }
      ],
      mcqs: [
        { question: "Machine Translation converts text from:", options: ["One language to another", "Machine code to source code", "Text to audio", "Image to text"], answer: "One language to another" },
        { question: "Which MT approach relies on expert-crafted grammatical rules?", options: ["Statistical MT", "Rule-Based MT", "Direct MT", "Neural MT"], answer: "Rule-Based MT" },
        { question: "Statistical Machine Translation learns from:", options: ["Rules", "Parallel corpora (human translations)", "Dictionaries only", "Logic"], answer: "Parallel corpora (human translations)" },
        { question: "What algorithm is used for parameter learning in IBM models?", options: ["EM (Expectation-Maximization)", "Backpropagation", "Gradient Descent", "Binary Search"], answer: "EM (Expectation-Maximization)" },
        { question: "The modern architecture for translation using neural networks is:", options: ["Rule-based", "Encoder-Decoder", "Direct mapping", "Dictionary-based"], answer: "Encoder-Decoder" },
        { question: "NMT stands for:", options: ["Neural Machine Translation", "Natural Mapping Translation", "Non-linear Machine Translation", "Native Language Translation"], answer: "Neural Machine Translation" },
        { question: "A parallel corpus consists of:", options: ["Two unrelated texts", "Source and target language translations", "Code and comments", "Lists of words"], answer: "Source and target language translations" },
        { question: "Direct MT is generally:", options: ["Highly accurate", "Simple but lacks linguistic depth", "Neural-based", "Rule-based"], answer: "Simple but lacks linguistic depth" },
        { question: "The encoder in NMT is responsible for:", options: ["Generating the target sentence", "Compressing the source sentence into a vector", "Checking spelling", "Correcting grammar"], answer: "Compressing the source sentence into a vector" },
        { question: "Which is a major challenge in MT?", options: ["Grammatical differences between languages", "Fast hardware", "Low memory", "Simple rules"], answer: "Grammatical differences between languages" }
      ]
    }
  ]
};
