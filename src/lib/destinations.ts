import { COUNTRIES, flagEmoji, type Region } from "@/data/countries";
import { getCountrySummary } from "@/data/plans";

export type DestinationItem = {
  slug: string;
  name: string;
  iso2: string;
  flag: string;
  region: Region;
  popular: boolean;
  fromPrice: number;
  providerCount: number;
};

export function allDestinationItems(): DestinationItem[] {
  return COUNTRIES.map((c) => {
    const s = getCountrySummary(c.slug);
    return {
      slug: c.slug,
      name: c.name,
      iso2: c.iso2,
      flag: flagEmoji(c.iso2),
      region: c.region,
      popular: Boolean(c.popular),
      fromPrice: s.fromPrice,
      providerCount: s.providerCount,
    };
  }).sort((a, b) => a.name.localeCompare(b.name));
}

export function popularDestinationItems(limit = 12): DestinationItem[] {
  return allDestinationItems()
    .filter((d) => d.popular)
    .slice(0, limit);
}
