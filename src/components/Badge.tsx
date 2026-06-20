import type { PlanBadge } from "@/data/plans";

const STYLES: Record<PlanBadge, string> = {
  cheapest: "bg-accent-50 text-accent-600 ring-accent-100",
  "best-value": "bg-brand-50 text-brand-600 ring-brand-100",
  "best-unlimited": "bg-amber-soft text-amber-700 ring-amber-200",
};

const LABELS: Record<PlanBadge, string> = {
  cheapest: "Cheapest",
  "best-value": "Best value",
  "best-unlimited": "Best unlimited",
};

export function Badge({ kind }: { kind: PlanBadge }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold ring-1 ring-inset ${STYLES[kind]}`}
    >
      {LABELS[kind]}
    </span>
  );
}

export function Pill({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: "neutral" | "brand" | "accent";
}) {
  const tones = {
    neutral: "bg-canvas text-muted ring-line",
    brand: "bg-brand-50 text-brand-600 ring-brand-100",
    accent: "bg-accent-50 text-accent-600 ring-accent-100",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
