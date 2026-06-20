// Server-only world-map geometry. Runs at build time: projects the land
// outline to an SVG path and pre-projects each destination pin to a percentage
// position, so the client component ships no d3/topojson and no math.

import { geoEqualEarth, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import topo from "@/data/land-110m.json";
import { COORDS } from "@/data/coords";
import { getCountry, flagEmoji } from "@/data/countries";
import { getCountrySummary } from "@/data/plans";

const W = 1000;
const H = 480;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const landGeo = feature(topo as any, (topo as any).objects.land) as any;
const projection = geoEqualEarth().fitSize([W, H], landGeo);
const pathGen = geoPath(projection);

export const WORLD = {
  width: W,
  height: H,
  landPath: pathGen(landGeo) ?? "",
};

export type MapPin = {
  slug: string;
  name: string;
  flag: string;
  fromPrice: number;
  xPct: number;
  yPct: number;
};

export function getMapPins(): MapPin[] {
  const pins: MapPin[] = [];
  for (const [slug, lnglat] of Object.entries(COORDS)) {
    const country = getCountry(slug);
    if (!country) continue;
    const p = projection(lnglat);
    if (!p) continue;
    pins.push({
      slug,
      name: country.name,
      flag: flagEmoji(country.iso2),
      fromPrice: getCountrySummary(slug).fromPrice,
      xPct: (p[0] / W) * 100,
      yPct: (p[1] / H) * 100,
    });
  }
  return pins;
}
