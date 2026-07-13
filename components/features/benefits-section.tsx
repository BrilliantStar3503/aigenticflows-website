import { Layers, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import { BenefitCard } from "@/components/features/benefit-card";

const BENEFITS = [
  {
    icon: Layers,
    title: "Everything in one place",
    description: "No more switching between a dozen disconnected tools.",
    tone: "dark" as const,
  },
  {
    icon: Sparkles,
    title: "Connected workflows",
    description: "Automation built into every module, not bolted on.",
    tone: "red" as const,
  },
  {
    icon: TrendingUp,
    title: "Scalable architecture",
    description: "From a single team to a multi-level organization.",
    tone: "dark" as const,
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-grade security",
    description: "Role-based access and reliable infrastructure by default.",
    tone: "red" as const,
  },
];

export function BenefitsSection() {
  return (
    <section className="mx-auto max-w-[1600px] px-4 sm:px-6 py-20 lg:px-14">
      <div className="mx-auto max-w-[560px] text-center">
        <h2 className="text-[32px] font-bold tracking-tight text-neutral-900">
          Why businesses choose AIGENTIC Flows
        </h2>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {BENEFITS.map((benefit) => (
          <BenefitCard key={benefit.title} {...benefit} />
        ))}
      </div>
    </section>
  );
}
