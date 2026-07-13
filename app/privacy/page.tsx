import type { Metadata } from "next";
import { LegalShell } from "@/components/legal/legal-shell";
import { PrivacyPolicyContent } from "@/components/legal/privacy-policy-content";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbJsonLd } from "@/lib/seo/structured-data";
import { PAGE_METADATA, buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata(PAGE_METADATA.privacy);

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy" }])} />
      <LegalShell title="Privacy Policy" effectiveDate="July 13, 2026">
        <PrivacyPolicyContent />
      </LegalShell>
    </>
  );
}
