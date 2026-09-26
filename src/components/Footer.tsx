import Link from "next/link";
import { site } from "@/config/site";

const links = [
  { href: "/affiliate-info", label: "Så finansieras sajten" },
  { href: "/integritet", label: "Integritet" },
  { href: "/om", label: "Om" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-stone-300/80 bg-paper">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-2 gap-y-1 px-4 py-6 text-xs text-stone-500 sm:px-8">
        <span>Vissa butikslänkar är reklam. Priset ändras inte.</span>
        {links.map((link) => (
          <span key={link.href} className="inline-flex items-center gap-x-2">
            <span aria-hidden>·</span>
            <Link href={link.href} className="hover:text-accent">
              {link.label}
            </Link>
          </span>
        ))}
        <span className="inline-flex items-center gap-x-2">
          <span aria-hidden>·</span>
          <span>
            © {year} {site.name}
          </span>
        </span>
      </div>
    </footer>
  );
}
