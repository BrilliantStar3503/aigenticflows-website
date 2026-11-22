"use client";

import { useState } from "react";
import { useAuthRedirectPrompt } from "@/lib/auth/hooks/use-auth-redirect-prompt";
import { HeroNav } from "@/components/home/hero-nav";
import dynamic from "next/dynamic";

const LoginModal = dynamic(() => import("@/components/auth/login-modal").then((mod) => mod.LoginModal), { ssr: false });
import { openRequestAccess } from "@/lib/request-access";
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

  return (
    <main className="bg-white">
      <HeroNav onLoginClick={() => setIsLoginOpen(true)} onStartTrialClick={() => openRequestAccess()} />
      <LoginModal open={isLoginOpen} onClose={() => setIsLoginOpen(false)} onStartTrialClick={() => { setIsLoginOpen(false); openRequestAccess(); }} />

      <ResourcesHero onStartTrialClick={() => openRequestAccess()} />

      <CategoryGrid />

      <FeaturedResources />

      <SearchSection />

      <LearningPaths />

      <CommunitySection />

      <CTASection
        headline="Start learning. Start growing."
        subtitle="Everything you need to get the most out of AIGENTIC Flows, in one place."
        onPrimaryClick={() => openRequestAccess()}
        secondaryLabel="Browse Documentation"
      />

      <Footer />
    </main>
  );
}
