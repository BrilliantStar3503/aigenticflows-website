"use client";

import { PricingCard, type PricingTier } from "@/components/pricing/pricing-card";

const TIERS: PricingTier[] = [
  {
    name: "Starter",
    description: "For small teams getting started with AIGENTIC Flows.",
    price: "Custom",
    billingLabel: "Tailored to your team size",
    ctaLabel: "Start Free Trial",
    features: [
      "Core Platform — Contacts, Companies, Deals & Pipeline",
      "Team directory, Tasks, and unified Calendar",
      "Shared Tags and activity history",
      "Email support",
    ],
  },
  {
    name: "Growth",
    description: "For teams ready to add an industry Solution Pack.",
    price: "Custom",
    billingLabel: "Tailored to your team size",
    ctaLabel: "Start Free Trial",
    features: [
      "Everything in Starter",
      "1 industry Solution Pack (currently: Insurance)",
      "Marketing automation and email campaigns",
      "Facebook Lead Ads capture",
    ],
  },
  {
    name: "Business",
    description: "For multi-line organizations running more than one Solution Pack.",
    price: "Custom",
    billingLabel: "Tailored to your team size",
    ctaLabel: "Start Free Trial",
    recommended: true,
    features: [
      "Everything in Growth",
      "Up to 3 industry Solution Packs",
      "Advanced reporting",
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
      "Everything in Business",
      "Unlimited Solution Packs",
      "Multi-branch hierarchy",
      "Custom branding",
      "API access",
      "Dedicated onboarding",
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
      <div className="grid grid-cols-1 gap-7 lg:grid-cols-4 lg:items-start">
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
