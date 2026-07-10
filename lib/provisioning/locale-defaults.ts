interface LocaleDefaults {
  timeZone: string;
  currency: string;
  locale: string;
}

const COUNTRY_DEFAULTS: Record<string, LocaleDefaults> = {
  Philippines: { timeZone: "Asia/Manila", currency: "PHP", locale: "en-PH" },
  "United States": { timeZone: "America/New_York", currency: "USD", locale: "en-US" },
  Singapore: { timeZone: "Asia/Singapore", currency: "SGD", locale: "en-SG" },
  "United Kingdom": { timeZone: "Europe/London", currency: "GBP", locale: "en-GB" },
  Australia: { timeZone: "Australia/Sydney", currency: "AUD", locale: "en-AU" },
};

const FALLBACK_DEFAULTS: LocaleDefaults = { timeZone: "UTC", currency: "USD", locale: "en-US" };

export function getLocaleDefaults(country: string): LocaleDefaults {
  return COUNTRY_DEFAULTS[country] ?? FALLBACK_DEFAULTS;
}
