import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "@/components/social-links";

const links = [
  ["الرئيسية", "#home"], ["المميزات", "#features"], ["كيف يعمل", "#how"],
  ["الدوريات", "#leagues"], ["الصور", "#screenshots"], ["الأسئلة الشائعة", "#faq"],
];

export function Navbar() {
  return <header className="topbar"><div className="container nav-wrap">
    <Link className="brand" href="/#home" aria-label="PX League - الرئيسية">
      <Image className="brand-mark" src="/brand/px-league-logo.png" width={2180} height={721} alt="" priority />
    </Link>
    <nav className="nav-links" aria-label="التنقل الرئيسي">{links.map(([label, href]) => <Link href={`/${href}`} key={href}>{label}</Link>)}</nav>
    <SocialLinks variant="navbar" />
    <Link className="nav-cta" href="/#download"><span className="nav-cta-label-full">حمّل التطبيق</span><span className="nav-cta-label-short">حمّل</span><span aria-hidden="true">↓</span></Link>
  </div></header>;
}
