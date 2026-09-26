import Link from "next/link";
import { site } from "@/config/site";

const links = [
  { href: "/solskydd", label: "Solskydd" },
  { href: "/fasten", label: "Fästen" },
  { href: "/guide/kolla-kontraktet", label: "Kontraktet" },
  { href: "/checklista-flytta", label: "Checklista" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-300/90 bg-stone-100/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="shrink-0 text-base font-semibold tracking-tight text-stone-900"
        >
          {site.name}
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-x-8 gap-y-1 text-sm font-medium text-stone-700">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-stone-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
