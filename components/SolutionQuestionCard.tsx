"use client";

import { PYQ_BUNDLE_PRICE } from "@/lib/pyq/constants";

type SolutionQuestionCardProps = {
  id: number;
  question: string;
  answer: string;
  free: boolean;
  locked: boolean;
  hasAccess: boolean;
  onUnlock?: () => void;
  loading?: boolean;
  unlockLabel?: string;
};

export default function SolutionQuestionCard({
  id,
  question,
  answer,
  free,
  locked,
  hasAccess,
  onUnlock,
  loading,
  unlockLabel,
}: SolutionQuestionCardProps) {
  const showBlur = locked && !hasAccess;

  

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950/95 p-6 shadow-2xl shadow-black/20 transition hover:border-slate-700 sm:p-8">
      <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
        <span className="inline-flex items-center rounded-full bg-slate-900 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-400">
          Question {id}
        </span>
        <span
          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${
            free
              ? "bg-emerald-500/10 text-emerald-200 ring-1 ring-emerald-500/20"
              : "bg-violet-500/10 text-violet-200 ring-1 ring-violet-500/20"
          }`}
        >
          {free ? "Free" : "Premium"}
        </span>
      </div>

      <h3 className="text-lg font-semibold leading-tight text-white sm:text-xl">
        {question}
      </h3>

      <div className="relative mt-6 overflow-hidden rounded-[1.8rem] border border-slate-800 bg-slate-900/95 p-6 text-slate-300 shadow-inner shadow-black/30 sm:p-8">
        <div className={`${showBlur ? "blur-sm filter" : ""} whitespace-pre-line text-sm leading-7 text-slate-200 sm:text-base`}>
          {answer}
        </div>

        {showBlur && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-[1.8rem] bg-slate-950/95 p-6 text-center backdrop-blur-md">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
                🔒 Premium Solution Locked
              </p>
              <p className="max-w-md text-sm leading-6 text-slate-300">
                Unlock the remaining MPI solved paper for ₹{PYQ_BUNDLE_PRICE} to reveal full answers immediately.
              </p>
            </div>
            {onUnlock ? (
              <button
                type="button"
                onClick={onUnlock}
                disabled={loading}
                className="rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Opening checkout..." : unlockLabel ?? "Unlock Premium Access"}
              </button>
            ) : null}
          </div>
        )}
      </div>
    </article>
  );
}
