import { ArrowRight, CalendarClock, CheckCircle2, Sparkles, UserPlus } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ActivityCardProps {
  icon: LucideIcon;
  title: string;
  detail: string;
  time: string;
}

function ActivityCard({ icon: Icon, title, detail, time }: ActivityCardProps) {
  return (
    <div className="flex items-start gap-2 rounded-xl border border-neutral-100 bg-white p-3">
      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-pink">
        <Icon size={12} className="text-brand-red" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <span className="truncate text-[10.5px] font-semibold text-neutral-900">{title}</span>
          <span className="flex-shrink-0 text-[9px] text-neutral-400">{time}</span>
        </div>
        <div className="mt-0.5 text-[9.5px] leading-snug text-neutral-500">{detail}</div>
      </div>
    </div>
  );
}

const ACTIVITY_ITEMS: ActivityCardProps[] = [
  {
    icon: Sparkles,
    title: "AI Suggestion",
    detail: "3 leads are ready for follow-up based on engagement signals.",
    time: "2m ago",
  },
  {
    icon: CheckCircle2,
    title: "Workflow Completed",
    detail: "Client onboarding workflow completed successfully.",
    time: "2m ago",
  },
  {
    icon: CalendarClock,
    title: "Meeting in 15 minutes",
    detail: "Discovery call with John D. Today at 2:00 PM.",
    time: "5m ago",
  },
  {
    icon: UserPlus,
    title: "New Lead Captured",
    detail: "From Facebook Ads",
    time: "Just now",
  },
];

export function ActivityFeed() {
  return (
    <div className="flex flex-col gap-2">
      {ACTIVITY_ITEMS.map((item) => (
        <ActivityCard key={item.title} {...item} />
      ))}
      <div className="flex items-center gap-1 px-1 text-[10px] font-semibold text-brand-red">
        View all activity
        <ArrowRight size={10} />
      </div>
    </div>
  );
}
