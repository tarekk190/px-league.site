import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { StoreLinks } from "@/components/store-links";
import { SocialLinks } from "@/components/social-links";

export function Footer() {
  const year = new Date().getFullYear();
  return <footer className="footer"><div className="container">
    <div className="footer-top">
      <Link className="brand" href="/#home" aria-label="PX League - الرئيسية"><Image className="brand-mark" src="/brand/px-league-logo.png" width={2180} height={721} alt="" /></Link>
      <StoreLinks compact />
      <div className="footer-social"><span>حساباتنا الرسمية</span><SocialLinks variant="footer" /></div>
      <nav className="footer-nav" aria-label="روابط الموقع">
        <Link href="/#home">الرئيسية</Link><Link href="/privacy">سياسة الخصوصية</Link><Link href="/terms">الشروط والأحكام</Link>
        {siteConfig.supportEmail ? <a href={`mailto:${siteConfig.supportEmail}`}>الدعم والتواصل</a> : <span className="contact-note">يُضاف بريد الدعم من الإعدادات</span>}
      </nav>
    </div>
    <div className="footer-bottom"><span>© {year} PX League. جميع الحقوق محفوظة.</span><span>توقّع كرة القدم، واجعل المنافسة أقرب.</span></div>
  </div></footer>;
}
