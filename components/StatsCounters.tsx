"use client";

import React, { useEffect, useState } from "react";

const Counter = ({ value, label }: { value: number; label: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let raf: number;
    const duration = 800;
    const start = performance.now();

    const step = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      setCount(Math.floor(p * value));
      if (p < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [value]);

  return (
    <div>
      <div className="text-2xl font-bold text-white">{count}</div>
      <div className="text-sm text-slate-400">{label}</div>
    </div>
  );
};

const StatsCounters = () => {
  return (
    <div className="grid grid-cols-2 gap-4 rounded-2xl border border-white/6 bg-white/3 p-4">
      <Counter value={8} label="Semesters" />
      <Counter value={48} label="Subjects" />
      <Counter value={320} label="Notes" />
      <Counter value={1200} label="PYQs" />
    </div>
  );
};

export default StatsCounters;
