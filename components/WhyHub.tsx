"use client";

import React from "react";
import { BookOpen, Clock, CheckCircle } from "lucide-react";

const Feature = ({ title, desc, icon: Icon }: { title: string; desc: string; icon: any }) => (
  <div className="flex gap-4 rounded-lg border border-white/6 bg-white/3 p-4">
    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-300">
      <Icon size={20} />
    </div>
    <div>
      <div className="text-sm font-semibold text-white">{title}</div>
      <div className="mt-1 text-sm text-slate-300">{desc}</div>
    </div>
  </div>
);

const WhyHub = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <Feature title="Curated Materials" desc="Verified notes and solved papers." icon={BookOpen} />
      <Feature title="Fast Revision" desc="Chapter-wise summaries and highlights." icon={Clock} />
      <Feature title="Exam Ready" desc="MCQs and practice tests with instant feedback." icon={CheckCircle} />
    </div>
  );
};

export default WhyHub;
