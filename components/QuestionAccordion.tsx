"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SubQuestionAccordion from "@/components/SubQuestionAccordion";

type SubQuestion = {
  id: string;
  title: string;
  content: {
    paragraphs: string[];
    bullets?: string[];
    highlight?: string;
    note?: string;
  };
};

type QuestionAccordionProps = {
  id: number;
  title: string;
  free: boolean;
  summary: string;
  subQuestions: SubQuestion[];
  locked: boolean;
  hasAccess: boolean;
  onUnlock: () => void;
  loading: boolean;
};

export default function QuestionAccordion({
  id,
  title,
  free,
  summary,
  subQuestions,
  locked,
  hasAccess,
  onUnlock,
  loading,
}: QuestionAccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-[2rem] border border-slate-800 bg-slate-950/95 p-5 shadow-2xl shadow-black/20 transition hover:border-slate-700 sm:p-6">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs uppercase tracking-[0.35em] text-emerald-200 ring-1 ring-emerald-500/20">
              Question {id}
            </span>
            <span
              className={`rounded-full px-3 py-1 text-xs uppercase tracking-[0.35em] ring-1 ${
                free
                  ? "bg-slate-900 text-slate-300 ring-slate-700"
                  : "bg-indigo-500/10 text-indigo-200 ring-indigo-500/20"
              }`}
            >
              {free ? "Free" : "Premium"
              }
            </span>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">{summary}</p>
          </div>
        </div>

        <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-900 text-slate-100 shadow-lg shadow-black/20 transition-all duration-300 hover:bg-slate-800">
          {open ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>

      <div className={`mt-5 overflow-hidden transition-all duration-300 ${open ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="space-y-4">
          <div className="rounded-[1.8rem] border border-slate-800 bg-slate-900/90 p-5 text-sm text-slate-300">
            <p>{summary}</p>
            {!free && !hasAccess ? (
              <p className="mt-3 text-sm text-slate-400">
                Premium access required to reveal the final answer breakdown.
              </p>
            ) : null}
          </div>

          <div className="space-y-4">
            {subQuestions.map((subQuestion) => (
              <SubQuestionAccordion
                key={subQuestion.id}
                id={subQuestion.id}
                title={subQuestion.title}
                content={subQuestion.content}
                locked={!free && !hasAccess}
                hasAccess={hasAccess}
                onUnlock={onUnlock}
                loading={loading}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
