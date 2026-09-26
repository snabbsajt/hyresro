"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { site } from "@/config/site";
import { primaryNav, secondaryNav } from "./nav";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    queueMicrotask(() => buttonRef.current?.focus());
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobile();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen, closeMobile]);

  const linkClass =
    "px-2 py-1.5 text-sm font-medium text-stone-800 hover:text-stone-950";

  return (
    <header className="sticky top-0 z-50 border-b border-stone-300 bg-stone-100">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="shrink-0 text-base font-semibold tracking-tight text-stone-900"
          onClick={closeMobile}
        >
          {site.name}
        </Link>

        <nav
          className="hidden flex-1 items-center justify-between md:flex"
          aria-label="Huvudmeny"
        >
          <ul className="flex items-center gap-1">
            {primaryNav.map((link, index) => (
              <li key={link.href} className="flex items-center gap-1">
                {index > 0 && (
                  <span
                    className="select-none px-1 text-stone-400"
                    aria-hidden
                  >
                    ·
                  </span>
                )}
                <Link href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex items-center gap-1">
            {secondaryNav.map((link, index) => (
              <li key={link.href} className="flex items-center gap-1">
                {index > 0 && (
                  <span
                    className="select-none px-1 text-stone-400"
                    aria-hidden
                  >
                    ·
                  </span>
                )}
                <Link href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          ref={buttonRef}
          type="button"
          className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-md text-stone-800 hover:bg-stone-200 md:hidden"
          aria-expanded={mobileOpen}
          aria-controls={menuId}
          aria-label={mobileOpen ? "Stäng meny" : "Öppna meny"}
          onClick={() => (mobileOpen ? closeMobile() : setMobileOpen(true))}
        >
          <span className="sr-only">
            {mobileOpen ? "Stäng meny" : "Öppna meny"}
          </span>
          {mobileOpen ? (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <nav
          id={menuId}
          className="border-t border-stone-300 bg-stone-50 md:hidden"
          aria-label="Huvudmeny"
        >
          <ul className="mx-auto max-w-6xl px-4 py-2 sm:px-6">
            {primaryNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-3 text-base font-medium text-stone-800"
                  onClick={closeMobile}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li
              className="my-1 border-t border-stone-300"
              aria-hidden
              role="separator"
            />
            {secondaryNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-3 text-base font-medium text-stone-800"
                  onClick={closeMobile}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
