const STAGES = [
  { label: "New", count: 8, value: "₱360,000" },
  { label: "Qualified", count: 12, value: "₱1,250,000" },
  { label: "Proposal", count: 5, value: "₱980,000" },
  { label: "Won", count: 3, value: "₱2,240,000" },
];

export function SalesPipelineCard() {
  return (
    <div className="rounded-xl border border-neutral-100 bg-white p-[18px]">
      <span className="text-[11px] font-semibold text-neutral-500">Sales Pipeline</span>
      <div className="mt-3 grid grid-cols-4 gap-2">
        {STAGES.map((stage) => (
          <div key={stage.label}>
            <div className="text-[9px] text-neutral-400">{stage.label}</div>
            <div className="mt-0.5 text-[15px] font-bold text-neutral-900">{stage.count}</div>
            <div className="mt-0.5 text-[8px] text-neutral-400">{stage.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
