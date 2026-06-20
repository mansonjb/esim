import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { COUNTRIES } from "@/data/countries";
import { PROVIDERS } from "@/data/providers";
import { REGION_PAGES } from "@/data/regions";
import { MATCHUPS, matchupSlug } from "@/data/comparisons";
import { GUIDES } from "@/lib/guides";

const LAST_MODIFIED = "2026-06-20";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const at = new Date(LAST_MODIFIED);

  const core: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: at, changeFrequency: "weekly", priority: 1 },
    {
      url: `${base}/destinations`,
      lastModified: at,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/providers`,
      lastModified: at,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/compare`,
      lastModified: at,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/guides`,
      lastModified: at,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const countries: MetadataRoute.Sitemap = COUNTRIES.map((c) => ({
    url: `${base}/esim/${c.slug}`,
    lastModified: at,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const regions: MetadataRoute.Sitemap = REGION_PAGES.map((r) => ({
    url: `${base}/esim/region/${r.slug}`,
    lastModified: at,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const comparisons: MetadataRoute.Sitemap = MATCHUPS.map((m) => ({
    url: `${base}/compare/${matchupSlug(m)}`,
    lastModified: at,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const providers: MetadataRoute.Sitemap = PROVIDERS.map((p) => ({
    url: `${base}/providers/${p.slug}`,
    lastModified: at,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const guides: MetadataRoute.Sitemap = GUIDES.map((g) => ({
    url: `${base}/guides/${g.slug}`,
    lastModified: at,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [
    ...core,
    ...countries,
    ...regions,
    ...comparisons,
    ...providers,
    ...guides,
  ];
}
