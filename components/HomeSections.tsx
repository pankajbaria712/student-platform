"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  ClipboardList,
  Code2,
  FileCheck,
  GraduationCap,
  Heart,
  Layers,
  Lightbulb,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const sectionHeading = (title: string, subtitle: string) => (
  <div className="max-w-3xl">
    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-300">
      {title}
    </p>
    <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl xl:text-5xl">
      {subtitle}
    </h2>
  </div>
);

const cardClasses =
  "group rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6 shadow-[0_20px_45px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-1 hover:border-indigo-500/20 hover:bg-slate-900/90";

const FeatureCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <div className={cardClasses}>
    <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-indigo-500/10 text-indigo-300 transition group-hover:bg-indigo-500/15">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
    <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
  </div>
);

const SemesterCard = ({ number, status }: { number: number; status: string }) => {
  const isLive = status === "Live";
  return (
    <Link href={`/semester/${number}`} className={`${cardClasses} ${isLive ? "border-indigo-500/30 bg-gradient-to-br from-indigo-500/10 to-slate-900/80" : "opacity-80"}`}>
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Semester</p>
          <p className="mt-2 text-3xl font-black text-white">{number}</p>
        </div>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] ${isLive ? "bg-emerald-500/10 text-emerald-200" : "bg-white/5 text-slate-300"}`}>
          {status}
        </span>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-400">Semester {number} resources, notes, PYQs and solved solutions.</p>
    </Link>
  );
};

const SubjectCard = ({ title, semester, count }: { title: string; semester: string; count: string }) => (
  <div className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-950/85 to-slate-900/70 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.25)] transition duration-300 hover:-translate-y-1 hover:border-indigo-500/20">
    <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.2em] text-slate-300 transition group-hover:bg-indigo-500/10">
      <BookOpen className="h-4 w-4 text-indigo-300" />
      {semester}
    </div>
    <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
    <p className="mt-4 text-sm text-slate-400">{count} resources — notes, PYQs, and exam-ready summaries.</p>
  </div>
);

const BenefitItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-3 text-sm leading-7 text-slate-300 sm:text-base">
    <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-300">
      <CheckIcon />
    </span>
    {text}
  </li>
);

const CheckIcon = () => <ShieldCheck className="h-4 w-4" />;

const CategoryCard = ({ icon: Icon, title, description, href }: { icon: any; title: string; description: string; href: string }) => (
  <Link href={href} className={`${cardClasses} flex flex-col justify-between gap-5 p-6`}>
    <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-500/20">
      <Icon className="h-5 w-5" />
    </div>
    <div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm text-slate-400">{description}</p>
    </div>
    <span className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-300">
      Explore <ArrowRight className="h-4 w-4" />
    </span>
  </Link>
);

const ResourceCard = ({ title, subtitle, tag }: { title: string; subtitle: string; tag: string }) => (
  <div className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.3)] transition duration-300 hover:-translate-y-1 hover:border-indigo-500/20">
    <div className="flex items-center justify-between gap-3">
      <span className="rounded-2xl bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-indigo-200">{tag}</span>
      <Rocket className="h-5 w-5 text-indigo-300" />
    </div>
    <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
    <p className="mt-3 text-sm leading-6 text-slate-400">{subtitle}</p>
  </div>
);

const TestimonialCard = ({ quote, author, role }: { quote: string; author: string; role: string }) => (
  <div className="group rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-[0_25px_80px_rgba(15,23,42,0.22)] transition duration-300 hover:-translate-y-1 hover:border-indigo-500/20">
    <p className="text-base leading-8 text-slate-200">“{quote}”</p>
    <div className="mt-6 flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white">
        <span className="text-sm font-bold uppercase">{author.charAt(0)}</span>
      </div>
      <div>
        <p className="text-sm font-semibold text-white">{author}</p>
        <p className="text-sm text-slate-500">{role}</p>
      </div>
    </div>
  </div>
);

const faqItems = [
  { question: "Is GTU Student Hub free?", answer: "Yes. The platform offers free access to notes, PYQs, syllabus guides, and MCQ practice so GTU students can start preparing right away." },
  { question: "How do I access notes?", answer: "Use the search bar, explore semester pages, or choose your subject card to open chapter notes instantly." },
  { question: "Can I download PDFs?", answer: "Absolutely — most notes and solutions are available as downloadable PDFs for offline study." },
  { question: "How often are resources updated?", answer: "We refresh GTU resources regularly to keep papers, notes, and tests aligned with the latest syllabus and exam patterns." },
];

const HomeSections = () => {
  const [expanded, setExpanded] = useState<null | number>(0);
  const [isVisible, setIsVisible] = useState(false);
  const statRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (statRef.current) observer.observe(statRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="space-y-24">
      <section id="why" className="grid gap-10 rounded-[2rem] border border-white/10 bg-slate-900/80 px-6 py-10 shadow-[0_35px_90px_rgba(15,23,42,0.35)] sm:px-8 sm:py-14">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>{sectionHeading("Why GTU Student Hub", "Everything you need to prepare smarter.")}</div>
          <p className="max-w-2xl text-base leading-7 text-slate-300">
            GTU Student Hub brings together all essential study resources in one organized platform.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <FeatureCard icon={BookOpen} title="Notes" description="Structured GTU notes for every chapter and subject." />
          <FeatureCard icon={FileCheck} title="Previous Year Papers" description="Solved past papers with downloadable PDF access." />
          <FeatureCard icon={ClipboardList} title="MCQ Practice" description="Timed quizzes with instant results and review." />
          <FeatureCard icon={Layers} title="Syllabus PDFs" description="Semester-aligned syllabus documents for fast reference." />
          <FeatureCard icon={Sparkles} title="Semester Resources" description="Everything organized by semester for easy study planning." />
          <FeatureCard icon={Heart} title="Organized Learning" description="Clear study paths that keep GTU students on track." />
        </div>
      </section>

      <section id="semesters" className="grid gap-10">
        <div>{sectionHeading("Explore by semester", "Choose the semester that matches your journey and get instant access to study materials.")}</div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {[3, 4, 5, 6, 7, 8].map((semester) => (
            <SemesterCard key={semester} number={semester} status={semester >= 5 && semester <= 6 ? "Live" : "Coming Soon"} />
          ))}
        </div>
      </section>

      <section id="subjects" className="grid gap-10">
        <div>{sectionHeading("Popular subjects", "The subjects GTU students open first for better scores and smarter preparation.")}</div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <SubjectCard title="Advanced Java Programming" semester="Sem 5" count="40+ resources" />
          <SubjectCard title="Web Programming" semester="Sem 5" count="35+ resources" />
          <SubjectCard title="Microprocessor & Interfacing" semester="Sem 5" count="28+ resources" />
          <SubjectCard title="Internet of Things" semester="Sem 7" count="22+ resources" />
          <SubjectCard title="Software Engineering" semester="Sem 5" count="30+ resources" />
          <SubjectCard title="ADA" semester="Sem 6" count="26+ resources" />
          <SubjectCard title="Computer Networks" semester="Sem 6" count="32+ resources" />
          <SubjectCard title="PDS" semester="Sem 6" count="24+ resources" />
        </div>
      </section>

      <section id="smart" className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="space-y-6">
          <div>{sectionHeading("Prepare smarter", "PREPARE SMARTER, NOT HARDER.")}</div>
          <p className="max-w-2xl text-base leading-8 text-slate-300">
            GTU Student Hub brings all the resources you need into one polished student platform. Study with clarity, practice with confidence, and keep your focus on growth.
          </p>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              "Organized Notes",
              "Previous Year Papers",
              "MCQ Practice",
              "Easy Access",
              "Mobile Friendly",
              "Semester-wise Resources",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-3xl border border-white/10 bg-slate-900/80 p-5 text-sm leading-7 text-slate-300 shadow-[0_18px_45px_rgba(15,23,42,0.18)] transition duration-300 hover:border-indigo-500/20 hover:bg-slate-900/90">
                <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-500/15">
                  <Zap className="h-4 w-4" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-950/90 p-8 shadow-[0_35px_90px_rgba(15,23,42,0.35)]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full bg-indigo-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-indigo-200">
              <TrendingUp className="h-4 w-4 text-indigo-300" /> Performance boost
            </div>
            <div className="grid gap-4 rounded-[1.75rem] bg-slate-900/80 p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-400">Daily learning streak</p>
                  <p className="mt-2 text-2xl font-bold text-white">72%</p>
                </div>
                <div className="rounded-3xl bg-violet-500/15 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-violet-200">Live</div>
              </div>
              <div className="rounded-[1.5rem] bg-white/5 p-4 text-sm text-slate-300">Smart prep means fewer distractions and more productive study sessions, designed for GTU exam goals.</div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] bg-gradient-to-br from-indigo-500/15 to-slate-950/80 p-5">
                <p className="text-sm text-slate-400">Trusted for fast review</p>
                <p className="mt-3 text-xl font-semibold text-white">Simplified Notes</p>
              </div>
              <div className="rounded-[1.75rem] bg-gradient-to-br from-fuchsia-500/15 to-slate-950/80 p-5">
                <p className="text-sm text-slate-400">Practice when you want</p>
                <p className="mt-3 text-xl font-semibold text-white">MCQ Tests</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="stats" className="rounded-[2.5rem] border border-white/10 bg-slate-900/80 px-6 py-10 shadow-[0_35px_120px_rgba(15,23,42,0.45)] sm:px-8 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div>{sectionHeading("Platform stats", "Numbers that show why GTU students choose us.")}</div>
          <div ref={statRef} className="grid gap-4 sm:grid-cols-3">
            {[
              { value: 5200, label: "Students Served" },
              { value: 3200, label: "Resources Available" },
              { value: 320, label: "Notes" },
              { value: 1200, label: "PYQs" },
              { value: 5600, label: "MCQ Questions" },
              { value: 48, label: "Active Subjects" },
            ].map((item) => (
              <div key={item.label} className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-6 text-center">
                <p className="text-4xl font-bold text-white">
                  {isVisible ? <CountUp value={item.value} /> : 0}
                </p>
                <p className="mt-3 text-sm uppercase tracking-[0.24em] text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="community" className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>{sectionHeading("Be around students who think big", "Learn faster with a community that helps you grow.")}</div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { title: "Students", description: "Join thousands of peers preparing together.", icon: Users },
            { title: "Collaboration", description: "Share study plans and solve questions together.", icon: MessageCircle },
            { title: "Learning", description: "Use reliable notes, PYQs, and smart practice.", icon: Lightbulb },
            { title: "Growth", description: "Track progress and build exam confidence.", icon: Rocket },
          ].map((item) => (
            <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.22)] transition duration-300 hover:-translate-y-1 hover:border-indigo-500/20">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-indigo-500/10 text-indigo-300">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="start" className="grid gap-10">
        <div>{sectionHeading("Start with what you need", "Jump straight into the category that matches your study plan.")}</div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          <CategoryCard icon={BookOpen} title="Notes" description="Chapter notes, concept summaries, and quick revision guides." href="/notes" />
          <CategoryCard icon={FileCheck} title="PYQs" description="Previous year papers, solved answers, and exam practice." href="/pyq" />
          <CategoryCard icon={ClipboardList} title="Solutions" description="Downloadable solution PDFs for quick reference." href="/solutions" />
          <CategoryCard icon={Sparkles} title="MCQ Tests" description="Timed quizzes with instant feedback." href="/mcq" />
          <CategoryCard icon={Layers} title="Syllabus" description="Semester-wise syllabus mapping and topic coverage." href="/semester/5" />
        </div>
      </section>

      <section id="resources" className="grid gap-10">
        <div>{sectionHeading("Featured resources", "High-impact resources that GTU students open first.")}</div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <ResourceCard title="Software Engineering" subtitle="Solutions, PYQs, and notes for exam success." tag="Popular" />
          <ResourceCard title="Computer Networks" subtitle="Theory, practice, and past papers in one place." tag="Ready" />
          <ResourceCard title="Advanced Java Programming" subtitle="Notes and solved questions for semester mastery." tag="Fresh" />
          <ResourceCard title="Data Visualization" subtitle="Modern concepts with project-ready support." tag="New" />
        </div>
      </section>

      <section id="testimonials" className="grid gap-10">
        <div>{sectionHeading("What students say", "Real feedback from GTU learners using the platform.")}</div>
        <div className="grid gap-6 xl:grid-cols-3">
          <TestimonialCard quote="This is the only platform I trust for GTU notes and PYQs. Everything is clear and easy to use." author="Aarav K." role="BE CE, 2024" />
          <TestimonialCard quote="The MCQ practice helped improve my speed and confidence for the exam." author="Meera S." role="BE IT, 2025" />
          <TestimonialCard quote="I could download PDFs instantly and stay on top of semester revisions." author="Rohan P." role="BE EXTC, 2023" />
        </div>
      </section>

      <section id="faq" className="grid gap-10">
        <div>{sectionHeading("Frequently asked questions", "Get answers to common GTU Student Hub questions.")}</div>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={item.question} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/80 transition duration-300">
              <button
                type="button"
                onClick={() => setExpanded(expanded === index ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-base font-semibold text-white">{item.question}</span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 text-indigo-300">
                  {expanded === index ? "−" : "+"}
                </span>
              </button>
              {expanded === index ? <div className="border-t border-white/10 px-6 py-5 text-sm leading-7 text-slate-300">{item.answer}</div> : null}
            </div>
          ))}
        </div>
      </section>

      <section id="mission" className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-950/95 to-slate-900/80 px-6 py-10 shadow-[0_35px_120px_rgba(15,23,42,0.45)] sm:px-8 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>{sectionHeading("We built this for GTU students.", "Your mission is to learn. Our mission is to make it easier.")}</div>
          <div className="space-y-5 text-slate-300">
            <p>From syllabus-aligned notes to solved PYQs and MCQ practice, GTU Student Hub is designed to reduce friction and help you study with clarity.</p>
            <p>We believe every GTU student should feel prepared, supported, and confident before exams — without switching between scattered websites.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-5">
                <p className="text-sm text-slate-400">Student-first approach</p>
                <p className="mt-3 font-semibold text-white">Free resources, no confusion.</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-5">
                <p className="text-sm text-slate-400">Better exam preparation</p>
                <p className="mt-3 font-semibold text-white">Practice with confidence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="rounded-[2.5rem] bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-6 py-12 shadow-[0_45px_140px_rgba(99,102,241,0.25)] sm:px-8 sm:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-white/80">Ready to start?</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">Start Learning Today.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">Explore resources and semester guides built for GTU students who want more than notes — they want results.</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/notes" className="inline-flex items-center justify-center rounded-2xl bg-white px-7 py-4 text-sm font-semibold text-slate-950 shadow-lg shadow-black/20 transition hover:bg-slate-100">
              Explore Resources
            </Link>
            <Link href="/semester/5" className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/20">
              Browse Semesters
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const CountUp = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const duration = 1000;
    const start = performance.now();

    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [value]);

  return <span>{count.toLocaleString()}</span>;
};

export default HomeSections;
