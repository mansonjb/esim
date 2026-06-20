export type GuideMeta = {
  slug: string;
  title: string;
  excerpt: string;
  readMinutes: number;
};

export const GUIDES: GuideMeta[] = [
  {
    slug: "what-is-an-esim",
    title: "What is an eSIM and how does it work?",
    excerpt:
      "The plain-English guide to eSIMs: what they are, how to install one, and why travellers are ditching physical SIM cards.",
    readMinutes: 5,
  },
  {
    slug: "esim-vs-roaming",
    title: "eSIM vs roaming: which is cheaper in 2026?",
    excerpt:
      "How travel eSIMs stack up against carrier roaming and local SIM cards on price, speed and convenience.",
    readMinutes: 6,
  },
  {
    slug: "how-much-esim-data",
    title: "How much eSIM data do you need? A simple guide",
    excerpt:
      "Work out the right data bundle for your trip so you never overpay or run out mid-holiday.",
    readMinutes: 4,
  },
];

export function getGuide(slug: string): GuideMeta | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
