import type { LucideIcon } from "lucide-react";
import { Check } from "lucide-react";

interface WorkspaceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  selected: boolean;
  onClick: () => void;
}

export function WorkspaceCard({ icon: Icon, title, description, selected, onClick }: WorkspaceCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`relative flex flex-col items-start gap-2.5 rounded-xl border p-4 text-left transition-all ${
        selected
          ? "border-brand-red bg-brand-pink"
          : "border-neutral-200 bg-white hover:border-neutral-300"
      }`}
    >
      {selected && (
        <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-brand-red">
          <Check size={11} className="text-white" strokeWidth={3} />
        </span>
      )}
      <div
        className={`flex h-9 w-9 items-center justify-center rounded-lg ${
          selected ? "bg-brand-red" : "bg-neutral-900"
        }`}
      >
        <Icon size={16} className="text-white" strokeWidth={2} />
      </div>
      <div>
        <div className="text-[13.5px] font-bold text-neutral-900">{title}</div>
        <div className="mt-0.5 text-[11.5px] leading-snug text-neutral-500">{description}</div>
      </div>
    </button>
  );
}
