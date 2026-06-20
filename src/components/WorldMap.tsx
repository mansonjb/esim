import { WORLD, getMapPins } from "@/lib/worldmap";
import { WorldMapPins } from "@/components/WorldMapPins";
import { COUNTRIES } from "@/data/countries";

export function WorldMap() {
  const pins = getMapPins();

  return (
    <div className="mx-auto w-full max-w-4xl">
      <div
        className="relative"
        style={{ aspectRatio: `${WORLD.width} / ${WORLD.height}` }}
      >
        <svg
          viewBox={`0 0 ${WORLD.width} ${WORLD.height}`}
          className="h-full w-full"
          role="img"
          aria-label="World map of eSIM destinations"
        >
          <path
            d={WORLD.landPath}
            className="fill-brand-100 stroke-brand-200"
            strokeWidth={0.6}
            strokeLinejoin="round"
          />
        </svg>
        <WorldMapPins pins={pins} />
      </div>
      <p className="mt-4 text-center text-sm text-muted">
        Coverage in{" "}
        <span className="font-semibold text-ink-soft">
          {COUNTRIES.length} destinations
        </span>
        . Tap a glowing dot to compare plans.
      </p>
    </div>
  );
}
