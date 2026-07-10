import { Check, Loader2 } from "lucide-react";

interface ProgressIndicatorProps {
  steps: string[];
  activeIndex: number;
}

export function ProgressIndicator({ steps, activeIndex }: ProgressIndicatorProps) {
  return (
    <div className="flex flex-col gap-4">
      {steps.map((step, index) => {
        const isDone = index < activeIndex;
        const isActive = index === activeIndex;

        return (
          <div key={step} className="flex items-center gap-3">
            <div
              className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full ${
                isDone ? "bg-brand-red" : isActive ? "bg-brand-pink" : "bg-neutral-100"
              }`}
            >
              {isDone && <Check size={13} className="text-white" strokeWidth={3} />}
              {isActive && <Loader2 size={13} className="animate-spin text-brand-red" />}
            </div>
            <span
              className={`text-[13px] ${
                isDone || isActive ? "font-semibold text-neutral-900" : "text-neutral-400"
              }`}
            >
              {step}
            </span>
          </div>
        );
      })}
    </div>
  );
}
