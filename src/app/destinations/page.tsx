import type { Metadata } from "next";
import Link from "next/link";
import { DestinationSearch } from "@/components/DestinationSearch";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { allDestinationItems } from "@/lib/destinations";
import { COUNTRIES } from "@/data/countries";
import { FEATURED_REGION_SLUGS, getRegionPage } from "@/data/regions";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "All eSIM destinations: compare plans by country",
  description: `Browse travel eSIM plans for ${COUNTRIES.length} destinations. Search any country to compare Airalo, Holafly, Saily, Nomad and Ubigi by price per gigabyte.`,
  path: "/destinations",
});

export default function DestinationsPage() {
  const items = allDestinationItems();
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <section className="border-b border-line bg-gradient-to-b from-brand-50/50 to-canvas">
        <div className="container-x py-10">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            All eSIM destinations
          </h1>
          <p className="mt-2 max-w-2xl text-muted">
            Search {COUNTRIES.length} destinations and open any country to see a
            full, ranked comparison of every major eSIM provider.
          </p>
        </div>
      </section>

      <section className="container-x pt-12">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
          Browse by region
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {FEATURED_REGION_SLUGS.map((slug) => {
            const r = getRegionPage(slug);
            if (!r) return null;
            return (
              <Link
                key={slug}
                href={`/esim/region/${slug}`}
                className="rounded-full border border-line bg-paper px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:border-brand-200 hover:text-brand-600"
              >
                {r.name === "global travel" ? "Global" : r.name}
              </Link>
            );
          })}
          <Link
            href="/esim/region/global"
            className="rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-600 transition-colors hover:bg-brand-100"
          >
            🌍 Global eSIM
          </Link>
        </div>
      </section>

      <section className="container-x py-12">
        <DestinationSearch items={items} />
      </section>
    </>
  );
}
