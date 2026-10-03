import { siteConfig } from "@/config/site";

function InstagramIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle className="social-icon-dot" cx="17.5" cy="6.5" r=".8" /></svg>;
}

function WhatsAppIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20.4 11.7a8.3 8.3 0 0 1-12.3 7.2L3 20l1.2-4.9a8.3 8.3 0 1 1 16.2-3.4Z" /><path d="M8.2 7.9c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4 0 .6l-.5.7c-.1.2-.2.3 0 .6.3.5.8 1 1.3 1.4.6.5 1.2.8 1.7 1 .2.1.4.1.6-.1l.8-.9c.2-.2.4-.2.6-.1l1.7.8c.3.1.4.3.4.5 0 .3-.2 1.1-.7 1.5-.5.5-1.2.7-2 .6-1.1-.2-2.5-.8-3.9-2-1.6-1.4-2.6-3.1-2.9-4.1-.3-1 .1-1.8.4-2.2Z" /></svg>;
}

function XIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path className="social-icon-fill" d="M18.9 1.2h3.3L15 9.5l7.9 13h-6.8l-5.3-6.9-6.1 6.9H1.4l7.7-8.8-8.2-12.6h7l4.8 6.3 6.2-6.2Zm-1.2 19h1.8L7.8 3.4H5.9l11.8 16.8Z" /></svg>;
}

const accounts = [
  { name: "إنستغرام", label: "حساب PX League الرسمي على إنستغرام", href: siteConfig.socialLinks.instagram, Icon: InstagramIcon },
  { name: "قناة واتساب", label: "قناة PX League الرسمية على واتساب", href: siteConfig.socialLinks.whatsapp, Icon: WhatsAppIcon },
  { name: "X", label: "حساب PX League الرسمي على إكس", href: siteConfig.socialLinks.x, Icon: XIcon },
];

export type SocialLinksVariant = "navbar" | "hero" | "section" | "footer";

type SocialLinksProps = { variant: SocialLinksVariant };

export function SocialLinks({ variant }: SocialLinksProps) {
  return <div className={`social-links social-links-${variant}`} role="group" aria-label="حسابات PX League الرسمية">
    {accounts.map(({ name, label, href, Icon }) => <a className="social-link" key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}><Icon /><span className="social-link-name">{name}</span></a>)}
  </div>;
}
