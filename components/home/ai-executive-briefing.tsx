import { ArrowRight, Sparkles } from "lucide-react";

const INSIGHTS = [
  "3 leads have gone quiet this week",
  "2 team members are ready for the next recruitment stage",
  "The monthly revenue is 12% ahead of target",
];

export function AIExecutiveBriefing() {
  return (
    <div className="rounded-xl border border-neutral-100 bg-brand-pink p-4">
      <div className="mb-2.5 flex items-center gap-2">
        <Sparkles size={14} className="text-brand-red" />
        <span className="text-[11.5px] font-bold text-neutral-900">AI Executive Briefing</span>
      </div>
      <div className="space-y-1.5 text-[10.5px] leading-relaxed text-neutral-600">
        {INSIGHTS.map((item) => (
          <div key={item} className="flex items-start gap-1.5">
            <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-brand-red/60" />
            <span>{item}</span>
          </div>
        ))}
      </div>
      <div className="mt-2.5 flex items-center gap-1 text-[10px] font-semibold text-brand-red">
        View all insights
        <ArrowRight size={10} />
      </div>
    </div>
  );
}
