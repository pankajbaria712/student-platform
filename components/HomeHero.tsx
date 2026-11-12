"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, FileText, Layers, Search, Sparkles } from "lucide-react";
import type { HomepageSubject } from "@/components/HomeSections";

type HomeHeroProps = {
  subjects: HomepageSubject[];
};

export default function HomeHero({ subjects }: HomeHeroProps) {
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const normalizedQuery = submittedQuery.toLowerCase();
  const results = subjects
    .filter((subject) =>
      `${subject.title} ${subject.code} semester ${subject.semester}`
        .toLowerCase()
        .includes(normalizedQuery),
    )
    .slice(0, 5);

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmittedQuery(query.trim());
  };

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-slate-950">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-48 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-8 lg:py-20">
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

          <form
            id="resource-search"
            className="mt-8 max-w-2xl"
            role="search"
            onSubmit={handleSearch}
          >
            <label htmlFor="homepage-resource-search" className="sr-only">
              Search by subject, subject code, or semester
            </label>
            <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-slate-900 p-2 sm:flex-row">
              <div className="flex min-w-0 flex-1 items-center gap-3 px-3">
                <Search aria-hidden="true" className="h-5 w-5 shrink-0 text-slate-400" />
                <input
                  id="homepage-resource-search"
                  type="search"
                  value={query}
                  onChange={(event) => {
                    setQuery(event.target.value);
                    setSubmittedQuery("");
                  }}
                  placeholder="Try “Advanced Java” or a subject code"
                  className="min-h-11 w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-indigo-500 px-5 text-sm font-semibold text-white transition hover:bg-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                Search Resources
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </button>
            </div>
            {submittedQuery ? (
              <div
                className="mt-3 overflow-hidden rounded-2xl border border-white/10 bg-slate-900"
                aria-live="polite"
              >
                {results.length > 0 ? (
                  <ul>
                    {results.map((subject) => (
                      <li key={subject.slug} className="border-b border-white/5 last:border-0">
                        <Link
                          href={`/pyq/${subject.slug}`}
                          className="flex min-h-14 items-center justify-between gap-4 px-4 py-3 text-sm text-slate-200 transition hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-300"
                        >
                          <span>
                            <span className="block font-medium text-white">{subject.title}</span>
                            <span className="mt-1 block text-xs text-slate-400">
                              Semester {subject.semester}
                              {subject.code ? ` · ${subject.code}` : ""}
                            </span>
                          </span>
                          <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0 text-indigo-300" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="px-4 py-4 text-sm text-slate-300">
                    No matching subjects were found. Try a subject name or code.
                  </p>
                )}
              </div>
            ) : null}
          </form>

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
