import { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Disclaimer from "@/components/Disclaimer";
import NotesChapterCard from "@/components/NotesChapterCard";

export const metadata: Metadata = {
  title: "GTU Advanced Java Programming Notes",
  description:
    "Free chapter-wise Advanced Java Programming notes for GTU Computer Engineering Semester 6 students. Includes networking, JDBC, Servlets, JSP, JSF, and Hibernate.",
  keywords:
    "AJP notes, Advanced Java Programming, GTU, Semester 6, JDBC, Servlet, JSP, JSF, Hibernate",
  openGraph: {
    title: "GTU Advanced Java Programming Notes",
    description:
      "Free chapter-wise Advanced Java Programming notes for GTU Computer Engineering Semester 6 students.",
    type: "website",
  },
};

interface Chapter {
  number: number;
  title: string;
  fileName: string;
}

const chapters: Chapter[] = [
  {
    number: 1,
    title: "Java Networking",
    fileName: "Chepter-01.pdf",
  },
  {
    number: 2,
    title: "JDBC Programming",
    fileName: "Chepter-02.pdf",
  },
  {
    number: 3,
    title: "Servlet API and Overview",
    fileName: "Chepter-03.pdf",
  },
  {
    number: 4,
    title: "Java Server Pages",
    fileName: "Chepter-04.pdf",
  },
  {
    number: 5,
    title: "Java Server Faces",
    fileName: "Chepter-05.pdf",
  },
  {
    number: 6,
    title: "Hibernate",
    fileName: "Chepter-06.pdf",
  },
];

export default function AdvancedJavaProgrammingNotesPage() {
  const subjectSlug = "advanced-java-programming";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <main className="relative z-10 mx-auto max-w-6xl px-4 pb-12 pt-8 sm:pb-20 sm:pt-12">
        {/* Back button */}
        <Link
          href="/semester/6"
          className="mb-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 transition-colors hover:text-indigo-400 sm:mb-10"
        >
          <ChevronLeft size={14} />
          Back to Semester 6
        </Link>

        {/* Header section */}
        <header className="mb-10 sm:mb-16">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-indigo-400">
            <Zap size={12} fill="currentColor" />
            Free Notes Collection
          </div>

          <h1 className="mb-4 text-3xl font-black leading-tight tracking-tighter sm:text-4xl md:mb-6 md:text-5xl">
            Advanced Java Programming
            <br />
            <span className="italic text-indigo-500 underline decoration-white/10 underline-offset-8">
              Notes &amp; Resources
            </span>
          </h1>

          <div className="mt-6 max-w-3xl">
            <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
              GTU Computer Engineering Semester 6
            </p>
            <p className="mt-3 text-xs leading-relaxed text-slate-500 sm:text-sm">
              Access comprehensive chapter-wise notes covering Java Networking,
              JDBC, Servlets, JSP, JSF, and Hibernate. All notes are completely
              free and available for instant access.
            </p>
          </div>
        </header>

        {/* Features section */}
        <div className="mb-12 grid gap-3 sm:mb-16 sm:grid-cols-3 sm:gap-4">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 sm:p-5">
            <p className="text-xs font-black uppercase tracking-widest text-indigo-400">
              6 Chapters
            </p>
            <p className="mt-2 text-sm text-slate-400">Complete syllabus coverage</p>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 sm:p-5">
            <p className="text-xs font-black uppercase tracking-widest text-indigo-400">
              100% Free
            </p>
            <p className="mt-2 text-sm text-slate-400">No payment required</p>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 sm:p-5">
            <p className="text-xs font-black uppercase tracking-widest text-indigo-400">
              Instant Access
            </p>
            <p className="mt-2 text-sm text-slate-400">Download anytime</p>
          </div>
        </div>

        {/* Chapters grid */}
        <section className="mb-12 sm:mb-16">
          <div className="mb-8 sm:mb-10">
            <h2 className="text-2xl font-black text-white sm:text-3xl">
              Chapter Wise Notes
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Click any chapter to view or download the PDF notes
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {chapters.map((chapter) => (
              <NotesChapterCard
                key={chapter.number}
                chapterNumber={chapter.number}
                title={chapter.title}
                fileName={chapter.fileName}
                subject={subjectSlug}
              />
            ))}
          </div>
        </section>

        {/* Info section */}
        <section className="mb-12 rounded-3xl border border-indigo-500/20 bg-indigo-500/5 p-6 sm:mb-16 sm:p-8">
          <h3 className="text-lg font-bold text-white sm:text-xl">
            About These Notes
          </h3>
          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <p>
              These comprehensive notes cover all 6 chapters of Advanced Java
              Programming as per GTU curriculum for Semester 6 Computer
              Engineering students.
            </p>
            <p>
              The notes include detailed explanations, code examples, and
              important concepts for each topic. All PDFs are optimized for
              reading on any device.
            </p>
            <p>
              <strong className="text-slate-300">Note:</strong> For the latest
              question papers and solutions, visit the{" "}
              <Link
                href="/pyq/advanced-java-programming"
                className="text-indigo-400 hover:text-indigo-300 underline"
              >
                PYQ Solutions page
              </Link>
              .
            </p>
          </div>
        </section>

        <Disclaimer />
      </main>
    </div>
  );
}
