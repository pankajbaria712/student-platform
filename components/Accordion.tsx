"use client";
import { useState } from "react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  onToggle?: (open: boolean) => void;
}

export default function Accordion({ title, children, onToggle }: AccordionProps) {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    const next = !open;
    setOpen(next);
    onToggle?.(next);
  };

  return (
    <div className="border-b border-slate-700 py-3">
      <button
        onClick={toggle}
        className="w-full text-left flex items-center justify-between gap-3 py-2 text-sm text-slate-100"
        aria-expanded={open}
      >
        <span className="flex-1 pr-4 truncate">{title}</span>
        <svg
          className={`h-4 w-4 transform transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-[max-height] duration-300 ${open ? "max-h-96" : "max-h-0"}`}
        aria-hidden={!open}
      >
        <div className="pt-3 text-sm text-slate-300">{children}</div>
      </div>
    </div>
  );
}
