"use client";

import { useState } from "react";
import { useAuthRedirectPrompt } from "@/lib/auth/hooks/use-auth-redirect-prompt";
import { HeroNav } from "@/components/home/hero-nav";
import dynamic from "next/dynamic";

const LoginModal = dynamic(() => import("@/components/auth/login-modal").then((mod) => mod.LoginModal), { ssr: false });
import { TALK_TO_SALES_MAILTO, openRequestAccess } from "@/lib/request-access";
import { PricingHero } from "@/components/pricing/hero";
import { PricingCards } from "@/components/pricing/pricing-cards";
import { ComparisonTable } from "@/components/pricing/comparison-table";
import { EnterpriseSection } from "@/components/pricing/enterprise-section";
import { FAQ } from "@/components/pricing/faq";
import { Footer } from "@/components/shared/footer";
import { CTASection } from "@/components/shared/cta-section";

export function PricingPageClient() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  useAuthRedirectPrompt(() => setIsLoginOpen(true));

  return (
    <main className="bg-white">
      <HeroNav onLoginClick={() => setIsLoginOpen(true)} onStartTrialClick={() => openRequestAccess()} />
      <LoginModal open={isLoginOpen} onClose={() => setIsLoginOpen(false)} onStartTrialClick={() => { setIsLoginOpen(false); openRequestAccess(); }} />

      <PricingHero onStartTrialClick={() => openRequestAccess()} />

      <PricingCards onStartTrialClick={() => openRequestAccess()} />

      <ComparisonTable />

      <EnterpriseSection />

      <FAQ />

      <CTASection
        headline="Start building your business with AIGENTIC Flows today."
        subtitle="Workspaces are set up by our team. Request access to get started."
        onPrimaryClick={() => openRequestAccess()}
        secondaryLabel="Talk to Sales"
        secondaryHref={TALK_TO_SALES_MAILTO}
      />

      <Footer />
    </main>
  );
}
