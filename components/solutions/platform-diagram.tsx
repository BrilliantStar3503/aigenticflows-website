import {
  BarChart3,
  Calendar,
  CheckSquare,
  FileText,
  MessageSquare,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

const INDUSTRY_LABELS = [
  "Insurance",
  "Financial Advisory",
  "Real Estate",
  "Healthcare",
  "Accounting",
  "Professional Services",
];

const MODULES = [
  { label: "CRM", icon: Users },
  { label: "Automation", icon: Zap },
  { label: "Pipeline", icon: Sparkles },
  { label: "Analytics", icon: BarChart3 },
  { label: "Tasks", icon: CheckSquare },
  { label: "Calendar", icon: Calendar },
  { label: "Messaging", icon: MessageSquare },
  { label: "Reports", icon: FileText },
];

export function PlatformDiagram() {
  return (
    <section className="bg-neutral-50 py-20">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-14">
        <div className="mx-auto max-w-[560px] text-center">
          <h2 className="text-[32px] font-bold tracking-tight text-neutral-900">
            One core platform. Built to expand.
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">
            The same AIGENTIC Flows core works for any service business — Solution Packs add
            industry-specific depth on top.
          </p>
        </div>

        <div className="mx-auto mt-12 flex max-w-[720px] flex-col items-center">
          <div className="flex flex-wrap justify-center gap-2.5">
            {INDUSTRY_LABELS.map((label) => (
              <span
                key={label}
                className="rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-[12px] font-medium text-neutral-600"
              >
                {label}
              </span>
            ))}
          </div>

          <div className="my-4 h-8 w-px bg-neutral-300" />

          <div className="animate-core-pulse rounded-2xl bg-brand-red px-10 py-5 text-center">
            <span className="text-[16px] font-bold text-white">Same AIGENTIC Flows Core</span>
          </div>

          <div className="my-4 h-8 w-px bg-neutral-300" />

          <span className="text-[12px] font-semibold uppercase tracking-wider text-neutral-400">
            Different workflows
          </span>
        </div>

        <div className="mx-auto mt-12 grid max-w-[900px] grid-cols-4 gap-4 sm:grid-cols-8">
          {MODULES.map((module) => (
            <div key={module.label} className="flex flex-col items-center gap-2 text-center">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-100 bg-white shadow-[0_4px_16px_rgba(17,17,17,0.05)]">
                <module.icon size={18} className="text-brand-red" />
              </div>
              <span className="text-[11px] font-medium text-neutral-600">{module.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
