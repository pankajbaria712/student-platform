import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FileText,
  Download,
  Lock,
  ChevronLeft,
  ExternalLink,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";

const subjectData: Record<
  string,
  {
    title: string;
    code: string;
    semester: number;
    description: string;
    papers: Array<{
      title: string;
      code: string;
      year: string;
      type: string;
      pdf: string;
      solutionAvailable: boolean;
    }>;
  }
> = {
  "effective-technical-communication": {
    title: "Effective Technical Communication",
    code: "3130004",
    semester: 3,
    description:
      "Communication strategies, technical writing, and professional presentation skills.",
    papers: [
      {
        title: "ETC Summer 2025",
        code: "3130004",
        year: "2025",
        type: "Summer",
        pdf: "/pdfs/pyq/effective-technical-communication/etc-summer-2025.pdf",
        solutionAvailable: true,
      },
      {
        title: "ETC Winter 2024",
        code: "3130004",
        year: "2024",
        type: "Winter",
        pdf: "/pdfs/pyq/effective-technical-communication/etc-winter-2024.pdf",
        solutionAvailable: true,
      },
      {
        title: "ETC Summer 2024",
        code: "3130004",
        year: "2024",
        type: "Summer",
        pdf: "/pdfs/pyq/effective-technical-communication/etc-summer-2024.pdf",
        solutionAvailable: true,
      },
      {
        title: "ETC Winter 2023",
        code: "3130004",
        year: "2023",
        type: "Winter",
        pdf: "/pdfs/pyq/effective-technical-communication/etc-winter-2023.pdf",
        solutionAvailable: true,
      },
      {
        title: "ETC Summer 2023",
        code: "3130004",
        year: "2023",
        type: "Summer",
        pdf: "/pdfs/pyq/effective-technical-communication/etc-summer-2023.pdf",
        solutionAvailable: true,
      },
    ],
  },
  "probability-and-statistics": {
    title: "Probability and Statistics",
    code: "3130006",
    semester: 3,
    description:
      "Random variables, distributions, and statistical analysis for engineering.",
    papers: [
      {
        title: "PS Summer 2025",
        code: "3130006",
        year: "2025",
        type: "Summer",
        pdf: "/pdfs/pyq/probability-and-statistics/ps-summer-2025.pdf",
        solutionAvailable: true,
      },
      {
        title: "PS Winter 2024",
        code: "3130006",
        year: "2024",
        type: "Winter",
        pdf: "/pdfs/pyq/probability-and-statistics/ps-winter-2024.pdf",
        solutionAvailable: true,
      },
      {
        title: "PS Winter 2023",
        code: "3130006",
        year: "2023",
        type: "Winter",
        pdf: "/pdfs/pyq/probability-and-statistics/ps-winter-2023.pdf",
        solutionAvailable: true,
      },
      {
        title: "PS Summer 2024",
        code: "3130006",
        year: "2024",
        type: "Summer",
        pdf: "/pdfs/pyq/probability-and-statistics/ps-summer-2024.pdf",
        solutionAvailable: true,
      },
    ],
  },
  "indian-constitution": {
    title: "Indian Constitution",
    code: "3130007",
    semester: 3,
    description:
      "The Indian Constitution, fundamental rights, duties, and governance structure.",
    papers: [
      {
        title: "IC Summer 2025",
        code: "3130007",
        year: "2025",
        type: "Summer",
        pdf: "/pdfs/pyq/indian-constitution/ic-summer-2025.pdf",
        solutionAvailable: true,
      },
      {
        title: "IC Winter 2024",
        code: "3130007",
        year: "2024",
        type: "Winter",
        pdf: "/pdfs/pyq/indian-constitution/ic-winter-2024.pdf",
        solutionAvailable: true,
      },
      {
        title: "IC Winter 2023",
        code: "3130007",
        year: "2023",
        type: "Winter",
        pdf: "/pdfs/pyq/indian-constitution/ic-winter-2023.pdf",
        solutionAvailable: true,
      },
      {
        title: "IC Winter 2022",
        code: "3130007",
        year: "2022",
        type: "Winter",
        pdf: "/pdfs/pyq/indian-constitution/ic-winter-2022.pdf",
        solutionAvailable: true,
      },
      {
        title: "IC Summer 2024",
        code: "3130007",
        year: "2024",
        type: "Summer",
        pdf: "/pdfs/pyq/indian-constitution/ic-summer-2024.pdf",
        solutionAvailable: true,
      },
      {
        title: "IC Summer 2023",
        code: "3130007",
        year: "2023",
        type: "Summer",
        pdf: "/pdfs/pyq/indian-constitution/ic-summer-2023.pdf",
        solutionAvailable: true,
      },
    ],
  },
  "design-engineering-IA": {
    title: "Design Engineering - I A",
    code: "3130008",
    semester: 3,
    description:
      "Design-thinking, prototype development, and engineering creativity.",
    papers: [],
  },
  "data-structures": {
    title: "Data Structures",
    code: "3130702",
    semester: 3,
    description:
      "Stack, queue, tree, and graph structures with algorithmic performance analysis.",
    papers: [
      {
        title: "DS Summer 2025",
        code: "3130702",
        year: "2025",
        type: "Summer",
        pdf: "/pdfs/pyq/data-structures/ds-summer-2025.pdf",
        solutionAvailable: true,
      },
      {
        title: "DS Winter 2024",
        code: "3130702",
        year: "2024",
        type: "Winter",
        pdf: "/pdfs/pyq/data-structures/ds-winter-2024.pdf",
        solutionAvailable: true,
      },
      {
        title: "DS Winter 2023",
        code: "3130702",
        year: "2023",
        type: "Winter",
        pdf: "/pdfs/pyq/data-structures/ds-winter-2023.pdf",
        solutionAvailable: true,
      },
      {
        title: "DS Summer 2024",
        code: "3130702",
        year: "2024",
        type: "Summer",
        pdf: "/pdfs/pyq/data-structures/ds-summer-2024.pdf",
        solutionAvailable: true,
      },
      {
        title: "DS Summer 2023",
        code: "3130702",
        year: "2023",
        type: "Summer",
        pdf: "/pdfs/pyq/data-structures/ds-summer-2023.pdf",
        solutionAvailable: true,
      },
    ],
  },
  "database-management-systems": {
    title: "Database Management Systems",
    code: "3130703",
    semester: 3,
    description:
      "Relational databases, SQL, normalization, and transaction processing.",
    papers: [
      {
        title: "DBMS Summer 2025",
        code: "3130703",
        year: "2025",
        type: "Summer",
        pdf: "/pdfs/pyq/database-management-systems/dbms-summer-2025.pdf",
        solutionAvailable: true,
      },
      {
        title: "DBMS Winter 2024",
        code: "3130703",
        year: "2024",
        type: "Winter",
        pdf: "/pdfs/pyq/database-management-systems/dbms-winter-2024.pdf",
        solutionAvailable: true,
      },
      {
        title: "DBMS Winter 2023",
        code: "3130703",
        year: "2023",
        type: "Winter",
        pdf: "/pdfs/pyq/database-management-systems/dbms-winter-2023.pdf",
        solutionAvailable: true,
      },
      {
        title: "DBMS Summer 2024",
        code: "3130703",
        year: "2024",
        type: "Summer",
        pdf: "/pdfs/pyq/database-management-systems/dbms-summer-2024.pdf",
        solutionAvailable: true,
      },
      {
        title: "DBMS Summer 2023",
        code: "3130703",
        year: "2023",
        type: "Summer",
        pdf: "/pdfs/pyq/database-management-systems/dbms-summer-2023.pdf",
        solutionAvailable: true,
      },
    ],
  },
  "digital-fundamentals": {
    title: "Digital Fundamentals",
    code: "3130704",
    semester: 3,
    description:
      "Digital logic, number systems, and fundamentals of computer hardware.",
    papers: [
      {
        title: "DF Summer 2025",
        code: "3130704",
        year: "2025",
        type: "Summer",
        pdf: "/pdfs/pyq/digital-fundamentals/df-summer-2025.pdf",
        solutionAvailable: true,
      },
      {
        title: "DF Winter 2024",
        code: "3130704",
        year: "2024",
        type: "Winter",
        pdf: "/pdfs/pyq/digital-fundamentals/df-winter-2024.pdf",
        solutionAvailable: true,
      },
      {
        title: "DF Winter 2022",
        code: "3130704",
        year: "2022",
        type: "Winter",
        pdf: "/pdfs/pyq/digital-fundamentals/df-winter-2022.pdf",
        solutionAvailable: true,
      },
      {
        title: "DF Summer 2024",
        code: "3130704",
        year: "2024",
        type: "Summer",
        pdf: "/pdfs/pyq/digital-fundamentals/df-summer-2024.pdf",
        solutionAvailable: true,
      },
      {
        title: "DF Summer 2023",
        code: "3130704",
        year: "2023",
        type: "Summer",
        pdf: "/pdfs/pyq/digital-fundamentals/df-summer-2023.pdf",
        solutionAvailable: true,
      },
    ],
  },
  "advanced-java-programming": {
    title: "Advanced Java Programming",
    code: "3160707",
    semester: 6,
    description:
      "Deep dive into enterprise applications, networking, and advanced database connectivity.",
    papers: [
      {
        title: "AJP Summer 2025",
        code: "3160707",
        year: "2025",
        type: "Summer",
        pdf: "/pdfs/pyq/advanced-java-programming/ajp-summer-2025.pdf",
        solutionAvailable: true,
      },
      {
        title: "AJP Winter 2024",
        code: "3160707",
        year: "2024",
        type: "Winter",
        pdf: "/pdfs/pyq/advanced-java-programming/ajp-winter-2024.pdf",
        solutionAvailable: true,
      },
      {
        title: "AJP Summer 2024",
        code: "3160707",
        year: "2024",
        type: "Summer",
        pdf: "/pdfs/pyq/advanced-java-programming/ajp-summer-2024.pdf",
        solutionAvailable: true,
      },
      {
        title: "AJP Winter 2023",
        code: "3160707",
        year: "2023",
        type: "Winter",
        pdf: "/pdfs/pyq/advanced-java-programming/ajp-winter-2023.pdf",
        solutionAvailable: true,
      },
      {
        title: "AJP Summer 2023",
        code: "3160707",
        year: "2023",
        type: "Summer",
        pdf: "/pdfs/pyq/advanced-java-programming/ajp-summer-2023.pdf",
        solutionAvailable: true,
      },
    ],
  },
  "microprocessor-and-interfacing": {
    title: "Microprocessor & Interfacing",
    code: "3160712",
    semester: 6,
    description:
      "Architecture and programming of 8085/8086 microprocessors and hardware interfacing.",
    papers: [
      {
        title: "MPI Summer 2025",
        code: "3160712",
        year: "2025",
        type: "Summer",
        pdf: "/pdfs/pyq/microprocessor-and-interfacing/mpi-summer-2025.pdf",
        solutionAvailable: true,
      },
      {
        title: "MPI Winter 2024",
        code: "3160712",
        year: "2024",
        type: "Winter",
        pdf: "/pdfs/pyq/microprocessor-and-interfacing/mpi-winter-2024.pdf",
        solutionAvailable: true,
      },
      {
        title: "MPI Summer 2024",
        code: "3160712",
        year: "2024",
        type: "Summer",
        pdf: "/pdfs/pyq/microprocessor-and-interfacing/mpi-summer-2024.pdf",
        solutionAvailable: true,
      },
      {
        title: "MPI Winter 2023",
        code: "3160712",
        year: "2023",
        type: "Winter",
        pdf: "/pdfs/pyq/microprocessor-and-interfacing/mpi-winter-2023.pdf",
        solutionAvailable: true,
      },
      {
        title: "MPI Summer 2023",
        code: "3160712",
        year: "2023",
        type: "Summer",
        pdf: "/pdfs/pyq/microprocessor-and-interfacing/mpi-summer-2023.pdf",
        solutionAvailable: true,
      },
    ],
  },
  "web-programming": {
    title: "Web Programming",
    code: "3160713",
    semester: 6,
    description:
      "Full-stack development techniques including modern frameworks and responsive design.",
    papers: [
      {
        title: "WP Summer 2025",
        code: "3160713",
        year: "2025",
        type: "Summer",
        pdf: "/pdfs/pyq/web-programming/wp-summer-2025.pdf",
        solutionAvailable: true,
      },
      {
        title: "WP Winter 2024",
        code: "3160713",
        year: "2024",
        type: "Winter",
        pdf: "/pdfs/pyq/web-programming/wp-winter-2024.pdf",
        solutionAvailable: true,
      },
      {
        title: "WP Summer 2024",
        code: "3160713",
        year: "2024",
        type: "Summer",
        pdf: "/pdfs/pyq/web-programming/wp-summer-2024.pdf",
        solutionAvailable: true,
      },
      {
        title: "WP Winter 2023",
        code: "3160713",
        year: "2023",
        type: "Winter",
        pdf: "/pdfs/pyq/web-programming/wp-winter-2023.pdf",
        solutionAvailable: true,
      },
      {
        title: "WP Summer 2023",
        code: "3160713",
        year: "2023",
        type: "Summer",
        pdf: "/pdfs/pyq/web-programming/wp-summer-2023.pdf",
        solutionAvailable: true,
      },
    ],
  },
  "data-mining": {
    title: "Data Mining",
    code: "3160714",
    semester: 6,
    description:
      "Discover patterns in large datasets using clustering, classification, and association rules.",
    papers: [
      {
        title: "DM Summer 2025",
        code: "3160714",
        year: "2025",
        type: "Summer",
        pdf: "/pdfs/pyq/data-mining/dm-summer-2025.pdf",
        solutionAvailable: true,
      },
      {
        title: "DM Winter 2024",
        code: "3160714",
        year: "2024",
        type: "Winter",
        pdf: "/pdfs/pyq/data-mining/dm-winter-2024.pdf",
        solutionAvailable: true,
      },
      {
        title: "DM Summer 2024",
        code: "3160714",
        year: "2024",
        type: "Summer",
        pdf: "/pdfs/pyq/data-mining/dm-summer-2024.pdf",
        solutionAvailable: true,
      },
      {
        title: "DM Winter 2023",
        code: "3160714",
        year: "2023",
        type: "Winter",
        pdf: "/pdfs/pyq/data-mining/dm-winter-2023.pdf",
        solutionAvailable: true,
      },
      {
        title: "DM Summer 2023",
        code: "3160714",
        year: "2023",
        type: "Summer",
        pdf: "/pdfs/pyq/data-mining/dm-summer-2023.pdf",
        solutionAvailable: true,
      },
    ],
  },
  "system-software": {
    title: "System Software",
    code: "3160715",
    semester: 6,
    description:
      "Understanding assemblers, macro processors, loaders, and compiler construction phases.",
    papers: [
      {
        title: "SS Summer 2025",
        code: "3160715",
        year: "2025",
        type: "Summer",
        pdf: "/pdfs/pyq/system-software/ss-summer-2025.pdf",
        solutionAvailable: true,
      },
      {
        title: "SS Winter 2024",
        code: "3160715",
        year: "2024",
        type: "Winter",
        pdf: "/pdfs/pyq/system-software/ss-winter-2024.pdf",
        solutionAvailable: true,
      },
      {
        title: "SS Summer 2024",
        code: "3160715",
        year: "2024",
        type: "Summer",
        pdf: "/pdfs/pyq/system-software/ss-summer-2024.pdf",
        solutionAvailable: true,
      },
      {
        title: "SS Winter 2023",
        code: "3160715",
        year: "2023",
        type: "Winter",
        pdf: "/pdfs/pyq/system-software/ss-winter-2023.pdf",
        solutionAvailable: true,
      },
      {
        title: "SS Summer 2023",
        code: "3160715",
        year: "2023",
        type: "Summer",
        pdf: "/pdfs/pyq/system-software/ss-summer-2023.pdf",
        solutionAvailable: true,
      },
    ],
  },
  "iot-and-applications": {
    title: "IOT & Applications",
    code: "3160716",
    semester: 6,
    description:
      "Exploring the ecosystem of connected devices, sensors, and cloud integration protocols.",
    papers: [
      {
        title: "IOT Summer 2025",
        code: "3160716",
        year: "2025",
        type: "Summer",
        pdf: "/pdfs/pyq/iot-and-applications/iot-summer-2025.pdf",
        solutionAvailable: true,
      },
      {
        title: "IOT Winter 2024",
        code: "3160716",
        year: "2024",
        type: "Winter",
        pdf: "/pdfs/pyq/iot-and-applications/iot-winter-2024.pdf",
        solutionAvailable: true,
      },
      {
        title: "IOT Summer 2024",
        code: "3160716",
        year: "2024",
        type: "Summer",
        pdf: "/pdfs/pyq/iot-and-applications/iot-summer-2024.pdf",
        solutionAvailable: true,
      },
      {
        title: "IOT Winter 2023",
        code: "3160716",
        year: "2023",
        type: "Winter",
        pdf: "/pdfs/pyq/iot-and-applications/iot-winter-2023.pdf",
        solutionAvailable: true,
      },
      {
        title: "IOT Summer 2023",
        code: "3160716",
        year: "2023",
        type: "Summer",
        pdf: "/pdfs/pyq/iot-and-applications/iot-summer-2023.pdf",
        solutionAvailable: true,
      },
    ],
  },
  "data-visualization": {
    title: "Data Visualization",
    code: "3160717",
    semester: 6,
    description:
      "Transform complex data into interactive visual stories using modern visualization tools.",
    papers: [
      {
        title: "DV Summer 2025",
        code: "3160717",
        year: "2025",
        type: "Summer",
        pdf: "/pdfs/pyq/data-visualization/dv-summer-2025.pdf",
        solutionAvailable: true,
      },
      {
        title: "DV Winter 2024",
        code: "3160717",
        year: "2024",
        type: "Winter",
        pdf: "/pdfs/pyq/data-visualization/dv-winter-2024.pdf",
        solutionAvailable: true,
      },
      {
        title: "DV Summer 2024",
        code: "3160717",
        year: "2024",
        type: "Summer",
        pdf: "/pdfs/pyq/data-visualization/dv-summer-2024.pdf",
        solutionAvailable: true,
      },
      {
        title: "DV Winter 2023",
        code: "3160717",
        year: "2023",
        type: "Winter",
        pdf: "/pdfs/pyq/data-visualization/dv-winter-2023.pdf",
        solutionAvailable: true,
      },
      {
        title: "DV Summer 2023",
        code: "3160717",
        year: "2023",
        type: "Summer",
        pdf: "/pdfs/pyq/data-visualization/dv-summer-2023.pdf",
        solutionAvailable: true,
      },
    ],
  },
  "contributor-personality-development-program": {
    title: "Contributor Personality Development Program",
    code: "3160002",
    semester: 6,
    description:
      "Building the mindset of a contributor to create value in professional and social environments.",
    papers: [
      {
        title: "CPDP Summer 2025",
        code: "3160002",
        year: "2025",
        type: "Summer",
        pdf: "/pdfs/pyq/contributor-personality-development-program/cpdp-summer-2025.pdf",
        solutionAvailable: true,
      },
      {
        title: "CPDP Winter 2024",
        code: "3160002",
        year: "2024",
        type: "Winter",
        pdf: "/pdfs/pyq/contributor-personality-development-program/cpdp-winter-2024.pdf",
        solutionAvailable: true,
      },
      {
        title: "CPDP Summer 2024",
        code: "3160002",
        year: "2024",
        type: "Summer",
        pdf: "/pdfs/pyq/contributor-personality-development-program/cpdp-summer-2024.pdf",
        solutionAvailable: true,
      },
      {
        title: "CPDP Winter 2023",
        code: "3160002",
        year: "2023",
        type: "Winter",
        pdf: "/pdfs/pyq/contributor-personality-development-program/cpdp-winter-2023.pdf",
        solutionAvailable: true,
      },
      {
        title: "CPDP Summer 2023",
        code: "3160002",
        year: "2023",
        type: "Summer",
        pdf: "/pdfs/pyq/contributor-personality-development-program/cpdp-summer-2023.pdf",
        solutionAvailable: true,
      },
    ],
  },
  "integrated-personality-development-course": {
    title: "Integrated Personality Development Course",
    code: "3160003",
    semester: 6,
    description:
      "Integrated personality development focusing on ethics, values, and holistic growth.",
    papers: [
      {
        title: "IPDC Summer 2025",
        code: "3160003",
        year: "2025",
        type: "Summer",
        pdf: "/pdfs/pyq/integrated-personality-development-course/ipdc-summer-2025.pdf",
        solutionAvailable: true,
      },
      {
        title: "IPDC Winter 2024",
        code: "3160003",
        year: "2024",
        type: "Winter",
        pdf: "/pdfs/pyq/integrated-personality-development-course/ipdc-winter-2024.pdf",
        solutionAvailable: true,
      },
      {
        title: "IPDC Summer 2024",
        code: "3160003",
        year: "2024",
        type: "Summer",
        pdf: "/pdfs/pyq/integrated-personality-development-course/ipdc-summer-2024.pdf",
        solutionAvailable: true,
      },
      {
        title: "IPDC Winter 2023",
        code: "3160003",
        year: "2023",
        type: "Winter",
        pdf: "/pdfs/pyq/integrated-personality-development-course/ipdc-winter-2023.pdf",
        solutionAvailable: true,
      },
      {
        title: "IPDC Summer 2023",
        code: "3160003",
        year: "2023",
        type: "Summer",
        pdf: "/pdfs/pyq/integrated-personality-development-course/ipdc-summer-2023.pdf",
        solutionAvailable: true,
      },
    ],
  },
};

const ActionButton = ({
  icon: Icon,
  label,
  href,
  primary = false,
  premium = false,
  download = false,
}: {
  icon: typeof FileText;
  label: string;
  href: string;
  primary?: boolean;
  premium?: boolean;
  download?: boolean;
}) => (
  <a
    href={href}
    download={download}
    className={`
      flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-[11px] font-black transition-all active:scale-95 whitespace-nowrap
      ${
        premium
          ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/20 border border-indigo-400/30 hover:shadow-indigo-500/40 hover:brightness-110"
          : primary
            ? "bg-white text-black hover:bg-gray-200"
            : "bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white"
      }
    `}
  >
    <Icon size={14} className={premium ? "animate-pulse" : ""} />
    {label}
  </a>
);

const PaperCard = ({
  paper,
}: {
  paper: (typeof subjectData)[string]["papers"][number];
}) => (
  <div className="group relative rounded-3xl bg-white/[0.02] border border-white/5 p-6 hover:bg-white/[0.04] transition-all duration-300">
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
      <div className="flex items-center gap-5">
        <div className="h-12 w-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
          <FileText size={24} />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-black uppercase tracking-widest text-indigo-500">
              {paper.type} {paper.year}
            </span>
            <div className="h-1 w-1 rounded-full bg-white/20" />
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
              {paper.code}
            </span>
          </div>
          <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
            {paper.title}
          </h3>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <ActionButton icon={ExternalLink} label="View Paper" href={paper.pdf} />
        <ActionButton
          icon={Download}
          label="Download"
          href={paper.pdf}
          download
        />
        <div className="h-8 w-px bg-white/5 hidden lg:block mx-2" />
        <ActionButton
          icon={Lock}
          label={
            paper.solutionAvailable
              ? "Unlock Solution • ₹6"
              : "Solution Coming Soon"
          }
          href={paper.solutionAvailable ? "#" : "#"}
          premium={paper.solutionAvailable}
        />
      </div>
    </div>
  </div>
);

export function generateStaticParams() {
  return Object.keys(subjectData).map((slug) => ({ slug }));
}

export default function SubjectPYQPage({
  params,
}: {
  params: { slug: string };
}) {
  const subject = subjectData[params.slug];

  if (!subject) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-indigo-500/30 font-sans antialiased overflow-x-hidden pb-20">
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-indigo-600/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-600/5 blur-[120px]" />
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-20">
        <Link
          href={`/semester/${subject.semester}`}
          className="flex items-center gap-2 text-gray-500 hover:text-indigo-400 transition-colors text-[10px] font-black uppercase tracking-[0.2em] mb-10"
        >
          <ChevronLeft size={14} /> Back to Semester {subject.semester}
        </Link>

        <header className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-6">
            <Zap size={12} fill="currentColor" /> Expert PYQ Collection
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-tight">
            {subject.title}
            <br />
            <span className="text-indigo-500 italic underline decoration-white/10 underline-offset-8">
              Question Papers
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            {subject.description}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: ShieldCheck,
              title: "Verified",
              desc: "Corrected by experts",
            },
            {
              icon: Sparkles,
              title: "Step-by-Step",
              desc: "Detailed explanations",
            },
            { icon: Zap, title: "Instant", desc: "Email + Web Access" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5"
            >
              <div className="h-10 w-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                <item.icon size={20} />
              </div>
              <div>
                <div className="text-xs font-black uppercase tracking-widest">
                  {item.title}
                </div>
                <div className="text-[10px] text-gray-500 font-bold">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between px-6 mb-4">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600">
              Available Papers
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600">
              Actions & Premium
            </span>
          </div>

          {subject.papers.length > 0 ? (
            subject.papers.map((paper) => (
              <PaperCard key={paper.pdf} paper={paper} />
            ))
          ) : (
            <div className="rounded-3xl bg-white/[0.02] border border-white/5 p-10 text-center">
              <p className="text-gray-400 text-lg font-semibold">
                No previous year question papers are available for this subject
                yet.
              </p>
              <p className="text-sm text-gray-500 mt-3">
                Check back later or contact the course coordinator for the
                latest uploads.
              </p>
            </div>
          )}
        </div>

        <section className="mt-20 p-8 rounded-[2.5rem] bg-indigo-600/5 border border-indigo-500/10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h4 className="text-xl font-bold mb-2">Need a custom solution?</h4>
            <p className="text-gray-500 text-sm">
              Request step-by-step solutions for any paper and get it within 24
              hours.
            </p>
          </div>
          <button className="px-8 py-4 bg-white text-black rounded-2xl font-black text-sm hover:scale-105 transition-transform active:scale-95 shadow-xl shadow-white/5">
            Request Custom Solution
          </button>
        </section>
      </main>

      <footer className="mt-20 border-t border-white/5 py-12 text-center">
        <p className="text-[10px] text-gray-600 font-black uppercase tracking-[0.4em]">
          Powered by EduNext Advanced Learning Systems
        </p>
      </footer>
    </div>
  );
}
