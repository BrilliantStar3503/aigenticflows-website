/**
 * Centralized analytics abstraction.
 *
 * No providers are connected yet. Every function below is a safe no-op
 * until the corresponding NEXT_PUBLIC_* environment variable is set and
 * the matching script is enabled in components/shared/analytics-scripts.tsx.
 */

export const analyticsConfig = {
  ga4MeasurementId: process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID,
  clarityProjectId: process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID,
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID,
  linkedInPartnerId: process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID,
  googleSiteVerification: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
};

export function isAnalyticsEnabled(): boolean {
  return Boolean(
    analyticsConfig.ga4MeasurementId ||
      analyticsConfig.clarityProjectId ||
      analyticsConfig.metaPixelId ||
      analyticsConfig.linkedInPartnerId
  );
}

type EventParams = Record<string, string | number | boolean | undefined>;

/** Fires a pageview across every enabled provider. No-op until providers are wired. */
export function trackPageView(url: string): void {
  if (typeof window === "undefined") return;

  if (analyticsConfig.ga4MeasurementId && typeof window.gtag === "function") {
    window.gtag("config", analyticsConfig.ga4MeasurementId, { page_path: url });
  }

  // TODO: Meta Pixel — window.fbq?.("track", "PageView")
  // TODO: LinkedIn Insight Tag — window.lintrk?.("track")
  // Clarity and Google Search Console do not require manual pageview calls.
}

/** Fires a custom event across every enabled provider. No-op until providers are wired. */
export function trackEvent(name: string, params?: EventParams): void {
  if (typeof window === "undefined") return;

  if (analyticsConfig.ga4MeasurementId && typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }

  // TODO: Meta Pixel — window.fbq?.("trackCustom", name, params)
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}
