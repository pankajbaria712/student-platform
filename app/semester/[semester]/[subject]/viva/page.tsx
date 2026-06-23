import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, BookOpen, CheckSquare } from "lucide-react";
import { getVivaData, getVivaStaticParams, getVivaSubject } from "@/lib/viva";

export function generateStaticParams() {
  return getVivaStaticParams();
}

export function generateMetadata({ params }: { params: { semester: string; subject: string } }): Metadata {
  const vivaSubject = getVivaSubject(params.subject);

  const title = vivaSubject
    ? `${vivaSubject.title} Viva Questions — Semester ${params.semester}`
    : "GTU Viva Hub";
  const description = vivaSubject
    ? `Oral viva and MCQ preparation for ${vivaSubject.title}.`
    : "GTU Viva Hub for semester subjects.";

  return {
    title,
    description,
    keywords: [
      vivaSubject?.title ?? "GTU Viva",
      "GTU Viva Questions",
      "GTU MCQ Practice",
      `Semester ${params.semester}`,
      "GTU viva preparation",
    ],
    openGraph: {
      title,
      description,
      url: `https://gtustudenthub.vercel.app/semester/${params.semester}/${params.subject}/viva`,
      images: ["/image.png"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/image.png"],
    },
    alternates: {
      canonical: `https://gtustudenthub.vercel.app/semester/${params.semester}/${params.subject}/viva`,
    },
  };
}

interface VivaPageProps {
  params: {
    semester: string;
    subject: string;
  };
}

export default function VivaPage({ params }: VivaPageProps) {
  const vivaSubject = getVivaSubject(params.subject);
  if (!vivaSubject || String(vivaSubject.semester) !== params.semester) notFound();

  const vivaData = getVivaData(params.subject);
  const totalChapters = vivaSubject.chapters.length;
  const totalQuestions = vivaData.reduce((sum, c) => sum + (c.questions?.length ?? 0), 0);
  const totalMcqs = vivaData.reduce((sum, c) => sum + (c.mcqs?.length ?? 0), 0);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-page py-8 sm:py-12">
        {/* Compact Header */}
        <div className="mb-8 border-b border-slate-800 pb-6">
          <Link
            href={`/semester/${params.semester}`}
            className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
          >
            <ChevronLeft size={16} />
            Back to Semester {params.semester}
          </Link>

          <div className="mb-3">
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              {vivaSubject.title}
            </h1>
            <p className="mt-1 text-sm font-medium text-slate-400">({vivaSubject.code ?? "3160713"})</p>
          </div>

          <p className="max-w-2xl text-base text-slate-300">
            Prepare chapter-wise Viva Questions and MCQs for GTU {vivaSubject.title}.
          </p>

          {/* Compact Stats */}
          <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-4">
            <div className="rounded-lg border border-slate-700 bg-slate-900/50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Total Chapters
              </p>
              <p className="mt-2 text-2xl font-bold text-white">{totalChapters}</p>
            </div>
            <div className="rounded-lg border border-slate-700 bg-slate-900/50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Viva Questions
              </p>
              <p className="mt-2 text-2xl font-bold text-white">{totalQuestions}</p>
            </div>
            <div className="rounded-lg border border-slate-700 bg-slate-900/50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                MCQs
              </p>
              <p className="mt-2 text-2xl font-bold text-white">{totalMcqs}</p>
            </div>
          </div>
        </div>

        {/* Chapter Section Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white">Chapter-wise Preparation</h2>
          <p className="mt-1 text-slate-400">Select a chapter to start Viva preparation.</p>
        </div>

        {/* Chapter Cards Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {vivaSubject.chapters.map((chapter, index) => {
            const chapterNumber = Number(String(chapter.slug).split("-").pop());
            const chapterData = vivaData.find((c) => c.chapterNumber === chapterNumber);
            return (
              <article
                key={chapter.id}
                className="flex flex-col rounded-lg border border-slate-700 bg-slate-900/80 p-5 shadow-sm transition hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10"
              >
                <div className="mb-3 flex items-start justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-indigo-400">
                      Chapter {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-white">
                      {chapterData?.chapterName ?? chapter.title}
                    </h3>
                  </div>
                </div>

                <div className="mb-5 flex flex-col gap-2 border-t border-slate-700 pt-4">
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <BookOpen size={16} className="shrink-0 text-slate-500" />
                    <span>{chapterData?.questions?.length ?? 0} Viva Questions</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckSquare size={16} className="shrink-0 text-slate-500" />
                    <span>{chapterData?.mcqs?.length ?? 0} MCQs</span>
                  </div>
                </div>

                <div className="mt-auto grid grid-cols-2 gap-3">
                  <a href={`/semester/${params.semester}/${params.subject}/viva/chapter/${chapterNumber}/questions`} className="inline-flex items-center justify-center rounded-lg bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-400">
                    Viva Questions
                  </a>
                  <a href={`/semester/${params.semester}/${params.subject}/viva/chapter/${chapterNumber}/mcq`} className="inline-flex items-center justify-center rounded-lg border border-slate-600 bg-slate-950 px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-indigo-500/40 hover:bg-slate-900">
                    Viva MCQ
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}
