// Central site config. Change the brand + domain here in one place.
export const SITE = {
  name: "RoamCaptain",
  shortName: "RoamCaptain",
  domain: "roamcaptain.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://roamcaptain.com",
  tagline: "Compare travel eSIM plans in seconds",
  description:
    "Compare travel eSIM plans from Airalo, Holafly, Saily, Yesim and more, side by side. Real prices per gigabyte, unlimited options and the best-value pick for 165 destinations.",
  locale: "en",
  twitter: "@roamcaptain",
} as const;

export const NAV = [
  { href: "/destinations", label: "Destinations" },
  { href: "/compare", label: "Compare" },
  { href: "/providers", label: "Providers" },
] as const;
