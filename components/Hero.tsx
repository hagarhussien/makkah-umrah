import HeroArt from "./HeroArt";
import Countdown from "./Countdown";
import WhatsAppIcon from "./WhatsAppIcon";
import { site, waLink } from "@/lib/site";

export default function Hero() {
  const { trip, group } = site;
  return (
    <section className="hero">
      <div className="hero-sky" aria-hidden="true" />
      <HeroArt />

      <div className="wrap">
        <div className="hero-copy">
          <span className="eyebrow">{site.name} · تأشيرات عمرة وحج</span>
          <h1>
            عمرتك من الصعيد
            <br />
            إلى <em>خطوات من الحرم</em>
          </h1>
          <p className="hero-lead">
            نحجز لك في فنادق مختارة بشارع إبراهيم الخليل خلف برج الساعة مباشرة، وأسعارنا تتغيّر حسب الفندق والتوقيت
            فتواصل معنا لمعرفة السعر الحالي. مشرف رحلة يرافق مجموعتك من الحجز حتى العودة.
          </p>
          <div className="hero-actions">
            <a className="btn btn-wa" href={waLink(site.phones.saudi)} target="_blank" rel="noopener">
              <WhatsAppIcon />
              احجز عبر واتساب
            </a>
            <a className="btn btn-ghost on-night" href="#programs">
              استعرض البرامج
            </a>
          </div>
        </div>

        <aside className="trip-card" aria-label="الرحلة القادمة">
          <span className="tag">
            <i aria-hidden="true" /> الحجز مفتوح الآن
          </span>
          <div className="trip-date">
            {trip.label}
            <small>الرحلة القادمة · {trip.days} أيام · انطلاق من الصعيد</small>
          </div>
          <Countdown />
          <p className="note">
            تنطلق الرحلة فور اكتمال العدد. الحد الأدنى {group.min} معتمرًا، وعند اكتمال {group.full} يُحجز طيران كامل
            للمجموعة.
          </p>
        </aside>
      </div>

      <div className="stats">
        <div className="wrap">
          <div className="stat">
            <b>أسعار حسب الطلب</b>
            <span>تختلف حسب الفندق والتوقيت · تواصل معنا للسعر الحالي</span>
          </div>
          <div className="stat">
            <b>من محرم لشوال</b>
            <span>موسم العمرة، فيما عدا فترة التجهيز للحج</span>
          </div>
          <div className="stat">
            <b>
              {group.min} – {group.full}
            </b>
            <span>معتمرًا في كل رحلة</span>
          </div>
          <div className="stat">
            <b>إبراهيم الخليل</b>
            <span>كل فنادقنا خلف برج الساعة</span>
          </div>
        </div>
      </div>
    </section>
  );
}