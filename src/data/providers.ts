// Provider catalogue.
// NOTE: ratings, coverage counts and feature flags are editorial seed values.
// affiliateUrl is the tracking base used by lib/affiliate.ts. Replace each one
// with your real partner link (Airalo/Holafly use Partnerize/Impact, Saily uses
// the Nord affiliate platform, etc.) or set the matching env var, e.g.
// NEXT_PUBLIC_AFF_AIRALO. See lib/affiliate.ts.

export type ProviderSlug =
  | "airalo"
  | "holafly"
  | "saily"
  | "nomad"
  | "ubigi"
  | "yesim"
  | "alosim"
  | "jetpac";

export type PlanStyle = "data" | "unlimited";

export type Provider = {
  slug: ProviderSlug;
  name: string;
  url: string;
  affiliateUrl: string;
  rating: number; // out of 5, editorial
  coverage: number; // approx countries/regions covered (marketing figure)
  tagline: string;
  blurb: string;
  pros: string[];
  cons: string[];
  features: {
    hotspot: boolean; // tethering / share data
    topup: boolean;
    instantQr: boolean;
    support247: boolean;
  };
  styles: PlanStyle[];
};

export const PROVIDERS: Provider[] = [
  {
    slug: "airalo",
    name: "Airalo",
    url: "https://www.airalo.com",
    affiliateUrl: "https://www.airalo.com",
    rating: 4.6,
    coverage: 200,
    tagline: "The widest coverage, lowest entry prices",
    blurb:
      "The largest eSIM marketplace, with local and regional data plans in 200+ countries and territories. Best pick when you want cheap, flexible data bundles and the broadest destination list.",
    pros: [
      "Cheapest small data bundles",
      "Widest country coverage",
      "Top-up without buying a new eSIM",
    ],
    cons: ["No phone number on most plans", "Support can be slow at peak times"],
    features: { hotspot: true, topup: true, instantQr: true, support247: true },
    styles: ["data"],
  },
  {
    slug: "holafly",
    name: "Holafly",
    url: "https://esim.holafly.com",
    affiliateUrl: "https://esim.holafly.com",
    rating: 4.3,
    coverage: 160,
    tagline: "Unlimited data specialist",
    blurb:
      "Day-based unlimited-data plans, ideal for heavy users who do not want to track gigabytes. You pick the number of days, not a data cap. Pricier than tiered rivals but simple.",
    pros: [
      "Truly unlimited data on most destinations",
      "Simple day-based pricing",
      "24/7 live chat support",
    ],
    cons: ["More expensive", "Hotspot limited or capped on some plans"],
    features: { hotspot: true, topup: false, instantQr: true, support247: true },
    styles: ["unlimited"],
  },
  {
    slug: "saily",
    name: "Saily",
    url: "https://saily.com",
    affiliateUrl: "https://saily.com",
    rating: 4.4,
    coverage: 150,
    tagline: "Clean app, security extras",
    blurb:
      "Built by the team behind NordVPN. A polished app with optional security features (ad blocker, virtual location) and competitive tiered data plans. A strong all-rounder.",
    pros: [
      "Sharp, easy app",
      "Good mid-tier prices",
      "Built-in security tools",
    ],
    cons: ["Newer brand", "Coverage smaller than Airalo"],
    features: { hotspot: true, topup: true, instantQr: true, support247: true },
    styles: ["data", "unlimited"],
  },
  {
    slug: "nomad",
    name: "Nomad",
    url: "https://www.getnomad.app",
    affiliateUrl: "https://www.getnomad.app",
    rating: 4.3,
    coverage: 170,
    tagline: "Best value on larger bundles",
    blurb:
      "Tiered data plans that get cheaper per gigabyte as the bundle grows, plus generous regional packs. A good middle ground between Airalo and the unlimited brands.",
    pros: ["Great value on 10GB+ bundles", "Wide regional packs", "Clean app"],
    cons: ["Small bundles not the cheapest", "No unlimited option"],
    features: { hotspot: true, topup: true, instantQr: true, support247: false },
    styles: ["data"],
  },
  {
    slug: "ubigi",
    name: "Ubigi",
    url: "https://cellulardata.ubigi.com",
    affiliateUrl: "https://cellulardata.ubigi.com",
    rating: 4.1,
    coverage: 190,
    tagline: "For frequent travellers and quality networks",
    blurb:
      "Backed by Transatel (NTT). Strong network quality and a favourite for frequent flyers and in-car connectivity. Tiered and monthly plans rather than rock-bottom one-offs.",
    pros: ["Reliable premium networks", "Good for frequent travel", "Monthly plans"],
    cons: ["Interface feels dated", "Rarely the cheapest"],
    features: { hotspot: true, topup: true, instantQr: true, support247: false },
    styles: ["data"],
  },
  {
    slug: "yesim",
    name: "Yesim",
    url: "https://yesim.app",
    affiliateUrl: "https://yesim.app",
    rating: 4.2,
    coverage: 150,
    tagline: "Flexible plans, pay-as-you-go option",
    blurb:
      "Tiered data plans plus an unlimited option and a pay-as-you-go mode that bills only for what you use. Solid mid-range value and one of the better affiliate payouts in the market.",
    pros: ["Pay-as-you-go available", "Unlimited option", "Good regional packs"],
    cons: ["Smaller brand recognition", "App can feel busy"],
    features: { hotspot: true, topup: true, instantQr: true, support247: true },
    styles: ["data", "unlimited"],
  },
  {
    slug: "alosim",
    name: "aloSIM",
    url: "https://alosim.com",
    affiliateUrl: "https://alosim.com",
    rating: 4.3,
    coverage: 200,
    tagline: "Simple, cheap, no-frills data",
    blurb:
      "A straightforward marketplace with low prices across 200+ destinations. No bells and whistles, just cheap data bundles and an easy app, which makes it a reliable budget pick.",
    pros: ["Very competitive prices", "Wide coverage", "Discount codes for users"],
    cons: ["Fewer premium features", "Tracking is web-only"],
    features: { hotspot: true, topup: true, instantQr: true, support247: false },
    styles: ["data"],
  },
  {
    slug: "jetpac",
    name: "Jetpac",
    url: "https://www.jetpacglobal.com",
    affiliateUrl: "https://www.jetpacglobal.com",
    rating: 4.2,
    coverage: 150,
    tagline: "Data plus travel perks",
    blurb:
      "Travel-focused eSIM that bundles data with extras like airport lounge passes and travel rewards. Prices sit slightly above the budget brands but the perks add real value for frequent flyers.",
    pros: ["Travel perks and rewards", "Clean onboarding", "Reliable networks"],
    cons: ["Not the cheapest", "Smaller country list than Airalo"],
    features: { hotspot: true, topup: true, instantQr: true, support247: true },
    styles: ["data"],
  },
];

export const PROVIDER_BY_SLUG: Record<ProviderSlug, Provider> = PROVIDERS.reduce(
  (acc, p) => {
    acc[p.slug] = p;
    return acc;
  },
  {} as Record<ProviderSlug, Provider>,
);

export function getProvider(slug: string): Provider | undefined {
  return PROVIDER_BY_SLUG[slug as ProviderSlug];
}
