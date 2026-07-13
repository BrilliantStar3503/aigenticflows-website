"use client";

import { useState } from "react";
import { useAuthRedirectPrompt } from "@/lib/auth/hooks/use-auth-redirect-prompt";
import { Settings2, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import { HeroNav } from "@/components/home/hero-nav";
import dynamic from "next/dynamic";

const LoginModal = dynamic(() => import("@/components/auth/login-modal").then((mod) => mod.LoginModal), { ssr: false });
const TrialModal = dynamic(() => import("@/components/onboarding/trial-modal").then((mod) => mod.TrialModal), { ssr: false });
import { SolutionsHero } from "@/components/solutions/hero";
import { IndustryGrid } from "@/components/solutions/industry-grid";
import { PlatformDiagram } from "@/components/solutions/platform-diagram";
import { JourneyTimeline } from "@/components/solutions/journey-timeline";
import { FeatureCard } from "@/components/home/feature-card";
import { Footer } from "@/components/shared/footer";
import { CTASection } from "@/components/shared/cta-section";

const WHY_AIMP = [
  {
    icon: Settings2,
    title: "Configurable",
    description: "Adapts to your workflows instead of forcing you into someone else's.",
    tone: "dark" as const,
  },
  {
    icon: Sparkles,
    title: "Automated",
    description: "Built-in workflow and marketing automation that runs as you work.",
    tone: "red" as const,
  },
  {
    icon: TrendingUp,
    title: "Scalable",
    description: "From a single branch to a multi-level organization, without switching tools.",
    tone: "dark" as const,
  },
  {
    icon: ShieldCheck,
    title: "Secure",
    description: "Role-based access and enterprise-grade infrastructure by default.",
    tone: "red" as const,
  },
];

export function SolutionsPageClient() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  useAuthRedirectPrompt(() => setIsLoginOpen(true));
  const [isTrialOpen, setIsTrialOpen] = useState(false);

  return (
    <main className="bg-white">
      <HeroNav onLoginClick={() => setIsLoginOpen(true)} onStartTrialClick={() => setIsTrialOpen(true)} />
      <LoginModal open={isLoginOpen} onClose={() => setIsLoginOpen(false)} onStartTrialClick={() => { setIsLoginOpen(false); setIsTrialOpen(true); }} />
      <TrialModal open={isTrialOpen} onClose={() => setIsTrialOpen(false)} />

      <SolutionsHero onStartTrialClick={() => setIsTrialOpen(true)} />

      <IndustryGrid />

      <PlatformDiagram />

      <section className="mx-auto max-w-[1600px] px-4 sm:px-6 py-20 lg:px-14">
        <div className="mx-auto max-w-[560px] text-center">
          <h2 className="text-[32px] font-bold tracking-tight text-neutral-900">
            Why businesses choose AIGENTIC Flows
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_AIMP.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <JourneyTimeline />

      <CTASection
        headline="Ready to modernize your business?"
        subtitle="Start your free 14-day trial, or talk to our team about what a configured AIGENTIC Flows workspace looks like for your industry."
        onPrimaryClick={() => setIsTrialOpen(true)}
        secondaryLabel="Book a Demo"
      />

      <Footer />
    </main>
  );
}
