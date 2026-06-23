"use client";

import Link from "next/link";
import { subjectData as allPyqSubjects } from "../_data/subjects";
import {
  ChevronLeft,
  ShieldCheck,
  Sparkles,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Disclaimer from "@/components/Disclaimer";
import PyqPaperCard from "@/components/PyqPaperCard";
import type { Subject } from "../_data/subjects";

const FEATURES: Array<{ icon: LucideIcon; title: string; desc: string }> = [
  { icon: ShieldCheck, title: "Verified", desc: "Corrected by experts" },
  { icon: Sparkles, title: "Step-by-Step", desc: "Detailed explanations" },
  { icon: Zap, title: "Instant", desc: "Email + Web Access" },
];

export function PyqSubjectView({
  subject,
  subjectSlug,
}: {
  subject: Subject;
  subjectSlug: string;
}) {
  const freeTestSubject = [
    "integrated-personality-development-course",
    "ipdc-1",
  ].includes(subjectSlug);
  const isIoTSubject = subjectSlug === "iot-and-applications";
  const allSolutionsComingSoon =
    !freeTestSubject &&
    subject.papers.every((paper) => !paper.solutionAvailable);
  const isPaid = true;

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050505] pb-40 font-sans text-white antialiased selection:bg-indigo-500/30 sm:pb-24">
      <div className="fixed inset-0 z-0">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-indigo-600/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-purple-600/5 blur-[120px]" />
      </div>

      <div className="relative z-10">
              </div>

      <main className="relative z-10 mx-auto max-w-6xl px-4 pb-12 pt-8 sm:pb-20 sm:pt-12">
        <nav className="mb-6 text-sm text-gray-400" aria-label="Breadcrumb">
          <Link href="/" className="text-indigo-400 hover:text-indigo-300">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={`/semester/${subject.semester}`}
            className="text-indigo-400 hover:text-indigo-300"
          >
            Semester {subject.semester}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white">{subject.title}</span>
        </nav>

        <Link
          href={`/semester/${subject.semester}`}
          className="mb-10 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 transition-colors hover:text-indigo-400"
        >
          <ChevronLeft size={14} />
          Back to Semester {subject.semester}
        </Link>

        <header className="mb-10 sm:mb-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_380px] lg:items-start">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-indigo-400">
                <Zap size={12} fill="currentColor" />
                Expert PYQ Collection
              </div>

              <h1 className="mb-4 text-3xl font-black leading-tight tracking-tighter sm:text-4xl md:mb-6 md:text-6xl">
                {subject.title}
                <br />
                <span className="italic text-indigo-500 underline decoration-white/10 underline-offset-8">
                  {freeTestSubject
                    ? "IPDC Practice Test Library"
                    : "Question Papers Solution"}
                </span>
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
                {subject.description}
              </p>

              {isIoTSubject ? (
                <div className="mt-6 rounded-3xl border border-indigo-500/20 bg-indigo-500/10 p-5 text-sm text-indigo-100">
                  <p className="font-black text-indigo-200">Note</p>
                  <p className="mt-2 text-sm text-indigo-100">
                    Other paper solutions will be added at 1:30 PM soon.
                  </p>
                </div>
              ) : null}
            </div>

          </div>
        </header>

        <section className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {FEATURES.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                <item.icon size={20} />
              </div>
              <div>
                <div className="text-xs font-black uppercase tracking-widest">
                  {item.title}
                </div>
                <div className="text-[10px] font-bold text-gray-500">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="space-y-4">
          {allSolutionsComingSoon ? (
            <div className="rounded-3xl border border-amber-400/20 bg-amber-400/10 p-6 text-amber-100 shadow-lg shadow-amber-500/10">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-amber-200">
                âš ï¸ Solutions Coming Soon
              </p>
              <p className="mt-3 text-sm leading-6 text-gray-100">
                {subject.title} solution sets are currently under preparation and will be uploaded soon.
              </p>
              <p className="mt-3 text-xs text-gray-300">
                Currently only IPDC interactive tests and selected subjects are fully available.
              </p>
            </div>
          ) : null}

          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600">
              Available Papers
            </span>
            <span className="text-[10px] text-gray-500">Source: GTU</span>
          </div>

          {subject.papers.length > 0 ? (
            (() => {
              const papers =
                subjectSlug === "iot-and-applications"
                  ? subject.papers.map((p) => ({
                      ...p,
                      title: p.title.replace(/^WP\s+/i, "IOT "),
                    }))
                  : subject.papers;

              return papers.map((paper) => (
                <PyqPaperCard
                  key={`${paper.code}-${paper.year}-${paper.type}`}
                  paper={paper}
                  subjectSlug={subjectSlug}
                  isPaid={isPaid}
                  onRequestUnlock={() => {
                    document
                      .getElementById("bundle-offer-card")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                />
              ));
            })()
          ) : (
            <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-10 text-center">
              <p className="text-lg font-semibold text-gray-400">
                No papers available yet.
              </p>
            </div>
          )}
        </section>

        {/* Related PYQ subjects - show 4-6 related previous year paper cards */}
        <section className="mb-12">
          <h3 className="mb-4 text-lg font-bold text-white">Related Previous Year Papers</h3>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Object.entries(allPyqSubjects)
              .filter(([key, s]) => s.semester === subject.semester && key !== subjectSlug)
              .slice(0, 6)
              .map(([key, s]) => (
                <Link
                  key={key}
                  href={`/pyq/${key}`}
                  className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition hover:border-indigo-500/30"
                >
                  <div className="text-sm font-semibold text-white">{s.title}</div>
                  <div className="mt-1 text-xs text-gray-400">Semester {s.semester}</div>
                </Link>
              ))}
          </div>
        </section>

        <div className="mb-16 mt-12">
          <Disclaimer />
        </div>
      </main>

      <footer className="mt-12 border-t border-white/5 py-10 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-600">
          Powered by GTUStudentHub Advanced Learning Systems
        </p>
      </footer>
    </div>
  );
}

