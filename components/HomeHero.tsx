"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, FileText, Layers, Sparkles } from "lucide-react";
import type { HomepageSubject } from "@/components/HomeSections";
import GlobalSearch from "@/components/GlobalSearch";
import type { SearchItem } from "@/lib/search/search-data";

type HomeHeroProps = {
  subjects: HomepageSubject[];
  searchItems: SearchItem[];
};

export default function HomeHero({ subjects, searchItems }: HomeHeroProps) {
  return (
    <section className="relative z-20 border-b border-white/10 bg-slate-950">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-48 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-8 lg:py-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-400/10 px-3 py-1.5 text-xs font-semibold text-indigo-200">
            <Sparkles aria-hidden="true" className="h-4 w-4" />
            GTU study resources
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Your GTU Preparation Starts Here.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Find semester-wise notes, previous year papers, syllabus PDFs, and
            practice resources in one easy-to-navigate place.
          </p>

          <div className="mt-8">
            <GlobalSearch items={searchItems} mode="suggestions" />
          </div>

          <Link
            href="#semesters"
            className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-xl px-1 text-sm font-semibold text-slate-200 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
          >
            Browse Semesters
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>

        <aside className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-white">A clearer way to prepare</h2>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            Start with your semester, choose a subject, then open the resource
            that fits your study session.
          </p>
          <ul className="mt-6 space-y-4">
            {[
              { label: "Chapter-wise notes", icon: BookOpen },
              { label: "Previous year papers", icon: FileText },
              { label: "MCQ practice", icon: Sparkles },
              { label: "Subject syllabus PDFs", icon: Layers },
            ].map(({ label, icon: Icon }) => (
              <li key={label} className="flex items-center gap-3 text-sm text-slate-200">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-indigo-300">
                  <Icon aria-hidden="true" className="h-4 w-4" />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
