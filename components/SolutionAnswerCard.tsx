import { Lock } from "lucide-react";

type AnswerContent = {
  paragraphs: string[];
  bullets?: string[];
  highlight?: string;
  note?: string;
};

type SolutionAnswerCardProps = {
  title: string;
  content: AnswerContent;
  locked: boolean;
  hasAccess: boolean;
  onUnlock?: () => void;
  loading?: boolean;
};

export default function SolutionAnswerCard({
  title,
  content,
  locked,
  hasAccess,
  onUnlock,
  loading,
}: SolutionAnswerCardProps) {
  const showOverlay = locked && !hasAccess;

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950/95 p-6 shadow-2xl shadow-black/20 transition duration-300">
      <div className={`${showOverlay ? "blur-sm filter" : ""} space-y-4`}>        
        <h4 className="text-lg font-semibold text-white">{title}</h4>
        {content.highlight ? (
          <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
            <span className="font-semibold">Key concept:</span> {content.highlight}
          </div>
        ) : null}

        {content.paragraphs.map((paragraph, index) => (
          <p key={index} className="text-sm leading-7 text-slate-300">
            {paragraph}
          </p>
        ))}

        {content.bullets ? (
          <ul className="space-y-3 pl-4 text-sm text-slate-300">
            {content.bullets.map((bullet, index) => (
              <li key={index} className="list-disc">
                {bullet}
              </li>
            ))}
          </ul>
        ) : null}

        {content.note ? (
          <div className="rounded-3xl bg-slate-900/70 px-4 py-3 text-sm text-slate-300">
            <span className="font-semibold text-white">Exam note:</span> {content.note}
          </div>
        ) : null}
      </div>

      {showOverlay ? (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 rounded-[2rem] bg-slate-950/95 p-6 text-center backdrop-blur-sm">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-300">
            <Lock className="h-6 w-6" />
          </div>
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
              Premium Answer Locked
            </p>
            <p className="max-w-md text-sm leading-6 text-slate-300">
              Unlock the complete MPI Winter 2025 solution to reveal exam-ready explanations, diagrams, and step-by-step analysis.
            </p>
          </div>
          <button
            type="button"
            onClick={onUnlock}
            disabled={loading}
            className="rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Processing..." : "Unlock Premium Access"}
          </button>
        </div>
      ) : null}
    </div>
  );
}
