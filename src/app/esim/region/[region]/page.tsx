import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { REGION_PAGES, getRegionPage } from "@/data/regions";
import { allDestinationItems } from "@/lib/destinations";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CountryCard } from "@/components/CountryCard";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { usd } from "@/lib/format";
import { canonical, pageMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return REGION_PAGES.map((r) => ({ region: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ region: string }>;
}): Promise<Metadata> {
  const { region: slug } = await params;
  const region = getRegionPage(slug);
  if (!region) return {};
  return pageMetadata({
    title: region.h1,
    description: `${region.blurb} ${region.countrySlugs.length} destinations compared.`,
    path: `/esim/region/${slug}`,
  });
}

export default async function RegionPage({
  params,
}: {
  params: Promise<{ region: string }>;
}) {
  const { region: slug } = await params;
  const region = getRegionPage(slug);
  if (!region) notFound();

  const memberSet = new Set(region.countrySlugs);
  const items = allDestinationItems()
    .filter((d) => memberSet.has(d.slug))
    .sort((a, b) => a.fromPrice - b.fromPrice);

  const fromPrice = items.length ? items[0].fromPrice : 0;
  const cheapest = items.slice(0, 3);

  const faq = [
    {
      q: `Can one eSIM cover all of ${region.name}?`,
      a: `Some providers sell regional eSIMs that work across multiple countries in ${region.name}, which is convenient for multi-country trips. For a single destination, a local country eSIM is usually cheaper. Open any country below to compare both.`,
    },
    {
      q: `How much does an eSIM for ${region.name} cost?`,
      a: `Plans start from around ${usd(fromPrice)} for the cheapest destination in the region. Prices vary by country, so check the specific destination for exact deals.`,
    },
    {
      q: `Which provider is best for ${region.name}?`,
      a: `It depends on the country and how much data you need. Each destination page ranks every provider by price per gigabyte and flags the best value, cheapest and unlimited options.`,
    },
  ];

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: region.name, path: `/esim/region/${slug}` },
  ];

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: region.h1,
    numberOfItems: items.length,
    itemListElement: items.slice(0, 25).map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `eSIM for ${it.name}`,
      url: canonical(`/esim/${it.slug}`),
    })),
  };

  return (
    <>
      <JsonLd
        data={[breadcrumbJsonLd(breadcrumbs), faqJsonLd(faq), itemListJsonLd]}
      />

      <section className="border-b border-line bg-gradient-to-b from-brand-50/50 to-canvas">
        <div className="container-x py-10">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="mt-6 max-w-3xl text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {region.h1}
          </h1>
          <p className="mt-3 max-w-2xl text-muted">{region.blurb}</p>
          <p className="mt-4 text-sm text-muted">
            <span className="font-semibold text-ink-soft">{items.length}</span>{" "}
            destinations · plans from{" "}
            <span className="font-semibold text-ink-soft">{usd(fromPrice)}</span>
          </p>
        </div>
      </section>

      <div className="container-x space-y-12 py-12">
        {cheapest.length > 0 && (
          <section>
            <h2 className="text-xl font-bold tracking-tight text-ink">
              Cheapest data in {region.name}
            </h2>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {cheapest.map((item) => (
                <CountryCard key={item.slug} item={item} />
              ))}
            </div>
          </section>
        )}

        <section>
          <h2 className="text-xl font-bold tracking-tight text-ink">
            All {region.name} destinations
          </h2>
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <CountryCard key={item.slug} item={item} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold tracking-tight text-ink">
            {region.name} eSIM FAQ
          </h2>
          <div className="mt-5">
            <Faq items={faq} />
          </div>
        </section>
      </div>
    </>
  );
}
