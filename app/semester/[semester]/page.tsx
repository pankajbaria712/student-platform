import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubjectCard from "@/components/SubjectCard";
import type { Metadata } from "next";

interface SemesterPageProps {
  params: {
    semester: string;
  };
}

// Mock data - in production, this would come from your database
const semesterSubjects: Record<
  string,
  Array<{ title: string; slug: string }>
> = {
  "5": [
    { title: "DBMS", slug: "dbms-semester-5" },
    { title: "Operating System", slug: "operating-system-semester-5" },
    { title: "Computer Networks", slug: "computer-networks-semester-5" },
  ],
  "3": [
    { title: "Data Structures", slug: "data-structures-semester-3" },
    { title: "Discrete Mathematics", slug: "discrete-mathematics-semester-3" },
  ],
  "4": [
    { title: "Algorithms", slug: "algorithms-semester-4" },
    { title: "Database Systems", slug: "database-systems-semester-4" },
  ],
  "6": [
    { title: "Software Engineering", slug: "software-engineering-semester-6" },
    { title: "Web Technologies", slug: "web-technologies-semester-6" },
  ],
  "7": [
    { title: "Machine Learning", slug: "machine-learning-semester-7" },
    { title: "Cloud Computing", slug: "cloud-computing-semester-7" },
  ],
  "8": [
    { title: "Project Management", slug: "project-management-semester-8" },
    { title: "Cyber Security", slug: "cyber-security-semester-8" },
  ],
};

export async function generateMetadata({
  params,
}: SemesterPageProps): Promise<Metadata> {
  const semester = parseInt(params.semester);
  if (!semesterSubjects[params.semester]) {
    return {
      title: "Semester Not Found - StudentHub",
    };
  }

  return {
    title: `BE Computer Engineering Semester ${semester} Notes & PYQs - StudentHub`,
    description: `Access comprehensive notes, PYQs, and premium PDF downloads for BE Computer Engineering Semester ${semester} subjects.`,
  };
}

export default function SemesterPage({ params }: SemesterPageProps) {
  const semester = parseInt(params.semester);
  const subjects = semesterSubjects[params.semester];

  if (!subjects) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            Semester {semester} - BE Computer Engineering
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Choose a subject to access notes, PYQs, and premium content.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject) => (
            <SubjectCard
              key={subject.slug}
              title={subject.title}
              slug={subject.slug}
              semester={semester}
            />
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}

export async function generateStaticParams() {
  return [
    { semester: "3" },
    { semester: "4" },
    { semester: "5" },
    { semester: "6" },
    { semester: "7" },
    { semester: "8" },
  ];
}
