import { ExternalLink } from "lucide-react";

type DisclaimerProps = {
  sourceName?: string;
  sourceHref?: string;
};

export default function Disclaimer({
  sourceName = "GTU",
  sourceHref = "https://www.gtu.ac.in",
}: DisclaimerProps) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-gray-300 shadow-sm">
      <div className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-[0.28em] text-indigo-300">
        <span>Disclaimer</span>
      </div>
      <p className="leading-relaxed text-gray-300">
        All syllabus and question papers belong to their respective owners,
        including Gujarat Technological University ({sourceName}). This website
        is only for educational and reference purposes and is not an official
        GTU publication.
      </p>
      <p className="mt-3 flex flex-col gap-2 text-[11px] text-gray-400 sm:flex-row sm:items-center">
        <span>
          Source:
          <a
            href={sourceHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-indigo-300 hover:text-indigo-100"
          >
            {sourceName}
          </a>
        </span>
        <span className="inline-flex items-center gap-2">
          <ExternalLink size={12} />
          If any content violates copyright, please contact us for immediate
          removal.
        </span>
      </p>
    </section>
  );
}
