import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROVIDERS, getProvider } from "@/data/providers";
import { POPULAR_COUNTRIES, flagEmoji } from "@/data/countries";
import { getCountryPlans } from "@/data/plans";
import { StarRating } from "@/components/StarRating";
import { Pill } from "@/components/Badge";
import { Faq } from "@/components/Faq";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AffiliateButton } from "@/components/AffiliateButton";
import { JsonLd } from "@/components/JsonLd";
import { affiliateHref } from "@/lib/affiliate";
import { usd } from "@/lib/format";
import {
  pageMetadata,
  breadcrumbJsonLd,
  faqJsonLd,
} from "@/lib/seo";

export function generateStaticParams() {
  return PROVIDERS.map((p) => ({ provider: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ provider: string }>;
}): Promise<Metadata> {
  const { provider: slug } = await params;
  const provider = getProvider(slug);
  if (!provider) return {};
  return pageMetadata({
    title: `${provider.name} eSIM review (2026): coverage, prices & verdict`,
    description: `${provider.name} review: ${provider.tagline.toLowerCase()}. Coverage in ${provider.coverage}+ countries, rated ${provider.rating}/5. See pros, cons and example prices.`,
    path: `/providers/${slug}`,
  });
}

export default async function ProviderPage({
  params,
}: {
  params: Promise<{ provider: string }>;
}) {
  const { provider: slug } = await params;
  const provider = getProvider(slug);
  if (!provider) notFound();

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Providers", path: "/providers" },
    { name: provider.name, path: `/providers/${slug}` },
  ];

  // Example prices: this provider's best data plan (>=3GB) in popular countries.
  const examples = POPULAR_COUNTRIES.slice(0, 8)
    .map((c) => {
      const plans = getCountryPlans(c.slug).filter((p) => p.provider === slug);
      const dataPlan =
        plans
          .filter((p) => p.dataGb !== null && p.dataGb >= 3)
          .sort((a, b) => (a.pricePerGb ?? 0) - (b.pricePerGb ?? 0))[0] ??
        plans[0];
      return dataPlan ? { country: c, plan: dataPlan } : null;
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);

  const faq = [
    {
      q: `Is ${provider.name} a good eSIM?`,
      a: `${provider.name} is ${provider.tagline.toLowerCase()}, rated ${provider.rating}/5 in our review. ${provider.blurb}`,
    },
    {
      q: `How many countries does ${provider.name} cover?`,
      a: `${provider.name} offers data plans in around ${provider.coverage}+ countries and territories, including all the popular travel destinations.`,
    },
    {
      q: `Does ${provider.name} support hotspot and tethering?`,
      a: provider.features.hotspot
        ? `Yes, ${provider.name} supports hotspot and tethering on its data plans, though some unlimited options may limit it.`
        : `Hotspot support on ${provider.name} can be limited depending on the plan, so check the plan details before buying.`,
    },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbJsonLd(breadcrumbs), faqJsonLd(faq)]} />

      <section className="border-b border-line bg-gradient-to-b from-brand-50/50 to-canvas">
        <div className="container-x py-10">
          <Breadcrumbs items={breadcrumbs} />
          <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                {provider.name} eSIM review
              </h1>
              <p className="mt-2 max-w-2xl text-muted">{provider.blurb}</p>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <StarRating value={provider.rating} />
                <Pill tone="brand">{provider.coverage}+ countries</Pill>
                {provider.styles.includes("unlimited") && (
                  <Pill tone="accent">Unlimited available</Pill>
                )}
              </div>
            </div>
            <div className="shrink-0">
              <AffiliateButton href={affiliateHref(provider.slug)} size="lg">
                Visit {provider.name}
              </AffiliateButton>
            </div>
          </div>
        </div>
      </section>

      <div className="container-x space-y-12 py-12">
        {/* Pros / cons */}
        <section className="grid gap-6 md:grid-cols-2">
          <div className="card p-6">
            <h2 className="text-lg font-bold text-accent-600">What we like</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {provider.pros.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="text-accent-600">+</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-6">
            <h2 className="text-lg font-bold text-ink-soft">Watch outs</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {provider.cons.map((c) => (
                <li key={c} className="flex gap-2">
                  <span className="text-muted">–</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Example prices */}
        {examples.length > 0 && (
          <section>
            <h2 className="text-xl font-bold tracking-tight text-ink">
              {provider.name} example prices
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted">
              Indicative {provider.name} plans in popular destinations. Open a
              country to compare it against every other provider.
            </p>
            <div className="mt-5 overflow-hidden rounded-card border border-line bg-paper">
              <table className="w-full text-left text-sm">
                <thead className="bg-canvas text-xs uppercase tracking-wider text-muted">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Destination</th>
                    <th className="px-3 py-3 font-semibold">Plan</th>
                    <th className="px-3 py-3 font-semibold">Price</th>
                    <th className="px-5 py-3 text-right font-semibold">Compare</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {examples.map(({ country, plan }) => (
                    <tr key={country.slug} className="hover:bg-canvas/60">
                      <td className="px-5 py-3 font-medium text-ink-soft">
                        {flagEmoji(country.iso2)} {country.name}
                      </td>
                      <td className="px-3 py-3 text-muted">
                        {plan.dataLabel} / {plan.days}d
                      </td>
                      <td className="px-3 py-3 font-bold text-ink">
                        {usd(plan.price)}
                      </td>
                      <td className="px-5 py-3 text-right">
                        <Link
                          href={`/esim/${country.slug}`}
                          className="text-sm font-semibold text-brand-600 hover:text-brand-700"
                        >
                          Compare →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section>
          <h2 className="text-xl font-bold tracking-tight text-ink">
            {provider.name} FAQ
          </h2>
          <div className="mt-5">
            <Faq items={faq} />
          </div>
        </section>
      </div>
    </>
  );
}
