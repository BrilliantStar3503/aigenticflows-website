const LOGOS = ["Pru Life UK", "Agency Partner", "Advisory Group", "Growth Co."];

export function TrustedLogos() {
  return (
    <div className="mt-10">
      <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
        Trusted by service businesses
      </span>
      <div className="mt-3 flex flex-wrap items-center gap-x-10 gap-y-2">
        {LOGOS.map((logo) => (
          <span key={logo} className="text-sm font-semibold text-neutral-400">
            {logo}
          </span>
        ))}
        <span className="text-sm text-neutral-400">and more…</span>
      </div>
    </div>
  );
}
