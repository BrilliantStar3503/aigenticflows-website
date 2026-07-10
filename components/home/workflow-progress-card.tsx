import { Check } from "lucide-react";

const STEPS = [
  { label: "Lead In", done: true },
  { label: "Auto-assign", done: true },
  { label: "Assign", done: true },
  { label: "Nurture", done: true },
  { label: "Convert", done: false },
];

export function WorkflowProgressCard() {
  return (
    <div className="rounded-xl border border-neutral-100 bg-white p-[18px]">
      <span className="text-[11px] font-semibold text-neutral-500">Workflow Progress</span>
      <div className="mt-4 flex items-center">
        {STEPS.map((step, index) => (
          <div key={step.label} className="flex flex-1 flex-col items-center last:flex-none">
            <div className="flex w-full items-center">
              <div
                className={
                  step.done
                    ? "flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-red"
                    : "flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 border-neutral-200 bg-white"
                }
              >
                {step.done && <Check size={12} className="text-white" strokeWidth={3} />}
              </div>
              {index < STEPS.length - 1 && (
                <div className={step.done ? "h-0.5 flex-1 bg-brand-red" : "h-0.5 flex-1 bg-neutral-200"} />
              )}
            </div>
            <span className="mt-1.5 text-[9px] text-neutral-500">{step.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
