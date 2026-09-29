import Link from "next/link";
import { site } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-white/10">
      <div className="mx-auto max-w-5xl space-y-3 px-4 py-6 sm:px-8">
        <p className="max-w-2xl text-xs leading-relaxed text-stone-500">{site.disclosure}</p>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-stone-400">
          <Link href="/produkter" className="font-medium text-stone-300 hover:text-white">
            Alla produkter
          </Link>
          <span aria-hidden>·</span>
          <Link href="/guide" className="hover:text-white">
            Guider
          </Link>
          <span aria-hidden>·</span>
          <Link href="/losning/hanga-upp" className="hover:text-white">
            Hänga upp
          </Link>
          <span aria-hidden>·</span>
          <Link href="/losning/gardiner" className="hover:text-white">
            Gardiner
          </Link>
          <span aria-hidden>·</span>
          <Link href="/losning/forvaring" className="hover:text-white">
            Förvaring
          </Link>
          <span aria-hidden>·</span>
          <Link href="/om" className="hover:text-white">
            Om oss
          </Link>
          <span aria-hidden>·</span>
          <Link href="/kontakt" className="hover:text-white">
            Kontakt
          </Link>
          <span aria-hidden>·</span>
          <Link href="/integritet" className="hover:text-white">
            Integritet
          </Link>
          <span aria-hidden>·</span>
          <Link href="/om#annonsering" className="hover:text-white">
            Affiliate och annonsering
          </Link>
          <span aria-hidden>·</span>
          <span>
            © {year} {site.name}
          </span>
        </div>
      </div>
    </footer>
  );
}
