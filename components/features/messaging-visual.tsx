import { Mail, MessageCircle, Smartphone } from "lucide-react";

const MESSAGES = [
  { channel: "Email", icon: Mail, sender: "M. Santos", preview: "Thanks for the quick response!" },
  { channel: "SMS", icon: Smartphone, sender: "R. Cruz", preview: "Can we move the call to 3pm?" },
  { channel: "Messenger", icon: MessageCircle, sender: "A. Lim", preview: "Sounds good, see you then." },
];

export function MessagingVisual() {
  return (
    <div className="flex flex-col gap-2.5">
      {MESSAGES.map((message) => (
        <div
          key={message.sender}
          className="flex items-center gap-3 rounded-lg border border-neutral-100 bg-neutral-50 px-3.5 py-3"
        >
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-neutral-900">
            <message.icon size={14} className="text-white" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <span className="text-[12px] font-semibold text-neutral-900">{message.sender}</span>
              <span className="text-[9.5px] text-neutral-400">via {message.channel}</span>
            </div>
            <div className="truncate text-[11px] text-neutral-500">{message.preview}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
