import { FileText, Download, Lock, ExternalLink } from "lucide-react";

export type PyqPaper = {
  title: string;
  code: string;
  year: string;
  type: string;
  pdf: string;
  solutionAvailable: boolean;
};

export const PyqActionButton = ({
  icon: Icon,
  label,
  href,
  primary = false,
  premium = false,
  download = false,
}: {
  icon: typeof FileText;
  label: string;
  href: string;
  primary?: boolean;
  premium?: boolean;
  download?: boolean;
}) => (
  <a
    href={href}
    download={download}
    className={`
      flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-[11px] font-black transition-all active:scale-95 whitespace-nowrap
      ${
        premium
          ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/20 border border-indigo-400/30 hover:shadow-indigo-500/40 hover:brightness-110"
          : primary
            ? "bg-white text-black hover:bg-gray-200"
            : "bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white"
      }
    `}
  >
    <Icon size={14} className={premium ? "animate-pulse" : ""} />
    {label}
  </a>
);

export function PyqPaperCard({ paper }: { paper: PyqPaper }) {
  return (
    <div className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition-all duration-300 hover:bg-white/[0.04] sm:rounded-3xl sm:p-6">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex min-w-0 flex-1 items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 transition-all group-hover:bg-indigo-500 group-hover:text-white sm:h-12 sm:w-12">
            <FileText size={22} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="mb-1 flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-indigo-500">
                {paper.type} {paper.year}
              </span>
              <div className="h-1 w-1 rounded-full bg-white/20" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                {paper.code}
              </span>
            </div>
            <h3 className="text-base font-bold text-white transition-colors group-hover:text-indigo-400 sm:text-lg">
              {paper.title}
            </h3>
            <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-gray-500">
              Source: GTU
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-stretch gap-2 sm:gap-3 lg:justify-end">
          <PyqActionButton
            icon={ExternalLink}
            label="View Paper"
            href={paper.pdf}
          />
          <PyqActionButton
            icon={Download}
            label="Download"
            href={paper.pdf}
            download
          />
          <div className="mx-2 hidden h-8 w-px bg-white/5 lg:block" />
          <PyqActionButton
            icon={Lock}
            label={paper.solutionAvailable ? "Open Solution" : "Coming Soon"}
            href="#"
            premium={paper.solutionAvailable}
          />
        </div>
      </div>
    </div>
  );
}
