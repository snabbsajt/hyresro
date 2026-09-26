"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { site } from "@/config/site";

const groups = [
  {
    title: "Guider",
    links: [
      { href: "/guide/kolla-kontraktet", label: "Kontraktet" },
      { href: "/guide/borra-i-hyresratt", label: "Borra" },
      { href: "/guide/rullgardin-utan-borra", label: "Rullgardin" },
      { href: "/guide/hylla-utan-borra", label: "Hylla" },
    ],
  },
  {
    title: "Produkter",
    links: [
      { href: "/solskydd", label: "Solskydd" },
      { href: "/fasten", label: "Fästen" },
    ],
  },
  {
    title: "Övrigt",
    links: [
      { href: "/checklista-flytta", label: "Checklista" },
      { href: "/om", label: "Om" },
    ],
  },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    queueMicrotask(() => buttonRef.current?.focus());
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-300/90 bg-stone-100/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="shrink-0 text-base font-semibold tracking-tight text-stone-900"
          onClick={() => setOpen(false)}
        >
          {site.name}
        </Link>

        <button
          ref={buttonRef}
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-stone-800 hover:bg-stone-200/80"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Stäng meny" : "Öppna meny"}
          onClick={() => (open ? close() : setOpen(true))}
        >
          <span className="sr-only">{open ? "Stäng meny" : "Öppna meny"}</span>
          {open ? (
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

      {open && (
        <nav
          id={menuId}
          className="border-t border-stone-300/90 bg-stone-100"
          aria-label="Huvudmeny"
        >
          <div className="mx-auto grid max-w-6xl gap-6 px-4 py-5 sm:grid-cols-3 sm:px-6">
            {groups.map((group) => (
              <div key={group.title}>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-sage-800">
                  {group.title}
                </p>
                <ul className="flex flex-col">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="block py-2 text-base font-medium text-stone-800 hover:text-stone-950"
                        onClick={close}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
