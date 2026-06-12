import React from "react";
import Link from "next/link";

const Card = ({ title, desc, tag }: { title: string; desc: string; tag?: string }) => (
  <div className="min-w-[260px] max-w-sm flex-shrink-0 rounded-2xl border border-white/6 bg-white/3 p-5 shadow-md">
    <div className="mb-2 flex items-center justify-between">
      <h4 className="text-lg font-bold text-white">{title}</h4>
      {tag ? <span className="text-xs text-indigo-300">{tag}</span> : null}
    </div>
    <p className="mb-4 text-sm text-slate-300">{desc}</p>
    <Link href="#" className="text-sm font-semibold text-indigo-300">
      Open resource →
    </Link>
  </div>
);

export default function FeaturedCarousel() {
  const items = [
    { title: "Advanced Java — Chapter Notes", desc: "Chapter-wise notes with solved examples.", tag: "Free" },
    { title: "Software Engineering PYQs", desc: "Solved previous year questions with PDFs.", tag: "Top" },
    { title: "IPDC MCQ Practice", desc: "Timed quizzes and instant feedback.", tag: "Practice" },
    { title: "Digital Logic — Solutions", desc: "Complete solution bundles for quick downloads." },
  ];

  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-2xl font-extrabold">Featured resources</h3>
        <Link href="/notes" className="text-sm font-semibold text-indigo-300">
          Browse all
        </Link>
      </div>

      <div className="-mx-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
        <div className="flex gap-4 px-4">
          {items.map((it) => (
            <Card key={it.title} title={it.title} desc={it.desc} tag={it.tag} />
          ))}
        </div>
      </div>
    </div>
  );
}
