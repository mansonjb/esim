export function StarRating({
  value,
  showValue = true,
}: {
  value: number;
  showValue?: boolean;
}) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="inline-flex" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = i < full;
          const isHalf = i === full && half;
          return (
            <svg key={i} width="15" height="15" viewBox="0 0 24 24" className="-mr-0.5">
              <defs>
                <linearGradient id={`half-${i}`}>
                  <stop offset="50%" stopColor="#f59e0b" />
                  <stop offset="50%" stopColor="#e6e8ef" />
                </linearGradient>
              </defs>
              <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z"
                fill={filled ? "#f59e0b" : isHalf ? `url(#half-${i})` : "#e6e8ef"}
              />
            </svg>
          );
        })}
      </span>
      {showValue && (
        <span className="text-sm font-semibold text-ink-soft">
          {value.toFixed(1)}
        </span>
      )}
    </span>
  );
}
