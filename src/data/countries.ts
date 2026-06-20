// Destination catalogue. Each country becomes one programmatic page at
// /esim/[slug]. priceTier is a seed multiplier applied to provider base prices
// (see data/plans.ts) so comparison tables look realistic per destination;
// replace with real affiliate-feed pricing when you wire one in.

export type Region =
  | "Europe"
  | "Asia"
  | "North America"
  | "South America"
  | "Middle East"
  | "Africa"
  | "Oceania";

export type Country = {
  slug: string;
  name: string;
  iso2: string;
  region: Region;
  priceTier: number;
  popular?: boolean;
  networks: string[];
};

export const COUNTRIES: Country[] = [
  { slug: "japan", name: "Japan", iso2: "JP", region: "Asia", priceTier: 1.15, popular: true, networks: ["NTT Docomo", "SoftBank", "KDDI au"] },
  { slug: "united-states", name: "United States", iso2: "US", region: "North America", priceTier: 1.0, popular: true, networks: ["T-Mobile", "AT&T"] },
  { slug: "france", name: "France", iso2: "FR", region: "Europe", priceTier: 0.95, popular: true, networks: ["Orange", "SFR", "Bouygues"] },
  { slug: "spain", name: "Spain", iso2: "ES", region: "Europe", priceTier: 0.95, popular: true, networks: ["Movistar", "Vodafone", "Orange"] },
  { slug: "italy", name: "Italy", iso2: "IT", region: "Europe", priceTier: 0.95, popular: true, networks: ["TIM", "Vodafone", "WindTre"] },
  { slug: "united-kingdom", name: "United Kingdom", iso2: "GB", region: "Europe", priceTier: 1.0, popular: true, networks: ["EE", "Vodafone", "O2"] },
  { slug: "thailand", name: "Thailand", iso2: "TH", region: "Asia", priceTier: 0.8, popular: true, networks: ["AIS", "TrueMove", "dtac"] },
  { slug: "turkey", name: "Turkey", iso2: "TR", region: "Europe", priceTier: 0.85, popular: true, networks: ["Turkcell", "Vodafone", "Turk Telekom"] },
  { slug: "germany", name: "Germany", iso2: "DE", region: "Europe", priceTier: 1.0, popular: true, networks: ["Telekom", "Vodafone", "O2"] },
  { slug: "greece", name: "Greece", iso2: "GR", region: "Europe", priceTier: 0.95, popular: true, networks: ["Cosmote", "Vodafone", "Nova"] },
  { slug: "mexico", name: "Mexico", iso2: "MX", region: "North America", priceTier: 0.9, popular: true, networks: ["Telcel", "AT&T", "Movistar"] },
  { slug: "united-arab-emirates", name: "United Arab Emirates", iso2: "AE", region: "Middle East", priceTier: 1.2, popular: true, networks: ["Etisalat", "du"] },
  { slug: "india", name: "India", iso2: "IN", region: "Asia", priceTier: 0.8, popular: true, networks: ["Jio", "Airtel"] },
  { slug: "indonesia", name: "Indonesia", iso2: "ID", region: "Asia", priceTier: 0.8, popular: true, networks: ["Telkomsel", "XL", "Indosat"] },
  { slug: "vietnam", name: "Vietnam", iso2: "VN", region: "Asia", priceTier: 0.8, popular: true, networks: ["Viettel", "Vinaphone", "Mobifone"] },
  { slug: "portugal", name: "Portugal", iso2: "PT", region: "Europe", priceTier: 0.95, popular: true, networks: ["MEO", "NOS", "Vodafone"] },
  { slug: "switzerland", name: "Switzerland", iso2: "CH", region: "Europe", priceTier: 1.3, networks: ["Swisscom", "Sunrise", "Salt"] },
  { slug: "australia", name: "Australia", iso2: "AU", region: "Oceania", priceTier: 1.05, popular: true, networks: ["Telstra", "Optus", "Vodafone"] },
  { slug: "canada", name: "Canada", iso2: "CA", region: "North America", priceTier: 1.05, popular: true, networks: ["Bell", "Rogers", "Telus"] },
  { slug: "egypt", name: "Egypt", iso2: "EG", region: "Africa", priceTier: 0.85, popular: true, networks: ["Orange", "Vodafone", "Etisalat"] },
  { slug: "morocco", name: "Morocco", iso2: "MA", region: "Africa", priceTier: 0.85, networks: ["Maroc Telecom", "Orange", "inwi"] },
  { slug: "brazil", name: "Brazil", iso2: "BR", region: "South America", priceTier: 0.9, networks: ["Vivo", "Claro", "TIM"] },
  { slug: "south-korea", name: "South Korea", iso2: "KR", region: "Asia", priceTier: 1.05, popular: true, networks: ["SKT", "KT", "LG U+"] },
  { slug: "singapore", name: "Singapore", iso2: "SG", region: "Asia", priceTier: 1.0, popular: true, networks: ["Singtel", "StarHub", "M1"] },
  { slug: "netherlands", name: "Netherlands", iso2: "NL", region: "Europe", priceTier: 1.0, networks: ["KPN", "Vodafone", "Odido"] },
  { slug: "china", name: "China", iso2: "CN", region: "Asia", priceTier: 1.0, networks: ["China Mobile", "China Unicom"] },
  { slug: "austria", name: "Austria", iso2: "AT", region: "Europe", priceTier: 1.0, networks: ["A1", "Magenta", "Drei"] },
  { slug: "ireland", name: "Ireland", iso2: "IE", region: "Europe", priceTier: 1.0, networks: ["Vodafone", "Three", "Eir"] },
  { slug: "croatia", name: "Croatia", iso2: "HR", region: "Europe", priceTier: 0.9, popular: true, networks: ["A1", "Hrvatski Telekom", "Telemach"] },
  { slug: "iceland", name: "Iceland", iso2: "IS", region: "Europe", priceTier: 1.2, networks: ["Siminn", "Vodafone", "Nova"] },
  { slug: "norway", name: "Norway", iso2: "NO", region: "Europe", priceTier: 1.2, networks: ["Telenor", "Telia", "Ice"] },
  { slug: "saudi-arabia", name: "Saudi Arabia", iso2: "SA", region: "Middle East", priceTier: 1.1, networks: ["STC", "Mobily", "Zain"] },
  { slug: "qatar", name: "Qatar", iso2: "QA", region: "Middle East", priceTier: 1.15, networks: ["Ooredoo", "Vodafone"] },
  { slug: "south-africa", name: "South Africa", iso2: "ZA", region: "Africa", priceTier: 0.9, networks: ["Vodacom", "MTN", "Cell C"] },
  { slug: "new-zealand", name: "New Zealand", iso2: "NZ", region: "Oceania", priceTier: 1.1, networks: ["Spark", "One NZ", "2degrees"] },
  { slug: "philippines", name: "Philippines", iso2: "PH", region: "Asia", priceTier: 0.8, popular: true, networks: ["Globe", "Smart", "DITO"] },
  { slug: "malaysia", name: "Malaysia", iso2: "MY", region: "Asia", priceTier: 0.85, popular: true, networks: ["Maxis", "Celcom", "Digi"] },
];

export const COUNTRY_BY_SLUG: Record<string, Country> = COUNTRIES.reduce(
  (acc, c) => {
    acc[c.slug] = c;
    return acc;
  },
  {} as Record<string, Country>,
);

export function getCountry(slug: string): Country | undefined {
  return COUNTRY_BY_SLUG[slug];
}

export const POPULAR_COUNTRIES = COUNTRIES.filter((c) => c.popular);

export const REGIONS: Region[] = [
  "Europe",
  "Asia",
  "North America",
  "South America",
  "Middle East",
  "Africa",
  "Oceania",
];

export function countriesByRegion(region: Region): Country[] {
  return COUNTRIES.filter((c) => c.region === region).sort((a, b) =>
    a.name.localeCompare(b.name),
  );
}

// Flag emoji from ISO-3166 alpha-2 code (regional indicator symbols).
export function flagEmoji(iso2: string): string {
  return iso2
    .toUpperCase()
    .replace(/./g, (ch) =>
      String.fromCodePoint(127397 + ch.charCodeAt(0)),
    );
}
