export type NavLink = { href: string; label: string };

export type NavItem = {
  id: string;
  label: string;
  links: readonly NavLink[];
};

export const navItems: readonly NavItem[] = [
  {
    id: "ljus",
    label: "Ljus & el",
    links: [{ href: "/belysning", label: "Belysning & sladd" }],
  },
  {
    id: "fasta",
    label: "Fästa & förvara",
    links: [
      { href: "/fasten", label: "Fästen" },
      { href: "/forvaring", label: "Förvaring" },
      { href: "/guide/hylla-utan-borra", label: "Hylla utan borr" },
      { href: "/guide/tavla-pa-gips", label: "Tavla på gips" },
      { href: "/guide/balkong-utan-borra", label: "Balkong utan borr" },
    ],
  },
  {
    id: "sakerhet",
    label: "Kök & säkerhet",
    links: [{ href: "/sakerhet", label: "Säkerhet" }],
  },
  {
    id: "sol",
    label: "Sol & fönster",
    links: [
      { href: "/solskydd", label: "Solskydd" },
      { href: "/guide/rullgardin-utan-borra", label: "Rullgardin utan borr" },
      { href: "/guide/plissegardin-utan-borra", label: "Plisségardin utan borr" },
    ],
  },
  {
    id: "alla",
    label: "Alla produkter",
    links: [{ href: "/produkter", label: "Hela katalogen" }],
  },
  {
    id: "guider",
    label: "Guider",
    links: [
      { href: "/guide", label: "Alla guider" },
      { href: "/guide/kolla-kontraktet", label: "Kolla kontraktet" },
      { href: "/guide/borra-i-hyresratt", label: "Borra i hyresrätt" },
      { href: "/guide/rullgardin-utan-borra", label: "Rullgardin utan borr" },
      { href: "/guide/plissegardin-utan-borra", label: "Plisségardin utan borr" },
      { href: "/guide/hylla-utan-borra", label: "Hylla utan borr" },
      { href: "/guide/tavla-pa-gips", label: "Tavla på gips" },
      { href: "/guide/balkong-utan-borra", label: "Balkong utan borr" },
      { href: "/checklista-flytta", label: "Checklista vid flytt" },
    ],
  },
] as const;
