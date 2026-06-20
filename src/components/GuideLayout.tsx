import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Faq } from "@/components/Faq";
import { getGuide } from "@/lib/guides";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

export function GuideLayout({
  slug,
  children,
  faq,
}: {
  slug: string;
  children: React.ReactNode;
  faq?: { q: string; a: string }[];
}) {
  const guide = getGuide(slug);
  const title = guide?.title ?? "Guide";
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Guides", path: "/guides" },
    { name: title, path: `/guides/${slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(breadcrumbs),
          ...(faq ? [faqJsonLd(faq)] : []),
        ]}
      />

      <section className="border-b border-line bg-gradient-to-b from-brand-50/50 to-canvas">
        <div className="container-x py-10">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="mt-6 max-w-3xl text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {title}
          </h1>
          {guide && (
            <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-brand-600">
              {guide.readMinutes} min read · Updated June 2026
            </p>
          )}
        </div>
      </section>

      <div className="container-x py-12">
        <div className="mx-auto max-w-3xl">
          <article className="article">{children}</article>

          {faq && (
            <div className="mt-12">
              <h2 className="text-xl font-bold tracking-tight text-ink">
                Frequently asked
              </h2>
              <div className="mt-5">
                <Faq items={faq} />
              </div>
            </div>
          )}

          <div className="mt-12 rounded-card border border-brand-100 bg-brand-50/50 p-6 text-center">
            <h2 className="text-lg font-bold text-ink">
              Ready to compare plans?
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted">
              Pick your destination and see every eSIM provider ranked by price
              per gigabyte.
            </p>
            <Link
              href="/destinations"
              className="mt-4 inline-flex items-center justify-center rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              Browse destinations →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
