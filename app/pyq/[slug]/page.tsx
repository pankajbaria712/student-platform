import { notFound } from "next/navigation";
import { subjectData } from "../_data/subjects";
import { PyqSubjectView } from "../_components/pyq-subject-view";

export function generateStaticParams() {
  return Object.keys(subjectData).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  if (params.slug === "advanced-java-programming") {
    return {
      title: "GTU Advanced Java Programming PYQ Solutions",
      description:
        "Download GTU Advanced Java Programming previous year paper solutions for Semester 6 Computer Engineering students.",
    };
  }

  return {
    title: subjectData[params.slug]?.title || "GTU PYQ Solutions",
    description: subjectData[params.slug]?.description || undefined,
  };
}

export default function SubjectPYQPage({
  params,
}: {
  params: { slug: string };
}) {
  const subject = subjectData[params.slug];

  if (!subject) {
    notFound();
  }

  return <PyqSubjectView subject={subject} subjectSlug={params.slug} />;
}
