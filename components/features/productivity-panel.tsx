import { CheckSquare, Sparkles, Square } from "lucide-react";

const AUTOMATION_ACTIVITY = [
  "Sent 3 follow-up reminders for stalled leads",
  "Flagged 2 renewals at risk this week",
  "Logged yesterday's client calls to the activity timeline",
];

const TASKS = [
  { label: "Review Q3 proposal draft", done: true },
  { label: "Approve automated follow-up sequence", done: true },
  { label: "Call M. Santos about renewal", done: false },
  { label: "Sync recruitment pipeline notes", done: false },
];

export function ProductivityPanel() {
  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-[0_36px_64px_-24px_rgba(17,17,17,0.14)]">
      <div className="flex items-center gap-2.5 border-b border-neutral-100 bg-neutral-50 px-5 py-3.5">
        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-brand-red">
          <Sparkles size={13} className="text-white" />
        </div>
        <span className="text-[13px] font-bold text-neutral-900">Workspace</span>
      </div>

      <div className="p-5">
        <div className="rounded-xl bg-brand-pink p-4">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-red">
            Automation activity today
          </span>
          <div className="mt-2.5 space-y-2">
            {AUTOMATION_ACTIVITY.map((insight) => (
              <div key={insight} className="flex items-start gap-2 text-[12px] leading-relaxed text-neutral-700">
                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-brand-red/60" />
                {insight}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2.5">
          <div className="rounded-lg border border-neutral-100 bg-white p-3">
            <div className="text-[9px] text-neutral-400">Tasks automated</div>
            <div className="mt-0.5 text-[16px] font-bold text-neutral-900">37</div>
          </div>
          <div className="rounded-lg border border-neutral-100 bg-white p-3">
            <div className="text-[9px] text-neutral-400">Hours saved</div>
            <div className="mt-0.5 text-[16px] font-bold text-neutral-900">12.4</div>
          </div>
          <div className="rounded-lg border border-neutral-100 bg-white p-3">
            <div className="text-[9px] text-neutral-400">Active workflows</div>
            <div className="mt-0.5 text-[16px] font-bold text-neutral-900">9</div>
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-neutral-100 p-4">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
            Today&apos;s tasks
          </span>
          <div className="mt-2.5 space-y-2">
            {TASKS.map((task) => (
              <div key={task.label} className="flex items-center gap-2.5">
                {task.done ? (
                  <CheckSquare size={15} className="flex-shrink-0 text-brand-red" />
                ) : (
                  <Square size={15} className="flex-shrink-0 text-neutral-300" />
                )}
                <span
                  className={
                    task.done
                      ? "text-[12px] text-neutral-400 line-through"
                      : "text-[12px] text-neutral-800"
                  }
                >
                  {task.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
