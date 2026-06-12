"use client";

import Link from "next/link";
import { ChevronLeft, Sparkles, ShieldCheck, Zap } from "lucide-react";
import type { Paper } from "@/app/pyq/_data/subjects";
import Disclaimer from "@/components/Disclaimer";
import PyqPaperCard from "@/components/PyqPaperCard";

const subjectSlug = "theory-of-computation";
const subjectCode = "3160704";

const pyqPapers: Paper[] = [
  {
    title: "TOC Winter 2025",
    code: "3160704",
    year: "2025",
    type: "Winter",
    pdf: "/pdfs/pyq/theory-of-computation/toc-winter-2025.pdf",
    solutionAvailable: true,
    solutionFile: "toc-winter-2025-solution.pdf",
  },
  {
    title: "TOC Winter 2024",
    code: "3160704",
    year: "2024",
    type: "Winter",
    pdf: "/pdfs/pyq/theory-of-computation/toc-winter-2024.pdf",
    solutionAvailable: true,
    solutionFile: "toc-winter-2024-solution.pdf",
  },
  {
    title: "TOC Summer 2024",
    code: "3160704",
    year: "2024",
    type: "Summer",
    pdf: "/pdfs/pyq/theory-of-computation/toc-summer-2024.pdf",
    solutionAvailable: true,
    solutionFile: "toc-summer-2024-solution.pdf",
  },
  {
    title: "TOC Winter 2022",
    code: "3160704",
    year: "2022",
    type: "Winter",
    pdf: "/pdfs/pyq/theory-of-computation/toc-winter-2022.pdf",
    solutionAvailable: true,
    solutionFile: "toc-winter-2022-solution.pdf",
  },
];

const scrollToUnlock = () =>
  document
    .getElementById("bundle-offer-card")
    ?.scrollIntoView({ behavior: "smooth" });

export default function PYQPage() {
  const isPaid = true;

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050505] font-sans text-white antialiased selection:bg-indigo-500/30 pb-safe">
      <div className="fixed inset-0 z-0">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-indigo-600/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-purple-600/5 blur-[120px]" />
      </div>

      <div className="relative z-10">
              </div>

      <main className="relative z-10 mx-auto max-w-6xl px-page pb-16 pt-6 sm:pb-20 sm:pt-10">
        <Link
          href="/semester/6"
          className="mb-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 transition-colors hover:text-indigo-400 sm:mb-10"
        >
          <ChevronLeft size={14} /> Back to Semester 6
        </Link>

        <header className="mb-10 sm:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-indigo-400">
            <Zap size={12} fill="currentColor" /> Expert solutions available
          </div>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <h1 className="mb-4 text-3xl font-black leading-tight tracking-tighter sm:text-4xl md:text-6xl">
                Theory of{" "}
                <span className="text-indigo-500 italic underline decoration-white/10 underline-offset-8">
                  Computation
                </span>{" "}
                PYQ Solution
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
                Access verified previous year question papers and verified solutions curated by university gold medalists.
              </p>
            </div>
          </div>
        </header>

        <div className="mb-10 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3 md:mb-12">
          {[
            {
              icon: ShieldCheck,
              title: "Verified",
              desc: "Corrected by experts",
            },
            {
              icon: Sparkles,
              title: "Step-by-Step",
              desc: "Detailed explanations",
            },
            { icon: Zap, title: "Instant", desc: "Email + Web Access" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5"
            >
              <div className="h-10 w-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                <item.icon size={20} />
              </div>
              <div>
                <div className="text-xs font-black uppercase tracking-widest">
                  {item.title}
                </div>
                <div className="text-[10px] text-gray-500 font-bold">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Papers List */}
        <div className="space-y-4">
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600">
              Available Papers
            </span>
            <span className="text-[10px] text-gray-500">Source: GTU</span>
          </div>
          {pyqPapers.map((paper) => (
            <PyqPaperCard
              key={paper.title}
              paper={paper}
              subjectSlug={subjectSlug}
              isPaid={isPaid}
              onRequestUnlock={scrollToUnlock}
            />
          ))}
        </div>

        <div className="mb-16 mt-12">
          <Disclaimer />
        </div>
      </main>

      <footer className="border-t border-white/5 py-10 pb-safe text-center sm:py-12">
        <p className="text-[10px] text-gray-600 font-black uppercase tracking-[0.4em]">
          Powered by GTUStudentHub Advanced Learning Systems
        </p>
      </footer>
    </div>
  );
}

