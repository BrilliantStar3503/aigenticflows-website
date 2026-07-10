"use client";

import { useState } from "react";
import { useAuthRedirectPrompt } from "@/lib/auth/hooks/use-auth-redirect-prompt";
import { HeroNav } from "@/components/home/hero-nav";
import dynamic from "next/dynamic";

const LoginModal = dynamic(() => import("@/components/auth/login-modal").then((mod) => mod.LoginModal), { ssr: false });
const TrialModal = dynamic(() => import("@/components/onboarding/trial-modal").then((mod) => mod.TrialModal), { ssr: false });
import { ContactHero } from "@/components/contact/hero";
import { ContactOptions } from "@/components/contact/contact-options";
import { ContactForm } from "@/components/contact/contact-form";
import { DemoScheduler } from "@/components/contact/demo-scheduler";
import { FAQ } from "@/components/contact/faq";
import { Footer } from "@/components/shared/footer";
import { CTASection } from "@/components/shared/cta-section";

export function ContactPageClient() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  useAuthRedirectPrompt(() => setIsLoginOpen(true));
  const [isTrialOpen, setIsTrialOpen] = useState(false);

  return (
    <main className="bg-white">
      <HeroNav onLoginClick={() => setIsLoginOpen(true)} onStartTrialClick={() => setIsTrialOpen(true)} />
      <LoginModal open={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <TrialModal open={isTrialOpen} onClose={() => setIsTrialOpen(false)} />

      <ContactHero onStartTrialClick={() => setIsTrialOpen(true)} />

      <ContactOptions onStartTrialClick={() => setIsTrialOpen(true)} />

      <ContactForm />

      <DemoScheduler />

      <FAQ />

      <CTASection
        headline="Ready to transform your business?"
        subtitle="Start your free 14-day trial, or request a consultation with our team."
        onPrimaryClick={() => setIsTrialOpen(true)}
        secondaryLabel="Request Consultation"
        secondaryHref="#contact-form"
      />

      <Footer />
    </main>
  );
}
