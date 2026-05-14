"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import {
  BookOpen,
  Download,
  Crown,
  ChevronRight,
  Search,
  ShieldCheck,
  FileText,
  Star,
  Users,
} from "lucide-react";

const FeatureBadge = ({ icon: Icon, text }: { icon: any; text: string }) => (
  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-gray-300">
    <Icon size={14} className="text-indigo-400" />
    {text}
  </div>
);

const SemesterCard = ({ semester }: { semester: number }) => (
  <a
    href={`/semester/${semester}`}
    className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 transition duration-500 hover:scale-[1.02] hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]"
  >
    <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-indigo-500/10 blur-2xl group-hover:bg-indigo-500/20" />

    <div className="relative z-10">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/20 text-indigo-400 transition group-hover:bg-indigo-500 group-hover:text-white">
          <BookOpen size={24} />
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
          Active
        </span>
      </div>

      <h3 className="mb-1 text-2xl font-bold text-white">
        Semester {semester}
      </h3>

      <p className="mb-4 text-sm italic text-gray-400">
        BE Computer Engineering
      </p>

      <div className="flex items-center gap-2 text-sm font-medium text-indigo-400">
        Explore Resources
        <ChevronRight
          size={16}
          className="transition group-hover:translate-x-1"
        />
      </div>
    </div>
  </a>
);

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
      <section className="relative px-page pb-16 pt-28 sm:pb-20 sm:pt-36 md:pt-40">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-indigo-400 sm:mb-8 sm:px-4 sm:text-xs">
            <Users size={14} className="shrink-0" /> Trusted by 5,000+ students
          </div>

          <h1 className="mb-5 bg-gradient-to-b from-white to-white/40 bg-clip-text text-4xl font-black leading-[1.08] text-transparent sm:text-5xl md:mb-6 md:text-7xl lg:text-8xl">
            Engineering Made
            <br />
            Simple. Effective.
          </h1>

          <p className="mx-auto mb-8 max-w-2xl px-1 text-base leading-relaxed text-gray-400 sm:mb-10 sm:text-lg md:text-xl">
            Semester notes, syllabus PDFs, PYQs, and premium printable study
            material built for BE Computer Engineering students.
          </p>

          <div className="relative mx-auto max-w-2xl px-0">
            <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-md sm:flex-row sm:items-center sm:gap-0">
              <div className="flex min-h-[48px] flex-1 items-center px-2 sm:px-0">
                <Search className="ml-2 shrink-0 text-gray-500 sm:ml-3" size={20} />
                <input
                  type="search"
                  placeholder="Search subject, notes, PYQ…"
                  className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-white outline-none placeholder:text-gray-500 sm:text-base"
                />
              </div>
              <button
                type="button"
                className="shrink-0 rounded-xl bg-indigo-600 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-indigo-500 sm:mr-1 sm:py-3"
              >
                Search
              </button>
            </div>
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
            PYQs or grab the ₹19 bundle on subject PYQ pages.
          </p>
        </div>
      </div>

      {/* Semester Section */}
      <section id="notes" className="relative z-10 scroll-mt-28 px-page py-16 sm:scroll-mt-32 sm:py-24">
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
              Choose your semester for syllabus, notes, PYQs, and premium PDFs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {semesters.map((sem) => (
              <SemesterCard key={sem} semester={sem} />
            ))}
          </div>
        </div>
      </section>

      {/* Premium */}
      <section
        id="premium"
        className="scroll-mt-28 px-page py-16 sm:scroll-mt-32 sm:py-24"
      >
        <div className="mx-auto max-w-7xl rounded-3xl border border-indigo-500/20 bg-[#0a0a0a] p-6 shadow-[0_0_40px_rgba(79,70,229,0.2)] sm:rounded-[2.5rem] sm:p-10 md:p-14">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-indigo-400 sm:mb-4 sm:text-sm">
                Premium Access
              </p>

              <h3 className="mb-5 text-3xl font-black leading-tight sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
                Download premium PDF for only ₹33
              </h3>

              <p className="mb-6 text-base text-gray-400 sm:mb-8 sm:text-lg">
                Printable PDFs, revision notes, exam important questions, and
                ad-free reading experience.
              </p>

              <div className="space-y-4">
                {[
                  "Fast PDF Downloads",
                  "Exam Revision Notes",
                  "Printable Format",
                  "Important Questions Included",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Download size={16} className="text-indigo-400" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-6 text-center sm:rounded-[2rem] sm:p-8">
              <p className="mb-2 text-sm text-gray-500 line-through">MRP ₹99</p>
              <div className="mb-3 text-5xl font-black sm:text-6xl">₹33</div>
              <p className="mb-6 text-sm text-gray-500 sm:mb-8">
                Per subject only
              </p>

              <button
                type="button"
                className="flex min-h-[3.5rem] w-full items-center justify-center gap-3 rounded-2xl bg-indigo-600 px-4 text-base font-bold text-white transition hover:bg-indigo-500 sm:text-lg"
              >
                <Crown size={20} fill="currentColor" />
                Buy Now
              </button>
            </div>
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
