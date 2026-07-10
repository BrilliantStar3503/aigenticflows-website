import type { Metadata } from "next";
import { PricingPageClient } from "@/components/pricing/page-client";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbJsonLd, faqPageJsonLd } from "@/lib/seo/structured-data";
import { PAGE_METADATA, buildPageMetadata } from "@/lib/seo/metadata";
import { PRICING_FAQ_ITEMS } from "@/lib/data/pricing-faq";

export const metadata: Metadata = buildPageMetadata(PAGE_METADATA.pricing);

export default function PricingPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }])} />
      <JsonLd data={faqPageJsonLd(PRICING_FAQ_ITEMS)} />
      <PricingPageClient />
    </>
  );
}
