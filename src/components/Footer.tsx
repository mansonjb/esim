import Link from "next/link";
import { SITE } from "@/lib/site";
import { POPULAR_COUNTRIES, flagEmoji } from "@/data/countries";
import { PROVIDERS } from "@/data/providers";

export function Footer() {
  const year = 2026;
  return (
    <footer className="mt-20 border-t border-line bg-paper">
      <div className="container-x py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="text-[17px] font-bold text-ink">{SITE.name}</div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              {SITE.tagline}. Independent comparisons, updated for {year}.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
              Top destinations
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {POPULAR_COUNTRIES.slice(0, 6).map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/esim/${c.slug}`}
                    className="text-ink-soft hover:text-brand-600"
                  >
                    {flagEmoji(c.iso2)} eSIM for {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
              Providers
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {PROVIDERS.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/providers/${p.slug}`}
                    className="text-ink-soft hover:text-brand-600"
                  >
                    {p.name} review
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
              Learn
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/guides" className="text-ink-soft hover:text-brand-600">
                  All guides
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/what-is-an-esim"
                  className="text-ink-soft hover:text-brand-600"
                >
                  What is an eSIM?
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/esim-vs-roaming"
                  className="text-ink-soft hover:text-brand-600"
                >
                  eSIM vs roaming
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-ink-soft hover:text-brand-600">
                  Browse all destinations
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-line pt-6 text-xs leading-relaxed text-muted">
          <p>
            <strong className="font-semibold text-ink-soft">
              Affiliate disclosure:
            </strong>{" "}
            {SITE.name} is reader-supported. When you buy through links on our
            site we may earn a commission, at no extra cost to you. This never
            affects our rankings, which are based on price and features.
          </p>
          <p className="mt-3">
            © {year} {SITE.name}. Prices and plans shown are indicative and may
            change. Always confirm the final price and coverage on the
            provider&apos;s site before buying.
          </p>
        </div>
      </div>
    </footer>
  );
}
