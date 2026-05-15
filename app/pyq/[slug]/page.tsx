import { notFound } from "next/navigation";
import { subjectData } from "../_data/subjects";
import { PyqSubjectView } from "../_components/pyq-subject-view";

export function generateStaticParams() {
  return Object.keys(subjectData).map((slug) => ({ slug }));
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
