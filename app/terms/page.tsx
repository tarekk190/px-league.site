import { Navbar } from "@/components/navbar";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/config/site";

export const metadata = { title: "الشروط والأحكام | PX League", description: "الشروط والأحكام لاستخدام PX League." };

export default function TermsPage() {
  return <><div className="legal-page"><Navbar /><header className="legal-head"><div className="container"><Link href="/" aria-label="العودة إلى الرئيسية">← الرئيسية</Link><h1>الشروط والأحكام</h1><p>آخر تحديث: {siteConfig.legal.lastUpdated}</p></div></header><main className="container legal-body">
    <div className="legal-placeholder">مسودة قانونية أولية: تستلزم مراجعة واعتماد الجهة المالكة وإكمال الحقول بين الأقواس قبل النشر.</div>
    <p>توضح هذه المسودة الإطار العام لاستخدام PX League. يجب استكمالها بما يعكس التطبيق الفعلي ومراجعتها قانونياً قبل اعتمادها.</p>
    <h2>استخدام الخدمة</h2><p>يتيح PX League للمستخدم توقع نتائج مباريات كرة القدم، وإنشاء دوريات توقعات خاصة، والانضمام إلى دوريات أو بطولات متاحة، ومتابعة النقاط والترتيب وفق خصائص التطبيق المنشورة.</p>
    <h2>التوقعات والمنافسة</h2><p>أدخل توقعاتك قبل بداية المباراة. تعتمد النقاط والترتيب على آلية التطبيق ونتائج المباريات، ويمكن أن تخضع للتحديث أو التصحيح عند الحاجة. أضف هنا الأحكام التفصيلية المعتمدة لاحتساب النقاط وتسوية النتائج.</p>
    <h2>الاستخدام المقبول</h2><p>استخدم الخدمة بصورة نظامية ومحترمة. لا تحاول تعطيل التطبيق أو التأثير على النتائج أو الترتيب أو استخدام حسابات الآخرين دون إذن.</p>
    <h2>التوفر والتغييرات</h2><p>قد تتغير خصائص التطبيق أو تتوقف مؤقتاً لأعمال الصيانة أو لأسباب تشغيلية. أضف هنا شروط تعليق الحساب أو إيقاف الخدمة أو تحديث هذه الأحكام المعتمدة.</p>
    <h2>الجهة المالكة والتواصل</h2><p>الجهة المالكة: {siteConfig.legal.companyName}. بريد التواصل: {siteConfig.supportEmail || "[يُضاف بريد التواصل الرسمي]"}. القانون أو الاختصاص: {siteConfig.legal.jurisdiction}.</p>
  </main></div><Footer /></>;
}
