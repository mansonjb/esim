import type { Metadata } from "next";
import { DestinationSearch } from "@/components/DestinationSearch";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { allDestinationItems } from "@/lib/destinations";
import { COUNTRIES } from "@/data/countries";
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

      <section className="container-x py-12">
        <DestinationSearch items={items} />
      </section>
    </>
  );
}
