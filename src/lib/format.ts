export function usd(n: number): string {
  return `$${n.toFixed(2)}`;
}

export function usdShort(n: number): string {
  return Number.isInteger(n) ? `$${n}` : `$${n.toFixed(2)}`;
}
