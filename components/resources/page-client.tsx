"use client";

import { useState } from "react";
import { useAuthRedirectPrompt } from "@/lib/auth/hooks/use-auth-redirect-prompt";
import { HeroNav } from "@/components/home/hero-nav";
import dynamic from "next/dynamic";

const LoginModal = dynamic(() => import("@/components/auth/login-modal").then((mod) => mod.LoginModal), { ssr: false });
const TrialModal = dynamic(() => import("@/components/onboarding/trial-modal").then((mod) => mod.TrialModal), { ssr: false });
import { ResourcesHero } from "@/components/resources/hero";
import { CategoryGrid } from "@/components/resources/category-grid";
import { FeaturedResources } from "@/components/resources/featured-resources";
import { SearchSection } from "@/components/resources/search-section";
import { LearningPaths } from "@/components/resources/learning-paths";
import { CommunitySection } from "@/components/resources/community-section";
import { Footer } from "@/components/shared/footer";
import { CTASection } from "@/components/shared/cta-section";

export function ResourcesPageClient() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  useAuthRedirectPrompt(() => setIsLoginOpen(true));
  const [isTrialOpen, setIsTrialOpen] = useState(false);

  return (
    <main className="bg-white">
      <HeroNav onLoginClick={() => setIsLoginOpen(true)} onStartTrialClick={() => setIsTrialOpen(true)} />
      <LoginModal open={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <TrialModal open={isTrialOpen} onClose={() => setIsTrialOpen(false)} />

      <ResourcesHero onStartTrialClick={() => setIsTrialOpen(true)} />

      <CategoryGrid />

      <FeaturedResources />

      <SearchSection />

      <LearningPaths />

      <CommunitySection />

      <CTASection
        headline="Start learning. Start growing."
        subtitle="Everything you need to get the most out of AIMP, in one place."
        onPrimaryClick={() => setIsTrialOpen(true)}
        secondaryLabel="Browse Documentation"
      />

      <Footer />
    </main>
  );
}
