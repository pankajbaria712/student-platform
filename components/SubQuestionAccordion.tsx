"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SolutionAnswerCard from "@/components/SolutionAnswerCard";

type SubQuestionAccordionProps = {
  id: string;
  title: string;
  content: {
    paragraphs: string[];
    bullets?: string[];
    highlight?: string;
    note?: string;
  };
  locked: boolean;
  hasAccess: boolean;
  onUnlock: () => void;
  loading: boolean;
};

export default function SubQuestionAccordion({
  id,
  title,
  content,
  locked,
  hasAccess,
  onUnlock,
  loading,
}: SubQuestionAccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-[1.8rem] border border-slate-800 bg-slate-900/80 transition duration-300 hover:border-slate-700">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-sm text-slate-100 transition"
      >
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Part {id}</p>
          <p className="mt-2 text-base font-semibold text-white">{title}</p>
        </div>
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950/80 text-slate-100 shadow-sm shadow-black/20 transition-all duration-300 hover:bg-slate-900">
          {open ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-5 pt-1">
          <SolutionAnswerCard
            title={title}
            content={content}
            locked={locked}
            hasAccess={hasAccess}
            onUnlock={onUnlock}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}
