export const distributedSystemVivaData = [
  {
    chapterTitle: "Fundamentals of Distributed Systems",
    vivaQuestions: [
      {
        question: "What is a Distributed System?",
        answer: "Yes, a distributed system is a collection of independent computers that appear to the users of the system as a single coherent system[span_0](start_span)[span_0](end_span). These components communicate and coordinate their actions by passing messages to one another to achieve a common goal[span_1](start_span)[span_1](end_span)."
      },
      {
        question: "What are the three significant characteristics of a Distributed System?",
        answer: "Sir, the three significant characteristics are the concurrency of components, the lack of a global clock, and the independent failure of components[span_2](start_span)[span_2](end_span)."
      },
      {
        question: "What are the main goals of a Distributed System?",
        answer: "Sir, the primary goals include making resources easily accessible, hiding the fact that resources are distributed, ensuring openness, and providing scalability[span_3](start_span)[span_3](end_span)."
      },
      {
        question: "What is the primary difference between a Distributed System and a Centralized System?",
        answer: "Sir, in a centralized system, all processing happens on a single machine, creating a single point of failure. In a distributed system, tasks are spread across multiple networked computers, improving reliability and performance[span_4](start_span)[span_4](end_span)."
      },
      {
        question: "What is the role of networking in a Distributed System?",
        answer: "Sir, networking is essential because it provides the communication infrastructure that allows the distributed components to pass messages and coordinate their actions[span_5](start_span)[span_5](end_span)."
      },
      {
        question: "Why is 'concurrency' a characteristic of Distributed Systems?",
        answer: "Sir, it is because multiple autonomous components operate simultaneously on different computers, meaning multiple tasks are being performed at the same time across the network[span_6](start_span)[span_6](end_span)."
      },
      {
        question: "What does 'independent failure' mean?",
        answer: "Yes, it means that one computer or component can fail without necessarily causing the entire system to stop working, which enhances the fault tolerance of the system[span_7](start_span)[span_7](end_span)."
      },
      {
        question: "How is 'lack of a global clock' a challenge?",
        answer: "Sir, since there is no central clock, it is difficult to determine the exact order of events occurring on different machines, which makes synchronization a complex task[span_8](start_span)[span_8](end_span)."
      },
      {
        question: "Can you name a common type of distributed system?",
        answer: "Yes sir, types include distributed computing systems, distributed information systems, and distributed pervasive systems[span_9](start_span)[span_9](end_span)."
      },
      {
        question: "What is the importance of 'transparency' in Distributed Systems?",
        answer: "Sir, transparency is important because it allows users and applications to interact with the system without needing to know or manage the complexities of how the resources are distributed across the network[span_10](start_span)[span_10](end_span)."
      },
      {
        question: "What is an Operating System's role in Distributed Systems?",
        answer: "Sir, the OS manages the local resources and communication protocols that enable the distributed software to function efficiently[span_11](start_span)[span_11](end_span)."
      },
      {
        question: "What is an 'open' distributed system?",
        answer: "Sir, an open system is one that offers services according to standard rules that describe the syntax and semantics of those services, allowing for interoperability between different components[span_12](start_span)[span_12](end_span)."
      },
      {
        question: "What is Scalability in Distributed Systems?",
        answer: "Sir, scalability refers to the ability of the system to remain effective even as the number of users or the amount of resources increases significantly[span_13](start_span)[span_13](end_span)."
      },
      {
        question: "What is a Distributed Information System?",
        answer: "Sir, this type of system is primarily used for transaction processing, where databases are distributed across multiple nodes to manage corporate or user information[span_14](start_span)[span_14](end_span)."
      },
      {
        question: "What is a Distributed Pervasive System?",
        answer: "Sir, these are distributed systems that consist of small, battery-powered devices often embedded in the environment, like sensor networks[span_15](start_span)[span_15](end_span)."
      },
      {
        question: "How do components coordinate in a Distributed System?",
        answer: "Sir, they coordinate their actions primarily by passing messages to one another over the network[span_16](start_span)[span_16](end_span)."
      },
      {
        question: "Why is resource sharing a goal?",
        answer: "Sir, resource sharing is a goal because it allows users to access remote hardware, software, or data, which makes the system more efficient and cost-effective[span_17](start_span)[span_17](end_span)."
      },
      {
        question: "What is a 'Distributed Computing System'?",
        answer: "Sir, this is a system where the computers are used to perform high-performance tasks, often by splitting a large computational problem into smaller parts and distributing them across the cluster[span_18](start_span)[span_18](end_span)."
      },
      {
        question: "Does a Distributed System have a shared memory?",
        answer: "Sir, generally no. Each component has its own local memory, and they communicate via message passing[span_19](start_span)[span_19](end_span)."
      },
      {
        question: "Why is coherence a goal?",
        answer: "Sir, coherence ensures that the system behaves as a single unit, hiding the underlying complexity from the end user[span_20](start_span)[span_20](end_span)."
      }
    ],
    mcqs: [
      { question: "Which of the following is a characteristic of Distributed Systems?", options: ["Centralized clock", "Concurrency of components", "Shared memory", "Fixed number of nodes"], correctAnswer: "Concurrency of components" },
      { question: "How do components in a Distributed System communicate?", options: ["By shared memory", "By passing messages", "By direct hardware control", "They do not communicate"], correctAnswer: "By passing messages" },
      { question: "What is a key benefit of Distributed Systems?", options: ["Single point of failure", "Easy debugging", "Fault tolerance", "Centralized control"], correctAnswer: "Fault tolerance" },
      { question: "Which of these is NOT a characteristic mentioned in the syllabus?", options: ["Concurrency", "Lack of a global clock", "Independent failure", "Synchronous clock"], correctAnswer: "Synchronous clock" },
      { question: "What does transparency aim to hide from the user?", options: ["The user interface", "Distribution of resources", "The operating system", "The hardware type"], correctAnswer: "Distribution of resources" },
      { question: "A system where all components are on different computers and work toward a common goal is called a:", options: ["Single-user system", "Distributed system", "Mainframe", "Embedded system"], correctAnswer: "Distributed system" },
      { question: "Which of the following is a type of Distributed System?", options: ["Distributed pervasive system", "Isolated system", "Single-core system", "Local-only system"], correctAnswer: "Distributed pervasive system" },
      { question: "What is a primary challenge in Distributed Systems?", options: ["Lack of a global clock", "Excessive memory", "Fast network speed", "Centralized databases"], correctAnswer: "Lack of a global clock" },
      { question: "The goal of 'openness' in a Distributed System relates to:", options: ["Data security", "Standardized rules for interoperability", "Hardware cost", "Screen brightness"], correctAnswer: "Standardized rules for interoperability" },
      { question: "What happens if one computer fails in a Distributed System?", options: ["The whole system crashes", "The system continues to function", "The internet stops", "Hardware resets"], correctAnswer: "The system continues to function" },
      { question: "Which system is often used for transaction processing?", options: ["Distributed information system", "Simple calculator", "Single laptop", "Gaming console"], correctAnswer: "Distributed information system" },
      { question: "Scalability means the system handles:", options: ["Only a fixed number of users", "Increases in users and resources", "Only local requests", "Hardware failure"], correctAnswer: "Increases in users and resources" },
      { question: "What is the role of the common goal in a Distributed System?", options: ["To confuse users", "To coordinate component actions", "To slow down the network", "To reduce RAM"], correctAnswer: "To coordinate component actions" },
      { question: "What is the primary function of message passing?", options: ["Resource locking", "Communication and coordination", "Memory cleanup", "Display management"], correctAnswer: "Communication and coordination" },
      { question: "A sensor network is an example of a:", options: ["Distributed pervasive system", "Mainframe", "Standalone workstation", "Cloud storage only"], correctAnswer: "Distributed pervasive system" },
      { question: "Which characteristic implies that events are difficult to order?", options: ["Concurrency", "Lack of a global clock", "Scalability", "Transparency"], correctAnswer: "Lack of a global clock" },
      { question: "Distributed systems are designed to appear as:", options: ["Multiple independent units", "A single coherent system", "A broken network", "A centralized mainframe"], correctAnswer: "A single coherent system" },
      { question: "What does 'independent failure' mean for system reliability?", options: ["Reliability decreases", "Reliability increases", "System stops working", "Hardware is replaced"], correctAnswer: "Reliability increases" },
      { question: "Which of the following is a fundamental aspect of distributed systems?", options: ["Self-management", "Local computing", "Single-threaded execution", "Hardware rigidity"], correctAnswer: "Self-management" },
      { question: "What is the fundamental unit of interaction in distributed systems?", options: ["Local procedure call", "Message passing", "Hardware bus", "Shared register"], correctAnswer: "Message passing" }
    ]
  },
  {
    chapterTitle: "Architectures, Processes, and Communication",
    vivaQuestions: [
      {
        question: "What are the common types of Distributed System architectures?",
        answer: "Sir, common types include layered architectures, object-based architectures, data-centered architectures, and event-based architectures[span_21](start_span)[span_21](end_span)."
      },
      {
        question: "What is 'Self-management' in Distributed Systems?",
        answer: "Sir, self-management refers to the system's ability to configure, manage, and heal itself automatically, which is crucial given the complexity and size of distributed environments[span_22](start_span)[span_22](end_span)."
      },
      {
        question: "What is a thread in Distributed Systems?",
        answer: "Sir, a thread is a basic unit of CPU utilization that allows a process to perform multiple tasks concurrently, improving the responsiveness and throughput of the system[span_23](start_span)[span_23](end_span)."
      },
      {
        question: "What is virtualization in this context?",
        answer: "Sir, virtualization involves creating a virtual instance of a physical machine, which allows multiple processes or even operating systems to run independently on a single piece of hardware[span_24](start_span)[span_24](end_span)."
      },
      {
        question: "What is the role of the Client and Server in Distributed Systems?",
        answer: "Sir, the client typically initiates a request for a service, and the server receives the request, performs the computation, and returns the result to the client[span_25](start_span)[span_25](end_span)."
      },
      {
        question: "What is code migration?",
        answer: "Sir, code migration is the process of moving an application or a process from one computer to another, usually to balance the load or to be closer to the data being processed[span_26](start_span)[span_26](end_span)."
      },
      {
        question: "What is an RPC (Remote Procedure Call)?",
        answer: "Sir, RPC is a technique that allows a program to execute a procedure on a remote server as if it were a local function call, hiding the network details from the programmer[span_27](start_span)[span_27](end_span)."
      },
      {
        question: "What is Message-Oriented Communication?",
        answer: "Sir, it is a communication style where applications exchange data via messages placed in queues, ensuring that communication is asynchronous and the sender does not need to wait for the receiver[span_28](start_span)[span_28](end_span)."
      },
      {
        question: "What is Stream-Oriented Communication?",
        answer: "Sir, this type of communication is used for data that requires timely delivery, such as audio or video, where the continuous flow of data is more important than small losses[span_29](start_span)[span_29](end_span)."
      },
      {
        question: "What is Multicasting?",
        answer: "Sir, multicasting is a communication mechanism that sends a message from one sender to a specific group of receivers, rather than to everyone or just one individual[span_30](start_span)[span_30](end_span)."
      },
      {
        question: "What are the main types of communication in Distributed Systems?",
        answer: "Sir, the main types include synchronous and asynchronous, as well as message-oriented and stream-oriented communications[span_31](start_span)[span_31](end_span)."
      },
      {
        question: "Why do we use Threads?",
        answer: "Sir, we use threads to allow a single process to handle multiple requests at once, which increases the concurrency and performance of the application[span_32](start_span)[span_32](end_span)."
      },
      {
        question: "What is the benefit of virtualizing a server?",
        answer: "Sir, it improves resource utilization because multiple virtual servers can share the same physical hardware, making the system easier to manage and scale[span_33](start_span)[span_33](end_span)."
      },
      {
        question: "How does RPC hide network complexity?",
        answer: "Sir, it uses stubs (client stub and server stub) that marshal and unmarshal parameters, making the remote call appear like a standard local call to the developer[span_34](start_span)[span_34](end_span)."
      },
      {
        question: "What is the advantage of message-oriented communication?",
        answer: "Sir, the main advantage is loose coupling; the sender and receiver do not need to be active at the same time, which increases system reliability[span_35](start_span)[span_35](end_span)."
      },
      {
        question: "What is the primary characteristic of stream-oriented communication?",
        answer: "Sir, it focuses on the timing of data delivery, which is essential for multimedia applications like real-time streaming[span_36](start_span)[span_36](end_span)."
      },
      {
        question: "What does 'self-management' include?",
        answer: "Sir, it includes features like self-configuration, self-optimization, and self-healing when components fail[span_37](start_span)[span_37](end_span)."
      },
      {
        question: "What is an object-based architecture?",
        answer: "Sir, it is an architecture where components are modeled as objects, and communication occurs through method invocations on these objects[span_38](start_span)[span_38](end_span)."
      },
      {
        question: "Why use code migration?",
        answer: "Sir, code migration is used to decrease communication costs or to balance the load of the system dynamically[span_39](start_span)[span_39](end_span)."
      },
      {
        question: "How is multicasting different from broadcasting?",
        answer: "Sir, broadcasting sends data to everyone on the network, while multicasting specifically sends data to a pre-defined subset or group of receivers[span_40](start_span)[span_40](end_span)."
      }
    ],
    mcqs: [
      { question: "Which architecture type focuses on the method invocation of entities?", options: ["Layered", "Object-based", "Data-centered", "Event-based"], correctAnswer: "Object-based" },
      { question: "What is the purpose of threads in processes?", options: ["To delete memory", "To perform concurrent tasks", "To stop the system", "To increase network latency"], correctAnswer: "To perform concurrent tasks" },
      { question: "What does RPC stand for?", options: ["Remote Process Controller", "Remote Procedure Call", "Rapid Programming Code", "Request Procedure Call"], correctAnswer: "Remote Procedure Call" },
      { question: "Which communication type is suited for audio/video data?", options: ["Message-oriented", "Stream-oriented", "RPC", "Multicasting"], correctAnswer: "Stream-oriented" },
      { question: "What is the benefit of code migration?", options: ["Load balancing", "System failure", "Hardware destruction", "Data loss"], correctAnswer: "Load balancing" },
      { question: "What is a major advantage of Message-Oriented Communication?", options: ["Strict synchronicity", "Loose coupling", "Higher hardware cost", "Direct memory access"], correctAnswer: "Loose coupling" },
      { question: "Self-management includes which capability?", options: ["Self-healing", "Manual configuration", "Human monitoring", "Forced shutdown"], correctAnswer: "Self-healing" },
      { question: "What does a client do in a distributed system?", options: ["Initiates requests", "Processes services", "Stores all data", "Manages the network"], correctAnswer: "Initiates requests" },
      { question: "Which mechanism sends data to a specific group?", options: ["Broadcasting", "Multicasting", "Unicasting", "Static routing"], correctAnswer: "Multicasting" },
      { question: "What is the role of stubs in RPC?", options: ["To crash the system", "To marshal/unmarshal parameters", "To increase power consumption", "To encrypt the hardware"], correctAnswer: "To marshal/unmarshal parameters" },
      { question: "Virtualization allows running multiple _____ on one machine.", options: ["Operating Systems", "Network cables", "Power supplies", "Keyboards"], correctAnswer: "Operating Systems" },
      { question: "What is a layered architecture?", options: ["Components organized in layers", "A single flat file", "Random component placement", "Hardwired circuits"], correctAnswer: "Components organized in layers" },
      { question: "What does asynchronous communication mean?", options: ["Sender waits for receiver", "Sender does not wait", "Direct hardware connection", "Broken network"], correctAnswer: "Sender does not wait" },
      { question: "What is a server in distributed systems?", options: ["Receives and processes requests", "Initiates all tasks", "Only stores files", "Disconnected machine"], correctAnswer: "Receives and processes requests" },
      { question: "Which architecture is based on data sharing?", options: ["Data-centered", "Layered", "Object-based", "Self-managed"], correctAnswer: "Data-centered" },
      { question: "What is the main goal of thread programming?", options: ["Concurrent execution", "Serial execution", "Data deletion", "Hardware cooling"], correctAnswer: "Concurrent execution" },
      { question: "Why is stream-oriented communication time-sensitive?", options: ["To avoid network jams", "Because it is for real-time media", "To decrease latency", "Because it is cheaper"], correctAnswer: "Because it is for real-time media" },
      { question: "What is the primary function of a client-server model?", options: ["Service provision", "Data destruction", "User interface design", "Hardware manufacturing"], correctAnswer: "Service provision" },
      { question: "What does self-configuration imply?", options: ["The system configures itself", "Manual setup", "Constant hardware resets", "Disconnected components"], correctAnswer: "The system configures itself" },
      { question: "Which architecture is driven by notifications?", options: ["Event-based", "Layered", "Data-centered", "Object-based"], correctAnswer: "Event-based" }
    ]
  },
  {
    chapterTitle: "Naming",
    vivaQuestions: [
      {
        question: "What is the difference between Names, Identifiers, and Addresses?",
        answer: "Sir, a name is a human-friendly string used to refer to an entity; an identifier is a machine-readable string that refers to a single entity and never changes; and an address is a value that indicates the location of an entity in the network[span_41](start_span)[span_41](end_span)."
      },
      {
        question: "What is Flat Naming?",
        answer: "Sir, flat naming is a scheme where the name of an entity is a random string, meaning it contains no information about the entity's location or structure[span_42](start_span)[span_42](end_span)."
      },
      {
        question: "What is Structured Naming?",
        answer: "Sir, structured naming uses hierarchical names, like DNS or file paths, which help to organize the naming space and make it easier to manage[span_43](start_span)[span_43](end_span)."
      },
      {
        question: "What is Attribute-Based Naming?",
        answer: "Sir, this approach identifies an entity by a set of its attributes (e.g., 'a printer on the 4th floor'), and the system searches for entities that match these criteria[span_44](start_span)[span_44](end_span)."
      },
      {
        question: "Why are identifiers important?",
        answer: "Sir, identifiers are unique and immutable; they are crucial because they never change even if the entity's location or name changes, ensuring the entity can always be referenced correctly[span_45](start_span)[span_45](end_span)."
      },
      {
        question: "What is the role of an address in Naming?",
        answer: "Sir, an address allows the system to access the entity. While a name refers to an entity, the address tells you where that entity is currently located in the network[span_46](start_span)[span_46](end_span)."
      },
      {
        question: "What is a name space?",
        answer: "Sir, a name space is the set of all valid names within a naming system, which can be organized in various ways depending on the naming scheme[span_47](start_span)[span_47](end_span)."
      },
      {
        question: "How does structured naming improve scalability?",
        answer: "Sir, because structured names are hierarchical, we can distribute the management of the name space across different servers, which makes it much more scalable[span_48](start_span)[span_48](end_span)."
      },
      {
        question: "What is a disadvantage of flat naming?",
        answer: "Sir, the main disadvantage is that flat names contain no location information, which makes it very hard to locate the entity efficiently in a large network[span_49](start_span)[span_49](end_span)."
      },
      {
        question: "Why use attribute-based naming?",
        answer: "Sir, it is very flexible and user-friendly, as users can search for services by describing them rather than knowing their exact location or hierarchical name[span_50](start_span)[span_50](end_span)."
      },
      {
        question: "What is an example of structured naming?",
        answer: "Sir, the Domain Name System (DNS) is the most common example, where names are structured like 'mail.google.com[span_51](start_span)'[span_51](end_span)."
      },
      {
        question: "Can an entity have multiple addresses?",
        answer: "Yes sir, an entity can move or have multiple interfaces, so it can be associated with different addresses at different times or simultaneously[span_52](start_span)[span_52](end_span)."
      },
      {
        question: "What is the primary requirement for an identifier?",
        answer: "Sir, the identifier must be unique to a single entity and remain the same for the entire life of the entity[span_53](start_span)[span_53](end_span)."
      },
      {
        question: "What is the advantage of flat naming?",
        answer: "Sir, the advantage is that the name is completely independent of the entity's location, so the entity can move anywhere without changing its name[span_54](start_span)[span_54](end_span)."
      },
      {
        question: "How does the system resolve a name to an address?",
        answer: "Sir, the system uses a name resolution service that looks up the name in its database and returns the current address associated with that name[span_55](start_span)[span_55](end_span)."
      },
      {
        question: "What is a distributed naming service?",
        answer: "Sir, it is a service that is itself distributed across multiple computers to handle name lookups efficiently for a global network[span_56](start_span)[span_56](end_span)."
      },
      {
        question: "What is the difference between an entity and a name?",
        answer: "Sir, an entity is the physical or logical object itself, while the name is just a reference used to identify it[span_57](start_span)[span_57](end_span)."
      },
      {
        question: "How is hierarchical naming organized?",
        answer: "Sir, it is organized into a tree-like structure where names are built by combining components from the root down to the entity[span_58](start_span)[span_58](end_span)."
      },
      {
        question: "Why do we need different naming schemes?",
        answer: "Sir, we need different schemes to balance the needs for user-friendliness, machine-readability, and ease of locating entities[span_59](start_span)[span_59](end_span)."
      },
      {
        question: "Is an identifier the same as a name?",
        answer: "Sir, no. A name is user-friendly but might change, whereas an identifier is machine-readable and must never change[span_60](start_span)[span_60](end_span)."
      }
    ],
    mcqs: [
      { question: "What is a machine-readable string that refers to a single entity and never changes?", options: ["Name", "Identifier", "Address", "Password"], correctAnswer: "Identifier" },
      { question: "Which naming scheme uses hierarchical names like DNS?", options: ["Flat Naming", "Structured Naming", "Attribute-Based Naming", "Local Naming"], correctAnswer: "Structured Naming" },
      { question: "What identifies an entity by its properties?", options: ["Flat Naming", "Attribute-Based Naming", "Address Lookup", "Hard coding"], correctAnswer: "Attribute-Based Naming" },
      { question: "What indicates the location of an entity?", options: ["Name", "Identifier", "Address", "Filename"], correctAnswer: "Address" },
      { question: "Which naming scheme is independent of location but hard to look up?", options: ["Flat Naming", "Structured Naming", "Attribute-Based Naming", "Hierarchical Naming"], correctAnswer: "Flat Naming" },
      { question: "What is a user-friendly reference to an entity?", options: ["Name", "Address", "Identifier", "Hashcode"], correctAnswer: "Name" },
      { question: "Why is structured naming better for scalability?", options: ["It uses flat files", "It can be distributed hierarchically", "It is shorter", "It does not need servers"], correctAnswer: "It can be distributed hierarchically" },
      { question: "What is the primary requirement of an identifier?", options: ["Uniqueness and immutability", "Human readability", "Location-awareness", "Length"], correctAnswer: "Uniqueness and immutability" },
      { question: "Which naming approach is most flexible for searching services?", options: ["Flat Naming", "Attribute-Based Naming", "Structured Naming", "Literal Naming"], correctAnswer: "Attribute-Based Naming" },
      { question: "DNS is an example of:", options: ["Flat Naming", "Structured Naming", "Attribute-Based Naming", "Address-only Naming"], correctAnswer: "Structured Naming" },
      { question: "Can an entity have multiple addresses?", options: ["Yes", "No", "Only if it is local", "Only in flat naming"], correctAnswer: "Yes" },
      { question: "What is a name space?", options: ["The set of all valid names", "A physical location", "A memory address", "A server port"], correctAnswer: "The set of all valid names" },
      { question: "Which name is most likely to change?", options: ["Name", "Identifier", "MAC address", "Hardware ID"], correctAnswer: "Name" },
      { question: "What is the purpose of name resolution?", options: ["To find an address from a name", "To delete files", "To encrypt data", "To restart the server"], correctAnswer: "To find an address from a name" },
      { question: "Is a name the same as an entity?", options: ["Yes", "No, the name is just a reference", "Only in flat naming", "Only in local systems"], correctAnswer: "No, the name is just a reference" },
      { question: "How is hierarchical naming organized?", options: ["As a tree", "As a list", "As a random string", "As a single file"], correctAnswer: "As a tree" },
      { question: "Which type of name contains no location information?", options: ["Structured Name", "Flat Name", "Attribute Name", "Path Name"], correctAnswer: "Flat Name" },
      { question: "Why are identifiers immutable?", options: ["To ensure consistent entity references", "To save memory", "To speed up network", "To look better"], correctAnswer: "To ensure consistent entity references" },
      { question: "Which attribute could be used for naming a printer?", options: ["Location", "Name", "ID", "Manufacturer"], correctAnswer: "Location" },
      { question: "The address indicates what?", options: ["The entity's current location", "The entity's name", "The entity's owner", "The entity's size"], correctAnswer: "The entity's current location" }
    ]
  },
  {
    chapterTitle: "Synchronization",
    vivaQuestions: [
      {
        question: "What is Clock Synchronization?",
        answer: "Sir, it is the process of ensuring that all the independent clocks in a distributed system show the same time, which is difficult because each clock has a slightly different drift rate[span_61](start_span)[span_61](end_span)."
      },
      {
        question: "What are Logical Clocks?",
        answer: "Sir, logical clocks provide a way to order events based on causal relationships (happened-before) rather than physical time, because physical time cannot be perfectly synchronized[span_62](start_span)[span_62](end_span)."
      },
      {
        question: "What is Mutual Exclusion in Distributed Systems?",
        answer: "Sir, it is a mechanism that ensures only one process can access a shared resource at a time, preventing conflicts and data corruption[span_63](start_span)[span_63](end_span)."
      },
      {
        question: "What are Election Algorithms?",
        answer: "Sir, election algorithms are used to select one unique process from a group to act as the coordinator, which is necessary when the system needs a central decision-maker[span_64](start_span)[span_64](end_span)."
      },
      {
        question: "What is the 'happened-before' relation?",
        answer: "Sir, it is a partial ordering of events that states if event A occurs before event B in the same process, or if A sends a message that B receives, then A happens before B[span_65](start_span)[span_65](end_span)."
      },
      {
        question: "What is Lamport's Logical Clock?",
        answer: "Sir, it is a simple algorithm where each process maintains a counter. It increments the counter for local events and updates it based on timestamps received in messages to maintain the 'happened-before' ordering[span_66](start_span)[span_66](end_span)."
      },
      {
        question: "Why do we need Global Positioning of Nodes?",
        answer: "Sir, in systems like GPS-based networks, knowing the exact physical coordinates of a node is essential for certain applications and services[span_67](start_span)[span_67](end_span)."
      },
      {
        question: "What is the Bully Algorithm?",
        answer: "Sir, it is a classic election algorithm where the process with the highest process ID 'bullies' others and declares itself the coordinator[span_68](start_span)[span_68](end_span)."
      },
      {
        question: "What is the Ring Algorithm?",
        answer: "Sir, it is an election algorithm where processes are arranged in a logical ring, and the process with the highest ID is elected as the coordinator[span_69](start_span)[span_69](end_span)."
      },
      {
        question: "What is a physical clock drift?",
        answer: "Sir, it is the phenomenon where a physical clock gradually deviates from the true time, causing it to run slightly faster or slower than other clocks[span_70](start_span)[span_70](end_span)."
      },
      {
        question: "Why is mutual exclusion harder in distributed systems?",
        answer: "Sir, because there is no central memory or shared bus; everything must be coordinated by passing messages over a network, which introduces delays and failures[span_71](start_span)[span_71](end_span)."
      },
      {
        question: "What is a coordinator?",
        answer: "Sir, it is a process that is assigned special duties like managing resources or coordinating others in a distributed system[span_72](start_span)[span_72](end_span)."
      },
      {
        question: "How do logical clocks help ordering?",
        answer: "Sir, they provide a sequence number that captures the causality between events, ensuring that if A causes B, A's timestamp is smaller than B's[span_73](start_span)[span_73](end_span)."
      },
      {
        question: "Can physical clocks ever be identical?",
        answer: "Sir, no, due to hardware differences and drift rates, they will always differ slightly, which is why we must constantly resynchronize them[span_74](start_span)[span_74](end_span)."
      },
      {
        question: "What is the main goal of election algorithms?",
        answer: "Sir, the goal is to make sure every process agrees on who the coordinator is, especially after the previous coordinator fails[span_75](start_span)[span_75](end_span)."
      },
      {
        question: "How does message delay affect clock synchronization?",
        answer: "Sir, unpredictable message delays make it hard to measure exactly how much one clock lags behind another, leading to synchronization errors[span_76](start_span)[span_76](end_span)."
      },
      {
        question: "What is a central coordinator?",
        answer: "Sir, it's a process that has the authority to grant permissions or perform tasks for the group, like a lock manager[span_77](start_span)[span_77](end_span)."
      },
      {
        question: "What happens if the coordinator fails?",
        answer: "Sir, the remaining processes must detect the failure and initiate an election algorithm to choose a new coordinator[span_78](start_span)[span_78](end_span)."
      },
      {
        question: "Are logical clocks dependent on physical clocks?",
        answer: "Sir, no, they are independent. They only care about the relative causal order of events, not the actual time of day[span_79](start_span)[span_79](end_span)."
      },
      {
        question: "What is the 'Happened-Before' rule?",
        answer: "Sir, it is the fundamental rule for ordering events causally, allowing us to build consistent logical time in a system without a shared clock[span_80](start_span)[span_80](end_span)."
      }
    ],
    mcqs: [
      { question: "What is the process of keeping clocks in sync?", options: ["Clock synchronization", "Resource locking", "Message deletion", "Process migration"], correctAnswer: "Clock synchronization" },
      { question: "What do logical clocks order?", options: ["Physical time", "Causal relationships", "Network speed", "File size"], correctAnswer: "Causal relationships" },
      { question: "Which algorithm ensures only one process accesses a resource?", options: ["Mutual exclusion", "Election algorithm", "Logical clock", "Clock drift"], correctAnswer: "Mutual exclusion" },
      { question: "What is the purpose of election algorithms?", options: ["To delete files", "To pick a coordinator", "To sync time", "To migrate code"], correctAnswer: "To pick a coordinator" },
      { question: "Who proposed the logical clock algorithm?", options: ["Lamport", "Tanenbaum", "Sinha", "Lynch"], correctAnswer: "Lamport" },
      { question: "In the Bully algorithm, who becomes the coordinator?", options: ["The one with lowest ID", "The one with highest ID", "The one chosen randomly", "The one with longest name"], correctAnswer: "The one with highest ID" },
      { question: "Why do physical clocks drift?", options: ["Software bugs", "Hardware variations", "Network lag", "Power failure"], correctAnswer: "Hardware variations" },
      { question: "What relation does Lamport's clock preserve?", options: ["Happened-before", "Physical time", "Hardware speed", "Memory usage"], correctAnswer: "Happened-before" },
      { question: "What arrangement does the Ring algorithm use?", options: ["Star", "Ring", "Mesh", "Tree"], correctAnswer: "Ring" },
      { question: "What happens if a coordinator fails?", options: ["Election algorithm is started", "System shuts down", "Nothing happens", "All processes reset"], correctAnswer: "Election algorithm is started" },
      { question: "Are logical clocks the same as physical clocks?", options: ["Yes", "No", "Only on Sundays", "Only in LANs"], correctAnswer: "No" },
      { question: "What does mutual exclusion prevent?", options: ["Resource conflict", "Network lag", "Clock drift", "File deletion"], correctAnswer: "Resource conflict" },
      { question: "What is the primary duty of a coordinator?", options: ["Resource management", "Clock display", "Hard drive formatting", "Screen capture"], correctAnswer: "Resource management" },
      { question: "Why is synchronization difficult in distributed systems?", options: ["Message delays", "Too much RAM", "Fast CPU", "Bright monitor"], correctAnswer: "Message delays" },
      { question: "What is a drift rate?", options: ["The rate at which a clock deviates", "The network speed", "The file size", "The CPU temperature"], correctAnswer: "The rate at which a clock deviates" },
      { question: "What if two processes try to access a resource simultaneously?", options: ["Mutual exclusion prevents it", "System crashes", "Data is doubled", "Both succeed"], correctAnswer: "Mutual exclusion prevents it" },
      { question: "Does logical time require a battery?", options: ["Yes", "No", "Only for servers", "Only for clients"], correctAnswer: "No" },
      { question: "Which algorithm is 'bully'?", options: ["Bully Algorithm", "Ring Algorithm", "Logical Clock", "NFS"], correctAnswer: "Bully Algorithm" },
      { question: "What is the 'happened-before' rule based on?", options: ["Causality", "Physical wall time", "Memory location", "User ID"], correctAnswer: "Causality" },
      { question: "Is physical clock synchronization perfect?", options: ["Yes", "No", "Only in theory", "Only in cloud"], correctAnswer: "No" }
    ]
  },
  {
    chapterTitle: "Consistency, Replication and Fault Tolerance",
    vivaQuestions: [
      {
        question: "What is Replication in Distributed Systems?",
        answer: "Sir, replication is the process of storing copies of data on multiple servers to improve accessibility, increase performance, and provide fault tolerance[span_81](start_span)[span_81](end_span)."
      },
      {
        question: "What are Data-Centric Consistency Models?",
        answer: "Sir, these models focus on how data objects are accessed and ensure that all processes observe updates to a data object in a consistent manner[span_82](start_span)[span_82](end_span)."
      },
      {
        question: "What are Client-Centric Consistency Models?",
        answer: "Sir, these models focus on the consistency of the data as seen by a specific client, ensuring that once a client has updated an object, they see their own updates consistently[span_83](start_span)[span_83](end_span)."
      },
      {
        question: "What is a Consistency Protocol?",
        answer: "Sir, it is an implementation of a consistency model that defines how replicas must coordinate to ensure they stay consistent with one another[span_84](start_span)[span_84](end_span)."
      },
      {
        question: "What is Fault Tolerance?",
        answer: "Sir, it is the ability of a system to continue operating properly in the event of the failure of one or more of its components[span_85](start_span)[span_85](end_span)."
      },
      {
        question: "What is Process Resilience?",
        answer: "Sir, it is the ability of a group of processes to continue functioning even if some of the processes in the group fail, often achieved through replication[span_86](start_span)[span_86](end_span)."
      },
      {
        question: "What is Distributed Commit?",
        answer: "Sir, it is a protocol like Two-Phase Commit that ensures that all nodes in a distributed system either commit a transaction or all of them abort it, maintaining atomicity[span_87](start_span)[span_87](end_span)."
      },
      {
        question: "What is Recovery in Distributed Systems?",
        answer: "Sir, recovery is the process of restoring the system to a consistent state after a failure, often using checkpoints or logs[span_88](start_span)[span_88](end_span)."
      },
      {
        question: "What is reliable client-server communication?",
        answer: "Sir, it is communication that guarantees that a message sent from a client will eventually be received by the server, or the client will be notified of the failure[span_89](start_span)[span_89](end_span)."
      },
      {
        question: "What is Reliable Group Communication?",
        answer: "Sir, it is a protocol that ensures all members of a group receive the same set of messages in the same order, despite individual member failures[span_90](start_span)[span_90](end_span)."
      },
      {
        question: "Why do we need replication?",
        answer: "Sir, we need replication to provide high availability; if one replica goes down, another can take over, and to reduce latency by serving data from a nearby location[span_91](start_span)[span_91](end_span)."
      },
      {
        question: "What is Replica Management?",
        answer: "Sir, it involves deciding where to place replicas and how to manage the content update propagation among them[span_92](start_span)[span_92](end_span)."
      },
      {
        question: "What is the difference between data-centric and client-centric models?",
        answer: "Sir, data-centric models worry about global consistency across all processes, while client-centric models focus on whether a specific client sees a consistent view of their own actions[span_93](start_span)[span_93](end_span)."
      },
      {
        question: "How is fault tolerance achieved?",
        answer: "Sir, it is achieved through redundancy (replicating components) and error detection/recovery mechanisms[span_94](start_span)[span_94](end_span)."
      },
      {
        question: "What is the 'Two-Phase Commit' protocol?",
        answer: "Sir, in phase one, the coordinator asks if nodes are ready to commit, and in phase two, it sends the commit or abort instruction based on the responses[span_95](start_span)[span_95](end_span)."
      },
      {
        question: "What is a check-point?",
        answer: "Sir, a check-point is a state snapshot saved at regular intervals, so the system can roll back to this known good state after a failure[span_96](start_span)[span_96](end_span)."
      },
      {
        question: "What is process resilience?",
        answer: "Sir, it ensures that even if one process in a group crashes, the group can still perform its task, perhaps by using a leader to take over[span_97](start_span)[span_97](end_span)."
      },
      {
        question: "What is the goal of consistency protocols?",
        answer: "Sir, the goal is to define how updates are propagated so that all replicas eventually reflect the same data[span_98](start_span)[span_98](end_span)."
      },
      {
        question: "Why is recovery hard in distributed systems?",
        answer: "Sir, it is hard because the state is distributed across many machines, and we have to ensure all machines return to a globally consistent state[span_99](start_span)[span_99](end_span)."
      },
      {
        question: "What is reliable communication?",
        answer: "Sir, it is the guarantee that data sent is not lost, corrupted, or duplicated during transfer between distributed components[span_100](start_span)[span_100](end_span)."
      }
    ],
    mcqs: [
      { question: "Replication helps in:", options: ["Increasing accessibility", "Deleting data", "Lowering CPU speed", "Increasing network delay"], correctAnswer: "Increasing accessibility" },
      { question: "Which model focuses on consistency seen by a specific client?", options: ["Data-centric", "Client-centric", "System-centric", "Node-centric"], correctAnswer: "Client-centric" },
      { question: "What does Two-Phase Commit ensure?", options: ["Atomicity of transactions", "Data destruction", "Network speed", "Process deletion"], correctAnswer: "Atomicity of transactions" },
      { question: "What is fault tolerance?", options: ["Continuing operation despite failure", "Crashing on failure", "High power usage", "Manual recovery"], correctAnswer: "Continuing operation despite failure" },
      { question: "What is the goal of consistency protocols?", options: ["Keeping replicas consistent", "Deleting data", "Crashing nodes", "Limiting access"], correctAnswer: "Keeping replicas consistent" },
      { question: "What does a check-point do?", options: ["Saves state for recovery", "Deletes all logs", "Speeds up CPU", "Increases network load"], correctAnswer: "Saves state for recovery" },
      { question: "Which model focuses on global consistency across processes?", options: ["Data-centric", "Client-centric", "Local-centric", "User-centric"], correctAnswer: "Data-centric" },
      { question: "How is fault tolerance achieved?", options: ["Redundancy", "Single-component usage", "Ignoring errors", "Centralization"], correctAnswer: "Redundancy" },
      { question: "What is process resilience?", options: ["Functioning despite process failure", "Automatic shutdown", "Hard drive cooling", "Memory increase"], correctAnswer: "Functioning despite process failure" },
      { question: "What is reliable group communication?", options: ["Consistent message delivery to all members", "Random message drops", "High message latency", "One-to-one messaging only"], correctAnswer: "Consistent message delivery to all members" },
      { question: "What is the purpose of replicas?", options: ["To store data copies", "To reduce RAM", "To stop all processes", "To increase power cost"], correctAnswer: "To store data copies" },
      { question: "What does distributed commit handle?", options: ["Transaction integrity", "CPU speed", "Monitor brightness", "File display"], correctAnswer: "Transaction integrity" },
      { question: "What is a replica?", options: ["A copy of a data object", "A hardware crash", "A network cable", "A system user"], correctAnswer: "A copy of a data object" },
      { question: "Recovery is the process of:", options: ["Restoring system state", "Deleting logs", "Crashing the system", "Formatting disks"], correctAnswer: "Restoring system state" },
      { question: "Why is replication used for latency?", options: ["To serve data locally", "To slow down connections", "To increase bandwidth usage", "To stop user access"], correctAnswer: "To serve data locally" },
      { question: "What are replica management responsibilities?", options: ["Placement and update propagation", "CPU cooling", "Keyboard layout", "Screen resolution"], correctAnswer: "Placement and update propagation" },
      { question: "Does client-centric consistency model worry about all processes?", options: ["Yes", "No", "Only if it is a server", "Only if it is offline"], correctAnswer: "No" },
      { question: "What is atomicity?", options: ["All or nothing execution", "Partial execution", "Random execution", "Slow execution"], correctAnswer: "All or nothing execution" },
      { question: "Can a group continue after a member failure?", options: ["Yes, if resilient", "No", "Only if the leader fails", "Only if the group is empty"], correctAnswer: "Yes, if resilient" },
      { question: "What happens if a coordinator cannot commit?", options: ["Transaction aborts", "Transaction commits anyway", "System resets", "Data is lost"], correctAnswer: "Transaction aborts" }
    ]
  },
  {
    chapterTitle: "Security",
    vivaQuestions: [
      {
        question: "What is the role of security in Distributed Systems?",
        answer: "Sir, the role is to protect the system's assets—data, communication, and processing power—from threats like unauthorized access, data integrity loss, and denial of service[span_101](start_span)[span_101](end_span)."
      },
      {
        question: "What is a Security Threat?",
        answer: "Sir, a threat is a potential violation of security, such as eavesdropping, tampering with data, or impersonating a valid user[span_102](start_span)[span_102](end_span)."
      },
      {
        question: "What is Cryptography?",
        answer: "Sir, cryptography is the practice of securing information by transforming it into an unreadable format using algorithms, ensuring confidentiality and integrity[span_103](start_span)[span_103](end_span)."
      },
      {
        question: "What is Authentication?",
        answer: "Sir, authentication is the process of verifying the identity of a user or a machine before allowing them to access the system[span_104](start_span)[span_104](end_span)."
      },
      {
        question: "What is Message Integrity?",
        answer: "Sir, message integrity ensures that a message has not been altered or tampered with during transit from the sender to the receiver[span_105](start_span)[span_105](end_span)."
      },
      {
        question: "What is Confidentiality?",
        answer: "Sir, confidentiality ensures that sensitive data is only accessible to authorized users and is protected from unauthorized eavesdroppers[span_106](start_span)[span_106](end_span)."
      },
      {
        question: "What is an Access Control mechanism?",
        answer: "Sir, access control mechanisms restrict who can perform which operations on specific resources, typically based on user identity or role[span_107](start_span)[span_107](end_span)."
      },
      {
        question: "What is a Firewall?",
        answer: "Sir, a firewall is a network security device that monitors and controls incoming and outgoing network traffic based on predetermined security rules, acting as a barrier[span_108](start_span)[span_108](end_span)."
      },
      {
        question: "What is Denial of Service (DoS)?",
        answer: "Sir, it is an attack where an attacker attempts to make a machine or network resource unavailable to its intended users, often by flooding it with traffic[span_109](start_span)[span_109](end_span)."
      },
      {
        question: "What is Authorization Management?",
        answer: "Sir, it is the process of defining and enforcing policies that determine what actions an authenticated user is permitted to perform in the system[span_110](start_span)[span_110](end_span)."
      },
      {
        question: "What is a Secure Channel?",
        answer: "Sir, it is a communication path between two entities that is protected against eavesdropping and tampering, usually through encryption and authentication[span_111](start_span)[span_111](end_span)."
      },
      {
        question: "Why is secure mobile code important?",
        answer: "Sir, because mobile code (like applets) executes on a client machine, it could potentially contain malicious instructions, so it must be secured to protect the host[span_112](start_span)[span_112](end_span)."
      },
      {
        question: "What is Message Integrity vs Confidentiality?",
        answer: "Sir, integrity ensures the message hasn't changed, while confidentiality ensures the message cannot be read by outsiders[span_113](start_span)[span_113](end_span)."
      },
      {
        question: "What is Key Management?",
        answer: "Sir, key management involves the generation, distribution, storage, and replacement of cryptographic keys used for encryption and authentication[span_114](start_span)[span_114](end_span)."
      },
      {
        question: "What are security policies?",
        answer: "Sir, policies define the security goals, like 'all traffic must be encrypted', which the system must enforce[span_115](start_span)[span_115](end_span)."
      },
      {
        question: "What is secure group communication?",
        answer: "Sir, it is a method where a group of nodes communicate, and only authorized group members can decrypt and read the messages[span_116](start_span)[span_116](end_span)."
      },
      {
        question: "How do you protect against DoS attacks?",
        answer: "Sir, we use traffic filtering, rate limiting, and firewalls to block malicious traffic while allowing legitimate access[span_117](start_span)[span_117](end_span)."
      },
      {
        question: "Why is Authentication the first step?",
        answer: "Sir, because before you can authorize an action or secure a channel, you must first know exactly who you are talking to[span_118](start_span)[span_118](end_span)."
      },
      {
        question: "What is Secure Group Management?",
        answer: "Sir, it handles the dynamic joining and leaving of members in a secure group, ensuring that departing members can no longer access future group communications[span_119](start_span)[span_119](end_span)."
      },
      {
        question: "Is security a one-time setup?",
        answer: "Sir, no, security is a continuous process of monitoring, updating policies, and managing keys to respond to evolving threats[span_120](start_span)[span_120](end_span)."
      }
    ],
    mcqs: [
      { question: "What process verifies a user's identity?", options: ["Authentication", "Encryption", "Firewalling", "Load balancing"], correctAnswer: "Authentication" },
      { question: "What ensures that a message has not been altered?", options: ["Message Integrity", "Confidentiality", "Compression", "Formatting"], correctAnswer: "Message Integrity" },
      { question: "What is a firewall?", options: ["Network traffic controller", "Data encryptor", "Memory cleaner", "CPU cooler"], correctAnswer: "Network traffic controller" },
      { question: "Which attack makes resources unavailable?", options: ["DoS", "Authentication", "Integrity", "Authorization"], correctAnswer: "DoS" },
      { question: "Cryptography is used for:", options: ["Security", "Display", "Hardware testing", "Printing"], correctAnswer: "Security" },
      { question: "What ensures sensitive data is kept private?", options: ["Confidentiality", "Integrity", "Availability", "Redundancy"], correctAnswer: "Confidentiality" },
      { question: "What is the role of access control?", options: ["Restricting operations", "Increasing speed", "Managing memory", "Setting clock"], correctAnswer: "Restricting operations" },
      { question: "What involves generating and storing keys?", options: ["Key management", "Message passing", "Process migration", "File deletion"], correctAnswer: "Key management" },
      { question: "Authorization management defines:", options: ["What a user can do", "The user's password", "The network speed", "The monitor size"], correctAnswer: "What a user can do" },
      { question: "What is a secure channel?", options: ["Protected communication path", "Open internet", "Physical wire only", "Public storage"], correctAnswer: "Protected communication path" },
      { question: "What happens to a secure group if a member leaves?", options: ["Management updates keys", "The group crashes", "Security increases", "The group stops working"], correctAnswer: "Management updates keys" },
      { question: "Are security threats static?", options: ["Yes", "No, they evolve", "Only in labs", "Only in LANs"], correctAnswer: "No, they evolve" },
      { question: "Why must mobile code be secured?", options: ["Because it executes on host", "It is too slow", "It is too large", "It is always free"], correctAnswer: "Because it executes on host" },
      { question: "Which security aspect deals with data not being tampered with?", options: ["Integrity", "Availability", "Confidentiality", "Scalability"], correctAnswer: "Integrity" },
      { question: "What is a security policy?", options: ["Definition of security goals", "A hardware rule", "A network speed limit", "A display setting"], correctAnswer: "Definition of security goals" },
      { question: "Can a firewall block incoming traffic?", options: ["Yes", "No", "Only if it is encrypted", "Only if it is local"], correctAnswer: "Yes" },
      { question: "What is DoS?", options: ["Denial of Service", "Date of System", "Direct Operating System", "Data on Server"], correctAnswer: "Denial of Service" },
      { question: "Is security just about encryption?", options: ["No, it includes policy and access control", "Yes", "Only for passwords", "Only for servers"], correctAnswer: "No, it includes policy and access control" },
      { question: "What does authentication verify?", options: ["Identity", "File size", "Hardware type", "Network speed"], correctAnswer: "Identity" },
      { question: "What is confidentiality primarily concerned with?", options: ["Privacy of data", "Network speed", "File integrity", "Task scheduling"], correctAnswer: "Privacy of data" }
    ]
  }
];
