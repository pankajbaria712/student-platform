import React from "react";
import Link from "next/link";
import {
  FileText,
  Download,
  Lock,
  ChevronLeft,
  ExternalLink,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Disclaimer from "@/components/Disclaimer";

const pyqPapers = [
  {
    title: "TOC Summer 2025",
    code: "3160704",
    year: "2025",
    type: "Summer",
    pdf: "/pdfs/pyq/theory-of-computation/toc-summer-2025.pdf",
    solutionAvailable: true,
  },
  {
    title: "TOC Winter 2024",
    code: "3160704",
    year: "2024",
    type: "Winter",
    pdf: "/pdfs/pyq/theory-of-computation/toc-winter-2024.pdf",
    solutionAvailable: true,
  },
  {
    title: "TOC Summer 2024",
    code: "3160704",
    year: "2024",
    type: "Summer",
    pdf: "/pdfs/pyq/theory-of-computation/toc-summer-2024.pdf",
    solutionAvailable: true,
  },
  {
    title: "TOC Winter 2023",
    code: "3160704",
    year: "2023",
    type: "Winter",
    pdf: "/pdfs/pyq/theory-of-computation/toc-winter-2023.pdf",
    solutionAvailable: true,
  },
  {
    title: "TOC Summer 2023",
    code: "3160704",
    year: "2023",
    type: "Summer",
    pdf: "/pdfs/pyq/theory-of-computation/toc-summer-2023.pdf",
    solutionAvailable: true,
  },
];

const ActionButton = ({
  icon: Icon,
  label,
  href,
  primary = false,
  premium = false,
  download = false,
}) => (
  <a
    href={href}
    download={download}
    className={`
      flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-[11px] font-black transition-all active:scale-95 whitespace-nowrap
      ${
        premium
          ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/20 border border-indigo-400/30 hover:shadow-indigo-500/40 hover:brightness-110"
          : primary
            ? "bg-white text-black hover:bg-gray-200"
            : "bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white"
      }
    `}
  >
    <Icon size={14} className={premium ? "animate-pulse" : ""} />
    {label}
  </a>
);

const PaperCard = ({ paper }) => (
  <div className="group relative rounded-3xl bg-white/[0.02] border border-white/5 p-6 hover:bg-white/[0.04] transition-all duration-300">
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
      <div className="flex items-center gap-5">
        <div className="h-12 w-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
          <FileText size={24} />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-black uppercase tracking-widest text-indigo-500">
              {paper.type} {paper.year}
            </span>
            <div className="h-1 w-1 rounded-full bg-white/20" />
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
              {paper.code}
            </span>
          </div>
          <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
            {paper.title}
          </h3>
          <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-gray-500">
            Source: GTU
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <ActionButton icon={ExternalLink} label="View Paper" href={paper.pdf} />
        <ActionButton
          icon={Download}
          label="Download"
          href={paper.pdf}
          download
        />
        <div className="h-8 w-px bg-white/5 hidden lg:block mx-2" />
        <ActionButton icon={Lock} label="Locked Content" href="#" premium />
      </div>
    </div>
  </div>
);

export default function PYQPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-indigo-500/30 font-sans antialiased overflow-x-hidden pb-20">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-indigo-600/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-600/5 blur-[120px]" />
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-20">
        {/* Navigation Breadcrumb */}
        <Link
          href="/semester/6"
          className="flex items-center gap-2 text-gray-500 hover:text-indigo-400 transition-colors text-[10px] font-black uppercase tracking-[0.2em] mb-10"
        >
          <ChevronLeft size={14} /> Back to Semester 6
        </Link>

        {/* Page Header */}
        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-3xl bg-indigo-500 px-5 py-3 text-sm font-black text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-400"
          >
            <Zap size={16} /> Buy All Papers • ₹19
          </a>

          <header className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-6">
              <Zap size={12} fill="currentColor" /> Expert Solutions Available
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-tight">
              Theory of{" "}
              <span className="text-indigo-500 italic underline decoration-white/10 underline-offset-8">
                Computation
              </span>{" "}
              <br />
              PYQ Library
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
              Access verified previous year question papers and unlock
              step-by-step verified solutions curated by university gold
              medalists.
            </p>
          </header>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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
          <div className="flex flex-col gap-2 px-6 mb-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600">
              Available Papers
            </span>
            <span className="text-[10px] text-gray-500">Source: GTU</span>
          </div>
          {pyqPapers.map((paper) => (
            <PaperCard key={paper.title} paper={paper} />
          ))}
        </div>

        <div className="mb-16 mt-12">
          <Disclaimer />
        </div>

        {/* Micro-Transaction Footer */}
        <section className="mt-20 p-8 rounded-[2.5rem] bg-indigo-600/5 border border-indigo-500/10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h4 className="text-xl font-bold mb-2">
              Need a specific solution?
            </h4>
            <p className="text-gray-500 text-sm">
              Request a solution for any paper and get it within 24 hours.
            </p>
          </div>
          <button className="px-8 py-4 bg-white text-black rounded-2xl font-black text-sm hover:scale-105 transition-transform active:scale-95 shadow-xl shadow-white/5">
            Request Custom Solution
          </button>
        </section>
      </main>

      <footer className="mt-20 border-t border-white/5 py-12 text-center">
        <p className="text-[10px] text-gray-600 font-black uppercase tracking-[0.4em]">
          Powered by EduNext Advanced Learning Systems
        </p>
      </footer>
    </div>
  );
}
