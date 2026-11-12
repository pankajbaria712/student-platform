"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useStudentEngagement } from "@/components/StudentEngagementProvider";
import type { EngagementResource } from "@/lib/student-engagement";

export default function TrackedResourceLink({
  href,
  resource,
  children,
  className,
}: {
  href: string;
  resource: EngagementResource;
  children: ReactNode;
  className?: string;
}) {
  const { recordViewedResource } = useStudentEngagement();
  const onClick = () => recordViewedResource(resource);

  if (href.startsWith("/") && !href.endsWith(".pdf")) {
    return (
      <Link href={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
}
