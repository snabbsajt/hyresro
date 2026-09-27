import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Affiliate-info",
  alternates: { canonical: "/affiliate-info" },
};

export default function AffiliateInfoRedirect() {
  redirect("/om");
}
