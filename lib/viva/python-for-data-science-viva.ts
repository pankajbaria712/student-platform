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

export const gtuPythonForDataScienceViva: SubjectData = {
subjectName: "PYTHON FOR DATA SCIENCE",
totalChapters: 5,
chapters: [
{
chapterNumber: 1,
chapterName: "Overview of Python and Data Structures",
vivaQuestions: [
{ question: "What are the basic data types in Python?", answer: "Sir, the basic data types in Python include integers (int), floating-point numbers (float), strings (str), and booleans (bool)." },
{ question: "What is a list in Python?", answer: "Yes sir, a list is a built-in data structure in Python that is ordered, mutable, and allows duplicate elements. It is created using square brackets." },
{ question: "How is a tuple different from a list?", answer: "Sir, the primary difference is that a list is mutable and can be changed after creation, whereas a tuple is immutable, meaning its elements cannot be modified once assigned." },
{ question: "What is a dictionary in Python?", answer: "Sir, a dictionary is an unordered collection of data stored as key-value pairs. It is mutable and created using curly braces, providing fast data retrieval." },
{ question: "What is a set in Python?", answer: "Yes sir, a set is an unordered collection of unique elements. It is highly useful for removing duplicates from a sequence and performing mathematical operations like union and intersection." },
{ question: "What do you mean by a mutable object?", answer: "Sir, a mutable object is one whose internal state or data can be changed after it is created. Examples include lists, dictionaries, and sets." },
{ question: "What is an immutable object?", answer: "Sir, an immutable object cannot be modified after it is created. Examples in Python include strings, tuples, and integers." },
{ question: "How do you create a variable in Python?", answer: "Sir, in Python, you don't need to explicitly declare a variable's type. You simply assign a value to a name using the equals sign, like `x = 10`." },
{ question: "What is the purpose of an array in Python?", answer: "Sir, an array stores a collection of items of the same data type. While Python lists can hold mixed types, arrays (from the `array` module) are more memory-efficient for numerical data." },
{ question: "How do you add an element to a list?", answer: "Sir, you can add an element to the end of a list using the `append()` method, or insert it at a specific position using the `insert()` method." },
{ question: "How do you access a value in a dictionary?", answer: "Sir, you access a value by referring to its corresponding key inside square brackets, or by using the `get()` method which prevents key errors." },
{ question: "What is string slicing in Python?", answer: "Yes sir, string slicing is a way to extract a subset or substring from a string by specifying a start and end index, like `text[0:5]`." },
{ question: "Are strings mutable in Python?", answer: "No sir, strings are immutable. Any operation that modifies a string actually creates and returns a completely new string object in memory." },
{ question: "What is an expression in Python?", answer: "Sir, an expression is a combination of values, variables, and operators that the Python interpreter evaluates to produce a single value." },
{ question: "How does a function work in Python?", answer: "Sir, a function is a block of reusable code defined using the `def` keyword. It runs only when it is called and can accept arguments and return results." },
{ question: "What is the difference between a list and a set?", answer: "Sir, a list maintains the order of elements and allows duplicates, while a set does not guarantee any order and strictly enforces uniqueness among its elements." },
{ question: "How can you remove duplicates from a list?", answer: "Sir, the simplest way to remove duplicates from a list is to convert it into a set using `set(my_list)`, and then convert it back to a list." },
{ question: "What is the `len()` function used for?", answer: "Sir, the `len()` function is a built-in function used to find the number of items in a data structure like a string, list, tuple, or dictionary." },
{ question: "Can a dictionary have duplicate keys?", answer: "No sir, a dictionary cannot have duplicate keys. If you assign a value to an already existing key, it simply overwrites the old value." },
{ question: "What happens if you try to modify a tuple?", answer: "Sir, if you attempt to modify a tuple by reassigning an element, Python will throw a `TypeError` because tuples do not support item assignment." }
],
mcqs: [
{ question: "Which of the following is an immutable data structure?", options: ["List", "Dictionary", "Tuple", "Set"], answer: "Tuple" },
{ question: "Which symbol is used to create a dictionary in Python?", options: ["[]", "()", "{}", "<>"], answer: "{}" },
{ question: "What will be the output of `type([1, 2, 3])`?", options: ["<class 'tuple'>", "<class 'list'>", "<class 'array'>", "<class 'dict'>"], answer: "<class 'list'>" },
{ question: "Which method is used to add an element to the end of a list?", options: ["add()", "insert()", "append()", "extend()"], answer: "append()" },
{ question: "Which data structure does not allow duplicate elements?", options: ["List", "Set", "Tuple", "Array"], answer: "Set" },
{ question: "Dictionaries store data in the form of:", options: ["Indices", "Key-Value pairs", "Nodes", "Trees"], answer: "Key-Value pairs" },
{ question: "Which keyword is used to define a function in Python?", options: ["func", "def", "define", "function"], answer: "def" },
{ question: "What is the result of `len(\"Python\")`?", options: ["5", "6", "7", "Error"], answer: "6" },
{ question: "Which of the following creates an empty set?", options: ["set()", "{}", "[]", "()"], answer: "set()" },
{ question: "Strings in Python are:", options: ["Mutable", "Immutable", "Dynamic", "Floating"], answer: "Immutable" },
{ question: "Which method retrieves a value from a dictionary safely without throwing an error if the key doesn't exist?", options: ["fetch()", "get()", "retrieve()", "find()"], answer: "get()" },
{ question: "What index is used to access the first element of a list?", options: ["1", "0", "-1", "None"], answer: "0" },
{ question: "Which operation combines two lists?", options: ["Subtraction (-)", "Multiplication (*)", "Addition (+)", "Division (/)"], answer: "Addition (+)" },
{ question: "How do you access the last element of a list?", options: ["list[0]", "list[-1]", "list[last]", "list.end()"], answer: "list[-1]" },
{ question: "Variables in Python:", options: ["Must be declared with a type", "Do not need explicit type declaration", "Cannot change types", "Are only integers"], answer: "Do not need explicit type declaration" },
{ question: "Which of these is a valid boolean value in Python?", options: ["true", "True", "TRUE", "1"], answer: "True" },
{ question: "Which function converts a string to an integer?", options: ["str()", "float()", "int()", "chr()"], answer: "int()" },
{ question: "Which data structure is ordered and mutable?", options: ["Tuple", "List", "Set", "String"], answer: "List" },
{ question: "What does the `pop()` method do on a list?", options: ["Adds an element", "Removes and returns the last element", "Sorts the list", "Clears the list"], answer: "Removes and returns the last element" },
{ question: "Which built-in function shows the memory address of an object?", options: ["id()", "address()", "loc()", "type()"], answer: "id()" }
]
},
{
chapterNumber: 2,
chapterName: "Data Science and Python",
vivaQuestions: [
{ question: "What is the Data Science Pipeline?", answer: "Sir, the Data Science pipeline is the series of steps taken to solve a problem: obtaining data, cleaning and preparing it, performing exploratory data analysis, modeling, and finally visualizing and communicating results." },
{ question: "Why is Python so popular for Data Science?", answer: "Yes sir, Python is popular because it is an easy-to-learn, multipurpose language with a massive ecosystem of specialized libraries like Pandas, NumPy, and Scikit-learn designed specifically for data analysis and machine learning." },
{ question: "What is NumPy used for?", answer: "Sir, NumPy stands for Numerical Python. It is used for fundamental scientific computing, providing high-performance multidimensional array objects and tools for working with these arrays." },
{ question: "What is the Pandas library?", answer: "Sir, Pandas is a powerful library used for data manipulation and analysis. It introduces data structures like DataFrames and Series, making it easy to handle structured data." },
{ question: "What is the role of Matplotlib?", answer: "Sir, Matplotlib is a comprehensive library for creating static, animated, and interactive data visualizations in Python, like line plots, bar charts, and scatter plots." },
{ question: "What is Scikit-learn?", answer: "Sir, Scikit-learn is an open-source machine learning library for Python. It features various classification, regression, and clustering algorithms and is designed to interoperate with NumPy and SciPy." },
{ question: "What are Keras and TensorFlow used for?", answer: "Sir, Keras and TensorFlow are advanced libraries used specifically for building, training, and deploying deep learning models and artificial neural networks." },
{ question: "What is Beautiful Soup?", answer: "Sir, Beautiful Soup is a Python library used for web scraping. It parses HTML and XML documents, making it easy to extract data directly from web pages." },
{ question: "What is NetworkX used for?", answer: "Sir, NetworkX is a Python package used for the creation, manipulation, and study of the structure and dynamics of complex network graphs." },
{ question: "What is Exploratory Data Analysis (EDA)?", answer: "Yes sir, EDA is an approach to analyzing datasets to summarize their main characteristics, often using visual methods, to understand the data before applying formal modeling." },
{ question: "How does Data Science relate to Big Data and AI?", answer: "Sir, Data Science provides the analytical tools and algorithms (AI/Machine Learning) to process and extract meaningful insights from massive, complex datasets known as Big Data." },
{ question: "What is SciPy?", answer: "Sir, SciPy is a scientific computation library that uses NumPy underneath. It provides more utility functions for optimization, stats, and signal processing." },
{ question: "What are the core competencies of a data scientist?", answer: "Sir, a data scientist needs programming skills, domain expertise, and a strong foundation in mathematics and statistics to extract actionable insights from data." },
{ question: "Why is indentation important in Python?", answer: "Sir, unlike other languages that use curly braces, Python uses indentation to define the scope of loops, functions, and classes. It enforces readable code." },
{ question: "What do you mean by Rapid Prototyping?", answer: "Sir, it means quickly writing and testing scripts to explore data and validate models. Python's simple syntax allows data scientists to prototype solutions much faster than in languages like Java or C++." },
{ question: "What is an IDE?", answer: "Sir, an IDE is an Integrated Development Environment. It provides a comprehensive facility for programmers, including a code editor, debugger, and build automation. Examples are PyCharm or Jupyter." },
{ question: "How do you load data in a data science project?", answer: "Sir, data is typically loaded using libraries like Pandas, which provides functions like `read_csv()` to import flat files directly into a DataFrame." },
{ question: "What is meant by training a model?", answer: "Sir, training a model means feeding historical data into a machine learning algorithm so it can learn hidden patterns and make predictions on new, unseen data." },
{ question: "What is Python's Core Philosophy?", answer: "Sir, Python's core philosophy, often summarized in 'The Zen of Python', emphasizes code readability, simplicity, and explicitness (e.g., 'Simple is better than complex')." },
{ question: "Why does execution speed matter in Data Science?", answer: "Sir, Data Science deals with massive datasets. If the execution is too slow, it delays model training and analysis. Libraries like NumPy overcome Python's slow native speed by executing heavy tasks in C." }
],
mcqs: [
{ question: "Which library is foundational for numerical computing in Python?", options: ["Matplotlib", "NumPy", "Beautiful Soup", "Keras"], answer: "NumPy" },
{ question: "Which library provides the DataFrame data structure?", options: ["SciPy", "TensorFlow", "Pandas", "NetworkX"], answer: "Pandas" },
{ question: "What is the primary purpose of Scikit-learn?", options: ["Web scraping", "Deep learning", "Machine learning", "Data visualization"], answer: "Machine learning" },
{ question: "Which tool is best suited for parsing HTML documents?", options: ["Pandas", "Beautiful Soup", "NumPy", "Matplotlib"], answer: "Beautiful Soup" },
{ question: "NetworkX is primarily used for:", options: ["Creating network graphs", "Deep learning", "Reading Excel files", "Cleaning missing data"], answer: "Creating network graphs" },
{ question: "Keras and TensorFlow are used for:", options: ["Basic statistics", "Deep learning", "Data wrangling", "Web scraping"], answer: "Deep learning" },
{ question: "Which library is used to plot data and create graphs?", options: ["Matplotlib", "Scikit-learn", "SciPy", "NumPy"], answer: "Matplotlib" },
{ question: "Python determines code blocks using:", options: ["Semicolons", "Curly braces {}", "Indentation", "Parentheses"], answer: "Indentation" },
{ question: "The process of summarizing main characteristics of data before modeling is:", options: ["Deployment", "EDA (Exploratory Data Analysis)", "Web scraping", "Database tuning"], answer: "EDA (Exploratory Data Analysis)" },
{ question: "Which of the following is NOT a step in the Data Science Pipeline?", options: ["Preparing data", "Learning from data", "Compiling kernel OS", "Visualizing insights"], answer: "Compiling kernel OS" },
{ question: "Big Data refers to datasets that are:", options: ["Extremely large and complex", "Small and flat", "Only numeric", "Already cleaned"], answer: "Extremely large and complex" },
{ question: "Which of these is a Python IDE/environment widely used in Data Science?", options: ["Jupyter", "Photoshop", "MS Word", "AutoCAD"], answer: "Jupyter" },
{ question: "What allows Python to be fast for scientific computing despite being an interpreted language?", options: ["It uses HTML", "Libraries like NumPy are written in C", "It skips loops", "It runs on the GPU by default"], answer: "Libraries like NumPy are written in C" },
{ question: "Training a model is part of which Data Science competency?", options: ["Data cleaning", "Machine Learning / AI", "Data visualization", "Database management"], answer: "Machine Learning / AI" },
{ question: "SciPy is closely related to and builds upon:", options: ["Beautiful Soup", "NumPy", "Django", "Flask"], answer: "NumPy" },
{ question: "What is 'The Zen of Python'?", options: ["A library", "A machine learning algorithm", "A collection of guiding principles for Python's design", "A deep learning framework"], answer: "A collection of guiding principles for Python's design" },
{ question: "Extracting knowledge and insights from data is the core goal of:", options: ["Web Development", "Data Science", "System Administration", "Network Engineering"], answer: "Data Science" },
{ question: "Which language is considered a multipurpose, simple, and efficient language for AI?", options: ["HTML", "CSS", "Python", "SQL"], answer: "Python" },
{ question: "An application that requires building an Artificial Neural Network would likely use:", options: ["Beautiful Soup", "TensorFlow", "Pandas", "Matplotlib"], answer: "TensorFlow" },
{ question: "Which library would you use to solve complex mathematical integration and optimization problems?", options: ["SciPy", "Seaborn", "Requests", "Flask"], answer: "SciPy" }
]
},
{
chapterNumber: 3,
chapterName: "Getting Your Hands Dirty With Data",
vivaQuestions: [
{ question: "What is Jupyter Notebook?", answer: "Sir, Jupyter Notebook is an open-source web application that allows you to create and share documents containing live code, equations, visualizations, and narrative text, heavily used in data science." },
{ question: "What are magic functions in IPython?", answer: "Yes sir, magic functions are special commands in IPython/Jupyter starting with `%` or `%%` that solve common problems, like `%timeit` to measure execution time or `%matplotlib inline` to display plots." },
{ question: "How do you read a CSV file using Pandas?", answer: "Sir, you can read a CSV file using the Pandas function `pd.read_csv('filename.csv')`, which loads the data directly into a DataFrame." },
{ question: "How do you handle missing data in Pandas?", answer: "Sir, you can handle missing data by either removing it using `dropna()`, or imputing/filling it with a specific value, mean, or median using the `fillna()` method." },
{ question: "What is Data Imputation?", answer: "Sir, imputation is the process of replacing missing data with substituted values, such as the mean of the column, to retain the rest of the row's data for analysis." },
{ question: "What is the difference between slicing and dicing data?", answer: "Sir, slicing means selecting a specific subset of rows or columns from the dataset. Dicing involves selecting a specific sub-grid by applying conditions to both rows and columns simultaneously." },
{ question: "What are categorical variables?", answer: "Sir, categorical variables contain text or discrete groups rather than numerical values, such as 'Gender' or 'Country'. They usually need to be converted to numeric codes for machine learning." },
{ question: "How do you remove duplicates in Pandas?", answer: "Sir, you can easily remove duplicate rows in a DataFrame by using the built-in `drop_duplicates()` method." },
{ question: "What is XPath?", answer: "Sir, XPath is a query language used for selecting nodes from an XML or HTML document. It is very useful in web scraping to extract specific data elements." },
{ question: "What is the Bag of Words model?", answer: "Sir, Bag of Words is a text representation technique in Natural Language Processing. It represents text as a 'bag' (multiset) of its words, counting frequency, disregarding grammar and word order." },
{ question: "What are n-grams?", answer: "Sir, n-grams are contiguous sequences of 'n' items (words or letters) from a given sample of text. For example, a 2-gram (bigram) takes words in pairs, retaining some local context." },
{ question: "What is TF-IDF?", answer: "Yes sir, TF-IDF stands for Term Frequency-Inverse Document Frequency. It is a statistical measure that evaluates how important a word is to a document in a collection or corpus, down-weighting very common words like 'the'." },
{ question: "What is stemming in text processing?", answer: "Sir, stemming is the process of reducing a word to its base or root form, like reducing 'running' or 'runs' to 'run', so the algorithm treats them as the same word." },
{ question: "What are 'stop words'?", answer: "Sir, stop words are very common words in a language, such as 'is', 'and', or 'the', which carry little meaningful information and are usually removed during text data preparation." },
{ question: "How do you concatenate data in Pandas?", answer: "Sir, you use the `pd.concat()` function to combine two or more DataFrames either vertically by adding rows, or horizontally by adding columns." },
{ question: "What is Unicode and why deal with it?", answer: "Sir, Unicode is a universal character encoding standard. When working with raw text, dealing with Unicode ensures that special characters from different languages are processed correctly without throwing encoding errors." },
{ question: "What is a regular expression (regex)?", answer: "Sir, a regular expression is a sequence of characters that forms a search pattern. It is heavily used in text wrangling to find, replace, or extract specific string patterns." },
{ question: "What is an adjacency matrix?", answer: "Sir, in graph data, an adjacency matrix is a square matrix used to represent a finite graph. The elements indicate whether pairs of vertices are adjacent or connected in the graph." },
{ question: "How can you read data from a Relational Database in Python?", answer: "Sir, you can use Pandas' `read_sql()` function along with an SQL query and a database connection object to pull data directly from an RDBMS into a DataFrame." },
{ question: "When should you use NumPy over Pandas?", answer: "Sir, you should use NumPy when you are dealing with purely numerical matrices and need to perform complex mathematical computations quickly. Pandas is better for mixed-type tabular data and data manipulation." }
],
mcqs: [
{ question: "Which magic command is used to display plots directly in the Jupyter Notebook?", options: ["%run", "%timeit", "%matplotlib inline", "%plot"], answer: "%matplotlib inline" },
{ question: "Which Pandas function is used to read a comma-separated values file?", options: ["read_excel()", "read_sql()", "read_csv()", "load_csv()"], answer: "read_csv()" },
{ question: "Replacing missing data with a statistical value (like mean) is called:", options: ["Slicing", "Imputation", "Encoding", "Dicing"], answer: "Imputation" },
{ question: "Which method is used to remove missing values in a Pandas DataFrame?", options: ["fillna()", "dropna()", "remove()", "delete_nulls()"], answer: "dropna()" },
{ question: "Variables that represent categories rather than numbers are called:", options: ["Continuous variables", "Categorical variables", "Float variables", "Boolean variables"], answer: "Categorical variables" },
{ question: "Which technique represents text by simply counting the frequency of words?", options: ["TF-IDF", "Bag of Words", "Stemming", "XPath"], answer: "Bag of Words" },
{ question: "In NLP, words like 'is', 'a', 'the' that are often removed are called:", options: ["N-grams", "Stop words", "Keywords", "Tokens"], answer: "Stop words" },
{ question: "TF-IDF stands for:", options: ["Text Frequency-Inverse Document Frequency", "Term Frequency-Inverse Document Frequency", "Term Format-Inverse Data Format", "None of the above"], answer: "Term Frequency-Inverse Document Frequency" },
{ question: "Reducing 'swimming' to 'swim' is an example of:", options: ["Concatenating", "Stemming", "Dicing", "Imputation"], answer: "Stemming" },
{ question: "Which language is used to extract data from specific paths in XML/HTML?", options: ["Regex", "SQL", "XPath", "C++"], answer: "XPath" },
{ question: "A 2-gram (bigram) sequence for 'data science course' would include:", options: ["['data', 'science', 'course']", "['data science', 'science course']", "['data science course']", "['d', 'a', 't', 'a']"], answer: "['data science', 'science course']" },
{ question: "Which Pandas method combines DataFrames by appending rows or columns?", options: ["merge()", "join()", "concat()", "append_df()"], answer: "concat()" },
{ question: "Removing duplicates in Pandas is done using:", options: ["drop_duplicates()", "unique()", "remove_dups()", "filter()"], answer: "drop_duplicates()" },
{ question: "A square matrix used to represent connections in Graph Data is an:", options: ["Identity matrix", "Adjacency matrix", "Diagonal matrix", "Inverse matrix"], answer: "Adjacency matrix" },
{ question: "Which function helps measure the execution time of a Python statement in Jupyter?", options: ["%timeit", "%debug", "%ls", "%run"], answer: "%timeit" },
{ question: "Regular expressions are primarily used for:", options: ["Mathematical calculations", "Drawing charts", "Pattern matching in strings", "Reading databases"], answer: "Pattern matching in strings" },
{ question: "If you have a large dataset that doesn't fit in RAM, you should:", options: ["Give up", "Stream it in chunks", "Use HTML", "Convert to JSON"], answer: "Stream it in chunks" },
{ question: "To group data based on categories and apply a function (like sum), Pandas uses:", options: ["slice()", "groupby()", "dice()", "aggregate()"], answer: "groupby()" },
{ question: "Which library is heavily used alongside Pandas for matrix operations?", options: ["Matplotlib", "NumPy", "NetworkX", "BeautifulSoup"], answer: "NumPy" },
{ question: "Encoding categorical variables is necessary because:", options: ["It makes the file smaller", "Machine learning models generally require numerical input", "It creates graphs automatically", "It removes missing data"], answer: "Machine learning models generally require numerical input" }
]
},
{
chapterNumber: 4,
chapterName: "Data Visulization",
vivaQuestions: [
{ question: "What is the purpose of Data Visualization?", answer: "Sir, data visualization translates complex data into graphical representations like charts and graphs, making it much easier for the human brain to identify trends, patterns, and outliers." },
{ question: "Which library is primarily used for visualization in Python?", answer: "Yes sir, Matplotlib is the fundamental and most widely used plotting library in Python, providing a MATLAB-like interface for creating static and interactive plots." },
{ question: "How do you plot a simple line graph in Matplotlib?", answer: "Sir, you can plot a line graph by calling `plt.plot(x, y)` where x and y are the arrays of data points, followed by `plt.show()` to display the graph." },
{ question: "What is a pie chart best used for?", answer: "Sir, a pie chart is best used to show the proportional parts of a whole, illustrating how a total amount is divided between different categorical groups." },
{ question: "When should you use a bar chart?", answer: "Sir, a bar chart is ideal for comparing different categories of data. The height or length of the bars represents the value or frequency of each category." },
{ question: "What does a histogram display?", answer: "Sir, a histogram displays the frequency distribution of a continuous numerical dataset. It groups the data into 'bins' and shows how many data points fall into each bin." },
{ question: "How is a histogram different from a bar chart?", answer: "Sir, a bar chart compares discrete categories and has spaces between bars. A histogram displays a continuous distribution of numerical data with no spaces between the bins." },
{ question: "What is a boxplot?", answer: "Sir, a boxplot is a standardized way of displaying the distribution of data based on a five-number summary: minimum, first quartile, median, third quartile, and maximum. It is highly useful for spotting outliers." },
{ question: "What is a scatterplot used for?", answer: "Sir, a scatterplot uses dots to represent values for two different numeric variables. It is primarily used to observe and identify relationships or correlations between the variables." },
{ question: "How do you save a Matplotlib plot to your disk?", answer: "Sir, you can save a plot to your local disk by using the `plt.savefig('filename.png')` function before calling `plt.show()`." },
{ question: "What are 'Ticks' in a graph?", answer: "Sir, ticks are the markers denoting data intervals on the X and Y axes. You can customize them in Matplotlib using `plt.xticks()` and `plt.yticks()`." },
{ question: "How do you add labels and titles to a plot?", answer: "Sir, you add a title using `plt.title()`, and label the axes using `plt.xlabel()` for the x-axis and `plt.ylabel()` for the y-axis." },
{ question: "What is a legend in a graph?", answer: "Sir, a legend is a small box on the plot that describes what different colors, lines, or markers represent in the chart. It is added using `plt.legend()`." },
{ question: "What is Time Series data?", answer: "Sir, Time Series data is a sequence of data points indexed in time order, like daily stock prices. When plotting, time is almost always placed on the X-axis to show trends over time." },
{ question: "What is the Basemap toolkit used for?", answer: "Sir, Basemap is a Matplotlib extension toolkit used for plotting 2D data onto geographic maps, allowing visualization of geographical data." },
{ question: "How do you visualize graphs or networks?", answer: "Sir, you can visualize node-and-edge networks by using the NetworkX library combined with Matplotlib to draw directed or undirected graphs." },
{ question: "What is the difference between a directed and undirected graph?", answer: "Sir, in an undirected graph, relationships between nodes have no specific direction. In a directed graph, the edges have a specific direction, acting like one-way streets." },
{ question: "How can you change the line style in Matplotlib?", answer: "Sir, you can change the line style by passing parameters like `linestyle='--'` for dashed lines or `color='r'` for red lines directly inside the `plt.plot()` function." },
{ question: "What are annotations in a plot?", answer: "Sir, annotations are text notes placed at specific coordinates on the graph to draw attention to a particular data point or trend, using the `plt.annotate()` function." },
{ question: "How do you plot multiple lines on the same graph?", answer: "Sir, you simply call `plt.plot()` multiple times with different datasets before calling `plt.show()`. Matplotlib will automatically draw them on the same axes." }
],
mcqs: [
{ question: "Which chart is best for showing parts of a whole?", options: ["Scatterplot", "Line chart", "Pie chart", "Histogram"], answer: "Pie chart" },
{ question: "Which chart is used to show the frequency distribution of continuous data?", options: ["Bar chart", "Pie chart", "Histogram", "Network graph"], answer: "Histogram" },
{ question: "A Boxplot is primarily used to:", options: ["Draw geographic maps", "Spot outliers and show quartiles", "Show parts of a whole", "Plot HTML data"], answer: "Spot outliers and show quartiles" },
{ question: "To observe the correlation between two numeric variables, you should use a:", options: ["Scatterplot", "Pie chart", "Bar chart", "Histogram"], answer: "Scatterplot" },
{ question: "Which function adds a description box indicating what colors/lines represent?", options: ["plt.title()", "plt.annotate()", "plt.legend()", "plt.ticks()"], answer: "plt.legend()" },
{ question: "Which Matplotlib function saves the plot to a file?", options: ["plt.save()", "plt.savefig()", "plt.export()", "plt.download()"], answer: "plt.savefig()" },
{ question: "Time series data usually plots 'Time' on the:", options: ["Z-axis", "Y-axis", "X-axis", "Legend"], answer: "X-axis" },
{ question: "Which toolkit in Matplotlib is used for plotting geographical data?", options: ["NetworkX", "Basemap", "BeautifulSoup", "Seaborn"], answer: "Basemap" },
{ question: "What does `plt.xlabel('Age')` do?", options: ["Creates a title", "Labels the X-axis as 'Age'", "Creates a legend", "Plots the Age data"], answer: "Labels the X-axis as 'Age'" },
{ question: "In a network graph, connections with specific directions are called:", options: ["Undirected graphs", "Directed graphs", "Boxplots", "Scatterplots"], answer: "Directed graphs" },
{ question: "Which parameter changes the color of a line plot in Matplotlib?", options: ["color", "shade", "hue", "fill"], answer: "color" },
{ question: "To point out a specific data point with text on the chart, you use:", options: ["plt.annotate()", "plt.xlabel()", "plt.title()", "plt.grid()"], answer: "plt.annotate()" },
{ question: "Which command shows the grid lines on a Matplotlib plot?", options: ["plt.show()", "plt.grid(True)", "plt.lines()", "plt.ticks()"], answer: "plt.grid(True)" },
{ question: "A Scatterplot requires at least how many numeric variables?", options: ["1", "2", "3", "0"], answer: "2" },
{ question: "Which library is used to draw complex network topologies?", options: ["Pandas", "Scikit-learn", "NetworkX", "NumPy"], answer: "NetworkX" },
{ question: "The median in a boxplot is represented by:", options: ["The dots outside the whiskers", "The line inside the box", "The top whisker", "The bottom whisker"], answer: "The line inside the box" },
{ question: "To format the markers on a line plot to look like circles, you can use:", options: ["marker='o'", "marker='square'", "line='circle'", "shape='round'"], answer: "marker='o'" },
{ question: "Histograms use 'bins' to:", options: ["Store memory", "Group continuous data intervals", "Color the chart", "Label the axes"], answer: "Group continuous data intervals" },
{ question: "Bar charts are best suited for:", options: ["Continuous time data", "Comparing discrete categorical groups", "Finding mathematical equations", "Geographical mapping"], answer: "Comparing discrete categorical groups" },
{ question: "To draw multiple plots, you must:", options: ["Call plt.plot() multiple times before plt.show()", "You cannot draw multiple plots", "Use a pie chart", "Use Basemap"], answer: "Call plt.plot() multiple times before plt.show()" }
]
},
{
chapterNumber: 5,
chapterName: "Data Wrangling",
vivaQuestions: [
{ question: "What is Data Wrangling?", answer: "Sir, data wrangling is the process of cleaning, structuring, and enriching raw data into a desired format for better decision making in less time." },
{ question: "What is Scikit-learn mostly used for?", answer: "Yes sir, Scikit-learn is the standard machine learning library in Python used for classification, regression, clustering, and data preprocessing tasks." },
{ question: "What is the Hashing Trick in Data Science?", answer: "Sir, the hashing trick (or feature hashing) is a fast and memory-efficient way to vectorize features, especially text, by applying a hash function to map features directly to indices in an array." },
{ question: "What does benchmarking mean?", answer: "Sir, benchmarking means evaluating the performance, typically execution speed, of a piece of code. In Python, we often use the `timeit` module to accurately measure how long a snippet takes." },
{ question: "What is the role of a memory profiler?", answer: "Sir, a memory profiler tracks memory consumption line by line as a Python script executes. It helps identify memory leaks and optimize code for large datasets." },
{ question: "Why do we run tasks in parallel on multiple cores?", answer: "Sir, data processing can be very slow. Using the `multiprocessing` module allows Python to utilize multiple CPU cores simultaneously, drastically reducing the execution time of heavy tasks." },
{ question: "What are Descriptive Statistics?", answer: "Sir, descriptive statistics summarize the central tendency, dispersion, and shape of a dataset's distribution. It gives a quick numerical overview of the data." },
{ question: "What are measures of Central Tendency?", answer: "Sir, the main measures are the Mean (average), Median (middle value), and Mode (most frequent value). They represent the center point of a data distribution." },
{ question: "What is variance in statistics?", answer: "Sir, variance measures how far each number in a dataset is from the mean. A high variance indicates that the data points are very spread out." },
{ question: "What are percentiles?", answer: "Sir, a percentile indicates the value below which a given percentage of observations fall. For example, the 50th percentile is exactly the median." },
{ question: "What is a contingency table (crosstab)?", answer: "Sir, a contingency table displays the frequency distribution of categorical variables. It helps in analyzing the relationship between two or more categorical features." },
{ question: "What is the difference between covariance and correlation?", answer: "Sir, covariance indicates the direction of the linear relationship between two variables. Correlation standardizes this, providing both the direction and the strength of the relationship on a scale from -1 to 1." },
{ question: "What is a Z-score standardization?", answer: "Yes sir, Z-score standardization rescales data so it has a mean of 0 and a standard deviation of 1. It is calculated by subtracting the mean and dividing by the standard deviation." },
{ question: "Why is Z-score standardization important?", answer: "Sir, machine learning algorithms often perform poorly if numerical features have vastly different scales. Standardization puts all features on the same scale." },
{ question: "What is the Chi-Square test used for?", answer: "Sir, the chi-square test is a statistical test used to determine if there is a significant association between two categorical variables in a contingency table." },
{ question: "What is a normal distribution?", answer: "Sir, it is a symmetric, bell-shaped probability distribution where most observations cluster around the central peak, and the mean, median, and mode are equal." },
{ question: "How do you handle outliers discovered during EDA?", answer: "Sir, depending on the domain, outliers can be dropped, capped at a certain percentile, or transformed using techniques like log transformation to reduce their impact." },
{ question: "What is a t-test used for?", answer: "Sir, a t-test is used to compare the means of two groups to determine if they are statistically significantly different from each other." },
{ question: "What does deterministic selection mean?", answer: "Sir, it refers to selecting data or subsets in a predictable, non-random manner, ensuring that every time the process is run, the exact same result is produced." },
{ question: "What is the purpose of parallel coordinates in EDA?", answer: "Sir, parallel coordinates allow visualization of high-dimensional multivariate data. Each feature is an axis, and a data point is represented as a line connecting values across all axes." }
],
mcqs: [
{ question: "Which library is standard for machine learning in Python?", options: ["Beautiful Soup", "Scikit-learn", "Matplotlib", "NetworkX"], answer: "Scikit-learn" },
{ question: "The 'Hashing Trick' is a technique used for:", options: ["Sorting lists", "Fast, memory-efficient feature vectorization", "Drawing graphs", "Executing SQL"], answer: "Fast, memory-efficient feature vectorization" },
{ question: "Which module is used to benchmark the execution time of Python code?", options: ["timeit", "math", "os", "sys"], answer: "timeit" },
{ question: "Tracking RAM usage line-by-line is done using a:", options: ["CPU monitor", "Memory profiler", "Hard drive scanner", "Network analyzer"], answer: "Memory profiler" },
{ question: "To speed up processing by using multiple CPU cores, you use:", options: ["timeit", "multiprocessing", "threading", "BeautifulSoup"], answer: "multiprocessing" },
{ question: "Mean, Median, and Mode are measures of:", options: ["Variance", "Central Tendency", "Correlation", "Normality"], answer: "Central Tendency" },
{ question: "A measure of how spread out data points are from the mean is:", options: ["Median", "Variance", "Mode", "Z-score"], answer: "Variance" },
{ question: "The 50th percentile of a dataset is equivalent to the:", options: ["Mean", "Mode", "Median", "Standard Deviation"], answer: "Median" },
{ question: "A table showing frequencies of two categorical variables is a:", options: ["Contingency table", "Z-score table", "Time series table", "Hash table"], answer: "Contingency table" },
{ question: "A correlation coefficient of +1 indicates:", options: ["No relationship", "Perfect positive linear relationship", "Perfect negative relationship", "Error"], answer: "Perfect positive linear relationship" },
{ question: "Which transformation sets the mean to 0 and standard deviation to 1?", options: ["Log transform", "Z-score standardization", "Hashing", "Min-Max scaling"], answer: "Z-score standardization" },
{ question: "Which test checks the association between categorical variables?", options: ["Z-test", "t-test", "Chi-square test", "ANOVA"], answer: "Chi-square test" },
{ question: "Comparing the means of two distinct groups is usually done with a:", options: ["t-test", "Chi-square test", "Hash function", "Correlation"], answer: "t-test" },
{ question: "A bell-shaped distribution where mean, median, and mode are equal is:", options: ["Skewed", "Normal distribution", "Bimodal", "Uniform"], answer: "Normal distribution" },
{ question: "Parallel coordinates plot is used to visualize:", options: ["A single variable", "Two variables", "High-dimensional multivariate data", "Text data"], answer: "High-dimensional multivariate data" },
{ question: "Data wrangling mostly involves:", options: ["Presenting to clients", "Cleaning, structuring, and enriching data", "Deploying models", "Installing hardware"], answer: "Cleaning, structuring, and enriching data" },
{ question: "Which metric is bounded between -1 and 1?", options: ["Variance", "Covariance", "Correlation", "Standard Deviation"], answer: "Correlation" },
{ question: "If data is heavily skewed, a common transformation used is:", options: ["Z-score", "Log transformation", "Chi-square", "T-test"], answer: "Log transformation" },
{ question: "Deterministic behavior means:", options: ["Random output", "The same input always yields the exact same output", "Faster execution", "Less memory use"], answer: "The same input always yields the exact same output" },
{ question: "Exploratory Data Analysis (EDA) relies heavily on:", options: ["Deep learning neural networks", "Descriptive statistics and visualization", "Web scraping", "System profiling"], answer: "Descriptive statistics and visualization" }
]
}
]
};