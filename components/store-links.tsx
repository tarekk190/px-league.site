import { siteConfig } from "@/config/site";

type StoreLinksProps = { light?: boolean; compact?: boolean; priority?: boolean };

export function StoreLinks({ light = false, compact = false, priority = false }: StoreLinksProps) {
  const stores = [
    { label: "App Store", href: siteConfig.appStoreUrl, image: "https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/ar-ar?size=250x83", alt: "نزّل PX League من App Store" },
    { label: "Google Play", href: siteConfig.googlePlayUrl, image: "https://play.google.com/intl/en_us/badges/static/images/badges/ar_badge_web_generic.png", alt: "احصل على PX League من Google Play" },
  ];

  return <div className={`hero-actions store-actions${compact ? " store-actions-compact" : ""}`}>
    {stores.map((store) => (
      <a className={`store-badge${light ? " store-badge-light" : ""}`} key={store.label} href={store.href} target="_blank" rel="noopener noreferrer" aria-label={store.alt}>
        <img src={store.image} width="250" height="83" alt={store.alt} loading={priority ? "eager" : "lazy"} decoding="async" referrerPolicy="no-referrer" />
      </a>
    ))}
  </div>;
}
