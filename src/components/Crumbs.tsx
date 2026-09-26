import Link from "next/link";

export type Crumb = { href?: string; label: string };

export function Crumbs({ items }: { items: Crumb[] }) {
  const trail: Crumb[] = [{ href: "/", label: "Hem" }, ...items];
  return (
    <nav aria-label="Du är här" className="text-sm text-stone-500">
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
  );
}
