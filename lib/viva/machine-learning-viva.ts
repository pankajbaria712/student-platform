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

export const gtuMachineLearningViva: SubjectData = {
  subjectName: "MACHINE LEARNING",
  totalChapters: 9,
  chapters: [
    {
      chapterNumber: 1,
      chapterName: "Introduction to Machine Learning",
      vivaQuestions: [
        { question: "What is Machine Learning?", answer: "Sir, Machine Learning is a branch of Artificial Intelligence that focuses on building systems capable of learning from data, identifying patterns, and making decisions with minimal human intervention." },
        { question: "How does Machine Learning differ from human learning?", answer: "Sir, human learning involves gaining experience and knowledge through biological cognitive processes and environmental interaction, whereas machine learning relies on algorithms and statistical models to process digital data to improve performance on specific tasks." },
        { question: "What are the main types of Machine Learning?", answer: "Sir, the main types include Supervised Learning, Unsupervised Learning, Semi-supervised Learning, and Reinforcement Learning." },
        { question: "What is the primary difference between Supervised and Unsupervised Learning?", answer: "Sir, in Supervised Learning, the model is trained on labeled data with known outcomes. In Unsupervised Learning, the model works with unlabeled data to find hidden structures or patterns." },
        { question: "What is an application of Machine Learning in the healthcare domain?", answer: "Sir, Machine Learning is widely used in healthcare for diagnosing diseases from medical images like X-rays and MRIs, and for predicting patient outcomes based on historical health records." },
        { question: "What is the role of tools and technology in Machine Learning?", answer: "Sir, tools like Python, R, TensorFlow, and Scikit-learn provide the necessary infrastructure, libraries, and frameworks to efficiently implement, train, and evaluate machine learning models." },
        { question: "What is the 'Overview of Human Learning' in the context of ML?", answer: "Sir, it explores how humans naturally learn through observation, trial-and-error, and feedback, which serves as the foundational inspiration for designing artificial learning algorithms." },
        { question: "Can you name a real-world application of Machine Learning?", answer: "Yes sir, common applications include email spam detection, recommendation engines for Netflix or Amazon, and virtual personal assistants like Siri or Alexa." },
        { question: "Why is 'learning' important for a computer system?", answer: "Sir, it allows the system to adapt to new or changing data without being explicitly programmed for every possible scenario, making it far more versatile." },
        { question: "What is the key objective of the Machine Learning course?", answer: "Sir, the objective is to introduce students to the concepts and algorithms of machine learning and to provide the skills to build applications across various domains." }
      ],
      mcqs: [
        { question: "Which branch of AI focuses on learning from data?", options: ["Natural Language Processing", "Machine Learning", "Expert Systems", "Robotics"], answer: "Machine Learning" },
        { question: "In Supervised Learning, the training data is:", options: ["Unlabeled", "Labeled", "Random", "Missing"], answer: "Labeled" },
        { question: "Which type of learning finds hidden patterns in unlabeled data?", options: ["Supervised", "Unsupervised", "Reinforcement", "Active"], answer: "Unsupervised" },
        { question: "Which of the following is an application of Machine Learning?", options: ["Spam detection", "Printing documents", "File management", "Screen brightness control"], answer: "Spam detection" },
        { question: "What is the primary inspiration for Machine Learning?", options: ["Human learning processes", "Manual labor", "Compiler design", "Network hardware"], answer: "Human learning processes" },
        { question: "Which learning type uses feedback in the form of rewards/penalties?", options: ["Supervised", "Unsupervised", "Reinforcement", "Batch"], answer: "Reinforcement" },
        { question: "What are TensorFlow and Scikit-learn?", options: ["Operating systems", "Machine Learning libraries/frameworks", "Web browsers", "Hardware devices"], answer: "Machine Learning libraries/frameworks" },
        { question: "Machine Learning models improve their performance by:", options: ["Having more hard-coded rules", "Training on data", "Changing their own hardware", "Skipping analysis"], answer: "Training on data" },
        { question: "Which learning type is best for data with no predefined labels?", options: ["Supervised", "Unsupervised", "Classification", "Regression"], answer: "Unsupervised" },
        { question: "The goal of AI is to make computers:", options: ["Faster at typing", "Think and reason like humans", "Use less electricity", "Simpler to repair"], answer: "Think and reason like humans" }
      ]
    },
    {
      chapterNumber: 2,
      chapterName: "Preparing to Model",
      vivaQuestions: [
        { question: "What are the common Machine Learning activities?", answer: "Sir, common activities include data collection, data cleaning, feature engineering, model selection, training, evaluation, and deployment." },
        { question: "What are the types of data used in Machine Learning?", answer: "Sir, data can be classified as numerical (continuous or discrete), categorical (nominal or ordinal), and sometimes text or multimedia data." },
        { question: "What is Data Quality and why is it important?", answer: "Sir, data quality refers to the accuracy, completeness, and consistency of data. High-quality data is vital because poor data leads to biased or incorrect models (Garbage In, Garbage Out)." },
        { question: "What is Data Pre-Processing?", answer: "Sir, data pre-processing is the step where raw data is cleaned, formatted, and transformed into a suitable structure for the machine learning model to ingest." },
        { question: "What is Dimensionality Reduction?", answer: "Sir, it is a technique to reduce the number of input variables in a dataset, helping to minimize noise and improve model efficiency, for example, using PCA." },
        { question: "What is Feature Subset Selection?", answer: "Sir, it is the process of selecting only the most relevant features (variables) to use in model construction, which helps prevent overfitting and improves model performance." },
        { question: "What is Feature Engineering?", answer: "Sir, feature engineering is the process of using domain knowledge to select, modify, or create new features from raw data to make machine learning algorithms work better." },
        { question: "How do you remediate data quality issues?", answer: "Sir, we remediate issues by handling missing values (imputation), removing duplicates, smoothing noisy data, and normalizing different scales of numeric features." },
        { question: "Why is 'structure of data' important?", answer: "Sir, machine learning models usually expect data in a tabular format (rows and columns). Understanding how data is structured allows us to organize it correctly for the algorithms." },
        { question: "What is the difference between feature construction and feature extraction?", answer: "Sir, feature construction involves creating new features from existing ones, whereas feature extraction transforms raw data (like images) into a set of usable numerical features." }
      ],
      mcqs: [
        { question: "What is the process of cleaning and transforming raw data called?", options: ["Data Pre-Processing", "Model Deployment", "Feature Deletion", "Model Training"], answer: "Data Pre-Processing" },
        { question: "Which technique is used to reduce the number of features?", options: ["Dimensionality Reduction", "Feature Expansion", "Data Duplication", "Random Sampling"], answer: "Dimensionality Reduction" },
        { question: "Garbage In, Garbage Out refers to the importance of:", options: ["Data Quality", "Code speed", "Hardware power", "Model complexity"], answer: "Data Quality" },
        { question: "Features that are most relevant to the prediction are chosen via:", options: ["Feature Subset Selection", "Random Selection", "Feature Deletion", "Data Cleaning"], answer: "Feature Subset Selection" },
        { question: "Which of these is a categorical variable?", options: ["Age", "Temperature", "Color (Red, Blue, Green)", "Salary"], answer: "Color (Red, Blue, Green)" },
        { question: "Why is data pre-processing essential?", options: ["To slow down training", "To make data usable for algorithms", "To delete data", "To ignore noise"], answer: "To make data usable for algorithms" },
        { question: "Which step often uses domain knowledge to improve model performance?", options: ["Feature Engineering", "Random guessing", "Ignoring data", "System formatting"], answer: "Feature Engineering" },
        { question: "What does imputation mean in data quality?", options: ["Deleting data", "Filling missing values", "Encrypting data", "Adding errors"], answer: "Filling missing values" },
        { question: "High-dimensional data can lead to:", options: ["Faster training", "Overfitting and noise", "Better quality", "Automatic cleaning"], answer: "Overfitting and noise" },
        { question: "Which of the following is NOT a common Machine Learning activity?", options: ["Data Cleaning", "Model Training", "Hardware Manufacturing", "Feature Engineering"], answer: "Hardware Manufacturing" }
      ]
    },
    {
      chapterNumber: 3,
      chapterName: "Modelling and Evaluation",
      vivaQuestions: [
        { question: "What is the difference between Predictive and Descriptive modeling?", answer: "Sir, Predictive modeling aims to forecast future outcomes based on historical data. Descriptive modeling focuses on summarizing and understanding the underlying structure of the data." },
        { question: "What is training a model for supervised learning?", answer: "Sir, training involves showing the algorithm labeled examples so that it learns the mathematical mapping between input features and target outputs." },
        { question: "What is model representation?", answer: "Sir, model representation refers to the mathematical form the model takes, such as a linear equation (regression), a decision tree, or the weights in a neural network." },
        { question: "What is interpretability in Machine Learning?", answer: "Sir, interpretability is the degree to which a human can understand the 'reasoning' behind a model's prediction. For example, a simple Decision Tree is highly interpretable, whereas Deep Learning is often a 'black box'." },
        { question: "How do you evaluate the performance of a model?", answer: "Sir, performance is evaluated using metrics like Accuracy, Precision, Recall, F1-Score for classification, and Mean Squared Error for regression, often using a separate test dataset." },
        { question: "What is the purpose of a test dataset?", answer: "Sir, a test dataset is used to independently assess the model's performance on data it has never seen during training, ensuring we measure true generalization." },
        { question: "How can you improve the performance of a model?", answer: "Sir, we can improve performance by performing better feature engineering, tuning hyperparameters, using more/better quality data, or choosing a more suitable algorithm." },
        { question: "What is a decision tree model?", answer: "Sir, a decision tree is a model that uses a tree-like structure of decisions and their possible consequences to arrive at a classification or prediction." },
        { question: "What is regression?", answer: "Sir, regression is a supervised learning technique used to predict continuous numeric values, such as predicting the price of a house." },
        { question: "What is classification?", answer: "Sir, classification is a supervised learning technique used to assign an input to one of several discrete categories." }
      ],
      mcqs: [
        { question: "Which modeling type forecasts future outcomes?", options: ["Descriptive", "Predictive", "Stochastic", "Physical"], answer: "Predictive" },
        { question: "Which modeling type focuses on summarizing data structure?", options: ["Predictive", "Descriptive", "Continuous", "Linear"], answer: "Descriptive" },
        { question: "The purpose of a test dataset is to:", options: ["Train the model", "Evaluate generalization performance", "Clean the data", "Delete features"], answer: "Evaluate generalization performance" },
        { question: "Which metric is commonly used to evaluate classification performance?", options: ["Accuracy", "Mean Squared Error", "Standard Deviation", "Variance"], answer: "Accuracy" },
        { question: "A model that is difficult to understand how it reaches a decision is called a:", options: ["White box", "Black box", "Transparent box", "Clear box"], answer: "Black box" },
        { question: "What is the model's ability to explain its decisions called?", options: ["Complexity", "Interpretability", "Scalability", "Reliability"], answer: "Interpretability" },
        { question: "Which algorithm predicts continuous values?", options: ["Classification", "Regression", "Clustering", "Association"], answer: "Regression" },
        { question: "What is the process of tuning parameters to improve model performance?", options: ["Hyperparameter tuning", "Model Deletion", "Data Dumping", "Random guessing"], answer: "Hyperparameter tuning" },
        { question: "If a model works great on training data but poorly on test data, it is likely:", options: ["Generalizing well", "Underfitting", "Overfitting", "Balanced"], answer: "Overfitting" },
        { question: "What is a predictive model's goal?", options: ["Summarize history", "Forecast future values", "Clean inputs", "Display data"], answer: "Forecast future values" }
      ]
    },
    {
      chapterNumber: 7,
      chapterName: "Supervised Learning: Classification and Regression",
      vivaQuestions: [
        { question: "What is Supervised Learning?", answer: "Sir, Supervised Learning is a learning paradigm where the algorithm is trained on a labeled dataset, meaning the input data is provided alongside the correct output answers." },
        { question: "What is Classification?", answer: "Sir, classification is a supervised learning task where the objective is to predict discrete, categorical labels for a given input." },
        { question: "What is Regression?", answer: "Sir, regression is a supervised learning task where the objective is to predict continuous numerical values for a given input." },
        { question: "What is Linear Regression?", answer: "Sir, Linear Regression is a statistical method that models the relationship between independent variables and a dependent variable by fitting a linear equation to the observed data." },
        { question: "What is Logistic Regression?", answer: "Sir, despite its name, Logistic Regression is used for classification. It models the probability that an input belongs to a specific category using the sigmoid function." },
        { question: "What is the K-Nearest Neighbors (KNN) algorithm?", answer: "Sir, KNN is a simple, instance-based learning algorithm that classifies a data point based on the majority class of its 'k' closest neighbors in the feature space." },
        { question: "What is a Support Vector Machine (SVM)?", answer: "Sir, SVM is a powerful classifier that finds the optimal hyperplane that maximizes the margin between different classes in a high-dimensional space." },
        { question: "What is the 'learning steps' for classification?", answer: "Sir, the steps are: data collection, pre-processing, feature selection, training the algorithm (model fitting), testing/evaluation, and fine-tuning." },
        { question: "What are the common regression algorithms?", answer: "Sir, common regression algorithms include Simple Linear Regression, Multiple Linear Regression, and Polynomial Regression." },
        { question: "How do you choose between classification and regression?", answer: "Sir, you choose classification if your target output is categorical (e.g., Cat vs. Dog) and regression if your target output is continuous (e.g., Temperature, Price)." }
      ],
      mcqs: [
        { question: "Supervised learning requires:", options: ["Unlabeled data", "Labeled data", "No data", "Random data"], answer: "Labeled data" },
        { question: "Which algorithm is used for continuous numerical prediction?", options: ["Classification", "Regression", "Clustering", "Association"], answer: "Regression" },
        { question: "Which algorithm is used for categorical label prediction?", options: ["Regression", "Classification", "Clustering", "Normalization"], answer: "Classification" },
        { question: "Logistic Regression is used for:", options: ["Classification", "Linear Regression", "Unsupervised learning", "Dimension reduction"], answer: "Classification" },
        { question: "KNN classifies data based on:", options: ["Nearest neighbors", "Hyperplanes", "Probability distributions", "Trees"], answer: "Nearest neighbors" },
        { question: "SVM aims to maximize the:", options: ["Error", "Margin", "Training time", "Complexity"], answer: "Margin" },
        { question: "Which is a common regression algorithm?", options: ["Linear Regression", "Logistic Regression", "K-Means", "SVM"], answer: "Linear Regression" },
        { question: "Supervised learning algorithms model the relationship between:", options: ["Input features and target output", "Only input features", "Only target output", "Hardware and software"], answer: "Input features and target output" },
        { question: "In KNN, 'K' represents:", options: ["The number of iterations", "The number of neighbors to consider", "The number of classes", "The dataset size"], answer: "The number of neighbors to consider" },
        { question: "What does a hyperplane do in SVM?", options: ["Sorts data", "Divides data into classes", "Deletes data", "Compresses data"], answer: "Divides data into classes" }
      ]
    },
    {
      chapterNumber: 8,
      chapterName: "Unsupervised Learning",
      vivaQuestions: [
        { question: "What is Unsupervised Learning?", answer: "Sir, Unsupervised Learning is a machine learning paradigm where the algorithm is provided with unlabeled data and must discover hidden patterns or structures within it on its own." },
        { question: "What is Clustering?", answer: "Sir, clustering is the task of grouping a set of objects such that objects in the same group (cluster) are more similar to each other than to those in other groups." },
        { question: "What is K-Means Clustering?", answer: "Sir, K-Means is a popular clustering algorithm that partitions 'n' observations into 'k' clusters, where each observation belongs to the cluster with the nearest mean." },
        { question: "What are Association Rules?", answer: "Sir, association rules are 'if-then' statements used to discover interesting relationships between variables in large databases, such as 'people who buy bread also tend to buy butter'." },
        { question: "What is the main application of clustering?", answer: "Sir, clustering is used in market segmentation (customer groups), image compression, and anomaly detection." },
        { question: "What is the difference between Supervised and Unsupervised Learning?", answer: "Sir, the core difference is the presence of labels. Supervised learning needs labels to learn a mapping, while unsupervised learning needs no labels and finds patterns intrinsically." },
        { question: "What is an anomaly?", answer: "Sir, an anomaly (or outlier) is a data point that deviates significantly from the rest of the dataset, often indicating errors or rare interesting events." },
        { question: "How does K-Means determine cluster centers?", answer: "Sir, it starts with random centers, assigns data points to the nearest center, then recalculates the center as the mean of the assigned points, repeating until it converges." },
        { question: "What is market basket analysis?", answer: "Sir, it is a technique using association rules to discover the items that customers frequently purchase together, helping retailers optimize product placement." },
        { question: "Why is association rule mining 'unsupervised'?", answer: "Sir, because we don't have a 'target' variable we are trying to predict; we are simply discovering co-occurrence patterns in the data itself." }
      ],
      mcqs: [
        { question: "Unsupervised learning uses:", options: ["Labeled data", "Unlabeled data", "No data", "Randomized labels"], answer: "Unlabeled data" },
        { question: "Grouping similar data points together is called:", options: ["Regression", "Classification", "Clustering", "Prediction"], answer: "Clustering" },
        { question: "K-Means is a popular ________ algorithm.", options: ["Classification", "Regression", "Clustering", "Supervised"], answer: "Clustering" },
        { question: "Which rule mining discovers relationships between items?", options: ["Association Rules", "Linear Rules", "Regression Rules", "Classification Rules"], answer: "Association Rules" },
        { question: "Market basket analysis uses:", options: ["Regression", "Association rules", "SVM", "KNN"], answer: "Association rules" },
        { question: "An anomaly is a data point that:", options: ["Fits the pattern perfectly", "Deviates significantly from the norm", "Is a missing value", "Is a label"], answer: "Deviates significantly from the norm" },
        { question: "The 'K' in K-Means stands for:", options: ["Number of items", "Number of clusters", "Number of features", "Iteration count"], answer: "Number of clusters" },
        { question: "Clustering finds similarity based on:", options: ["Labels", "Distance or similarity metrics", "Predefined categories", "Random assignment"], answer: "Distance or similarity metrics" },
        { question: "Why is Association Rule Mining 'unsupervised'?", options: ["It uses labels", "It has no target variable", "It is for regression", "It uses neural networks"], answer: "It has no target variable" },
        { question: "Clustering is often used for:", options: ["Customer segmentation", "Price prediction", "Correcting grammar", "Data sorting"], answer: "Customer segmentation" }
      ]
    },
    {
      chapterNumber: 9,
      chapterName: "Neural Networks",
      vivaQuestions: [
        { question: "What is an Artificial Neural Network (ANN)?", answer: "Sir, an ANN is a computational model inspired by the structure and function of biological neurons, consisting of interconnected layers of nodes (neurons) that process information." },
        { question: "What is a neuron?", answer: "Sir, a neuron is the fundamental unit in an ANN. It receives multiple inputs, applies weights to them, adds a bias, and processes the result through an activation function to produce an output." },
        { question: "What is an activation function?", answer: "Sir, an activation function adds non-linearity to the network, enabling it to learn complex patterns. Common examples include ReLU, Sigmoid, and Tanh." },
        { question: "What is Backpropagation?", answer: "Sir, backpropagation is the core algorithm for training ANNs. It calculates the gradient of the error function with respect to the weights and updates them to reduce the total error." },
        { question: "What is Deep Learning?", answer: "Sir, Deep Learning is a subset of machine learning that utilizes ANNs with many hidden layers (deep architectures) to solve extremely complex problems like image and speech recognition." },
        { question: "What are the layers in an ANN?", answer: "Sir, the layers are: an input layer, one or more hidden layers, and an output layer." },
        { question: "What is the difference between biological and artificial neurons?", answer: "Sir, biological neurons communicate via electrical/chemical signals and are vastly more complex, whereas artificial neurons are simplified mathematical units performing weighted summation." },
        { question: "How does an ANN learn?", answer: "Sir, an ANN learns by iteratively adjusting the connection weights using feedback from the prediction error, usually through gradient descent." },
        { question: "What is the purpose of the output layer?", answer: "Sir, the output layer produces the final prediction or classification result based on the features processed by the hidden layers." },
        { question: "Why are activation functions essential?", answer: "Sir, without activation functions, a neural network would just be a series of linear transformations, and it would be unable to learn non-linear patterns present in real-world data." }
      ],
      mcqs: [
        { question: "What inspired the architecture of Artificial Neural Networks?", options: ["Computer logic", "Biological brains", "Social networks", "Mathematical puzzles"], answer: "Biological brains" },
        { question: "What component introduces non-linearity in a neuron?", options: ["Weights", "Bias", "Activation function", "Input layer"], answer: "Activation function" },
        { question: "The training algorithm that updates weights based on error is:", options: ["Backpropagation", "Linear Regression", "Clustering", "Feature Engineering"], answer: "Backpropagation" },
        { question: "Deep Learning typically uses:", options: ["One hidden layer", "Many hidden layers", "No hidden layers", "Only input layers"], answer: "Many hidden layers" },
        { question: "Which layer in an ANN receives the initial data?", options: ["Hidden layer", "Output layer", "Input layer", "Bias layer"], answer: "Input layer" },
        { question: "Which of these is a common activation function?", options: ["ReLU", "Linear", "Square", "Addition"], answer: "ReLU" },
        { question: "The learning process in an ANN involves:", options: ["Updating weights", "Deleting inputs", "Adding neurons", "Changing hardware"], answer: "Updating weights" },
        { question: "Deep Learning is a subset of:", options: ["Machine Learning", "Classical Physics", "Database theory", "Manual programming"], answer: "Machine Learning" },
        { question: "What does the output layer produce?", options: ["Input data", "Features", "Final prediction/result", "Gradient"], answer: "Final prediction/result" },
        { question: "Without activation functions, ANNs can only learn:", options: ["Non-linear patterns", "Linear patterns", "Random patterns", "Nothing"], answer: "Linear patterns" }
      ]
    }
  ]
};
