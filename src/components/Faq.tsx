export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line overflow-hidden rounded-card border border-line bg-paper">
      {items.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex items-center justify-between gap-4 px-5 py-4 font-semibold text-ink-soft">
            <span>{item.q}</span>
            <span className="shrink-0 text-muted transition-transform group-open:rotate-45">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M12 5v14M5 12h14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </summary>
          <div className="px-5 pb-5 text-[15px] leading-relaxed text-muted">
            {item.a}
          </div>
        </details>
      ))}
    </div>
  );
}
