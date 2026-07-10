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
  { icon: Users, title: "CRM", description: "Track every lead and client from first contact to close." },
  { icon: Sparkles, title: "AI Assistant", description: "Drafts, summarizes, and flags what needs your attention." },
  { icon: Zap, title: "Workflow Automation", description: "Build automations without writing a line of code." },
  { icon: BarChart3, title: "Analytics", description: "Real-time performance across your whole organization." },
  { icon: UserPlus, title: "Recruitment", description: "Run a structured pipeline for growing your team." },
  { icon: Megaphone, title: "Marketing", description: "Automated campaigns and nurture sequences built in." },
  { icon: Calendar, title: "Calendar", description: "One shared calendar across your entire team." },
  { icon: CheckSquare, title: "Tasks", description: "Assign, track, and complete work without the noise." },
  { icon: CalendarClock, title: "Appointments", description: "Booking and reminders that keep your day on track." },
  { icon: MessageCircle, title: "Messaging", description: "Email, SMS, and chat in a single inbox." },
  { icon: FileText, title: "Reports", description: "Shareable reports generated automatically." },
  { icon: FolderOpen, title: "Document Management", description: "Store and organize every client document securely." },
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
