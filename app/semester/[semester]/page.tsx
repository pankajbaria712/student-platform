import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import {
  Book,
  FileText,
  History,
  Crown,
  GraduationCap,
  ChevronRight,
  Cpu,
  Code,
  Binary,
  Globe,
  Database,
  Terminal,
  Wifi,
  BarChart3,
  Palette,
  UserCheck,
  Heart,
  Cloud,
  ShieldCheck,
  Sparkles,
  Zap,
  Briefcase,
  Smartphone,
  Wrench,
} from "lucide-react";
import ActionButton from "@/components/ActionButton";
import Disclaimer from "@/components/Disclaimer";

export function generateMetadata({ params }: { params: { semester: string } }): Metadata {
  const data = semesterData[params.semester] || semesterData["6"];

  return {
    title: `GTU Semester ${params.semester} — Computer Engineering`,
    description: `GTU Semester ${params.semester} resources for Computer Engineering students. Access syllabus PDFs, PYQs, and exam-ready subject guides.`,
    keywords: [
      `GTU Semester ${params.semester}`,
      "GTU study material",
      "GTU PYQ papers",
      "GTU viva questions",
      "GTU notes",
    ],
    openGraph: {
      title: `GTU Semester ${params.semester} — Computer Engineering`,
      description: data.subtitle,
      url: `https://gtustudenthub.vercel.app/semester/${params.semester}`,
      images: ["/image.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: `GTU Semester ${params.semester} — Computer Engineering`,
      description: data.subtitle,
      images: ["/image.png"],
    },
    alternates: {
      canonical: `https://gtustudenthub.vercel.app/semester/${params.semester}`,
    },
  };
}

const semesterData = {
  "1": {
    heading: "Semester 1",
    subtitle:
      "Foundation subjects for first-year engineering students.",
    subjects: [
      {
        code: "3110002",
        name: "English",
        credits: 3,
        category: "Humanities and Social Science",
        icon: <Book className="text-sky-400" />,
        notesLink: "#",
        syllabusPdf: "#",
        pyqLink: "#",
        description:
          "Communication skills, grammar, and technical English for engineering academics.",
      },
      {
        code: "3110003",
        name: "Programming for Problem Solving",
        credits: 4,
        category: "Engineering Science",
        icon: <Code className="text-orange-400" />,
        notesLink: "#",
        syllabusPdf: "#",
        pyqLink: "#",
        description:
          "Problem solving techniques, algorithms, and introductory programming concepts.",
      },
      {
        code: "3110005",
        name: "Basic Electrical Engineering",
        credits: 4,
        category: "Engineering Science",
        icon: <Zap className="text-amber-400" />,
        notesLink: "#",
        syllabusPdf: "#",
        pyqLink: "#",
        description:
          "Fundamentals of electrical circuits, machines, and power systems.",
      },
      {
        code: "3110006",
        name: "Basic Mechanical Engineering",
        credits: 4,
        category: "Engineering Science",
        icon: <Cpu className="text-emerald-400" />,
        notesLink: "#",
        syllabusPdf: "#",
        pyqLink: "#",
        description:
          "Mechanical concepts, manufacturing basics, and engineering fundamentals.",
      },
      {
        code: "3110007",
        name: "Environmental Sciences",
        credits: 0,
        category: "Mandatory",
        icon: <Cloud className="text-cyan-400" />,
        notesLink: "#",
        syllabusPdf: "#",
        pyqLink: "#",
        description:
          "Environmental awareness, ecosystems, and sustainable development basics.",
      },
      {
        code: "3110012",
        name: "Workshop/Manufacturing Practices",
        credits: 2,
        category: "Engineering Science",
        icon: <Wrench className="text-violet-400" />,
        notesLink: "#",
        syllabusPdf: "#",
        pyqLink: "#",
        description:
          "Hands-on workshop practices, fabrication skills, and manufacturing methods.",
      },
      {
        code: "3110013",
        name: "Engineering Graphics & Design",
        credits: 4,
        category: "Engineering Science",
        icon: <Palette className="text-purple-400" />,
        notesLink: "#",
        syllabusPdf: "#",
        pyqLink: "#",
        description:
          "Technical drawing, visualization, and engineering design fundamentals.",
      },
      {
        code: "3110014",
        name: "Mathematics - 1",
        credits: 5,
        category: "Basic Science",
        icon: <BarChart3 className="text-red-400" />,
        notesLink: "#",
        syllabusPdf: "#",
        pyqLink: "#",
        description:
          "Calculus, differential equations, and mathematical foundations for engineering.",
      },
      {
        code: "3110015",
        name: "Mathematics - 2",
        credits: 5,
        category: "Basic Science",
        icon: <BarChart3 className="text-red-400" />,
        notesLink: "#",
        syllabusPdf: "#",
        pyqLink: "#",
        description:
          "Advanced mathematics concepts including linear algebra and vector calculus.",
      },
      {
        code: "3110016",
        name: "Basic Electronics",
        credits: 4,
        category: "Engineering Science",
        icon: <Binary className="text-blue-400" />,
        notesLink: "#",
        syllabusPdf: "#",
        pyqLink: "#",
        description:
          "Electronic devices, circuits, and basic semiconductor concepts.",
      },
      {
        code: "3110017",
        name: "Induction Program",
        credits: 0,
        category: "Mandatory",
        icon: <UserCheck className="text-emerald-400" />,
        notesLink: "#",
        syllabusPdf: "#",
        pyqLink: "#",
        description:
          "Orientation and induction activities for a smooth transition into engineering life.",
      },
      {
        code: "3110018",
        name: "Physics",
        credits: 4,
        category: "Basic Science (Elective)",
        icon: <Globe className="text-pink-400" />,
        notesLink: "#",
        syllabusPdf: "#",
        pyqLink: "#",
        description:
          "Core physics principles covering mechanics, optics, and modern physics.",
      },
    ],
  },
  "3": {
    heading: "Semester 3",
    subtitle:
      "Subjects from the provided GTU semester 3 syllabus data.",
    subjects: [
      {
        code: "3130004",
        name: "Effective Technical Communication",
        credits: 3,
        category: "Humanities and Social Science",
        icon: <Book className="text-sky-400" />,
        notesLink: "#",
        syllabusPdf: "#",
        pyqLink: "#",
        description:
          "Communication strategies, technical writing, and professional presentation skills.",
      },
      {
        code: "3130006",
        name: "Probability and Statistics",
        credits: 5,
        category: "Basic Science",
        icon: <BarChart3 className="text-red-400" />,
        notesLink: "#",
        syllabusPdf: "#",
        pyqLink: "#",
        description:
          "Random variables, distributions, and statistical analysis for engineering.",
      },
      {
        code: "3130007",
        name: "Indian Constitution",
        credits: 0,
        category: "Mandatory",
        icon: <Globe className="text-pink-400" />,
        notesLink: "#",
        syllabusPdf: "#",
        pyqLink: "#",
        description:
          "The Indian Constitution, fundamental rights, duties, and governance structure.",
      },
      {
        code: "3130008",
        name: "Design Engineering - I A",
        credits: 1,
        category: "Project Work",
        icon: <Palette className="text-purple-400" />,
        notesLink: "#",
        syllabusPdf: "#",
        pyqLink: "#",
        description:
          "Design-thinking, prototype development, and engineering creativity.",
      },
      {
        code: "3130702",
        name: "Data Structures",
        credits: 5,
        category: "Professional Core",
        icon: <Cpu className="text-emerald-400" />,
        notesLink: "#",
        syllabusPdf: "#",
        pyqLink: "#",
        description:
          "Stack, queue, tree, and graph structures with algorithmic performance analysis.",
      },
      {
        code: "3130703",
        name: "Database Management Systems",
        credits: 5,
        category: "Professional Core",
        icon: <Database className="text-yellow-400" />,
        notesLink: "#",
        syllabusPdf: "#",
        pyqLink: "#",
        description:
          "Relational databases, SQL, normalization, and transaction processing.",
      },
      {
        code: "3130704",
        name: "Digital Fundamentals",
        credits: 4,
        category: "Engineering Science",
        icon: <Binary className="text-blue-400" />,
        notesLink: "#",
        syllabusPdf: "#",
        pyqLink: "#",
        description:
          "Digital logic, number systems, and fundamentals of computer hardware.",
      },
    ],
  },
  "4": {
    heading: "Semester 4",
    subtitle:
      "Core engineering and programming subjects from the provided GTU semester 4 syllabus data.",
    subjects: [
      {
        code: "3140005",
        name: "Design Engineering - I B",
        credits: 1,
        category: "Project Work",
        icon: <Palette className="text-purple-400" />,
        notesLink: "#",
        syllabusPdf: "#",
        pyqLink: "#",
        description:
          "Design thinking, project development, and engineering problem solving.",
      },
      {
        code: "3140702",
        name: "Operating System",
        credits: 5,
        category: "Professional Core",
        icon: <Cpu className="text-emerald-400" />,
        notesLink: "#",
        syllabusPdf: "#",
        pyqLink: "#",
        description:
          "Operating system concepts and practical implementation for engineering students.",
      },
      {
        code: "3140705",
        name: "Object Oriented Programming - I",
        credits: 5,
        category: "Professional Core",
        icon: <Code className="text-orange-400" />,
        notesLink: "#",
        syllabusPdf: "#",
        pyqLink: "#",
        description:
          "Core object-oriented programming concepts with practical implementation.",
      },
      {
        code: "3140707",
        name: "Computer Organization & Architecture",
        credits: 4,
        category: "Professional Core",
        icon: <Binary className="text-blue-400" />,
        notesLink: "#",
        syllabusPdf: "#",
        pyqLink: "#",
        description:
          "CPU design, memory hierarchy, and instruction cycle fundamentals.",
      },
      {
        code: "3140708",
        name: "Discrete Mathematics",
        credits: 5,
        category: "Basic Science",
        icon: <BarChart3 className="text-red-400" />,
        notesLink: "#",
        syllabusPdf: "#",
        pyqLink: "#",
        description:
          "Discrete structures, logic, and mathematical foundations for computer engineering.",
      },
      {
        code: "3140709",
        name: "Principles of Economics and Management",
        credits: 3,
        category: "Humanities and Social Science",
        icon: <Briefcase className="text-amber-400" />,
        notesLink: "#",
        syllabusPdf: "#",
        pyqLink: "#",
        description:
          "Economic principles and management concepts for engineering professionals.",
      },
    ],
  },
  "5": {
    heading: "Semester 5",
    subtitle:
      "Software design, data science, ethics, and communication for GTU Computer Engineering.",
    subjects: [
      {
        code: "3150711",
        slug: "software-engineering",
        name: "Software Engineering",
        credits: 4,
        category: "Core",
        icon: <Code className="text-orange-400" />,
        notesLink: "/notes/software-engineering",
        syllabusPdf: "/pdfs/syllabus/software-engineering-syllabus.pdf",
        pyqLink: "/pyq/software-engineering",
        description:
          "Software lifecycle, requirements, agile design, testing, and delivery.",
      },
      {
        code: "3150713",
        slug: "python-for-data-science",
        name: "Python for Data Science",
        credits: 4,
        category: "Elective",
        icon: <Cloud className="text-sky-400" />,
        notesLink: "/notes/python-for-data-science",
        syllabusPdf: "/pdfs/syllabus/python-for-data-science-syllabus.pdf",
        pyqLink: "/pyq/python-for-data-science",
        description:
          "Python data science libraries, analysis, visualization, and model building.",
      },
      {
        code: "3150709",
        slug: "professional-ethics",
        name: "Professional Ethics",
        credits: 2,
        category: "Humanities",
        icon: <ShieldCheck className="text-cyan-400" />,
        notesLink: "/notes/professional-ethics",
        syllabusPdf: "/pdfs/syllabus/professional-ethics-syllabus.pdf",
        pyqLink: "/pyq/professional-ethics",
        description:
          "Ethical decision-making, professional conduct, and engineering responsibility.",
      },
      {
        code: "3150005",
        slug: "ipdc-1",
        name: "Integrated Personality Development Course - I",
        credits: 2,
        category: "Humanities",
        icon: <Heart className="text-rose-400" />,
        notesLink: "/notes/ipdc-1",
        syllabusPdf:
          "/pdfs/syllabus/integrated-personality-development-course-1-syllabus.pdf",
        pyqLink: "/pyq/ipdc-1",
        description:
          "Professional growth, communication, leadership, and life skills for engineers.",
      },
      {
        code: "3150001",
        name: "Design Engineering IIA",
        credits: 1,
        category: "Project Work",
        icon: <Palette className="text-purple-400" />,
        notesLink: "#",
        syllabusPdf: "/pdfs/syllabus/design-engineering-IIA-syllabus.pdf",
        pyqLink: "#",
        description:
          "Design modeling, prototype planning, and engineering creativity. Resources coming soon.",
      },
      {
        code: "3150710",
        slug: "computer-networks",
        name: "Computer Networks",
        credits: 4,
        category: "Core",
        icon: <Wifi className="text-indigo-400" />,
        notesLink: "/notes/computer-networks",
        syllabusPdf: "/pdfs/syllabus/computer-networks-syllabus.pdf",
        pyqLink: "/pyq/computer-networks",
        description:
          "Network architectures, routing, protocols, and secure data communication.",
      },
      {
        code: "3150703",
        slug: "analysis-and-design-of-algorithms",
        name: "Analysis and Design of Algorithms",
        credits: 5,
        category: "Core",
        icon: <Binary className="text-blue-400" />,
        notesLink: "/notes/analysis-and-design-of-algorithms",
        syllabusPdf: "/pdfs/syllabus/analysis-and-design-of-algorithms-syllabus.pdf",
        pyqLink: "/pyq/analysis-and-design-of-algorithms",
        description:
          "Algorithm design techniques, complexity analysis, and optimization strategies.",
      },
    ],
  },
  "6": {
    heading: "Semester 6",
    subtitle: "Academic inventory for advanced core and elective subjects.",
    subjects: [
      {
        code: "3160704",
        name: "Theory of Computation",
        credits: 5,
        category: "Professional Core",
        icon: <Binary className="text-blue-400" />,
        notesLink: "/subject/theory-of-computation",
        syllabusPdf: "/pdfs/syllabus/theory-of-computation-syllabus.pdf",
        pyqLink: "/pyq/theory-of-computation",
        description:
          "Master automata theory, formal languages, and the mathematical foundations of computing.",
      },
      {
        code: "3160707",
        name: "Advanced Java Programming",
        credits: 4,
        category: "Professional Elective",
        icon: <Code className="text-orange-400" />,
        notesLink: "/notes/advanced-java-programming",
        syllabusPdf: "/pdfs/syllabus/advanced-java-programming-syllabus.pdf",
        pyqLink: "/pyq/advanced-java-programming",
        description:
          "Deep dive into enterprise applications, networking, and advanced database connectivity.",
      },
      {
        code: "3160710",
        name: "Microprocessor & Interfacing",
        credits: 4,
        category: "Professional Core",
        icon: <Cpu className="text-emerald-400" />,
        notesLink: "#",
        syllabusPdf:
          "/pdfs/syllabus/microprocessor-and-interfacing-syllabus.pdf",
        pyqLink: "/pyq/microprocessor-and-interfacing",
        description:
          "8086 microprocessor architecture, interfacing techniques, DMA, interrupts, and serial communication.",
      },
      {
        code: "3160713",
        name: "Web Programming",
        credits: 4,
        category: "Professional Core",
        icon: <Globe className="text-pink-400" />,
        notesLink: "#",
        syllabusPdf: "/pdfs/syllabus/web-programming-syllabus.pdf",
        pyqLink: "/pyq/web-programming",
        description:
          "Full-stack development techniques including modern frameworks and responsive design.",
      },
      {
        code: "3160714",
        name: "Data Mining",
        credits: 4,
        category: "Professional Elective",
        icon: <Database className="text-yellow-400" />,
        notesLink: "#",
        syllabusPdf: "/pdfs/syllabus/data-mining-syllabus.pdf",
        pyqLink: "/pyq/data-mining",
        description:
          "Discover patterns in large datasets using clustering, classification, and association rules.",
      },
      {
        code: "3160715",
        name: "System Software",
        credits: 4,
        category: "Professional Core",
        icon: <Terminal className="text-cyan-400" />,
        notesLink: "#",
        syllabusPdf: "/pdfs/syllabus/system-software-syllabus.pdf",
        pyqLink: "/pyq/system-software",
        description:
          "Understanding assemblers, macro processors, loaders, and compiler construction phases.",
      },
      {
        code: "3160716",
        name: "IOT & Applications",
        credits: 3,
        category: "Professional Elective",
        icon: <Wifi className="text-indigo-400" />,
        notesLink: "#",
        syllabusPdf: "/pdfs/syllabus/iot-and-applications-syllabus.pdf",
        pyqLink: "/pyq/iot-and-applications",
        description:
          "Exploring the ecosystem of connected devices, sensors, and cloud integration protocols.",
      },
      {
        code: "3160717",
        name: "Data Visualization",
        credits: 3,
        category: "Professional Elective",
        icon: <BarChart3 className="text-red-400" />,
        notesLink: "#",
        syllabusPdf: "/pdfs/syllabus/data-visualization-syllabus.pdf",
        pyqLink: "/pyq/data-visualization",
        description:
          "Transform complex data into interactive visual stories using modern visualization tools.",
      },
      {
        code: "3160001",
        name: "Design Engineering II B",
        credits: 1,
        category: "Project Work",
        icon: <Palette className="text-purple-400" />,
        notesLink: "#",
        syllabusPdf: "#",
        pyqLink: "#",
        description:
          "Creative problem-solving through design thinking and prototype development.",
      },
      {
        code: "3160002",
        name: "Contributor Personality",
        credits: 2,
        category: "Humanities",
        icon: <UserCheck className="text-teal-400" />,
        notesLink: "#",
        syllabusPdf:
          "/pdfs/syllabus/contributor-personality-development-program-syllabus.pdf",
        pyqLink: "/pyq/contributor-personality-development-program",
        description:
          "Building the mindset of a contributor to create value in professional and social environments.",
      },
      {
        code: "3160003",
        name: "IPDC Course",
        credits: 2,
        category: "Humanities",
        icon: <Heart className="text-rose-400" />,
        notesLink: "#",
        syllabusPdf:
          "/pdfs/syllabus/integrated-personality-development-course-syllabus.pdf",
        pyqLink: "/pyq/integrated-personality-development-course",
        description:
          "Integrated personality development focusing on ethics, values, and holistic growth.",
      },
    ],
  },
  "7": {
    heading: "Semester 7",
    subtitle: "GTU BE Computer Engineering Semester 7 subjects for advanced electives, systems, and emerging technologies.",
    subjects: [
      {
        code: "3170001",
        slug: "summer-internship",
        name: "Summer Internship",
        credits: 2,
        category: "Internship",
        icon: <Briefcase className="text-amber-400" />,
        notesLink: "#",
        syllabusPdf: "/pdfs/syllabus/summer-internship-syllabus.pdf",
        pyqLink: "#",
        vivaLink: "#",
        description: "Practical industry exposure and internship reporting aligned with GTU Semester 7 expectations.",
      },
      {
        code: "3170701",
        slug: "compiler-design",
        name: "Compiler Design",
        credits: 4,
        category: "Core",
        icon: <Terminal className="text-cyan-400" />,
        notesLink: "#",
        syllabusPdf: "/pdfs/syllabus/compiler-design-syllabus.pdf",
        pyqLink: "/pyq/compiler-design",
        vivaLink: "/semester/7/compiler-design/viva",
        description: "Lexical analysis, parsing, semantic processing, and code generation fundamentals.",
      },
      {
        code: "3170710",
        slug: "mobile-computing-and-wireless-communication",
        name: "Mobile Computing and Wireless Communication",
        credits: 4,
        category: "Elective",
        icon: <Wifi className="text-indigo-400" />,
        notesLink: "#",
        syllabusPdf: "/pdfs/syllabus/mobile-computing-and-wireless-communication-syllabus.pdf",
        pyqLink: "/pyq/mobile-computing-and-wireless-communication",
        vivaLink: "/semester/7/mobile-computing-and-wireless-communication/viva",
        description: "Wireless networks, mobile architectures, mobility management, and communication systems.",
      },
      {
        code: "3170716",
        slug: "artificial-intelligence",
        name: "Artificial Intelligence",
        credits: 4,
        category: "Elective",
        icon: <Cpu className="text-emerald-400" />,
        notesLink: "#",
        syllabusPdf: "/pdfs/syllabus/artificial-intelligence-syllabus.pdf",
        pyqLink: "/pyq/artificial-intelligence",
        vivaLink: "/semester/7/artificial-intelligence/viva",
        description: "Search, knowledge representation, logic, planning, and intelligent system reasoning.",
      },
      {
        code: "3170717",
        slug: "cloud-computing",
        name: "Cloud Computing",
        credits: 4,
        category: "Elective",
        icon: <Cloud className="text-sky-400" />,
        notesLink: "#",
        syllabusPdf: "/pdfs/syllabus/cloud-computing-syllabus.pdf",
        pyqLink: "/pyq/cloud-computing",
        vivaLink: "/semester/7/cloud-computing/viva",
        description: "Cloud service models, virtualization, deployment strategies, and scalable infrastructure.",
      },
      {
        code: "3170718",
        slug: "information-retrieval",
        name: "Information Retrieval",
        credits: 4,
        category: "Elective",
        icon: <Database className="text-yellow-400" />,
        notesLink: "#",
        syllabusPdf: "/pdfs/syllabus/information-retrieval-syllabus.pdf",
        pyqLink: "/pyq/information-retrieval",
        vivaLink: "/semester/7/information-retrieval/viva",
        description: "Indexing, ranking, retrieval models, and search engine design principles.",
      },
      {
        code: "3170719",
        slug: "distributed-system",
        name: "Distributed System",
        credits: 4,
        category: "Elective",
        icon: <Globe className="text-pink-400" />,
        notesLink: "#",
        syllabusPdf: "/pdfs/syllabus/distributed-system-syllabus.pdf",
        pyqLink: "/pyq/distributed-system",
        vivaLink: "/semester/7/distributed-system/viva",
        description: "Distributed communication, synchronization, consistency, fault tolerance, and coordination.",
      },
      {
        code: "3170720",
        slug: "information-security",
        name: "Information Security",
        credits: 4,
        category: "Elective",
        icon: <ShieldCheck className="text-cyan-400" />,
        notesLink: "#",
        syllabusPdf: "/pdfs/syllabus/information-security-syllabus.pdf",
        pyqLink: "/pyq/information-security",
        vivaLink: "/semester/7/information-security/viva",
        description: "Cryptography, secure systems, authentication, and risk mitigation techniques.",
      },
      {
        code: "3170721",
        slug: "parallel-and-distributed-computing",
        name: "Parallel and Distributed Computing",
        credits: 4,
        category: "Elective",
        icon: <Binary className="text-blue-400" />,
        notesLink: "#",
        syllabusPdf: "/pdfs/syllabus/parallel-and-distributed-computing-syllabus.pdf",
        pyqLink: "/pyq/parallel-and-distributed-computing",
        vivaLink: "/semester/7/parallel-and-distributed-computing/viva",
        description: "Parallel architectures, concurrency models, scheduling, and distributed execution patterns.",
      },
      {
        code: "3170722",
        slug: "big-data-analytics",
        name: "Big Data Analytics",
        credits: 4,
        category: "Elective",
        icon: <BarChart3 className="text-red-400" />,
        notesLink: "#",
        syllabusPdf: "/pdfs/syllabus/big-data-analytics-syllabus.pdf",
        pyqLink: "/pyq/big-data-analytics",
        vivaLink: "/semester/7/big-data-analytics/viva",
        description: "Big data processing, analytics pipelines, and data-driven decision making.",
      },
      {
        code: "3170723",
        slug: "natural-language-processing",
        name: "Natural Language Processing",
        credits: 4,
        category: "Elective",
        icon: <Book className="text-slate-400" />,
        notesLink: "#",
        syllabusPdf: "/pdfs/syllabus/natural-language-processing-syllabus.pdf",
        pyqLink: "/pyq/natural-language-processing",
        vivaLink: "/semester/7/natural-language-processing/viva",
        description: "Language modeling, text processing, NLP pipelines, and semantic interpretation.",
      },
      {
        code: "3170724",
        slug: "machine-learning",
        name: "Machine Learning",
        credits: 4,
        category: "Elective",
        icon: <Sparkles className="text-violet-400" />,
        notesLink: "#",
        syllabusPdf: "/pdfs/syllabus/machine-learning-syllabus.pdf",
        pyqLink: "/pyq/machine-learning",
        vivaLink: "/semester/7/machine-learning/viva",
        description: "Supervised and unsupervised learning, evaluation, and practical model building.",
      },
      {
        code: "3170725",
        slug: "digital-forensics",
        name: "Digital Forensics",
        credits: 4,
        category: "Elective",
        icon: <ShieldCheck className="text-cyan-400" />,
        notesLink: "#",
        syllabusPdf: "/pdfs/syllabus/digital-forensics-syllabus.pdf",
        pyqLink: "/pyq/digital-forensics",
        vivaLink: "/semester/7/digital-forensics/viva",
        description: "Evidence collection, investigation workflows, forensic tools, and legal aspects.",
      },
      {
        code: "3170726",
        slug: "mobile-application-development",
        name: "Mobile Application Development",
        credits: 4,
        category: "Elective",
        icon: <Smartphone className="text-emerald-400" />,
        notesLink: "#",
        syllabusPdf: "/pdfs/syllabus/mobile-application-development-syllabus.pdf",
        pyqLink: "/pyq/mobile-application-development",
        vivaLink: "/semester/7/mobile-application-development/viva",
        description: "Designing, building, and testing modern mobile apps for current platforms.",
      },
    ],
  },
  "8": {
    heading: "Semester 8",
    subtitle: "Capstone work, industrial training, and advanced electives.",
    subjects: [
      {
        code: "3160801",
        name: "Capstone Project",
        credits: 6,
        category: "Project Work",
        icon: <Palette className="text-purple-400" />,
        notesLink: "#",
        syllabusPdf: "#",
        pyqLink: "#",
        description:
          "Design, build, and present a complete engineering solution.",
      },
      {
        code: "3160802",
        name: "Entrepreneurship",
        credits: 3,
        category: "Humanities",
        icon: <UserCheck className="text-teal-400" />,
        notesLink: "#",
        syllabusPdf: "#",
        pyqLink: "#",
        description:
          "Business planning, startups, and innovation management for engineers.",
      },
      {
        code: "3160803",
        name: "Industrial Training",
        credits: 2,
        category: "Professional Elective",
        icon: <Globe className="text-pink-400" />,
        notesLink: "#",
        syllabusPdf: "#",
        pyqLink: "#",
        description:
          "Industry internship experience, reporting, and professional practices.",
      },
      {
        code: "3160804",
        name: "Advanced AI Systems",
        credits: 4,
        category: "Elective",
        icon: <Zap className="text-yellow-400" />,
        notesLink: "#",
        syllabusPdf: "#",
        pyqLink: "#",
        description:
          "AI architectures, natural language, and intelligent system design.",
      },
      {
        code: "3160805",
        name: "Research Methodology",
        credits: 3,
        category: "Core",
        icon: <Book className="text-slate-400" />,
        notesLink: "#",
        syllabusPdf: "#",
        pyqLink: "#",
        description:
          "Research design, evaluation, documentation, and academic reporting.",
      },
    ],
  },
};

interface SemesterPageProps {
  params: {
    semester: string;
  };
}

const createSubjectSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const SubjectCard = ({ subject, semester, activeSemester = true }) => (
  <div className={`group relative rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-all duration-500 hover:border-indigo-500/30 hover:bg-white/[0.04] sm:rounded-[2rem] sm:p-7 ${activeSemester ? "" : "opacity-75 saturate-50"}`}>
    <div className="relative z-10">
      <div className="flex items-start justify-between mb-5">
        <div className="h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/20 transition-all duration-500">
          {React.cloneElement(subject.icon, { size: 28 })}
        </div>
        <div className="flex flex-col items-end">
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-black text-indigo-400 uppercase tracking-widest">
            {subject.credits} Credits
          </span>
          <span className="mt-2 text-[10px] text-gray-500 font-medium tracking-wider">
            {subject.code}
          </span>
        </div>
      </div>

      <h3 className="mb-2 line-clamp-2 text-lg font-bold text-white transition-colors group-hover:text-indigo-400 sm:text-xl sm:line-clamp-1">
        {subject.name}
      </h3>
      <p className="text-gray-500 text-xs mb-6 leading-relaxed line-clamp-2 h-8">
        {subject.description}
      </p>

      <div className="grid grid-cols-1 gap-2 border-t border-white/5 pt-5 sm:grid-cols-2">
        <div className="w-full">
          <ActionButton
            icon={Book}
            label="Notes"
            href={subject.notesLink}
            primary
            className="w-full"
          />
        </div>

        <div className="w-full">
          <ActionButton
            icon={FileText}
            label="Syllabus"
            href={subject.syllabusPdf}
            newTab
            className="w-full"
          />
        </div>

        <div className="w-full">
          <ActionButton icon={History} label="Papers" href={subject.pyqLink} className="w-full" />
        </div>

        <div className="w-full">
          <ActionButton
            icon={Sparkles}
            label="Viva Questions"
            href={subject.vivaLink ?? `/semester/${semester}/${subject.slug ?? createSubjectSlug(subject.name)}/viva`}
            highlight
            className="w-full"
          />
        </div>
      </div>
      {(subject.syllabusPdf !== "#" || subject.pyqLink !== "#" || subject.slug) && (
        <p className="mt-4 text-[10px] text-gray-400">
          Source:{" "}
          <a
            href="https://www.gtu.ac.in"
            target="_blank"
            rel="noreferrer"
            className="text-indigo-300 hover:text-indigo-100"
          >
            GTU
          </a>
        </p>
      )}
    </div>
  </div>
);

export default function SemesterPage({ params }: SemesterPageProps) {
  const data = semesterData[params.semester] || semesterData["6"];
  const isActiveSemester = ["3", "4", "5", "6", "7"].includes(params.semester);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050505] font-sans text-white antialiased selection:bg-indigo-500/30">
      {/* Dynamic Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] h-[50%] w-[50%] animate-pulse rounded-full bg-indigo-600/5 blur-[120px]" />
        <div className="absolute bottom-[-5%] left-[-5%] h-[40%] w-[40%] rounded-full bg-purple-600/5 blur-[100px]" />
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-page py-12 sm:py-16 md:py-20">
        {/* Page Header */}
        <header className="mb-12 sm:mb-16 md:mb-20">
          {!isActiveSemester ? (
            <div className="mb-6 rounded-3xl border border-amber-400/20 bg-amber-400/10 p-6 text-amber-100 shadow-lg shadow-amber-500/10">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-200">
                Coming Soon
              </p>
              <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
                Semester {params.semester} is on the roadmap.
              </h2>
              <p className="mt-3 text-sm leading-6 text-gray-200">
                Semester 6 is the current focus. Upcoming semesters are being prepared with notes, PYQs, and solution packs.
              </p>
            </div>
          ) : null}

          <div className="mb-4 text-sm text-gray-400">
            <Link href="/" className="text-indigo-400 hover:text-indigo-300">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="font-semibold text-white">Semester {params.semester}</span>
          </div>

          <div className="mb-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400">
            <GraduationCap size={14} className="shrink-0" />
            <span>BE Computer Engineering</span>
            <ChevronRight size={10} className="hidden text-gray-700 sm:inline" />
            <span className="text-gray-500">{data.heading}</span>
          </div>
          <h1 className="mb-4 bg-gradient-to-r from-white via-white to-gray-500 bg-clip-text text-4xl font-black leading-[1.1] tracking-tighter text-transparent sm:text-5xl md:mb-6 md:text-6xl lg:text-7xl">
            Semester {params.semester} <span className="text-indigo-500 italic">Academic Inventory</span>
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
            {data.subtitle}
          </p>
        </header>

        {/* Subjects Grid - Optimized for all 11 subjects */}
        <div className="mb-16 grid grid-cols-1 gap-4 sm:mb-20 sm:gap-5 md:grid-cols-2 lg:mb-24 lg:grid-cols-3">
          {data.subjects.map((sub) => (
            <SubjectCard
              key={sub.code}
              subject={sub}
              semester={params.semester}
              activeSemester={isActiveSemester}
            />
          ))}

          
        </div>
        <div className="mb-12">
          <h3 className="mb-4 text-lg font-bold text-white">Explore Other Semesters</h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
            {['1','2','3','4','5','6','7'].map((s) => (
              <a
                key={s}
                href={`/semester/${s}`}
                className="rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2 text-center text-sm text-slate-200 transition hover:bg-indigo-500/10 hover:border-indigo-500/30"
              >
                Semester {s}
              </a>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <Disclaimer />
        </div>

      </main>

      <footer className="relative z-10 border-t border-white/5 px-page py-10 pb-safe sm:py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 opacity-40 md:flex-row">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="h-6 w-6 rounded bg-indigo-600" />
            <span className="text-xs font-black tracking-tighter uppercase">
              EduNext Student Portal
            </span>
          </div>
          <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">
            © 2024 Educational Resources Deployment.
          </p>
        </div>
      </footer>
    </div>
  );
}
