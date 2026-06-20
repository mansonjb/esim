import type { Metadata } from "next";
import Link from "next/link";
import { GuideLayout } from "@/components/GuideLayout";
import { getGuide } from "@/lib/guides";
import { pageMetadata } from "@/lib/seo";

const SLUG = "what-is-an-esim";
const guide = getGuide(SLUG)!;

export const metadata: Metadata = pageMetadata({
  title: `${guide.title}`,
  description: guide.excerpt,
  path: `/guides/${SLUG}`,
});

const FAQ = [
  {
    q: "Does an eSIM replace my normal SIM?",
    a: "No. An eSIM sits alongside your physical SIM, so your home number stays active for calls and texts while the eSIM handles data abroad.",
  },
  {
    q: "Can I reuse an eSIM on my next trip?",
    a: "You can usually top up the same eSIM for the same destination, or install a new plan for a different country. Many providers let you store several eSIMs on one phone.",
  },
];

export default function Page() {
  return (
    <GuideLayout slug={SLUG} faq={FAQ}>
      <p>
        An eSIM (embedded SIM) is a small chip built into your phone that does
        the job of a traditional plastic SIM card, but it is programmed by
        software instead of being swapped by hand. For travellers, that means
        you can buy a local data plan online and install it in minutes, without
        going to a shop or waiting for anything in the post.
      </p>

      <h2>How an eSIM actually works</h2>
      <p>
        When you buy a travel eSIM, the provider sends you a QR code. You scan
        it in your phone&apos;s settings, and your phone downloads the carrier
        profile over the internet. From that moment your phone can connect to a
        mobile network in your destination, exactly like a local SIM would, but
        without the physical card.
      </p>
      <p>
        Because the profile is digital, you can keep several on one device and
        switch between them. Most modern phones let you run your home SIM and a
        travel eSIM at the same time, so you stay reachable on your usual number
        while paying local data rates.
      </p>

      <h2>Why travellers switched to eSIMs</h2>
      <ul>
        <li>
          <strong>Instant setup.</strong> Buy before you fly and you land with
          working data, no airport SIM queues.
        </li>
        <li>
          <strong>No roaming bills.</strong> You pay a fixed price up front
          instead of risking surprise charges from your home carrier.
        </li>
        <li>
          <strong>Keep your number.</strong> Calls and texts still reach you on
          your normal SIM.
        </li>
        <li>
          <strong>Nothing to lose.</strong> There is no tiny card to drop or
          misplace.
        </li>
      </ul>

      <h2>Does your phone support eSIM?</h2>
      <p>
        Most phones released from 2018 onward support eSIM, including iPhone XS
        and newer, Google Pixel 3 and newer, and recent Samsung Galaxy S and Z
        models. Two things to check before you buy: your phone must support eSIM,
        and it must be carrier-unlocked. If you bought your phone outright or it
        is a few years into a contract, it is very likely unlocked already.
      </p>

      <h2>How to get started</h2>
      <p>
        The only real decision is which plan to buy. Prices vary a lot between
        providers, so it pays to compare. Start with our{" "}
        <Link href="/destinations">destination comparisons</Link> to see every
        provider ranked by price per gigabyte, or read our{" "}
        <Link href="/guides/how-much-esim-data">data size guide</Link> if you are
        not sure how big a bundle you need.
      </p>
    </GuideLayout>
  );
}
