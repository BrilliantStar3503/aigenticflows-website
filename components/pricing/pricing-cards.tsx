"use client";

import { PricingCard, type PricingTier } from "@/components/pricing/pricing-card";

const TIERS: PricingTier[] = [
  {
    name: "Starter",
    description: "For small teams getting started with AIMP.",
    price: "Custom",
    billingLabel: "Tailored to your team size",
    ctaLabel: "Start Free Trial",
    features: [
      "Core CRM",
      "Task management",
      "Calendar",
      "Up to 5 team members",
      "Email support",
    ],
  },
  {
    name: "Professional",
    description: "For growing agencies that need automation and AI.",
    price: "Custom",
    billingLabel: "Tailored to your team size",
    ctaLabel: "Start Free Trial",
    recommended: true,
    features: [
      "Everything in Starter",
      "AI Executive Assistant",
      "Workflow automation",
      "Marketing automation",
      "Advanced analytics",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    description: "For large, multi-branch organizations.",
    price: "Custom",
    billingLabel: "Contact sales for a tailored quote",
    ctaLabel: "Contact Sales",
    features: [
      "Everything in Professional",
      "Multi-branch hierarchy",
      "Custom branding",
      "API access",
      "Dedicated onboarding",
      "Enterprise-grade security",
    ],
  },
];

interface PricingCardsProps {
  onStartTrialClick: () => void;
}

export function PricingCards({ onStartTrialClick }: PricingCardsProps) {
  return (
    <section className="mx-auto max-w-[1200px] px-4 sm:px-6 pb-20 pt-10 lg:px-14">
      <h2 className="sr-only">Pricing plans</h2>
      <div className="grid grid-cols-1 gap-7 lg:grid-cols-3 lg:items-start">
        {TIERS.map((tier) => (
          <PricingCard
            key={tier.name}
            {...tier}
            onCtaClick={tier.ctaLabel === "Start Free Trial" ? onStartTrialClick : undefined}
          />
        ))}
      </div>
    </section>
  );
}
