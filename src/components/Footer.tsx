import Link from "next/link";
import { site } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-stone-300/80">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-2 gap-y-1 px-4 py-5 text-xs text-stone-500 sm:px-8">
        <Link href="/om" className="hover:text-stone-800">
          Om och annonsering
        </Link>
        <span aria-hidden>·</span>
        <Link href="/integritet" className="hover:text-stone-800">
          Integritet
        </Link>
        <span aria-hidden>·</span>
        <span>Vissa länkar är reklam.</span>
        <span aria-hidden>·</span>
        <span>
          © {year} {site.name}
        </span>
      </div>
    </footer>
  );
}
