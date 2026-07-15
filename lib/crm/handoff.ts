/**
 * The AIGENTIC Flows public site and the AIGENTIC Flows CRM are separate apps
 * on separate domains sharing one Supabase project. Cookies can't cross
 * domains, so a freshly authenticated session here is handed off by putting
 * its tokens in the URL fragment of a redirect to the CRM's own
 * session-adoption page — the fragment is never sent to (or logged by)
 * either server, only read by client-side JS once it arrives.
 */
const CRM_URL = process.env.NEXT_PUBLIC_CRM_URL || "https://app.aigenticflows.com";

export function buildCrmHandoffUrl(params: {
  accessToken: string;
  refreshToken: string;
  agencySlug: string;
}): string {
  const next = encodeURIComponent(`/${params.agencySlug}/dashboard`);
  const fragment = new URLSearchParams({
    access_token: params.accessToken,
    refresh_token: params.refreshToken,
  }).toString();

  return `${CRM_URL}/auth/handoff?next=${next}#${fragment}`;
}
