"use client";

import React from "react";

const SemesterExplorer = () => {
  const semesters = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {semesters.map((s) => (
        <a
          key={s}
          href={`/semester/${s}`}
          className={`flex items-center justify-between gap-4 rounded-2xl border border-white/6 bg-white/3 p-4 transition hover:scale-[1.02] ${[5,6].includes(s) ? "shadow-md" : "opacity-80"}`}
        >
          <div>
            <div className="text-sm font-semibold text-slate-300">Semester</div>
            <div className="text-xl font-bold text-white">{s}</div>
          </div>
          <div className="text-sm text-slate-400">Open</div>
        </a>
      ))}
    </div>
  );
};

export default SemesterExplorer;
