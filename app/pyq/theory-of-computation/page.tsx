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
import Navbar from "@/components/Navbar";
import BundleOfferCard from "@/components/BundleOfferCard";

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
  <div className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition-all duration-300 hover:bg-white/[0.04] sm:rounded-3xl sm:p-6">
    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex min-w-0 flex-1 items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 transition-all group-hover:bg-indigo-500 group-hover:text-white sm:h-12 sm:w-12">
          <FileText size={22} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="mb-1 flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-indigo-500">
              {paper.type} {paper.year}
            </span>
            <div className="h-1 w-1 rounded-full bg-white/20" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
              {paper.code}
            </span>
          </div>
          <h3 className="text-base font-bold text-white transition-colors group-hover:text-indigo-400 sm:text-lg">
            {paper.title}
          </h3>
          <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-gray-500">
            Source: GTU
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-stretch gap-2 sm:gap-3 lg:justify-end">
        <ActionButton icon={ExternalLink} label="View Paper" href={paper.pdf} />
        <ActionButton
          icon={Download}
          label="Download"
          href={paper.pdf}
          download
        />
        <div className="mx-2 hidden h-8 w-px bg-white/5 lg:block" />
        <ActionButton icon={Lock} label="Open Solution" href="#" premium />
      </div>
    </div>
  </div>
);

export default function PYQPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050505] font-sans text-white antialiased selection:bg-indigo-500/30 pb-safe">
      <div className="fixed inset-0 z-0">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-indigo-600/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-purple-600/5 blur-[120px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
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
                Access verified previous year question papers and unlock
                verified solutions of PYQ Papers curated by university gold
                medalists.
              </p>
            </div>
            <div className="lg:justify-self-end">
              <BundleOfferCard />
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
            <PaperCard key={paper.title} paper={paper} />
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
