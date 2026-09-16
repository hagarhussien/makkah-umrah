import { site } from "@/lib/site";

export default function About() {
  return (
    <section className="sec" id="about">
      <div className="wrap">
        <div className="about">
          <div className="about-copy">
            <span className="eyebrow">من نحن</span>
            <h2 style={{ fontSize: "clamp(1.7rem,3.4vw,2.5rem)" }}>شركة قاهرية، نشاطنا تأشيرات العمرة والحج</h2>
            <p>
              {site.name} شركة مقرها القاهرة، متخصصة في تأشيرات ورحلات العمرة والحج. نتعامل مع عدد مختار من الفنادق في
              شارع إبراهيم الخليل بمكة المكرمة، ونتابع كل رحلة من خلال مشرف مرافق للمجموعة من البداية للنهاية.
            </p>
            <p>
              كانت حجوزات الشركة تتم من القاهرة عبر مندوبيها. اليوم نفتح الباب لأهل الصعيد مباشرة: رحلات تنطلق من عندنا،
              وحجز يبدأ من قنا، بلا وسطاء.
            </p>
          </div>
          <div className="about-card">
            <div className="who">
              <span className="avatar" aria-hidden="true">
                خ
              </span>
              <div>
                <h3>فريق الحجز</h3>
                <span className="role">خدمة العملاء والمتابعة</span>
              </div>
            </div>
            <dl>
              <dt>المقر</dt>
              <dd>القاهرة</dd>
              <dt>النشاط</dt>
              <dd>تأشيرات عمرة وحج</dd>
              <dt>في مكة</dt>
              <dd>فنادق مختارة في شارع إبراهيم الخليل</dd>
              <dt>المتابعة</dt>
              <dd>مشرف رحلة مرافق لكل مجموعة</dd>
              <dt>الجديد</dt>
              <dd>رحلات وحجوزات تبدأ من الصعيد</dd>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}