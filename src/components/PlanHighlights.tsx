import type { Plan, PlanBadge } from "@/data/plans";
import { BADGE_LABEL } from "@/data/plans";
import { AffiliateButton } from "@/components/AffiliateButton";
import { usd } from "@/lib/format";

const ORDER: PlanBadge[] = ["best-value", "cheapest", "best-unlimited"];

const ACCENT: Record<PlanBadge, string> = {
  "best-value": "ring-brand-200 bg-brand-50/40",
  cheapest: "ring-accent-100 bg-accent-50/40",
  "best-unlimited": "ring-amber-200 bg-amber-soft/30",
};

const SUBTITLE: Record<PlanBadge, string> = {
  "best-value": "Lowest price per gigabyte",
  cheapest: "Smallest upfront spend",
  "best-unlimited": "Unlimited data, best day rate",
};

export function PlanHighlights({ plans }: { plans: Plan[] }) {
  const picks = ORDER.map((badge) => ({
    badge,
    plan: plans.find((p) => p.badges.includes(badge)),
  })).filter((x): x is { badge: PlanBadge; plan: Plan } => Boolean(x.plan));

  if (!picks.length) return null;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {picks.map(({ badge, plan }) => (
        <div
          key={badge}
          className={`flex flex-col rounded-card border border-line p-5 ring-1 ring-inset ${ACCENT[badge]}`}
        >
          <div className="text-xs font-semibold uppercase tracking-wider text-muted">
            {BADGE_LABEL[badge]}
          </div>
          <div className="mt-1 text-sm text-muted">{SUBTITLE[badge]}</div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold tracking-tight text-ink">
              {usd(plan.price)}
            </span>
            <span className="text-sm text-muted">
              {plan.dataLabel} / {plan.days} days
            </span>
          </div>
          <div className="mt-1 text-sm font-medium text-ink-soft">
            {plan.providerName}
            {plan.pricePerGb !== null && (
              <span className="text-muted">
                {" "}
                · {usd(plan.pricePerGb)}/GB
              </span>
            )}
          </div>
          <div className="mt-auto pt-5">
            <AffiliateButton href={plan.href} className="w-full">
              View deal
            </AffiliateButton>
          </div>
        </div>
      ))}
    </div>
  );
}
