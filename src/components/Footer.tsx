import Link from "next/link";
import { site } from "@/config/site";
import { FundingNote } from "./FundingNote";

const links = [
  { href: "/affiliate-info", label: "Så finansieras sajten" },
  { href: "/integritet", label: "Integritet" },
  { href: "/om", label: "Om" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-stone-300 bg-stone-200/70">
      <div className="mx-auto max-w-6xl space-y-3 px-4 py-8 sm:px-6">
        <FundingNote />
        <nav
          className="flex flex-wrap items-center gap-x-2 text-sm font-medium text-stone-700"
          aria-label="Sidfot"
        >
          {links.map((link, i) => (
            <span key={link.href} className="inline-flex items-center gap-x-2">
              {i > 0 && (
                <span className="text-stone-400" aria-hidden>
                  ·
                </span>
              )}
              <Link href={link.href} className="hover:text-stone-900">
                {link.label}
              </Link>
            </span>
          ))}
        </nav>
        <p className="text-xs text-stone-600">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
