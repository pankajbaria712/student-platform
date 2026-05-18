import { notFound } from "next/navigation";
import { ipdcMcqData } from "@/lib/ipdc/mcqs";
import IpdcTestPage from "@/components/IpdcTestPage";

export function generateStaticParams() {
  return Object.keys(ipdcMcqData).map((test) => ({ test }));
}

export default function Page({ params }: { params: { test: string } }) {
  const testData = ipdcMcqData[params.test];
  if (!testData) {
    notFound();
  }

  return <IpdcTestPage test={testData} />;
}
