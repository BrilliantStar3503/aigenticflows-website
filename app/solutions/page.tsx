import type { Metadata } from "next";
import { SolutionsPageClient } from "@/components/solutions/page-client";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbJsonLd } from "@/lib/seo/structured-data";
import { PAGE_METADATA, buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata(PAGE_METADATA.solutions);

export default function SolutionsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Solutions", path: "/solutions" }])} />
      <SolutionsPageClient />
    </>
  );
}
