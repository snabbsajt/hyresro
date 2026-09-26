export type NavLink = { href: string; label: string };

export type NavItem = {
  id: string;
  label: string;
  links: readonly NavLink[];
};

/** Top-level menu: only existing routes, no empty groups. */
export const navItems: readonly NavItem[] = [
  {
    id: "guider",
    label: "Guider",
    links: [
      { href: "/guide/kolla-kontraktet", label: "Kolla kontraktet" },
      { href: "/guide/borra-i-hyresratt", label: "Borra i hyresrätt" },
      { href: "/checklista-flytta", label: "Checklista vid flytt" },
    ],
  },
  {
    id: "fasta",
    label: "Fästa & hänga",
    links: [
      { href: "/fasten", label: "Fästen" },
      { href: "/guide/hylla-utan-borra", label: "Hylla utan borr" },
    ],
  },
  {
    id: "sol",
    label: "Sol & fönster",
    links: [
      { href: "/solskydd", label: "Solskydd" },
      { href: "/guide/rullgardin-utan-borra", label: "Rullgardin utan borr" },
    ],
  },
  {
    id: "om",
    label: "Om",
    links: [
      { href: "/om", label: "Om Hyresro" },
      { href: "/affiliate-info", label: "Så finansieras sajten" },
      { href: "/integritet", label: "Integritet" },
    ],
  },
] as const;
