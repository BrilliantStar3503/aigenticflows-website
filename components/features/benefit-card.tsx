import type { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  tone: "dark" | "red";
}

export function BenefitCard({ icon: Icon, title, description, tone }: BenefitCardProps) {
  return (
    <div className="group flex flex-col gap-4 rounded-2xl border border-neutral-100 bg-white p-7 shadow-[0_4px_24px_rgba(17,17,17,0.03)] transition-all duration-200 hover:-translate-y-1 hover:border-neutral-200 hover:shadow-[0_24px_48px_-8px_rgba(17,17,17,0.10)]">
      <div
        className={
          tone === "dark"
            ? "flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 transition-transform duration-200 group-hover:scale-105"
            : "flex h-10 w-10 items-center justify-center rounded-xl bg-brand-red transition-transform duration-200 group-hover:scale-105"
        }
      >
        <Icon size={18} className="text-white" strokeWidth={2} />
      </div>
      <div>
        <h3 className="text-base font-bold text-neutral-900">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">{description}</p>
      </div>
    </div>
  );
}
