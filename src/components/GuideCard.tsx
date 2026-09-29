import Link from "next/link";

type Props = {
  href: string;
  title: string;
  blurb: string;
  className?: string;
  /** Small uppercase badge — default "Guide". Use "Lösning" for problem hubs. */
  badge?: string;
  /** Bottom CTA text — default "Läs guide". */
  cta?: string;
};

/** Glass guide/problem entry — clearly “läs”, not a product/buy card. */
export function GuideCard({
  href,
  title,
  blurb,
  className,
  badge = "Guide",
  cta = "Läs guide",
}: Props) {
  return (
    <Link
      href={href}
      className={[
        "glass-panel group flex flex-col gap-2 px-5 py-5 sm:py-6 transition-colors hover:border-white/30",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-stone-500">
        {badge}
      </span>
      <span className="font-sans text-lg font-semibold leading-snug text-stone-100 group-hover:text-white">
        {title}
      </span>
      <span className="text-sm leading-snug text-stone-400">{blurb}</span>
      <span className="mt-1 text-sm font-medium text-stone-300 underline underline-offset-2 group-hover:text-white">
        {cta}
      </span>
    </Link>
  );
}
