export type NavLink = { href: string; label: string };

export type NavItem = {
  id: string;
  label: string;
  links: readonly NavLink[];
};

export const navItems: readonly NavItem[] = [
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
    id: "guider",
    label: "Guider",
    links: [
      { href: "/guide/kolla-kontraktet", label: "Kolla kontraktet" },
      { href: "/guide/borra-i-hyresratt", label: "Borra i hyresrätt" },
      { href: "/checklista-flytta", label: "Checklista vid flytt" },
    ],
  },
] as const;
