"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseClient } from "@/lib/supabase";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const supabase = getSupabaseClient();
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        setError(
          error.message || "Unable to create account. Please try again.",
        );
        return;
      }

      router.push("/login");
    } catch (err) {
      setError(
        "Unable to initialize auth client. Please restart the dev server.",
      );
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-16">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-2xl shadow-indigo-500/10 backdrop-blur-xl">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-400">
              Create your account
            </p>
            <h1 className="mt-4 text-4xl font-black text-white">
              Register for EduNext
            </h1>
            <p className="mt-3 text-sm text-gray-400">
              Start reading free notes and unlock premium content with one
              account.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleRegister}>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-gray-300">
                Email address
              </span>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                autoComplete="email"
                className="w-full rounded-3xl border border-white/10 bg-slate-900 px-5 py-4 text-sm text-white outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                placeholder="you@example.com"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-gray-300">
                Password
              </span>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                autoComplete="new-password"
                className="w-full rounded-3xl border border-white/10 bg-slate-900 px-5 py-4 text-sm text-white outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                placeholder="Create a secure password"
              />
            </label>

            {error ? (
              <div className="rounded-3xl bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
                {error}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-3xl bg-indigo-500 px-6 py-4 text-sm font-semibold text-white transition hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Creating account..." : "Create account"}
            </button>
          </form>

          <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6 text-sm text-gray-400">
            <p>Already have an account?</p>
            <a href="/login" className="text-indigo-300 hover:text-indigo-100">
              Login instead
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
