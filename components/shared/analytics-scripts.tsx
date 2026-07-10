import Script from "next/script";
import { analyticsConfig } from "@/lib/analytics";

/**
 * Renders nothing until the matching NEXT_PUBLIC_* env var is set.
 * Safe to mount site-wide ahead of backend/provider integration.
 */
export function AnalyticsScripts() {
  const { ga4MeasurementId, clarityProjectId, metaPixelId, linkedInPartnerId } = analyticsConfig;

  return (
    <>
      {ga4MeasurementId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga4MeasurementId}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${ga4MeasurementId}');`}
          </Script>
        </>
      )}

      {clarityProjectId && (
        <Script id="ms-clarity-init" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarityProjectId}");`}
        </Script>
      )}

      {metaPixelId && (
        <Script id="meta-pixel-init" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
              n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
              document,'script','https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${metaPixelId}');
              fbq('track', 'PageView');`}
        </Script>
      )}

      {linkedInPartnerId && (
        <Script id="linkedin-insight-init" strategy="afterInteractive">
          {`_linkedin_partner_id = "${linkedInPartnerId}";
              window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
              window._linkedin_data_partner_ids.push(_linkedin_partner_id);`}
        </Script>
      )}
    </>
  );
}
