import { ArrowRight, Bolt, GitBranch, Zap } from "lucide-react";

const NODES = [
  { label: "Trigger: New lead", icon: Zap, tone: "bg-brand-red" },
  { label: "Condition: Score > 70", icon: GitBranch, tone: "bg-neutral-900" },
  { label: "Action: Assign + notify", icon: Bolt, tone: "bg-brand-red" },
];

export function WorkflowBuilderVisual() {
  return (
    <div className="flex flex-col items-center gap-2">
      {NODES.map((node, index) => (
        <div key={node.label} className="flex w-full flex-col items-center">
          <div className="flex w-full items-center gap-3 rounded-xl border border-neutral-100 bg-neutral-50 px-4 py-3">
            <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg ${node.tone}`}>
              <node.icon size={14} className="text-white" />
            </div>
            <span className="text-[12.5px] font-medium text-neutral-800">{node.label}</span>
          </div>
          {index < NODES.length - 1 && <ArrowRight size={14} className="my-1.5 rotate-90 text-neutral-300" />}
        </div>
      ))}
    </div>
  );
}
