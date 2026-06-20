import Link from "next/link";
import type { Plan } from "@/data/plans";
import { Badge } from "@/components/Badge";
import { AffiliateButton } from "@/components/AffiliateButton";
import { usd } from "@/lib/format";

function Check({ on }: { on: boolean }) {
  return on ? (
    <span className="text-accent-600" title="Hotspot supported">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-label="Yes">
        <path d="M5 12.5l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  ) : (
    <span className="text-line" title="No hotspot">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-label="No">
        <path d="M7 7l10 10M17 7L7 17" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    </span>
  );
}

export function PlanTable({ plans }: { plans: Plan[] }) {
  return (
    <div>
      {/* Desktop table */}
      <div className="hidden overflow-hidden rounded-card border border-line bg-paper md:block">
        <table className="w-full text-left text-sm">
          <thead className="bg-canvas text-xs uppercase tracking-wider text-muted">
            <tr>
              <th className="px-5 py-3 font-semibold">Provider</th>
              <th className="px-3 py-3 font-semibold">Data</th>
              <th className="px-3 py-3 font-semibold">Validity</th>
              <th className="px-3 py-3 text-center font-semibold">Hotspot</th>
              <th className="px-3 py-3 font-semibold">Price</th>
              <th className="px-5 py-3 text-right font-semibold">Deal</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {plans.map((p) => (
              <tr key={p.id} className="align-middle hover:bg-canvas/60">
                <td className="px-5 py-4">
                  <Link
                    href={`/providers/${p.provider}`}
                    className="font-semibold text-ink-soft hover:text-brand-600"
                  >
                    {p.providerName}
                  </Link>
                  {p.badges.length > 0 && (
                    <div className="mt-1 flex flex-wrap gap-1">
                      {p.badges.map((b) => (
                        <Badge key={b} kind={b} />
                      ))}
                    </div>
                  )}
                </td>
                <td className="px-3 py-4 font-medium text-ink">{p.dataLabel}</td>
                <td className="px-3 py-4 text-muted">{p.days} days</td>
                <td className="px-3 py-4">
                  <div className="flex justify-center">
                    <Check on={p.hotspot} />
                  </div>
                </td>
                <td className="px-3 py-4">
                  <div className="font-bold text-ink">{usd(p.price)}</div>
                  {p.pricePerGb !== null && (
                    <div className="text-xs text-muted">{usd(p.pricePerGb)}/GB</div>
                  )}
                </td>
                <td className="px-5 py-4 text-right">
                  <AffiliateButton href={p.href} size="sm">
                    View
                  </AffiliateButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="space-y-3 md:hidden">
        {plans.map((p) => (
          <div key={p.id} className="card p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <Link
                  href={`/providers/${p.provider}`}
                  className="font-semibold text-ink-soft"
                >
                  {p.providerName}
                </Link>
                <div className="mt-0.5 text-sm text-muted">
                  {p.dataLabel} · {p.days} days · {p.hotspot ? "hotspot" : "no hotspot"}
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-ink">{usd(p.price)}</div>
                {p.pricePerGb !== null && (
                  <div className="text-xs text-muted">{usd(p.pricePerGb)}/GB</div>
                )}
              </div>
            </div>
            {p.badges.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1">
                {p.badges.map((b) => (
                  <Badge key={b} kind={b} />
                ))}
              </div>
            )}
            <div className="mt-3">
              <AffiliateButton href={p.href} size="sm" className="w-full">
                View deal
              </AffiliateButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
