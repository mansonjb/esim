import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COUNTRIES, getCountry, flagEmoji, countriesByRegion } from "@/data/countries";
import { getCountryPlans, getCountrySummary } from "@/data/plans";
import { getProvider } from "@/data/providers";
import { PlanHighlights } from "@/components/PlanHighlights";
import { PlanTable } from "@/components/PlanTable";
import { Faq } from "@/components/Faq";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CountryCard } from "@/components/CountryCard";
import { AffiliateButton } from "@/components/AffiliateButton";
import { JsonLd } from "@/components/JsonLd";
import { usd } from "@/lib/format";
import { allDestinationItems } from "@/lib/destinations";
import { regionToSlug } from "@/data/regions";
import {
  pageMetadata,
  breadcrumbJsonLd,
  faqJsonLd,
  offersJsonLd,
} from "@/lib/seo";

export function generateStaticParams() {
  return COUNTRIES.map((c) => ({ country: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>;
}): Promise<Metadata> {
  const { country: slug } = await params;
  const country = getCountry(slug);
  if (!country) return {};
  const summary = getCountrySummary(slug);
  return pageMetadata({
    title: `Best eSIM for ${country.name} (2026): Compare Plans & Prices`,
    description: `Compare ${summary.providerCount} travel eSIM providers for ${country.name}. Plans from ${usd(
      summary.fromPrice,
    )}, with the best value, cheapest and unlimited picks ranked by price per GB.`,
    path: `/esim/${slug}`,
  });
}

function buildFaq(countryName: string, networks: string[]) {
  return [
    {
      q: `Which eSIM is best for ${countryName}?`,
      a: `It depends on how much data you need. For most travellers the best-value plan offers the lowest price per gigabyte, while a day-based unlimited plan suits heavy streamers. Our comparison table for ${countryName} ranks every plan so you can pick in seconds.`,
    },
    {
      q: `How much mobile data do I need in ${countryName}?`,
      a: `As a rough guide: 1 to 3GB covers maps, messaging and light browsing for a short trip; 5 to 10GB is comfortable for one to two weeks with social media and some streaming; choose unlimited if you tether a laptop or stream daily.`,
    },
    {
      q: `Will my eSIM work across ${countryName}?`,
      a: `Yes. eSIM providers connect to leading local networks such as ${networks.join(
        ", ",
      )}, giving you the same 4G and 5G coverage as a local SIM in cities and most populated areas.`,
    },
    {
      q: `Can I share my eSIM data as a hotspot in ${countryName}?`,
      a: `Most data plans allow tethering, so you can share your connection with a laptop or travel companion. Some unlimited plans limit hotspot use, which we flag in the comparison table.`,
    },
    {
      q: `Do I keep my phone number while using an eSIM in ${countryName}?`,
      a: `Yes. A travel eSIM adds data only, so your home SIM stays active for calls and texts on your usual number. You simply set the eSIM as your data line while abroad.`,
    },
  ];
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country: slug } = await params;
  const country = getCountry(slug);
  if (!country) notFound();

  const plans = getCountryPlans(slug);
  const summary = getCountrySummary(slug);
  const faq = buildFaq(country.name, country.networks);

  const related = countriesByRegion(country.region)
    .filter((c) => c.slug !== slug)
    .slice(0, 6);
  const relatedItems = allDestinationItems().filter((d) =>
    related.some((r) => r.slug === d.slug),
  );

  // Providers that actually appear in this country's plan list.
  const providerSlugs = Array.from(new Set(plans.map((p) => p.provider)));

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: country.name, path: `/esim/${slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(breadcrumbs),
          faqJsonLd(faq),
          offersJsonLd({
            name: `Travel eSIM plans for ${country.name}`,
            description: `Travel eSIM data plans for ${country.name} compared across ${summary.providerCount} providers.`,
            lowPrice: summary.fromPrice,
            offerCount: plans.length,
          }),
        ]}
      />

      {/* Header */}
      <section className="border-b border-line bg-gradient-to-b from-brand-50/50 to-canvas">
        <div className="container-x py-10">
          <Breadcrumbs items={breadcrumbs} />
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <span className="text-5xl leading-none">{flagEmoji(country.iso2)}</span>
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                Best eSIM for {country.name} <span className="text-muted">(2026)</span>
              </h1>
              <p className="mt-1 text-muted">
                {summary.providerCount} providers compared · plans from{" "}
                <span className="font-semibold text-ink-soft">
                  {usd(summary.fromPrice)}
                </span>
                {summary.unlimitedFrom !== null && (
                  <> · unlimited from {usd(summary.unlimitedFrom)}</>
                )}
              </p>
            </div>
          </div>

          <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-muted">
            Travelling to {country.name}? A travel eSIM is the cheapest and
            fastest way to get online the moment you land, with no roaming bills
            and no hunting for a local SIM. We compared every major provider for{" "}
            {country.name} below.
            {summary.bestValue && (
              <>
                {" "}
                The best value right now is{" "}
                <span className="font-semibold text-ink-soft">
                  {summary.bestValue.providerName}
                </span>{" "}
                at {usd(summary.bestValue.pricePerGb ?? 0)} per gigabyte.
              </>
            )}
          </p>
        </div>
      </section>

      <div className="container-x space-y-14 py-12">
        {/* Highlights */}
        <section>
          <h2 className="text-xl font-bold tracking-tight text-ink">
            Top picks for {country.name}
          </h2>
          <div className="mt-5">
            <PlanHighlights plans={plans} />
          </div>
        </section>

        {/* Full comparison */}
        <section>
          <h2 className="text-xl font-bold tracking-tight text-ink">
            All {country.name} eSIM plans compared
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            Sorted by price. Per-gigabyte cost shown so you can compare data
            plans against unlimited day passes fairly.
          </p>
          <div className="mt-5">
            <PlanTable plans={plans} />
          </div>
        </section>

        {/* Setup + networks */}
        <section className="grid gap-8 lg:grid-cols-2">
          <div className="card p-6">
            <h2 className="text-lg font-bold text-ink">
              How to set up your {country.name} eSIM
            </h2>
            <ol className="mt-4 space-y-3 text-sm text-muted">
              {[
                "Check your phone supports eSIM and is carrier-unlocked.",
                "Buy a plan above and receive a QR code by email instantly.",
                `Before or after you arrive in ${country.name}, scan the QR code in your phone settings.`,
                "Turn the eSIM on as your data line and enable data roaming for it.",
              ].map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-50 text-xs font-bold text-brand-600">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="card p-6">
            <h2 className="text-lg font-bold text-ink">
              Networks &amp; coverage in {country.name}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              eSIM providers roam onto {country.name}&apos;s leading mobile
              networks, so you get strong 4G and 5G coverage across cities and
              most travel areas. The main carriers are:
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {country.networks.map((n) => (
                <span
                  key={n}
                  className="rounded-full border border-line bg-canvas px-3 py-1 text-sm font-medium text-ink-soft"
                >
                  {n}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted">
              Coverage in remote or rural areas can vary by provider. Check the
              provider&apos;s coverage map for {country.name} before you travel.
            </p>
          </div>
        </section>

        {/* Providers available */}
        <section>
          <h2 className="text-xl font-bold tracking-tight text-ink">
            Providers available in {country.name}
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {providerSlugs.map((ps) => {
              const provider = getProvider(ps);
              if (!provider) return null;
              return (
                <div key={ps} className="card flex flex-col p-5">
                  <div className="flex items-center justify-between">
                    <Link
                      href={`/providers/${ps}`}
                      className="font-bold text-ink hover:text-brand-600"
                    >
                      {provider.name}
                    </Link>
                    <span className="text-sm font-semibold text-amber-600">
                      ★ {provider.rating.toFixed(1)}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted">{provider.tagline}</p>
                  <div className="mt-4">
                    <AffiliateButton
                      href={`/go/${ps}?c=${country.iso2}`}
                      size="sm"
                      variant="soft"
                    >
                      View {provider.name} plans
                    </AffiliateButton>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-xl font-bold tracking-tight text-ink">
            {country.name} eSIM FAQ
          </h2>
          <div className="mt-5">
            <Faq items={faq} />
          </div>
        </section>

        {/* Related */}
        {relatedItems.length > 0 && (
          <section>
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-xl font-bold tracking-tight text-ink">
                More eSIM destinations in {country.region}
              </h2>
              <Link
                href={`/esim/region/${regionToSlug(country.region)}`}
                className="shrink-0 text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                View all →
              </Link>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {relatedItems.map((item) => (
                <CountryCard key={item.slug} item={item} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
