import type { Metadata } from "next";
import { ProviderCard } from "@/components/ProviderCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PROVIDERS } from "@/data/providers";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Best travel eSIM providers compared (2026)",
  description:
    "Airalo vs Holafly vs Saily vs Nomad vs Ubigi. Compare coverage, prices, unlimited data, hotspot support and ratings to pick the best travel eSIM provider.",
  path: "/providers",
});

function YesNo({ on }: { on: boolean }) {
  return (
    <span className={on ? "text-accent-600" : "text-line"}>
      {on ? "Yes" : "No"}
    </span>
  );
}

export default function ProvidersPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Providers", path: "/providers" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <section className="border-b border-line bg-gradient-to-b from-brand-50/50 to-canvas">
        <div className="container-x py-10">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Best travel eSIM providers, compared
          </h1>
          <p className="mt-2 max-w-2xl text-muted">
            The brands we track across every destination. Each is strong at
            something different, whether that is coverage, rock-bottom prices or
            unlimited data.
          </p>
        </div>
      </section>

      <div className="container-x space-y-12 py-12">
        {/* Comparison matrix */}
        <section className="hidden overflow-hidden rounded-card border border-line bg-paper lg:block">
          <table className="w-full text-left text-sm">
            <thead className="bg-canvas text-xs uppercase tracking-wider text-muted">
              <tr>
                <th className="px-5 py-3 font-semibold">Provider</th>
                <th className="px-3 py-3 font-semibold">Best for</th>
                <th className="px-3 py-3 text-center font-semibold">Coverage</th>
                <th className="px-3 py-3 text-center font-semibold">Unlimited</th>
                <th className="px-3 py-3 text-center font-semibold">Hotspot</th>
                <th className="px-3 py-3 text-center font-semibold">Top-up</th>
                <th className="px-3 py-3 text-center font-semibold">Rating</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {PROVIDERS.map((p) => (
                <tr key={p.slug} className="hover:bg-canvas/60">
                  <td className="px-5 py-4 font-semibold text-ink">{p.name}</td>
                  <td className="px-3 py-4 text-muted">{p.tagline}</td>
                  <td className="px-3 py-4 text-center text-muted">
                    {p.coverage}+
                  </td>
                  <td className="px-3 py-4 text-center">
                    <YesNo on={p.styles.includes("unlimited")} />
                  </td>
                  <td className="px-3 py-4 text-center">
                    <YesNo on={p.features.hotspot} />
                  </td>
                  <td className="px-3 py-4 text-center">
                    <YesNo on={p.features.topup} />
                  </td>
                  <td className="px-3 py-4 text-center font-semibold text-amber-600">
                    ★ {p.rating.toFixed(1)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Cards */}
        <section className="grid gap-6 md:grid-cols-2">
          {PROVIDERS.map((p) => (
            <ProviderCard key={p.slug} provider={p} />
          ))}
        </section>
      </div>
    </>
  );
}
