import { ArrowRight, Check, X } from "lucide-react";

const COMPARISONS = [
  { before: "Multiple tools", after: "One platform" },
  { before: "Manual work", after: "AI automation" },
  { before: "Disconnected data", after: "Unified intelligence" },
  { before: "Static reports", after: "Real-time insights" },
];

export function ComparisonSection() {
  return (
    <section className="bg-neutral-50 py-20">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-14">
        <div className="mx-auto max-w-[560px] text-center">
          <h2 className="text-[28px] font-bold tracking-tight text-neutral-900 sm:text-[32px]">
            A different approach to business software
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-[760px] grid-cols-1 items-center gap-x-5 gap-y-3.5 sm:grid-cols-[1fr_auto_1fr]">
          <div className="hidden pb-3 text-center text-[11px] font-semibold uppercase tracking-wider text-neutral-400 sm:block">
            Traditional business software
          </div>
          <div className="hidden sm:block" />
          <div className="hidden pb-3 text-center text-[11px] font-semibold uppercase tracking-wider text-brand-red sm:block">
            AIMP
          </div>

          {COMPARISONS.map((row) => (
            <div key={row.before} className="contents">
              <div className="flex items-center gap-2.5 rounded-xl border border-neutral-200 bg-neutral-100 px-4 py-4">
                <X size={14} className="flex-shrink-0 text-neutral-400" />
                <span className="text-[13.5px] text-neutral-500">{row.before}</span>
              </div>
              <div className="flex justify-center">
                <ArrowRight size={16} className="rotate-90 text-neutral-300 sm:rotate-0" />
              </div>
              <div className="flex items-center gap-2.5 rounded-xl border border-brand-red/25 bg-brand-pink px-4 py-4">
                <Check size={14} className="flex-shrink-0 text-brand-red" strokeWidth={3} />
                <span className="text-[13.5px] font-semibold text-neutral-900">{row.after}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
