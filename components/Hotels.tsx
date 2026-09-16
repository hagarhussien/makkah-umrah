import StreetMap from "./StreetMap";

export default function Hotels() {
  return (
    <section className="sec" id="hotels">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">الفنادق والموقع</span>
          <h2>شارع إبراهيم الخليل: من كوبري المسفلة حتى آخر الشارع</h2>
        </div>
        <div className="loc-grid">
          <div className="loc-copy">
            <p>
              برج الساعة هو البرج الواقع في وجه الحرم مباشرة. وخلفه على طول يبدأ شارع إبراهيم الخليل، ويُعرف أيضًا بشارع
              برج الساعة. أول الفنادق تبدأ عند كوبري المسفلة وتمتد حتى نهاية الشارع.
            </p>
            <p>
              نتعامل مع عدد مختار من الفنادق المتعاقد معها على هذا الشارع (وليس أي فندق على الشارع حسب الرغبة)، ونحجز
              لك حسب المتاح منها بما يناسب برنامجك وميزانيتك.
            </p>
            <div className="callout">
              كلما اقترب الفندق من الحرم ارتفع سعره. الأسعار تتغيّر حسب الفندق والتوقيت، فتواصل معنا لمعرفة السعر
              الحالي لكل خيار.
            </div>
          </div>

          <div className="street">
            <StreetMap />
            <ul className="street-legend">
              <li className="h">
                <b>الحرم وبرج الساعة</b>
                <span>البرج في وجه الحرم مباشرة؛ برنامج VIP يقيم هنا أو في أبراج الصفوة.</span>
              </li>
              <li className="t">
                <b>فنادق الشارع</b>
                <span>من أول كوبري المسفلة حتى آخر الشارع، ونتعامل مع عدد مختار منها فقط.</span>
              </li>
              <li>
                <b>فنادقنا المتعاقدة</b>
                <span>عدد مختار من الفنادق على الشارع، نحجز في المتاح منها حسب برنامجك.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}