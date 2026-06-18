interface VivaChapterCardProps {
  chapter: {
    number: string;
    name: string;
    totalQuestions: number;
    totalMcqs: number;
  };
}

export default function VivaChapterCard({ chapter }: VivaChapterCardProps) {
  return (
    <article className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-xl shadow-black/10 transition hover:-translate-y-1 hover:border-indigo-500/40 hover:bg-slate-900/90 sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-indigo-300">
            Chapter {chapter.number}
          </p>
          <h3 className="mt-3 text-lg font-semibold text-white sm:text-xl">
            {chapter.name}
          </h3>
        </div>
        <div className="rounded-3xl bg-slate-950/80 px-4 py-3 text-sm font-semibold text-slate-100 ring-1 ring-white/10">
          {chapter.totalQuestions + chapter.totalMcqs} items
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-4">
          <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Total Questions</p>
          <p className="mt-3 text-2xl font-semibold text-white">{chapter.totalQuestions}</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-4">
          <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Total MCQs</p>
          <p className="mt-3 text-2xl font-semibold text-white">{chapter.totalMcqs}</p>
        </div>
      </div>
    </article>
  );
}
