import Link from "next/link";
import { Instagram, Linkedin, Mail, Twitter } from "lucide-react";

const footerLinks = [
  { href: "/#why", label: "Why Hub" },
  { href: "/#semesters", label: "Semesters" },
  { href: "/#subjects", label: "Subjects" },
  { href: "/#resources", label: "Resources" },
];

const semesters = [3, 4, 5, 6, 7, 8];
const resources = ["AJP", "Software Engineering", "Computer Networks", "MCQ Tests"];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-16 pb-safe">
      <div className="mx-auto grid max-w-7xl gap-10 px-page lg:grid-cols-4">
        <div className="space-y-4">
          <p className="text-base font-semibold text-white">GTU Student Hub</p>
          <p className="max-w-sm text-sm leading-6 text-slate-400">
            The premium student platform for GTU notes, PYQs, solutions, and exam-ready study resources.
          </p>
          <div className="flex items-center gap-3 text-slate-400">
            <a href="mailto:hello@gtustudenthub.com" className="transition hover:text-white">
              <Mail className="h-5 w-5" />
            </a>
            <a href="#" className="transition hover:text-white">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="transition hover:text-white">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="transition hover:text-white">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Quick Links</h3>
          <div className="grid gap-3 text-sm text-slate-400">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </Link>
            ))}
            <Link href="/privacy-policy" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-white">
              Terms
            </Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Semesters</h3>
          <div className="grid gap-3 text-sm text-slate-400">
            {semesters.map((semester) => (
              <Link key={semester} href={`/semester/${semester}`} className="transition hover:text-white">
                Semester {semester}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Resources</h3>
          <div className="grid gap-3 text-sm text-slate-400">
            {resources.map((resource) => (
              <Link key={resource} href="/notes" className="transition hover:text-white">
                {resource}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
        © 2026 GTU Student Hub. All rights reserved.
      </div>
    </footer>
  );
}
