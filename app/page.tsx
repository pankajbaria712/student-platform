"use client";

import Footer from "@/components/Footer";
import HomeHero from "@/components/HomeHero";
// @ts-ignore: Allow unresolved import during development
import HomeSections from "@/components/HomeSections";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-white antialiased selection:bg-indigo-500/40 overflow-x-hidden">
      
      <div className="fixed inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[42vh] w-[55vw] -translate-x-1/3 -translate-y-1/3 rounded-full bg-gradient-to-br from-indigo-700/20 to-violet-600/5 blur-3xl" />
        <div className="absolute right-0 bottom-8 h-[35vh] w-[55vw] translate-x-1/4 translate-y-1/4 rounded-full bg-gradient-to-tr from-fuchsia-500/15 to-sky-500/10 blur-3xl" />
      </div>

      <main className="relative mx-auto w-full px-0 pt-0 pb-20 lg:pb-28">
        <HomeHero />

        <HomeSections />
      </main>

      <Footer />
    </div>
  );
}

