"use client";

import Link from "next/link";
import type { NavItem } from "./nav";

type Props = {
  item: NavItem;
  onNavigate: () => void;
  className?: string;
};

export function NavPanel({ item, onNavigate, className = "" }: Props) {
  return (
    <div
      className={`border border-white/15 bg-[#141414] px-4 py-4 ${className}`}
      role="region"
      aria-label={item.label}
    >
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-stone-400">
        {item.label}
      </p>
      <ul className="flex flex-col gap-1">
        {item.links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="block py-1.5 text-sm font-medium text-stone-100 hover:text-white"
              onClick={onNavigate}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
