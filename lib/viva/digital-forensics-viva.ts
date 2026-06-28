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

export const gtuDigitalForensicsViva: SubjectData = {
  subjectName: "DIGITAL FORENSICS",
  totalChapters: 7,
  chapters: [
    {
      chapterNumber: 1,
      chapterName: "Introduction",
      vivaQuestions: [
        { question: "What is forensic science?", answer: "Sir, forensic science is the application of scientific methods and techniques to investigate crimes and provide evidence that is admissible in a court of law." },
        { question: "Define Digital Forensics.", answer: "Sir, digital forensics is a branch of forensic science that focuses on the identification, preservation, extraction, analysis, and documentation of digital evidence found on computers and digital storage media." },
        { question: "What is the digital forensic process?", answer: "Sir, the process typically involves four main phases: identification of evidence, preservation of the scene, analysis of the extracted data, and reporting the findings." },
        { question: "What is Locard's Exchange Principle?", answer: "Sir, Locard's exchange principle states that 'every contact leaves a trace'. In digital forensics, this means any activity on a computer system inevitably leaves behind some form of digital trace." },
        { question: "What are scientific models in forensics?", answer: "Sir, scientific models provide a structured, repeatable framework to ensure that forensic investigations are systematic, unbiased, and legally defensible." },
        { question: "Why is the digital forensic process important?", answer: "Sir, it is important because it ensures the integrity of the evidence, guaranteeing that it has not been tampered with and can be reliably used in legal proceedings." },
        { question: "What is the goal of forensic science?", answer: "Sir, the goal is to uncover the truth about a crime by analyzing physical or digital evidence using rigorous scientific methods." },
        { question: "What does admissibility in court mean?", answer: "Sir, it means that the evidence gathered and the methods used to gather it must meet the standards set by the legal system to be considered valid and trustworthy." },
        { question: "How does Locard's principle apply to a cyberattack?", answer: "Sir, even in a cyberattack, the attacker leaves digital footprints, such as IP logs, file timestamps, or memory remnants, which we can analyze to trace the attack." },
        { question: "What is the primary role of a digital forensic expert?", answer: "Sir, the expert's role is to act as an objective investigator who discovers and interprets digital facts without bias, supporting the pursuit of justice." }
      ],
      mcqs: [
        { question: "Every contact leaves a trace is known as:", options: ["Newton's Law", "Locard's Exchange Principle", "Moore's Law", "Murphy's Law"], answer: "Locard's Exchange Principle" },
        { question: "Digital Forensics deals with evidence from:", options: ["Physical paper only", "Digital storage media", "Biological samples only", "Chemical substances"], answer: "Digital storage media" },
        { question: "Which of the following is NOT a phase of the digital forensic process?", options: ["Identification", "Preservation", "Deletion", "Analysis"], answer: "Deletion" },
        { question: "Forensic science aims to provide evidence that is:", options: ["Admissible in court", "Always digital", "Only circumstantial", "Subjective"], answer: "Admissible in court" },
        { question: "The goal of digital forensics is to:", options: ["Destroy evidence", "Uncover truth from digital traces", "Create viruses", "Hack systems"], answer: "Uncover truth from digital traces" },
        { question: "A digital trace left by an attacker is often called a:", options: ["Digital footprint", "Memory leak", "Hardware glitch", "Software bug"], answer: "Digital footprint" },
        { question: "Scientific models in forensics ensure:", options: ["Biased results", "Systematic and repeatable processes", "Faster hacking", "No documentation"], answer: "Systematic and repeatable processes" },
        { question: "What is the primary concern of digital forensics?", options: ["System performance", "Integrity of evidence", "Software development", "Network speed"], answer: "Integrity of evidence" },
        { question: "Digital forensics is a branch of:", options: ["Computer Science only", "Forensic Science", "Social Science", "Political Science"], answer: "Forensic Science" },
        { question: "Locard's principle is fundamental to:", options: ["Data storage", "Forensic investigations", "Cloud computing", "Programming"], answer: "Forensic investigations" }
      ]
    },
    {
      chapterNumber: 2,
      chapterName: "Understanding of the technical concepts",
      vivaQuestions: [
        { question: "What is basic computer organization?", answer: "Sir, basic computer organization refers to the fundamental architecture of a computer, including the CPU, memory (RAM), storage, and I/O components that work together to execute instructions." },
        { question: "What is a file system?", answer: "Sir, a file system is a method used by an operating system to organize, store, retrieve, and manage data files on a storage device, such as NTFS, FAT32, or ext4." },
        { question: "What is memory organization?", answer: "Sir, memory organization describes how a system allocates, manages, and uses its primary and secondary memory hierarchies to ensure efficient data access." },
        { question: "What are data storage concepts?", answer: "Sir, these concepts include how data is physically and logically represented on storage media, including sectors, clusters, and the way files are mapped to these physical locations." },
        { question: "Why is understanding file systems crucial in forensics?", answer: "Sir, understanding file systems is crucial because deleted files, metadata, and hidden data reside within specific structures of the file system, which a forensic expert must know how to navigate." },
        { question: "What is the difference between RAM and storage?", answer: "Sir, RAM (Random Access Memory) is volatile primary memory used for active processing, while storage (HDD/SSD) is non-volatile secondary memory used for permanent data retention." },
        { question: "What is a sector?", answer: "Sir, a sector is the smallest physical storage unit on a disk drive, typically 512 bytes or 4 KB in size." },
        { question: "What is a cluster?", answer: "Sir, a cluster is the smallest logical unit of storage that the operating system can allocate to a file; it consists of one or more contiguous sectors." },
        { question: "What is the role of the CPU in data storage?", answer: "Sir, the CPU processes the data, but it interacts with storage controllers to read and write data blocks between the storage medium and memory." },
        { question: "How is data structured logically on a disk?", answer: "Sir, logical data is structured into files and directories, which the file system keeps track of via file allocation tables or inode structures." }
      ],
      mcqs: [
        { question: "What organizes and manages files on a storage device?", options: ["CPU", "File System", "BIOS", "Compiler"], answer: "File System" },
        { question: "What is the smallest physical storage unit on a disk?", options: ["Cluster", "Sector", "Byte", "Block"], answer: "Sector" },
        { question: "Which memory is volatile?", options: ["HDD", "SSD", "RAM", "ROM"], answer: "RAM" },
        { question: "What is the smallest logical unit of storage allocated by the OS?", options: ["Sector", "Cluster", "Bit", "Frame"], answer: "Cluster" },
        { question: "Which file system is commonly used in Windows?", options: ["ext4", "NTFS", "HFS+", "APFS"], answer: "NTFS" },
        { question: "The CPU manages data access by interacting with:", options: ["The network", "Storage controllers", "The monitor", "Printers"], answer: "Storage controllers" },
        { question: "Non-volatile memory is used for:", options: ["Active processing", "Permanent storage", "Temporary caching", "None"], answer: "Permanent storage" },
        { question: "Data mapping is controlled by:", options: ["The File System", "The User", "The Keyboard", "The Mouse"], answer: "The File System" },
        { question: "What is stored in RAM?", options: ["Only OS files", "Active process data", "All deleted files", "Firmware"], answer: "Active process data" },
        { question: "Why are inodes important in forensic file analysis?", options: ["They contain metadata about files", "They hold screen data", "They are hardware only", "They manage keyboard input"], answer: "They contain metadata about files" }
      ]
    },
    {
      chapterNumber: 3,
      chapterName: "Digital Forensics Process Model",
      vivaQuestions: [
        { question: "What is a cybercrime scene?", answer: "Sir, a cybercrime scene is the digital environment—whether a single computer, a network, or a cloud server—where a digital crime has occurred." },
        { question: "What is evidence documentation?", answer: "Sir, documentation involves meticulously recording the state of the evidence, the scene, and every action taken by the investigator to ensure a clear, verifiable record exists." },
        { question: "What is the chain of custody?", answer: "Sir, the chain of custody is a chronological documentation or paper trail that records the sequence of custody, control, transfer, and analysis of evidence, ensuring it remains untainted." },
        { question: "What is forensic cloning?", answer: "Sir, forensic cloning is the process of creating an exact, bit-by-bit copy of a storage medium, ensuring the original evidence remains untouched and the copy can be analyzed." },
        { question: "What is live system forensic?", answer: "Sir, live system forensic involves collecting volatile data (like RAM contents, active network connections) from a computer while it is still running." },
        { question: "What is dead system forensic?", answer: "Sir, dead system forensic involves collecting and analyzing data from a powered-off device, typically from its hard drive or other non-volatile storage." },
        { question: "Why is hashing used in forensics?", answer: "Sir, hashing (like MD5 or SHA) creates a digital fingerprint of data. If the data changes, the hash changes, allowing us to verify the integrity of the evidence." },
        { question: "What is report drafting?", answer: "Sir, report drafting is the process of summarizing the investigation steps, evidence found, and analysis performed into a clear, professional report for legal use." },
        { question: "What is the primary danger of live forensics?", answer: "Sir, the primary danger is that interacting with a running system might change its state, overwrite memory, or be detected by sophisticated malware." },
        { question: "How do you maintain the chain of custody?", answer: "Sir, we maintain it by labeling every piece of evidence, logging every person who handles it, and ensuring it is stored in a secure, controlled location." }
      ],
      mcqs: [
        { question: "The trail of custody for evidence is known as:", options: ["Chain of Custody", "Analysis log", "Data flow", "Hashing"], answer: "Chain of Custody" },
        { question: "Creating an exact, bit-by-bit copy is called:", options: ["Backup", "Forensic cloning", "Data sync", "Copy-paste"], answer: "Forensic cloning" },
        { question: "Which data is collected during live forensics?", options: ["Only hard drive data", "Volatile data (e.g., RAM)", "Printer queue", "Keyboard layout"], answer: "Volatile data (e.g., RAM)" },
        { question: "What is used to verify the integrity of forensic evidence?", options: ["Hashing", "Cloning", "Compression", "Encryption"], answer: "Hashing" },
        { question: "Dead system forensic involves:", options: ["Collecting data from a running system", "Analyzing a powered-off device", "Remote hacking", "System updates"], answer: "Analyzing a powered-off device" },
        { question: "What is the role of documentation in forensics?", options: ["To delete files", "To maintain a verifiable record", "To format the drive", "To install software"], answer: "To maintain a verifiable record" },
        { question: "Why is the original evidence left untouched?", options: ["It is too big", "To prevent tampering", "To speed up analysis", "It is illegal to touch"], answer: "To prevent tampering" },
        { question: "What is a cybercrime scene?", options: ["Only physical crimes", "The digital environment where the crime occurred", "An office building", "A shopping mall"], answer: "The digital environment where the crime occurred" },
        { question: "Report drafting is done for:", options: ["Legal and professional use", "Personal notes", "Deleting logs", "Clearing disk space"], answer: "Legal and professional use" },
        { question: "Which data is lost when a computer is powered off?", options: ["Hard drive data", "Volatile RAM data", "CD data", "Backup data"], answer: "Volatile RAM data" }
      ]
    },
    {
      chapterNumber: 4,
      chapterName: "Computer Operating System Artifacts",
      vivaQuestions: [
        { question: "How do you find deleted data?", answer: "Sir, deleted data can be found by examining unallocated disk space, where the file system entry is removed but the actual raw data bytes remain until overwritten." },
        { question: "What are hibernating files?", answer: "Sir, hibernating files (`hiberfil.sys`) store the full contents of the RAM when the computer enters hibernation, potentially containing critical forensic data." },
        { question: "What is the Windows Registry?", answer: "Sir, the Windows Registry is a hierarchical database that stores configuration settings, hardware/software details, and user activity, making it a goldmine for forensic investigators." },
        { question: "What is the recycle bin operation?", answer: "Sir, when a file is moved to the recycle bin, its metadata is moved to a specific folder, but the actual file content is often renamed or redirected, which we can track." },
        { question: "What is metadata?", answer: "Sir, metadata is 'data about data', such as creation time, last modified time, file size, and author information, crucial for establishing a timeline of events." },
        { question: "What are restore points?", answer: "Sir, restore points are snapshots of the system files and registry at a specific time, allowing us to see previous versions of files or configurations." },
        { question: "What are shadow copies?", answer: "Sir, shadow copies (Volume Shadow Copies) are snapshots of files even while they are in use, providing a way to recover older versions of files that have been modified." },
        { question: "Why is file system metadata important?", answer: "Sir, metadata like 'last accessed' or 'last modified' time helps prove when a user or program actually touched a file, essential for building an investigation timeline." },
        { question: "Can you recover overwritten data?", answer: "Sir, generally no. Once raw data bytes have been overwritten by new data, the original information is permanently lost." },
        { question: "What kind of info is in the Windows Registry?", answer: "Sir, it contains information on installed programs, user profiles, recent files accessed, network connections, and system startup services." }
      ],
      mcqs: [
        { question: "Where does deleted data technically reside until overwritten?", options: ["In the CPU", "In unallocated space", "In the registry", "In the monitor"], answer: "In unallocated space" },
        { question: "What file contains the RAM content during hibernation?", options: ["regedit.exe", "hiberfil.sys", "system.ini", "boot.ini"], answer: "hiberfil.sys" },
        { question: "The Windows Registry is a:", options: ["Text file", "Hierarchical database", "Video file", "Network protocol"], answer: "Hierarchical database" },
        { question: "What is 'data about data'?", options: ["Metadata", "RAM", "Cache", "Firmware"], answer: "Metadata" },
        { question: "Which feature allows recovery of older file versions?", options: ["Recycle bin", "Shadow copies", "System BIOS", "Keyboard buffer"], answer: "Shadow copies" },
        { question: "Windows registry stores:", options: ["User activity and config", "Only music files", "Hardware BIOS", "Screen pixels"], answer: "User activity and config" },
        { question: "When a file is 'deleted' by the user, the operating system primarily:", options: ["Zeroes out the data", "Removes the file system entry", "Physically shreds the disk", "Reboots"], answer: "Removes the file system entry" },
        { question: "System restore points are used to:", options: ["Format the disk", "Revert system files to a previous state", "Hide files", "Change usernames"], answer: "Revert system files to a previous state" },
        { question: "Metadata includes:", options: ["Creation and modification times", "File contents only", "User's password", "Monitor resolution"], answer: "Creation and modification times" },
        { question: "What happens if deleted data is overwritten?", options : ["It is recovered", "It is permanently lost", "It is encrypted", "It is moved to RAM"], answer: "It is permanently lost" }
      ]
    },
    {
      chapterNumber: 5,
      chapterName: "Legal aspects of digital forensics",
      vivaQuestions: [
        { question: "What are the legal aspects of digital forensics?", answer: "Sir, these involve laws, regulations, and court procedures that govern how digital evidence is collected, handled, and presented to ensure it is admissible." },
        { question: "What is Electronic Discovery (eDiscovery)?", answer: "Sir, eDiscovery is the process of identifying, collecting, and producing electronically stored information (ESI) in response to a request for production in a lawsuit or investigation." },
        { question: "Why is legal impact important?", answer: "Sir, if evidence is collected without following proper legal procedures (like obtaining a warrant), it can be thrown out by the court, rendering the entire investigation useless." },
        { question: "What is ESI?", answer: "Sir, ESI stands for Electronically Stored Information, which includes emails, documents, databases, voicemail, and any other digital content relevant to legal proceedings." },
        { question: "How do laws impact digital forensics?", answer: "Sir, laws like the IT Act (in India) define what constitutes cybercrime and specify how digital evidence should be handled, impacting how investigators must operate." },
        { question: "What is 'burden of proof'?", answer: "Sir, it is the obligation of the party in a trial to produce evidence that will prove the claims they have made." },
        { question: "What is a warrant?", answer: "Sir, a warrant is a legal document issued by a judge that authorizes law enforcement to conduct a search and seize digital evidence from a specified location." },
        { question: "What is the role of privacy laws?", answer: "Sir, privacy laws balance the need for investigation with the individual's right to privacy, limiting what investigators can search and what information they can access." },
        { question: "Why is documentation critical for legal cases?", answer: "Sir, without strict documentation and chain of custody, the defense can claim that the evidence was manipulated, making it legally invalid." },
        { question: "What is the impact of international laws?", answer: "Sir, because cybercrime is borderless, international laws and mutual legal assistance treaties are crucial for investigating crimes that span multiple jurisdictions." }
      ],
      mcqs: [
        { question: "ESI stands for:", options: ["Electronically Stored Information", "Electronic System Investigation", "Evidence Storage Index", "Error System Info"], answer: "Electronically Stored Information" },
        { question: "eDiscovery is primarily used in:", options: ["Software development", "Lawsuits and investigations", "System maintenance", "Game playing"], answer: "Lawsuits and investigations" },
        { question: "Evidence collected without legal procedures is:", options: ["Always admissible", "Admissible as hearsay", "Inadmissible in court", "Used for training"], answer: "Inadmissible in court" },
        { question: "What authorizes law enforcement to search for evidence?", options: ["Warrant", "User password", "IP address", "Firewall"], answer: "Warrant" },
        { question: "Which Act in India deals with cybercrime and digital evidence?", options: ["IT Act", "Criminal Code", "Traffic Act", "Gaming Act"], answer: "IT Act" },
        { question: "The obligation to prove a claim is called:", options: ["Chain of Custody", "Burden of proof", "Discovery", "Metadata"], answer: "Burden of proof" },
        { question: "Privacy laws regulate:", options: ["What investigators can search", "Network speeds", "Compiler optimization", "Screen resolution"], answer: "What investigators can search" },
        { question: "E-discovery involves identifying and producing:", options: ["Physical paper only", "Electronically Stored Information (ESI)", "CPU instructions", "Network topology"], answer: "Electronically Stored Information (ESI)" },
        { question: "Why is cybercrime considered borderless?", options: ["It happens on the internet", "It requires no computers", "It is always legal", "It is never investigated"], answer: "It happens on the internet" },
        { question: "Which document is essential to prevent claims of evidence tampering?", options: ["Chain of Custody", "User manual", "Software license", "Game script"], answer: "Chain of Custody" }
      ]
    },
    {
      chapterNumber: 6,
      chapterName: "Digital Forensic tools",
      vivaQuestions: [
        { question: "What is tool validation?", answer: "Sir, tool validation is the process of testing forensic tools to ensure they work correctly and consistently, ensuring that their output is reliable and scientifically accurate." },
        { question: "What is quality assurance?", answer: "Sir, quality assurance involves implementing protocols and standards during an investigation to ensure the quality of evidence handling and the validity of the findings." },
        { question: "What are hardware forensic tools?", answer: "Sir, these are physical devices like write-blockers that prevent any data from being written to the suspect drive, ensuring the evidence remains unchanged during analysis." },
        { question: "What are software forensic tools?", answer: "Sir, these are applications like Wireshark or Volatility used to capture, analyze, and recover data from network traffic, memory, or disk images." },
        { question: "What is a write-blocker?", answer: "Sir, a write-blocker is a crucial hardware or software device that allows investigators to read data from a drive while physically or logically blocking any 'write' commands." },
        { question: "What is tool selection?", answer: "Sir, tool selection involves choosing the most appropriate forensic tool based on the specific investigation requirements, the file system, and the platform involved." },
        { question: "What does Wireshark do?", answer: "Sir, Wireshark is a powerful network protocol analyzer used to capture and inspect network traffic in real-time, helping to identify malicious communication." },
        { question: "What is Volatility?", answer: "Sir, Volatility is an advanced memory forensics framework used to analyze RAM dumps, helping uncover hidden processes, network sockets, and artifacts from volatile memory." },
        { question: "What is Magnet RAM Capture?", answer: "Sir, it is a tool specifically designed to capture the contents of a computer's RAM, which can then be analyzed by memory forensic tools." },
        { question: "What are the common traits of good forensic tools?", answer: "Sir, good tools are validated, reliable, well-documented, forensic-sound (they don't alter data), and produce verifiable, detailed reports." }
      ],
      mcqs: [
        { question: "What prevents data from being written to a suspect drive?", options: ["Write-blocker", "Registry editor", "Compiler", "Network switch"], answer: "Write-blocker" },
        { question: "Ensuring tools perform correctly is called:", options: ["Tool validation", "Data formatting", "Code writing", "Screen recording"], answer: "Tool validation" },
        { question: "Which tool is primarily used for network traffic analysis?", options: ["Wireshark", "Paint", "Excel", "Calculator"], answer: "Wireshark" },
        { question: "Which tool is best for analyzing RAM dumps?", options: ["Volatility", "BIOS", "Compiler", "Monitor"], answer: "Volatility" },
        { question: "What is the primary function of quality assurance in forensics?", options: ["To ensure consistent, valid results", "To speed up the computer", "To delete logs", "To edit files"], answer: "To ensure consistent, valid results" },
        { question: "Hardware forensic tools are used for:", options: ["Physical connection protection", "Network hacking", "System crashing", "Software development"], answer: "Physical connection protection" },
        { question: "Which tool captures physical memory contents?", options: ["Magnet RAM Capture", "Notepad", "Compiler", "Printer driver"], answer: "Magnet RAM Capture" },
        { question: "Tool selection should be based on:", options: ["Personal preference", "Investigation requirements", "Color of the icon", "Cost only"], answer: "Investigation requirements" },
        { question: "Forensic tools must be:", options: ["Forensically sound and validated", "Fast at gaming", "Able to edit files", "Open source only"], answer: "Forensically sound and validated" },
        { question: "What provides a detailed, verifiable account of forensic findings?", options: ["Detailed report", "Temporary file", "Chat message", "Music track"], answer: "Detailed report" }
      ]
    },
    {
      chapterNumber: 7,
      chapterName: "Case Study",
      vivaQuestions: [
        { question: "What are internet resource forensics?", answer: "Sir, this involves analyzing web artifacts, such as browser history, cache, cookies, and downloaded files, to reconstruct a user's internet activity." },
        { question: "How do you perform web browser forensics?", answer: "Sir, we examine the browser's database files (like SQLite files in Chrome/Firefox) to extract URLs visited, search queries, saved passwords, and cached images." },
        { question: "What is email header forensics?", answer: "Sir, email headers contain metadata like IP addresses of mail servers, timestamps, and routing information, which are used to trace the path and source of an email." },
        { question: "What are social networking site forensics?", answer: "Sir, this involves analyzing user profiles, messages, posts, and connection data on platforms like Facebook or LinkedIn to gather evidence relevant to a case." },
        { question: "How are browser cookies useful?", answer: "Sir, cookies track user sessions. Forensically, they can identify user preferences, login states, and websites visited, often remaining even after the browser is closed." },
        { question: "What can be found in email headers?", answer: "Sir, email headers contain 'Received' paths, which show the journey of an email through various servers, helping identify the origin IP address." },
        { question: "Why are browser history files important?", answer: "Sir, history files provide a timeline of user activity, showing exactly which websites were visited and at what time, forming a basis for behavioral reconstruction." },
        { question: "What is the challenge with social media forensics?", answer: "Sir, the challenge is that data is often stored on remote servers owned by private companies, necessitating legal requests (subpoenas) to access account data." },
        { question: "What is browser cache analysis?", answer: "Sir, cache analysis involves recovering images, scripts, and HTML files temporarily stored by the browser, which can reveal exactly what the user saw on a website." },
        { question: "How do you trace an email to its source?", answer: "Sir, by examining the 'Received' headers in the email's raw source code, we can trace the chain of servers through which the email passed back to the originating IP address." }
      ],
      mcqs: [
        { question: "Web browser forensics analyzes:", options: ["Hardware circuits", "Browser history, cache, and cookies", "Keyboard clicks", "Monitor power"], answer: "Browser history, cache, and cookies" },
        { question: "What metadata is found in email headers?", options: ["Only the subject", "IP addresses and timestamps", "Attached images", "Contact list"], answer: "IP addresses and timestamps" },
        { question: "Social networking forensics deals with:", options: ["Offline files", "Posts, messages, and connections", "Router firmware", "Printer queues"], answer: "Posts, messages, and connections" },
        { question: "Where do browsers typically store history and bookmarks?", options: ["SQLite databases", "Video files", "Text files only", "BIOS"], answer: "SQLite databases" },
        { question: "Email tracing uses which header information?", options: ["To/From only", "Received paths", "User password", "Signature"], answer: "Received paths" },
        { question: "Browser cache analysis recovers:", options: ["User passwords", "Previously viewed images and HTML", "RAM contents", "Deleted OS files"], answer: "Previously viewed images and HTML" },
        { question: "Accessing social media data often requires:", options: ["Legal subpoenas", "A simple password", "Hardware access", "No access"], answer: "Legal subpoenas" },
        { question: "Cookies are primarily used to:", options: ["Encrypt files", "Track user sessions and preferences", "Format disks", "Delete data"], answer: "Track user sessions and preferences" },
        { question: "Which of the following is an internet resource artifact?", options: ["RAM dump", "Browser history", "CPU register", "Motherboard serial"], answer: "Browser history" },
        { question: "Email forensics helps determine:", options: ["The sender's identity and path", "The monitor type", "The OS version", "Printer ink level"], answer: "The sender's identity and path" }
      ]
    }
  ]
};
