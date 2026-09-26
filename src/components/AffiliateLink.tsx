import { affiliateHref } from "@/lib/affiliate";

const defaultClassName =
  "inline-block rounded border border-stone-400 bg-white px-2.5 py-1 text-sm font-medium text-stone-800 hover:bg-stone-50";

type Props = {
  href: string;
  slug: string;
  children: React.ReactNode;
  className?: string;
};

export function AffiliateLink({ href, slug, children, className }: Props) {
  return (
    <a
      href={affiliateHref(href, slug)}
      rel="sponsored nofollow"
      target="_blank"
      className={className ?? defaultClassName}
    >
      {children}
    </a>
  );
}
