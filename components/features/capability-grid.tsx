import {
  BarChart3,
  Calendar,
  CalendarClock,
  CheckSquare,
  FileText,
  FolderOpen,
  Megaphone,
  MessageCircle,
  Sparkles,
  UserPlus,
  Users,
  Zap,
} from "lucide-react";
import { CapabilityCard } from "@/components/features/capability-card";

const CAPABILITIES = [
  { icon: Users, title: "CRM", description: "Contacts, Companies, and Deals — track every lead from first contact to close." },
  { icon: Sparkles, title: "Companies & Pipeline", description: "A configurable sales pipeline with board and table views." },
  { icon: Zap, title: "Workflow Automation", description: "Automated sequences for follow-ups and nurturing." },
  { icon: BarChart3, title: "Analytics", description: "Real-time performance across your whole organization." },
  { icon: UserPlus, title: "Recruitment", description: "A structured candidate pipeline — included with the Insurance Solution Pack." },
  { icon: Megaphone, title: "Marketing", description: "Automated campaigns and nurture sequences built in." },
  { icon: Calendar, title: "Calendar", description: "One shared calendar across your entire team." },
  { icon: CheckSquare, title: "Tasks", description: "Assign, track, and complete work without the noise." },
  { icon: CalendarClock, title: "Appointments", description: "Booking and reminders that keep your day on track." },
  { icon: MessageCircle, title: "Messaging", description: "Email campaigns with bounce suppression and one-click unsubscribe." },
  { icon: FileText, title: "Reports", description: "Shareable reports generated automatically." },
  { icon: FolderOpen, title: "Facebook Lead Capture", description: "Leads from your connected Facebook Page arrive in real time." },
];

export function CapabilityGrid() {
  return (
    <section className="mx-auto max-w-[1600px] px-4 sm:px-6 py-20 lg:px-14">
      <div className="mx-auto max-w-[560px] text-center">
        <h2 className="text-[32px] font-bold tracking-tight text-neutral-900">
          The platform, at a glance
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">
          Every capability your business needs, built into one system.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {CAPABILITIES.map((capability) => (
          <CapabilityCard key={capability.title} {...capability} />
        ))}
      </div>
    </section>
  );
}
