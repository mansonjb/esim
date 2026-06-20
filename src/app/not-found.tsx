import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x py-24 text-center">
      <div className="text-6xl font-extrabold tracking-tight text-brand-600">
        404
      </div>
      <h1 className="mt-4 text-2xl font-bold text-ink">Page not found</h1>
      <p className="mx-auto mt-2 max-w-md text-muted">
        That page has roamed off. Let&apos;s get you back to comparing eSIM
        plans.
      </p>
      <div className="mt-6 flex items-center justify-center gap-3">
        <Link
          href="/"
          className="rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
        >
          Go home
        </Link>
        <Link
          href="/destinations"
          className="rounded-lg border border-line px-5 py-2.5 text-sm font-semibold text-ink-soft hover:border-brand-200 hover:text-brand-600"
        >
          Browse destinations
        </Link>
      </div>
    </section>
  );
}
