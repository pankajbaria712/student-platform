import React from "react";
import {
  Book,
  FileText,
  History,
  Crown,
  GraduationCap,
  ChevronRight,
  ArrowUpRight,
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
  Zap,
} from "lucide-react";

const semesterData = {
  "3": {
    heading: "Semester 3",
    subtitle:
      "Core science and communication subjects for strong foundational learning.",
    subjects: [
      {
        code: "3130004",
        name: "Effective Technical Communication",
        credits: 3,
        category: "Humanities and Social Science",
        icon: <Book className="text-sky-400" />,
        notesLink: "#",
        syllabusPdf:
          "/pdfs/syllabus/effective-technical-communication-syllabus.pdf",
        pyqLink: "/pyq/effective-technical-communication",
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
        syllabusPdf: "/pdfs/syllabus/probability-and-statistics-syllabus.pdf",
        pyqLink: "/pyq/probability-and-statistics",
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
        syllabusPdf: "/pdfs/syllabus/indian-constitution-syllabus.pdf",
        pyqLink: "/pyq/indian-constitution",
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
        syllabusPdf: "/pdfs/syllabus/design-engineering-IA-syllabus.pdf",
        pyqLink: "/pyq/design-engineering-IA",
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
        syllabusPdf: "/pdfs/syllabus/data-structures-syllabus.pdf",
        pyqLink: "/pyq/data-structures",
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
        syllabusPdf: "/pdfs/syllabus/database-management-systems-syllabus.pdf",
        pyqLink: "/pyq/database-management-systems",
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
        syllabusPdf: "/pdfs/syllabus/digital-fundamentals-syllabus.pdf",
        pyqLink: "/pyq/digital-fundamentals",
        description:
          "Digital logic, number systems, and fundamentals of computer hardware.",
      },
    ],
  },
  "4": {
    heading: "Semester 4",
    subtitle:
      "Systems, networks, databases, and software engineering principles.",
    subjects: [
      {
        code: "3160401",
        name: "Operating Systems",
        credits: 4,
        category: "Core",
        icon: <Cpu className="text-emerald-400" />,
        notesLink: "#",
        syllabusPdf: "#",
        pyqLink: "#",
        description:
          "Process management, memory organization, file systems, and concurrency.",
      },
      {
        code: "3160402",
        name: "Database Management Systems",
        credits: 4,
        category: "Core",
        icon: <Database className="text-yellow-400" />,
        notesLink: "#",
        syllabusPdf: "#",
        pyqLink: "#",
        description:
          "Relational models, SQL, normalization, and transaction processing.",
      },
      {
        code: "3160403",
        name: "Computer Networks",
        credits: 4,
        category: "Core",
        icon: <Wifi className="text-indigo-400" />,
        notesLink: "#",
        syllabusPdf: "#",
        pyqLink: "#",
        description:
          "Network layers, routing, switching, and secure internet protocols.",
      },
      {
        code: "3160404",
        name: "Software Engineering",
        credits: 4,
        category: "Core",
        icon: <Code className="text-orange-400" />,
        notesLink: "#",
        syllabusPdf: "#",
        pyqLink: "#",
        description:
          "Software lifecycle, requirements, testing, and agile collaboration.",
      },
      {
        code: "3160405",
        name: "Probability & Statistics",
        credits: 3,
        category: "Foundation",
        icon: <BarChart3 className="text-red-400" />,
        notesLink: "#",
        syllabusPdf: "#",
        pyqLink: "#",
        description:
          "Statistical methods, random variables, distributions, and estimation.",
      },
    ],
  },
  "5": {
    heading: "Semester 5",
    subtitle: "Advanced programming, web systems, and computing theory.",
    subjects: [
      {
        code: "3160501",
        name: "Theory of Computation",
        credits: 5,
        category: "Core",
        icon: <Binary className="text-blue-400" />,
        notesLink: "/subject/theory-of-computation",
        syllabusPdf: "/pdfs/syllabus/theory-of-computation-syllabus.pdf",
        pyqLink: "/pyq/theory-of-computation",
        description:
          "Master automata theory, formal languages, and mathematical foundations.",
      },
      {
        code: "3160502",
        name: "Advanced Java Programming",
        credits: 4,
        category: "Elective",
        icon: <Code className="text-orange-400" />,
        notesLink: "#",
        syllabusPdf: "/pdfs/syllabus/advanced-java-programming-syllabus.pdf",
        pyqLink: "#",
        description:
          "Enterprise Java concepts, concurrency, and advanced API usage.",
      },
      {
        code: "3160503",
        name: "Web Programming",
        credits: 4,
        category: "Core",
        icon: <Globe className="text-pink-400" />,
        notesLink: "#",
        syllabusPdf: "#",
        pyqLink: "#",
        description:
          "Modern web apps, front-end frameworks, RESTful services, and UX.",
      },
      {
        code: "3160504",
        name: "Microprocessors & Interfacing",
        credits: 4,
        category: "Core",
        icon: <Cpu className="text-emerald-400" />,
        notesLink: "#",
        syllabusPdf: "#",
        pyqLink: "#",
        description:
          "Processor architecture, assembly, and hardware interfacing techniques.",
      },
      {
        code: "3160505",
        name: "Data Mining",
        credits: 4,
        category: "Elective",
        icon: <Database className="text-yellow-400" />,
        notesLink: "#",
        syllabusPdf: "#",
        pyqLink: "#",
        description: "Discovering patterns and knowledge from large datasets.",
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
        notesLink: "#",
        syllabusPdf: "/pdfs/syllabus/advanced-java-programming-syllabus.pdf",
        pyqLink: "#",
        description:
          "Deep dive into enterprise applications, networking, and advanced database connectivity.",
      },
      {
        code: "3160712",
        name: "Microprocessor & Interfacing",
        credits: 4,
        category: "Professional Core",
        icon: <Cpu className="text-emerald-400" />,
        notesLink: "#",
        syllabusPdf: "#",
        pyqLink: "#",
        description:
          "Architecture and programming of 8085/8086 microprocessors and hardware interfacing.",
      },
      {
        code: "3160713",
        name: "Web Programming",
        credits: 4,
        category: "Professional Core",
        icon: <Globe className="text-pink-400" />,
        notesLink: "#",
        syllabusPdf: "#",
        pyqLink: "#",
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
        syllabusPdf: "#",
        pyqLink: "#",
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
        syllabusPdf: "#",
        pyqLink: "#",
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
        syllabusPdf: "#",
        pyqLink: "#",
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
        syllabusPdf: "#",
        pyqLink: "#",
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
        syllabusPdf: "#",
        pyqLink: "#",
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
        syllabusPdf: "#",
        pyqLink: "#",
        description:
          "Integrated personality development focusing on ethics, values, and holistic growth.",
      },
    ],
  },
  "7": {
    heading: "Semester 7",
    subtitle: "Emerging technologies, cloud, and advanced project preparation.",
    subjects: [
      {
        code: "3160701",
        name: "Cloud Computing",
        credits: 4,
        category: "Elective",
        icon: <Cloud className="text-sky-400" />,
        notesLink: "#",
        syllabusPdf: "#",
        pyqLink: "#",
        description:
          "Cloud services, virtualization, deployment, and scalable infrastructure.",
      },
      {
        code: "3160702",
        name: "Mobile Computing",
        credits: 4,
        category: "Core",
        icon: <Wifi className="text-indigo-400" />,
        notesLink: "#",
        syllabusPdf: "#",
        pyqLink: "#",
        description:
          "Mobile platforms, app development, and wireless communication systems.",
      },
      {
        code: "3160703",
        name: "Machine Learning",
        credits: 4,
        category: "Elective",
        icon: <Cpu className="text-emerald-400" />,
        notesLink: "#",
        syllabusPdf: "#",
        pyqLink: "#",
        description:
          "Foundations of learning algorithms, regression, classification, and models.",
      },
      {
        code: "3160704",
        name: "Cyber Security",
        credits: 4,
        category: "Core",
        icon: <ShieldCheck className="text-cyan-400" />,
        notesLink: "#",
        syllabusPdf: "#",
        pyqLink: "#",
        description:
          "Security protocols, threat modeling, and safe system design.",
      },
      {
        code: "3160705",
        name: "Project Management",
        credits: 3,
        category: "Professional Elective",
        icon: <Crown className="text-yellow-400" />,
        notesLink: "#",
        syllabusPdf: "#",
        pyqLink: "#",
        description:
          "Project planning, risk management, and team collaboration strategies.",
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

const ActionButton = ({ icon: Icon, label, href, primary = false }) => {
  const isPdf = typeof href === "string" && href.toLowerCase().endsWith(".pdf");
  const isDisabled = !href || href === "#";
  const baseClasses = `flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-[11px] font-bold transition-all flex-1 ${
    primary
      ? "bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-500/20 border border-indigo-400/20"
      : "bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/30 hover:text-white"
  }`;

  if (isDisabled) {
    return (
      <div
        className={`${baseClasses} cursor-not-allowed opacity-40`}
        aria-disabled="true"
      >
        <Icon size={14} />
        {label}
      </div>
    );
  }

  return (
    <a
      href={href}
      target={isPdf ? "_blank" : undefined}
      rel={isPdf ? "noopener noreferrer" : undefined}
      className={baseClasses}
    >
      <Icon size={14} />
      {label}
    </a>
  );
};

const SubjectCard = ({ subject }) => (
  <div className="group relative rounded-[2rem] bg-white/[0.02] border border-white/5 p-7 hover:bg-white/[0.04] transition-all duration-500 hover:border-indigo-500/30">
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

      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors line-clamp-1">
        {subject.name}
      </h3>
      <p className="text-gray-500 text-xs mb-6 leading-relaxed line-clamp-2 h-8">
        {subject.description}
      </p>

      <div className="pt-5 border-t border-white/5 flex gap-2">
        <ActionButton
          icon={Book}
          label="Notes"
          href={subject.notesLink}
          primary
        />
        <ActionButton
          icon={FileText}
          label="Syllabus"
          href={subject.syllabusPdf}
        />
        <ActionButton icon={History} label="Papers" href={subject.pyqLink} />
      </div>
    </div>
  </div>
);

export default function SemesterPage({ params }: SemesterPageProps) {
  const data = semesterData[params.semester] || semesterData["6"];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-indigo-500/30 font-sans antialiased overflow-x-hidden">
      {/* Dynamic Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-600/5 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] rounded-full bg-purple-600/5 blur-[100px]" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Page Header */}
        <header className="mb-20">
          <div className="flex items-center gap-2 text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4">
            <GraduationCap size={14} />
            <span>BE Computer Engineering</span>
            <ChevronRight size={10} className="text-gray-700" />
            <span className="text-gray-500">{data.heading}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 bg-gradient-to-r from-white via-white to-gray-500 bg-clip-text text-transparent leading-[1.1]">
            Academic <span className="text-indigo-500 italic">Inventory</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            {data.subtitle}
          </p>
        </header>

        {/* Subjects Grid - Optimized for all 11 subjects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-24">
          {data.subjects.map((sub) => (
            <SubjectCard key={sub.code} subject={sub} />
          ))}

          {/* Quick Stats Bento Card */}
          <div className="rounded-[2rem] bg-indigo-600 p-[1px] group">
            <div className="h-full w-full rounded-[1.95rem] bg-[#0a0a0a] p-8 flex flex-col justify-center">
              <div className="text-indigo-400 font-black text-[10px] uppercase tracking-widest mb-3">
                Exam Readiness
              </div>
              <div className="text-3xl font-bold mb-3 tracking-tight">
                45 Days Left.
              </div>
              <p className="text-gray-500 text-xs mb-6">
                Our analytics show 85% of toppers start revising exactly today.
              </p>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full border-2 border-black bg-indigo-500 flex items-center justify-center text-[8px] font-bold"
                    >
                      ID
                    </div>
                  ))}
                </div>
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-tighter">
                  1.2k+ students active
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Banner */}
        <section className="relative">
          <div className="absolute inset-0 bg-indigo-600/10 blur-3xl rounded-[3rem]" />
          <div className="relative rounded-[3rem] bg-white/[0.02] border border-white/5 p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-8">
                <Crown size={12} fill="currentColor" /> Premium Access
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight leading-tight">
                Unlock the{" "}
                <span className="italic text-indigo-500 underline decoration-indigo-500/30 underline-offset-8">
                  Ultimate
                </span>{" "}
                <br /> Exam PDF Bundle.
              </h2>
              <ul className="space-y-4 mb-4">
                {[
                  "Complete handwritten high-res PDFs",
                  "Verified solved PYQs (2018-2023)",
                  "Print-optimized high-contrast layout",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-gray-400 font-medium"
                  >
                    <div className="h-5 w-5 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                      <ChevronRight size={10} className="text-indigo-400" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full lg:w-[340px]">
              <div className="bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-10 text-center shadow-2xl relative">
                <div className="text-gray-500 text-xs mb-1 font-bold line-through tracking-widest">
                  MRP ₹99
                </div>
                <div className="flex items-center justify-center gap-2 mb-6">
                  <span className="text-6xl font-black tracking-tighter">
                    ₹33
                  </span>
                  <div className="text-left leading-none">
                    <div className="text-[10px] font-black text-gray-500 uppercase tracking-tighter">
                      Final Price
                    </div>
                    <div className="text-[10px] font-black text-indigo-400">
                      per subject
                    </div>
                  </div>
                </div>
                <button className="group w-full h-16 bg-white text-black rounded-2xl flex items-center justify-center gap-3 font-black text-sm transition-all hover:bg-indigo-50 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] active:scale-95">
                  Unlock All Subjects <ArrowUpRight size={18} />
                </button>
                <p className="text-[10px] text-gray-600 mt-6 font-bold uppercase tracking-widest">
                  Instant Email Delivery
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center opacity-40">
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
