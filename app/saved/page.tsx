import type { Metadata } from "next";
import SavedResources from "@/components/SavedResources";

export const metadata: Metadata = {
  title: "Saved Resources",
  description: "Open the GTU study resources you have bookmarked in this browser.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SavedPage() {
  return (
    <main className="min-h-[70vh]">
      <SavedResources />
    </main>
  );
}
