import { MessageCircle, Repeat2, TrendingUp, UserPlus, Zap, Handshake } from "lucide-react";

const JOURNEY_STEPS = [
  { label: "Capture Leads", icon: UserPlus },
  { label: "Automate", icon: Zap },
  { label: "Engage", icon: MessageCircle },
  { label: "Convert", icon: Handshake },
  { label: "Retain", icon: Repeat2 },
  { label: "Grow", icon: TrendingUp },
];

export function JourneyTimeline() {
  return (
    <section className="mx-auto max-w-[1600px] px-4 sm:px-6 py-20 lg:px-14">
      <div className="mx-auto max-w-[560px] text-center">
        <h2 className="text-[32px] font-bold tracking-tight text-neutral-900">
          The full customer journey, automated
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">
          AIMP follows every relationship from first contact to long-term growth.
        </p>
      </div>

      <div className="mt-12 flex flex-col items-center justify-center gap-3 lg:flex-row lg:gap-0">
        {JOURNEY_STEPS.map((step, index) => (
          <div key={step.label} className="flex items-center">
            <div className="flex flex-col items-center gap-2.5 rounded-2xl border border-neutral-100 bg-white px-5 py-5 shadow-[0_4px_20px_rgba(17,17,17,0.04)]">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-red">
                <step.icon size={18} className="text-white" />
              </div>
              <span className="text-[12.5px] font-bold text-neutral-900">{step.label}</span>
            </div>
            {index < JOURNEY_STEPS.length - 1 && (
              <div className="hidden items-center lg:flex" style={{ width: 28 }}>
                <div className="h-px flex-1 bg-neutral-200" />
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-300" />
                <div className="h-px flex-1 bg-neutral-200" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
