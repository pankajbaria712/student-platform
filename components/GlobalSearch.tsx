"use client";

import { type KeyboardEvent, useMemo, useRef, useState } from "react";
import { ChevronRight, Search, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { searchIndex, type SearchItem } from "@/lib/search/search-data";

const normalize = (value: string) => value.trim().toLowerCase();

const MAX_RESULTS = 7;

const getScore = (item: SearchItem, query: string) => {
  const title = item.title.toLowerCase();
  const subtitle = item.subtitle.toLowerCase();
  const keywordString = item.keywords.join(" ").toLowerCase();
  const combined = `${title} ${subtitle} ${keywordString}`;
  if (title === query || keywordString.split(" ").includes(query)) return 0;
  if (title.startsWith(query) || subtitle.startsWith(query)) return 1;
  if (combined.includes(query)) return 2;
  return 3;
};

const typeOrder: Record<string, number> = {
  Semester: 0,
  Subject: 1,
  PYQ: 2,
  Notes: 3,
  MCQ: 4,
};

export default function GlobalSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const blurTimeout = useRef<number | null>(null);

  const normalizedQuery = normalize(query);

  const results = useMemo(() => {
    const source = normalizedQuery
      ? searchIndex
          .map((item) => ({
            item,
            score: getScore(item, normalizedQuery),
          }))
          .filter(({ score }) => score < 3)
          .sort((a, b) => {
            if (a.score !== b.score) return a.score - b.score;
            const typeDiff = typeOrder[a.item.type] - typeOrder[b.item.type];
            if (typeDiff !== 0) return typeDiff;
            return a.item.title.localeCompare(b.item.title);
          })
          .slice(0, MAX_RESULTS)
          .map(({ item }) => item)
      : searchIndex
          .filter((item) => item.type === "Semester" || item.type === "Subject" || item.type === "MCQ")
          .slice(0, MAX_RESULTS);

    return source;
  }, [normalizedQuery]);

  const handleSubmit = () => {
    if (results.length > 0) {
      void router.push(results[0].url);
    }
  };

  const handleSelect = (item: SearchItem) => {
    void router.push(item.url);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((current) => Math.min(current + 1, results.length - 1));
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((current) => Math.max(current - 1, 0));
    }
    if (event.key === "Enter") {
      event.preventDefault();
      if (results[activeIndex]) {
        handleSelect(results[activeIndex]);
      } else {
        handleSubmit();
      }
    }
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  const handleFocus = () => {
    if (blurTimeout.current) {
      window.clearTimeout(blurTimeout.current);
      blurTimeout.current = null;
    }
    setIsOpen(true);
  };

  const handleBlur = () => {
    blurTimeout.current = window.setTimeout(() => {
      setIsOpen(false);
    }, 120);
  };

  return (
    <div className="relative w-full">
      <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-3 shadow-[0_25px_70px_rgba(15,23,42,0.35)] backdrop-blur-xl sm:p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="flex w-full items-center gap-3 rounded-[1.75rem] border border-white/10 bg-slate-950 px-4 py-3 text-sm text-slate-100 shadow-inner shadow-black/10 sm:py-4">
            <Search size={20} className="shrink-0 text-indigo-300" />
            <label htmlFor="global-search" className="sr-only">
              Search GTU Student Hub
            </label>
            <input
              id="global-search"
              autoComplete="off"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setActiveIndex(0);
              }}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              placeholder="Search semesters, subjects, PYQs, notes or MCQ tests"
              className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-500 sm:text-base"
            />
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="inline-flex h-[52px] items-center justify-center rounded-[1.5rem] bg-indigo-500 px-6 text-sm font-semibold text-white transition hover:bg-indigo-400 sm:h-[56px] sm:text-base"
          >
            Search
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute inset-x-0 top-full z-20 mt-3 sm:mt-4">
          <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/95 shadow-[0_30px_80px_rgba(15,23,42,0.45)] backdrop-blur-xl">
            <div className="p-3 text-xs uppercase tracking-[0.32em] text-slate-500 sm:px-4 sm:py-4">
              Quick navigation suggestions
            </div>

            {results.length > 0 ? (
              <div className="divide-y divide-white/5">
                {results.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onMouseDown={() => handleSelect(item)}
                    className={`flex w-full items-start justify-between gap-4 px-4 py-4 text-left transition hover:bg-white/5 sm:px-5 ${
                      index === activeIndex ? "bg-white/5" : ""
                    }`}
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-white sm:text-base">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm text-slate-400">
                        {item.subtitle}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-slate-400">
                      <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">
                        {item.badge}
                      </span>
                      <ChevronRight size={16} />
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="p-5 text-sm text-slate-400 sm:p-6">
                No matching resources found. Try a subject name, code, or short name like <span className="font-semibold text-white">AJP</span>, <span className="font-semibold text-white">MPI</span>, or <span className="font-semibold text-white">PDS</span>.
              </div>
            )}
            <div className="border-t border-white/5 bg-slate-950/95 px-4 py-3 text-sm text-slate-500 sm:px-5">
              <Sparkles size={16} className="inline-block align-middle text-indigo-300" />
              <span className="ml-2">Use this search box as your main navigation tool.</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
