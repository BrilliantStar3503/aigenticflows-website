import type { Metadata } from "next";
import { ResourcesPageClient } from "@/components/resources/page-client";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbJsonLd } from "@/lib/seo/structured-data";
import { PAGE_METADATA, buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata(PAGE_METADATA.resources);

export default function ResourcesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Resources", path: "/resources" }])} />
      <ResourcesPageClient />
    </>
  );
}
