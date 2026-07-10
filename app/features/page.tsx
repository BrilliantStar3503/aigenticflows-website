import type { Metadata } from "next";
import { FeaturesPageClient } from "@/components/features/page-client";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbJsonLd, softwareApplicationJsonLd } from "@/lib/seo/structured-data";
import { PAGE_METADATA, buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata(PAGE_METADATA.features);

export default function FeaturesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Features", path: "/features" }])} />
      <JsonLd data={softwareApplicationJsonLd()} />
      <FeaturesPageClient />
    </>
  );
}
