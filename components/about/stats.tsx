const PRINCIPLES = [
  { value: "One codebase", label: "Every workspace runs the same Core Platform" },
  { value: "Tenant-isolated", label: "Enforced at the database layer, not just the app" },
  { value: "Industry-configurable", label: "Solution Packs add depth without forking the product" },
  { value: "Built, not promised", label: "What's on this site is what's live in production" },
];

export function Stats() {
  return (
    <section className="mx-auto max-w-[1600px] px-4 sm:px-6 py-20 lg:px-14">
      <div className="mx-auto max-w-[560px] text-center">
        <h2 className="text-[32px] font-bold tracking-tight text-neutral-900">
          How AIGENTIC Flows is built
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
        {PRINCIPLES.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-[22px] font-bold tracking-tight text-brand-red lg:text-[26px]">
              {stat.value}
            </div>
            <div className="mt-2 text-[13px] leading-snug text-neutral-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
