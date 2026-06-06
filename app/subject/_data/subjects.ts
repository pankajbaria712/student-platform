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
};
