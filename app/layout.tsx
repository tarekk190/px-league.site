import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  ...(siteConfig.url ? { metadataBase: new URL(siteConfig.url) } : {}),
  title: siteConfig.title,
  description: siteConfig.description,
  ...(siteConfig.url ? { alternates: { canonical: "/" } } : {}),
  openGraph: {
    type: "website", locale: "ar_SA", ...(siteConfig.url ? { url: siteConfig.url } : {}), siteName: siteConfig.name,
    title: siteConfig.title, description: siteConfig.description,
    ...(siteConfig.url ? { images: [{ url: "/brand/px-league-logo.png", width: 2048, height: 1024, alt: "PX League" }] } : {}),
  },
  twitter: { card: siteConfig.url ? "summary_large_image" : "summary", title: siteConfig.title, description: siteConfig.description, ...(siteConfig.url ? { images: ["/brand/px-league-logo.png"] } : {}) },
  robots: { index: true, follow: true },
  applicationName: "PX League",
};

export const viewport: Viewport = { themeColor: "#063b30", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl"><body>{children}</body></html>;
}
