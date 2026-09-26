import Link from "next/link";
import { site } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-stone-300/80">
      <div className="mx-auto max-w-5xl space-y-3 px-4 py-8 sm:px-8">
        <nav className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-stone-600">
          <Link href="/om" className="hover:text-stone-900">
            Om oss och annonsering
          </Link>
          <span aria-hidden>·</span>
          <Link href="/integritet" className="hover:text-stone-900">
            Integritet och kakor
          </Link>
          <span aria-hidden>·</span>
          <Link href="/kontakt" className="hover:text-stone-900">
            Kontakt
          </Link>
        </nav>
        <p className="max-w-3xl text-xs leading-relaxed text-stone-500">
          Hyresro hjälper er att inreda hyresrätten utan onödiga hål. {site.disclosure}
        </p>
        <p className="text-xs text-stone-500">
          © {year} {site.name}
        </p>
      </div>
    </footer>
  );
}
