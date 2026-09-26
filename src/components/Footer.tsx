import Link from "next/link";
import { site } from "@/config/site";
import { Disclosure } from "./Disclosure";

const links = [
  { href: "/om", label: "Om Hyresro" },
  { href: "/affiliate-info", label: "Affiliate-info" },
  { href: "/integritet", label: "Integritet" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-stone-300 bg-stone-200/70">
      <div className="mx-auto max-w-6xl space-y-4 px-4 py-8 sm:px-6">
        <Disclosure />
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-stone-700">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-stone-900">
              {link.label}
            </Link>
          ))}
        </div>
        <p className="text-xs text-stone-600">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
