import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface ActionButtonProps {
  href: string;
  label: string;
  icon?: LucideIcon;
  primary?: boolean;
  highlight?: boolean;
}

export default function ActionButton({
  href,
  label,
  icon: Icon,
  primary = false,
  highlight = false,
}: ActionButtonProps) {
  const baseClasses =
    "inline-flex min-w-[170px] items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-sm font-semibold transition duration-200";
  const normalClasses =
    "border-white/10 bg-slate-950/80 text-slate-200 hover:border-indigo-500 hover:bg-slate-900";
  const primaryClasses =
    "border-transparent bg-indigo-500 text-white hover:bg-indigo-400";
  const highlightClasses =
    "border-indigo-500/40 bg-indigo-500/10 text-indigo-200 hover:bg-indigo-500/20";

  return (
    <Link
      href={href}
      className={`${baseClasses} ${primary ? primaryClasses : highlight ? highlightClasses : normalClasses}`}
    >
      {Icon ? <Icon size={16} className="shrink-0" /> : null}
      {label}
    </Link>
  );
}
