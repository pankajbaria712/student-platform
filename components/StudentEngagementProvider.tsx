"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import {
  bookmarksStorageKey,
  maxMcqTests,
  maxRecentResources,
  maxSavedResources,
  mcqProgressStorageKey,
  parseMcqProgress,
  parseStoredResources,
  recentStorageKey,
  toStoredResource,
  type EngagementResource,
  type McqProgress,
  type StoredResource,
} from "@/lib/student-engagement";

type EngagementContextValue = {
  ready: boolean;
  recent: StoredResource[];
  bookmarks: StoredResource[];
  mcqProgress: Record<string, McqProgress>;
  storageUnavailable: boolean;
  recoveredInvalidData: boolean;
  isResourceAvailable: (href: string) => boolean;
  recordViewedResource: (resource: EngagementResource) => void;
  toggleBookmark: (resource: EngagementResource) => void;
  removeBookmark: (href: string) => void;
  removeRecent: (href: string) => void;
  clearRecent: () => void;
  saveMcqProgress: (progress: Omit<McqProgress, "updatedAt">) => void;
};

const EngagementContext = createContext<EngagementContextValue | null>(null);

function getRouteResourceType(pathname: string): EngagementResource["type"] | null {
  if (/^\/subject\/[^/]+$/.test(pathname)) return "Subject";
  if (/^\/pyq\/[^/]+$/.test(pathname)) return "PYQ";
  if (/^\/notes\/[^/]+$/.test(pathname)) return "Notes";
  if (/^\/test\/ipdc(?:\/[^/]+)?$/.test(pathname)) return "MCQ";
  if (/^\/semester\/[1-8]$/.test(pathname)) return "Semester";
  return null;
}

export default function StudentEngagementProvider({
  children,
  validResourceHrefs,
}: {
  children: ReactNode;
  validResourceHrefs: string[];
}) {
  const pathname = usePathname();
  const availableHrefs = useMemo(
    () => new Set(validResourceHrefs),
    [validResourceHrefs],
  );
  const [ready, setReady] = useState(false);
  const [recent, setRecent] = useState<StoredResource[]>([]);
  const [bookmarks, setBookmarks] = useState<StoredResource[]>([]);
  const [mcqProgress, setMcqProgress] = useState<Record<string, McqProgress>>({});
  const [storageUnavailable, setStorageUnavailable] = useState(false);
  const [recoveredInvalidData, setRecoveredInvalidData] = useState(false);

  useEffect(() => {
    try {
      const storage = window.localStorage;
      const recentResult = parseStoredResources(
        storage.getItem(recentStorageKey),
        maxRecentResources,
      );
      const bookmarksResult = parseStoredResources(
        storage.getItem(bookmarksStorageKey),
        maxSavedResources,
      );
      const progressResult = parseMcqProgress(
        storage.getItem(mcqProgressStorageKey),
      );
      setRecent(recentResult.resources);
      setBookmarks(bookmarksResult.resources);
      setMcqProgress(progressResult.progress);
      setRecoveredInvalidData(
        recentResult.recoveredInvalidData ||
          bookmarksResult.recoveredInvalidData ||
          progressResult.recoveredInvalidData,
      );
    } catch {
      setStorageUnavailable(true);
    } finally {
      setReady(true);
    }
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem(recentStorageKey, JSON.stringify(recent));
    } catch {
      setStorageUnavailable(true);
    }
  }, [ready, recent]);

  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem(bookmarksStorageKey, JSON.stringify(bookmarks));
    } catch {
      setStorageUnavailable(true);
    }
  }, [bookmarks, ready]);

  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem(
        mcqProgressStorageKey,
        JSON.stringify(mcqProgress),
      );
    } catch {
      setStorageUnavailable(true);
    }
  }, [mcqProgress, ready]);

  const isResourceAvailable = useCallback(
    (href: string) => {
      if (availableHrefs.has(href)) return true;
      try {
        return availableHrefs.has(decodeURI(href));
      } catch {
        return false;
      }
    },
    [availableHrefs],
  );

  const recordViewedResource = useCallback(
    (resource: EngagementResource) => {
      if (!ready || !isResourceAvailable(resource.href)) return;
      const stored = toStoredResource(resource, Date.now());
      if (!stored) return;

      setRecent((current) =>
        [stored, ...current.filter((item) => item.href !== stored.href)].slice(
          0,
          maxRecentResources,
        ),
      );
    },
    [isResourceAvailable, ready],
  );

  const toggleBookmark = useCallback(
    (resource: EngagementResource) => {
      if (!ready || !isResourceAvailable(resource.href)) return;
      const stored = toStoredResource(resource, Date.now());
      if (!stored) return;

      setBookmarks((current) => {
        if (current.some((item) => item.href === stored.href)) {
          return current.filter((item) => item.href !== stored.href);
        }
        return [stored, ...current].slice(0, maxSavedResources);
      });
    },
    [isResourceAvailable, ready],
  );

  const removeBookmark = useCallback((href: string) => {
    setBookmarks((current) => current.filter((item) => item.href !== href));
  }, []);

  const removeRecent = useCallback((href: string) => {
    setRecent((current) => current.filter((item) => item.href !== href));
  }, []);

  const clearRecent = useCallback(() => setRecent([]), []);

  const saveMcqProgress = useCallback(
    (progress: Omit<McqProgress, "updatedAt">) => {
      const testHref = `/test/ipdc/${progress.testSlug}`;
      if (
        !ready ||
        !/^[a-z0-9-]{1,100}$/.test(progress.testSlug) ||
        !isResourceAvailable(testHref)
      ) {
        return;
      }

      const nextProgress: McqProgress = {
        ...progress,
        updatedAt: Date.now(),
      };
      setMcqProgress((current) => {
        const next = { ...current, [progress.testSlug]: nextProgress };
        const orderedEntries = Object.entries(next).sort(
          (first, second) => second[1].updatedAt - first[1].updatedAt,
        );
        return Object.fromEntries(orderedEntries.slice(0, maxMcqTests));
      });
    },
    [isResourceAvailable, ready],
  );

  useEffect(() => {
    if (!ready || !pathname || !isResourceAvailable(pathname)) return;
    const type = getRouteResourceType(pathname);
    if (!type) return;

    const frame = window.requestAnimationFrame(() => {
      const heading = document.querySelector("main h1")?.textContent?.trim();
      const documentTitle = document.title.split("|")[0]?.trim();
      recordViewedResource({
        id: pathname,
        href: pathname,
        title: heading || documentTitle || pathname,
        type,
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [isResourceAvailable, pathname, ready, recordViewedResource]);

  const value = useMemo(
    () => ({
      ready,
      recent,
      bookmarks,
      mcqProgress,
      storageUnavailable,
      recoveredInvalidData,
      isResourceAvailable,
      recordViewedResource,
      toggleBookmark,
      removeBookmark,
      removeRecent,
      clearRecent,
      saveMcqProgress,
    }),
    [
      bookmarks,
      clearRecent,
      isResourceAvailable,
      mcqProgress,
      recent,
      ready,
      recordViewedResource,
      recoveredInvalidData,
      removeBookmark,
      removeRecent,
      saveMcqProgress,
      storageUnavailable,
      toggleBookmark,
    ],
  );

  return (
    <EngagementContext.Provider value={value}>
      {children}
    </EngagementContext.Provider>
  );
}

export function useStudentEngagement() {
  const context = useContext(EngagementContext);
  if (!context) {
    throw new Error(
      "useStudentEngagement must be used within StudentEngagementProvider.",
    );
  }
  return context;
}
