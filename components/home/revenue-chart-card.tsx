import { ChevronDown } from "lucide-react";

const CHART_POINTS = [18, 26, 22, 34, 30, 40, 36, 48, 44, 56, 52, 62];
const CHART_WIDTH = 320;
const CHART_HEIGHT = 68;
const MONTH_LABELS = ["May 1", "May 8", "May 15", "May 22", "May 29"];

function buildLinePath() {
  const max = Math.max(...CHART_POINTS);
  const step = CHART_WIDTH / (CHART_POINTS.length - 1);
  return CHART_POINTS.map((point, index) => {
    const x = index * step;
    const y = CHART_HEIGHT - (point / max) * CHART_HEIGHT;
    return `${index === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
}

export function RevenueChartCard() {
  const linePath = buildLinePath();
  const areaPath = `${linePath} L${CHART_WIDTH},${CHART_HEIGHT} L0,${CHART_HEIGHT} Z`;

  return (
    <div className="rounded-xl border border-neutral-100 bg-white p-[18px]">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold text-neutral-500">Revenue Overview</span>
        <span className="flex items-center gap-1 text-[10px] font-medium text-neutral-400">
          This Month
          <ChevronDown size={12} />
        </span>
      </div>

      <div className="mt-1.5 flex items-baseline gap-2">
        <span className="text-xl font-bold text-neutral-900">₱12.45M</span>
        <span className="text-[10px] font-semibold text-emerald-500">↑ 24%</span>
        <span className="text-[9px] text-neutral-400">vs last month</span>
      </div>

      <svg viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`} className="mt-3 w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="revenueArea" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E60012" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#E60012" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0.33, 0.66].map((fraction) => (
          <line
            key={fraction}
            x1="0"
            x2={CHART_WIDTH}
            y1={CHART_HEIGHT * fraction}
            y2={CHART_HEIGHT * fraction}
            stroke="#F0F0F0"
            strokeWidth="1"
          />
        ))}
        <path d={areaPath} fill="url(#revenueArea)" />
        <path d={linePath} fill="none" stroke="#E60012" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        {CHART_POINTS.map((point, index) => {
          const max = Math.max(...CHART_POINTS);
          const step = CHART_WIDTH / (CHART_POINTS.length - 1);
          const x = index * step;
          const y = CHART_HEIGHT - (point / max) * CHART_HEIGHT;
          return <circle key={index} cx={x} cy={y} r="2.5" fill="#E60012" />;
        })}
      </svg>

      <div className="mt-1.5 flex justify-between text-[8px] text-neutral-400">
        {MONTH_LABELS.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
    </div>
  );
}
