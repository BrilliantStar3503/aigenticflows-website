import { Layers, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import { FeatureCard } from "@/components/home/feature-card";

const FEATURES = [
  {
    icon: Sparkles,
    title: "AI-Powered",
    description: "Intelligent insights and automation that drive better decisions.",
    tone: "dark" as const,
  },
  {
    icon: Layers,
    title: "All-in-One",
    description: "CRM, marketing, automation, and more — in one platform.",
    tone: "red" as const,
  },
  {
    icon: TrendingUp,
    title: "Built for Growth",
    description: "Scale your business with confidence and real-time visibility.",
    tone: "dark" as const,
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    description: "Enterprise-grade security and 99.9% uptime you can trust.",
    tone: "red" as const,
  },
];

export function FeaturesSection() {
  return (
    <section className="mx-auto max-w-[1600px] px-4 sm:px-6 pb-16 pt-4 lg:px-14">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}
