"use client";

import React, { useEffect, useState } from "react";
import {
  BookOpen,
  Download,
  Crown,
  ChevronRight,
  Search,
  Zap,
  ShieldCheck,
  FileText,
  Star,
  Users,
} from "lucide-react";

const NavItem = ({ label, href }: { label: string; href: string }) => (
  <a
    href={href}
    className="text-sm font-medium text-gray-400 transition hover:text-white"
  >
    {label}
  </a>
);

const FeatureBadge = ({ icon: Icon, text }: { icon: any; text: string }) => (
  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-gray-300">
    <Icon size={14} className="text-indigo-400" />
    {text}
  </div>
);

const SemesterCard = ({ semester }: { semester: number }) => (
  <a
    href={`/semester/${semester}`}
    className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 transition duration-500 hover:scale-[1.02] hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]"
  >
    <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-indigo-500/10 blur-2xl group-hover:bg-indigo-500/20" />

    <div className="relative z-10">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/20 text-indigo-400 transition group-hover:bg-indigo-500 group-hover:text-white">
          <BookOpen size={24} />
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
          Active
        </span>
      </div>

      <h3 className="mb-1 text-2xl font-bold text-white">
        Semester {semester}
      </h3>

      <p className="mb-4 text-sm italic text-gray-400">
        BE Computer Engineering
      </p>

      <div className="flex items-center gap-2 text-sm font-medium text-indigo-400">
        Explore Resources
        <ChevronRight
          size={16}
          className="transition group-hover:translate-x-1"
        />
      </div>
    </div>
  </a>
);

export default function HomePage() {
  const semesters = [3, 4, 5, 6, 7, 8];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050505] font-sans text-white antialiased selection:bg-indigo-500/40">
      {/* Background Glow */}
      <div className="fixed inset-0 z-0">
        <div className="absolute left-[-10%] top-[-10%] h-[50%] w-[50%] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] h-[40%] w-[40%] rounded-full bg-purple-600/10 blur-[120px]" />
      </div>

      {/* Navbar */}
      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/5 bg-black/60 py-4 backdrop-blur-xl"
            : "py-6"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <a href="/" className="flex cursor-pointer items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/20">
              <Zap size={22} className="text-white" fill="white" />
            </div>
            <span className="text-xl font-black uppercase italic tracking-tight">
              EduNext
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <NavItem label="Resources" href="#notes" />
            <NavItem label="Premium" href="#premium" />
            <NavItem label="PYQs" href="/pyq/theory-of-computation" />
            <NavItem label="Contact" href="#footer" />
          </div>

          <a
            href="#premium"
            className="rounded-xl bg-white px-5 py-2 text-sm font-bold text-black transition hover:bg-gray-200"
          >
            Unlock PDF
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative px-6 pb-20 pt-40">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-indigo-400">
            <Users size={14} /> Trusted by 5,000+ Students
          </div>

          <h1 className="mb-6 bg-gradient-to-b from-white to-white/40 bg-clip-text text-5xl font-black leading-tight text-transparent md:text-8xl">
            Engineering Made
            <br />
            Simple. Effective.
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
            Semester notes, syllabus PDFs, PYQs, and premium printable study
            material built for BE Computer Engineering students.
          </p>

          <div className="relative mx-auto max-w-2xl">
            <div className="flex items-center rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-md">
              <Search className="ml-4 text-gray-500" size={20} />
              <input
                type="text"
                placeholder="Search subject, notes, PYQ..."
                className="w-full bg-transparent px-4 py-3 text-white outline-none placeholder:text-gray-500"
              />
              <button className="rounded-xl bg-indigo-600 px-6 py-3 font-bold text-white transition hover:bg-indigo-500">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Semester Section */}
      <section id="notes" className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="mb-4 text-4xl font-black">Academic Resources</h2>
              <div className="flex flex-wrap gap-3">
                <FeatureBadge icon={FileText} text="150+ Notes" />
                <FeatureBadge icon={Star} text="Top Rated PYQs" />
                <FeatureBadge icon={ShieldCheck} text="Verified Content" />
              </div>
            </div>

            <p className="hidden max-w-md text-right text-gray-400 md:block">
              Choose your semester and access syllabus, notes, PYQs, and premium
              PDFs instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {semesters.map((sem) => (
              <SemesterCard key={sem} semester={sem} />
            ))}
          </div>
        </div>
      </section>

      {/* Premium */}
      <section id="premium" className="px-6 py-24">
        <div className="mx-auto max-w-7xl rounded-[3rem] border border-indigo-500/20 bg-[#0a0a0a] p-8 shadow-[0_0_40px_rgba(79,70,229,0.2)] md:p-14">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-indigo-400">
                Premium Access
              </p>

              <h3 className="mb-6 text-4xl font-black md:text-6xl">
                Download Premium PDF for Only ₹33
              </h3>

              <p className="mb-8 text-lg text-gray-400">
                Printable PDFs, revision notes, exam important questions, and
                ad-free reading experience.
              </p>

              <div className="space-y-4">
                {[
                  "Fast PDF Downloads",
                  "Exam Revision Notes",
                  "Printable Format",
                  "Important Questions Included",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Download size={16} className="text-indigo-400" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-indigo-500/20 bg-indigo-500/5 p-8 text-center">
              <p className="mb-2 text-sm text-gray-500 line-through">MRP ₹99</p>
              <div className="mb-3 text-6xl font-black">₹33</div>
              <p className="mb-8 text-sm text-gray-500">Per Subject Only</p>

              <button className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-indigo-600 text-lg font-bold text-white transition hover:bg-indigo-500">
                <Crown size={20} fill="currentColor" />
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="footer"
        className="relative z-10 border-t border-white/5 px-6 pb-12 pt-20"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-sm text-gray-500">
            © 2026 EduNext. All rights reserved.
          </div>

          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Refund Policy</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
