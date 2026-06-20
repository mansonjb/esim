import type { Metadata } from "next";
import Link from "next/link";
import { MATCHUPS, matchupSlug } from "@/data/comparisons";
import { getProvider } from "@/data/providers";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Compare eSIM providers head to head",
  description:
    "Airalo vs Holafly, Saily vs Nomad and more. Side-by-side travel eSIM comparisons on coverage, price per GB, unlimited data and hotspot support.",
  path: "/compare",
});

export default function CompareIndex() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Compare", path: "/compare" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <section className="border-b border-line bg-gradient-to-b from-brand-50/50 to-canvas">
        <div className="container-x py-10">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            eSIM provider comparisons
          </h1>
          <p className="mt-2 max-w-2xl text-muted">
            The matchups travellers search most, settled with side-by-side specs
            and example prices.
          </p>
        </div>
      </section>

      <section className="container-x py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MATCHUPS.map((m) => {
            const a = getProvider(m.a)!;
            const b = getProvider(m.b)!;
            return (
              <Link
                key={matchupSlug(m)}
                href={`/compare/${matchupSlug(m)}`}
                className="group flex items-center justify-between rounded-card border border-line bg-paper p-5 transition-all hover:border-brand-200 hover:shadow-sm"
              >
                <span className="font-semibold text-ink-soft group-hover:text-brand-600">
                  {a.name} <span className="text-muted">vs</span> {b.name}
                </span>
                <span className="text-sm text-muted">
                  {a.rating.toFixed(1)} / {b.rating.toFixed(1)}
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
