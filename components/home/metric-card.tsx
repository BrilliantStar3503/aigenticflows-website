interface MetricCardProps {
  label: string;
  value: string;
  trend: string;
  sublabel: string;
}

export function MetricCard({ label, value, trend, sublabel }: MetricCardProps) {
  return (
    <div className="rounded-xl border border-neutral-100 bg-white p-[18px]">
      <div className="text-[10px] font-medium text-neutral-400">{label}</div>
      <div className="mt-2 flex items-baseline gap-1.5">
        <span className="text-[17px] font-bold text-neutral-900">{value}</span>
        <span className="flex items-center text-[10px] font-semibold text-emerald-500">{trend}</span>
      </div>
      <div className="mt-1.5 text-[9px] text-neutral-400">{sublabel}</div>
    </div>
  );
}
