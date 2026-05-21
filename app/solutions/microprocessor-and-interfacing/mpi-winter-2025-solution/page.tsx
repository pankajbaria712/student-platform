import type { Metadata } from "next";
import SolutionPageClient from "./solution-page-client";

export const metadata: Metadata = {
  title: "MPI Winter 2025 Solved Paper | GTU",
  description:
    "Read the MPI Winter 2025 solved paper as a mobile-first webpage. First question is free; premium access unlocks the full answer set instantly.",
  openGraph: {
    title: "MPI Winter 2025 Solved Paper | GTU",
    description:
      "Read the MPI Winter 2025 solved paper as a mobile-first webpage. First question is free; premium access unlocks the full answer set instantly.",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <SolutionPageClient />
    </main>
  );
}
