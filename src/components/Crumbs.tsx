import Link from "next/link";
import { site } from "@/config/site";
import { BackLink } from "./BackLink";

export type Crumb = { href?: string; label: string };

export function Crumbs({ items }: { items: Crumb[] }) {
  const trail: Crumb[] = [{ href: "/", label: "Hem" }, ...items];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: c.href ? `${site.url}${c.href === "/" ? "" : c.href}` : undefined,
    })),
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
      <nav aria-label="Du är här" className="text-sm text-stone-500">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ol className="flex flex-wrap items-center gap-1">
          {trail.map((c, i) => {
            const last = i === trail.length - 1;
            return (
              <li key={`${c.label}-${i}`} className="flex items-center gap-1">
                {i > 0 ? <span aria-hidden className="text-stone-400">/</span> : null}
                {last || !c.href ? (
                  <span className={last ? "text-stone-800" : ""}>{c.label}</span>
                ) : (
                  <Link href={c.href} className="underline-offset-2 hover:underline hover:text-stone-800">
                    {c.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <BackLink />
    </div>
  );
}
