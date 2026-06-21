
export const dataMiningViva = [
  {
    chapterNumber: 1,
    chapterName: "Introduction to Data Mining (DM)",
    questions: [
      {
        question: "What is Data Mining?",
        answer: "Data Mining is the process of discovering interesting, hidden, and useful patterns or knowledge from large amounts of data stored in databases, data warehouses, or other information repositories."
      },
      {
        question: "What does KDD stand for?",
        answer: "KDD stands for Knowledge Discovery from Data. Data mining is actually the core step in the broader KDD process, which turns raw data into useful information."
      },
      {
        question: "List the steps involved in the KDD process.",
        answer: "The KDD process includes data cleaning, data integration, data selection, data transformation, data mining (the actual pattern extraction), pattern evaluation, and knowledge presentation."
      },
      {
        question: "What is the difference between descriptive and predictive data mining?",
        answer: "Descriptive mining focuses on finding human-interpretable patterns that describe the data. Predictive mining uses some variables to predict unknown or future values of other variables."
      },
      {
        question: "What are the core functionalities of Data Mining?",
        answer: "Core functionalities include Data Characterization, Data Discrimination, Association Rule Mining, Classification, Prediction, Cluster Analysis, and Outlier Analysis."
      },
      {
        question: "Define Data Characterization.",
        answer: "Data characterization is the summarization of the general characteristics or features of a target class of data, often outputting rules, pie charts, or bar charts."
      },
      {
        question: "Define Data Discrimination.",
        answer: "Data discrimination compares the target class data objects with objects from one or multiple contrasting classes, revealing the features that distinguish them."
      },
      {
        question: "What is Association Analysis?",
        answer: "Association analysis discovers frequent patterns, associations, correlations, or causal structures among sets of items or objects in transactional databases (e.g., market basket analysis)."
      },
      {
        question: "What is Classification in Data Mining?",
        answer: "Classification is the process of finding a model (or function) that describes and distinguishes data classes or concepts, for the purpose of predicting the class of objects whose class label is unknown."
      },
      {
        question: "What is Cluster Analysis?",
        answer: "Cluster analysis groups a set of data objects into clusters such that objects within a cluster have high similarity to one another, but are very dissimilar to objects in other clusters."
      },
      {
        question: "What is Outlier Analysis?",
        answer: "Outlier analysis involves identifying data objects that do not comply with the general behavior or model of the data. These rare events are crucial in fraud detection and network intrusion."
      },
      {
        question: "What are Data Mining Task Primitives?",
        answer: "Task primitives define a data mining query. They specify the task type, the database portion to be investigated, the background knowledge, the interestingness measures, and the expected representation of results."
      },
      {
        question: "How is a Data Mining system integrated with a Data Warehouse?",
        answer: "A DM system can be loosely, semi-tightly, or tightly coupled with a Data Warehouse. Tight coupling provides smooth integration, using the DW's infrastructure for efficient data retrieval and processing."
      },
      {
        question: "What are the major performance issues in Data Mining?",
        answer: "Performance issues involve the efficiency and scalability of data mining algorithms, handling massive datasets, dealing with high dimensionality, and processing distributed data."
      },
      {
        question: "What are the challenges regarding diverse data types in Data Mining?",
        answer: "Challenges include handling complex types like relational, spatial, temporal, multimedia, text, and graph data, which require specialized mining algorithms unlike simple flat files."
      },
      {
        question: "Why is Data Mining often called a multidisciplinary field?",
        answer: "Data Mining integrates techniques from multiple disciplines, including database technology, statistics, machine learning, pattern recognition, and artificial intelligence."
      },
      {
        question: "What is the motivation behind Data Mining?",
        answer: "The primary motivation is the 'data rich but information poor' phenomenon. Organizations generate explosive amounts of data and urgently need automated tools to extract actionable knowledge from it."
      },
      {
        question: "Is Data Mining a query language like SQL?",
        answer: "No. SQL fetches exact data based on specified constraints. Data Mining discovers hidden, unknown patterns and predicts future trends that cannot be found using simple SQL queries."
      },
      {
        question: "What is Background Knowledge in Data Mining?",
        answer: "Background knowledge (like concept hierarchies) is information about the domain that helps guide the discovery process and evaluate the patterns found by the data mining algorithm."
      },
      {
        question: "What makes a pattern 'interesting' in Data Mining?",
        answer: "A pattern is interesting if it is easily understood by humans, valid on new or test data with some degree of certainty, potentially useful, and novel."
      }
    ],
    mcqs: [
      {
        question: "Which of the following refers to the process of finding hidden patterns from large databases?",
        options: ["Data Warehousing", "Data Mining", "Data Backup", "Database Management"],
        correctAnswer: "Data Mining"
      },
      {
        question: "KDD stands for:",
        options: ["Knowledge Discovery from Data", "Knowledge Database Design", "Key Data Discovery", "Known Data Distributions"],
        correctAnswer: "Knowledge Discovery from Data"
      },
      {
        question: "Which of the following is NOT a step in the KDD process?",
        options: ["Data cleaning", "Data selection", "Data creation", "Pattern evaluation"],
        correctAnswer: "Data creation"
      },
      {
        question: "Grouping data into classes based on similarity is called:",
        options: ["Classification", "Association", "Clustering", "Regression"],
        correctAnswer: "Clustering"
      },
      {
        question: "Which data mining task is used to predict a missing or unavailable numerical data value?",
        options: ["Classification", "Association", "Clustering", "Prediction / Regression"],
        correctAnswer: "Prediction / Regression"
      },
      {
        question: "Discovering rules that predict the occurrence of an item based on the occurrences of other items is called:",
        options: ["Classification", "Association Rule Mining", "Clustering", "Outlier Analysis"],
        correctAnswer: "Association Rule Mining"
      },
      {
        question: "Detecting fraudulent credit card transactions is a typical application of:",
        options: ["Data characterization", "Outlier Analysis", "Data discrimination", "Data integration"],
        correctAnswer: "Outlier Analysis"
      },
      {
        question: "Which coupling scheme provides the most efficient integration of a DM system with a Database/Data Warehouse?",
        options: ["No coupling", "Loose coupling", "Semi-tight coupling", "Tight coupling"],
        correctAnswer: "Tight coupling"
      },
      {
        question: "Which analysis describes the general characteristics of a target class?",
        options: ["Data Discrimination", "Data Characterization", "Clustering", "Evolution Analysis"],
        correctAnswer: "Data Characterization"
      },
      {
        question: "Predictive data mining mainly includes:",
        options: ["Clustering and Association", "Classification and Regression", "Characterization and Discrimination", "Summarization"],
        correctAnswer: "Classification and Regression"
      },
      {
        question: "What limits the performance of data mining algorithms on massive datasets?",
        options: ["Lack of data", "Efficiency and Scalability", "Easy algorithms", "Low dimensionality"],
        correctAnswer: "Efficiency and Scalability"
      },
      {
        question: "Data mining is considered a confluence of multiple disciplines EXCEPT:",
        options: ["Statistics", "Machine Learning", "Database Systems", "Quantum Mechanics"],
        correctAnswer: "Quantum Mechanics"
      },
      {
        question: "Which step of KDD removes noise and inconsistent data?",
        options: ["Data Cleaning", "Data Integration", "Data Mining", "Data Transformation"],
        correctAnswer: "Data Cleaning"
      },
      {
        question: "Which primitive specifies the measure to evaluate the discovered patterns?",
        options: ["Task type", "Background knowledge", "Interestingness measures", "Result representation"],
        correctAnswer: "Interestingness measures"
      },
      {
        question: "A pattern is considered interesting if it is:",
        options: ["Valid, novel, and useful", "Redundant", "Incomprehensible", "Already known"],
        correctAnswer: "Valid, novel, and useful"
      },
      {
        question: "Contrasting a target class with a different class is known as:",
        options: ["Characterization", "Discrimination", "Association", "Clustering"],
        correctAnswer: "Discrimination"
      },
      {
        question: "Which phase comes directly before Data Mining in the KDD pipeline?",
        options: ["Data Cleaning", "Knowledge Presentation", "Data Transformation", "Pattern Evaluation"],
        correctAnswer: "Data Transformation"
      },
      {
        question: "Data mining is driven by the phenomenon:",
        options: ["Data poor, Information rich", "Data rich, Information poor", "No data, No information", "Manual data entry"],
        correctAnswer: "Data rich, Information poor"
      },
      {
        question: "The specification of the database portion to be investigated is part of:",
        options: ["Data mining task primitives", "Data cleaning", "Data visualization", "Pattern presentation"],
        correctAnswer: "Data mining task primitives"
      },
      {
        question: "Which task is unsupervised learning?",
        options: ["Classification", "Regression", "Clustering", "Prediction"],
        correctAnswer: "Clustering"
      }
    ]
  },
  {
    chapterNumber: 2,
    chapterName: "Data Pre-processing",
    questions: [
      {
        question: "Why is Data Pre-processing necessary?",
        answer: "Real-world data is often incomplete (missing values), noisy (errors/outliers), and inconsistent. Pre-processing improves data quality, which directly impacts the accuracy and efficiency of the mining process."
      },
      {
        question: "What is Data Cleaning?",
        answer: "Data cleaning consists of routines that attempt to fill in missing values, smooth out noise, identify or remove outliers, and resolve inconsistencies in the data."
      },
      {
        question: "How can we handle missing values?",
        answer: "Missing values can be handled by ignoring the tuple, filling the value manually, using a global constant, substituting the attribute mean/median, or predicting the most probable value."
      },
      {
        question: "What are techniques for smoothing noisy data?",
        answer: "Techniques include Binning (smoothing by neighborhood values), Regression (fitting data to a function), and Clustering (detecting and removing outliers outside clusters)."
      },
      {
        question: "What is Data Integration?",
        answer: "Data integration combines data from multiple sources (databases, files, cubes) into a coherent store. It involves handling schema integration, redundancy, and data value conflicts."
      },
      {
        question: "What is the Correlation Coefficient used for in Data Integration?",
        answer: "It is used for redundancy detection. By measuring the correlation coefficient or using Chi-square tests, we can determine if one attribute is strongly implied by another, allowing for its removal."
      },
      {
        question: "What is Data Transformation?",
        answer: "Data transformation converts data into appropriate forms for mining. It includes smoothing, aggregation, generalization, normalization (scaling data to fall within a small range), and attribute construction."
      },
      {
        question: "What is Min-Max Normalization?",
        answer: "Min-Max normalization performs a linear transformation on original data, mapping the values into a new specific range (typically 0.0 to 1.0) while preserving the relationships among original data values."
      },
      {
        question: "What is Z-score Normalization?",
        answer: "Z-score (or zero-mean) normalization scales the values based on the mean and standard deviation of the attribute. It is useful when the actual minimum and maximum are unknown or skewed by outliers."
      },
      {
        question: "What is Data Reduction?",
        answer: "Data reduction techniques obtain a reduced representation of the dataset that is much smaller in volume, but produces almost the same analytical results. Techniques include dimensionality and numerosity reduction."
      },
      {
        question: "What is Dimensionality Reduction?",
        answer: "Dimensionality reduction reduces the number of random variables or attributes under consideration. Examples include Principal Component Analysis (PCA) and Feature Selection."
      },
      {
        question: "What is Feature Selection?",
        answer: "Feature selection (or subset selection) is the process of identifying and removing irrelevant, weakly relevant, or redundant attributes or dimensions from the dataset."
      },
      {
        question: "What is Data Discretization?",
        answer: "Discretization transforms continuous attribute values into a finite number of intervals. It replaces raw values with interval labels (e.g., replacing age with 'Youth', 'Adult', 'Senior')."
      },
      {
        question: "What is Concept Hierarchy Generation?",
        answer: "Concept hierarchy generation organizes concepts (attribute values) into a tree-like structure from low-level to high-level concepts (e.g., Street -> City -> State -> Country) to facilitate generalization."
      },
      {
        question: "What is Principal Component Analysis (PCA)?",
        answer: "PCA is a dimensionality reduction technique that transforms original variables into a new set of orthogonal, uncorrelated variables (principal components) that capture the maximum variance in the data."
      },
      {
        question: "What is CUR Decomposition?",
        answer: "CUR is a matrix decomposition technique similar to SVD but explicitly uses actual rows and columns of the original matrix. It is highly efficient for analyzing large, sparse datasets."
      },
      {
        question: "What is Numerosity Reduction?",
        answer: "Numerosity reduction replaces the original data volume with smaller, alternative forms of data representation. Examples include regression models, histograms, clustering, and sampling."
      },
      {
        question: "What is Binning?",
        answer: "Binning is a discretization and smoothing technique that sorts data and partitions it into equal-frequency or equal-width bins. Smoothing can be done by bin means, medians, or boundaries."
      },
      {
        question: "What is Attribute Extraction?",
        answer: "Attribute extraction (or feature extraction) creates a new set of features from the original attributes to capture the essential information in a more compact form."
      },
      {
        question: "What are data value conflicts in Integration?",
        answer: "Data value conflicts occur when the same real-world entity is represented by different values in different sources, due to different representations, scaling, or encoding."
      }
    ],
    mcqs: [
      {
        question: "Which of the following is NOT a data preprocessing task?",
        options: ["Data Cleaning", "Data Integration", "Data Evaluation", "Data Transformation"],
        correctAnswer: "Data Evaluation"
      },
      {
        question: "Replacing missing values with the attribute mean is a technique used in:",
        options: ["Data Cleaning", "Data Reduction", "Data Integration", "Data Discretization"],
        correctAnswer: "Data Cleaning"
      },
      {
        question: "Which technique smooths data by consulting its neighborhood values?",
        options: ["Binning", "Integration", "Normalization", "Selection"],
        correctAnswer: "Binning"
      },
      {
        question: "Combining data from multiple heterogeneous sources is known as:",
        options: ["Data Transformation", "Data Reduction", "Data Integration", "Data Discretization"],
        correctAnswer: "Data Integration"
      },
      {
        question: "Scaling the attribute values to fall within a specified range like [0.0, 1.0] is called:",
        options: ["Binning", "Normalization", "Generalization", "Aggregation"],
        correctAnswer: "Normalization"
      },
      {
        question: "Which normalization technique uses the mean and standard deviation?",
        options: ["Min-Max normalization", "Decimal scaling", "Z-score normalization", "Log transformation"],
        correctAnswer: "Z-score normalization"
      },
      {
        question: "Reducing the volume of data without losing analytical value is termed:",
        options: ["Data Integration", "Data Cleaning", "Data Reduction", "Data Discretization"],
        correctAnswer: "Data Reduction"
      },
      {
        question: "PCA (Principal Component Analysis) is a technique used for:",
        options: ["Missing value imputation", "Dimensionality reduction", "Numerosity reduction", "Data integration"],
        correctAnswer: "Dimensionality reduction"
      },
      {
        question: "Transforming continuous data into interval labels (like age to 'young', 'middle_aged') is called:",
        options: ["Discretization", "Normalization", "Integration", "Reduction"],
        correctAnswer: "Discretization"
      },
      {
        question: "The Chi-Square test is primarily used in data integration for:",
        options: ["Detecting outliers", "Handling missing values", "Correlation analysis of categorical data", "Normalizing data"],
        correctAnswer: "Correlation analysis of categorical data"
      },
      {
        question: "CUR decomposition is an alternative to which standard matrix decomposition method?",
        options: ["PCA", "SVD (Singular Value Decomposition)", "K-Means", "Apriori"],
        correctAnswer: "SVD (Singular Value Decomposition)"
      },
      {
        question: "Which of the following is a numerosity reduction technique?",
        options: ["Feature Selection", "PCA", "Sampling", "Normalization"],
        correctAnswer: "Sampling"
      },
      {
        question: "Constructing a street -> city -> state mapping represents:",
        options: ["Data Cleaning", "Concept Hierarchy Generation", "Data Reduction", "Noise smoothing"],
        correctAnswer: "Concept Hierarchy Generation"
      },
      {
        question: "In binning, if values are distributed such that each bin has the same number of data points, it is called:",
        options: ["Equal-width binning", "Equal-frequency binning", "Random binning", "Smooth binning"],
        correctAnswer: "Equal-frequency binning"
      },
      {
        question: "Which transformation technique computes summary statistics like daily sales from transactional sales?",
        options: ["Normalization", "Aggregation", "Discretization", "Selection"],
        correctAnswer: "Aggregation"
      },
      {
        question: "Data with values that differ significantly from the rest of the data are known as:",
        options: ["Means", "Inliers", "Outliers", "Medians"],
        correctAnswer: "Outliers"
      },
      {
        question: "Which method is NOT a way to handle noisy data?",
        options: ["Binning", "Regression", "Clustering", "Dropping independent variables"],
        correctAnswer: "Dropping independent variables"
      },
      {
        question: "Feature selection aims to remove attributes that are:",
        options: ["Highly relevant", "Redundant and irrelevant", "Numerical", "Categorical"],
        correctAnswer: "Redundant and irrelevant"
      },
      {
        question: "Schema integration is a sub-task of:",
        options: ["Data Cleaning", "Data Reduction", "Data Integration", "Data Transformation"],
        correctAnswer: "Data Integration"
      },
      {
        question: "Using a global constant like 'Unknown' to replace missing values is:",
        options: ["A data cleaning strategy", "A normalization strategy", "A regression model", "A binning technique"],
        correctAnswer: "A data cleaning strategy"
      }
    ]
  },
  {
    chapterNumber: 3,
    chapterName: "Concept Description, Frequent Patterns, Associations",
    questions: [
      {
        question: "What is Concept Description?",
        answer: "Concept description is the most basic form of descriptive data mining. It involves characterizing and discriminating data, generating summary descriptions of class characteristics."
      },
      {
        question: "What is Data Generalization?",
        answer: "Data generalization is a process that abstracts a large set of task-relevant data from a low conceptual level to higher conceptual levels using concept hierarchies."
      },
      {
        question: "What is Attribute Relevance Analysis?",
        answer: "Attribute relevance analysis evaluates and ranks attributes based on their statistical significance to a class, helping to select only the most relevant features for characterization or discrimination."
      },
      {
        question: "What is a Frequent Item-set?",
        answer: "A frequent item-set is a collection of items that frequently occur together in a transactional dataset. Its frequency must be greater than or equal to a user-specified minimum support threshold."
      },
      {
        question: "What are Association Rules?",
        answer: "Association rules are implication expressions of the form X => Y, indicating that transactions containing itemset X are likely to also contain itemset Y."
      },
      {
        question: "Define 'Support' in Association Rules.",
        answer: "Support is the probability that a transaction contains both itemsets X and Y. It is calculated as the number of transactions containing (X U Y) divided by the total number of transactions."
      },
      {
        question: "Define 'Confidence' in Association Rules.",
        answer: "Confidence is the conditional probability that a transaction containing X also contains Y. It is calculated as the Support(X U Y) divided by Support(X)."
      },
      {
        question: "What is the Apriori property (or principle)?",
        answer: "The Apriori property states that all non-empty subsets of a frequent itemset must also be frequent. If an itemset is infrequent, all its supersets will also be infrequent."
      },
      {
        question: "How does the Apriori algorithm work?",
        answer: "Apriori uses a level-wise approach. It generates candidate itemsets of length k from frequent itemsets of length k-1, counts their supports, and prunes those below the minimum support threshold."
      },
      {
        question: "What are the two main steps of the Apriori algorithm?",
        answer: "The two steps are 'Join' (generating candidate itemsets by joining frequent itemsets of the previous pass) and 'Prune' (removing candidates containing infrequent subsets)."
      },
      {
        question: "What is FP-Growth?",
        answer: "FP-Growth (Frequent Pattern Growth) is an efficient algorithm that mines frequent itemsets without candidate generation. It compresses the database into a compact FP-tree structure."
      },
      {
        question: "Why is FP-Growth generally faster than Apriori?",
        answer: "FP-Growth is faster because it avoids the costly candidate generation process of Apriori and only requires scanning the database twice, regardless of the maximum length of frequent itemsets."
      },
      {
        question: "What is Correlation Analysis in Data Mining?",
        answer: "Correlation analysis extends association mining by measuring how strongly itemsets are related. It identifies whether the occurrence of X is positively, negatively, or independently correlated with Y."
      },
      {
        question: "What is the 'Lift' measure?",
        answer: "Lift measures the correlation between rule antecedent X and consequent Y. Lift = Confidence(X => Y) / Support(Y). A lift > 1 indicates a positive correlation."
      },
      {
        question: "What is a Closed Frequent Item-set?",
        answer: "An item-set is closed if it is frequent and there exists no proper superset with the exact same support count. This concept reduces the number of generated rules."
      },
      {
        question: "What is a Maximal Frequent Item-set?",
        answer: "An item-set is maximal if it is frequent and none of its immediate supersets are frequent. It provides the most compact representation of frequent itemsets."
      },
      {
        question: "What is Market Basket Analysis?",
        answer: "Market basket analysis is a classic use of association rule mining that discovers buying patterns by extracting associations between products purchased together by customers."
      },
      {
        question: "How is the quality of an association rule measured?",
        answer: "Rule quality is measured objectively using metrics like Support, Confidence, Lift, and Chi-square, and subjectively based on whether the rule provides actionable, novel business insights."
      },
      {
        question: "What are Multi-level Association Rules?",
        answer: "Multi-level association rules involve items at different levels of a concept hierarchy. For example, finding associations between 'Milk' and 'Bread' vs. 'Skim Milk' and 'Wheat Bread'."
      },
      {
        question: "What are Advanced Association Rule Techniques?",
        answer: "Advanced techniques include mining multi-dimensional rules (using multiple attributes), quantitative association rules (using numeric attributes), and constraint-based mining."
      }
    ],
    mcqs: [
      {
        question: "Which of the following is defined as the probability that a transaction contains both X and Y?",
        options: ["Confidence", "Support", "Lift", "Correlation"],
        correctAnswer: "Support"
      },
      {
        question: "Which of the following is defined as the conditional probability that a transaction containing X also contains Y?",
        options: ["Support", "Confidence", "Lift", "Frequent Itemset"],
        correctAnswer: "Confidence"
      },
      {
        question: "The property stating that 'Any subset of a frequent itemset must also be frequent' is known as:",
        options: ["FP-Growth Property", "Apriori Property", "Markov Property", "Maximal Property"],
        correctAnswer: "Apriori Property"
      },
      {
        question: "Which algorithm avoids candidate generation while finding frequent itemsets?",
        options: ["Apriori", "K-Means", "FP-Growth", "Decision Tree"],
        correctAnswer: "FP-Growth"
      },
      {
        question: "Market Basket Analysis is a typical application of:",
        options: ["Classification", "Clustering", "Association Rule Mining", "Regression"],
        correctAnswer: "Association Rule Mining"
      },
      {
        question: "If Lift(X, Y) > 1, the occurrence of X and Y are:",
        options: ["Positively correlated", "Negatively correlated", "Independent", "Mutually exclusive"],
        correctAnswer: "Positively correlated"
      },
      {
        question: "If an itemset is frequent, but no superset of it is frequent, it is called a:",
        options: ["Closed Itemset", "Maximal Frequent Itemset", "Candidate Itemset", "Infrequent Itemset"],
        correctAnswer: "Maximal Frequent Itemset"
      },
      {
        question: "The two main steps in the Apriori algorithm are:",
        options: ["Split and Merge", "Join and Prune", "Map and Reduce", "Sort and Search"],
        correctAnswer: "Join and Prune"
      },
      {
        question: "Which metric is used to evaluate the truthfulness of an association rule?",
        options: ["Support", "Confidence", "Both Support and Confidence", "Distance"],
        correctAnswer: "Both Support and Confidence"
      },
      {
        question: "Abstracting data from a low level to a high level using a hierarchy is known as:",
        options: ["Data Transformation", "Data Generalization", "Data Cleaning", "Data Integration"],
        correctAnswer: "Data Generalization"
      },
      {
        question: "Which analysis removes attributes that do not contribute to distinguishing classes?",
        options: ["Attribute Relevance Analysis", "Association Mining", "Cluster Analysis", "Outlier Analysis"],
        correctAnswer: "Attribute Relevance Analysis"
      },
      {
        question: "In Apriori, what is used to discard itemsets that cannot possibly be frequent?",
        options: ["Minimum Confidence", "Minimum Support", "Lift", "Information Gain"],
        correctAnswer: "Minimum Support"
      },
      {
        question: "A rule with Support = 10% and Confidence = 80% means:",
        options: ["10% of transactions contain X and Y, and 80% of transactions containing X also contain Y", "80% of transactions contain X and Y", "X and Y are independent", "The rule is invalid"],
        correctAnswer: "10% of transactions contain X and Y, and 80% of transactions containing X also contain Y"
      },
      {
        question: "An itemset is considered 'closed' if:",
        options: ["It has no frequent superset", "It is frequent and has no proper superset with the same support", "It contains only one item", "It has negative correlation"],
        correctAnswer: "It is frequent and has no proper superset with the same support"
      },
      {
        question: "Which data structure is fundamentally used by the FP-Growth algorithm?",
        options: ["Hash Table", "Binary Search Tree", "FP-Tree", "Linked List"],
        correctAnswer: "FP-Tree"
      },
      {
        question: "Association rules mined involving multiple dimensions (attributes) are called:",
        options: ["Single-dimensional rules", "Multi-dimensional association rules", "Boolean rules", "Spatial rules"],
        correctAnswer: "Multi-dimensional association rules"
      },
      {
        question: "Concept Description involves which two forms of data summarization?",
        options: ["Clustering and Regression", "Characterization and Discrimination", "Association and Correlation", "Cleaning and Integration"],
        correctAnswer: "Characterization and Discrimination"
      },
      {
        question: "A strong association rule must satisfy:",
        options: ["Only minimum support", "Only minimum confidence", "Both minimum support and minimum confidence", "Minimum Lift"],
        correctAnswer: "Both minimum support and minimum confidence"
      },
      {
        question: "Which metric accounts for the base probability of the consequent, solving the limitation of Confidence?",
        options: ["Support", "Information Gain", "Lift", "Gini Index"],
        correctAnswer: "Lift"
      },
      {
        question: "Comparing objects of a target class with those from contrasting classes is called:",
        options: ["Class Discrimination", "Class Characterization", "Prediction", "Association"],
        correctAnswer: "Class Discrimination"
      }
    ]
  },
  {
    chapterNumber: 4,
    chapterName: "Classification and Prediction",
    questions: [
      {
        question: "What is Classification?",
        answer: "Classification is a supervised learning technique that constructs a model (classifier) based on a training dataset with known class labels. This model is then used to predict the discrete class labels of new, unlabeled data."
      },
      {
        question: "What is Prediction (Regression)?",
        answer: "Prediction (or regression) models continuous-valued functions. Unlike classification which predicts categorical labels, prediction estimates a missing or future numerical value."
      },
      {
        question: "What are the two steps of the classification process?",
        answer: "The process involves 1) The Learning Step: Building the classification model using training data, and 2) The Classification Step: Using the model to predict class labels for test data and evaluating accuracy."
      },
      {
        question: "What is a Decision Tree?",
        answer: "A Decision tree is a flowchart-like structure where internal nodes denote tests on attributes, branches represent outcomes of tests, and leaf nodes hold the final class labels."
      },
      {
        question: "What is Information Gain?",
        answer: "Information gain is a statistical property based on entropy. It measures how well a given attribute separates the training examples according to their target classification, used to build Decision Trees."
      },
      {
        question: "What is Tree Pruning?",
        answer: "Tree pruning removes branches from a decision tree that represent noise or anomalies in the training data, helping to prevent overfitting and improving the model's accuracy on unseen data."
      },
      {
        question: "What is Naive Bayes Classification?",
        answer: "Naive Bayes is a statistical classifier based on Bayes' theorem. It assumes 'class conditional independence'—that the effect of an attribute value on a given class is independent of the values of the other attributes."
      },
      {
        question: "What is K-Nearest Neighbors (KNN)?",
        answer: "KNN is a distance-based, lazy learning algorithm. It classifies an unknown instance by comparing it to the 'K' most similar (closest distance) instances in the training set and assigning the majority class."
      },
      {
        question: "Why is KNN called a 'lazy learner'?",
        answer: "KNN is a lazy learner because it simply stores the training data and does not build a classification model until a new, unlabeled instance needs to be classified."
      },
      {
        question: "How do Artificial Neural Networks work in classification?",
        answer: "Neural networks consist of interconnected processing units (neurons). They learn by adjusting weights on connections between neurons to minimize the error between predicted and actual class labels (Backpropagation)."
      },
      {
        question: "What is Rule-Based Classification?",
        answer: "Rule-based classification uses a set of IF-THEN rules for classification. An IF-THEN rule is an expression where the IF part is the condition and the THEN part is the class prediction."
      },
      {
        question: "What is the difference between Linear and Nonlinear Regression?",
        answer: "Linear regression models the relationship between a response variable and predictors using a straight line. Nonlinear regression models the relationship using a curved function (e.g., polynomial)."
      },
      {
        question: "What is Logistic Regression?",
        answer: "Despite its name, logistic regression is a classification algorithm used to predict binary categorical outcomes (e.g., Yes/No, Spam/Not Spam) by modeling the probability of the default class."
      },
      {
        question: "What is a Confusion Matrix?",
        answer: "A confusion matrix is a table used to evaluate a classifier's performance. It displays True Positives, True Negatives, False Positives, and False Negatives produced by the model."
      },
      {
        question: "How is Accuracy calculated?",
        answer: "Accuracy is the percentage of correctly classified test instances. It is calculated as (True Positives + True Negatives) / Total Instances."
      },
      {
        question: "What is Overfitting?",
        answer: "Overfitting occurs when a classification model learns the training data too well, including the noise, resulting in poor generalization and high error rates on new, unseen test data."
      },
      {
        question: "What is Combining Techniques (Ensemble Methods)?",
        answer: "Ensemble methods combine the predictions of multiple diverse baseline classifiers (like Random Forests or Gradient Boosting) to improve overall accuracy, robustness, and reduce overfitting."
      },
      {
        question: "What are common measures to evaluate classifier accuracy besides the accuracy percentage?",
        answer: "Common measures include Precision (exactness), Recall (completeness or sensitivity), F1-Score (harmonic mean of precision and recall), and Specificity."
      },
      {
        question: "What are WEKA and DB Miner?",
        answer: "WEKA and DB Miner are popular, open-source data mining software tools that provide graphical interfaces to easily apply classification, clustering, and association rule algorithms to datasets."
      },
      {
        question: "What is the role of backpropagation in Neural Networks?",
        answer: "Backpropagation calculates the error at the output layer and propagates it backward through the network, updating the connection weights to minimize the error in subsequent predictions."
      }
    ],
    mcqs: [
      {
        question: "Which of the following predicts a continuous numerical value?",
        options: ["Classification", "Prediction (Regression)", "Association", "Clustering"],
        correctAnswer: "Prediction (Regression)"
      },
      {
        question: "Classification is an example of:",
        options: ["Unsupervised learning", "Supervised learning", "Reinforcement learning", "Association learning"],
        correctAnswer: "Supervised learning"
      },
      {
        question: "In a Decision Tree, internal nodes represent:",
        options: ["Class labels", "Test on an attribute", "Outcome of a test", "Final prediction"],
        correctAnswer: "Test on an attribute"
      },
      {
        question: "Which algorithm uses the concept of Information Gain or Gini Index?",
        options: ["Neural Networks", "K-Nearest Neighbors", "Decision Trees", "Naive Bayes"],
        correctAnswer: "Decision Trees"
      },
      {
        question: "Which of the following is considered a 'lazy learner'?",
        options: ["Decision Tree", "Neural Network", "Naive Bayes", "K-Nearest Neighbors (KNN)"],
        correctAnswer: "K-Nearest Neighbors (KNN)"
      },
      {
        question: "Which classification algorithm is based on Bayes' Theorem?",
        options: ["Decision Tree", "Support Vector Machine", "Naive Bayes", "K-Means"],
        correctAnswer: "Naive Bayes"
      },
      {
        question: "What technique is used to solve the problem of overfitting in Decision Trees?",
        options: ["Boosting", "Pruning", "Backpropagation", "Smoothing"],
        correctAnswer: "Pruning"
      },
      {
        question: "Which table is used to calculate the accuracy, precision, and recall of a classifier?",
        options: ["Routing Table", "Decision Table", "Confusion Matrix", "Correlation Matrix"],
        correctAnswer: "Confusion Matrix"
      },
      {
        question: "In a confusion matrix, instances correctly predicted as the positive class are called:",
        options: ["True Positives", "True Negatives", "False Positives", "False Negatives"],
        correctAnswer: "True Positives"
      },
      {
        question: "Which algorithm uses Backpropagation for training?",
        options: ["Decision Trees", "K-Nearest Neighbors", "Rule-based classifiers", "Artificial Neural Networks"],
        correctAnswer: "Artificial Neural Networks"
      },
      {
        question: "Logistic Regression is primarily used for:",
        options: ["Predicting continuous values", "Clustering", "Binary Classification", "Association rule mining"],
        correctAnswer: "Binary Classification"
      },
      {
        question: "Which distance metric is commonly used in K-Nearest Neighbors (KNN)?",
        options: ["Euclidean distance", "Information Gain", "Entropy", "Gini Index"],
        correctAnswer: "Euclidean distance"
      },
      {
        question: "The formula (True Positives + True Negatives) / Total Population calculates:",
        options: ["Precision", "Recall", "Accuracy", "F1 Score"],
        correctAnswer: "Accuracy"
      },
      {
        question: "Combining multiple classifiers to improve overall prediction accuracy is called:",
        options: ["Ensemble methods", "Pruning", "Lazy learning", "Backpropagation"],
        correctAnswer: "Ensemble methods"
      },
      {
        question: "Which tool provides a graphical UI to apply various machine learning algorithms like Decision Trees and Naive Bayes?",
        options: ["MySQL", "WEKA", "Hadoop", "MongoDB"],
        correctAnswer: "WEKA"
      },
      {
        question: "Classification algorithms learn from:",
        options: ["Unlabeled data", "Predefined Association Rules", "Training data with known class labels", "Random noise"],
        correctAnswer: "Training data with known class labels"
      },
      {
        question: "If a model predicts perfectly on training data but fails miserably on test data, it is a sign of:",
        options: ["Underfitting", "Overfitting", "High accuracy", "Optimal generalization"],
        correctAnswer: "Overfitting"
      },
      {
        question: "Which measure calculates the proportion of correctly predicted positive cases among all actual positive cases?",
        options: ["Precision", "Recall", "Accuracy", "Specificity"],
        correctAnswer: "Recall"
      },
      {
        question: "A Rule-Based Classifier consists of a set of:",
        options: ["IF-THEN rules", "Nodes and Edges", "Neurons", "Distance metrics"],
        correctAnswer: "IF-THEN rules"
      },
      {
        question: "Which of the following is NOT an issue regarding classification and prediction?",
        options: ["Handling missing data", "Data scaling", "Selecting the right distance measure for rules", "Dealing with noisy data"],
        correctAnswer: "Selecting the right distance measure for rules"
      }
    ]
  },
  {
    chapterNumber: 5,
    chapterName: "Cluster Analysis",
    questions: [
      {
        question: "What is Cluster Analysis?",
        answer: "Cluster analysis is an unsupervised learning technique that groups data objects into clusters such that objects within the same cluster are highly similar (high intra-cluster similarity) and dissimilar to those in other clusters (low inter-cluster similarity)."
      },
      {
        question: "What is the difference between Classification and Clustering?",
        answer: "Classification is supervised learning where predefined class labels are known. Clustering is unsupervised learning where no class labels are provided; the algorithm must discover the natural groupings."
      },
      {
        question: "What are Partitioning Methods in clustering?",
        answer: "Partitioning methods construct 'k' partitions (clusters) of the data, where each object belongs to exactly one cluster. They optimize an objective criterion like minimizing the sum of squared distances. Example: K-Means."
      },
      {
        question: "How does the K-Means algorithm work?",
        answer: "K-Means selects 'k' initial centroids, assigns each data point to the nearest centroid, recalculates the new centroid of each cluster, and repeats until the centroids no longer change."
      },
      {
        question: "What are the limitations of the K-Means algorithm?",
        answer: "K-Means requires specifying 'k' in advance, struggles with non-spherical clusters, and is highly sensitive to noise and outliers because the mean is easily skewed."
      },
      {
        question: "What is the PAM (K-Medoids) algorithm?",
        answer: "Partitioning Around Medoids (PAM) uses actual data points (medoids) as cluster centers rather than a calculated mean. It is much more robust to noise and outliers compared to K-Means."
      },
      {
        question: "What are Hierarchical Clustering methods?",
        answer: "Hierarchical clustering builds a tree of clusters (dendrogram). It does not require 'k' to be predefined. It operates either bottom-up (Agglomerative) or top-down (Divisive)."
      },
      {
        question: "Explain the Agglomerative hierarchical method.",
        answer: "It is a bottom-up approach. It starts with each object as a separate cluster and iteratively merges the closest pairs of clusters until all objects are in a single root cluster."
      },
      {
        question: "Explain the Divisive hierarchical method.",
        answer: "It is a top-down approach. It starts with all objects in one massive cluster and recursively splits it into smaller clusters until each object is in its own singleton cluster."
      },
      {
        question: "What is a Dendrogram?",
        answer: "A dendrogram is a tree-like diagram that records the sequences of merges or splits in hierarchical clustering, allowing the user to select the desired number of clusters by cutting the tree at a certain level."
      },
      {
        question: "What is Outlier Detection?",
        answer: "Outlier detection is the process of identifying data objects that deviate significantly from the rest of the dataset. Outliers can be caused by errors or indicate rare but important events."
      },
      {
        question: "What are Global vs Contextual outliers?",
        answer: "A global outlier deviates significantly from the entire dataset. A contextual outlier deviates significantly only within a specific context or local neighborhood (e.g., 30°C in winter is an outlier, but not in summer)."
      },
      {
        question: "What makes clustering high-dimensional data challenging?",
        answer: "The 'curse of dimensionality' makes distance measures meaningless because all points tend to become equidistant in high dimensions, making traditional clustering algorithms fail."
      },
      {
        question: "How can we evaluate Clustering Algorithms?",
        answer: "Evaluation is done using metrics like Intra-cluster distance (compactness) and Inter-cluster distance (separation). Silhouette coefficients and Dunn index are common validation metrics."
      },
      {
        question: "What is the major strength of Hierarchical clustering?",
        answer: "Its major strength is that it does not require the number of clusters 'k' as an input parameter, and it produces a visual dendrogram that shows the data's nested structure."
      },
      {
        question: "What is the major weakness of basic Hierarchical clustering?",
        answer: "It has a high time complexity (O(n^3) or O(n^2 log n)) and once a merge or split is made, it can never be undone, making it inflexible to erroneous local decisions."
      },
      {
        question: "What is clustering Graph and Network data?",
        answer: "It involves grouping vertices in a graph (like social networks or web links) such that vertices within a cluster are densely connected, and connections between clusters are sparse."
      },
      {
        question: "Why does K-Means sometimes fall into local optima?",
        answer: "Because K-Means optimizes based on initial random centroid assignments, it can easily converge on a local minimum error rather than the absolute best global clustering configuration."
      },
      {
        question: "How do you choose the value of 'K' in K-Means?",
        answer: "Techniques like the 'Elbow Method' are used, where the sum of squared errors is plotted against 'K'. The 'elbow' point where the error decrease sharply slows down is chosen as optimal."
      },
      {
        question: "What distance metrics are used in clustering?",
        answer: "Euclidean distance is standard for numeric data. Other metrics include Manhattan distance, Minkowski distance, and Cosine similarity for different data types."
      }
    ],
    mcqs: [
      {
        question: "Cluster Analysis is an example of:",
        options: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Semi-supervised Learning"],
        correctAnswer: "Unsupervised Learning"
      },
      {
        question: "A good clustering method will produce clusters with:",
        options: ["High intra-class similarity and low inter-class similarity", "Low intra-class similarity and high inter-class similarity", "High intra-class similarity and high inter-class similarity", "Low intra-class similarity and low inter-class similarity"],
        correctAnswer: "High intra-class similarity and low inter-class similarity"
      },
      {
        question: "The K-Means algorithm is an example of a:",
        options: ["Hierarchical Method", "Density-based Method", "Partitioning Method", "Grid-based Method"],
        correctAnswer: "Partitioning Method"
      },
      {
        question: "In the K-Means algorithm, 'K' specifies:",
        options: ["The number of iterations", "The number of clusters", "The distance metric", "The number of data points"],
        correctAnswer: "The number of clusters"
      },
      {
        question: "Which algorithm uses actual data points as cluster centers to handle outliers better than K-Means?",
        options: ["PAM (K-Medoids)", "Agglomerative", "Divisive", "Apriori"],
        correctAnswer: "PAM (K-Medoids)"
      },
      {
        question: "Which hierarchical clustering method uses a bottom-up strategy?",
        options: ["Divisive", "Agglomerative", "K-Means", "PAM"],
        correctAnswer: "Agglomerative"
      },
      {
        question: "Which hierarchical clustering method uses a top-down strategy?",
        options: ["Agglomerative", "Divisive", "PAM", "DBSCAN"],
        correctAnswer: "Divisive"
      },
      {
        question: "A tree-like diagram used to represent hierarchical clustering is called:",
        options: ["Decision Tree", "FP-Tree", "Dendrogram", "Spanning Tree"],
        correctAnswer: "Dendrogram"
      },
      {
        question: "Objects that do not comply with the general behavior or model of the data are called:",
        options: ["Centroids", "Medoids", "Inliers", "Outliers"],
        correctAnswer: "Outliers"
      },
      {
        question: "Which of the following is a major weakness of K-Means?",
        options: ["It handles outliers well", "It is very slow", "It requires 'K' to be specified in advance", "It only works on categorical data"],
        correctAnswer: "It requires 'K' to be specified in advance"
      },
      {
        question: "The problem where distance metrics lose meaning as the number of attributes increases is called:",
        options: ["Overfitting", "Curse of Dimensionality", "Underfitting", "Outlier Masking"],
        correctAnswer: "Curse of Dimensionality"
      },
      {
        question: "A temperature of -10°C in Florida is an outlier, but in Antarctica, it is normal. This is an example of a:",
        options: ["Global outlier", "Contextual outlier", "Collective outlier", "Measurement outlier"],
        correctAnswer: "Contextual outlier"
      },
      {
        question: "Which step is repeated in K-Means until convergence?",
        options: ["Assign points to nearest centroid and update centroids", "Merge the closest two clusters", "Split the largest cluster", "Remove outliers"],
        correctAnswer: "Assign points to nearest centroid and update centroids"
      },
      {
        question: "Which of the following cannot be undone once executed?",
        options: ["K-Means centroid update", "PAM medoid swap", "Hierarchical merge/split operations", "Decision tree pruning"],
        correctAnswer: "Hierarchical merge/split operations"
      },
      {
        question: "Which clustering technique is most appropriate for social network data?",
        options: ["K-Means", "Graph and Network clustering", "Decision Trees", "Linear Regression"],
        correctAnswer: "Graph and Network clustering"
      },
      {
        question: "To evaluate clustering quality, one might measure:",
        options: ["Accuracy percentage", "Information Gain", "Intra-cluster distance", "Support and Confidence"],
        correctAnswer: "Intra-cluster distance"
      },
      {
        question: "What represents the 'center' of a cluster in K-Means?",
        options: ["The medoid", "The mean value of all points in the cluster", "The point with maximum distance", "The root of the tree"],
        correctAnswer: "The mean value of all points in the cluster"
      },
      {
        question: "Which method treats outliers as a severe problem because they skew the calculated center?",
        options: ["Hierarchical Agglomerative", "PAM", "K-Means", "Decision Tree"],
        correctAnswer: "K-Means"
      },
      {
        question: "Which of the following initializes with every data point in a single massive cluster?",
        options: ["Agglomerative Hierarchical", "Divisive Hierarchical", "K-Means", "K-Medoids"],
        correctAnswer: "Divisive Hierarchical"
      },
      {
        question: "Clustering algorithms fundamentally rely on:",
        options: ["Class labels provided by humans", "Distance or similarity measures between objects", "IF-THEN rules", "Apriori property"],
        correctAnswer: "Distance or similarity measures between objects"
      }
    ]
  },
  {
    chapterNumber: 6,
    chapterName: "Web Mining and Other Data Mining",
    questions: [
      {
        question: "What is Web Mining?",
        answer: "Web mining is the application of data mining techniques to extract valuable knowledge, patterns, and trends from the World Wide Web. It is divided into Web Content, Web Structure, and Web Usage mining."
      },
      {
        question: "What is Web Content Mining?",
        answer: "Web content mining involves extracting useful information from the text, images, audio, and video content of web pages. It utilizes natural language processing and text mining techniques."
      },
      {
        question: "What is Web Structure Mining?",
        answer: "Web structure mining attempts to discover the link structure of the hyperlink network at the inter-document level. It analyzes nodes (web pages) and edges (hyperlinks) to identify authoritative pages."
      },
      {
        question: "What is Web Usage Mining?",
        answer: "Web usage mining analyzes user interactions with a web server by mining web server logs, discovering user navigation patterns and behaviors to improve website design or provide personalized recommendations."
      },
      {
        question: "What are Web Logs?",
        answer: "Web logs are files maintained by a web server that record details about user requests, including IP address, access time, URL requested, HTTP status code, and the user agent (browser)."
      },
      {
        question: "What are the issues regarding web logs?",
        answer: "Issues include massive data volume, data cleaning (removing bot/crawler traffic), identifying distinct user sessions correctly, and addressing privacy and security concerns of the users."
      },
      {
        question: "What is Spatial Data Mining?",
        answer: "Spatial data mining discovers patterns from spatial data (data related to geographical or physical locations, like maps or satellite imagery), helping in urban planning and environmental monitoring."
      },
      {
        question: "What is Temporal Data Mining?",
        answer: "Temporal data mining extracts knowledge from data that is highly dependent on time. It is used to analyze time-series data, sequence patterns, and track changes in data over periods."
      },
      {
        question: "What is Multimedia Data Mining?",
        answer: "Multimedia data mining involves discovering interesting patterns from multimedia databases that store text, image, audio, and video data, requiring advanced feature extraction like color and texture."
      },
      {
        question: "What is Distributed Data Mining?",
        answer: "Distributed data mining mines data that is physically located across multiple separate databases or sites. It processes data locally and merges the discovered models to minimize data transfer overhead."
      },
      {
        question: "What is Parallel Data Mining?",
        answer: "Parallel data mining utilizes high-performance computing (multiple processors or cores) to run mining algorithms simultaneously on large datasets, drastically reducing computation time."
      },
      {
        question: "Give an example of Web Structure Mining.",
        answer: "Google's PageRank algorithm is a classic example. It ranks web pages higher in search results if they have many incoming hyperlinks from other highly-ranked pages."
      },
      {
        question: "How does Web Usage Mining help in E-commerce?",
        answer: "By analyzing how users navigate a site, e-commerce platforms can reorganize web pages for better usability, predict what a user might buy next, and offer personalized product recommendations."
      },
      {
        question: "What is a 'Session' in Web Usage Mining?",
        answer: "A session is a sequence of web pages viewed by a single user during a single visit to a website. Correctly identifying sessions from web logs is crucial for accurate pattern analysis."
      },
      {
        question: "Why is mining Multimedia Data difficult?",
        answer: "It is difficult because the data is unstructured. Instead of simple numbers, the system must analyze complex features like pixel intensity, sound frequencies, and video frame sequences."
      },
      {
        question: "What is the difference between Parallel and Distributed DM?",
        answer: "Parallel DM focuses on speed by dividing a task among many processors in one system. Distributed DM focuses on logistics by mining data spread across different geographical locations without moving it all to a central server."
      },
      {
        question: "What role does text mining play in Web Content Mining?",
        answer: "Text mining extracts keywords, sentiments, and topics from HTML pages, allowing the system to categorize documents, summarize content, or gauge public opinion from blogs and forums."
      },
      {
        question: "What are spatial association rules?",
        answer: "They are rules that link spatial predicates to non-spatial attributes, e.g., 'If a house is near a lake (spatial), its price is high (non-spatial)'."
      },
      {
        question: "What is time-series analysis?",
        answer: "A subset of temporal mining, time-series analysis studies data points collected at constant time intervals to identify trends, seasonal variations, and cyclic patterns (e.g., stock market data)."
      },
      {
        question: "Why is privacy a major concern in Web Usage Mining?",
        answer: "Web logs track detailed user behavior, IP addresses, and interests. If this data is mined without anonymization, it can severely compromise individual user privacy and violate regulations."
      }
    ],
    mcqs: [
      {
        question: "Web Mining is generally categorized into how many main types?",
        options: ["Two", "Three", "Four", "Five"],
        correctAnswer: "Three"
      },
      {
        question: "Mining data from web server access logs is known as:",
        options: ["Web Content Mining", "Web Structure Mining", "Web Usage Mining", "Web Text Mining"],
        correctAnswer: "Web Usage Mining"
      },
      {
        question: "Discovering the hyperlink topology between different web pages relates to:",
        options: ["Web Content Mining", "Web Structure Mining", "Web Usage Mining", "Spatial Data Mining"],
        correctAnswer: "Web Structure Mining"
      },
      {
        question: "Google's PageRank algorithm heavily relies on which type of mining?",
        options: ["Web Content Mining", "Web Usage Mining", "Web Structure Mining", "Temporal Mining"],
        correctAnswer: "Web Structure Mining"
      },
      {
        question: "Extracting sentiment or keywords from a blog post is an example of:",
        options: ["Web Content Mining", "Web Structure Mining", "Web Usage Mining", "Spatial Mining"],
        correctAnswer: "Web Content Mining"
      },
      {
        question: "Which type of mining deals with geographical or map data?",
        options: ["Temporal Mining", "Spatial Data Mining", "Multimedia Mining", "Web Structure Mining"],
        correctAnswer: "Spatial Data Mining"
      },
      {
        question: "Analyzing stock market prices collected daily over a year requires:",
        options: ["Spatial Mining", "Temporal Mining", "Web Usage Mining", "Multimedia Mining"],
        correctAnswer: "Temporal Mining"
      },
      {
        question: "Extracting patterns from audio, video, and image databases is called:",
        options: ["Temporal Mining", "Multimedia Mining", "Web Structure Mining", "Spatial Mining"],
        correctAnswer: "Multimedia Mining"
      },
      {
        question: "Data mining applied to datasets located across different physical servers is called:",
        options: ["Parallel Data Mining", "Distributed Data Mining", "Temporal Data Mining", "Spatial Data Mining"],
        correctAnswer: "Distributed Data Mining"
      },
      {
        question: "Utilizing multiple processors to speed up the data mining process on a massive dataset is known as:",
        options: ["Distributed Data Mining", "Parallel Data Mining", "Web Usage Mining", "Cloud Storage"],
        correctAnswer: "Parallel Data Mining"
      },
      {
        question: "Which of the following is a major issue with web logs?",
        options: ["They contain no data", "Identifying real users versus web crawlers/bots", "They cannot be stored", "They only record image data"],
        correctAnswer: "Identifying real users versus web crawlers/bots"
      },
      {
        question: "A sequence of page views by a user during a single visit is defined as a:",
        options: ["Hyperlink", "Web Log", "Session", "Spatial Event"],
        correctAnswer: "Session"
      },
      {
        question: "Which mining technique would Amazon use to recommend products based on a user's click history?",
        options: ["Web Structure Mining", "Spatial Mining", "Multimedia Mining", "Web Usage Mining"],
        correctAnswer: "Web Usage Mining"
      },
      {
        question: "Finding that 'people who buy houses near the beach also buy boats' is an example of:",
        options: ["Temporal association", "Spatial association rule", "Web structure mining", "Multimedia classification"],
        correctAnswer: "Spatial association rule"
      },
      {
        question: "Which mining requires extracting features like color histograms and texture?",
        options: ["Web Usage Mining", "Text Mining", "Multimedia Mining", "Temporal Mining"],
        correctAnswer: "Multimedia Mining"
      },
      {
        question: "The structure of a website can be mathematically modeled as a:",
        options: ["Linear Array", "Directed Graph", "Hash Table", "Stack"],
        correctAnswer: "Directed Graph"
      },
      {
        question: "Time-series analysis is a crucial component of:",
        options: ["Spatial Mining", "Multimedia Mining", "Temporal Mining", "Web Content Mining"],
        correctAnswer: "Temporal Mining"
      },
      {
        question: "Why is distributed data mining preferred over centralizing all data?",
        options: ["It is slower", "To reduce network communication costs and respect data privacy", "Because central servers cannot hold more than 1GB", "It prevents temporal mining"],
        correctAnswer: "To reduce network communication costs and respect data privacy"
      },
      {
        question: "Web usage mining must respect user ________ by anonymizing log data.",
        options: ["Bandwidth", "Privacy", "Disk Space", "RAM"],
        correctAnswer: "Privacy"
      },
      {
        question: "Mining web pages to extract data tables or product reviews falls under:",
        options: ["Web Structure Mining", "Web Usage Mining", "Web Content Mining", "Spatial Mining"],
        correctAnswer: "Web Content Mining"
      }
    ]
  }
];