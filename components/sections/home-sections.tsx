import Image from "next/image";
import { StoreLinks } from "@/components/store-links";
import { siteConfig } from "@/config/site";
import { SocialLinks } from "@/components/social-links";

const features = [
  ["⌖", "توقّع النتائج", "سجّل توقعك لنتائج المباريات قبل انطلاقها."],
  ["▣", "أنشئ دوريك", "ابدأ دوري توقعات خاصاً واجمع أصدقاءك فيه."],
  ["↗", "ادعُ أصدقاءك", "شارك الدعوة وتابعوا التحدي معاً."],
  ["♧", "انضم للبطولات", "اكتشف دوريات وبطولات التوقعات المتاحة."],
  ["✦", "اجمع النقاط", "احصل على نقاط من توقعاتك بحسب نتيجة المباراة."],
  ["◷", "تابع أداءك", "ارجع إلى توقعاتك وتابع مسيرتك في المنافسة."],
  ["♛", "نافس على الصدارة", "تابع ترتيبك وقارن تقدمك بالمشاركين."],
];

const faqs = [
  ["ما هو PX League؟", "تطبيق لتوقع نتائج مباريات كرة القدم وإنشاء دوريات خاصة أو الانضمام إلى دوريات وبطولات، ثم جمع النقاط ومتابعة الترتيب."],
  ["كيف أحصل على النقاط؟", "تُجمع النقاط من توقعات نتائج المباريات وفق آلية التطبيق. راجع تفاصيل النقاط داخل التطبيق لمعرفة طريقة احتساب كل توقع."],
  ["هل أقدر أنشئ دوري خاص؟", "نعم، يمكنك إنشاء دوري توقعات خاص ومشاركة الدعوة مع أصدقائك للمنافسة معاً."],
  ["كيف أنضم لدوري؟", "يمكنك الانضمام إلى الدوريات والبطولات المتاحة من داخل التطبيق، أو الدخول إلى دوري خاص عبر دعوته."],
  ["هل أقدر أنافس أصدقائي؟", "نعم، أنشئ دوريكم الخاص ونافسوا على النقاط والترتيب مباراة بعد مباراة."],
  ["متى أقدر أغيّر توقعي؟", "سجّل توقعك قبل انطلاق المباراة. قد لا يكون التعديل متاحاً بعد بداية المباراة."],
  ["هل التطبيق متوفر على Android وiPhone؟", "نعم، PX League متوفر الآن على Android وiPhone. استخدم أزرار المتاجر الرسمية في هذه الصفحة للوصول إلى التطبيق."],
];

export function HomeSections() {
  return <>
    <section className="hero" id="home"><div className="container hero-grid">
      <div className="hero-copy">
        <div className="eyebrow"><i /> تحدّي التوقعات يبدأ من هنا</div>
        <h1>توقّع<br /><span>نافس</span><br />وتصدّر</h1>
        <p>توقّع نتائج المباريات، أنشئ دورياتك الخاصة، ونافس أصدقاءك ولاعبين آخرين على جمع النقاط والوصول إلى الصدارة.</p>
        <StoreLinks light priority />
        <div className="store-note">متوفر الآن على Android وiPhone</div>
        <div className="hero-follow"><span>تابعنا</span><SocialLinks variant="hero" /></div>
      </div>
      <div className="hero-art" aria-label="هوية PX League الرياضية">
        <div className="orbit" />
        <div className="hero-emblem"><Image src="/brand/app-icon.png" alt="شعار PX League لكرة القدم" width={800} height={800} priority /></div>
        <div className="float-card float-card-one"><span><i className="float-dot">●</i> توقعك القادم</span><strong>كل مباراة تحدّي</strong></div>
        <div className="float-card float-card-two"><span>مع أصدقائك</span><strong>المنافسة أحلى</strong></div>
      </div>
      <div className="trustline"><b>توقّع</b><span /> اجمع النقاط <span /> نافس على الترتيب</div>
    </div></section>

    <section className="section"><div className="container intro-row">
      <h2 className="intro-title">كل مباراة فرصة جديدة <em>للتحدّي</em></h2>
      <div><div className="intro-copy">PX League يجمع توقعات كرة القدم والمنافسة في مكان واحد. اختر المباريات، سجّل توقعاتك، ثم تابع نقاطك وترتيبك في دوري الأصدقاء أو بين المشاركين.</div>
        <div className="intro-tags"><span>توقعات</span><span>دوريات خاصة</span><span>بطولات</span><span>نقاط وترتيب</span></div>
      </div>
    </div></section>

    <section className="section section-tint" id="features"><div className="container">
      <div className="section-head"><p className="kicker">كل ما تحتاجه للمنافسة</p><h2>تحدّيك يبدأ بتوقّع</h2><p>من اختيار المباراة إلى متابعة ترتيبك، كل خطوة تقرّبك من أجواء المنافسة.</p></div>
      <div className="feature-grid">{features.map(([icon, title, description]) => <article className="feature-card" key={title}><div className="feature-icon" aria-hidden="true">{icon}</div><h3>{title}</h3><p>{description}</p></article>)}</div>
    </div></section>

    <section className="section" id="how"><div className="container">
      <div className="section-head"><p className="kicker">ثلاث خطوات بسيطة</p><h2>كيف يعمل PX League؟</h2><p>ابدأ توقعك، واجعل كل مباراة جزءاً من منافستك.</p></div>
      <div className="steps"><article className="step"><div className="step-number">١</div><h3>اختر المباراة</h3><p>تصفّح المباريات المتاحة وحدد المباراة التي تريد توقع نتيجتها.</p></article><article className="step"><div className="step-number">٢</div><h3>سجّل توقعك قبل البداية</h3><p>اختر النتيجة التي تتوقعها قبل انطلاق المباراة.</p></article><article className="step"><div className="step-number">٣</div><h3>اجمع النقاط ونافس</h3><p>تابع نقاطك وترتيبك وواصل المنافسة في دوريك.</p></article></div>
    </div></section>

    <section className="section section-dark" id="leagues"><div className="container split">
      <div className="split-copy"><p className="kicker">منافسة تجمعكم</p><h2>دوريكم الخاص، وتحدّيكم أنتم</h2><p>أنشئ دوري توقعات خاصاً، شارك الدعوة مع أصدقائك، وتابعوا الترتيب مباراة بعد مباراة. واجعلوا كل جولة سبباً لمزيد من الحماس.</p><ul className="check-list"><li><i>✓</i> أنشئ دوري توقعات خاص بك</li><li><i>✓</i> شارك الدعوة مع أصدقائك</li><li><i>✓</i> تابعوا النقاط والترتيب معاً</li></ul></div>
      <div className="league-visual" aria-label="رسم توضيحي لترتيب دوري خاص"><div className="league-card"><div className="league-card-top"><span>دوري الأصدقاء</span><span className="rank-crown">♛</span></div><div className="rank-row"><span>١</span><span>المركز الأول</span><b>الصدارة</b></div><div className="rank-row"><span>٢</span><span>منافس قريب</span><b>يتقدم</b></div><div className="rank-row"><span>٣</span><span>تحدٍ مستمر</span><b>نقاط</b></div><div className="league-avatar-row"><i className="avatar"/><i className="avatar"/><i className="avatar"/><i className="avatar"/><small>اجمع أصدقاءك في دوري واحد</small></div></div></div>
    </div></section>

    <section className="section surface-light"><div className="container split">
      <div className="points-panel" aria-label="تصميم توضيحي لمتابعة النقاط والأداء"><div className="points-head"><span>متابعة المنافسة</span><span className="points-chip">نقاطك تتحدث</span></div><div><div className="points-big">+ نقاط</div><div className="points-caption">تُحتسب النقاط وفق توقعاتك ونتائج المباريات</div></div><div className="points-row"><span>التوقعات</span><strong>تابع سجلّك</strong></div><div className="progress-wrap"><div className="progress-label"><span>تقدمك في الترتيب</span><span>استمر بالمنافسة</span></div><div className="progress-bar"><span /></div></div></div>
      <div className="split-copy"><p className="kicker">نقاطك تحكي قصتك</p><h2>تابع أداءك خطوة بخطوة</h2><p>اجعل توقعاتك جزءاً من منافسة مستمرة. راجع أداءك، اجمع النقاط، وتابع ترتيبك بين أصدقائك والمشاركين في الدوريات.</p><ul className="check-list"><li><i>✓</i> سجل توقعاتك في مكان واحد</li><li><i>✓</i> تابع النقاط والترتيب</li><li><i>✓</i> واصل التقدم نحو الصدارة</li></ul></div>
    </div></section>

    <section className="section"><div className="container split">
      <div className="split-copy"><p className="kicker">المنافسة مفتوحة</p><h2>هل تقدر توصل للصدارة؟</h2><p>انضم إلى دوريات وبطولات التوقعات المتاحة، ونافس لاعبين آخرين. اجمع النقاط وتابع مركزك مع كل مباراة.</p><ul className="check-list"><li><i>✓</i> شارك في دوريات وبطولات التوقعات</li><li><i>✓</i> قارن ترتيبك بالمشاركين</li><li><i>✓</i> اجعل كل جولة فرصة للتقدم</li></ul></div>
      <div className="league-visual" aria-label="رسم توضيحي لمراكز الترتيب"><div className="league-card"><div className="league-card-top"><span>لوحة الترتيب</span><span className="rank-crown">♛</span></div>{["الأول في الترتيب", "منافس على الصدارة", "تقدم مستمر"].map((label, index) => <div className="rank-row" key={label}><span>{["١", "٢", "٣"][index]}</span><span>{label}</span><b>{index === 0 ? "الأعلى" : "نقاط"}</b></div>)}<div className="points-caption" style={{ marginTop: 15 }}>تابع ترتيبك في الدوريات التي تشارك فيها</div></div></div>
    </div></section>

    <section className="section section-tint" id="screenshots"><div className="container">
      <div className="section-head"><p className="kicker">من داخل التطبيق</p><h2>تجربة واضحة لكل توقع</h2><p>معاينة الصور الحقيقية للتطبيق ستُضاف عند تجهيز لقطات الشاشات الرسمية.</p></div>
      <div className="showcase-grid">{["مباريات اليوم", "توقع النتيجة", "البطولات", "إنشاء دوري", "الدوريات الخاصة", "لوحة المتصدرين", "توقعاتي", "الأداء"].map((label, index) => <article className="showcase-card" key={label}><div className="showcase-art" aria-hidden="true"><span>{["◷", "⌖", "♧", "＋", "◎", "♛", "▤", "↗"][index]}</span></div><h3>{label}</h3></article>)}</div>
    </div></section>

    <section className="section section-dark"><div className="container split">
      <div className="split-copy"><p className="kicker">قريباً</p><h2>شاهد PX League</h2><p>مساحة جاهزة للفيديو التعريفي الرسمي. أضف ملف الفيديو وصورة الغلاف من إعدادات المشروع لعرضه هنا.</p></div>
      {siteConfig.promoVideo ? <video className="media-placeholder" controls preload="none" poster={siteConfig.promoPoster || undefined} aria-label="الفيديو التعريفي لتطبيق PX League"><source src={siteConfig.promoVideo} /></video> : <div className="media-placeholder"><div className="play-button" aria-hidden="true">▶</div><div><strong>الفيديو التعريفي</strong><br />يُضاف ملف الفيديو الرسمي إلى public/video ثم يُحدّد مساره في config/site.ts</div></div>}
    </div></section>

    <section className="cta" id="download"><div className="container"><div className="cta-box"><div><h2>جاهز تثبت توقعاتك؟</h2><p>حمّل PX League وابدأ المنافسة مباراة بعد مباراة.</p><p className="cta-availability">متوفر الآن على Android وiPhone</p></div><StoreLinks light /></div></div></section>

    <section className="section" id="faq"><div className="container"><div className="section-head"><p className="kicker">إجابات سريعة</p><h2>الأسئلة الشائعة</h2><p>كل ما تحتاج معرفته لتبدأ رحلتك في PX League.</p></div><div className="faq-list">{faqs.map(([question, answer]) => <details className="faq-item" key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>

    <section className="section section-dark social-section"><div className="container"><div className="section-head"><p className="kicker">حساباتنا الرسمية</p><h2>تابع PX League</h2><p>تابعنا على حساباتنا الرسمية وخلك قريب من كل جديد</p></div><SocialLinks variant="section" /></div></section>
  </>;
}
