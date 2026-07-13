import type { LucideIcon } from "lucide-react";

export interface Industry {
  icon: LucideIcon;
  name: string;
  description: string;
  primaryWorkflow: string;
  exampleKpi: string;
  status: "Live today" | "On the roadmap";
  modules: string[];
}

export function IndustryCard({ icon: Icon, name, description, primaryWorkflow, exampleKpi, status, modules }: Industry) {
  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-neutral-100 bg-white p-6 shadow-[0_4px_20px_rgba(17,17,17,0.04)] transition-shadow hover:shadow-[0_12px_32px_rgba(17,17,17,0.08)]">
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-red">
          <Icon size={18} className="text-white" strokeWidth={2} />
        </div>
        <span
          className={
            status === "Live today"
              ? "rounded-full bg-brand-pink px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-red"
              : "rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-neutral-500"
          }
        >
          {status}
        </span>
      </div>

      <div>
        <h3 className="text-[15px] font-bold text-neutral-900">{name}</h3>
        <p className="mt-1.5 text-[13px] leading-relaxed text-neutral-600">{description}</p>
      </div>

      <div className="space-y-3 border-t border-neutral-100 pt-4">
        <div>
          <span className="text-[9.5px] font-medium uppercase tracking-wider text-neutral-400">
            Workflow
          </span>
          <p className="mt-0.5 text-[12px] text-neutral-700">{primaryWorkflow}</p>
        </div>
        <div>
          <span className="text-[9.5px] font-medium uppercase tracking-wider text-neutral-400">
            Example KPI
          </span>
          <p className="mt-0.5 text-[12px] text-neutral-700">{exampleKpi}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {modules.map((module) => (
          <span
            key={module}
            className="rounded-md bg-neutral-50 px-2 py-1 text-[10px] font-medium text-neutral-500"
          >
            {module}
          </span>
        ))}
      </div>
    </div>
  );
}
