import React from "react";

const Testimonial = ({ quote, name, role }: { quote: string; name: string; role?: string }) => (
  <div className="rounded-2xl border border-white/6 bg-white/3 p-6">
    <p className="mb-4 text-sm text-slate-100">“{quote}”</p>
    <div className="text-sm text-slate-300">— {name} <span className="text-xs text-slate-400">{role}</span></div>
  </div>
);

export default function Testimonials() {
  const items = [
    { quote: "Saved me countless hours of revision. The PYQs are gold.", name: "Aarav K.", role: "BE CE, 2024" },
    { quote: "Clear, verified notes and fast PDF downloads.", name: "Meera S.", role: "BE IT, 2025" },
    { quote: "The MCQ practice helped me improve my speed.", name: "Rohan P.", role: "BE EXTC, 2023" },
  ];

  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-2xl font-extrabold">What students say</h3>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {items.map((t) => (
          <Testimonial key={t.name} quote={t.quote} name={t.name} role={t.role} />
        ))}
      </div>
    </div>
  );
}
