// Region landing pages at /esim/region/[slug].
// Two kinds: the 8 base regions (derived from country.region) and curated
// marketing groupings (Southeast Asia, Nordics, Gulf, Latin America, Global)
// that target high-volume multi-country search terms.

import {
  COUNTRIES,
  countriesByRegion,
  REGIONS,
  type Region,
} from "@/data/countries";

export type RegionPage = {
  slug: string;
  name: string; // used in "...for {name}"
  h1: string;
  blurb: string;
  countrySlugs: string[];
};

export function regionToSlug(region: Region): string {
  return region
    .toLowerCase()
    .replace(/&/g, " ")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const BASE: RegionPage[] = REGIONS.map((r) => ({
  slug: regionToSlug(r),
  name: r,
  h1: `Best eSIM for ${r} (2026)`,
  blurb: `Compare travel eSIM plans across ${r}. Whether you are visiting one country or hopping between several, see the cheapest data per gigabyte and the best unlimited options for every destination in the region.`,
  countrySlugs: countriesByRegion(r).map((c) => c.slug),
}));

const CUSTOM: RegionPage[] = [
  {
    slug: "southeast-asia",
    name: "Southeast Asia",
    h1: "Best eSIM for Southeast Asia (2026)",
    blurb:
      "One eSIM for a Southeast Asia backpacking trip, or a local plan per country. Compare data prices across Thailand, Vietnam, Indonesia and the rest of the region so you stay connected from Bangkok to Bali.",
    countrySlugs: [
      "thailand",
      "vietnam",
      "indonesia",
      "malaysia",
      "singapore",
      "philippines",
      "cambodia",
      "laos",
      "myanmar",
      "brunei",
      "timor-leste",
    ],
  },
  {
    slug: "nordics",
    name: "the Nordics",
    h1: "Best eSIM for the Nordics & Scandinavia (2026)",
    blurb:
      "Travelling across Norway, Sweden, Denmark, Finland or Iceland? Compare eSIM plans for the Nordics and avoid expensive roaming on your Scandinavian trip.",
    countrySlugs: ["norway", "sweden", "denmark", "finland", "iceland"],
  },
  {
    slug: "balkans",
    name: "the Balkans",
    h1: "Best eSIM for the Balkans (2026)",
    blurb:
      "A road trip through the Balkans crosses borders fast. Compare eSIM data plans for Croatia, Slovenia, Serbia, Montenegro and neighbours so you are covered the whole way.",
    countrySlugs: [
      "croatia",
      "slovenia",
      "serbia",
      "montenegro",
      "albania",
      "bosnia-and-herzegovina",
      "north-macedonia",
      "bulgaria",
      "greece",
    ],
  },
  {
    slug: "gulf",
    name: "the Gulf",
    h1: "Best eSIM for the Gulf & GCC (2026)",
    blurb:
      "From Dubai to Doha, compare travel eSIM plans across the Gulf states. See the best data deals for the UAE, Saudi Arabia, Qatar and the rest of the GCC.",
    countrySlugs: [
      "united-arab-emirates",
      "saudi-arabia",
      "qatar",
      "bahrain",
      "kuwait",
      "oman",
    ],
  },
  {
    slug: "latin-america",
    name: "Latin America",
    h1: "Best eSIM for Latin America (2026)",
    blurb:
      "Backpacking South and Central America? Compare eSIM data plans across Mexico, Brazil, Argentina, Peru, Colombia and more, with the best value pick for each leg of the trip.",
    countrySlugs: [
      "mexico",
      "brazil",
      "argentina",
      "peru",
      "colombia",
      "chile",
      "ecuador",
      "bolivia",
      "uruguay",
      "paraguay",
      "costa-rica",
      "panama",
      "guatemala",
      "dominican-republic",
    ],
  },
  {
    slug: "global",
    name: "global travel",
    h1: "Best global eSIM (2026): one plan for worldwide travel",
    blurb:
      "Visiting several countries or travelling the world? Compare every destination we cover in one place and find the cheapest data per gigabyte, anywhere you land.",
    countrySlugs: COUNTRIES.map((c) => c.slug),
  },
];

export const REGION_PAGES: RegionPage[] = [...BASE, ...CUSTOM];

export const REGION_PAGE_BY_SLUG: Record<string, RegionPage> =
  REGION_PAGES.reduce(
    (acc, r) => {
      acc[r.slug] = r;
      return acc;
    },
    {} as Record<string, RegionPage>,
  );

export function getRegionPage(slug: string): RegionPage | undefined {
  return REGION_PAGE_BY_SLUG[slug];
}

// Curated groupings shown as "explore regions" links (excludes Global).
export const FEATURED_REGION_SLUGS = [
  "europe",
  "asia",
  "southeast-asia",
  "middle-east",
  "gulf",
  "north-america",
  "caribbean-central-america",
  "south-america",
  "latin-america",
  "africa",
  "oceania",
  "nordics",
  "balkans",
];
