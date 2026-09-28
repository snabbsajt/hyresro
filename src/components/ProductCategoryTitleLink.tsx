import Link from "next/link";
import { getCategoryHref, getCategoryLabel } from "@/lib/categories";

type Props = {
  name: string;
  category: string;
  /** Extra classes on the anchor (or fallback span). */
  className?: string;
};

/**
 * Product name → category page (e.g. /fasten). No underline; optional › arrow.
 * Falls back to plain text if category has no route.
 */
export function ProductCategoryTitleLink({ name, category, className }: Props) {
  const href = getCategoryHref(category);
  const label = getCategoryLabel(category);

  if (!href) {
    return <span className={className}>{name}</span>;
  }

  return (
    <Link
      href={href}
      className={[
        "group/title inline text-inherit no-underline transition-colors",
        "hover:text-stone-100 hover:no-underline",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      title={`Visa kategorin ${label}`}
      aria-label={`${name} — visa kategorin ${label}`}
    >
      {name}
      <span
        aria-hidden
        className="ml-1 text-[0.85em] font-normal text-white/50 transition-colors group-hover/title:text-white/70"
      >
        ›
      </span>
    </Link>
  );
}
