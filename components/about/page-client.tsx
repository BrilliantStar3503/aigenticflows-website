"use client";

import { useState } from "react";
import { useAuthRedirectPrompt } from "@/lib/auth/hooks/use-auth-redirect-prompt";
import { HeroNav } from "@/components/home/hero-nav";
import dynamic from "next/dynamic";

const LoginModal = dynamic(() => import("@/components/auth/login-modal").then((mod) => mod.LoginModal), { ssr: false });
const TrialModal = dynamic(() => import("@/components/onboarding/trial-modal").then((mod) => mod.TrialModal), { ssr: false });
import { AboutHero } from "@/components/about/hero";
import { Mission } from "@/components/about/mission";
import { Timeline } from "@/components/about/timeline";
import { Principles } from "@/components/about/principles";
import { Vision } from "@/components/about/vision";
import { Stats } from "@/components/about/stats";
import { Footer } from "@/components/shared/footer";
import { CTASection } from "@/components/shared/cta-section";

export function AboutPageClient() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  useAuthRedirectPrompt(() => setIsLoginOpen(true));
  const [isTrialOpen, setIsTrialOpen] = useState(false);

  return (
    <main className="bg-white">
      <HeroNav onLoginClick={() => setIsLoginOpen(true)} onStartTrialClick={() => setIsTrialOpen(true)} />
      <LoginModal open={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <TrialModal open={isTrialOpen} onClose={() => setIsTrialOpen(false)} />

      <AboutHero onStartTrialClick={() => setIsTrialOpen(true)} />

      <Mission />

      <Timeline />

      <Principles />

      <Vision />

      <Stats />

      <CTASection
        headline="Ready to modernize your business?"
        subtitle="Start your free 14-day trial, or talk to our team about what AIMP looks like for your business."
        onPrimaryClick={() => setIsTrialOpen(true)}
        secondaryLabel="Talk to Sales"
      />

      <Footer />
    </main>
  );
}
