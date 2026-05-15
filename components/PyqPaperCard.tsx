"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Download,
  Eye,
  Lock,
  Sparkles,
  Loader2,
  type LucideIcon,
} from "lucide-react";
import type { Paper } from "@/app/pyq/_data/subjects";
import { getFreePdfUrl } from "@/lib/pyq/paths";

type ActionButtonProps = {
  icon: LucideIcon;
  label: string;
  href?: string;
  primary?: boolean;
  premium?: boolean;
  download?: boolean;
  loading?: boolean;
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
  onClick,
}: ActionButtonProps) {
  const baseClass =
    "flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-[11px] font-black transition-all duration-300 active:scale-95 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClass = premium
    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/20 border border-indigo-400/30 hover:shadow-indigo-500/40 hover:brightness-110"
    : primary
      ? "bg-white text-black hover:bg-gray-200"
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
      disabled={loading}
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
  const router = useRouter();
  const [opening, setOpening] = useState(false);

  const freePdfUrl = getFreePdfUrl(paper.pdf);
  const hasSolution = paper.solutionAvailable && Boolean(paper.solutionFile);

  const scrollToOffer = () => {
    if (onRequestUnlock) {
      onRequestUnlock();
      return;
    }
    document.getElementById("bundle-offer-card")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleOpenSolution = async () => {
    if (!paper.solutionFile || opening) return;

    setOpening(true);
    try {
      router.push(
        `/solution-viewer?subjectSlug=${encodeURIComponent(
          subjectSlug,
        )}&file=${encodeURIComponent(paper.solutionFile)}`,
      );
    } catch (err) {
      console.error("Open solution navigation error:", err);
      alert("Could not open solution. Please try again.");
    } finally {
      setOpening(false);
    }
  };

  const Card = "div" as const;
  const Row = "div" as const;
  const Col = "div" as const;
  const Actions = "div" as const;

  return (
    <Card className="rounded-3xl border border-white/5 bg-white/[0.02] p-6 transition-hover hover:bg-white/[0.04]">
      <Row className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <Col>
          <p className="text-lg font-bold text-white">{paper.title}</p>
          <p className="mt-1 text-sm text-gray-400">
            Subject Code: {paper.code} • {paper.type} {paper.year}
          </p>
        </Col>

        <Actions className="flex flex-wrap gap-3">
          <PyqActionButton
            icon={Eye}
            label="View Paper"
            href={freePdfUrl}
            primary
          />

          <PyqActionButton
            icon={Download}
            label="Download"
            href={freePdfUrl}
            download
          />

          {hasSolution && (
            <PyqActionButton
              icon={isPaid ? Sparkles : Lock}
              label={isPaid ? "Open Solution" : "Unlock Solution ₹19"}
              onClick={isPaid ? handleOpenSolution : scrollToOffer}
              loading={opening}
              premium
            />
          )}
        </Actions>
      </Row>
    </Card>
  );
}
