import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  tone: "dark" | "red";
}

export function FeatureCard({ icon: Icon, title, description, tone }: FeatureCardProps) {
  return (
    <div className="flex flex-col gap-2.5 rounded-2xl border border-neutral-100 bg-white px-6 pb-5 pt-6 shadow-[0_4px_20px_rgba(17,17,17,0.04)]">
      <div
        className={
          tone === "dark"
            ? "flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-900"
            : "flex h-9 w-9 items-center justify-center rounded-xl bg-brand-red"
        }
      >
        <Icon size={17} className="text-white" strokeWidth={2} />
      </div>
      <div>
        <h3 className="text-base font-bold text-neutral-900">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-neutral-500">{description}</p>
      </div>
    </div>
  );
}
