import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, Sparkles, ShieldCheck, Zap } from "lucide-react";
import Disclaimer from "@/components/Disclaimer";
import BundleOfferCard from "@/components/BundleOfferCard";
import Navbar from "@/components/Navbar";
import { PyqPaperCard } from "../_components/pyq-paper-ui";

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
    <div className="min-h-screen overflow-x-hidden bg-[#050505] font-sans text-white antialiased selection:bg-indigo-500/30 pb-40 sm:pb-24">
      <div className="fixed inset-0 z-0">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-indigo-600/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-purple-600/5 blur-[120px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
      </div>

      <main className="relative z-10 mx-auto max-w-6xl px-page pb-12 pt-8 sm:pb-20 sm:pt-12">
        <Link
          href={`/semester/${subject.semester}`}
          className="flex items-center gap-2 text-gray-500 hover:text-indigo-400 transition-colors text-[10px] font-black uppercase tracking-[0.2em] mb-10"
        >
          <ChevronLeft size={14} /> Back to Semester {subject.semester}
        </Link>

        <header className="mb-10 sm:mb-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_380px] lg:items-start">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-indigo-400">
                <Zap size={12} fill="currentColor" /> Expert PYQ collection
              </div>

              <h1 className="mb-4 text-3xl font-black leading-tight tracking-tighter sm:text-4xl md:mb-6 md:text-6xl">
                {subject.title}
                <br />
                <span className="text-indigo-500 italic underline decoration-white/10 underline-offset-8">
                  Question Papers Solution
                </span>
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
                {subject.description}
              </p>
            </div>

            <div className="lg:justify-self-end">
              <BundleOfferCard />
            </div>
          </div>
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
          <div className="mb-4 flex flex-col gap-2 sm:mb-4 sm:flex-row sm:items-center sm:justify-between sm:px-0">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600">
              Available Papers
            </span>
            <span className="text-[10px] text-gray-500">Source: GTU</span>
          </div>

          {subject.papers.length > 0 ? (
            subject.papers.map((paper) => (
              <PyqPaperCard key={paper.pdf} paper={paper} />
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

        <div className="mb-16 mt-12">
          <Disclaimer />
        </div>
      </main>

      <footer className="mt-12 border-t border-white/5 py-10 pb-safe text-center sm:mt-20 sm:py-12">
        <p className="text-[10px] text-gray-600 font-black uppercase tracking-[0.4em]">
          Powered by GTUStudentHub Advanced Learning Systems
        </p>
      </footer>
    </div>
  );
}
