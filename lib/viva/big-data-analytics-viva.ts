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

export const gtuBigDataAnalyticsViva: SubjectData = {
  subjectName: "BIG DATA ANALYTICS",
  totalChapters: 6,
  chapters: [
    {
      chapterNumber: 1,
      chapterName: "Introduction to Big Data",
      vivaQuestions: [
        { question: "What is Big Data?", answer: "Big Data refers to datasets that are so voluminous and complex that traditional data processing application software are inadequate to deal with them." },
        { question: "What are the characteristics of Big Data?", answer: "The characteristics are commonly referred to as the Vs: Volume, Velocity, Variety, Veracity, and Value." },
        { question: "What are the challenges of conventional systems?", answer: "Conventional systems struggle with scalability, processing speed, and the inability to handle unstructured data formats." },
        { question: "What are the types of Big Data?", answer: "Big data is categorized into Structured, Unstructured, and Semi-structured data." },
        { question: "What is intelligent data analysis?", answer: "It is the process of extracting meaningful insights and hidden patterns from data using advanced analytical techniques and machine learning." },
        { question: "How does a traditional business approach differ from a Big Data approach?", answer: "Traditional approaches rely on structured historical data and predefined queries, whereas Big Data approaches use predictive analytics on large-scale, diverse, and real-time datasets." },
        { question: "Why is Big Data important?", answer: "It helps organizations uncover hidden patterns, correlations, and insights that facilitate better decision-making and innovation." },
        { question: "What is a Big Data solution?", answer: "A Big Data solution involves technologies and architectures like Hadoop, NoSQL, and Spark designed to store, process, and analyze massive datasets." },
        { question: "What is 'Velocity' in Big Data?", answer: "Velocity refers to the speed at which new data is generated and the speed at which it needs to be processed to be useful." },
        { question: "What is 'Variety' in Big Data?", answer: "Variety refers to the different formats and types of data, such as text, audio, video, sensor data, and social media feeds." }
      ],
      mcqs: [
        { question: "Which of the following is NOT a characteristic of Big Data?", options: ["Volume", "Velocity", "Variety", "Volatility"], answer: "Volatility" },
        { question: "Big data that does not have a predefined model is called:", options: ["Structured", "Unstructured", "Semi-structured", "Relational"], answer: "Unstructured" },
        { question: "Which of the following describes the speed of data generation?", options: ["Volume", "Velocity", "Variety", "Veracity"], answer: "Velocity" },
        { question: "Big Data Analytics helps in:", options: ["Hiding data", "Uncovering hidden patterns", "Reducing storage", "Manual entry"], answer: "Uncovering hidden patterns" },
        { question: "What type of data is stored in a traditional RDBMS?", options: ["Unstructured", "Structured", "Semi-structured", "None"], answer: "Structured" },
        { question: "The 'Vs' in Big Data refer to:", options: ["Volume, Velocity, Variety", "Virtual, Visual, Vertical", "Version, Value, Validity", "Voltage, Volume, Velocity"], answer: "Volume, Velocity, Variety" },
        { question: "Which of the following is a challenge of conventional systems?", options: ["High scalability", "Handling unstructured data", "Low cost", "Real-time processing"], answer: "Handling unstructured data" },
        { question: "What is the primary goal of Big Data analytics?", options: ["Data cleaning only", "Decision making and insight discovery", "Increasing hardware cost", "Limiting data access"], answer: "Decision making and insight discovery" },
        { question: "Which data is often found in log files or social media?", options: ["Structured", "Unstructured", "Transactional", "Numerical"], answer: "Unstructured" },
        { question: "What does 'Veracity' in Big Data refer to?", options: ["Volume of data", "Trustworthiness and quality of data", "Data speed", "Data variety"], answer: "Trustworthiness and quality of data" }
      ]
    },
    {
      chapterNumber: 2,
      chapterName: "Hadoop",
      vivaQuestions: [
        { question: "What is Hadoop?", answer: "Hadoop is an open-source framework that allows for the distributed processing of large data sets across clusters of computers using simple programming models." },
        { question: "What is HDFS?", answer: "HDFS (Hadoop Distributed File System) is the primary storage system used by Hadoop, designed to run on commodity hardware and provide high throughput." },
        { question: "What are the main components of Hadoop?", answer: "The core components are HDFS (storage), MapReduce (processing), and YARN (resource management)." },
        { question: "What is MapReduce?", answer: "MapReduce is a programming model for processing large datasets with a parallel, distributed algorithm on a cluster." },
        { question: "What is Hadoop Streaming?", answer: "It is a utility that allows users to create and run MapReduce jobs with any executable or script as the mapper and/or the reducer." },
        { question: "What is the role of NameNode in HDFS?", answer: "The NameNode acts as the master server that manages the file system namespace and regulates access to files by clients." },
        { question: "What is the DataNode?", answer: "DataNodes are worker nodes that store the actual data blocks and perform read/write requests from the file system's clients." },
        { question: "What is a Hadoop Cluster?", answer: "A cluster is a group of computers (nodes) connected via a network that work together to store and process data using Hadoop." },
        { question: "What is the Shuffle and Sort phase in MapReduce?", answer: "It is the phase between the map and reduce tasks where the output of the map function is sorted and grouped by keys before being sent to the reducers." },
        { question: "How does Hadoop handle failures?", answer: "Hadoop handles failures by replicating data blocks across multiple DataNodes, ensuring data availability even if a node fails." }
      ],
      mcqs: [
        { question: "Which is the storage layer of Hadoop?", options: ["MapReduce", "YARN", "HDFS", "Hive"], answer: "HDFS" },
        { question: "What is the master node in HDFS called?", options: ["DataNode", "NameNode", "TaskTracker", "JobTracker"], answer: "NameNode" },
        { question: "MapReduce is a:", options: ["Programming model", "Storage system", "Operating system", "Database"], answer: "Programming model" },
        { question: "What does YARN stand for?", options: ["Yet Another Resource Negotiator", "Yet Another Real Network", "Yield Algorithm Resource Node", "None"], answer: "Yet Another Resource Negotiator" },
        { question: "In MapReduce, the 'Map' task performs:", options: ["Aggregation", "Filtering and sorting", "Filtering and transforming", "Only deleting"], answer: "Filtering and transforming" },
        { question: "Hadoop is written in which programming language?", options: ["Python", "Java", "C++", "Ruby"], answer: "Java" },
        { question: "What is a DataNode responsible for?", options: ["Managing metadata", "Storing actual data blocks", "Scheduling jobs", "Managing users"], answer: "Storing actual data blocks" },
        { question: "Hadoop uses which approach to handle node failures?", options: ["Data replication", "Restarting the cluster", "Ignoring the error", "Manual backup"], answer: "Data replication" },
        { question: "What is the phase where Map output is grouped by key?", options: ["Initialization", "Shuffle and Sort", "Finalization", "Cleaning"], answer: "Shuffle and Sort" },
        { question: "Which Hadoop component manages resources in the cluster?", options: ["HDFS", "MapReduce", "YARN", "Hive"], answer: "YARN" }
      ]
    },
    {
      chapterNumber: 3,
      chapterName: "NoSQL",
      vivaQuestions: [
        { question: "What is NoSQL?", answer: "NoSQL (Not Only SQL) is a category of database management systems that do not use the traditional relational database (RDBMS) table-based structure." },
        { question: "Why is NoSQL used for Big Data?", answer: "NoSQL databases provide horizontal scalability, flexibility with schema, and can handle massive amounts of unstructured data." },
        { question: "What are the types of NoSQL databases?", answer: "The four main types are Key-value stores, Column-family stores, Document stores, and Graph stores." },
        { question: "What is a Key-value store?", answer: "It stores data as a collection of key-value pairs, where the key is an identifier and the value is the data object." },
        { question: "What is a Document store?", answer: "Document stores store data in formats like JSON, BSON, or XML, allowing for complex and nested data structures." },
        { question: "What is a Column-family store?", answer: "These databases store data in columns rather than rows, which is highly efficient for analytical queries and sparse datasets (e.g., Apache Cassandra)." },
        { question: "What is a Graph store?", answer: "Graph stores use graph structures (nodes, edges, properties) to represent and store data, which is ideal for social networks and recommendation engines." },
        { question: "What is Master-Slave replication in NoSQL?", answer: "One node (master) handles writes while others (slaves) replicate data for read scalability and redundancy." },
        { question: "What is Peer-to-Peer replication?", answer: "All nodes are equal and can handle both reads and writes, increasing availability and eliminating single points of failure." },
        { question: "What does 'Shared-Nothing Architecture' mean?", answer: "Each node operates independently with its own CPU, memory, and disk, which is the cornerstone for achieving linear scalability." }
      ],
      mcqs: [
        { question: "Which of these is a type of NoSQL database?", options: ["Document Store", "Relational", "SQL", "Table-based"], answer: "Document Store" },
        { question: "Which NoSQL type is best for social network connections?", options: ["Key-value", "Document", "Graph", "Column-family"], answer: "Graph" },
        { question: "NoSQL databases are primarily designed for:", options: ["ACID compliance", "Horizontal scalability", "Complex joins", "Fixed schemas"], answer: "Horizontal scalability" },
        { question: "In a key-value store, data is accessed via:", options: ["SQL queries", "A unique key", "Row index", "Column name"], answer: "A unique key" },
        { question: "Which of the following is a common NoSQL data format?", options: ["SQL", "JSON", "Table", "Binary"], answer: "JSON" },
        { question: "What is the primary benefit of a 'shared-nothing' architecture?", options: ["Complexity", "Linear scalability", "Requires centralized CPU", "Limited data size"], answer: "Linear scalability" },
        { question: "Which NoSQL type stores data in columns rather than rows?", options: ["Key-value", "Column-family", "Document", "Graph"], answer: "Column-family" },
        { question: "Master-slave replication is a form of:", options: ["Data storage", "NoSQL Architectural pattern", "Indexing", "MapReduce"], answer: "NoSQL Architectural pattern" },
        { question: "NoSQL databases generally provide ________ schema.", options: ["Rigid", "Flexible", "Fixed", "Predefined"], answer: "Flexible" },
        { question: "What is the main goal of using NoSQL to manage big data?", options: ["To replace SQL", "To handle high-volume and variety", "To reduce network speed", "To eliminate the need for servers"], answer: "To handle high-volume and variety" }
      ]
    },
    {
      chapterNumber: 4,
      chapterName: "Mining Data Streams",
      vivaQuestions: [
        { question: "What is a Data Stream?", answer: "A data stream is an ordered, infinite sequence of data elements that arrive in real-time, requiring immediate processing." },
        { question: "What is the Stream Data Model?", answer: "It's a model where data is not stored permanently; instead, algorithms process it as it arrives, usually in a single pass." },
        { question: "Why can't we store data streams?", answer: "They are infinite and arrive at a very high velocity, making permanent storage impossible due to space constraints." },
        { question: "What is Stream Sampling?", answer: "Sampling is the process of selecting a representative subset of the stream to get an estimate of its properties without processing every element." },
        { question: "How do you count distinct elements in a stream?", answer: "Using algorithms like Flajolet-Martin, which use hashing to estimate the number of unique elements using minimal memory." },
        { question: "What is a Sliding Window?", answer: "A sliding window is a technique where only the most recent 'n' elements of the stream are considered for processing at any given time." },
        { question: "What are RTAP applications?", answer: "RTAP stands for Real-Time Analytics Platform, used for applications like stock market prediction and sentiment analysis." },
        { question: "What is Filtering in a data stream?", answer: "Filtering extracts or retains only the data elements that meet a specific condition, dropping the rest." },
        { question: "What is a Decaying Window?", answer: "It is a window model where older data items have less weight than newer ones, ensuring the analytics reflect recent trends." },
        { question: "How is Stock Market Prediction an application of stream analytics?", answer: "Because stock prices fluctuate every second, the system must process this infinite, real-time stream to identify trends and make buy/sell decisions instantly." }
      ],
      mcqs: [
        { question: "A sequence of data elements arriving in real-time is called a:", options: ["Batch", "Stream", "Table", "Query"], answer: "Stream" },
        { question: "Data streams typically require:", options: ["Multi-pass processing", "Single-pass processing", "Storage in RDBMS", "Offline processing"], answer: "Single-pass processing" },
        { question: "Which technique considers only the most recent data elements?", options: ["Hashing", "Sliding Window", "Batching", "Indexing"], answer: "Sliding Window" },
        { question: "What is the primary challenge of Data Streams?", options: ["Infinite size and high velocity", "Too little data", "No format", "Fixed schema"], answer: "Infinite size and high velocity" },
        { question: "What is a Real-Time Analytics Platform (RTAP) application?", options: ["Offline report generation", "Stock market prediction", "Database installation", "Server setup"], answer: "Stock market prediction" },
        { question: "What is the purpose of sampling in a stream?", options: ["To store all data", "To get estimates using a subset", "To delete all data", "To increase stream velocity"], answer: "To get estimates using a subset" },
        { question: "Which technique gives more weight to recent data?", options: ["Sliding Window", "Decaying Window", "Batch Window", "Fixed Window"], answer: "Decaying Window" },
        { question: "Counting distinct elements in a stream often uses:", options: ["Hashing", "Linear Search", "Sorting", "Joins"], answer: "Hashing" },
        { question: "Filtering in a stream means:", options: ["Retaining all data", "Removing irrelevant elements", "Storing all data", "Doubling data"], answer: "Removing irrelevant elements" },
        { question: "Sentiment analysis on Twitter is an example of:", options: ["Static batch analytics", "Real-time stream analytics", "Relational querying", "Hardware maintenance"], answer: "Real-time stream analytics" }
      ]
    },
    {
      chapterNumber: 5,
      chapterName: "Frameworks (Pig and Hive)",
      vivaQuestions: [
        { question: "What is Apache Pig?", answer: "Apache Pig is a high-level platform for creating programs that run on Apache Hadoop. It uses a language called Pig Latin for data analysis." },
        { question: "What is Pig Latin?", answer: "Pig Latin is a data flow language that allows users to express data analysis programs as a series of transformations." },
        { question: "What is Apache Hive?", answer: "Apache Hive is a data warehouse software built on top of Hadoop that allows for querying and analyzing large datasets using a SQL-like language called HiveQL." },
        { question: "What is HiveQL?", answer: "HiveQL is a query language used in Hive that is similar to standard SQL, making it easy for users familiar with RDBMS to analyze Big Data." },
        { question: "What is HBase?", answer: "HBase is a distributed, versioned, column-oriented database that runs on top of HDFS, designed for real-time read/write access to big data." },
        { question: "What is ZooKeeper?", answer: "ZooKeeper is a centralized service for maintaining configuration information, naming, providing distributed synchronization, and group services in large distributed systems." },
        { question: "What is the difference between Pig and Hive?", answer: "Pig is a procedural, data-flow language suited for complex transformations; Hive is a declarative, SQL-like warehouse suited for ad-hoc queries." },
        { question: "What are data processing operators in Pig?", answer: "These include LOAD, FILTER, GROUP, JOIN, STORE, and DUMP, used to build data transformation pipelines." },
        { question: "What is IBM InfoSphere BigInsights?", answer: "It is an enterprise-grade Big Data platform based on Hadoop that provides tools for data integration, management, and advanced analytics." },
        { question: "What is the role of Hive Services?", answer: "Hive services provide the infrastructure (like the metastore and query compiler) to translate HiveQL into MapReduce jobs." }
      ],
      mcqs: [
        { question: "Which language does Apache Pig use?", options: ["SQL", "Pig Latin", "Java", "Python"], answer: "Pig Latin" },
        { question: "Apache Hive uses a query language similar to:", options: ["Python", "C++", "SQL", "JavaScript"], answer: "SQL" },
        { question: "Which Hadoop-based database provides real-time read/write access?", options: ["HBase", "HDFS", "Pig", "Hive"], answer: "HBase" },
        { question: "What is ZooKeeper used for in distributed systems?", options: ["Data storage", "Distributed synchronization", "Screen rendering", "Compiling code"], answer: "Distributed synchronization" },
        { question: "Pig is primarily a ________ language.", options: ["Data-flow (procedural)", "Declarative (SQL-like)", "Functional", "Object-oriented"], answer: "Data-flow (procedural)" },
        { question: "Hive is primarily a ________ language.", options: ["Data-flow (procedural)", "Declarative (SQL-like)", "Functional", "Assembly"], answer: "Declarative (SQL-like)" },
        { question: "Which Pig operator is used to load data?", options: ["STORE", "LOAD", "GROUP", "JOIN"], answer: "LOAD" },
        { question: "HiveQL is the query language for:", options: ["Hadoop", "Hive", "Pig", "Spark"], answer: "Hive" },
        { question: "Which platform is designed for enterprise-grade Big Data management?", options: ["IBM InfoSphere BigInsights", "Notepad", "Excel", "Calc"], answer: "IBM InfoSphere BigInsights" },
        { question: "Which service stores the structure/schema of Hive tables?", options: ["Metastore", "NameNode", "TaskTracker", "ResourceManager"], answer: "Metastore" }
      ]
    },
    {
      chapterNumber: 6,
      chapterName: "Spark",
      vivaQuestions: [
        { question: "What is Apache Spark?", answer: "Apache Spark is an open-source, distributed computing system that provides fast, in-memory processing for big data workloads." },
        { question: "What is In-Memory Computing?", answer: "It refers to processing data in RAM instead of reading from and writing to the hard disk, which makes Spark significantly faster than MapReduce." },
        { question: "What is an RDD?", answer: "RDD (Resilient Distributed Dataset) is the fundamental data structure of Spark; it is an immutable, distributed collection of objects that can be processed in parallel." },
        { question: "What is PySpark?", answer: "PySpark is the Python API for Apache Spark, allowing developers to write Spark applications using Python." },
        { question: "How does Spark differ from MapReduce?", answer: "Spark is faster due to in-memory processing, supports interactive queries, and provides richer APIs compared to MapReduce's disk-based, two-stage process." },
        { question: "What is a Spark Application?", answer: "A Spark application consists of a driver program that runs the user's main function and executes parallel operations on the cluster." },
        { question: "What is Interactive Spark?", answer: "It refers to using the Spark shell (like PySpark shell) to run commands and get immediate feedback, which is great for exploration and debugging." },
        { question: "What are transformations in Spark?", answer: "Transformations are lazy operations that create a new RDD from an existing one, such as map() and filter()." },
        { question: "What are actions in Spark?", answer: "Actions return a value to the driver program or write data to storage, such as count(), collect(), and saveAsTextFile()." },
        { question: "Why is Spark 'resilient'?", answer: "Spark is resilient because it can automatically recover lost data partitions using the lineage (the graph of operations) that created the RDD." }
      ],
      mcqs: [
        { question: "Apache Spark is known for its ________ processing.", options: ["In-memory", "Disk-only", "Tape-based", "Manual"], answer: "In-memory" },
        { question: "The fundamental data structure in Spark is the:", options: ["HDFS Block", "RDD", "SQL Table", "MapNode"], answer: "RDD" },
        { question: "RDD stands for:", options: ["Resilient Distributed Dataset", "Rapid Data Distribution", "Real-time Data Dataset", "Remote Data Deployment"], answer: "Resilient Distributed Dataset" },
        { question: "Which API allows you to use Spark with Python?", options: ["JavaAPI", "PySpark", "C-Spark", "SQL-Spark"], answer: "PySpark" },
        { question: "Operations that create a new RDD from an existing one are called:", options: ["Actions", "Transformations", "Executions", "Loaders"], answer: "Transformations" },
        { question: "Which of these is a Spark Action?", options: ["map()", "filter()", "count()", "flatMap()"], answer: "count()" },
        { question: "Spark is faster than MapReduce because:", options: ["It uses more disk", "It processes data in memory", "It uses only one node", "It avoids all computation"], answer: "It processes data in memory" },
        { question: "What does 'lazy evaluation' in Spark mean?", options: ["It runs slowly", "It waits until an action is triggered to compute", "It never computes", "It uses very little RAM"], answer: "It waits until an action is triggered to compute" },
        { question: "The driver program in a Spark application:", options: ["Executes the main function", "Only stores data", "Never runs code", "Is always hidden"], answer: "Executes the main function" },
        { question: "How does Spark recover from data loss?", options: ["Using lineage", "Asking the user", "Restarting the cluster", "Manual backup"], answer: "Using lineage" }
      ]
    }
  ]
};
