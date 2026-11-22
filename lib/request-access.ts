// CHG-2A-web (CHG-2 Option D — operator-assisted onboarding only).
// Public self-serve trial workspace creation is disabled in the database (CHG-2B, 2026-11-22).
// New workspaces are created by the AIGENTIC Flows team, so every public entry point opens an
// email to the team instead. Nothing is sent or stored by the website itself: the visitor's own
// email app sends the message.

export const REQUEST_ACCESS_EMAIL = "inquiry@aigenticflows.com";

export const REQUEST_ACCESS_SUBJECT = "Request access — AIGENTIC Flows";

const DEFAULT_BODY = [
  "Hi AIGENTIC Flows team,",
  "",
  "I'd like to request access to AIGENTIC Flows.",
  "",
  "Name:",
  "Company:",
  "Role:",
  "Team size:",
  "What I'd like to use it for:",
  "",
  "Thank you.",
].join("\n");

export function buildRequestAccessMailto(options: { subject?: string; body?: string } = {}): string {
  const subject = encodeURIComponent(options.subject ?? REQUEST_ACCESS_SUBJECT);
  const body = encodeURIComponent(options.body ?? DEFAULT_BODY);
  return `mailto:${REQUEST_ACCESS_EMAIL}?subject=${subject}&body=${body}`;
}

/** Opens the visitor's email app with a pre-filled access request. */
export function openRequestAccess(): void {
  if (typeof window === "undefined") return;
  window.location.href = buildRequestAccessMailto();
}

/** "Talk to Sales" uses the same approved inbox, with a sales subject and template. */
export const TALK_TO_SALES_MAILTO = buildRequestAccessMailto({
  subject: "Talk to Sales — AIGENTIC Flows",
  body: [
    "Hi AIGENTIC Flows team,",
    "",
    "I'd like to talk to your sales team.",
    "",
    "Name:",
    "Company:",
    "Role:",
    "Team size:",
    "Best time to reach me:",
    "",
    "Thank you.",
  ].join("\n"),
});

export function openTalkToSales(): void {
  if (typeof window === "undefined") return;
  window.location.href = TALK_TO_SALES_MAILTO;
}

/** "Book a Demo" uses the same approved inbox; the team replies to arrange a time. */
export const BOOK_A_DEMO_MAILTO = buildRequestAccessMailto({
  subject: "Book a demo — AIGENTIC Flows",
  body: [
    "Hi AIGENTIC Flows team,",
    "",
    "I'd like to book a demo of AIGENTIC Flows.",
    "",
    "Name:",
    "Company:",
    "Role:",
    "Team size:",
    "Preferred days and times (with time zone):",
    "",
    "Thank you.",
  ].join("\n"),
});

export function openBookADemo(): void {
  if (typeof window === "undefined") return;
  window.location.href = BOOK_A_DEMO_MAILTO;
}
