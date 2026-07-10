import { Mail } from "lucide-react";

const CAMPAIGNS = [
  { name: "Welcome sequence", sent: "1,204 sent", rate: "42% open rate" },
  { name: "Renewal reminder", sent: "382 sent", rate: "58% open rate" },
  { name: "Re-engagement drip", sent: "670 sent", rate: "31% open rate" },
];

export function MarketingVisual() {
  return (
    <div className="flex flex-col gap-2.5">
      {CAMPAIGNS.map((campaign) => (
        <div
          key={campaign.name}
          className="flex items-center gap-3 rounded-lg border border-neutral-100 bg-neutral-50 px-3.5 py-3"
        >
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-brand-red">
            <Mail size={14} className="text-white" />
          </div>
          <div className="flex-1">
            <div className="text-[12px] font-semibold text-neutral-900">{campaign.name}</div>
            <div className="text-[10.5px] text-neutral-500">{campaign.sent}</div>
          </div>
          <span className="text-[10.5px] font-semibold text-emerald-500">{campaign.rate}</span>
        </div>
      ))}
    </div>
  );
}
