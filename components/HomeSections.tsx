"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, BookmarkX, ClipboardList, FileText, Layers } from "lucide-react";
import BookmarkButton from "@/components/BookmarkButton";
import { useStudentEngagement } from "@/components/StudentEngagementProvider";

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
      "Use the feedback form to prepare an email with the resource link and a description of the issue.",
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

function EngagementHomeSection() {
  const {
    recent,
    bookmarks,
    mcqProgress,
    ready,
    storageUnavailable,
    recoveredInvalidData,
    isResourceAvailable,
    recordViewedResource,
    removeRecent,
    clearRecent,
  } = useStudentEngagement();
  const recentTests = Object.values(mcqProgress)
    .sort((first, second) => second.updatedAt - first.updatedAt)
    .slice(0, 3);

  return (
    <>
      <section id="recently-viewed" aria-labelledby="recently-viewed-heading">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id="recently-viewed-heading"
            eyebrow="Pick up where you left off"
            title="Recently viewed"
            description="Your latest subjects and resources, saved only in this browser."
          />
          <div className="flex items-center gap-3">
            {recent.length > 0 ? (
              <button
                type="button"
                onClick={clearRecent}
                className="min-h-10 rounded-lg px-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
              >
                Clear history
              </button>
            ) : null}
            <Link
              href="/saved"
              className="inline-flex min-h-10 items-center rounded-lg px-3 text-sm font-semibold text-indigo-200 transition hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
            >
              Saved resources ({ready ? bookmarks.length : 0})
            </Link>
          </div>
        </div>

        {storageUnavailable || recoveredInvalidData ? (
          <p
            role="status"
            className="mt-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
          >
            {storageUnavailable
              ? "Browser storage is unavailable. Your activity may not persist after leaving this page."
              : "Some saved browser data was invalid or outdated and was skipped."}
          </p>
        ) : null}

        {!ready ? (
          <p className="mt-5 rounded-2xl border border-white/10 bg-slate-900/50 p-5 text-sm text-slate-400">
            Loading your recent resources…
          </p>
        ) : recent.length ? (
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {recent.slice(0, 6).map((resource) => {
              const available = isResourceAvailable(resource.href);
              const linkClass =
                "flex min-h-28 min-w-0 flex-1 flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/60 p-4 transition hover:border-indigo-400/40 hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300";
              const content = (
                <>
                  <span className="font-semibold leading-6 text-white">{resource.title}</span>
                  <span className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-400">
                    <span>{resource.type}</span>
                    {resource.subjectName ? <span>{resource.subjectName}</span> : null}
                    {resource.semester ? <span>Semester {resource.semester}</span> : null}
                  </span>
                </>
              );

              return (
                <li key={resource.href} className="flex items-start gap-2">
                  {available ? (
                    resource.href.endsWith(".pdf") ? (
                      <a
                        href={resource.href}
                        className={linkClass}
                        onClick={() => recordViewedResource(resource)}
                      >
                        {content}
                      </a>
                    ) : (
                      <Link
                        href={resource.href}
                        className={linkClass}
                        onClick={() => recordViewedResource(resource)}
                      >
                        {content}
                      </Link>
                    )
                  ) : (
                    <div className={`${linkClass} cursor-default`}>
                      <span className="font-semibold text-slate-300">{resource.title}</span>
                      <span className="mt-3 text-xs text-amber-200">
                        This resource is no longer in the current catalog.
                      </span>
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={() => removeRecent(resource.href)}
                    aria-label={`Remove ${resource.title} from recent history`}
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 text-slate-400 transition hover:border-red-300/30 hover:bg-red-400/10 hover:text-red-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
                  >
                    <BookmarkX aria-hidden="true" className="h-4 w-4" />
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="mt-5 rounded-2xl border border-dashed border-white/15 bg-slate-900/50 p-5 text-sm text-slate-400">
            Resources you visit will appear here.
          </p>
        )}
      </section>

      <section aria-labelledby="mcq-progress-heading">
        <SectionHeading
          id="mcq-progress-heading"
          eyebrow="Keep practicing"
          title="MCQ progress"
          description="Answer counts and submitted status come from your saved practice attempts on this device."
        />
        {recentTests.length ? (
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {recentTests.map((progress) => {
              const href = `/test/ipdc/${progress.testSlug}`;
              const available = isResourceAvailable(href);
              const answered = Math.min(
                Object.keys(progress.answers).length,
                progress.totalQuestions,
              );
              const card = (
                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-semibold text-white">{progress.title}</h3>
                    <span className="rounded-full bg-indigo-400/10 px-2.5 py-1 text-[11px] font-semibold text-indigo-200">
                      {progress.completedAt ? "Submitted" : "In progress"}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-slate-400">
                    {answered} of {progress.totalQuestions} questions answered
                  </p>
                  <progress
                    value={answered}
                    max={progress.totalQuestions}
                    aria-label={`${progress.title}: ${answered} of ${progress.totalQuestions} questions answered`}
                    className="mt-3 h-2 w-full accent-indigo-400"
                  />
                </div>
              );
              return (
                <li key={progress.testSlug}>
                  {available ? (
                    <Link
                      href={href}
                      className="block rounded-2xl transition hover:border-indigo-400/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
                    >
                      {card}
                    </Link>
                  ) : (
                    <div className="opacity-70">{card}</div>
                  )}
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="mt-5 rounded-2xl border border-dashed border-white/15 bg-slate-900/50 p-5 text-sm text-slate-400">
            No MCQ attempts are saved yet. Your answered-question progress will show here after you start a test.
            {" "}
            <Link href="/test/ipdc" className="font-semibold text-indigo-200 hover:text-white">
              Browse IPDC tests
            </Link>
          </p>
        )}
      </section>
    </>
  );
}

export default function HomeSections({ subjects, recentResources }: HomeSectionsProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const { bookmarks, recordViewedResource } = useStudentEngagement();
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

      <EngagementHomeSection />

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
              <li key={resource.href} className="flex items-start gap-2">
                <a
                  href={resource.href}
                  onClick={() =>
                    recordViewedResource({
                      id: resource.href,
                      title: resource.title,
                      href: resource.href,
                      type: "PYQ",
                      subjectName: resource.subject,
                      semester: resource.semester,
                    })
                  }
                  className="flex min-h-32 min-w-0 flex-1 flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/60 p-5 transition hover:border-indigo-400/40 hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
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
                <div className="mt-1">
                  <BookmarkButton
                    compact
                    resource={{
                      id: resource.href,
                      title: resource.title,
                      href: resource.href,
                      type: "PYQ",
                      subjectName: resource.subject,
                      semester: resource.semester,
                    }}
                  />
                </div>
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
            <div
              key={subject.slug}
              className="flex items-center gap-2"
            >
              <Link
                href={`/pyq/${subject.slug}`}
                className="flex min-h-20 min-w-0 flex-1 items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-900/60 px-5 py-4 transition hover:border-indigo-400/40 hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
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
              <BookmarkButton
                compact
                resource={{
                  id: `/subject/${subject.slug}`,
                  title: subject.title,
                  href: `/pyq/${subject.slug}`,
                  type: "Subject",
                  subjectName: subject.title,
                  subjectCode: subject.code,
                  semester: subject.semester,
                }}
              />
            </div>
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
          href="/contact#feedback"
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
