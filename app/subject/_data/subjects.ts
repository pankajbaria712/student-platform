export type SubjectPageData = {
  slug: string;
  title: string;
  code: string;
  semester: number;
  category: string;
  description: string;
  syllabusPdf: string;
  pyqSlug?: string;
  notesSlug?: string;
  notesStatus: "available" | "coming-soon" | "not-applicable";
  pyqStatus: "available" | "coming-soon" | "not-applicable";
  heroBadge: string;
  features: string[];
  faqs: Array<{ question: string; answer: string }>;
  relatedSubjects: string[];
};

export const subjectPageData: Record<string, SubjectPageData> = {
  "software-engineering": {
    slug: "software-engineering",
    title: "Software Engineering",
    code: "3150711",
    semester: 5,
    category: "Core",
    description:
      "Software lifecycle, agile planning, testing strategies, and modern engineering practices for GTU Semester 5.",
    syllabusPdf: "/pdfs/syllabus/software-engineering-syllabus.pdf",
    pyqSlug: "software-engineering",
    notesSlug: "software-engineering",
    notesStatus: "coming-soon",
    pyqStatus: "available",
    heroBadge: "Core Software Design",
    features: [
      "Complete syllabus coverage",
      "5 years of actual PYQ papers",
      "Download syllabus PDF instantly",
      "Exam-ready concept summary",
    ],
    faqs: [
      {
        question: "Which years of Software Engineering papers are included?",
        answer:
          "We include all available GTU PYQ papers for Semester 5 Software Engineering from 2022 to 2025.",
      },
      {
        question: "Can I download the syllabus PDF for this subject?",
        answer:
          "Yes, the official GTU Software Engineering syllabus is available for instant download.",
      },
      {
        question: "Are the exam questions organized by year and term?",
        answer:
          "Yes, each paper card is labeled by year and Summer/Winter term for easy study planning.",
      },
    ],
    relatedSubjects: ["analysis-and-design-of-algorithms", "python-for-data-science"],
  },
  "python-for-data-science": {
    slug: "python-for-data-science",
    title: "Python for Data Science",
    code: "3150713",
    semester: 5,
    category: "Elective",
    description:
      "Hands-on Python concepts for data analysis, visualization, and GTU exam preparation.",
    syllabusPdf: "/pdfs/syllabus/python-for-data-science-syllabus.pdf",
    pyqSlug: "python-for-data-science",
    notesSlug: "python-for-data-science",
    notesStatus: "coming-soon",
    pyqStatus: "available",
    heroBadge: "Data Science Fundamentals",
    features: [
      "Python library coverage",
      "Real GTU PYQ papers",
      "Data visualization examples",
      "Exam strategy tips",
    ],
    faqs: [
      {
        question: "What does this subject cover?",
        answer:
          "This course covers Python programming for data science, including pandas, NumPy, and visualization tools.",
      },
      {
        question: "Are the papers sorted by term and year?",
        answer:
          "Yes, all PYQ papers are clearly labeled for Winter and Summer sessions.",
      },
      {
        question: "Can this subject help with semester projects?",
        answer:
          "The syllabus is designed to help you use Python for real-world data analysis and reporting tasks.",
      },
    ],
    relatedSubjects: ["computer-networks", "analysis-and-design-of-algorithms"],
  },
  "professional-ethics": {
    slug: "professional-ethics",
    title: "Professional Ethics",
    code: "3150709",
    semester: 5,
    category: "Humanities",
    description:
      "Ethical standards, professional responsibility, and GTU exam concepts for engineering practice.",
    syllabusPdf: "/pdfs/syllabus/professional-ethics-syllabus.pdf",
    pyqSlug: "professional-ethics",
    notesSlug: "professional-ethics",
    notesStatus: "coming-soon",
    pyqStatus: "available",
    heroBadge: "Ethics & Responsibility",
    features: [
      "GTU syllabus PDF download",
      "Previous year question papers",
      "Topic-by-topic exam prep",
      "Core engineering ethics guidance",
    ],
    faqs: [
      {
        question: "What topics are included in Professional Ethics?",
        answer:
          "The subject covers ethical frameworks, professional behavior, social responsibility, and legal conduct.",
      },
      {
        question: "Is this subject graded by GTU?",
        answer:
          "Yes, Professional Ethics is a graded humanities subject for Semester 5.",
      },
      {
        question: "Can I use these papers for last-minute revision?",
        answer:
          "Yes, the PYQ section is designed for quick revision and important question review.",
      },
    ],
    relatedSubjects: ["ipdc-1", "design-engineering-iia"],
  },
  "ipdc-1": {
    slug: "ipdc-1",
    title: "Integrated Personality Development Course - I",
    code: "3150005",
    semester: 5,
    category: "Humanities",
    description:
      "Practice GTU IPDC MCQ papers, gain personality development insights, and build exam confidence.",
    syllabusPdf: "/pdfs/syllabus/integrated-personality-development-course-1-syllabus.pdf",
    pyqSlug: "ipdc-1",
    notesSlug: "ipdc-1",
    notesStatus: "coming-soon",
    pyqStatus: "available",
    heroBadge: "Free IPDC Practice",
    features: [
      "Complete IPDC PYQ archive",
      "Free mock test experience",
      "Instant score review",
      "Weekend revision planner",
    ],
    faqs: [
      {
        question: "What is IPDC-I?",
        answer:
          "IPDC-I is a GTU humanities course focused on personality development, ethics, and soft skills.",
      },
      {
        question: "Does this page include free mock tests?",
        answer:
          "Yes, the practice test links are available directly from the PYQ section.",
      },
      {
        question: "Can I use these papers to improve my exam score?",
        answer:
          "Yes, practicing past MCQ papers is one of the best ways to prepare for the IPDC exam.",
      },
    ],
    relatedSubjects: ["professional-ethics", "software-engineering"],
  },
  "design-engineering-iia": {
    slug: "design-engineering-iia",
    title: "Design Engineering IIA",
    code: "3150001",
    semester: 5,
    category: "Project Work",
    description:
      "Design Engineering IIA covers prototype planning, documentation, and project execution for GTU Semester 5.",
    syllabusPdf: "/pdfs/syllabus/design-engineering-IIA-syllabus.pdf",
    notesStatus: "not-applicable",
    pyqStatus: "not-applicable",
    heroBadge: "Project Design Focus",
    features: [
      "Project planning guidance",
      "Syllabus PDF download",
      "Resource preparation notes",
      "Semester 5 design overview",
    ],
    faqs: [
      {
        question: "Are PYQ papers available for DE-IIA?",
        answer:
          "Not yet. Design Engineering IIA resources are currently being prepared and will be added soon.",
      },
      {
        question: "Can I download the official syllabus?",
        answer:
          "Yes, the official DE-IIA syllabus is available for download on this page.",
      },
      {
        question: "Will study notes be available later?",
        answer:
          "Yes, GTUStudentHub will add notes and resources for Design Engineering IIA once they are verified.",
      },
    ],
    relatedSubjects: ["professional-ethics", "software-engineering"],
  },
  "computer-networks": {
    slug: "computer-networks",
    title: "Computer Networks",
    code: "3150710",
    semester: 5,
    category: "Core",
    description:
      "Computer Networks covers routing, switching, protocols, and communication models for GTU Semester 5.",
    syllabusPdf: "/pdfs/syllabus/computer-networks-syllabus.pdf",
    pyqSlug: "computer-networks",
    notesSlug: "computer-networks",
    notesStatus: "coming-soon",
    pyqStatus: "available",
    heroBadge: "Network Systems",
    features: [
      "Protocol and routing review",
      "GTU past papers included",
      "Syllabus PDF download",
      "Exam-focused network concepts",
    ],
    faqs: [
      {
        question: "What network topics are covered?",
        answer:
          "Topics include network layers, switching, IP routing, and communication models.",
      },
      {
        question: "Is the syllabus PDF downloadable?",
        answer:
          "Yes, you can open the official GTU Computer Networks syllabus from this page.",
      },
      {
        question: "Are the PYQ papers real GTU papers?",
        answer:
          "Yes, each paper PDF is sourced from actual GTU previous year papers.",
      },
    ],
    relatedSubjects: ["software-engineering", "analysis-and-design-of-algorithms"],
  },
  "analysis-and-design-of-algorithms": {
    slug: "analysis-and-design-of-algorithms",
    title: "Analysis and Design of Algorithms",
    code: "3150703",
    semester: 5,
    category: "Core",
    description:
      "Algorithm design, complexity analysis, and problem-solving strategies for GTU Semester 5.",
    syllabusPdf: "/pdfs/syllabus/analysis-and-design-of-algorithms-syllabus.pdf",
    pyqSlug: "analysis-and-design-of-algorithms",
    notesSlug: "analysis-and-design-of-algorithms",
    notesStatus: "coming-soon",
    pyqStatus: "available",
    heroBadge: "Algorithm Mastery",
    features: [
      "Time complexity review",
      "GTU paper archive",
      "Design techniques explained",
      "Exam question practice",
    ],
    faqs: [
      {
        question: "Which algorithm topics are important for GTU?",
        answer:
          "Important topics include dynamic programming, greedy methods, complexities, and graph algorithms.",
      },
      {
        question: "Can I view past PYQ papers for this subject?",
        answer:
          "Yes, the PYQ section includes the verified papers available for this subject.",
      },
      {
        question: "Are study notes available now?",
        answer:
          "Notes are being prepared and will appear on this page once verified.",
      },
    ],
    relatedSubjects: ["software-engineering", "computer-networks"],
  },
  "summer-internship": {
    slug: "summer-internship",
    title: "Summer Internship",
    code: "3170001",
    semester: 7,
    category: "Internship",
    description:
      "GTU Semester 7 internship preparation, industry exposure, and report-ready learning resources.",
    syllabusPdf: "#",
    notesStatus: "not-applicable",
    pyqStatus: "not-applicable",
    heroBadge: "Industry Exposure",
    features: [
      "Internship readiness overview",
      "GTU Semester 7 structure",
      "Report preparation guidance",
      "Future resource expansion",
    ],
    faqs: [
      {
        question: "Is Summer Internship already available as a resource page?",
        answer:
          "The Semester 7 structure is now prepared; detailed notes and papers will be added as they are verified.",
      },
      {
        question: "Can I use this page as a study hub?",
        answer:
          "Yes, the subject card and overview are now available for quick access while the full resource pack is being prepared.",
      },
    ],
    relatedSubjects: ["compiler-design", "artificial-intelligence"],
  },
  "compiler-design": {
    slug: "compiler-design",
    title: "Compiler Design",
    code: "3170701",
    semester: 7,
    category: "Core",
    description:
      "GTU Semester 7 Compiler Design overview covering lexical analysis, parsing, and code generation.",
    syllabusPdf: "/pdfs/syllabus/compiler-design-syllabus.pdf",
    notesStatus: "not-applicable",
    pyqStatus: "available",
    pyqSlug: "compiler-design",
    heroBadge: "Systems & Translators",
    features: [
      "Compiler theory overview",
      "Semester 7 structure support",
      "Exam preparation planning",
      "Upcoming resource additions",
    ],
    faqs: [
      {
        question: "Will detailed notes be added soon?",
        answer: "Yes, the subject page is now scaffolded so new resources can be added without changing the layout.",
      },
      {
        question: "Is the syllabus file available yet?",
        answer: "Yes, the official GTU syllabus PDF is now linked directly from this subject page.",
      },
    ],
    relatedSubjects: ["summer-internship", "mobile-computing-and-wireless-communication"],
  },
  "mobile-computing-and-wireless-communication": {
    slug: "mobile-computing-and-wireless-communication",
    title: "Mobile Computing and Wireless Communication",
    code: "3170710",
    semester: 7,
    category: "Elective",
    description:
      "Semester 7 resources for wireless communication, mobility management, and mobile network systems.",
    syllabusPdf: "/pdfs/syllabus/mobile-computing-and-wireless-communication-syllabus.pdf",
    notesStatus: "not-applicable",
    pyqStatus: "available",
    pyqSlug: "mobile-computing-and-wireless-communication",
    heroBadge: "Wireless Systems",
    features: [
      "Wireless communication overview",
      "Mobile network concepts",
      "Semester 7 revision support",
      "Future notes and papers",
    ],
    faqs: [
      {
        question: "What is currently available for this subject?",
        answer: "The Semester 7 subject card and overview are now live while detailed resources are being prepared.",
      },
      {
        question: "Do the buttons work right away?",
        answer: "The current buttons are placeholders so the semester page stays error-free until resource pages are added.",
      },
    ],
    relatedSubjects: ["compiler-design", "artificial-intelligence"],
  },
  "artificial-intelligence": {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    code: "3170716",
    semester: 7,
    category: "Elective",
    description:
      "Semester 7 AI fundamentals covering reasoning, planning, and intelligent system concepts.",
    syllabusPdf: "/pdfs/syllabus/artificial-intelligence-syllabus.pdf",
    notesStatus: "not-applicable",
    pyqStatus: "available",
    pyqSlug: "artificial-intelligence",
    heroBadge: "Future Tech",
    features: [
      "AI concept overview",
      "Semester 7 structure support",
      "Planning for future resources",
      "Study roadmap placeholder",
    ],
    faqs: [
      {
        question: "Will full resources be added later?",
        answer: "Yes, this subject is now part of the Semester 7 structure and will receive richer resources soon.",
      },
    ],
    relatedSubjects: ["cloud-computing", "machine-learning"],
  },
  "cloud-computing": {
    slug: "cloud-computing",
    title: "Cloud Computing",
    code: "3170717",
    semester: 7,
    category: "Elective",
    description:
      "Semester 7 cloud computing overview covering virtualized infrastructure and delivery models.",
    syllabusPdf: "/pdfs/syllabus/cloud-computing-syllabus.pdf",
    notesStatus: "not-applicable",
    pyqStatus: "available",
    pyqSlug: "cloud-computing",
    heroBadge: "Scalable Systems",
    features: [
      "Virtualization overview",
      "Cloud platform concepts",
      "Semester 7 revision support",
      "Resource placeholders",
    ],
    faqs: [
      {
        question: "Is Cloud Computing included in the new Semester 7 structure?",
        answer: "Yes, it is now listed as a core Semester 7 subject card entry.",
      },
    ],
    relatedSubjects: ["artificial-intelligence", "big-data-analytics"],
  },
  "information-retrieval": {
    slug: "information-retrieval",
    title: "Information Retrieval",
    code: "3170718",
    semester: 7,
    category: "Elective",
    description:
      "GTU Semester 7 Information Retrieval overview for search, ranking, and indexing concepts.",
    syllabusPdf: "/pdfs/syllabus/information-retrieval-syllabus.pdf",
    notesStatus: "not-applicable",
    pyqStatus: "available",
    pyqSlug: "information-retrieval",
    heroBadge: "Search Systems",
    features: [
      "Search engine fundamentals",
      "Retrieval model overview",
      "Semester 7 planning",
      "Upcoming resource additions",
    ],
    faqs: [
      {
        question: "What is available now?",
        answer: "The Semester 7 subject card and overview are ready for immediate access.",
      },
    ],
    relatedSubjects: ["cloud-computing", "distributed-system"],
  },
  "distributed-system": {
    slug: "distributed-system",
    title: "Distributed System",
    code: "3170719",
    semester: 7,
    category: "Elective",
    description:
      "Semester 7 distributed systems overview covering coordination, consistency, and fault tolerance.",
    syllabusPdf: "/pdfs/syllabus/distributed-system-syllabus.pdf",
    notesStatus: "not-applicable",
    pyqStatus: "available",
    pyqSlug: "distributed-system",
    heroBadge: "Coordination & Scaling",
    features: [
      "Distributed communication concepts",
      "Consistency and replication",
      "Semester 7 exam support",
      "Future resources planned",
    ],
    faqs: [
      {
        question: "Will this subject get detailed materials later?",
        answer: "Yes, the structure is in place and more content can be added without changing the page layout.",
      },
    ],
    relatedSubjects: ["information-retrieval", "parallel-and-distributed-computing"],
  },
  "information-security": {
    slug: "information-security",
    title: "Information Security",
    code: "3170720",
    semester: 7,
    category: "Elective",
    description:
      "Semester 7 cyber security concepts covering cryptography, authentication, and secure systems.",
    syllabusPdf: "/pdfs/syllabus/information-security-syllabus.pdf",
    notesStatus: "not-applicable",
    pyqStatus: "available",
    pyqSlug: "information-security",
    heroBadge: "Security Foundations",
    features: [
      "Security principles overview",
      "Semester 7 subject scaffold",
      "Future notes and PYQs",
      "Exam-prep placeholder",
    ],
    faqs: [
      {
        question: "How is this subject represented on the site?",
        answer: "It now appears as a Semester 7 subject card and a dedicated subject overview route.",
      },
    ],
    relatedSubjects: ["distributed-system", "digital-forensics"],
  },
  "parallel-and-distributed-computing": {
    slug: "parallel-and-distributed-computing",
    title: "Parallel and Distributed Computing",
    code: "3170721",
    semester: 7,
    category: "Elective",
    description:
      "Semester 7 coverage of concurrency, parallelism, scheduling, and distributed execution patterns.",
    syllabusPdf: "/pdfs/syllabus/parallel-and-distributed-computing-syllabus.pdf",
    notesStatus: "not-applicable",
    pyqStatus: "available",
    pyqSlug: "parallel-and-distributed-computing",
    heroBadge: "Parallel Systems",
    features: [
      "Concurrency and scheduling",
      "Parallel architecture overview",
      "Semester 7 structure",
      "Upcoming resources",
    ],
    faqs: [
      {
        question: "Is this subject ready for study?",
        answer: "The entry is prepared for navigation and overview access while detailed materials are still pending.",
      },
    ],
    relatedSubjects: ["distributed-system", "big-data-analytics"],
  },
  "big-data-analytics": {
    slug: "big-data-analytics",
    title: "Big Data Analytics",
    code: "3170722",
    semester: 7,
    category: "Elective",
    description:
      "Semester 7 big data analytics overview for large-scale data processing and insights.",
    syllabusPdf: "/pdfs/syllabus/big-data-analytics-syllabus.pdf",
    notesStatus: "not-applicable",
    pyqStatus: "available",
    pyqSlug: "big-data-analytics",
    heroBadge: "Data-Driven Insights",
    features: [
      "Analytics pipeline overview",
      "Big data processing concepts",
      "Semester 7 support",
      "Resource expansion planned",
    ],
    faqs: [
      {
        question: "What resources are available right now?",
        answer: "The subject entry and overview are live, but notes and PYQ pages are still pending.",
      },
    ],
    relatedSubjects: ["cloud-computing", "machine-learning"],
  },
  "natural-language-processing": {
    slug: "natural-language-processing",
    title: "Natural Language Processing",
    code: "3170723",
    semester: 7,
    category: "Elective",
    description:
      "Semester 7 NLP overview for text processing, language models, and semantic understanding.",
    syllabusPdf: "/pdfs/syllabus/natural-language-processing-syllabus.pdf",
    notesStatus: "not-applicable",
    pyqStatus: "available",
    pyqSlug: "natural-language-processing",
    heroBadge: "Language Intelligence",
    features: [
      "Text processing overview",
      "NLP pipeline concepts",
      "Semester 7 support",
      "Future resources",
    ],
    faqs: [
      {
        question: "Will NLP get its own notes page later?",
        answer: "Yes, the site structure is now ready for that addition.",
      },
    ],
    relatedSubjects: ["artificial-intelligence", "machine-learning"],
  },
  "machine-learning": {
    slug: "machine-learning",
    title: "Machine Learning",
    code: "3170724",
    semester: 7,
    category: "Elective",
    description:
      "Semester 7 machine learning overview for common models, evaluation, and practical workflows.",
    syllabusPdf: "/pdfs/syllabus/machine-learning-syllabus.pdf",
    notesStatus: "not-applicable",
    pyqStatus: "available",
    pyqSlug: "machine-learning",
    heroBadge: "Model Building",
    features: [
      "Learning algorithm overview",
      "Evaluation strategy basics",
      "Semester 7 support",
      "Future study packs",
    ],
    faqs: [
      {
        question: "Is Machine Learning now part of Semester 7?",
        answer: "Yes, it is now included in the updated GTU Semester 7 subject list.",
      },
    ],
    relatedSubjects: ["artificial-intelligence", "big-data-analytics"],
  },
  "digital-forensics": {
    slug: "digital-forensics",
    title: "Digital Forensics",
    code: "3170725",
    semester: 7,
    category: "Elective",
    description:
      "Semester 7 digital forensics overview for evidence handling, investigation, and legal processes.",
    syllabusPdf: "/pdfs/syllabus/digital-forensics-syllabus.pdf",
    notesStatus: "not-applicable",
    pyqStatus: "available",
    pyqSlug: "digital-forensics",
    heroBadge: "Investigation & Evidence",
    features: [
      "Forensic workflow overview",
      "Evidence handling concepts",
      "Semester 7 structure",
      "Future resource uploads",
    ],
    faqs: [
      {
        question: "Is this subject available as a resource page?",
        answer: "Yes, it has a subject overview route and will receive further resources later.",
      },
    ],
    relatedSubjects: ["information-security", "mobile-application-development"],
  },
  "mobile-application-development": {
    slug: "mobile-application-development",
    title: "Mobile Application Development",
    code: "3170726",
    semester: 7,
    category: "Elective",
    description:
      "Semester 7 mobile app development overview for interface design, coding, and testing.",
    syllabusPdf: "/pdfs/syllabus/mobile-application-development-syllabus.pdf",
    notesStatus: "not-applicable",
    pyqStatus: "available",
    pyqSlug: "mobile-application-development",
    heroBadge: "App Development",
    features: [
      "Mobile app fundamentals",
      "Design and testing overview",
      "Semester 7 support",
      "Future resources",
    ],
    faqs: [
      {
        question: "What is currently available?",
        answer: "The subject now appears in the Semester 7 catalog and routes correctly without broken links.",
      },
    ],
    relatedSubjects: ["mobile-computing-and-wireless-communication", "digital-forensics"],
  },
};
