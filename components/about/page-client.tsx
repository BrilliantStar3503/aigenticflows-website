"use client";

import { useState } from "react";
import { useAuthRedirectPrompt } from "@/lib/auth/hooks/use-auth-redirect-prompt";
import { HeroNav } from "@/components/home/hero-nav";
import dynamic from "next/dynamic";

const LoginModal = dynamic(() => import("@/components/auth/login-modal").then((mod) => mod.LoginModal), { ssr: false });
import { TALK_TO_SALES_MAILTO, openRequestAccess } from "@/lib/request-access";
import { AboutHero } from "@/components/about/hero";
import { Mission } from "@/components/about/mission";
import { Timeline } from "@/components/about/timeline";
import { Principles } from "@/components/about/principles";
import { Vision } from "@/components/about/vision";
import { Stats } from "@/components/about/stats";
import { Operator } from "@/components/about/operator";
import { Footer } from "@/components/shared/footer";
import { CTASection } from "@/components/shared/cta-section";

export function AboutPageClient() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  useAuthRedirectPrompt(() => setIsLoginOpen(true));

  return (
    <main className="bg-white">
      <HeroNav onLoginClick={() => setIsLoginOpen(true)} onStartTrialClick={() => openRequestAccess()} />
      <LoginModal open={isLoginOpen} onClose={() => setIsLoginOpen(false)} onStartTrialClick={() => { setIsLoginOpen(false); openRequestAccess(); }} />

      <AboutHero onStartTrialClick={() => openRequestAccess()} />

      <Mission />

      <Timeline />

      <Principles />

      <Vision />

      <Stats />

      <Operator />

      <CTASection
        headline="Ready to modernize your business?"
        subtitle="Request access, or talk to our team about what AIGENTIC Flows looks like for your business."
        onPrimaryClick={() => openRequestAccess()}
        secondaryLabel="Talk to Sales"
        secondaryHref={TALK_TO_SALES_MAILTO}
      />

      <Footer />
    </main>
  );
}
