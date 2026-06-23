import Link from "next/link";
import { ChevronLeft, ChevronRight, BookOpen, CheckSquare } from "lucide-react";

interface Chapter {
  number: number;
  title: string;
  questionsCount?: number;
  mcqCount?: number;
}

interface VivaChapterNavigationProps {
  currentChapter: number;
  totalChapters: number;
  semester: string;
  subject: string;
  chapters: Chapter[];
  type: "questions" | "mcq";
}

export default function VivaChapterNavigation({
  currentChapter,
  totalChapters,
  semester,
  subject,
  chapters,
  type,
}: VivaChapterNavigationProps) {
  const hasPrevious = currentChapter > 1;
  const hasNext = currentChapter < totalChapters;
  const previousChapter = currentChapter - 1;
  const nextChapter = currentChapter + 1;

  const otherType = type === "questions" ? "mcq" : "questions";
  const typeLabel = type === "questions" ? "MCQ Practice" : "Viva Questions";

  return (
    <section className="mt-12 border-t border-slate-800 pt-8">
      <div className="mb-8">
        <h2 className="text-lg font-bold text-white">Chapter Navigation</h2>
      </div>

      {/* Quick Switch Type */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/50 p-1">
          <span className="px-3 py-1 text-xs font-semibold text-slate-400">
            Switch to:
          </span>
          <Link
            href={`/semester/${semester}/${subject}/viva/chapter/${currentChapter}/${otherType}`}
            className={`flex items-center gap-2 rounded px-3 py-1.5 text-sm font-semibold transition ${
              type === otherType
                ? "bg-indigo-500 text-white"
                : "text-indigo-400 hover:bg-indigo-500/20"
            }`}
          >
            {otherType === "questions" ? (
              <>
                <BookOpen size={14} />
                {typeLabel}
              </>
            ) : (
              <>
                <CheckSquare size={14} />
                {typeLabel}
              </>
            )}
          </Link>
        </div>
      </div>

      {/* Previous & Next Chapter */}
      <div className="grid gap-3 sm:grid-cols-2">
        {hasPrevious ? (
          <Link
            href={`/semester/${semester}/${subject}/viva/chapter/${previousChapter}/${type}`}
            className="group flex items-start gap-3 rounded-lg border border-slate-700 bg-slate-900/50 p-4 transition hover:border-indigo-500/50 hover:bg-slate-900/80"
          >
            <div className="mt-0.5">
              <ChevronLeft size={18} className="text-indigo-400" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase text-slate-400">
                Previous Chapter
              </p>
              <p className="mt-1 font-semibold text-white">
                Chapter {previousChapter}
              </p>
              {chapters[previousChapter - 1] && (
                <p className="mt-0.5 text-sm text-slate-400">
                  {chapters[previousChapter - 1].title}
                </p>
              )}
            </div>
          </Link>
        ) : (
          <div className="flex items-start gap-3 rounded-lg border border-slate-700/50 bg-slate-950/30 p-4 opacity-50">
            <ChevronLeft size={18} className="mt-0.5 text-slate-600" />
            <div>
              <p className="text-xs font-semibold uppercase text-slate-500">
                No Previous Chapter
              </p>
              <p className="mt-1 text-sm text-slate-600">
                This is the first chapter
              </p>
            </div>
          </div>
        )}

        {hasNext ? (
          <Link
            href={`/semester/${semester}/${subject}/viva/chapter/${nextChapter}/${type}`}
            className="group flex items-start justify-between gap-3 rounded-lg border border-slate-700 bg-slate-900/50 p-4 transition hover:border-indigo-500/50 hover:bg-slate-900/80"
          >
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase text-slate-400">
                Next Chapter
              </p>
              <p className="mt-1 font-semibold text-white">
                Chapter {nextChapter}
              </p>
              {chapters[nextChapter - 1] && (
                <p className="mt-0.5 text-sm text-slate-400">
                  {chapters[nextChapter - 1].title}
                </p>
              )}
            </div>
            <div className="mt-0.5">
              <ChevronRight size={18} className="text-indigo-400" />
            </div>
          </Link>
        ) : (
          <div className="flex items-start justify-between gap-3 rounded-lg border border-slate-700/50 bg-slate-950/30 p-4 opacity-50">
            <div>
              <p className="text-xs font-semibold uppercase text-slate-500">
                No Next Chapter
              </p>
              <p className="mt-1 text-sm text-slate-600">
                This is the final chapter
              </p>
            </div>
            <ChevronRight size={18} className="mt-0.5 text-slate-600" />
          </div>
        )}
      </div>
    </section>
  );
}
