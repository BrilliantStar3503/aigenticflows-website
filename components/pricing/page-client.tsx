"use client";

import { useState } from "react";
import { useAuthRedirectPrompt } from "@/lib/auth/hooks/use-auth-redirect-prompt";
import { HeroNav } from "@/components/home/hero-nav";
import dynamic from "next/dynamic";

const LoginModal = dynamic(() => import("@/components/auth/login-modal").then((mod) => mod.LoginModal), { ssr: false });
const TrialModal = dynamic(() => import("@/components/onboarding/trial-modal").then((mod) => mod.TrialModal), { ssr: false });
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
  const [isTrialOpen, setIsTrialOpen] = useState(false);

  return (
    <main className="bg-white">
      <HeroNav onLoginClick={() => setIsLoginOpen(true)} onStartTrialClick={() => setIsTrialOpen(true)} />
      <LoginModal open={isLoginOpen} onClose={() => setIsLoginOpen(false)} onStartTrialClick={() => { setIsLoginOpen(false); setIsTrialOpen(true); }} />
      <TrialModal open={isTrialOpen} onClose={() => setIsTrialOpen(false)} />

      <PricingHero onStartTrialClick={() => setIsTrialOpen(true)} />

      <PricingCards onStartTrialClick={() => setIsTrialOpen(true)} />

      <ComparisonTable />

      <EnterpriseSection />

      <FAQ />

      <CTASection
        headline="Start building your business with AIGENTIC Flows today."
        subtitle="Free 14-day trial. No credit card required."
        onPrimaryClick={() => setIsTrialOpen(true)}
        secondaryLabel="Talk to Sales"
      />

      <Footer />
    </main>
  );
}
