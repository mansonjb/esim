"use client";

import { useMemo, useState } from "react";
import type { DestinationItem } from "@/lib/destinations";
import { CountryCard } from "@/components/CountryCard";
import { REGIONS } from "@/data/countries";

export function DestinationSearch({ items }: { items: DestinationItem[] }) {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState<string>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((it) => {
      const matchesQ = q === "" || it.name.toLowerCase().includes(q);
      const matchesR = region === "All" || it.region === region;
      return matchesQ && matchesR;
    });
  }, [items, query, region]);

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path d="M20 20l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Search ${items.length} destinations, e.g. Japan`}
            className="w-full rounded-xl border border-line bg-paper py-3 pl-11 pr-4 text-sm text-ink outline-none transition-colors placeholder:text-muted focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
          />
        </div>
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="rounded-xl border border-line bg-paper px-4 py-3 text-sm font-medium text-ink-soft outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
        >
          <option value="All">All regions</option>
          {REGIONS.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-8 text-center text-sm text-muted">
          No destinations match “{query}”. Try another spelling.
        </p>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <CountryCard key={item.slug} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
