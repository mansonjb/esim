# RoamCaptain

Programmatic travel-eSIM **comparison** site. One page per destination, every
major provider ranked by real price-per-gigabyte, monetized through affiliate
links. Built to be the kind of structured comparator that survives AI search:
the value is the up-to-date data table, not a generic listicle.

## Stack

- **Next.js 15** (App Router) + **React 19**
- **Tailwind CSS v4** (theme tokens in `src/app/globals.css`)
- Fully **static (SSG)** destination / provider / guide pages, plus one dynamic
  `/go/<provider>` affiliate redirector
- **No database** — all data lives in typed files under `src/data`

## Quick start

```bash
npm install
npm run dev        # http://localhost:3015
npm run build      # production build (prerenders every page)
npm run start
```

## How it's wired

| File | Role |
| --- | --- |
| `src/data/countries.ts` | Destinations. **1 entry = 1 page** at `/esim/<slug>`. |
| `src/data/providers.ts` | eSIM brands, editorial ratings, pros/cons. |
| `src/data/plans.ts` | Plan templates + the ranking engine (price/GB, value badges). |
| `src/lib/affiliate.ts` | Outbound link routing through `/go/<provider>`. |
| `src/lib/seo.ts` | Metadata + JSON-LD builders. |

Everything else (search, sitemap, internal links, related destinations) derives
from those files automatically.

## Adding a destination

Append one row to `COUNTRIES` in `src/data/countries.ts`:

```ts
{ slug: "peru", name: "Peru", iso2: "PE", region: "South America",
  priceTier: 0.9, networks: ["Claro", "Movistar", "Entel"] }
```

The page, comparison table, sitemap entry, search and internal links all appear
with no further work.

## Affiliate links

Every "View deal" button points at `/go/<provider>`, which 302-redirects to the
real destination. Set your partner links in `.env.local` (see `.env.example`):

```
NEXT_PUBLIC_AFF_AIRALO=https://airalo.pxf.io/xxxx
NEXT_PUBLIC_AFF_HOLAFLY=https://holafly.sjv.io/xxxx
```

Until set, links fall back to the provider homepages so nothing is ever dead.

## SEO

- `generateMetadata` + canonical URLs on every route
- JSON-LD: Organization, WebSite, BreadcrumbList, FAQPage, AggregateOffer
- Auto `sitemap.xml` and `robots.txt` (which disallows `/go/`)

## Deploy (Vercel)

Import the repo — framework auto-detected. Set `NEXT_PUBLIC_SITE_URL` and the
affiliate env vars in project settings.

## Pricing data

Plan prices in `src/data/plans.ts` are realistic **seed** values: a small set of
per-provider templates scaled by each country's `priceTier`. For production
accuracy, swap `TEMPLATES` for a live affiliate price feed — the ranking logic,
pages and badges keep working unchanged.
