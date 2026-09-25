import type { MetadataRoute } from "next";
import { site } from "@/config/site";

const paths = [
  "/",
  "/guide/borra-i-hyresratt",
  "/guide/hylla-utan-borra",
  "/guide/rullgardin-utan-borra",
    "/guide/kolla-kontraktet",
  "/solskydd",
  "/fasten",
  "/checklista-flytta",
  "/om",
  "/affiliate-info",
  "/integritet",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.7,
  }));
}
