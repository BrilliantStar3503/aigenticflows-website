import { ArrowRight, Bell } from "lucide-react";

const UPDATES = [
  "3 tasks are due today",
  "2 candidates are ready for the next recruitment stage",
  "A new lead came in from Facebook Ads",
];

export function AIExecutiveBriefing() {
  return (
    <div className="rounded-xl border border-neutral-100 bg-brand-pink p-4">
      <div className="mb-2.5 flex items-center gap-2">
        <Bell size={14} className="text-brand-red" />
        <span className="text-[11.5px] font-bold text-neutral-900">Today's updates</span>
      </div>
      <div className="space-y-1.5 text-[10.5px] leading-relaxed text-neutral-600">
        {UPDATES.map((item) => (
          <div key={item} className="flex items-start gap-1.5">
            <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-brand-red/60" />
            <span>{item}</span>
          </div>
        ))}
      </div>
      <div className="mt-2.5 flex items-center gap-1 text-[10px] font-semibold text-brand-red">
        View all notifications
        <ArrowRight size={10} />
      </div>
    </div>
  );
}
