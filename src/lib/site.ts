// Central site config. Change the brand + domain here in one place.
export const SITE = {
  name: "eSIM Radar",
  shortName: "eSIM Radar",
  domain: "esimradar.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://esimradar.com",
  tagline: "Compare travel eSIM plans in seconds",
  description:
    "Compare travel eSIM plans from Airalo, Holafly, Saily, Nomad and Ubigi side by side. Real prices per gigabyte, unlimited options and the best value pick for 190+ destinations.",
  locale: "en",
  twitter: "@esimradar",
} as const;

export const NAV = [
  { href: "/destinations", label: "Destinations" },
  { href: "/providers", label: "Providers" },
  { href: "/guides", label: "Guides" },
] as const;
