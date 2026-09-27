import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MainShell } from "@/components/MainShell";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { site } from "@/config/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Inreda hyresrätt utan onödiga hål. Guider, produkter och checklistor — sakligt och konkret.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    siteName: site.name,
    locale: "sv_SE",
    type: "website",
  },
  other: {
    "theme-color": "#0c0c0c",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body
        className={`${geistSans.variable} ${geistSans.className} relative flex min-h-screen flex-col font-sans antialiased`}
      >
        <GoogleAnalytics />
        <div className="site-bg" aria-hidden />
        <div className="relative z-[1] flex min-h-screen flex-col">
          <Header />
          <MainShell>{children}</MainShell>
          <Footer />
        </div>
      </body>
    </html>
  );
}
