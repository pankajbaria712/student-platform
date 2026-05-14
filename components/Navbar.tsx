"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { getSupabaseClient } from "@/lib/supabase";
import { GraduationCap, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/#notes", label: "Notes" },
  { href: "/#pyq", label: "PYQs" },
  { href: "/#premium", label: "Premium" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [session, setSession] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [clientError, setClientError] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let mounted = true;

    const loadSession = async () => {
      try {
        const supabase = getSupabaseClient();
        const { data } = await supabase.auth.getSession();

        if (!mounted) {
          return;
        }

        setSession(data.session);
      } catch {
        if (!mounted) {
          return;
        }

        setClientError("Unable to initialize auth client.");
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    loadSession();

    let authListener: {
      data: { subscription: { unsubscribe: () => void } };
    } | null = null;

    try {
      const supabase = getSupabaseClient();
      const listener = supabase.auth.onAuthStateChange(
        (_event, sessionData) => {
          if (!mounted) {
            return;
          }

          setSession(sessionData);
        },
      );
      authListener = listener;
    } catch {
      if (mounted) {
        setClientError("Unable to initialize auth listener.");
      }
    }

    return () => {
      mounted = false;
      authListener?.data.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const handleLogout = async () => {
    try {
      const supabase = getSupabaseClient();
      await supabase.auth.signOut();
    } catch (error) {
      console.error("Logout failed", error);
    }
    router.push("/");
  };

  const linkActive = (href: string) => {
    if (href.startsWith("/#")) {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-[100] pt-safe">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
      <nav className="border-b border-white/5 bg-slate-950/90 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/75">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="group flex min-w-0 flex-1 items-center gap-2.5 sm:flex-none sm:gap-3"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg shadow-indigo-500/25 ring-1 ring-white/10 transition group-hover:shadow-indigo-500/40 sm:h-10 sm:w-10">
              <GraduationCap
                className="h-[18px] w-[18px] text-white sm:h-5 sm:w-5"
                aria-hidden
              />
            </span>
            <div className="min-w-0">
              <p className="truncate text-base font-black tracking-tight text-white sm:text-lg">
                GTUStudentHub
                <span className="text-indigo-400">.</span>
              </p>
              <p className="hidden text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500 sm:block sm:text-[11px]">
                Notes · PYQs · Premium
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  linkActive(item.href)
                    ? "bg-white/10 text-white"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            {!isLoading && session ? (
              <>
                <span className="hidden max-w-[140px] truncate text-xs text-slate-400 lg:inline xl:max-w-[200px]">
                  {session.user.email}
                </span>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="rounded-full border border-white/10 bg-white px-4 py-2 text-xs font-bold text-slate-950 shadow-sm transition hover:bg-slate-100 sm:px-5 sm:text-sm"
                >
                  Logout
                </button>
              </>
            ) : !isLoading ? (
              <>
                <Link
                  href="/login"
                  className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:bg-white/10 hover:text-white sm:inline-block sm:text-sm"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 px-4 py-2 text-xs font-bold text-white shadow-md shadow-indigo-500/20 transition hover:brightness-110 sm:px-5 sm:text-sm"
                >
                  Join
                </Link>
              </>
            ) : null}

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10 hover:text-white md:hidden"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div className="border-t border-white/10 bg-slate-950/95 px-4 pb-4 pt-2 md:hidden">
            <div className="mx-auto flex max-w-lg flex-col gap-1">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-2xl px-4 py-3.5 text-base font-semibold ${
                    linkActive(item.href)
                      ? "bg-indigo-500/15 text-white ring-1 ring-indigo-500/30"
                      : "text-slate-300 hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-3 grid gap-2 border-t border-white/10 pt-3">
                {!session ? (
                  <>
                    <Link
                      href="/login"
                      className="rounded-2xl border border-white/15 bg-white/5 py-3.5 text-center text-base font-semibold text-white"
                    >
                      Login
                    </Link>
                    <Link
                      href="/register"
                      className="rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-600 py-3.5 text-center text-base font-bold text-white"
                    >
                      Create account
                    </Link>
                  </>
                ) : (
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="mb-3 truncate text-xs text-slate-400">
                      {session.user.email}
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setMenuOpen(false);
                        void handleLogout();
                      }}
                      className="w-full rounded-xl bg-white py-3 text-sm font-bold text-slate-950"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : null}

        {clientError ? (
          <p className="border-t border-amber-500/20 bg-amber-500/10 px-4 py-2 text-center text-xs text-amber-200 sm:px-6">
            {clientError}
          </p>
        ) : null}
      </nav>
    </header>
  );
}
