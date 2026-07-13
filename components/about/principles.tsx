import { Heart, Layers, Sparkles, Wand2 } from "lucide-react";

const PRINCIPLES = [
  {
    icon: Sparkles,
    title: "Built to Automate",
    description: "Automation isn't a feature bolted on top — it's part of how every module works.",
    tone: "red" as const,
  },
  {
    icon: Layers,
    title: "Designed for Scale",
    description: "From a single team to a multi-branch organization, without switching platforms.",
    tone: "dark" as const,
  },
  {
    icon: Wand2,
    title: "Simple by Default",
    description: "Powerful doesn't have to mean complicated. Every workflow starts simple.",
    tone: "red" as const,
  },
  {
    icon: Heart,
    title: "Customer Obsessed",
    description: "We build around how real businesses operate, not how software vendors assume they do.",
    tone: "dark" as const,
  },
];

export function Principles() {
  return (
    <section className="mx-auto max-w-[1600px] px-4 sm:px-6 py-20 lg:px-14">
      <div className="mx-auto max-w-[560px] text-center">
        <h2 className="text-[32px] font-bold tracking-tight text-neutral-900">Our principles</h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PRINCIPLES.map((principle) => (
          <div
            key={principle.title}
            className="group flex flex-col gap-4 rounded-2xl border border-neutral-100 bg-white p-7 shadow-[0_4px_24px_rgba(17,17,17,0.03)] transition-all duration-200 hover:-translate-y-1 hover:border-neutral-200 hover:shadow-[0_24px_48px_-8px_rgba(17,17,17,0.10)]"
          >
            <div
              className={
                principle.tone === "dark"
                  ? "flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 transition-transform duration-200 group-hover:scale-105"
                  : "flex h-10 w-10 items-center justify-center rounded-xl bg-brand-red transition-transform duration-200 group-hover:scale-105"
              }
            >
              <principle.icon size={18} className="text-white" strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-base font-bold text-neutral-900">{principle.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">{principle.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
