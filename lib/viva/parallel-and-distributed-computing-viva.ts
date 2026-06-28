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

export const gtuParallelAndDistributedComputingViva: SubjectData = {
  subjectName: "PARALLEL AND DISTRIBUTED COMPUTING",
  totalChapters: 6,
  chapters: [
    {
      chapterNumber: 1,
      chapterName: "Introduction to Parallel Computing",
      vivaQuestions: [
        { question: "What is Parallel Computing?", answer: "Parallel computing is the practice of using multiple processing elements simultaneously to solve a computational problem, breaking it into smaller parts that can be processed concurrently." },
        { question: "How does parallel computing differ from sequential computing?", answer: "Sequential computing executes tasks one after another on a single processor, while parallel computing executes tasks at the same time on multiple processors." },
        { question: "What is the primary goal of parallelism?", answer: "The primary goal is to reduce total execution time by leveraging multiple resources, thereby increasing performance and throughput." },
        { question: "What is concurrency?", answer: "Concurrency refers to the ability of a system to manage multiple tasks at the same time, often by interleaving them on a single processor, though they may not be executing simultaneously." },
        { question: "What is the difference between Parallelism and Concurrency?", answer: "Parallelism means executing multiple tasks at the exact same time on multiple hardware resources, while concurrency means managing multiple tasks as if they were running simultaneously." },
        { question: "What is a major scope/issue in parallel computing?", answer: "Major issues include synchronization overhead, load balancing across processors, and the complexity of debugging parallel programs." },
        { question: "What is meant by 'multiple instruction streams'?", answer: "It refers to the use of different instruction streams to perform operations, a core concept in Flynn's Taxonomy for parallel processing." },
        { question: "What is the power of parallelism?", answer: "The power lies in its ability to solve computationally intensive problems (like climate modeling or simulations) that would take an impractical amount of time on a single processor." },
        { question: "Can every sequential program be easily parallelized?", answer: "No, many programs have inherent data dependencies that make them strictly sequential, or the overhead of parallelization might exceed the performance gains." },
        { question: "What is a 'speedup' in parallel computing?", answer: "Speedup is the ratio of the execution time of a sequential algorithm to the execution time of a parallel version of that same algorithm." }
      ],
      mcqs: [
        { question: "Parallel computing is defined by:", options: ["Single processor execution", "Multiple processors working simultaneously", "Sequential task processing", "Using only one instruction stream"], answer: "Multiple processors working simultaneously" },
        { question: "What is the primary goal of parallel computing?", options: ["Increase memory usage", "Reduce total execution time", "Simulate sequential code", "Reduce hardware costs"], answer: "Reduce total execution time" },
        { question: "Concurrency is best described as:", options: ["Executing tasks at the exact same time", "Managing multiple tasks that overlap in time", "Only hardware-based", "Sequential execution only"], answer: "Managing multiple tasks that overlap in time" },
        { question: "What is a major issue in parallel computing?", options: ["Lack of disk space", "Load balancing", "Compiler design", "Network latency only"], answer: "Load balancing" },
        { question: "The ratio of sequential execution time to parallel execution time is:", options: ["Efficiency", "Speedup", "Throughput", "Latency"], answer: "Speedup" },
        { question: "Which of these is NOT a goal of parallelism?", options: ["Performance", "Throughput", "Sequential reliability", "Solving large problems"], answer: "Sequential reliability" },
        { question: "Parallelism using multiple instruction streams is fundamental to:", options: ["SISD architecture", "MIMD architecture", "Single-core processors", "Sequential code"], answer: "MIMD architecture" },
        { question: "What is the main bottleneck for parallelizing sequential code?", options: ["Data dependencies", "High memory", "Compiler type", "Operating system"], answer: "Data dependencies" },
        { question: "Which computing model executes tasks on multiple processors simultaneously?", options: ["Sequential", "Parallel", "Interleaved", "Single-tasking"], answer: "Parallel" },
        { question: "Parallel algorithms focus on:", options: ["Minimal resource usage", "Maximizing concurrency", "Serial execution", "Single-processor optimization"], answer: "Maximizing concurrency" }
      ]
    },
    {
      chapterNumber: 2,
      chapterName: "Parallel Architecture",
      vivaQuestions: [
        { question: "What is Flynn's Taxonomy?", answer: "Flynn's Taxonomy classifies computer architectures into four categories based on the number of instruction and data streams: SISD, SIMD, MISD, and MIMD." },
        { question: "What is a Pipeline architecture?", answer: "Pipelining is an implementation technique where multiple instructions are overlapped in execution, similar to an assembly line in a factory." },
        { question: "What is Shared Memory Architecture?", answer: "In shared memory systems, all processors share a common global memory address space, and communication between them happens through this shared space." },
        { question: "What is Distributed Memory Architecture?", answer: "In distributed memory systems, each processor has its own private memory, and communication between processors must be performed by explicit message passing." },
        { question: "What is SMP (Symmetric Multiprocessing)?", answer: "SMP is a system where multiple identical processors share a single operating system and memory, providing balanced load distribution." },
        { question: "What is GPU co-processing?", answer: "GPUs are specialized processors designed to handle massive amounts of data in parallel, often used to accelerate computationally intensive tasks alongside the main CPU." },
        { question: "What is Cache Coherence?", answer: "Cache coherence ensures that multiple caches in a multiprocessor system maintain a consistent view of data, preventing processors from reading outdated values from their local caches." },
        { question: "What is NUMA?", answer: "NUMA (Non-Uniform Memory Access) is a shared memory architecture where access time depends on the memory location relative to the processor." },
        { question: "What is SIMD?", answer: "SIMD (Single Instruction, Multiple Data) is a parallel architecture where one instruction is applied to multiple data elements simultaneously, typical in array processors and GPUs." },
        { question: "What is a Systolic Architecture?", answer: "A systolic architecture is a network of processing elements that rhythmically compute and pass data through the system, often used for specific signal processing tasks." }
      ],
      mcqs: [
        { question: "Flynn's Taxonomy classifies architectures based on:", options: ["Instruction and Data streams", "Memory size", "Disk speed", "Compiler type"], answer: "Instruction and Data streams" },
        { question: "Which architecture uses one instruction to process multiple data elements?", options: ["SISD", "SIMD", "MISD", "MIMD"], answer: "SIMD" },
        { question: "In shared memory architectures, processors communicate via:", options: ["Messages", "A common global address space", "Network packets", "Disk storage"], answer: "A common global address space" },
        { question: "Which architecture is characterized by private local memory per processor?", options: ["Shared memory", "Distributed memory", "Symmetric multiprocessing", "Vector processing"], answer: "Distributed memory" },
        { question: "Cache coherence is critical in:", options: ["Single-processor systems", "Multiprocessor systems with local caches", "Distributed memory systems", "Disk arrays"], answer: "Multiprocessor systems with local caches" },
        { question: "NUMA stands for:", options: ["New Uniform Memory Access", "Non-Uniform Memory Access", "Network-Universal Memory Access", "None of the above"], answer: "Non-Uniform Memory Access" },
        { question: "Which architecture resembles an assembly line?", options: ["Systolic", "Pipeline", "Vector", "Array"], answer: "Pipeline" },
        { question: "GPU co-processing is primarily used for:", options: ["Massive parallel data tasks", "Sequential logic", "Operating system management", "Disk file management"], answer: "Massive parallel data tasks" },
        { question: "SMP stands for:", options: ["Simple Multiprocessor", "Symmetric Multiprocessing", "Shared Memory Parallelism", "System Multi-Programming"], answer: "Symmetric Multiprocessing" },
        { question: "Which Flynn category does a modern multi-core CPU typically fall under?", options: ["SISD", "SIMD", "MISD", "MIMD"], answer: "MIMD" }
      ]
    },
    {
      chapterNumber: 3,
      chapterName: "Parallel Algorithm Design Principles and Programming",
      vivaQuestions: [
        { question: "What is Task-Based Decomposition?", answer: "Task-based decomposition divides a program into distinct tasks that can be executed independently on different processors." },
        { question: "What is Data Parallel Decomposition?", answer: "Data parallel decomposition focuses on partitioning the dataset and having each processor perform the same operation on its assigned chunk of data." },
        { question: "What is Load Balancing?", answer: "Load balancing refers to distributing work evenly among processors so that no single processor is overloaded while others remain idle, maximizing efficiency." },
        { question: "What is the MapReduce pattern?", answer: "MapReduce is a programming model where 'Map' processes and filters data in parallel, and 'Reduce' aggregates or combines the results." },
        { question: "What is the 'Divide and Conquer' pattern in parallel computing?", answer: "It recursively splits a problem into independent subproblems, solves them in parallel, and then merges the results." },
        { question: "Why is communication/synchronization needed in parallel programs?", answer: "Processes need to coordinate when they depend on shared data or results from other processors to ensure correct program execution." },
        { question: "What is a performance metric for parallel algorithms?", answer: "A key metric is 'Speedup', which indicates how much faster a parallel version is compared to the serial one." },
        { question: "What is 'Source of Overhead' in parallel programs?", answer: "Overhead includes time spent on communication, synchronization, and process creation, which can offset performance gains." },
        { question: "What is independent partitioning?", answer: "It is the technique of breaking a dataset into pieces that don't rely on each other, allowing parallel processing without frequent data communication." },
        { question: "How does parallel Merge Sort work?", answer: "The array is divided recursively, each sub-array is sorted in parallel by different processors, and then the results are merged." }
      ],
      mcqs: [
        { question: "Which decomposition technique partitions the dataset?", options: ["Task-based", "Data-parallel", "Sequential", "Process-based"], answer: "Data-parallel" },
        { question: "Even distribution of work among processors is:", options: ["Contention", "Load balancing", "Task decomposition", "Serializing"], answer: "Load balancing" },
        { question: "MapReduce pattern consists of:", options: ["Only Mapping", "Only Reducing", "Mapping followed by Reducing", "Sorting then Mapping"], answer: "Mapping followed by Reducing" },
        { question: "Overhead in parallel programs is often caused by:", options: ["Faster CPUs", "Communication and synchronization", "More RAM", "Compiler optimization"], answer: "Communication and synchronization" },
        { question: "Parallel Merge Sort utilizes which programming pattern?", options: ["Divide and Conquer", "MapReduce", "Data Parallel", "Linear Search"], answer: "Divide and Conquer" },
        { question: "Synchronizing tasks is necessary when:", options: ["Tasks are independent", "Tasks share data", "Processor count is one", "Memory is infinite"], answer: "Tasks share data" },
        { question: "Parallel algorithm models include:", options: ["Data parallel", "Task parallel", "Pipeline parallel", "All of the above"], answer: "All of the above" },
        { question: "What does Task-based decomposition primarily partition?", options: ["The data", "The operations/tasks", "The memory addresses", "The compiler"], answer: "The operations/tasks" },
        { question: "Why is performance metric calculation important?", options: ["To measure speedup and efficiency", "To increase code size", "To slow down execution", "To use more processors"], answer: "To measure speedup and efficiency" },
        { question: "What is essential for parallel graph algorithms?", options: ["Global state management", "Data partitioning", "Sequential traversal", "Minimal communication"], answer: "Data partitioning" }
      ]
    },
    {
      chapterNumber: 4,
      chapterName: "Introduction to Distributed Systems",
      vivaQuestions: [
        { question: "What is a Distributed System?", answer: "A distributed system is a collection of independent computers that appear to the users of the system as a single coherent system." },
        { question: "What is the primary goal of Distributed Systems?", answer: "Key goals include resource sharing, openness, concurrency, scalability, and fault tolerance." },
        { question: "What is the difference between parallel and distributed systems?", answer: "Parallel systems share a common clock and tight coupling, whereas distributed systems have independent clocks and loose coupling via networks." },
        { question: "What is synchronous execution?", answer: "Synchronous execution involves operations that happen in a coordinated manner, often waiting for confirmation, ensuring predictable order." },
        { question: "What is asynchronous execution?", answer: "Asynchronous execution allows processes to perform operations independently without waiting for the other party, increasing flexibility but complicating coordination." },
        { question: "What is middleware?", answer: "Middleware is a software layer that sits between the operating system and the distributed applications, hiding the complexity of heterogeneous hardware and networking." },
        { question: "What is a major design challenge in distributed systems?", answer: "Design challenges include handling partial failures, network latency, security, and global state consistency." },
        { question: "What are hardware/software concepts in distributed systems?", answer: "Hardware concepts include processors and networks; software concepts include processes, communication protocols, and distributed OS layers." },
        { question: "What are distributed system models?", answer: "Models include the Client-Server model, Peer-to-Peer model, and Message-Passing models." },
        { question: "Why is scalability important?", answer: "Scalability allows a system to handle increased load or expand easily without significantly degrading performance." }
      ],
      mcqs: [
        { question: "Which of these is a key goal of Distributed Systems?", options: ["Resource sharing", "Tight coupling", "Centralized control", "Hardware limitations"], answer: "Resource sharing" },
        { question: "How do distributed systems appear to users?", options: ["As a single coherent system", "As multiple isolated units", "As a mainframe only", "As a network of servers only"], answer: "As a single coherent system" },
        { question: "Unlike parallel systems, distributed systems have:", options: ["Global clocks", "Independent clocks", "No network", "Strict synchronization"], answer: "Independent clocks" },
        { question: "Which layer simplifies complexity in distributed applications?", options: ["Operating system", "Middleware", "Hardware", "Network"], answer: "Middleware" },
        { question: "What is a major design challenge?", options: ["Partial failures", "Scalability", "Latency", "All of the above"], answer: "All of the above" },
        { question: "Asynchronous execution allows processes to:", options: ["Wait for others", "Proceed independently", "Use a global clock", "Fail immediately"], answer: "Proceed independently" },
        { question: "Which model is common in distributed systems?", options: ["Client-Server", "Peer-to-Peer", "Message-Passing", "All of the above"], answer: "All of the above" },
        { question: "Scalability in distributed systems means:", options: ["Ability to handle increased load", "Fixing bugs easily", "Hard-coding paths", "Using faster CPU only"], answer: "Ability to handle increased load" },
        { question: "A distributed system is a collection of:", options: ["Centralized terminals", "Independent computers", "Monolithic units", "Virtual memory blocks"], answer: "Independent computers" },
        { question: "Partial failure in a distributed system refers to:", options: ["System-wide crash", "Failure of some parts while others continue", "Memory leak", "Disk error"], answer: "Failure of some parts while others continue" }
      ]
    },
    {
      chapterNumber: 5,
      chapterName: "Distributed Computing and Communication",
      vivaQuestions: [
        { question: "What is the global state of a distributed system?", answer: "The global state is the collection of the states of all individual processes and the channels (messages in transit) at a specific instant." },
        { question: "What is Message-Passing?", answer: "Message-passing is a communication model where processes exchange data by sending and receiving messages over the network." },
        { question: "What is consensus in distributed systems?", answer: "Consensus is the process where all participating processes agree on a single data value or decision, despite potential failures." },
        { question: "What is cache coherence in multiprocessors?", answer: "It ensures that all caches in a system with local caches for shared memory see the same data, maintaining consistency." },
        { question: "What is synchronization mechanism?", answer: "These are tools (e.g., semaphores, monitors, barriers) used to coordinate processes and enforce mutual exclusion or ordering." },
        { question: "What is critical path?", answer: "In distributed algorithms, a critical path is the sequence of dependent communication events that determines the minimum completion time." },
        { question: "What is consistency?", answer: "Consistency refers to the guarantee that all copies of shared data (e.g., in caches or replicas) are kept updated or synchronized." },
        { question: "What is atomicity?", answer: "Atomicity ensures that a sequence of operations either happens completely or not at all, maintaining system integrity during failures." },
        { question: "What are models of communication networks?", answer: "Models include broadcast networks, point-to-point networks, and various network topologies like ring, star, or mesh." },
        { question: "Why is shared memory complex in distributed systems?", answer: "Because maintaining a globally consistent view of shared memory across independent processors over a network incurs heavy latency and synchronization costs." }
      ],
      mcqs: [
        { question: "Which property ensures operations happen completely or not at all?", options: ["Consistency", "Atomicity", "Scalability", "Reliability"], answer: "Atomicity" },
        { question: "Which mechanism ensures all processes agree on a value?", options: ["Consensus", "Segmentation", "Mapping", "Pipelining"], answer: "Consensus" },
        { question: "Message-Passing is a:", options: ["Shared memory model", "Communication model", "Hardware design", "Sorting algorithm"], answer: "Communication model" },
        { question: "Cache coherence maintains:", options: ["Data consistency", "Network speed", "CPU clock", "Memory size"], answer: "Data consistency" },
        { question: "The critical path determines:", options: ["Minimum completion time", "Memory usage", "Node count", "Compiler efficiency"], answer: "Minimum completion time" },
        { question: "The global state includes:", options: ["Process states and message channels", "Local variables only", "Hard disk files", "CPU registers"], answer: "Process states and message channels" },
        { question: "Synchronization mechanisms include:", options: ["Semaphores and Barriers", "Arrays", "Hash tables", "Network cables"], answer: "Semaphores and Barriers" },
        { question: "Point-to-point networks are a type of:", options: ["Communication model", "Sort model", "Local model", "Virtual model"], answer: "Communication model" },
        { question: "In shared memory, what is hard to achieve?", options: ["Fast access", "Global consistency", "Memory allocation", "Data storage"], answer: "Global consistency" },
        { question: "A shared memory model requires:", options: ["No synchronization", "Strong synchronization mechanisms", "Message passing only", "Disks"], answer: "Strong synchronization mechanisms" }
      ]
    },
    {
      chapterNumber: 6,
      chapterName: "Parallel and Distributed Programming Frameworks",
      vivaQuestions: [
        { question: "What is CUDA?", answer: "CUDA (Compute Unified Device Architecture) is a parallel computing platform and API model created by NVIDIA to allow general-purpose computing on GPUs." },
        { question: "What is OpenMP?", answer: "OpenMP (Open Multi-Processing) is an API that supports multi-platform shared memory multiprocessing programming in C, C++, and Fortran." },
        { question: "What are POSIX Threads (Pthreads)?", answer: "Pthreads is an execution model that provides a standardized set of C language programming types and procedure calls for multithreaded programming." },
        { question: "What is Apache Hadoop (DFS)?", answer: "Hadoop is a framework for distributed storage (HDFS) and distributed processing (MapReduce) of massive datasets across clusters of computers." },
        { question: "What is current trend in parallel/distributed computing?", answer: "Trends include edge computing, serverless computing, and the integration of AI/ML workloads into distributed frameworks like Spark." },
        { question: "What is the role of MPI?", answer: "MPI (Message Passing Interface) is a standardized, portable message-passing interface designed to function on parallel computing architectures." },
        { question: "How does OpenMP implement parallelism?", answer: "OpenMP uses compiler directives (pragmas) to spawn threads that execute parallel blocks within a shared memory program." },
        { question: "What does HDFS stand for?", answer: "HDFS stands for Hadoop Distributed File System." },
        { question: "What does Apache Spark provide?", answer: "Spark provides a fast, general-purpose engine for large-scale data processing, often faster than MapReduce due to in-memory processing." },
        { question: "Why is POSIX threads considered a low-level framework?", answer: "Because it gives programmers direct control over thread creation, synchronization (mutexes, semaphores), and memory management, requiring careful handling to avoid bugs." }
      ],
      mcqs: [
        { question: "CUDA is primarily designed for programming:", options: ["CPUs", "GPUs", "Hard disks", "Network switches"], answer: "GPUs" },
        { question: "OpenMP uses which mechanism for parallelism?", options: ["Message passing", "Compiler directives/pragmas", "Binary logic", "Disk files"], answer: "Compiler directives/pragmas" },
        { question: "Which framework is used for distributed storage and processing of big data?", options: ["Apache Hadoop", "POSIX", "CUDA", "OpenMP"], answer: "Apache Hadoop" },
        { question: "MPI stands for:", options: ["Message Passing Interface", "Multiprocessor Parallel Interface", "Memory Processing Interface", "Memory Pointers Interface"], answer: "Message Passing Interface" },
        { question: "Pthreads provides support for:", options: ["Distributed storage", "Multithreaded programming", "GPU computing", "HTML parsing"], answer: "Multithreaded programming" },
        { question: "Apache Spark is known for:", options: ["In-memory processing", "Slow performance", "Only disk storage", "Sequential logic"], answer: "In-memory processing" },
        { question: "Which is a shared memory programming framework?", options: ["MPI", "OpenMP", "Hadoop", "Spark"], answer: "OpenMP" },
        { question: "What does HDFS manage?", options: ["CPU registers", "Distributed file storage", "Operating system kernels", "Network packets"], answer: "Distributed file storage" },
        { question: "CUDA was created by:", options: ["Intel", "NVIDIA", "AMD", "Google"], answer: "NVIDIA" },
        { question: "Which framework offers manual control over thread synchronization?", options: ["POSIX Threads", "Hadoop", "Spark", "None"], answer: "POSIX Threads" }
      ]
    }
  ]
};
