const SEGMENTS = [
  { label: "Facebook Ads", value: 48, color: "#E60012" },
  { label: "Referral", value: 22, color: "#C8102E" },
  { label: "Website", value: 18, color: "#F5C248" },
  { label: "Others", value: 12, color: "#D1D5DB" },
];

const RADIUS = 30;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function LeadSourcesCard() {
  let offset = 0;

  return (
    <div className="rounded-xl border border-neutral-100 bg-white p-[18px]">
      <span className="text-[11px] font-semibold text-neutral-500">Lead Sources</span>
      <div className="mt-3 flex items-center gap-4">
        <svg width="76" height="76" viewBox="0 0 76 76" className="-rotate-90 flex-shrink-0">
          <circle cx="38" cy="38" r={RADIUS} fill="none" stroke="#F5F5F5" strokeWidth="10" />
          {SEGMENTS.map((segment) => {
            const dash = (segment.value / 100) * CIRCUMFERENCE;
            const circle = (
              <circle
                key={segment.label}
                cx="38"
                cy="38"
                r={RADIUS}
                fill="none"
                stroke={segment.color}
                strokeWidth="10"
                strokeDasharray={`${dash} ${CIRCUMFERENCE - dash}`}
                strokeDashoffset={-offset}
              />
            );
            offset += dash;
            return circle;
          })}
        </svg>
        <div className="flex-1 space-y-1">
          {SEGMENTS.map((segment) => (
            <div key={segment.label} className="flex items-center gap-1.5 text-[9.5px]">
              <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: segment.color }} />
              <span className="flex-1 truncate text-neutral-500">{segment.label}</span>
              <span className="font-semibold text-neutral-700">{segment.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
