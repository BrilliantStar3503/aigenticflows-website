const STAGES = [
  { label: "Applied", candidates: ["J. Reyes", "A. Bautista"] },
  { label: "Interview", candidates: ["L. Garcia"] },
  { label: "Offer", candidates: ["P. Manalo"] },
  { label: "Hired", candidates: ["D. Torres"] },
];

export function RecruitmentVisual() {
  return (
    <div className="grid grid-cols-4 gap-2.5">
      {STAGES.map((stage) => (
        <div key={stage.label}>
          <div className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-neutral-400">
            {stage.label}
          </div>
          <div className="flex flex-col gap-1.5">
            {stage.candidates.map((candidate) => (
              <div
                key={candidate}
                className="rounded-lg border border-neutral-100 bg-neutral-50 px-2 py-2 text-[10.5px] text-neutral-700"
              >
                {candidate}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
