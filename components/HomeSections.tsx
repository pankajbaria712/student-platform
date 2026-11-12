"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, ClipboardList, FileText, Layers } from "lucide-react";

export type HomepageSubject = {
  slug: string;
  title: string;
  code: string;
  semester: number;
};

export type HomepageResource = {
  title: string;
  subject: string;
  semester: number;
  type: string;
  year: string;
  term: string;
  href: string;
};

type HomeSectionsProps = {
  subjects: HomepageSubject[];
  recentResources: HomepageResource[];
};

const semesters = Array.from({ length: 8 }, (_, index) => index + 1);
const curatedSubjectSlugs = [
  "advanced-java-programming",
  "data-structures",
  "computer-networks",
  "software-engineering",
  "theory-of-computation",
];

const resourceTypes = [
  {
    title: "Notes",
    description: "Open the available chapter-wise notes collection.",
    href: "/notes/advanced-java-programming",
    icon: BookOpen,
  },
  {
    title: "Previous year questions",
    description: "Browse real GTU papers organized by subject and exam.",
    href: "/pyq/advanced-java-programming",
    icon: FileText,
  },
  {
    title: "MCQ practice",
    description: "Practice with the existing IPDC test library.",
    href: "/test/ipdc",
    icon: ClipboardList,
  },
  {
    title: "Syllabus",
    description: "Open a subject page with its syllabus PDF.",
    href: "/subject/software-engineering",
    icon: Layers,
  },
];

const faqItems = [
  {
    question: "How do I find resources for my subject?",
    answer:
      "Search by subject name or code, or choose a semester to browse its available subject pages.",
  },
  {
    question: "How are the latest papers selected?",
    answer:
      "The latest papers are ordered by the exam year and session in the catalog. Upload dates are not available in the current resource data.",
  },
  {
    question: "Where can I report a broken resource?",
    answer:
      "Use the report link on this page to email the team with the subject and resource link so it can be checked.",
  },
];

function SectionHeading({ id, eyebrow, title, description }: {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">
        {eyebrow}
      </p>
      <h2 id={id} className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function HomeSections({ subjects, recentResources }: HomeSectionsProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const curatedSubjects = curatedSubjectSlugs
    .map((slug) => subjects.find((subject) => subject.slug === slug))
    .filter((subject): subject is HomepageSubject => Boolean(subject));

  return (
    <div className="mx-auto max-w-7xl space-y-16 px-4 py-14 sm:px-6 sm:py-16 lg:space-y-20 lg:px-8 lg:py-20">
      <section id="semesters" aria-labelledby="semesters-heading">
        <SectionHeading
          id="semesters-heading"
          eyebrow="Start with your semester"
          title="Find your place in the course"
          description="Choose a semester to open its existing subject and study-material pages."
        />
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {semesters.map((semester) => (
            <Link
              key={semester}
              href={`/semester/${semester}`}
              className="group flex min-h-28 flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/70 p-4 transition hover:border-indigo-400/50 hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
            >
              <span className="text-xs font-medium text-slate-400">Semester</span>
              <span className="flex items-end justify-between gap-2">
                <span className="text-2xl font-semibold text-white">{semester}</span>
                <ArrowRight
                  aria-hidden="true"
                  className="mb-1 h-4 w-4 text-slate-500 transition group-hover:translate-x-1 group-hover:text-indigo-300"
                />
              </span>
              {semester === 2 ? (
                <span className="mt-2 text-xs text-amber-200">Catalog in preparation</span>
              ) : null}
            </Link>
          ))}
        </div>
      </section>

      <section id="resources" aria-labelledby="resources-heading">
        <SectionHeading
          id="resources-heading"
          eyebrow="Study resources"
          title="Everything you need to revise"
          description="Go directly to the existing notes, paper, practice, and syllabus pages."
        />
        <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {resourceTypes.map(({ title, description, href, icon: Icon }) => (
            <Link
              key={title}
              href={href}
              className="group rounded-2xl border border-white/10 bg-slate-900/60 p-5 transition hover:border-indigo-400/40 hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-400/10 text-indigo-200">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-semibold text-white">{title}</h3>
              <p className="mt-2 min-h-12 text-sm leading-6 text-slate-400">{description}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-indigo-200">
                Explore
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition group-hover:translate-x-1"
                />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section id="recent" aria-labelledby="recent-heading">
        <SectionHeading
          id="recent-heading"
          eyebrow="Latest in the catalog"
          title="Recently added resources"
          description="Papers are ordered by the exam year and session recorded in the catalog; upload dates are not available."
        />
        {recentResources.length > 0 ? (
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {recentResources.map((resource) => (
              <li key={resource.href}>
                <a
                  href={resource.href}
                  className="flex min-h-32 flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/60 p-5 transition hover:border-indigo-400/40 hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
                >
                  <span className="flex items-start justify-between gap-3">
                    <span className="font-semibold leading-6 text-white">{resource.title}</span>
                    <ArrowRight aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-indigo-300" />
                  </span>
                  <span className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-400">
                    <span>{resource.subject}</span>
                    <span>Semester {resource.semester}</span>
                    <span>{resource.type}</span>
                    <span>{resource.term} {resource.year}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 p-5 text-sm text-slate-300">
            No paper files are currently available in the resource catalog.
          </p>
        )}
      </section>

      <section id="subjects" aria-labelledby="subjects-heading">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id="subjects-heading"
            eyebrow="A curated starting point"
            title="Explore popular subjects"
            description="A handpicked list from the subject catalog, not a ranking based on usage data."
          />
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {curatedSubjects.map((subject) => (
            <Link
              key={subject.slug}
              href={`/pyq/${subject.slug}`}
              className="flex min-h-20 items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-900/60 px-5 py-4 transition hover:border-indigo-400/40 hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
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
          ))}
        </div>
      </section>

      <section
        id="why"
        className="grid gap-8 rounded-3xl border border-white/10 bg-slate-900/50 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center"
        aria-labelledby="why-heading"
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">
            Why GTU Student Hub
          </p>
          <h2 id="why-heading" className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
            Spend less time searching, more time studying.
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
            Semester and subject pages bring the available study material together, with direct links to papers, notes, syllabus PDFs, and practice where the catalog provides them.
          </p>
        </div>
        <a
          href="mailto:refunds@gtustudenthub.com?subject=Report%20a%20broken%20resource"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-indigo-300/30 px-5 py-3 text-sm font-semibold text-indigo-100 transition hover:bg-indigo-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
        >
          <FileText aria-hidden="true" className="h-4 w-4" />
          Report a broken resource
        </a>
      </section>

      <section id="faq" aria-labelledby="faq-heading">
        <SectionHeading
          id="faq-heading"
          eyebrow="Need a hand?"
          title="Frequently asked questions"
        />
        <div className="mt-6 divide-y divide-white/10 rounded-2xl border border-white/10 bg-slate-900/50">
          {faqItems.map((item, index) => {
            const isExpanded = expandedFaq === index;
            const answerId = `homepage-faq-answer-${index}`;

            return (
              <div key={item.question} className="p-4 sm:p-5">
                <button
                  type="button"
                  onClick={() => setExpandedFaq(isExpanded ? null : index)}
                  className="flex min-h-11 w-full items-center justify-between gap-4 text-left font-medium text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
                  aria-expanded={isExpanded}
                  aria-controls={answerId}
                >
                  {item.question}
                  <span aria-hidden="true" className="text-xl leading-none text-indigo-300">
                    {isExpanded ? "−" : "+"}
                  </span>
                </button>
                {isExpanded ? (
                  <p id={answerId} className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
                    {item.answer}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
