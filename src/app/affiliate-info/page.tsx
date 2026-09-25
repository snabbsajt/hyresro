import type { Metadata } from "next";
import { Disclosure } from "@/components/Disclosure";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Affiliate-information",
  description:
    "Så fungerar affiliate-länkar på Hyresro. Information enligt Marknadsföringslagen.",
};

export default function AffiliateInfoPage() {
  return (
    <article className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight text-stone-900">
        Affiliate-information
      </h1>
      <div className="space-y-4 leading-relaxed text-stone-700">
        <Disclosure />
        <p>
          När ni klickar på en produktlänk och handlar hos butiken kan{" "}
          {site.name} få en provision. Priset för er ändras inte.
        </p>
        <p>
          Vi väljer produkter utifrån vad som är praktiskt i hyresrätt — inte
          utifrån högst provision. Länkar märks med{" "}
          <code className="rounded bg-stone-200/70 px-1 text-sm">
            rel=&quot;sponsored nofollow&quot;
          </code>
          .
        </p>
        <p>
          Frågor:{" "}
          <a
            href={`mailto:${site.email}`}
            className="text-sage-800 underline underline-offset-2"
          >
            {site.email}
          </a>
        </p>
      </div>
    </article>
  );
}
