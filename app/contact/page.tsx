import type { Metadata } from "next";
import { ContactPageClient } from "@/components/contact/page-client";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbJsonLd, faqPageJsonLd } from "@/lib/seo/structured-data";
import { PAGE_METADATA, buildPageMetadata } from "@/lib/seo/metadata";
import { CONTACT_FAQ_ITEMS } from "@/lib/data/contact-faq";

export const metadata: Metadata = buildPageMetadata(PAGE_METADATA.contact);

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />
      <JsonLd data={faqPageJsonLd(CONTACT_FAQ_ITEMS)} />
      <ContactPageClient />
    </>
  );
}
