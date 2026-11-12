import Link from "next/link";
import { Mail } from "lucide-react";

const semesters = Array.from({ length: 8 }, (_, index) => index + 1);
const resourceLinks = [
  { href: "/notes/advanced-java-programming", label: "Notes" },
  { href: "/pyq/advanced-java-programming", label: "Previous year questions" },
  { href: "/test/ipdc", label: "MCQ practice" },
  { href: "/subject/software-engineering", label: "Syllabus" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-12 pb-safe">
      <div className="mx-auto grid max-w-7xl gap-10 px-page sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <p className="text-base font-semibold text-white">GTU Student Hub</p>
          <p className="max-w-sm text-sm leading-6 text-slate-400">
            A straightforward place to find GTU subject resources and plan your exam preparation.
          </p>
          <a
            href="mailto:refunds@gtustudenthub.com?subject=Report%20a%20broken%20resource"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-indigo-200 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
          >
            <Mail aria-hidden="true" className="h-4 w-4" />
            Report a broken resource
          </a>
        </div>

        <nav aria-label="Footer quick links">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Quick links
          </h2>
          <ul className="grid gap-3 text-sm text-slate-400">
            <li><Link href="/#why" className="transition hover:text-white">Why the Hub</Link></li>
            <li><Link href="/#semesters" className="transition hover:text-white">Semesters</Link></li>
            <li><Link href="/#subjects" className="transition hover:text-white">Subjects</Link></li>
            <li><Link href="/#resources" className="transition hover:text-white">Resources</Link></li>
            <li><Link href="/contact" className="transition hover:text-white">Contact</Link></li>
            <li><Link href="/privacy-policy" className="transition hover:text-white">Privacy policy</Link></li>
            <li><Link href="/terms" className="transition hover:text-white">Terms</Link></li>
          </ul>
        </nav>

        <nav aria-label="Semester links">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Semesters
          </h2>
          <ul className="grid grid-cols-2 gap-3 text-sm text-slate-400">
            {semesters.map((semester) => (
              <li key={semester}>
                <Link
                  href={`/semester/${semester}`}
                  className="transition hover:text-white"
                >
                  Semester {semester}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Resource links">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Resources
          </h2>
          <ul className="grid gap-3 text-sm text-slate-400">
            {resourceLinks.map((resource) => (
              <li key={resource.href}>
                <Link href={resource.href} className="transition hover:text-white">
                  {resource.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="mt-10 border-t border-white/10 px-4 pt-6 text-center text-sm text-slate-500">
        © 2026 GTU Student Hub. All rights reserved.
      </p>
    </footer>
  );
}
