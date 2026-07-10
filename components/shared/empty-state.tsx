import type { LucideIcon } from "lucide-react";
import { Clock, Inbox, SearchX } from "lucide-react";

interface EmptyStateProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState({ icon: Icon = Inbox, title, description, actionLabel, onAction }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-neutral-100 bg-white px-8 py-14 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-neutral-50">
        <Icon size={26} className="text-neutral-300" strokeWidth={1.75} />
      </div>
      <h3 className="mt-5 text-[16px] font-bold text-neutral-900">{title}</h3>
      <p className="mt-1.5 max-w-[320px] text-[13.5px] leading-relaxed text-neutral-500">{description}</p>
      {actionLabel && onAction && (
        <button
          type="button"
          onClick={onAction}
          className="mt-6 rounded-xl bg-brand-gold px-5 py-2.5 text-sm font-semibold text-neutral-900 shadow-[0_8px_20px_rgba(245,194,72,0.35)] transition-all hover:bg-brand-gold-hover hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/40 focus-visible:ring-offset-2"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}

export function NoResourcesEmptyState() {
  return (
    <EmptyState
      icon={Inbox}
      title="No resources yet"
      description="This category doesn't have any published resources yet. Check back soon."
    />
  );
}

export function NoResultsEmptyState() {
  return (
    <EmptyState
      icon={SearchX}
      title="No results found"
      description="Try a different search term, or browse resources by category instead."
    />
  );
}

export function ComingSoonEmptyState() {
  return (
    <EmptyState
      icon={Clock}
      title="Coming soon"
      description="We're still building this. Check back soon for updates."
    />
  );
}
