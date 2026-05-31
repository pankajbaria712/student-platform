"use client";

import { useState } from "react";
import { FileText, Loader2, AlertCircle } from "lucide-react";

interface NotesChapterCardProps {
  chapterNumber: number;
  title: string;
  fileName: string;
  subject: string;
}

export default function NotesChapterCard({
  chapterNumber,
  title,
  fileName,
  subject,
}: NotesChapterCardProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleOpenNotes = async () => {
    if (isLoading) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `/api/get-notes-url?file=${encodeURIComponent(
          fileName,
        )}&subject=${encodeURIComponent(subject)}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        },
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        const errorMsg = errorData?.error || `Could not open notes (HTTP ${response.status})`;
        setError(errorMsg);
        console.error("Get notes URL failed:", response.status, errorData);
        return;
      }

      const data = (await response.json()) as { signedUrl?: string };
      if (!data?.signedUrl) {
        setError("Could not open notes. Please try again.");
        console.error("Missing signedUrl in response:", data);
        return;
      }

      // Open in a new tab
      window.open(data.signedUrl, "_blank", "noopener,noreferrer");
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An error occurred while opening notes";
      setError(errorMessage);
      console.error("Open notes error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:border-indigo-500/30 hover:bg-white/[0.04] sm:rounded-3xl sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 sm:text-[10px]">
            Chapter {chapterNumber.toString().padStart(2, "0")}
          </p>
          <h3 className="mt-2 text-lg font-bold leading-snug text-white sm:text-xl">
            {title}
          </h3>
          <p className="mt-1 text-xs text-slate-400 sm:text-sm">
            {fileName}
          </p>
        </div>
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-all duration-300 sm:h-14 sm:w-14">
          <FileText
            size={20}
            className="text-indigo-400 group-hover:text-indigo-300 transition-colors sm:block hidden"
          />
          <FileText
            size={18}
            className="text-indigo-400 group-hover:text-indigo-300 transition-colors sm:hidden"
          />
        </div>
      </div>

      {error && (
        <div className="mt-4 rounded-lg bg-red-500/10 border border-red-500/20 p-3 flex items-start gap-2">
          <AlertCircle size={16} className="flex-shrink-0 text-red-400 mt-0.5" />
          <p className="text-xs text-red-300">{error}</p>
        </div>
      )}

      <button
        onClick={handleOpenNotes}
        disabled={isLoading}
        className="mt-5 inline-flex w-full min-h-[40px] items-center justify-center gap-2 rounded-xl bg-indigo-500 px-4 py-2.5 text-center text-xs font-black uppercase tracking-widest text-white transition-all duration-300 hover:bg-indigo-400 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed sm:text-[11px] sm:min-h-[44px]"
      >
        {isLoading ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Loading...
          </>
        ) : (
          <>
            Open Notes
          </>
        )}
      </button>
    </div>
  );
}
