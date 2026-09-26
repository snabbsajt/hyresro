import Link from "next/link";
import { site } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-white/10">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-2 gap-y-1 px-4 py-5 text-xs text-stone-400 sm:px-8">
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
    </footer>
  );
}
