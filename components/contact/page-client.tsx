"use client";

import { useState } from "react";
import { useAuthRedirectPrompt } from "@/lib/auth/hooks/use-auth-redirect-prompt";
import { HeroNav } from "@/components/home/hero-nav";
import dynamic from "next/dynamic";

const LoginModal = dynamic(() => import("@/components/auth/login-modal").then((mod) => mod.LoginModal), { ssr: false });
import { openRequestAccess } from "@/lib/request-access";
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

  return (
    <main className="bg-white">
      <HeroNav onLoginClick={() => setIsLoginOpen(true)} onStartTrialClick={() => openRequestAccess()} />
      <LoginModal open={isLoginOpen} onClose={() => setIsLoginOpen(false)} onStartTrialClick={() => { setIsLoginOpen(false); openRequestAccess(); }} />

      <ContactHero onStartTrialClick={() => openRequestAccess()} />

      <ContactOptions onStartTrialClick={() => openRequestAccess()} />

      <ContactForm />

      <DemoScheduler />

      <FAQ />

      <CTASection
        headline="Ready to transform your business?"
        subtitle="Request access, or request a consultation with our team."
        onPrimaryClick={() => openRequestAccess()}
        secondaryLabel="Request Consultation"
        secondaryHref="#contact-form"
      />

      <Footer />
    </main>
  );
}
