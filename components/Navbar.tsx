"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { getSupabaseClient } from "@/lib/supabase";
import {
  Bell,
  BookOpen,
  ChevronDown,
  GraduationCap,
  Layers,
  Menu,
  X,
  Zap,
  FileText,
} from "lucide-react";

const semesterItems = [
  { label: "Semester 1", href: "/semester/1" },
  { label: "Semester 2", href: "/semester/2" },
  { label: "Semester 3", href: "/semester/3" },
  { label: "Semester 4", href: "/semester/4" },
];

const subjectItems = [
  { label: "Advanced Java Programming", href: "/subjects/advanced-java-programming" },
  { label: "Computer Networks", href: "/subjects/computer-networks" },
  { label: "Web Programming", href: "/subjects/web-programming" },
  { label: "Software Engineering", href: "/subjects/software-engineering" },
];

const resourcesMenu = [
  { label: "Notes", href: "/notes", icon: BookOpen },
  { label: "PYQs", href: "/pyq", icon: FileText },
  { label: "MCQ Tests", href: "/mcq", icon: Zap },
  { label: "Syllabus", href: "/syllabus", icon: Layers },
];

const placementHelpMenu = [
  { label: "DSA Preparation", href: "/placement/dsa" },
  { label: "Aptitude Preparation", href: "/placement/aptitude" },
  { label: "Interview Questions", href: "/placement/interview-questions" },
  { label: "Resume Building", href: "/placement/resume-building" },
  { label: "Roadmaps", href: "/placement/roadmaps" },
  { label: "Placement Experiences", href: "/placement/experiences" },
];

const desktopNavLinks = [
  { href: "/", label: "Home" },
  {
    href: "/semester",
    label: "Semesters",
    dropdown: true,
    items: semesterItems,
    description: "Select semester",
  },
  {
    href: "/subjects",
    label: "Subjects",
    dropdown: true,
    items: subjectItems,
    description: "Popular subjects",
  },
  {
    href: "/resources",
    label: "Resources",
    dropdown: true,
    items: resourcesMenu,
    description: "Explore learning resources",
  },
  {
    href: "/placement",
    label: "PlacementHelp",
    dropdown: true,
    items: placementHelpMenu,
    description: "Placement support",
  },
];

const mobileMenuLinks = [
  { href: "/", label: "Home" },
  { href: "/semester/6", label: "Semesters" },
  { href: "/placement", label: "PlacementHelp" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [session, setSession] = useState<any | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeDesktopMenu, setActiveDesktopMenu] = useState<string | null>(null);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const frameId = useRef<number | null>(null);
  const isScrolledRef = useRef(isScrolled);
  const isVisibleRef = useRef(isVisible);

  useEffect(() => {
    let mounted = true;

    const loadSession = async () => {
      try {
        const supabase = getSupabaseClient();
        const { data } = await supabase.auth.getSession();
        if (!mounted) return;
        setSession(data.session);
      } catch {
        if (!mounted) return;
      }
    };

    loadSession();

    let authListener: { data: { subscription: { unsubscribe: () => void } } } | null = null;
    try {
      const supabase = getSupabaseClient();
      const listener = supabase.auth.onAuthStateChange((_event, sessionData) => {
        if (!mounted) return;
        setSession(sessionData);
      });
      authListener = listener;
    } catch {
      if (mounted) console.error("Unable to initialize auth listener.");
    }

    return () => {
      mounted = false;
      authListener?.data.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  useEffect(() => {
    const onScroll = () => {
      if (frameId.current !== null) return;

      frameId.current = window.requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const nextScrolled = currentY > 24;
        const nextVisible = currentY < 80 || currentY < lastScrollY.current;

        if (nextScrolled !== isScrolledRef.current) {
          isScrolledRef.current = nextScrolled;
          setIsScrolled(nextScrolled);
        }

        if (nextVisible !== isVisibleRef.current) {
          isVisibleRef.current = nextVisible;
          setIsVisible(nextVisible);
        }

        lastScrollY.current = currentY;
        frameId.current = null;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frameId.current !== null) window.cancelAnimationFrame(frameId.current);
    };
  }, []);

  const handleLogout = async () => {
    try {
      const supabase = getSupabaseClient();
      await supabase.auth.signOut();
    } catch (error) {
      console.error("Logout failed", error);
    }

    router.push("/");
  };

  const linkActive = (href: string) => pathname === href || pathname?.startsWith(`${href}/`);

  const toggleDesktopMenu = (label: string) => {
    setActiveDesktopMenu((current) => (current === label ? null : label));
  };

  return (
    <motion.header
      className="sticky top-0 z-[100]"
      initial={false}
      animate={{ y: isVisible ? 0 : -120 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-px transition-opacity ${
          isScrolled ? "opacity-100" : "opacity-0"
        } bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent`}
      />

      <motion.nav
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 transition-colors duration-300 sm:px-6 lg:px-8 ${
          isScrolled
            ? "backdrop-blur-xl bg-slate-950/85 border-b border-white/10 shadow-[0_24px_80px_rgba(15,23,42,0.28)]"
            : "bg-transparent"
        }`}
        aria-label="Primary navigation"
      >
        <div className="flex items-center gap-3 min-w-0">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/80 px-3 py-2 transition hover:border-indigo-300/30 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-md shadow-indigo-500/20">
              <GraduationCap className="h-5 w-5" />
            </span>
            <div className="hidden min-w-0 flex-col sm:flex">
              <span className="truncate text-sm font-semibold text-white">GTUStudentHub</span>
              <span className="truncate text-[11px] uppercase tracking-[0.24em] text-slate-400">Student platform</span>
            </div>
          </Link>
        </div>

        <div className="hidden items-center gap-2 xl:flex">
          {desktopNavLinks.map((link) => (
            <div key={link.label} className="relative">
              {link.dropdown ? (
                <button
                  type="button"
                  onClick={() => toggleDesktopMenu(link.label)}
                  className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition ${
                    linkActive(link.href) ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/5 hover:text-white"
                  } focus:outline-none focus:ring-2 focus:ring-indigo-400/40`}
                  aria-expanded={activeDesktopMenu === link.label}
                  aria-haspopup="true"
                >
                  <span>{link.label}</span>
                  <ChevronDown className="h-4 w-4 text-slate-400" />
                </button>
              ) : (
                <Link
                  href={link.href}
                  className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold transition ${
                    linkActive(link.href) ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/5 hover:text-white"
                  } focus:outline-none focus:ring-2 focus:ring-indigo-400/40`}
                >
                  {link.label}
                </Link>
              )}

              <AnimatePresence>
                {activeDesktopMenu === link.label ? (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-0 top-full z-20 mt-3 w-72 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/95 p-4 shadow-[0_40px_120px_rgba(15,23,42,0.35)]"
                    role="menu"
                    aria-label={link.description}
                  >
                    <div className="space-y-3">
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{link.description}</p>
                      {link.items?.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block rounded-2xl px-4 py-3 text-sm text-slate-200 transition hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
                          onClick={() => setActiveDesktopMenu(null)}
                          role="menuitem"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          ))}

          <button
            type="button"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5 text-slate-200 transition group-hover:text-indigo-300" />
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500 text-[11px] font-semibold text-white">2</span>
          </button>

          {!session ? (
            <Link
              href="/register"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
            >
              Start Learning
            </Link>
          ) : (
            <div className="relative">
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-900/90 text-slate-100 shadow-md shadow-black/20 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
                aria-label="Open profile menu"
              >
                <span className="text-sm font-bold">G</span>
              </button>
            </div>
          )}
        </div>

        <div className="flex flex-1 items-center justify-end md:hidden">
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 shadow-md shadow-black/10 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
              aria-label="Open notifications"
            >
              <Bell className="h-5 w-5" />
            </button>
            {session ? (
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-900/90 text-slate-100 shadow-md shadow-black/20 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
                aria-label="Open profile menu"
              >
                <span className="text-sm font-bold">G</span>
              </button>
            ) : (
              <Link
                href="/register"
                className="inline-flex h-11 items-center rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
              >
                Start Learning
              </Link>
            )}
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 shadow-md shadow-black/10 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
              aria-label="Open mobile menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {drawerOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-slate-950/60 backdrop-blur-xl"
            aria-modal="true"
            role="dialog"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="absolute right-0 top-0 h-full w-full max-w-[320px] bg-slate-950 px-6 py-6 shadow-2xl"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-500/20">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-base font-semibold text-white">GTU Student Hub</p>
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Student platform</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setDrawerOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
                  aria-label="Close mobile menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="space-y-4" aria-label="Mobile navigation">
                {mobileMenuLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setDrawerOpen(false)}
                    className="block rounded-3xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-4">
                  <button
                    type="button"
                    onClick={() => setMobileResourcesOpen((open) => !open)}
                    className="flex w-full items-center justify-between gap-2 text-left text-sm font-semibold text-white transition hover:text-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
                    aria-expanded={mobileResourcesOpen}
                    aria-controls="mobile-resources-panel"
                  >
                    <span>Resources</span>
                    <ChevronDown className={`h-4 w-4 transition ${mobileResourcesOpen ? "rotate-180" : "rotate-0"}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {mobileResourcesOpen ? (
                      <motion.div
                        id="mobile-resources-panel"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.18 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-3 space-y-2">
                          {resourcesMenu.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={() => setDrawerOpen(false)}
                              className="block rounded-2xl bg-slate-950/90 px-4 py-3 text-sm text-slate-200 transition hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>

                <Link
                  href="/register"
                  onClick={() => setDrawerOpen(false)}
                  className="block rounded-3xl bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-4 text-center text-sm font-semibold text-white transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
                >
                  Start Learning
                </Link>
              </nav>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
