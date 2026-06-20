// [longitude, latitude] for destinations pinned on the home-page world map.
// d3-geo projections expect [lng, lat] order. Approximate capital/centroid
// positions; cosmetic only.

export const COORDS: Record<string, [number, number]> = {
  // Europe
  spain: [-3.7, 40.4],
  italy: [12.5, 41.9],
  france: [2.35, 48.85],
  "united-kingdom": [-0.13, 51.5],
  germany: [13.4, 52.5],
  greece: [23.73, 37.98],
  portugal: [-9.14, 38.72],
  netherlands: [4.9, 52.37],
  turkey: [35.0, 39.0],
  croatia: [15.98, 45.8],
  cyprus: [33.4, 35.1],
  // Asia
  japan: [139.7, 35.7],
  thailand: [100.5, 13.75],
  india: [78.0, 22.0],
  indonesia: [106.8, -6.2],
  vietnam: [107.0, 16.0],
  singapore: [103.8, 1.35],
  "south-korea": [126.99, 37.55],
  malaysia: [101.7, 3.14],
  philippines: [122.0, 13.0],
  "hong-kong": [114.17, 22.3],
  taiwan: [121.0, 23.7],
  "sri-lanka": [80.7, 7.0],
  maldives: [73.2, 3.2],
  // Middle East
  "united-arab-emirates": [54.4, 24.5],
  "saudi-arabia": [45.0, 24.0],
  israel: [35.2, 31.8],
  jordan: [35.9, 31.95],
  // North America
  "united-states": [-98.6, 39.8],
  canada: [-106.0, 56.0],
  mexico: [-102.0, 23.0],
  // Caribbean & Central America
  "costa-rica": [-84.1, 9.9],
  "dominican-republic": [-69.9, 18.5],
  jamaica: [-76.8, 18.0],
  "puerto-rico": [-66.1, 18.4],
  // South America
  brazil: [-52.0, -10.0],
  argentina: [-64.0, -34.0],
  peru: [-77.0, -12.0],
  colombia: [-74.1, 4.6],
  chile: [-70.7, -33.4],
  // Africa
  egypt: [30.0, 27.0],
  morocco: [-6.0, 31.8],
  "south-africa": [24.0, -29.0],
  kenya: [36.8, -1.29],
  tanzania: [35.0, -6.0],
  mauritius: [57.5, -20.3],
  // Oceania
  australia: [134.0, -25.0],
  "new-zealand": [174.0, -41.0],
  fiji: [178.0, -17.7],
};
