import Link from "next/link";
import type { DestinationItem } from "@/lib/destinations";
import { usdShort } from "@/lib/format";

export function CountryCard({ item }: { item: DestinationItem }) {
  return (
    <Link
      href={`/esim/${item.slug}`}
      className="group flex items-center gap-3 rounded-card border border-line bg-paper p-4 transition-all hover:border-brand-200 hover:shadow-sm"
    >
      <span className="text-2xl leading-none">{item.flag}</span>
      <span className="min-w-0 flex-1">
        <span className="block truncate font-semibold text-ink-soft group-hover:text-brand-600">
          {item.name}
        </span>
        <span className="block text-xs text-muted">
          {item.providerCount} providers
        </span>
      </span>
      <span className="text-right">
        <span className="block text-xs text-muted">from</span>
        <span className="block font-bold text-ink">{usdShort(item.fromPrice)}</span>
      </span>
    </Link>
  );
}
