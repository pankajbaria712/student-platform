"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Download,
  Eye,
  Lock,
  Sparkles,
  Loader2,
  type LucideIcon,
} from "lucide-react";
import type { Paper } from "@/app/pyq/_data/subjects";
import { getFreePdfUrl, getIpdcTestUrl } from "@/lib/pyq/paths";
import { getSupabaseClient } from "@/lib/supabase";

type ActionButtonProps = {
  icon: LucideIcon;
  label: string;
  href?: string;
  primary?: boolean;
  premium?: boolean;
  download?: boolean;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

function PyqActionButton({
  icon: Icon,
  label,
  href,
  primary = false,
  premium = false,
  download = false,
  loading = false,
  disabled = false,
  onClick,
}: ActionButtonProps) {
  const isDisabled = disabled || loading;
  const baseClass =
    "flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-[11px] font-black transition-all duration-300 active:scale-95 whitespace-nowrap";

  const variantClass = premium
    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/20 border border-indigo-400/30 hover:shadow-indigo-500/40 hover:brightness-110"
    : primary
      ? "bg-white text-black hover:bg-gray-200"
      : isDisabled
        ? "bg-white/5 border border-white/10 text-gray-500 cursor-not-allowed opacity-60"
        : "bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white";

  const content = (
    <>
      {loading ? (
        <Loader2 size={16} className="animate-spin" />
      ) : (
        <Icon size={16} />
      )}
      <span>{label}</span>
      {premium && !href && !loading && <Lock size={14} />}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        download={download}
        className={`${baseClass} ${variantClass}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isDisabled}
      className={`${baseClass} ${variantClass}`}
    >
      {content}
    </button>
  );
}

export type PyqPaperCardProps = {
  paper: Paper;
  subjectSlug: string;
  isPaid: boolean;
  onRequestUnlock?: () => void;
};

export default function PyqPaperCard({
  paper,
  subjectSlug,
  isPaid,
  onRequestUnlock,
}: PyqPaperCardProps) {
  const [opening, setOpening] = useState(false);

  const freePdfUrl = getFreePdfUrl(paper.pdf);
  const isFreeTestSubject =
    subjectSlug === "integrated-personality-development-course";
  const hasSolution = paper.solutionAvailable && Boolean(paper.solutionFile);
  const freeTestHref = paper.testSlug
    ? getIpdcTestUrl(paper.testSlug)
    : isFreeTestSubject
      ? getIpdcTestUrl(`${paper.type.toLowerCase()}-${paper.year}`)
      : undefined;
  const isDemoPaper = paper.type === "Demo" || paper.year === "Demo";

  const scrollToOffer = () => {
    if (onRequestUnlock) {
      onRequestUnlock();
      return;
    }
    document.getElementById("bundle-offer-card")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleDownloadSolution = async () => {
    if (!paper.solutionFile || opening) return;

    setOpening(true);
    try {
      // Prefer sending a bearer token if available, fall back to cookies.
      const supabase = getSupabaseClient();
      const {
        data: { session },
      } = await supabase.auth.getSession();
      const token = session?.access_token;

      const headers: HeadersInit = { "Content-Type": "application/json" };
      if (token) headers["Authorization"] = `Bearer ${token}`;

      const response = await fetch(
        `/api/download-solution?subjectSlug=${encodeURIComponent(
          subjectSlug,
        )}&file=${encodeURIComponent(paper.solutionFile)}`,
        {
          method: "GET",
          credentials: "include",
          headers,
        },
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        console.error("Download solution failed:", response.status, errorData);
        alert(
          errorData?.error || "Could not download solution. Please try again.",
        );
        return;
      }

      const data = (await response.json()) as { signedUrl?: string };
      if (!data?.signedUrl) {
        console.error("Download solution missing signedUrl", data);
        alert("Could not download solution. Please try again.");
        return;
      }

      window.location.href = data.signedUrl;
    } catch (err) {
      console.error("Download solution navigation error:", err);
      alert("Could not download solution. Please try again.");
    } finally {
      setOpening(false);
    }
  };

  const Card = "div" as const;
  const Row = "div" as const;
  const Col = "div" as const;
  const Actions = "div" as const;

  return (
    <Card className={`rounded-3xl p-6 transition-hover ${isDemoPaper ? "border border-cyan-400/30 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900/80 shadow-[0_20px_60px_rgba(14,165,233,0.16)]" : "border border-white/5 bg-white/[0.02] hover:bg-white/[0.04]"}`}>
      <Row className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <Col>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-lg font-bold text-white">{paper.title}</p>
            {isDemoPaper ? (
              <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-200">
                Free Demo
              </span>
            ) : null}
          </div>
          <p className="mt-1 text-sm text-gray-400">
            Subject Code: {paper.code} • {paper.type} {paper.year}
          </p>
        </Col>

        <Actions className="flex flex-wrap gap-3">
          <PyqActionButton
            icon={Eye}
            label={isDemoPaper ? "View Demo" : "View Paper"}
            href={freePdfUrl}
            primary
          />

          {isFreeTestSubject && freeTestHref ? (
            <PyqActionButton
              icon={Sparkles}
              label="Start Free Test"
              href={freeTestHref}
              primary
            />
          ) : null}

          {!isDemoPaper && !isFreeTestSubject && (
            <PyqActionButton
              icon={hasSolution ? (isPaid ? Download : Lock) : Lock}
              label={hasSolution ? (isPaid ? "DOWNLOAD SOLUTION PDF" : "Unlock Solution ₹19") : "Coming Soon"}
              onClick={hasSolution ? (isPaid ? handleDownloadSolution : scrollToOffer) : undefined}
              loading={opening && hasSolution}
              premium={hasSolution}
              disabled={!hasSolution}
            />
          )}
        </Actions>
      </Row>
    </Card>
  );
}
