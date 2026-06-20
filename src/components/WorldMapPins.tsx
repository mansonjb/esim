"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { MapPin } from "@/lib/worldmap";
import { usdShort } from "@/lib/format";

export function WorldMapPins({ pins }: { pins: MapPin[] }) {
  const router = useRouter();
  const [hover, setHover] = useState<number | null>(null);

  return (
    <div className="pointer-events-none absolute inset-0">
      {pins.map((pin, i) => (
        <button
          key={pin.slug}
          type="button"
          aria-label={`eSIM for ${pin.name}, from ${usdShort(pin.fromPrice)}`}
          onMouseEnter={() => setHover(i)}
          onMouseLeave={() => setHover((h) => (h === i ? null : h))}
          onFocus={() => setHover(i)}
          onBlur={() => setHover((h) => (h === i ? null : h))}
          onClick={() => router.push(`/esim/${pin.slug}`)}
          className="map-pin pointer-events-auto"
          style={{ left: `${pin.xPct}%`, top: `${pin.yPct}%` }}
        >
          <span className="map-pin-dot" />
          {hover === i && (
            <span className="map-tip">
              <span className="text-base leading-none">{pin.flag}</span>
              <span className="text-left">
                <span className="block text-[13px] font-semibold text-ink">
                  {pin.name}
                </span>
                <span className="block text-[11px] text-muted">
                  from {usdShort(pin.fromPrice)}
                </span>
              </span>
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
