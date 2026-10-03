import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HomeSections } from "@/components/sections/home-sections";
import { siteConfig } from "@/config/site";

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: siteConfig.name,
    applicationCategory: "SportsApplication", operatingSystem: "Android, iOS",
    description: siteConfig.description,
    downloadUrl: [siteConfig.googlePlayUrl, siteConfig.appStoreUrl],
  };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /><Navbar /><main><HomeSections /></main><Footer /></>;
}
