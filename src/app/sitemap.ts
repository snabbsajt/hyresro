import type { MetadataRoute } from "next";
import { site } from "@/config/site";

const paths = [
  "/",
  "/produkter",
  "/guide/borra-i-hyresratt",
  "/guide/hylla-utan-borra",
  "/guide/rullgardin-utan-borra",
  "/guide/plissegardin-utan-borra",
  "/guide/balkong-utan-borra",
  "/guide/tavla-pa-gips",
  "/guide/kolla-kontraktet",
  "/solskydd",
  "/fasten",
  "/forvaring",
  "/belysning",
  "/sakerhet",
  "/checklista-flytta",
  "/om",
  "/integritet",
  "/kontakt",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.7,
  }));
}
