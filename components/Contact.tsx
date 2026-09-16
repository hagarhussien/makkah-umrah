import { Phone } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { site, telLink, waLink } from "@/lib/site";

const isPlaceholder = (p: string) => /X/i.test(p);
const pretty = (p: string) => `+${p}`;

export default function Contact() {
  const { saudi, egypt } = site.phones;
  return (
    <section className="sec alt" id="contact">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">تواصل معنا</span>
          <h2>رقمان في خدمتك: أحدهما في مكة والآخر في مصر</h2>
          <p>للاطمئنان أو السؤال تحدث مع فريقنا في مكة مباشرة على واتساب، أو اتصل بالرقم المصري لأي استفسار.</p>
        </div>
        <div className="contact">
          <div className="ccard">
            <span className="flag">
              <i className="sa" aria-hidden="true" /> الرقم السعودي · مكة المكرمة
            </span>
            <h3>
              خدمة الحجز في مكة <span className="pref">يُفضَّل واتساب</span>
            </h3>
            {isPlaceholder(saudi) ? (
              <div className="tel placeholder">الرقم السعودي يُضاف هنا</div>
            ) : (
              <div className="tel">{pretty(saudi)}</div>
            )}
            <p>
              يعمل للمكالمات وواتساب. فريقنا مشغول معظم الوقت بمتابعة الحجوزات في مكة، فالرسائل على واتساب تصل
              أسرع ويكون الرد عليها أسرع أيضًا.
            </p>
            <div className="acts">
              <a className="btn btn-wa" href={waLink(saudi)} target="_blank" rel="noopener">
                <WhatsAppIcon />
                راسلنا على واتساب
              </a>
              <a className="btn btn-ghost" href={telLink(saudi)}>
                اتصال
              </a>
            </div>
          </div>
          <div className="ccard">
            <span className="flag">
              <i className="eg" aria-hidden="true" /> الرقم المصري · للاستفسارات
            </span>
            <h3>خدمة الحجز في مصر</h3>
            {isPlaceholder(egypt) ? (
              <div className="tel placeholder">الرقم المصري يُضاف هنا</div>
            ) : (
              <div className="tel">{pretty(egypt)}</div>
            )}
            <p>رقم مكالمات يردّ عليه فريقنا في مصر على أي سؤال عن البرامج والأسعار ومواعيد الرحلات من الصعيد.</p>
            <div className="acts">
              <a className="btn btn-gold" href={telLink(egypt)}>
                <Phone strokeWidth={1.75} />
                اتصل الآن
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}