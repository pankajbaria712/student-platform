import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface ActionButtonProps {
  href: string;
  label: string;
  icon?: LucideIcon;
  primary?: boolean;
  highlight?: boolean;
  newTab?: boolean;
  className?: string;
}

export default function ActionButton({
  href,
  label,
  icon: Icon,
  primary = false,
  highlight = false,
  newTab = false,
  className,
}: ActionButtonProps) {
  const baseClasses =
    "inline-flex min-w-0 items-center justify-center gap-2 rounded-2xl border px-3 py-2 text-sm font-semibold transition duration-200";
  const normalClasses =
    "border-white/10 bg-slate-950/80 text-slate-200 hover:border-indigo-500 hover:bg-slate-900";
  const primaryClasses =
    "border-transparent bg-indigo-500 text-white hover:bg-indigo-400";
  const highlightClasses =
    "border-indigo-500/40 bg-indigo-500/10 text-indigo-200 hover:bg-indigo-500/20";

  return (
    <Link
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noreferrer" : undefined}
      className={`${baseClasses} ${primary ? primaryClasses : highlight ? highlightClasses : normalClasses} ${className ?? ""}`}
    >
      {Icon ? <Icon size={16} className="shrink-0" /> : null}
      {label}
    </Link>
  );
}
