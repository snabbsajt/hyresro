import Link from "next/link";

type Props = {
  href: string;
  title: string;
  blurb: string;
};

/** Glass guide entry — clearly “läs guide”, not a product/buy card. */
export function GuideCard({ href, title, blurb }: Props) {
  return (
    <Link
      href={href}
      className="glass-panel group flex flex-col gap-2 px-5 py-5 sm:py-6 transition-colors hover:border-white/30"
    >
      <span className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-stone-500">
        Guide
      </span>
      <span className="font-sans text-lg font-semibold leading-snug text-stone-100 group-hover:text-white">
        {title}
      </span>
      <span className="text-sm leading-snug text-stone-400">{blurb}</span>
      <span className="mt-1 text-sm font-medium text-stone-300 underline underline-offset-2 group-hover:text-white">
        Läs guide
      </span>
    </Link>
  );
}
