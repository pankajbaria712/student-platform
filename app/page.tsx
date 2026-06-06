"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import GlobalSearch from "@/components/GlobalSearch";
import { BookOpen, ChevronRight, ShieldCheck, FileText, Star, Users } from "lucide-react";

const FeatureBadge = ({ icon: Icon, text }: { icon: any; text: string }) => (
  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-gray-300">
    <Icon size={14} className="text-indigo-400" />
    {text}
  </div>
);

const SemesterCard = ({ semester }: { semester: number }) => {
  const isActive = [5, 6].includes(semester);
  const cardClasses = isActive
    ? "group relative block overflow-hidden rounded-3xl border border-indigo-500/40 bg-gradient-to-br from-indigo-600/10 via-slate-950/80 to-transparent p-6 shadow-[0_0_35px_rgba(99,102,241,0.3)] transition duration-500 hover:scale-[1.02]"
    : "group relative block overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 opacity-70 transition duration-500 hover:scale-[1.01]";
  const statusClasses = isActive
    ? "bg-indigo-500/15 text-indigo-200 ring-1 ring-indigo-500/25"
    : "bg-white/5 text-gray-400 ring-1 ring-white/10";
  const cardContent = (
    <>
      <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-indigo-500/10 blur-2xl" />

      <div className="relative z-10">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/20 text-indigo-400 transition group-hover:bg-indigo-500 group-hover:text-white">
            <BookOpen size={24} />
          </div>

          <span className={`text-xs font-bold uppercase tracking-widest ${statusClasses}`}>
            {isActive ? "ACTIVE" : "COMING SOON"}
          </span>
        </div>

        <h3 className="mb-1 text-2xl font-bold text-white">Semester {semester}</h3>

        <p className="mb-4 text-sm italic text-gray-400">BE Computer Engineering</p>

        <div className={`flex items-center gap-2 text-sm font-medium ${isActive ? "text-indigo-400" : "text-gray-400"}`}>
          {isActive ? "Explore Resources" : "Launches soon"}
          <ChevronRight
            size={16}
            className={`transition ${isActive ? "group-hover:translate-x-1" : ""}`}
          />
        </div>
      </div>
    </>
  );

  if (isActive) {
    return (
      <a href={`/semester/${semester}`} className={cardClasses}>
        {cardContent}
      </a>
    );
  }

  return (
    <div className={`${cardClasses} pointer-events-none`} aria-disabled="true">
      {cardContent}
    </div>
  );
};

export default function HomePage() {
  const semesters = [3, 4, 5, 6, 7, 8];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050505] font-sans text-white antialiased selection:bg-indigo-500/40">
      <Navbar />

      {/* Background Glow */}
      <div className="fixed inset-0 z-0">
        <div className="absolute left-[-10%] top-[-10%] h-[50%] w-[50%] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] h-[40%] w-[40%] rounded-full bg-purple-600/10 blur-[120px]" />
      </div>

      {/* Hero */}
      <section className="relative px-page pb-16 pt-20 sm:pb-20 sm:pt-20 md:pt-20">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-indigo-400 sm:mb-8 sm:px-4 sm:text-xs">
            <Users size={14} className="shrink-0" /> Trusted by 5,000+ students
          </div>

          <div className="inline-flex items-center justify-center gap-3 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.35em] text-indigo-300 sm:mb-8">
            GTU Computer Engineering Semester 6 
          </div>

          <h1 className="mb-5 bg-gradient-to-b from-white to-white/40 bg-clip-text text-4xl font-black leading-[1.08] text-transparent sm:text-5xl md:mb-6 md:text-7xl lg:text-8xl">
            CE Engineering Made
            <br />
            Simple. Effective.
          </h1>

          <p className="mx-auto mb-8 max-w-2xl px-1 text-base leading-relaxed text-gray-400 sm:mb-10 sm:text-lg md:text-xl">
            PYQs, solved solutions, and IPDC tests built for GTU Computer Engineering students — with a polished, startup-ready experience.
          </p>

          <div className="mx-auto mb-8 flex max-w-2xl flex-wrap items-center justify-center gap-3">
            {[
              "PYQs",
              "Solved Papers",
              "IPDC Tests",
              "Upcoming Subjects",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-gray-300"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mx-auto max-w-2xl px-0">
            <GlobalSearch />
          </div>
        </div>
      </section>

      <div
        id="pyq"
        className="relative z-10 scroll-mt-28 px-page pb-8 pt-4 sm:scroll-mt-32"
      >
        <div className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-5 text-center sm:px-6 sm:text-left">
          <p className="text-sm font-semibold text-white sm:text-base">
            Previous year papers & solutions
          </p>
          <p className="mt-1 text-xs text-gray-400 sm:text-sm">
            Open any semester, pick a subject, then use{" "}
            <span className="font-semibold text-indigo-300">Papers</span> for
            PYQs and open solved solutions directly from subject pages.
          </p>
        </div>
      </div>

      {/* Semester Section */}
      <section
        id="notes"
        className="relative z-10 scroll-mt-28 px-page py-16 sm:scroll-mt-32 sm:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-6 sm:mb-16 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="mb-3 text-3xl font-black sm:mb-4 sm:text-4xl">
                Academic resources
              </h2>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <FeatureBadge icon={FileText} text="150+ Notes" />
                <FeatureBadge icon={Star} text="Top Rated PYQs" />
                <FeatureBadge icon={ShieldCheck} text="Verified Content" />
              </div>
            </div>

            <p className="max-w-md text-sm text-gray-400 md:text-right">
              Choose your semester for syllabus, notes, PYQs, and solution bundles.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {semesters.map((sem) => (
              <SemesterCard key={sem} semester={sem} />
            ))}
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer
        id="footer"
        className="relative z-10 border-t border-white/5 px-page pb-safe pt-16 sm:pt-20"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row sm:gap-8">
          <div className="text-center text-sm text-gray-500 sm:text-left">
            © 2026 GTUStudentHub. All rights reserved.
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
            <a href="/privacy-policy" className="hover:text-white">
              Privacy
            </a>
            <a href="/terms" className="hover:text-white">
              Terms
            </a>
            <a href="/refund-policy" className="hover:text-white">
              Refunds
            </a>
            <a href="/contact" className="hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
