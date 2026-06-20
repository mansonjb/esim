import type { Metadata } from "next";
import Link from "next/link";
import { GuideLayout } from "@/components/GuideLayout";
import { getGuide } from "@/lib/guides";
import { pageMetadata } from "@/lib/seo";

const SLUG = "how-much-esim-data";
const guide = getGuide(SLUG)!;

export const metadata: Metadata = pageMetadata({
  title: `${guide.title}`,
  description: guide.excerpt,
  path: `/guides/${SLUG}`,
});

const FAQ = [
  {
    q: "What uses the most data when travelling?",
    a: "Video streaming and video calls are by far the heaviest. Maps, messaging, email and social browsing use relatively little, so if you avoid streaming on mobile data a smaller bundle goes a long way.",
  },
  {
    q: "What if I run out of data?",
    a: "Most providers let you top up the same eSIM, or you can install a second plan. It is usually cheaper to buy a slightly larger bundle up front than to top up repeatedly.",
  },
];

export default function Page() {
  return (
    <GuideLayout slug={SLUG} faq={FAQ}>
      <p>
        Picking the right data bundle is the difference between overpaying and
        running dry on day four. The good news: with a few rough numbers you can
        size your eSIM in under a minute.
      </p>

      <h2>A simple rule of thumb</h2>
      <ul>
        <li>
          <strong>1 to 3GB:</strong> a short city break where you mostly use
          maps, messaging and the occasional search. Light users on a week can
          also manage here.
        </li>
        <li>
          <strong>5 to 10GB:</strong> the sweet spot for one to two weeks with
          everyday social media, photos and some browsing. This is what most
          travellers should buy.
        </li>
        <li>
          <strong>Unlimited:</strong> choose this if you stream video, take video
          calls, or tether a laptop for work. Day-based unlimited plans remove
          the maths entirely.
        </li>
      </ul>

      <h2>What typical activities cost</h2>
      <p>
        As a guide, an hour of maps navigation uses a few hundred megabytes a
        day, messaging and email are negligible, and an hour of social scrolling
        is roughly 0.5 to 1GB depending on autoplay video. The big one is
        streaming: an hour of HD video can burn through 1 to 3GB on its own.
      </p>

      <h2>How to keep data use down</h2>
      <ul>
        <li>Download maps, playlists and shows over hotel Wi-Fi before you head out.</li>
        <li>Set streaming apps to a lower quality on mobile data.</li>
        <li>Turn off background app refresh for apps you do not need live.</li>
      </ul>

      <h2>Compare value, not just price</h2>
      <p>
        Two plans at the same price can offer very different amounts of data, so
        the number that matters is price per gigabyte. Every one of our{" "}
        <Link href="/destinations">destination pages</Link> shows it, and flags
        the best-value plan automatically. If you want unlimited, our comparison
        also highlights the cheapest unlimited option for each country.
      </p>
    </GuideLayout>
  );
}
