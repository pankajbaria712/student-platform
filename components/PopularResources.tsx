"use client";

import React from "react";

const PopularResources = () => {
  const items = [
    { title: "Advanced Java Programming", href: "/subject/advanced-java-programming" },
    { title: "Microprocessor & Interfacing", href: "/subject/microprocessor-and-interfacing" },
    { title: "Software Engineering", href: "/subject/software-engineering" },
    { title: "Algorithms & Data Structures", href: "/subject/theory-of-computation" },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((it) => (
        <a
          key={it.href}
          href={it.href}
          className="group flex flex-col gap-2 rounded-lg border border-white/6 bg-white/3 p-4 transition hover:scale-[1.02]"
        >
          <div className="text-sm font-medium text-slate-300">Subject</div>
          <div className="text-lg font-bold text-white">{it.title}</div>
          <div className="mt-2 text-xs text-slate-400">PYQs, notes & solutions</div>
        </a>
      ))}
    </div>
  );
};

export default PopularResources;
