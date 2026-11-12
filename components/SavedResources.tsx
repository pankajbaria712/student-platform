"use client";

import Link from "next/link";
import { BookmarkX, Search } from "lucide-react";
import { useStudentEngagement } from "@/components/StudentEngagementProvider";

export default function SavedResources() {
  const {
    bookmarks,
    ready,
    storageUnavailable,
    recoveredInvalidData,
    isResourceAvailable,
    recordViewedResource,
    removeBookmark,
  } = useStudentEngagement();

  return (
    <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">
        Your study list
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Saved resources
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
        Your bookmarks stay in this browser and are available without signing in.
      </p>

      {storageUnavailable || recoveredInvalidData ? (
        <p
          role="status"
          className="mt-5 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          {storageUnavailable
            ? "Browser storage is unavailable. You can still browse, but changes may not persist after leaving this page."
            : "Some saved browser data was invalid or outdated and was skipped."}
        </p>
      ) : null}

      {!ready ? (
        <p className="mt-8 rounded-2xl border border-white/10 bg-slate-900/60 p-6 text-sm text-slate-400">
          Loading your saved resources…
        </p>
      ) : bookmarks.length ? (
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {bookmarks.map((resource) => {
            const available = isResourceAvailable(resource.href);
            return (
              <li
                key={resource.href}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-900/60 p-4"
              >
                <div className="min-w-0 flex-1">
                  {available ? (
                    resource.href.endsWith(".pdf") ? (
                      <a
                        href={resource.href}
                        onClick={() => recordViewedResource(resource)}
                        className="font-semibold text-white transition hover:text-indigo-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
                      >
                        {resource.title}
                      </a>
                    ) : (
                      <Link
                        href={resource.href}
                        onClick={() => recordViewedResource(resource)}
                        className="font-semibold text-white transition hover:text-indigo-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
                      >
                        {resource.title}
                      </Link>
                    )
                  ) : (
                    <p className="font-semibold text-slate-300">{resource.title}</p>
                  )}
                  <p className="mt-2 text-xs text-slate-400">
                    {resource.type}
                    {resource.subjectName ? ` · ${resource.subjectName}` : ""}
                    {resource.semester ? ` · Semester ${resource.semester}` : ""}
                    {resource.subjectCode ? ` · ${resource.subjectCode}` : ""}
                  </p>
                  {!available ? (
                    <p className="mt-2 text-xs text-amber-200">
                      This link is no longer in the current resource catalog.
                    </p>
                  ) : null}
                </div>
                <button
                  type="button"
                  onClick={() => removeBookmark(resource.href)}
                  aria-label={`Remove ${resource.title} from saved resources`}
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 text-slate-300 transition hover:border-red-300/30 hover:bg-red-400/10 hover:text-red-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
                >
                  <BookmarkX aria-hidden="true" className="h-4 w-4" />
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="mt-8 rounded-2xl border border-dashed border-white/15 bg-slate-900/50 px-5 py-10 text-center">
          <h2 className="text-base font-semibold text-white">Nothing saved yet</h2>
          <p className="mt-2 text-sm text-slate-400">
            Use the bookmark button on a subject, note, PYQ, or syllabus to keep it here.
          </p>
          <Link
            href="/search"
            className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-indigo-500 px-4 text-sm font-semibold text-white transition hover:bg-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
          >
            <Search aria-hidden="true" className="h-4 w-4" />
            Find resources
          </Link>
        </div>
      )}
    </section>
  );
}
