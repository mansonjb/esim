import type { Metadata } from "next";
import Link from "next/link";
import { GuideLayout } from "@/components/GuideLayout";
import { getGuide } from "@/lib/guides";
import { pageMetadata } from "@/lib/seo";

const SLUG = "esim-vs-roaming";
const guide = getGuide(SLUG)!;

export const metadata: Metadata = pageMetadata({
  title: `${guide.title}`,
  description: guide.excerpt,
  path: `/guides/${SLUG}`,
});

const FAQ = [
  {
    q: "Is an eSIM always cheaper than roaming?",
    a: "For data, almost always. Carrier roaming day passes typically cost several times more per day than a travel eSIM. The exception is very short trips inside your carrier's free-roaming zone, where roaming can be fine.",
  },
  {
    q: "Should I use an eSIM or buy a local SIM at the airport?",
    a: "A travel eSIM is usually faster and comparable on price, with the bonus that you are connected before you land. A local SIM can occasionally be cheaper for very long stays or huge data needs.",
  },
];

export default function Page() {
  return (
    <GuideLayout slug={SLUG} faq={FAQ}>
      <p>
        When you travel, you have three ways to get mobile data: turn on roaming
        with your home carrier, buy a local SIM when you arrive, or install a
        travel eSIM before you go. Here is how they compare on the things that
        actually matter: price, speed and hassle.
      </p>

      <h2>Roaming: convenient but pricey</h2>
      <p>
        Roaming is the most convenient option because you do nothing, your phone
        just works. The catch is the price. Outside free-roaming zones, carriers
        often charge a daily pass that can add up fast over a two-week trip, or
        worse, per-megabyte rates that lead to bill shock. Roaming makes sense
        for short hops within a region your plan already covers, and little else.
      </p>

      <h2>Local SIM: cheap but fiddly</h2>
      <p>
        Buying a SIM card on arrival can be cheap, especially for long stays. But
        it means finding a store, showing ID in some countries, swapping out your
        home SIM (and keeping it safe), and losing access to your normal number
        while you use it. You also arrive disconnected, which is exactly when you
        most want a map.
      </p>

      <h2>Travel eSIM: the middle ground most travellers pick</h2>
      <p>
        A travel eSIM gives you most of the price advantage of a local SIM with
        most of the convenience of roaming. You buy online, install in minutes,
        and land already connected. Your home number stays active for calls and
        texts. For the vast majority of trips, it is the best balance of cost and
        convenience, which is why it has become the default for frequent
        travellers.
      </p>

      <h2>The bottom line on price</h2>
      <ul>
        <li>
          <strong>Short trip in a free-roaming zone:</strong> roaming is fine.
        </li>
        <li>
          <strong>Most international trips:</strong> a travel eSIM wins on price
          and convenience.
        </li>
        <li>
          <strong>Very long stay or heavy data:</strong> compare a travel eSIM
          unlimited plan against a local SIM.
        </li>
      </ul>

      <p>
        The only way to know the real saving is to check prices for your
        destination. Open your country on our{" "}
        <Link href="/destinations">comparison pages</Link> to see every eSIM plan
        ranked, or compare the{" "}
        <Link href="/providers">providers head to head</Link> first.
      </p>
    </GuideLayout>
  );
}
