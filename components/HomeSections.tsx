"use client";

import { useState } from "react";
import Link from "next/link";
// Use lightweight inline SVGs instead of importing lucide-react to avoid SSR/module issues
const ArrowRight = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M5 12h14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13 5l7 7-7 7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BookOpen = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M3 6a3 3 0 0 1 3-3h12v16a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3V6z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 6v12a3 3 0 0 0-3-3H9" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ClipboardList = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M9 2h6v4H9z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    <rect x="3" y="6" width="18" height="16" rx="2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 12h8M8 16h8" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FileText = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 2v6h6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 12h8M8 16h8" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Layers = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M12 2l9 6-9 6-9-6 9-6z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 14l9 6 9-6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Sparkles = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M12 2l1.5 3 3 1.5-3 1.5L12 12l-1.5-3L7 7.5 10 6 11.5 3 12 2z" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Zap = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const sectionHeading = (title: string, subtitle: string) => (
  <div className="max-w-3xl">
    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">{title}</p>
    <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{subtitle}</h2>
  </div>
);

const SemesterCard = ({ number, status }: { number: number; status: string }) => (
  <Link
    href={`/semester/${number}`}
    className="flex min-h-[170px] flex-col justify-between rounded-3xl border border-slate-700/70 bg-slate-950/95 p-5 transition hover:border-slate-500/70 hover:bg-slate-900/95"
  >
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Semester</p>
        <p className="mt-3 text-3xl font-bold text-white">{number}</p>
      </div>
      <span className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${status === "Live" ? "bg-emerald-500/15 text-emerald-200" : "bg-slate-700/70 text-slate-300"}`}>
        {status}
      </span>
    </div>
    <p className="mt-5 text-sm leading-6 text-slate-400">Notes, PYQs, solutions, and syllabus resources for semester {number}.</p>
  </Link>
);

const ResourceCard = ({ icon: Icon, title, description, href }: { icon: any; title: string; description: string; href: string }) => (
  <Link
    href={href}
    className="flex min-h-[220px] flex-col justify-between rounded-3xl border border-slate-700/70 bg-slate-950/95 p-6 transition hover:border-slate-500/70 hover:bg-slate-900/95"
  >
    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-800 text-slate-100">
      <Icon className="h-5 w-5" />
    </div>
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm leading-6 text-slate-400">{description}</p>
    </div>
    <span className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-300">
      Open <ArrowRight className="h-4 w-4" />
    </span>
  </Link>
);

const faqItems = [
  {
    question: "Is GTU Student Hub free?",
    answer: "Yes. The platform offers free access to notes, PYQs, syllabus guides, and MCQ practice so GTU students can start preparing right away.",
  },
  {
    question: "How do I access notes?",
    answer: "Use the search bar, explore semester pages, or choose your subject card to open chapter notes instantly.",
  },
  {
    question: "Can I download PDFs?",
    answer: "Most notes and solutions are available as downloadable PDFs for offline study.",
  },
  {
    question: "How often are resources updated?",
    answer: "We update GTU resources regularly to keep papers, notes, and practice aligned with the latest syllabus.",
  },
];

const HomeSections = () => {
  const [expanded, setExpanded] = useState<null | number>(0);

  return (
    <div className="space-y-16 px-4 pb-20 sm:px-6 lg:px-8">
      <section id="why" className="space-y-8 rounded-3xl border border-slate-700/70 bg-slate-950/95 px-5 py-8 sm:px-7 sm:py-10">
        {sectionHeading("Why GTU Student Hub", "A clean, reliable study hub built for GTU students.")}
        <p className="max-w-3xl text-base leading-7 text-slate-300">
          Find semester notes, past papers, MCQ practice, and syllabus guides in one organized place. The platform is built for quick review, easy access, and confident exam preparation.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { label: "Notes", value: "Chapters and summaries" },
            { label: "PYQs", value: "Solved previous year papers" },
            { label: "MCQ", value: "Practice with instant feedback" },
          ].map((item) => (
            <div key={item.label} className="rounded-3xl border border-slate-700/70 bg-slate-900/95 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{item.label}</p>
              <p className="mt-3 text-base font-semibold text-white">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="semesters" className="space-y-8">
        {sectionHeading("Explore by semester", "Choose your semester and start with materials for your current year.")}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {[3, 4, 5, 6, 7, 8].map((semester) => (
            <SemesterCard key={semester} number={semester} status={semester >= 3 && semester <= 7 ? "Live" : "Coming Soon"} />
          ))}
        </div>
      </section>

      <section id="resources" className="space-y-8">
        {sectionHeading("Student resources", "Access the study tools GTU students use most.")}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <ResourceCard icon={BookOpen} title="Notes" description="Chapter notes, summaries, and revision guides." href="/notes" />
          <ResourceCard icon={ClipboardList} title="PYQs" description="Previous year papers and solved answers." href="/pyq" />
          <ResourceCard icon={Sparkles} title="MCQ Practice" description="Timed quizzes and instant results." href="/mcq" />
          <ResourceCard icon={Layers} title="Syllabus" description="Semester-wise syllabus and topic mapping." href="/semester/5" />
          <ResourceCard icon={FileText} title="Solutions" description="Downloadable solution PDFs for fast review." href="/solutions" />
          <ResourceCard icon={Zap} title="Quick review" description="Find the right material in seconds." href="/notes" />
        </div>
      </section>

      <section id="workflow" className="space-y-8 rounded-3xl border border-slate-700/70 bg-slate-950/95 px-5 py-8 sm:px-7 sm:py-10">
        {sectionHeading("How to use it", "A simple study flow for GTU exam preparation.")}
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { step: "1", title: "Pick your semester", detail: "Start with your current GTU semester and subject." },
            { step: "2", title: "Open notes or PYQs", detail: "Use clear navigation to find the exact chapter." },
            { step: "3", title: "Practice and revise", detail: "Review notes, solve past papers, and test yourself." },
          ].map((item) => (
            <div key={item.step} className="rounded-3xl border border-slate-700/70 bg-slate-900/95 p-5">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-800 text-slate-100 font-semibold">{item.step}</div>
              <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="space-y-8">
        {sectionHeading("Frequently asked questions", "Quick answers for GTU students.")}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={item.question} className="overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-950/95">
              <button
                type="button"
                onClick={() => setExpanded(expanded === index ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
              >
                <span className="text-base font-semibold text-white">{item.question}</span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-800 text-slate-300">
                  {expanded === index ? "−" : "+"}
                </span>
              </button>
              {expanded === index ? (
                <div className="border-t border-slate-700/70 px-5 py-5 text-sm leading-7 text-slate-300">
                  {item.answer}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomeSections;
