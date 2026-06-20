import Link from "next/link";
import type { Provider } from "@/data/providers";
import { StarRating } from "@/components/StarRating";
import { AffiliateButton } from "@/components/AffiliateButton";
import { Pill } from "@/components/Badge";
import { affiliateHref } from "@/lib/affiliate";

function FeatureChips({ provider }: { provider: Provider }) {
  const chips: string[] = [];
  if (provider.features.hotspot) chips.push("Hotspot");
  if (provider.features.topup) chips.push("Top-up");
  if (provider.features.support247) chips.push("24/7 support");
  if (provider.styles.includes("unlimited")) chips.push("Unlimited plans");
  return (
    <div className="flex flex-wrap gap-1.5">
      {chips.map((c) => (
        <Pill key={c}>{c}</Pill>
      ))}
    </div>
  );
}

export function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <div className="flex flex-col rounded-card border border-line bg-paper p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-ink">{provider.name}</h3>
          <p className="text-sm text-muted">{provider.tagline}</p>
        </div>
        <StarRating value={provider.rating} />
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted">{provider.blurb}</p>

      <div className="mt-4">
        <FeatureChips provider={provider} />
      </div>

      <div className="mt-5 grid grid-cols-2 gap-4 text-sm">
        <div>
          <div className="font-semibold text-accent-600">Pros</div>
          <ul className="mt-1 space-y-1 text-muted">
            {provider.pros.slice(0, 3).map((p) => (
              <li key={p}>+ {p}</li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-semibold text-ink-soft">Watch outs</div>
          <ul className="mt-1 space-y-1 text-muted">
            {provider.cons.slice(0, 2).map((c) => (
              <li key={c}>– {c}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-auto flex items-center gap-3 pt-6">
        <AffiliateButton href={affiliateHref(provider.slug)} size="md">
          Visit {provider.name}
        </AffiliateButton>
        <Link
          href={`/providers/${provider.slug}`}
          className="text-sm font-semibold text-brand-600 hover:text-brand-700"
        >
          Read review →
        </Link>
      </div>
    </div>
  );
}
