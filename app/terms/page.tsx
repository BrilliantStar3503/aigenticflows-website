import type { Metadata } from "next";
import { LegalShell } from "@/components/legal/legal-shell";
import { TermsOfServiceContent } from "@/components/legal/terms-of-service-content";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbJsonLd } from "@/lib/seo/structured-data";
import { PAGE_METADATA, buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata(PAGE_METADATA.terms);

export default function TermsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Terms of Service", path: "/terms" }])} />
      <LegalShell title="Terms of Service" effectiveDate="July 13, 2026">
        <TermsOfServiceContent />
      </LegalShell>
    </>
  );
}
