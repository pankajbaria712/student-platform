"use client";

import React from "react";

const FeaturedResources = () => {
  const items = [
    { title: "IPDC Winter 2025 MCQ Set", href: "/test/ipdc" },
    { title: "MPI Winter 2025 Solutions", href: "/solutions/microprocessor-and-interfacing/mpi-winter-2025-solution" },
    { title: "AJP Chapter Notes", href: "/notes/advanced-java-programming" },
  ];

  return (
    <div className="grid gap-3">
      {items.map((it) => (
        <a
          key={it.href}
          href={it.href}
          className="flex items-center justify-between gap-4 rounded-lg border border-white/6 bg-white/3 p-4 transition hover:bg-white/5"
        >
          <div>
            <div className="text-sm text-slate-300">New</div>
            <div className="text-base font-semibold text-white">{it.title}</div>
          </div>
          <div className="text-sm text-slate-400">Open</div>
        </a>
      ))}
    </div>
  );
};

export default FeaturedResources;
