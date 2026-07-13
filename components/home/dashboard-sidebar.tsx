import {
  BarChart3,
  Calendar,
  ChevronDown,
  CheckSquare,
  FileText,
  LayoutDashboard,
  Settings,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

const SIDEBAR_ITEMS = [
  { label: "Home", icon: LayoutDashboard, active: true },
  { label: "CRM", icon: Users, active: false },
  { label: "Automation", icon: Zap, active: false },
  { label: "Analytics", icon: BarChart3, active: false },
  { label: "Tasks", icon: CheckSquare, active: false, badge: "3" },
  { label: "Calendar", icon: Calendar, active: false },
  { label: "Reports", icon: FileText, active: false },
  { label: "Settings", icon: Settings, active: false },
];

export function DashboardSidebar() {
  return (
    <div className="flex w-[168px] flex-shrink-0 flex-col justify-between border-r border-neutral-100 bg-brand-sidebar p-3">
      <div className="flex flex-col gap-0.5">
        {SIDEBAR_ITEMS.map((item) => (
          <div
            key={item.label}
            className={
              item.active
                ? "flex items-center gap-2.5 rounded-lg bg-brand-red px-3 py-2"
                : "flex items-center gap-2.5 rounded-lg px-3 py-2 hover:bg-white"
            }
          >
            <item.icon
              size={15}
              className={item.active ? "flex-shrink-0 text-white" : "flex-shrink-0 text-neutral-500"}
            />
            <span
              className={
                item.active
                  ? "text-[11.5px] font-semibold text-white"
                  : "text-[11.5px] text-neutral-600"
              }
            >
              {item.label}
            </span>
            {item.badge && (
              <span className="ml-auto flex h-4 min-w-[16px] items-center justify-center rounded-full bg-brand-red px-1 text-[8.5px] font-bold text-white">
                {item.badge}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 rounded-lg border border-neutral-100 bg-white px-2.5 py-2">
        <Sparkles size={13} className="flex-shrink-0 text-brand-red" />
        <div className="min-w-0">
          <div className="truncate text-[10px] font-semibold text-neutral-800">
            Meridian Advisory
          </div>
          <div className="text-[9px] text-neutral-400">Agency</div>
        </div>
        <ChevronDown size={12} className="ml-auto flex-shrink-0 text-neutral-400" />
      </div>
    </div>
  );
}
