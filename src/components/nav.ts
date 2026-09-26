export type NavLink = { href: string; label: string };

/** Primära rumslänkar (vänster / överst). Endast befintliga routes. */
export const primaryNav: readonly NavLink[] = [
  { href: "/solskydd", label: "Fönster" },
  { href: "/fasten", label: "Fästa" },
] as const;

/** Guider (höger på desktop / under streck i hamburgare). */
export const secondaryNav: readonly NavLink[] = [
  { href: "/guide/kolla-kontraktet", label: "Kontrakt" },
  { href: "/guide/borra-i-hyresratt", label: "Borra" },
  { href: "/checklista-flytta", label: "Flytt" },
] as const;
