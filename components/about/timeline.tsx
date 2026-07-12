import { Boxes, Layers, Puzzle, Rocket, Sparkles } from "lucide-react";

const STAGES = [
  {
    icon: Puzzle,
    title: "Disconnected Tools",
    description: "Businesses ran on spreadsheets, chat apps, and point solutions that never talked to each other.",
  },
  {
    icon: Layers,
    title: "Growing Complexity",
    description: "As teams grew, so did the number of tools — and the cost of keeping them in sync.",
  },
  {
    icon: Sparkles,
    title: "AI Opportunity",
    description: "AI made it possible to automate the busywork that used to require an entire operations team.",
  },
  {
    icon: Boxes,
    title: "One Unified Platform",
    description: "AIGENTIC Flows brought CRM, automation, analytics, and communication into a single configurable core.",
  },
  {
    icon: Rocket,
    title: "Future of Business Operations",
    description: "A platform that adapts to any service-based industry, without rebuilding the core each time.",
  },
];

export function Timeline() {
  return (
    <section className="bg-neutral-50 py-20">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-14">
        <div className="mx-auto max-w-[560px] text-center">
          <h2 className="text-[32px] font-bold tracking-tight text-neutral-900">Why AIGENTIC Flows exists</h2>
        </div>

        <div className="mx-auto mt-14 max-w-[640px]">
          {STAGES.map((stage, index) => (
            <div key={stage.title} className="flex gap-5">
              <div className="flex flex-col items-center">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-neutral-100 bg-white shadow-[0_4px_16px_rgba(17,17,17,0.05)]">
                  <stage.icon size={18} className="text-brand-red" />
                </div>
                {index < STAGES.length - 1 && <div className="my-1 w-px flex-1 bg-neutral-200" />}
              </div>
              <div className={index < STAGES.length - 1 ? "pb-10" : ""}>
                <h3 className="pt-2 text-[16px] font-bold text-neutral-900">{stage.title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-neutral-600">{stage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
