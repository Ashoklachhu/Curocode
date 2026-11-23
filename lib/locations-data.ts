export interface LocationData {
  slug: string;
  name: string;
  /** Shown under the name on cards, e.g. "Headquarters" or the region. */
  region: string;
  isHQ?: boolean;
  /** Pin position in the /public/world-map.svg coordinate space (viewBox 0 0 118 64). */
  map: { x: number; y: number; lx: number; ly: number; anchor: "start" | "middle" | "end" };
}

/** Countries shown on the global presence map. */
export const LOCATIONS: LocationData[] = [
  { slug: "dubai-uae", name: "Dubai, UAE", region: "Headquarters", isHQ: true, map: { x: 76, y: 32.04, lx: 0, ly: 4.2, anchor: "middle" } },
  { slug: "saudi-arabia", name: "Saudi Arabia", region: "Middle East", map: { x: 73, y: 32.04, lx: -1.6, ly: 0.6, anchor: "end" } },
  { slug: "india", name: "India", region: "South Asia", map: { x: 81.5, y: 34.64, lx: 1.6, ly: 1.6, anchor: "start" } },
  { slug: "nepal", name: "Nepal", region: "South Asia", map: { x: 85.5, y: 31.18, lx: 1.4, ly: -1.2, anchor: "start" } },
  { slug: "united-kingdom", name: "United Kingdom", region: "Europe", map: { x: 56.5, y: 20.78, lx: 0, ly: -2.2, anchor: "middle" } },
  { slug: "canada", name: "Canada", region: "North America", map: { x: 30.5, y: 24.25, lx: 0, ly: -2.2, anchor: "middle" } },
  { slug: "united-states", name: "United States", region: "North America", map: { x: 15, y: 26.85, lx: 0, ly: 3.6, anchor: "middle" } },
  { slug: "australia", name: "Australia", region: "Oceania", map: { x: 108, y: 52.83, lx: 0, ly: 3.6, anchor: "middle" } },
];

export const HQ_LOCATION = LOCATIONS.find((l) => l.isHQ)!;
