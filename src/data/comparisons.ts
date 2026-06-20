// Provider-vs-provider comparison pages at /compare/[a]-vs-[b].
// High commercial intent ("airalo vs holafly" is one of the top eSIM queries).

import { getProvider, type ProviderSlug } from "@/data/providers";

export type Matchup = { a: ProviderSlug; b: ProviderSlug };

export const MATCHUPS: Matchup[] = [
  { a: "airalo", b: "holafly" },
  { a: "airalo", b: "saily" },
  { a: "airalo", b: "nomad" },
  { a: "airalo", b: "yesim" },
  { a: "airalo", b: "alosim" },
  { a: "airalo", b: "ubigi" },
  { a: "airalo", b: "jetpac" },
  { a: "holafly", b: "saily" },
  { a: "holafly", b: "yesim" },
  { a: "holafly", b: "nomad" },
  { a: "saily", b: "nomad" },
  { a: "saily", b: "yesim" },
  { a: "saily", b: "alosim" },
  { a: "nomad", b: "ubigi" },
  { a: "yesim", b: "alosim" },
  { a: "jetpac", b: "holafly" },
];

export function matchupSlug(m: Matchup): string {
  return `${m.a}-vs-${m.b}`;
}

// Resolve a slug to a known matchup in either order.
export function getMatchup(slug: string): Matchup | undefined {
  const parts = slug.split("-vs-");
  if (parts.length !== 2) return undefined;
  const [a, b] = parts as [ProviderSlug, ProviderSlug];
  if (!getProvider(a) || !getProvider(b) || a === b) return undefined;
  const found = MATCHUPS.find(
    (m) => (m.a === a && m.b === b) || (m.a === b && m.b === a),
  );
  if (!found) return undefined;
  return { a, b };
}
