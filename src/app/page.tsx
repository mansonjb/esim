import type { Metadata } from "next";
import Link from "next/link";
import { DestinationSearch } from "@/components/DestinationSearch";
import { ProviderCard } from "@/components/ProviderCard";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { allDestinationItems, popularDestinationItems } from "@/lib/destinations";
import { PROVIDERS, getProvider } from "@/data/providers";
import { COUNTRIES } from "@/data/countries";
import { MATCHUPS, matchupSlug } from "@/data/comparisons";
import { FEATURED_REGION_SLUGS, getRegionPage } from "@/data/regions";
import { SITE } from "@/lib/site";
import { pageMetadata, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: `${SITE.name} — ${SITE.tagline}`,
  description: SITE.description,
  path: "/",
});

const HOME_FAQ = [
  {
    q: "What is a travel eSIM?",
    a: "A travel eSIM is a digital SIM you install by scanning a QR code, with no physical card. It gives you mobile data the moment you land, while keeping your normal SIM and phone number active for calls and texts.",
  },
  {
    q: "Will an eSIM work on my phone?",
    a: "Most phones from 2018 onward support eSIM, including iPhone XS and newer, Google Pixel 3 and newer, and recent Samsung Galaxy S and Z models. Your phone also needs to be carrier-unlocked. Check the provider's compatibility list before buying.",
  },
  {
    q: "How do I choose the right plan?",
    a: "Match the data amount to your trip: 1 to 3GB for a short city break, 5 to 10GB for a one to two week holiday, or an unlimited plan if you stream and tether a lot. Then compare the price per gigabyte across providers, which is exactly what we do on every destination page.",
  },
  {
    q: "Is buying through your links more expensive?",
    a: "No. You pay the same price as going direct. We may earn a commission from the provider, which funds the site and never changes our rankings.",
  },
];

export default function HomePage() {
  const items = allDestinationItems();
  const popular = popularDestinationItems(10);

  return (
    <>
      <JsonLd data={faqJsonLd(HOME_FAQ)} />

      {/* Hero */}
      <section className="border-b border-line bg-gradient-to-b from-brand-50/60 to-canvas">
        <div className="container-x py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-paper px-3 py-1 text-xs font-semibold text-brand-600">
              Updated June 2026 · {COUNTRIES.length} destinations · {PROVIDERS.length} providers
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
              Compare travel eSIMs and stop overpaying for data
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted">
              Side-by-side prices from Airalo, Holafly, Saily, Nomad and Ubigi.
              Real cost per gigabyte, unlimited options and the best-value pick
              for every destination. Pick a country to get connected before you
              land.
            </p>
          </div>

          <div className="mx-auto mt-9 max-w-3xl">
            <DestinationSearch items={items} />
          </div>

          {popular.length > 0 && (
            <div className="mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-2 text-sm">
              <span className="text-muted">Popular:</span>
              {popular.map((c) => (
                <Link
                  key={c.slug}
                  href={`/esim/${c.slug}`}
                  className="rounded-full border border-line bg-paper px-3 py-1 font-medium text-ink-soft transition-colors hover:border-brand-200 hover:text-brand-600"
                >
                  {c.flag} {c.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* How it works */}
      <section className="container-x py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-ink">
          Connected in three steps
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              n: "1",
              t: "Compare",
              d: "Choose your destination and compare every plan by price per gigabyte, validity and hotspot support.",
            },
            {
              n: "2",
              t: "Buy in minutes",
              d: "Check out on the provider's site. You get a QR code by email instantly, no shipping and no store queue.",
            },
            {
              n: "3",
              t: "Scan and go",
              d: "Scan the QR code, switch the eSIM on when you land, and you have data while your home number stays active.",
            },
          ].map((s) => (
            <div key={s.n} className="card p-6">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-600 text-base font-bold text-white">
                {s.n}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-ink">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Providers */}
      <section className="border-y border-line bg-paper">
        <div className="container-x py-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-ink">
                The providers we compare
              </h2>
              <p className="mt-2 max-w-xl text-muted">
                We track the leading eSIM brands that consistently offer the
                best coverage, prices or unlimited data.
              </p>
            </div>
            <Link
              href="/providers"
              className="hidden shrink-0 text-sm font-semibold text-brand-600 hover:text-brand-700 sm:inline"
            >
              Compare all →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROVIDERS.slice(0, 3).map((p) => (
              <ProviderCard key={p.slug} provider={p} />
            ))}
          </div>
          <div className="mt-6 text-center sm:hidden">
            <Link href="/providers" className="text-sm font-semibold text-brand-600">
              Compare all providers →
            </Link>
          </div>
        </div>
      </section>

      {/* Comparisons + regions */}
      <section className="container-x py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-ink">
              Popular comparisons
            </h2>
            <p className="mt-2 text-muted">
              Settle the matchups travellers search most.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {MATCHUPS.slice(0, 6).map((m) => {
                const a = getProvider(m.a)!;
                const b = getProvider(m.b)!;
                return (
                  <Link
                    key={matchupSlug(m)}
                    href={`/compare/${matchupSlug(m)}`}
                    className="rounded-card border border-line bg-paper px-4 py-3 text-sm font-semibold text-ink-soft transition-colors hover:border-brand-200 hover:text-brand-600"
                  >
                    {a.name} <span className="text-muted">vs</span> {b.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-ink">
              Browse by region
            </h2>
            <p className="mt-2 text-muted">
              One trip, many countries? Start with a region.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {FEATURED_REGION_SLUGS.slice(0, 10).map((slug) => {
                const r = getRegionPage(slug);
                if (!r) return null;
                return (
                  <Link
                    key={slug}
                    href={`/esim/region/${slug}`}
                    className="rounded-full border border-line bg-paper px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:border-brand-200 hover:text-brand-600"
                  >
                    {r.name}
                  </Link>
                );
              })}
              <Link
                href="/esim/region/global"
                className="rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-600 hover:bg-brand-100"
              >
                🌍 Global
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-ink">
            eSIM questions, answered
          </h2>
          <div className="mt-6">
            <Faq items={HOME_FAQ} />
          </div>
        </div>
      </section>
    </>
  );
}
