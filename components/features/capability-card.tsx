import type { LucideIcon } from "lucide-react";

interface CapabilityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function CapabilityCard({ icon: Icon, title, description }: CapabilityCardProps) {
  return (
    <div className="group flex flex-col gap-3.5 rounded-2xl border border-neutral-100 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-neutral-200 hover:shadow-[0_24px_48px_-8px_rgba(17,17,17,0.10)]">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-red transition-transform duration-200 group-hover:scale-105">
        <Icon size={16} className="text-white" strokeWidth={2} />
      </div>
      <div>
        <h3 className="text-[13.5px] font-bold text-neutral-900">{title}</h3>
        <p className="mt-1.5 text-[12px] leading-relaxed text-neutral-600">{description}</p>
      </div>
    </div>
  );
}
