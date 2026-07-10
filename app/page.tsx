import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { FeaturesSection } from "@/components/home/features-section";
import { Footer } from "@/components/shared/footer";
import { JsonLd } from "@/components/shared/json-ld";
import { softwareApplicationJsonLd } from "@/lib/seo/structured-data";
import { PAGE_METADATA, buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata(PAGE_METADATA.home);

export default function HomePage() {
  return (
    <main>
      <JsonLd data={softwareApplicationJsonLd()} />
      <Hero />
      <FeaturesSection />
      <Footer />
    </main>
  );
}
