import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MATCHUPS, getMatchup, matchupSlug } from "@/data/comparisons";
import { getProvider, type Provider } from "@/data/providers";
import { POPULAR_COUNTRIES, flagEmoji } from "@/data/countries";
import { getProviderBenchmarkPlan } from "@/data/plans";
import { StarRating } from "@/components/StarRating";
import { Faq } from "@/components/Faq";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AffiliateButton } from "@/components/AffiliateButton";
import { JsonLd } from "@/components/JsonLd";
import { affiliateHref } from "@/lib/affiliate";
import { usd } from "@/lib/format";
import { pageMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return MATCHUPS.map((m) => ({ slug: matchupSlug(m) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const m = getMatchup(slug);
  if (!m) return {};
  const a = getProvider(m.a)!;
  const b = getProvider(m.b)!;
  return pageMetadata({
    title: `${a.name} vs ${b.name}: which eSIM is better in 2026?`,
    description: `${a.name} vs ${b.name} compared on coverage, price per GB, unlimited data and hotspot. See which travel eSIM wins, with example prices side by side.`,
    path: `/compare/${slug}`,
  });
}

function Check({ on }: { on: boolean }) {
  return (
    <span className={on ? "text-accent-600" : "text-line"}>
      {on ? "Yes" : "No"}
    </span>
  );
}

function SpecRow({
  label,
  a,
  b,
}: {
  label: string;
  a: React.ReactNode;
  b: React.ReactNode;
}) {
  return (
    <tr className="border-t border-line">
      <th className="px-4 py-3 text-left text-sm font-medium text-muted">
        {label}
      </th>
      <td className="px-4 py-3 text-center text-sm font-semibold text-ink">{a}</td>
      <td className="px-4 py-3 text-center text-sm font-semibold text-ink">{b}</td>
    </tr>
  );
}

export default async function ComparePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const m = getMatchup(slug);
  if (!m) notFound();
  const a = getProvider(m.a) as Provider;
  const b = getProvider(m.b) as Provider;

  const countries = POPULAR_COUNTRIES.slice(0, 8);
  const faceoff = countries
    .map((c) => ({
      country: c,
      pa: getProviderBenchmarkPlan(c.slug, a.slug),
      pb: getProviderBenchmarkPlan(c.slug, b.slug),
    }))
    .filter((r) => r.pa && r.pb);

  const faq = [
    {
      q: `Is ${a.name} or ${b.name} cheaper?`,
      a: `${a.name} ${a.styles.includes("unlimited") && !b.styles.includes("data") ? "focuses on" : "leans toward"} ${a.tagline.toLowerCase()}, while ${b.name} is best known for ${b.tagline.toLowerCase()}. The cheaper choice depends on the destination and how much data you need, so check the price face-off above for your country.`,
    },
    {
      q: `Which has better coverage, ${a.name} or ${b.name}?`,
      a: `${a.name} covers around ${a.coverage}+ countries and ${b.name} around ${b.coverage}+. Both include all popular travel destinations; the difference mainly shows up in smaller or more remote countries.`,
    },
    {
      q: `Can I use a hotspot with ${a.name} and ${b.name}?`,
      a: `${a.features.hotspot ? `${a.name} supports hotspot/tethering` : `${a.name} limits hotspot use`}, and ${b.features.hotspot ? `${b.name} does too` : `${b.name} restricts it`}. Always confirm on the specific plan, as unlimited plans sometimes cap tethering.`,
    },
  ];

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Compare", path: "/compare" },
    { name: `${a.name} vs ${b.name}`, path: `/compare/${slug}` },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbJsonLd(breadcrumbs), faqJsonLd(faq)]} />

      <section className="border-b border-line bg-gradient-to-b from-brand-50/50 to-canvas">
        <div className="container-x py-10">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {a.name} vs {b.name}{" "}
            <span className="text-muted">(2026)</span>
          </h1>
          <p className="mt-3 max-w-2xl text-muted">
            Two of the most popular travel eSIMs, compared head to head on
            coverage, price and features, with example prices in popular
            destinations.
          </p>
        </div>
      </section>

      <div className="container-x space-y-12 py-12">
        {/* Verdict */}
        <section className="grid gap-4 sm:grid-cols-2">
          {[a, b].map((p) => (
            <div key={p.slug} className="card flex flex-col p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-ink">{p.name}</h2>
                <StarRating value={p.rating} />
              </div>
              <p className="mt-2 text-sm text-muted">
                Pick {p.name} for {p.tagline.toLowerCase()}.
              </p>
              <div className="mt-4">
                <AffiliateButton href={affiliateHref(p.slug)} className="w-full">
                  Visit {p.name}
                </AffiliateButton>
              </div>
            </div>
          ))}
        </section>

        {/* Spec table */}
        <section>
          <h2 className="text-xl font-bold tracking-tight text-ink">
            Feature comparison
          </h2>
          <div className="mt-5 overflow-hidden rounded-card border border-line bg-paper">
            <table className="w-full">
              <thead className="bg-canvas">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted">
                    Feature
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-bold text-ink">
                    {a.name}
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-bold text-ink">
                    {b.name}
                  </th>
                </tr>
              </thead>
              <tbody>
                <SpecRow label="Our rating" a={a.rating.toFixed(1)} b={b.rating.toFixed(1)} />
                <SpecRow label="Coverage" a={`${a.coverage}+`} b={`${b.coverage}+`} />
                <SpecRow
                  label="Unlimited data"
                  a={<Check on={a.styles.includes("unlimited")} />}
                  b={<Check on={b.styles.includes("unlimited")} />}
                />
                <SpecRow
                  label="Hotspot / tethering"
                  a={<Check on={a.features.hotspot} />}
                  b={<Check on={b.features.hotspot} />}
                />
                <SpecRow
                  label="Top-up"
                  a={<Check on={a.features.topup} />}
                  b={<Check on={b.features.topup} />}
                />
                <SpecRow
                  label="24/7 support"
                  a={<Check on={a.features.support247} />}
                  b={<Check on={b.features.support247} />}
                />
              </tbody>
            </table>
          </div>
        </section>

        {/* Price face-off */}
        {faceoff.length > 0 && (
          <section>
            <h2 className="text-xl font-bold tracking-tight text-ink">
              Price face-off
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted">
              Representative plan for each provider in popular destinations
              (10GB where available, otherwise the entry plan). Cheaper price in
              bold.
            </p>
            <div className="mt-5 overflow-hidden rounded-card border border-line bg-paper">
              <table className="w-full text-sm">
                <thead className="bg-canvas text-xs uppercase tracking-wider text-muted">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Destination</th>
                    <th className="px-4 py-3 text-center font-semibold">{a.name}</th>
                    <th className="px-4 py-3 text-center font-semibold">{b.name}</th>
                    <th className="px-4 py-3 text-right font-semibold">Compare</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {faceoff.map(({ country, pa, pb }) => {
                    const aCheaper = pa!.price < pb!.price;
                    return (
                      <tr key={country.slug} className="hover:bg-canvas/60">
                        <td className="px-4 py-3 font-medium text-ink-soft">
                          {flagEmoji(country.iso2)} {country.name}
                        </td>
                        <td className={`px-4 py-3 text-center ${aCheaper ? "font-bold text-ink" : "text-muted"}`}>
                          {usd(pa!.price)}{" "}
                          <span className="text-xs font-normal text-muted">
                            / {pa!.dataLabel}
                          </span>
                        </td>
                        <td className={`px-4 py-3 text-center ${!aCheaper ? "font-bold text-ink" : "text-muted"}`}>
                          {usd(pb!.price)}{" "}
                          <span className="text-xs font-normal text-muted">
                            / {pb!.dataLabel}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <Link
                            href={`/esim/${country.slug}`}
                            className="text-sm font-semibold text-brand-600 hover:text-brand-700"
                          >
                            All plans →
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Pros / cons */}
        <section className="grid gap-6 md:grid-cols-2">
          {[a, b].map((p) => (
            <div key={p.slug} className="card p-6">
              <h2 className="text-lg font-bold text-ink">{p.name}</h2>
              <div className="mt-3 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-semibold text-accent-600">Pros</div>
                  <ul className="mt-1 space-y-1 text-muted">
                    {p.pros.map((x) => (
                      <li key={x}>+ {x}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="font-semibold text-ink-soft">Cons</div>
                  <ul className="mt-1 space-y-1 text-muted">
                    {p.cons.map((x) => (
                      <li key={x}>– {x}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-xl font-bold tracking-tight text-ink">
            {a.name} vs {b.name} FAQ
          </h2>
          <div className="mt-5">
            <Faq items={faq} />
          </div>
        </section>
      </div>
    </>
  );
}
