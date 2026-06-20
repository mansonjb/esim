import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { GUIDES } from "@/lib/guides";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Travel eSIM guides: setup, savings & how-tos",
  description:
    "Practical eSIM guides for travellers: what an eSIM is, eSIM vs roaming, and how much data you really need. Clear, jargon-free explainers.",
  path: "/guides",
});

export default function GuidesIndex() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Guides", path: "/guides" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <section className="border-b border-line bg-gradient-to-b from-brand-50/50 to-canvas">
        <div className="container-x py-10">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            eSIM guides
          </h1>
          <p className="mt-2 max-w-2xl text-muted">
            Everything you need to buy and use a travel eSIM with confidence.
          </p>
        </div>
      </section>

      <section className="container-x py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {GUIDES.map((g) => (
            <Link
              key={g.slug}
              href={`/guides/${g.slug}`}
              className="group flex flex-col rounded-card border border-line bg-paper p-6 transition-all hover:border-brand-200 hover:shadow-sm"
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                {g.readMinutes} min read
              </div>
              <h2 className="mt-2 text-lg font-bold text-ink group-hover:text-brand-600">
                {g.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {g.excerpt}
              </p>
              <span className="mt-4 text-sm font-semibold text-brand-600">
                Read guide →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
