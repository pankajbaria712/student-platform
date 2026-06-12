"use client";

import React from "react";

const McqBanner = () => {
  return (
    <div className="rounded-2xl border border-white/6 bg-gradient-to-r from-indigo-700/20 to-slate-900/30 p-6">
      <h3 className="text-lg font-bold text-white">Practice MCQs — IPDC</h3>
      <p className="mt-2 text-sm text-slate-300">Timed quizzes, instant scoring, and detailed answers to help you revise fast.</p>

      <div className="mt-4 flex gap-3">
        <a href="/test/ipdc" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white">Start Quiz</a>
        <a href="/pyq/ipdc" className="inline-flex items-center gap-2 rounded-md border border-white/6 px-4 py-2 text-sm font-semibold text-slate-100">Browse PYQs</a>
      </div>
    </div>
  );
};

export default McqBanner;
