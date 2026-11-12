"use client";

import { Bookmark, BookmarkCheck } from "lucide-react";
import { useStudentEngagement } from "@/components/StudentEngagementProvider";
import type { EngagementResource } from "@/lib/student-engagement";

export default function BookmarkButton({
  resource,
  compact = false,
}: {
  resource: EngagementResource;
  compact?: boolean;
}) {
  const { bookmarks, isResourceAvailable, ready, toggleBookmark } =
    useStudentEngagement();
  const saved = bookmarks.some((item) => item.href === resource.href);
  const available = isResourceAvailable(resource.href);
  const label = saved
    ? `Remove ${resource.title} from saved resources`
    : `Save ${resource.title}`;
  const Icon = saved ? BookmarkCheck : Bookmark;

  return (
    <button
      type="button"
      onClick={() => toggleBookmark(resource)}
      disabled={!available || !ready}
      aria-label={
        !available
          ? `${resource.title} is no longer available`
          : ready
            ? label
            : "Loading saved resources"
      }
      aria-pressed={saved}
      title={
        !available
          ? `${resource.title} is no longer available`
          : ready
            ? label
            : "Loading saved resources"
      }
      className={`inline-flex shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-indigo-200 transition hover:border-indigo-300/40 hover:bg-indigo-400/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 disabled:cursor-not-allowed disabled:opacity-40 ${
        compact ? "h-10 w-10" : "min-h-10 gap-2 px-3 text-xs font-semibold"
      }`}
    >
      <Icon aria-hidden="true" className="h-4 w-4" />
      {compact ? null : <span>{saved ? "Saved" : "Save"}</span>}
    </button>
  );
}
