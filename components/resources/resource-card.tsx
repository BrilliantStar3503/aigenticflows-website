import type { LucideIcon } from "lucide-react";
import { ArrowRight, Clock } from "lucide-react";

interface ResourceCardProps {
  icon: LucideIcon;
  category: string;
  title: string;
  summary: string;
  readingTime: string;
}

export function ResourceCard({ icon: Icon, category, title, summary, readingTime }: ResourceCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-[0_4px_24px_rgba(17,17,17,0.03)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_24px_48px_-8px_rgba(17,17,17,0.10)]">
      <div className="flex h-36 items-center justify-center bg-brand-pink">
        <Icon size={34} className="text-brand-red" strokeWidth={1.75} />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="text-[10.5px] font-bold uppercase tracking-wider text-brand-red">{category}</span>
        <h3 className="mt-2 text-[15px] font-bold leading-snug text-neutral-900">{title}</h3>
        <p className="mt-1.5 flex-1 text-[13px] leading-relaxed text-neutral-600">{summary}</p>
        <div className="mt-5 flex items-center justify-between border-t border-neutral-100 pt-4">
          <span className="flex items-center gap-1.5 text-[11.5px] text-neutral-400">
            <Clock size={12} />
            {readingTime}
          </span>
          <span className="flex items-center gap-1 text-[11.5px] font-semibold text-brand-red">
            Read more
            <ArrowRight size={11} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </div>
  );
}
