"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getSupabaseClient } from "@/lib/supabase";

export default function Navbar() {
  const [session, setSession] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [clientError, setClientError] = useState<string | null>(null);
  const router = useRouter();

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
      } catch (error) {
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
    } catch (error) {
      if (mounted) {
        setClientError("Unable to initialize auth listener.");
      }
    }

    return () => {
      mounted = false;
      authListener?.data.subscription.unsubscribe();
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

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">
            EduNext<span className="text-indigo-400">.</span>
          </h1>
          <p className="text-xs text-slate-500">Notes • PYQs • Premium PDFs</p>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="#notes"
            className="text-sm font-medium text-slate-300 transition hover:text-white"
          >
            Notes
          </Link>
          <Link
            href="#pyq"
            className="text-sm font-medium text-slate-300 transition hover:text-white"
          >
            PYQs
          </Link>
          <Link
            href="#premium"
            className="text-sm font-medium text-slate-300 transition hover:text-white"
          >
            Premium
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-slate-300 transition hover:text-white"
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-3">
          {isLoading ? null : session ? (
            <>
              <span className="hidden text-sm text-slate-400 md:inline">
                {session.user.email}
              </span>
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-2xl border border-slate-700 bg-white px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="rounded-2xl border border-slate-700 bg-slate-900 px-5 py-2 text-sm font-semibold text-slate-200 transition hover:bg-slate-800 hover:text-white"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="rounded-2xl bg-indigo-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-400"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
