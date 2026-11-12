"use client";

import { useMemo, useState, type FormEvent, type KeyboardEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Search, X } from "lucide-react";
import type { SearchItem, SearchResourceType } from "@/lib/search/search-data";
import BookmarkButton from "@/components/BookmarkButton";
import { useStudentEngagement } from "@/components/StudentEngagementProvider";
import type { EngagementResource } from "@/lib/student-engagement";

type GlobalSearchProps = {
  items: SearchItem[];
  mode: "suggestions" | "results";
  initialQuery?: string;
};

const resourceTypes: SearchResourceType[] = ["Notes", "PYQ", "Syllabus", "MCQ"];
const resultLimit = 40;

function normalize(value: string) {
  return value.toLocaleLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function searchText(item: SearchItem) {
  const semesterTerms =
    item.semester === null
      ? ""
      : ` semester ${item.semester} sem ${item.semester} sem${item.semester} s${item.semester}`;
  const typeTerms: Record<SearchResourceType, string> = {
    Semester: "semester",
    Subject: "subject",
    PYQ: "pyq pyqs previous year question questions paper papers",
    Notes: "note notes",
    Syllabus: "syllabus",
    MCQ: "mcq mcqs multiple choice practice test tests",
  };

  return normalize(
    `${item.title} ${item.subjectName} ${item.subjectCode} ${semesterTerms} ${typeTerms[item.type]} ${item.status ?? ""}`,
  );
}

function matchesQuery(item: SearchItem, query: string) {
  const normalizedQuery = normalize(query);
  if (!normalizedQuery) return true;

  const text = searchText(item);
  if (text.includes(normalizedQuery)) return true;

  const words = text.split(" ");
  return normalizedQuery
    .split(" ")
    .every((term) => words.some((word) => word.startsWith(term)));
}

function sortByRelevance(items: SearchItem[], query: string) {
  const normalizedQuery = normalize(query);
  if (!normalizedQuery) return items;

  return [...items].sort((first, second) => {
    const firstTitle = normalize(first.title);
    const secondTitle = normalize(second.title);
    const firstSubject = normalize(first.subjectName);
    const secondSubject = normalize(second.subjectName);
    const firstScore =
      firstTitle === normalizedQuery
        ? 0
        : firstSubject === normalizedQuery
          ? 1
          : firstTitle.startsWith(normalizedQuery)
            ? 2
            : firstSubject.startsWith(normalizedQuery)
              ? 3
              : 4;
    const secondScore =
      secondTitle === normalizedQuery
        ? 0
        : secondSubject === normalizedQuery
          ? 1
          : secondTitle.startsWith(normalizedQuery)
            ? 2
            : secondSubject.startsWith(normalizedQuery)
              ? 3
              : 4;

    return firstScore - secondScore || first.title.localeCompare(second.title);
  });
}

export default function GlobalSearch({
  items,
  mode,
  initialQuery = "",
}: GlobalSearchProps) {
  const router = useRouter();
  const { recordViewedResource } = useStudentEngagement();
  const [query, setQuery] = useState(initialQuery);
  const [semester, setSemester] = useState("");
  const [resourceType, setResourceType] = useState("");
  const [subjectSlug, setSubjectSlug] = useState("");
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);

  const subjectOptions = useMemo(
    () =>
      items
        .filter((item) => item.type === "Subject" && item.subjectSlug)
        .sort((first, second) => first.subjectName.localeCompare(second.subjectName)),
    [items],
  );

  const queryMatches = useMemo(
    () => sortByRelevance(items.filter((item) => matchesQuery(item, query)), query),
    [items, query],
  );

  const suggestions = query.trim() ? queryMatches.slice(0, 6) : [];

  const filteredResults = useMemo(
    () =>
      queryMatches.filter(
        (item) =>
          (!semester || item.semester === Number(semester)) &&
          (!resourceType || item.type === resourceType) &&
          (!subjectSlug || item.subjectSlug === subjectSlug),
      ),
    [queryMatches, resourceType, semester, subjectSlug],
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuggestionsOpen(false);
    if (mode === "suggestions") {
      router.push(`/search${query.trim() ? `?q=${encodeURIComponent(query.trim())}` : ""}`);
    }
  };

  const chooseSuggestion = (item: SearchItem) => {
    setSuggestionsOpen(false);
    recordViewedResource({
      id: item.url,
      title: item.title,
      href: item.url,
      type: item.type,
      subjectName: item.subjectName,
      subjectCode: item.subjectCode,
      ...(item.semester !== null ? { semester: item.semester } : {}),
    });
    if (item.url.endsWith(".pdf")) {
      window.location.assign(item.url);
    } else {
      router.push(item.url);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!suggestions.length) {
      if (event.key === "Escape") setSuggestionsOpen(false);
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setSuggestionsOpen(true);
      setActiveSuggestion((current) => (current + 1) % suggestions.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setSuggestionsOpen(true);
      setActiveSuggestion(
        (current) => (current <= 0 ? suggestions.length - 1 : current - 1),
      );
    } else if (event.key === "Enter" && activeSuggestion >= 0) {
      event.preventDefault();
      chooseSuggestion(suggestions[activeSuggestion]);
    } else if (event.key === "Escape") {
      setSuggestionsOpen(false);
      setActiveSuggestion(-1);
    }
  };

  const clearFilters = () => {
    setSemester("");
    setResourceType("");
    setSubjectSlug("");
  };

  const hasFilters = Boolean(semester || resourceType || subjectSlug);
  const visibleResults = filteredResults.slice(0, resultLimit);
  const searchId = mode === "suggestions" ? "homepage-resource-search" : "global-resource-search";
  const suggestionListId = `${searchId}-suggestions`;

  return (
    <div
      id={mode === "suggestions" ? "resource-search" : undefined}
      className={mode === "suggestions" ? "max-w-2xl" : "mx-auto max-w-6xl"}
    >
      <form className="relative" role="search" onSubmit={handleSubmit}>
        <label htmlFor={searchId} className="sr-only">
          Search by subject, subject code, semester, or resource type
        </label>
        <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-slate-900 p-2 sm:flex-row">
          <div className="flex min-w-0 flex-1 items-center gap-3 px-3">
            <Search aria-hidden="true" className="h-5 w-5 shrink-0 text-slate-400" />
            <input
              id={searchId}
              type="search"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setActiveSuggestion(-1);
                setSuggestionsOpen(true);
              }}
              onFocus={() => setSuggestionsOpen(Boolean(query.trim()))}
              onBlur={() => {
                window.setTimeout(() => setSuggestionsOpen(false), 120);
              }}
              onKeyDown={handleKeyDown}
              placeholder="Try “Advanced Java”, 3160707, or “Semester 5”"
              autoComplete="off"
              role="combobox"
              aria-autocomplete="list"
              aria-expanded={suggestionsOpen && suggestions.length > 0}
              aria-controls={suggestionListId}
              aria-activedescendant={
                activeSuggestion >= 0
                  ? `${suggestionListId}-option-${activeSuggestion}`
                  : undefined
              }
              className="min-h-11 w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
            />
            {query ? (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setActiveSuggestion(-1);
                  setSuggestionsOpen(false);
                }}
                aria-label="Clear search"
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-400 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
              >
                <X aria-hidden="true" className="h-4 w-4" />
              </button>
            ) : null}
          </div>
          <button
            type="submit"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-indigo-500 px-5 text-sm font-semibold text-white transition hover:bg-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            {mode === "suggestions" ? "Search Resources" : "Search"}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </button>

          {suggestionsOpen && suggestions.length > 0 ? (
            <ul
              id={suggestionListId}
              role="listbox"
              aria-label="Search suggestions"
              className="absolute inset-x-0 top-full z-30 mt-2 max-h-80 overflow-y-auto rounded-2xl border border-white/10 bg-slate-950 p-2 shadow-2xl"
            >
              {suggestions.map((item, index) => (
                <li
                  id={`${suggestionListId}-option-${index}`}
                  key={item.id}
                  role="option"
                  aria-selected={activeSuggestion === index}
                >
                  <button
                    type="button"
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => chooseSuggestion(item)}
                    className={`flex min-h-14 w-full items-center justify-between gap-4 rounded-xl px-3 py-2 text-left transition ${
                      activeSuggestion === index ? "bg-indigo-500/20" : "hover:bg-white/5"
                    }`}
                  >
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-medium text-white">
                        {item.title}
                      </span>
                      <span className="mt-1 block truncate text-xs text-slate-400">
                        {item.subjectName}
                        {item.semester !== null ? ` · Semester ${item.semester}` : ""}
                        {item.subjectCode ? ` · ${item.subjectCode}` : ""}
                      </span>
                    </span>
                    <span className="shrink-0 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-indigo-200">
                      {item.type}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </form>

      {mode === "suggestions" ? (
        <p className="mt-2 text-xs text-slate-400">
          Search subjects, codes, semesters, notes, PYQs, syllabus PDFs, and MCQ practice.
        </p>
      ) : (
        <section className="mt-6" aria-label="Search results">
          <div className="grid gap-3 sm:grid-cols-3">
            <label className="text-xs font-medium text-slate-300">
              Semester
              <select
                value={semester}
                onChange={(event) => setSemester(event.target.value)}
                className="mt-2 min-h-11 w-full rounded-xl border border-white/10 bg-slate-900 px-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-300"
              >
                <option value="">All semesters</option>
                {Array.from({ length: 8 }, (_, index) => index + 1).map((value) => (
                  <option key={value} value={value}>
                    Semester {value}
                  </option>
                ))}
              </select>
            </label>
            <label className="text-xs font-medium text-slate-300">
              Resource type
              <select
                value={resourceType}
                onChange={(event) => setResourceType(event.target.value)}
                className="mt-2 min-h-11 w-full rounded-xl border border-white/10 bg-slate-900 px-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-300"
              >
                <option value="">All types</option>
                {resourceTypes.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
                <option value="Subject">Subject</option>
                <option value="Semester">Semester</option>
              </select>
            </label>
            <label className="text-xs font-medium text-slate-300">
              Subject
              <select
                value={subjectSlug}
                onChange={(event) => setSubjectSlug(event.target.value)}
                className="mt-2 min-h-11 w-full rounded-xl border border-white/10 bg-slate-900 px-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-300"
              >
                <option value="">All subjects</option>
                {subjectOptions.map((subject) => (
                  <option key={subject.subjectSlug} value={subject.subjectSlug}>
                    {subject.subjectName}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-slate-400" aria-live="polite">
              {filteredResults.length} {filteredResults.length === 1 ? "result" : "results"}
              {query.trim() ? ` for “${query.trim()}”` : ""}
            </p>
            {hasFilters ? (
              <button
                type="button"
                onClick={clearFilters}
                className="min-h-10 rounded-lg px-3 text-sm font-medium text-indigo-200 transition hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
              >
                Clear filters
              </button>
            ) : null}
          </div>

          {visibleResults.length > 0 ? (
            <>
              <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                {visibleResults.map((item) => {
                  const content = (
                    <>
                      <span className="flex items-start justify-between gap-3">
                        <span className="font-semibold leading-6 text-white">{item.title}</span>
                        <span className="shrink-0 rounded-full bg-indigo-400/10 px-2.5 py-1 text-[11px] font-semibold text-indigo-200">
                          {item.type}
                        </span>
                      </span>
                      <span className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-400">
                        <span>{item.subjectName}</span>
                        {item.subjectCode ? <span>Code {item.subjectCode}</span> : null}
                        {item.semester !== null ? <span>Semester {item.semester}</span> : null}
                      </span>
                      {item.status ? (
                        <span className="mt-2 block text-xs text-amber-200">{item.status}</span>
                      ) : null}
                    </>
                  );
                  const className =
                    "flex min-h-28 flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/70 p-4 transition hover:border-indigo-400/40 hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300";
                  const viewedResource: EngagementResource = {
                    id: item.url,
                    title: item.title,
                    href: item.url,
                    type: item.type,
                    subjectName: item.subjectName,
                    subjectCode: item.subjectCode,
                    ...(item.semester !== null ? { semester: item.semester } : {}),
                  };
                  const bookmarkResource =
                    item.type === "Semester" ? null : viewedResource;

                  return (
                    <li key={item.id} className="flex items-start gap-2">
                      {item.url.startsWith("/") && !item.url.endsWith(".pdf") ? (
                        <Link
                          href={item.url}
                          className={`${className} min-w-0 flex-1`}
                          onClick={() => recordViewedResource(viewedResource)}
                        >
                          {content}
                        </Link>
                      ) : (
                        <a
                          href={item.url}
                          className={`${className} min-w-0 flex-1`}
                          onClick={() => recordViewedResource(viewedResource)}
                        >
                          {content}
                        </a>
                      )}
                      {bookmarkResource ? (
                        <div className="mt-1">
                          <BookmarkButton compact resource={bookmarkResource} />
                        </div>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
              {filteredResults.length > resultLimit ? (
                <p className="mt-4 text-center text-sm text-slate-400">
                  Showing the first {resultLimit} results. Refine your search to see more.
                </p>
              ) : null}
            </>
          ) : (
            <div className="mt-3 rounded-2xl border border-dashed border-white/15 bg-slate-900/50 px-5 py-8 text-center">
              <h2 className="text-base font-semibold text-white">
                {queryMatches.length > 0
                  ? "No results match these filters"
                  : "No matching resources found"}
              </h2>
              {queryMatches.length > 0 ? (
                <p className="mt-2 text-sm text-slate-400">
                  Try another semester or resource type, or clear the filters.
                </p>
              ) : (
                <>
                  <p className="mt-2 text-sm text-slate-400">
                    Try a shorter subject name, subject code, semester, or resource type.
                  </p>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {["Advanced Java Programming", "Theory of Computation", "Software Engineering"].map(
                      (suggestion) => (
                        <button
                          key={suggestion}
                          type="button"
                          onClick={() => setQuery(suggestion)}
                          className="min-h-10 rounded-full border border-white/10 px-3 text-xs font-medium text-indigo-200 transition hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
                        >
                          Try {suggestion}
                        </button>
                      ),
                    )}
                  </div>
                </>
              )}
            </div>
          )}
        </section>
      )}
    </div>
  );
}
