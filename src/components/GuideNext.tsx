import Link from "next/link";
import { getRelatedGuides } from "@/data/guides";

type Props = {
  slug: string;
  /** Optional short buying tips — keep compact. */
  tips?: string[];
};

export function GuideNext({ slug, tips }: Props) {
  const related = getRelatedGuides(slug, 3);
  if (related.length === 0 && (!tips || tips.length === 0)) return null;

  return (
    <section className="space-y-4 border-t border-white/10 pt-8">
      {tips && tips.length > 0 ? (
        <div className="glass-panel space-y-2 px-4 py-4">
          <h2 className="text-base font-semibold text-stone-100">
            Bra att veta innan du köper
          </h2>
          <ul className="list-disc space-y-1 pl-5 text-sm text-stone-400">
            {tips.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {related.length > 0 ? (
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Läs härnäst</h2>
          <ul className="grid gap-3 sm:grid-cols-3">
            {related.map((g) => (
              <li key={g.slug}>
                <Link
                  href={g.href}
                  className="glass-panel group flex h-full flex-col gap-1.5 px-4 py-4 transition-colors hover:border-white/30"
                >
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-stone-500">
                    Guide
                  </span>
                  <span className="font-medium leading-snug text-stone-100 group-hover:text-white">
                    {g.title}
                  </span>
                  <span className="text-sm leading-snug text-stone-400">{g.blurb}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
