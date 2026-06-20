// Affiliate link routing.
//
// Every outbound click goes through /go/<provider> (see app/go/[provider]/route.ts)
// so clicks are easy to track and the real destination is easy to swap without
// touching any page. Put your real partner/tracking links in the env vars below
// (or edit provider.affiliateUrl in data/providers.ts).
//
//   NEXT_PUBLIC_AFF_AIRALO=https://airalo.pxf.io/xxxx
//   NEXT_PUBLIC_AFF_HOLAFLY=https://holafly.sjv.io/xxxx
//   NEXT_PUBLIC_AFF_SAILY=https://go.saily.com/xxxx
//   NEXT_PUBLIC_AFF_NOMAD=https://...
//   NEXT_PUBLIC_AFF_UBIGI=https://...

import { PROVIDER_BY_SLUG, type ProviderSlug } from "@/data/providers";

const ENV_OVERRIDE: Partial<Record<ProviderSlug, string | undefined>> = {
  airalo: process.env.NEXT_PUBLIC_AFF_AIRALO,
  holafly: process.env.NEXT_PUBLIC_AFF_HOLAFLY,
  saily: process.env.NEXT_PUBLIC_AFF_SAILY,
  nomad: process.env.NEXT_PUBLIC_AFF_NOMAD,
  ubigi: process.env.NEXT_PUBLIC_AFF_UBIGI,
  yesim: process.env.NEXT_PUBLIC_AFF_YESIM,
  alosim: process.env.NEXT_PUBLIC_AFF_ALOSIM,
  jetpac: process.env.NEXT_PUBLIC_AFF_JETPAC,
};

// Internal link used across the UI. Carries the destination ISO so the redirect
// handler (and later, deep links) know where the user is headed.
export function affiliateHref(slug: ProviderSlug, countryIso?: string): string {
  return countryIso ? `/go/${slug}?c=${countryIso}` : `/go/${slug}`;
}

// Final destination resolved by the /go redirect. Prefers the env tracking link,
// falls back to the provider's homepage so nothing is ever a dead link.
export function resolveAffiliateUrl(slug: ProviderSlug): string | null {
  const provider = PROVIDER_BY_SLUG[slug];
  if (!provider) return null;
  return ENV_OVERRIDE[slug] || provider.affiliateUrl;
}
