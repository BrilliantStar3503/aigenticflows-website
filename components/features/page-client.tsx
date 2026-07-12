"use client";

import { useState } from "react";
import { useAuthRedirectPrompt } from "@/lib/auth/hooks/use-auth-redirect-prompt";
import { HeroNav } from "@/components/home/hero-nav";
import dynamic from "next/dynamic";

const LoginModal = dynamic(() => import("@/components/auth/login-modal").then((mod) => mod.LoginModal), { ssr: false });
const TrialModal = dynamic(() => import("@/components/onboarding/trial-modal").then((mod) => mod.TrialModal), { ssr: false });
import { FeaturesHero } from "@/components/features/hero";
import { CapabilityGrid } from "@/components/features/capability-grid";
import { FeatureShowcase } from "@/components/features/feature-showcase";
import { ScreenshotFrame } from "@/components/features/screenshot-frame";
import { BenefitsSection } from "@/components/features/benefits-section";
import { ComparisonSection } from "@/components/features/comparison-section";
import { AIExecutiveBriefing } from "@/components/home/ai-executive-briefing";
import { SalesPipelineCard } from "@/components/home/sales-pipeline-card";
import { RevenueChartCard } from "@/components/home/revenue-chart-card";
import { WorkflowBuilderVisual } from "@/components/features/workflow-builder-visual";
import { RecruitmentVisual } from "@/components/features/recruitment-visual";
import { MarketingVisual } from "@/components/features/marketing-visual";
import { MessagingVisual } from "@/components/features/messaging-visual";
import { Footer } from "@/components/shared/footer";
import { CTASection } from "@/components/shared/cta-section";

export function FeaturesPageClient() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  useAuthRedirectPrompt(() => setIsLoginOpen(true));
  const [isTrialOpen, setIsTrialOpen] = useState(false);

  return (
    <main className="bg-white">
      <HeroNav onLoginClick={() => setIsLoginOpen(true)} onStartTrialClick={() => setIsTrialOpen(true)} />
      <LoginModal open={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <TrialModal open={isTrialOpen} onClose={() => setIsTrialOpen(false)} />

      <FeaturesHero onStartTrialClick={() => setIsTrialOpen(true)} />

      <CapabilityGrid />

      <FeatureShowcase
        eyebrow="AI Executive Assistant"
        title="Insights and recommendations, before you ask"
        description="AIGENTIC Flows synthesizes activity across every module into one daily briefing — insights, business health, and recommended next actions."
        bullets={["AI-generated insights", "Business health scoring", "Recommended next actions"]}
        visual={
          <ScreenshotFrame label="app.aigenticflows.com/ai">
            <AIExecutiveBriefing />
          </ScreenshotFrame>
        }
      />

      <FeatureShowcase
        tinted
        reverse
        eyebrow="CRM & Relationship Management"
        title="Every lead and client, in one pipeline"
        description="Track leads, clients, and follow-ups from first contact through close, with notes and history shared across your team."
        bullets={["Lead pipeline", "Client records", "Follow-ups", "Shared notes"]}
        visual={
          <ScreenshotFrame label="app.aigenticflows.com/crm">
            <SalesPipelineCard />
          </ScreenshotFrame>
        }
      />

      <FeatureShowcase
        eyebrow="Workflow Automation"
        title="Automation, without the engineering team"
        description="Build automations visually with triggers, conditions, and actions — no code required."
        bullets={["Visual automation builder", "Triggers", "Actions", "Conditions"]}
        visual={
          <ScreenshotFrame label="app.aigenticflows.com/automation">
            <WorkflowBuilderVisual />
          </ScreenshotFrame>
        }
      />

      <FeatureShowcase
        tinted
        reverse
        eyebrow="Analytics Dashboard"
        title="Performance you can see in real time"
        description="Track KPIs, revenue, and forecasts across your agency, branch, and team — no waiting for a monthly report."
        bullets={["KPIs", "Revenue", "Forecasts", "Performance"]}
        visual={
          <ScreenshotFrame label="app.aigenticflows.com/analytics">
            <RevenueChartCard />
          </ScreenshotFrame>
        }
      />

      <FeatureShowcase
        eyebrow="Recruitment Management"
        title="A structured pipeline for growing your team"
        description="Move candidates from application to onboarding with every stage visible to the whole team."
        bullets={["Candidates", "Pipeline", "Interviews", "Onboarding"]}
        visual={
          <ScreenshotFrame label="app.aigenticflows.com/recruitment">
            <RecruitmentVisual />
          </ScreenshotFrame>
        }
      />

      <FeatureShowcase
        tinted
        reverse
        eyebrow="Marketing Automation"
        title="Campaigns that run themselves"
        description="Build email sequences and nurture campaigns that keep leads warm without manual follow-up."
        bullets={["Campaigns", "Email", "Lead nurturing", "Sequences"]}
        visual={
          <ScreenshotFrame label="app.aigenticflows.com/marketing">
            <MarketingVisual />
          </ScreenshotFrame>
        }
      />

      <FeatureShowcase
        eyebrow="Communication Hub"
        title="Every conversation, one inbox"
        description="Email, messenger, SMS, and notifications — all in a single, shared communication hub."
        bullets={["Email", "Messenger", "SMS", "Notifications"]}
        visual={
          <ScreenshotFrame label="app.aigenticflows.com/messages">
            <MessagingVisual />
          </ScreenshotFrame>
        }
      />

      <BenefitsSection />

      <ComparisonSection />

      <CTASection
        headline="Ready to work smarter?"
        subtitle="Start your free 14-day trial, or book a demo to see AIGENTIC Flows configured for your business."
        onPrimaryClick={() => setIsTrialOpen(true)}
        secondaryLabel="Book a Demo"
      />

      <Footer />
    </main>
  );
}
