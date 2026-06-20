// Plan generation + ranking engine.
//
// Each provider exposes a small catalogue of plan templates. For a given
// destination we apply the country's priceTier multiplier to produce a
// realistic comparison table, then compute value badges (Cheapest, Best value,
// Best unlimited). This keeps the site fully programmatic with zero per-country
// data entry. Swap `TEMPLATES` for a real affiliate price feed later — every
// page and the ranking logic will keep working unchanged.

import { affiliateHref } from "@/lib/affiliate";
import type { Country } from "@/data/countries";
import { getCountry } from "@/data/countries";
import type { ProviderSlug, PlanStyle } from "@/data/providers";
import { PROVIDER_BY_SLUG } from "@/data/providers";

type Template = {
  dataGb: number | null; // null = unlimited
  days: number;
  base: number; // USD before country multiplier
  hotspot: boolean;
};

const TEMPLATES: Record<ProviderSlug, Template[]> = {
  airalo: [
    { dataGb: 1, days: 7, base: 4.5, hotspot: true },
    { dataGb: 3, days: 30, base: 9, hotspot: true },
    { dataGb: 5, days: 30, base: 13, hotspot: true },
    { dataGb: 10, days: 30, base: 19, hotspot: true },
    { dataGb: 20, days: 30, base: 32, hotspot: true },
  ],
  saily: [
    { dataGb: 1, days: 7, base: 3.99, hotspot: true },
    { dataGb: 3, days: 30, base: 8.99, hotspot: true },
    { dataGb: 5, days: 30, base: 11.99, hotspot: true },
    { dataGb: 10, days: 30, base: 18.99, hotspot: true },
    { dataGb: 20, days: 30, base: 32.99, hotspot: true },
    { dataGb: null, days: 30, base: 49.99, hotspot: false },
  ],
  nomad: [
    { dataGb: 1, days: 7, base: 4.0, hotspot: true },
    { dataGb: 3, days: 30, base: 9.0, hotspot: true },
    { dataGb: 5, days: 30, base: 12.5, hotspot: true },
    { dataGb: 10, days: 30, base: 19.0, hotspot: true },
    { dataGb: 20, days: 30, base: 33.0, hotspot: true },
  ],
  ubigi: [
    { dataGb: 1, days: 7, base: 5.0, hotspot: true },
    { dataGb: 3, days: 30, base: 9.5, hotspot: true },
    { dataGb: 10, days: 30, base: 20.0, hotspot: true },
  ],
  holafly: [
    { dataGb: null, days: 5, base: 19, hotspot: true },
    { dataGb: null, days: 7, base: 27, hotspot: true },
    { dataGb: null, days: 10, base: 34, hotspot: true },
    { dataGb: null, days: 15, base: 47, hotspot: true },
    { dataGb: null, days: 30, base: 69, hotspot: true },
  ],
};

export type PlanBadge = "cheapest" | "best-value" | "best-unlimited";

export type Plan = {
  id: string;
  provider: ProviderSlug;
  providerName: string;
  style: PlanStyle;
  dataGb: number | null;
  dataLabel: string;
  days: number;
  price: number;
  pricePerGb: number | null;
  pricePerDay: number;
  hotspot: boolean;
  href: string;
  badges: PlanBadge[];
};

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}

function priceFor(base: number, tier: number): number {
  // Land on tidy .99 / .49 endings so tables read like real storefronts.
  const raw = base * tier;
  return round2(Math.floor(raw) + (raw - Math.floor(raw) >= 0.5 ? 0.99 : 0.49));
}

export function getCountryPlans(countrySlug: string): Plan[] {
  const country = getCountry(countrySlug);
  if (!country) return [];

  const plans: Plan[] = [];

  (Object.keys(TEMPLATES) as ProviderSlug[]).forEach((slug) => {
    const provider = PROVIDER_BY_SLUG[slug];
    TEMPLATES[slug].forEach((t, i) => {
      const price = priceFor(t.base, country.priceTier);
      const style: PlanStyle = t.dataGb === null ? "unlimited" : "data";
      plans.push({
        id: `${slug}-${i}`,
        provider: slug,
        providerName: provider.name,
        style,
        dataGb: t.dataGb,
        dataLabel: t.dataGb === null ? "Unlimited" : `${t.dataGb} GB`,
        days: t.days,
        price,
        pricePerGb: t.dataGb ? round2(price / t.dataGb) : null,
        pricePerDay: round2(price / t.days),
        hotspot: t.hotspot,
        href: affiliateHref(slug, country.iso2),
        badges: [],
      });
    });
  });

  assignBadges(plans);
  return plans.sort((a, b) => a.price - b.price);
}

function assignBadges(plans: Plan[]): void {
  if (plans.length === 0) return;

  // Cheapest entry plan overall (great for short trips).
  let cheapest = plans[0];
  for (const p of plans) if (p.price < cheapest.price) cheapest = p;
  cheapest.badges.push("cheapest");

  // Best value: lowest price-per-GB among real data plans of 3GB+.
  const dataPlans = plans.filter((p) => p.dataGb !== null && p.dataGb >= 3);
  if (dataPlans.length) {
    let best = dataPlans[0];
    for (const p of dataPlans)
      if ((p.pricePerGb ?? Infinity) < (best.pricePerGb ?? Infinity)) best = p;
    if (best !== cheapest) best.badges.push("best-value");
    else best.badges.push("best-value");
  }

  // Best unlimited: cheapest per-day unlimited plan.
  const unlimited = plans.filter((p) => p.dataGb === null);
  if (unlimited.length) {
    let best = unlimited[0];
    for (const p of unlimited) if (p.pricePerDay < best.pricePerDay) best = p;
    best.badges.push("best-unlimited");
  }
}

export type CountrySummary = {
  fromPrice: number; // cheapest plan
  providerCount: number;
  unlimitedFrom: number | null;
  bestValue: Plan | null;
};

export function getCountrySummary(countrySlug: string): CountrySummary {
  const plans = getCountryPlans(countrySlug);
  const providers = new Set(plans.map((p) => p.provider));
  const unlimited = plans.filter((p) => p.dataGb === null);
  const bestValue = plans.find((p) => p.badges.includes("best-value")) ?? null;
  return {
    fromPrice: plans.length ? Math.min(...plans.map((p) => p.price)) : 0,
    providerCount: providers.size,
    unlimitedFrom: unlimited.length
      ? Math.min(...unlimited.map((p) => p.price))
      : null,
    bestValue,
  };
}

export const BADGE_LABEL: Record<PlanBadge, string> = {
  cheapest: "Cheapest",
  "best-value": "Best value",
  "best-unlimited": "Best unlimited",
};
