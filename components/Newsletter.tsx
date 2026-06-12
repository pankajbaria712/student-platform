import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend here; just show a success state.
    setDone(true);
  };

  return (
    <div className="mx-auto max-w-3xl rounded-2xl border border-white/6 bg-white/3 p-6">
      <h3 className="mb-2 text-xl font-bold">Stay exam-ready</h3>
      <p className="mb-4 text-sm text-slate-300">Subscribe for updates: new PYQs, notes and free practice.</p>

      {done ? (
        <div className="rounded-md bg-green-600/20 p-4 text-sm text-green-200">Thanks — we’ll keep you posted.</div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-lg border border-white/8 bg-transparent px-4 py-3 text-sm text-white placeholder:text-slate-400"
          />
          <button className="rounded-lg bg-indigo-500 px-4 py-3 text-sm font-semibold text-white">Subscribe</button>
        </form>
      )}
    </div>
  );
}
