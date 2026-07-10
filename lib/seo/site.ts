export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export const SITE_NAME = "AIMP";
export const SITE_TITLE_DEFAULT = "AIMP — AI Business Operating Platform";
export const SITE_DESCRIPTION =
  "AIMP is the AI-powered business operating platform that helps service-based organizations automate operations, engage clients, and scale growth — all from one intelligent workspace.";

export const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: SITE_TITLE_DEFAULT,
};

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
