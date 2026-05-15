"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, Loader2, Shield } from "lucide-react";
import { fetchSignedSolutionUrl } from "@/lib/pyq/client";

export default function SolutionViewerPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const solutionFile = searchParams?.get("file");
  const subjectSlug = searchParams?.get("subjectSlug");

  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [status, setStatus] = useState<
    "loading" | "ready" | "denied" | "error"
  >("loading");
  const [message, setMessage] = useState<string>("Verifying premium access...");

  useEffect(() => {
    const preventSelection = (event: Event) => {
      event.preventDefault();
    };

    const preventCopyShortcuts = (event: KeyboardEvent) => {
      if (!event.ctrlKey && !event.metaKey) return;
      const blocked = ["c", "x", "s", "a", "o", "u", "p"];
      if (blocked.includes(event.key.toLowerCase())) {
        event.preventDefault();
      }
    };

    document.addEventListener("contextmenu", preventSelection);
    document.addEventListener("selectstart", preventSelection);
    document.addEventListener("keydown", preventCopyShortcuts);

    return () => {
      document.removeEventListener("contextmenu", preventSelection);
      document.removeEventListener("selectstart", preventSelection);
      document.removeEventListener("keydown", preventCopyShortcuts);
    };
  }, []);

  useEffect(() => {
    if (!solutionFile || !subjectSlug) {
      setStatus("error");
      setMessage(
        "Solution details are missing. Please open the viewer from the subject page.",
      );
      return;
    }

    let isActive = true;

    async function loadViewerUrl() {
      setStatus("loading");
      setMessage("Verifying premium access and preparing secure viewer...");

      const { url, error } = await fetchSignedSolutionUrl(
        solutionFile,
        subjectSlug,
      );

      if (!isActive) return;

      if (error === "login_required") {
        router.replace("/login");
        return;
      }

      if (error === "access_denied") {
        setStatus("denied");
        setMessage("Premium access required. Unlock solutions to continue.");
        return;
      }

      if (!url) {
        setStatus("error");
        setMessage(
          "Could not load the premium solution. Please try again in a few moments.",
        );
        return;
      }

      setPdfUrl(url);
      setStatus("ready");
      setMessage("Premium viewer is ready. This access expires in 5 minutes.");
    }

    loadViewerUrl();

    return () => {
      isActive = false;
    };
  }, [router, solutionFile, subjectSlug]);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-slate-900/90 p-6 shadow-xl shadow-black/20 backdrop-blur-md">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-300 ring-1 ring-indigo-500/20">
                <Shield size={20} />
              </div>
              <div>
                <h1 className="text-2xl font-semibold">
                  Premium Solution Viewer
                </h1>
                <p className="mt-1 text-sm text-slate-400">
                  Secure access for purchased solution PDFs. The viewer expires
                  after 5 minutes.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => router.back()}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-white/20 hover:bg-white/10"
            >
              <ArrowLeft size={16} /> Back
            </button>
          </div>

          <div className="grid gap-3 rounded-3xl bg-slate-950/80 p-4 text-sm text-slate-300 ring-1 ring-white/5">
            <p>{message}</p>
            <p className="text-slate-500">
              Premium content is rendered securely inside an internal viewer.
              Right-click and text selection are disabled on this page.
            </p>
          </div>
        </div>

        <div className="relative flex-1 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 shadow-2xl shadow-black/30">
          {status === "loading" && (
            <div className="flex min-h-[64vh] flex-col items-center justify-center gap-4 px-6 py-24 text-center text-slate-300">
              <Loader2 className="h-10 w-10 animate-spin text-indigo-400" />
              <div>
                <p className="text-lg font-semibold">
                  Preparing secure viewer...
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  This page will open the solution inside a protected viewer.
                </p>
              </div>
            </div>
          )}

          {(status === "error" || status === "denied") && (
            <div className="flex min-h-[64vh] flex-col items-center justify-center gap-4 px-6 py-24 text-center text-slate-300">
              <p className="text-lg font-semibold">
                Unable to display the premium solution
              </p>
              <p className="max-w-xl text-sm text-slate-500">{message}</p>
              {status === "denied" && (
                <button
                  type="button"
                  onClick={() => router.push("/pyq")}
                  className="rounded-2xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500"
                >
                  Browse premium offers
                </button>
              )}
            </div>
          )}

          {status === "ready" && pdfUrl && (
            <iframe
              title="Premium Solution PDF"
              src={pdfUrl}
              className="h-[80vh] w-full border-0 bg-slate-950"
              sandbox="allow-scripts"
              referrerPolicy="no-referrer"
            />
          )}

          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent" />
        </div>
      </section>
    </main>
  );
}
