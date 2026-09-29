import Link from "next/link";
import { site } from "@/config/site";

type Props = {
  /** Optional override blurb. */
  blurb?: string;
};

export function ContractBox({
  blurb = "Avtalet styr före generella tips. Läs särskilda villkor och husordning innan ni fäster något.",
}: Props) {
  return (
    <aside className="contract-box glass-panel flex flex-col gap-2 px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
      <div className="space-y-1">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-amber-300/90">
          Innan ni börjar
        </p>
        <p className="text-sm leading-snug text-stone-300">{blurb}</p>
      </div>
      <Link
        href={site.contractPath}
        className="shrink-0 text-sm font-medium text-stone-100 underline underline-offset-2 hover:text-white"
      >
        Så läser ni kontraktet →
      </Link>
    </aside>
  );
}
