export type NavLink = { href: string; label: string };

export type NavItem = {
  id: string;
  label: string;
  links: readonly NavLink[];
};

/** Option B — short problem-ish labels; Alla produkter lives in footer. */
export const navItems: readonly NavItem[] = [
  {
    id: "hanga",
    label: "Hänga upp",
    links: [
      { href: "/losning/hanga-upp", label: "Hänga upp saker" },
      { href: "/fasten", label: "Alla fästen" },
      { href: "/guide/tavla-pa-gips", label: "Tavla på gips" },
      { href: "/guide/hylla-utan-borra", label: "Hylla utan borr" },
    ],
  },
  {
    id: "fonster",
    label: "Fönster & ljus",
    links: [
      { href: "/losning/gardiner", label: "Sätta upp gardiner" },
      { href: "/losning/morklagga", label: "Mörklägga" },
      { href: "/losning/insynsskydd", label: "Insynsskydd" },
      { href: "/solskydd", label: "Alla solskydd" },
      { href: "/belysning", label: "Belysning" },
      { href: "/guide/rullgardin-utan-borra", label: "Rullgardin utan borr" },
      { href: "/guide/plissegardin-utan-borra", label: "Plisségardin utan borr" },
    ],
  },
  {
    id: "forvara",
    label: "Förvara",
    links: [
      { href: "/losning/forvaring", label: "Få mer förvaring" },
      { href: "/forvaring", label: "Alla förvaring" },
      { href: "/guide/hylla-utan-borra", label: "Hylla utan borr" },
      { href: "/guide/balkong-utan-borra", label: "Balkong utan borr" },
    ],
  },
  {
    id: "kok-bad",
    label: "Kök & badrum",
    links: [
      { href: "/losning/badrum", label: "Fixa badrummet" },
      { href: "/sakerhet", label: "Säkerhet" },
      { href: "/fasten", label: "Krokar & fästen" },
      { href: "/forvaring", label: "Förvaring" },
    ],
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
