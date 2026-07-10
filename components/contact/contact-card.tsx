import type { LucideIcon } from "lucide-react";

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  onCtaClick?: () => void;
}

export function ContactCard({ icon: Icon, title, description, ctaLabel, ctaHref, onCtaClick }: ContactCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-neutral-100 bg-white p-8 shadow-[0_4px_24px_rgba(17,17,17,0.03)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_24px_48px_-8px_rgba(17,17,17,0.10)]">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-red">
        <Icon size={20} className="text-white" strokeWidth={2} />
      </div>
      <div className="flex-1">
        <h3 className="text-[16px] font-bold text-neutral-900">{title}</h3>
        <p className="mt-1.5 text-[13.5px] leading-relaxed text-neutral-600">{description}</p>
      </div>
      {onCtaClick ? (
        <button
          type="button"
          onClick={onCtaClick}
          className="mt-1 text-left text-[13px] font-semibold text-brand-red hover:underline"
        >
          {ctaLabel} →
        </button>
      ) : (
        <a href={ctaHref} className="mt-1 text-[13px] font-semibold text-brand-red hover:underline">
          {ctaLabel} →
        </a>
      )}
    </div>
  );
}
