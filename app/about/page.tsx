import type { Metadata } from "next";
import { AboutPageClient } from "@/components/about/page-client";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbJsonLd } from "@/lib/seo/structured-data";
import { PAGE_METADATA, buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata(PAGE_METADATA.about);

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />
      <AboutPageClient />
    </>
  );
}
