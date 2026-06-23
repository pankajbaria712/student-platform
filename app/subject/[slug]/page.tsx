import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookOpen, Terminal, Wifi } from "lucide-react";
import { subjectPageData } from "@/app/subject/_data/subjects";
import { subjectData as pyqData } from "@/app/pyq/_data/subjects";

const BASE_URL = "https://gtustudenthub.vercel.app";

export function generateStaticParams() {
  return Object.keys(subjectPageData).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const subject = subjectPageData[params.slug];
  if (!subject) {
    return {
      title: "Subject not found",
      description: "The requested subject could not be found.",
    };
  }

  return {
    title: `${subject.title} — GTU Semester ${subject.semester}`,
    description: subject.description,
    keywords: [
      subject.title,
      `GTU Semester ${subject.semester}`,
      "GTU study material",
      "GTU notes",
      "GTU PYQ",
      "GTU viva questions",
    ],
    openGraph: {
      title: `${subject.title} — GTU Semester ${subject.semester}`,
      description: subject.description,
      url: `${BASE_URL}/subject/${subject.slug}`,
      images: ["/image.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${subject.title} — GTU Semester ${subject.semester}`,
      description: subject.description,
      images: ["/image.png"],
    },
    alternates: {
      canonical: `${BASE_URL}/subject/${subject.slug}`,
    },
  };
}

interface SubjectPageProps {
  params: {
    slug: string;
  };
}

const StatusBadge = ({ text }: { text: string }) => (
  <span className="inline-flex rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
    {text}
  </span>
);

export default function SubjectPage({ params }: SubjectPageProps) {
  const subject = subjectPageData[params.slug];
  if (!subject) notFound();

  const pyqSubject = subject.pyqSlug ? pyqData[subject.pyqSlug] : undefined;
  const paperCount = pyqSubject?.papers.length ?? 0;
  const related = subject.relatedSubjects
    .map((slug) => subjectPageData[slug])
    .filter(Boolean);

  const showPyq = subject.pyqStatus === "available" && paperCount > 0;
  const showNotes = subject.notesStatus !== "not-applicable" && Boolean(subject.notesSlug);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main className="mx-auto max-w-6xl px-page py-8 sm:py-10">
        <div className="mb-8 rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-slate-400">
                Semester {subject.semester}
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {subject.title}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                {subject.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <StatusBadge text={subject.category} />
                <StatusBadge text={subject.heroBadge} />
                <StatusBadge text={`Code ${subject.code}`} />
              </div>
            </div>

            <div className="grid gap-3 sm:w-[280px]">
              <Link
                href={`/semester/${subject.semester}`}
                className="inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-indigo-500 hover:text-white"
              >
                Back to Semester {subject.semester}
              </Link>
              <a
                href={subject.syllabusPdf}
                className="inline-flex items-center justify-center rounded-2xl bg-indigo-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
              >
                Download syllabus
              </a>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5">
              <p className="text-sm text-slate-400">Syllabus</p>
              <p className="mt-2 text-2xl font-semibold text-white">Verified PDF</p>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5">
              <p className="text-sm text-slate-400">PYQ Papers</p>
              <p className="mt-2 text-2xl font-semibold text-white">{showPyq ? paperCount : "Coming soon"}</p>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5">
              <p className="text-sm text-slate-400">Notes</p>
              <p className="mt-2 text-2xl font-semibold text-white">
                {subject.notesStatus === "not-applicable" ? "Pending" : "Preparing"}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-10 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="space-y-8">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-indigo-300">
                    What you get
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">
                    Subject resource summary
                  </h2>
                </div>
                <div className="rounded-3xl bg-slate-950/70 px-4 py-3 text-sm text-slate-300">
                  Semester {subject.semester}
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {subject.features.map((feature) => (
                  <div key={feature} className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5">
                    <p className="text-sm text-slate-300">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8">
              <h3 className="text-2xl font-semibold text-white">Subject resources</h3>
              <p className="mt-3 text-slate-400">
                Use the verified syllabus and available PYQ materials to plan your Semester 5 revision.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href={subject.syllabusPdf}
                  className="rounded-2xl border border-slate-700 bg-slate-950/70 px-5 py-4 text-left text-sm font-semibold text-white transition hover:border-indigo-500"
                >
                  <p>Syllabus PDF</p>
                  <p className="mt-2 text-xs text-slate-400">Verified GTU syllabus file</p>
                </a>
                <div className="rounded-2xl border border-slate-700 bg-slate-950/70 px-5 py-4">
                  <p className="font-semibold text-white">PYQ access</p>
                  <p className="mt-2 text-xs text-slate-400">
                    {showPyq ? `Open ${paperCount} validated papers` : "No PYQ page yet."}
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-700 bg-slate-950/70 px-5 py-4">
                  <p className="font-semibold text-white">Notes status</p>
                  <p className="mt-2 text-xs text-slate-400">
                    {subject.notesStatus === "not-applicable"
                      ? "Resource page not available yet"
                      : "Notes page under preparation"}
                  </p>
                </div>
                {subject.slug === "ipdc-1" ? (
                  <div className="rounded-2xl border border-slate-700 bg-slate-950/70 px-5 py-4">
                    <p className="font-semibold text-white">Practice tests</p>
                    <p className="mt-2 text-xs text-slate-400">
                      Use the IPDC test library for mock exam practice.
                    </p>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8">
              <h3 className="text-2xl font-semibold text-white">Frequently asked questions</h3>
              <div className="mt-6 space-y-4">
                {subject.faqs.map((faq) => (
                  <div key={faq.question} className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5">
                    <p className="font-semibold text-white">{faq.question}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-400">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8">
              <div className="flex items-center gap-3 text-slate-300">
                <BookOpen size={20} />
                <span className="font-semibold text-white">Resource links</span>
              </div>

              <div className="mt-6 space-y-4">
                <a
                  href={subject.syllabusPdf}
                  className="block rounded-3xl border border-slate-800 bg-slate-950/70 px-5 py-4 text-sm text-slate-200 transition hover:border-indigo-500"
                >
                  Download Syllabus
                </a>
                {showPyq ? (
                  <Link
                    href={`/pyq/${subject.pyqSlug}`}
                    className="block rounded-3xl border border-slate-800 bg-slate-950/70 px-5 py-4 text-sm text-slate-200 transition hover:border-indigo-500"
                  >
                    Open PYQ papers
                  </Link>
                ) : (
                  <div className="block rounded-3xl border border-slate-800 bg-slate-950/70 px-5 py-4 text-sm text-slate-400">
                    PYQ page unavailable
                  </div>
                )}
                {showNotes ? (
                  <Link
                    href={`/notes/${subject.notesSlug}`}
                    className="block rounded-3xl border border-slate-800 bg-slate-950/70 px-5 py-4 text-sm text-slate-200 transition hover:border-indigo-500"
                  >
                    Open Notes page
                  </Link>
                ) : (
                  <div className="block rounded-3xl border border-slate-800 bg-slate-950/70 px-5 py-4 text-sm text-slate-400">
                    Notes page unavailable
                  </div>
                )}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8">
              <div className="flex items-center gap-3 text-slate-300">
                <Wifi size={20} />
                <span className="font-semibold text-white">Related subjects</span>
              </div>
              <div className="mt-6 space-y-3">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/subject/${item.slug}`}
                    className="block rounded-3xl border border-slate-800 bg-slate-950/70 px-5 py-4 text-sm text-slate-200 transition hover:border-indigo-500"
                  >
                    <div className="font-semibold text-white">{item.title}</div>
                    <div className="mt-1 text-xs text-slate-400">Semester {item.semester}</div>
                  </Link>
                ))}
              </div>
            </div>

            {showPyq && pyqSubject ? (
              <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8">
                <div className="flex items-center gap-3 text-slate-300">
                  <Terminal size={20} />
                  <span className="font-semibold text-white">Latest past papers</span>
                </div>
                <div className="mt-5 space-y-3">
                  {pyqSubject.papers.slice(0, 3).map((paper) => (
                    <div key={paper.title} className="rounded-3xl border border-slate-800 bg-slate-950/70 px-4 py-4">
                      <p className="font-semibold text-white">{paper.title}</p>
                      <p className="mt-1 text-xs text-slate-400">{paper.year}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </aside>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-white">Ready for Semester 5?</h2>
              <p className="mt-2 text-slate-400">
                Access the verified GTU syllabus, PYQ archive, and study resources for {subject.title}.
              </p>
            </div>
            <div className="grid gap-3 sm:auto-cols-min sm:grid-flow-col">
              <a
                href={subject.syllabusPdf}
                className="inline-flex items-center justify-center rounded-2xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
              >
                Download syllabus
              </a>
              {showPyq ? (
                <Link
                  href={`/pyq/${subject.pyqSlug}`}
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-indigo-500 hover:text-white"
                >
                  View PYQs
                </Link>
              ) : null}
              {showNotes ? (
                <Link
                  href={`/notes/${subject.notesSlug}`}
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-indigo-500 hover:text-white"
                >
                  Open notes
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
