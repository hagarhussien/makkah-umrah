"use client";

import type { ComponentType } from "react";
import {
  BedDouble,
  Building2,
  Bus,
  CalendarDays,
  Hotel,
  IdCard,
  MapPin,
  PlaneTakeoff,
  Sparkles,
  type LucideProps,
} from "lucide-react";
import { setProgram, useProgram, type ProgramKey } from "@/lib/programStore";

type Feature = { icon: ComponentType<LucideProps>; title: string; text: string };
type Program = {
  key: ProgramKey;
  tab: string;
  pill?: string;
  title: string;
  lead: string;
  features: Feature[];
  priceLabel: string;
  price: string;
  priceUnit?: string;
  includes: string[];
  cta: string;
  fine: string;
};

const programs: Program[] = [
  {
    key: "eco",
    tab: "عمرة شارع إبراهيم الخليل",
    pill: "الأكثر طلبًا",
    title: "عمرة شارع إبراهيم الخليل",
    lead:
      "إقامة في أحد فنادق شارع إبراهيم الخليل، من أول كوبري المسفلة حتى آخر الشارع، وكلها تبدأ من خلف برج الساعة مباشرة. نحجز في أي فندق متاح على طول الشارع بحسب رغبتك وميزانيتك.",
    features: [
      { icon: Hotel, title: "فنادق خلف برج الساعة", text: "على مسافة سير من الحرم، في عدد من الفنادق المختارة على نفس الشارع." },
      { icon: IdCard, title: "التأشيرة مشمولة", text: "نستخرج تأشيرة العمرة كجزء من البرنامج، بلا إجراءات من جانبك." },
      { icon: BedDouble, title: "غرف رباعية أساسًا", text: "والثلاثي والخماسي متاحان للأسر التي تريد الإقامة معًا، بفرق في السعر." },
      { icon: Bus, title: "رحلة جماعية من الصعيد", text: "تنطلق المجموعة معًا عند اكتمال العدد، بأتوبيس أو بطيران كامل." },
      { icon: CalendarDays, title: "موسم يمتد معظم العام", text: "من محرم إلى رمضان تقريبًا، ونتوقف فقط خلال فترة التجهيز لموسم الحج." },
      { icon: MapPin, title: "خيارات قرب أو بُعد", text: "الأقرب لبرج الساعة أعلى سعرًا، والأبعد على الشارع نفسه أوفر." },
    ],
    priceLabel: "سعر الفرد · غرفة رباعية",
    price: "تواصل معنا للسعر",
    includes: ["تأشيرة العمرة", "إقامة في شارع إبراهيم الخليل", "رحلة جماعية ذهابًا وعودة", "متابعة مباشرة من مشرف الرحلة"],
    cta: "اسأل عن هذا البرنامج",
    fine: "السعر يختلف حسب الفندق المختار وعدد الأفراد في الغرفة، ويتغيّر مع تغيّر أسعار الطيران، فتواصل معنا لمعرفة السعر الحالي.",
  },
  {
    key: "vip",
    tab: "عمرة VIP",
    pill: "الموسم القادم إن شاء الله",
    title: "عمرة VIP في وجه الحرم",
    lead:
      "للراغبين في أعلى مستوى: إقامة في برج الساعة نفسه أو في أبراج الصفوة، وهما البرجان المطلّان على الحرم مباشرة. أسعار هذين البرجين مرتفعة ومتغيرة باستمرار، فتواصل معنا مباشرة لمعرفة السعر الحالي والمتاح.",
    features: [
      { icon: Building2, title: "برج الساعة أو أبراج الصفوة", text: "البرجان اللذان يفتحان على الحرم مباشرة، دون أي مسافة سير." },
      { icon: CalendarDays, title: "برنامج ممتد", text: "مدة إقامة أطول تمنحك وقتًا للطواف والصلاة في راحة." },
      { icon: IdCard, title: "تأشيرة مضمونة", text: "نتولى الإجراءات كاملة رغم ضيق فترة التأشيرات في هذا البرنامج." },
      { icon: Sparkles, title: "خدمة مخصصة", text: "مجموعات أصغر، ومتابعة شخصية من مشرف الرحلة." },
    ],
    priceLabel: "سعر الفرد",
    price: "تواصل معنا للسعر",
    includes: ["تأشيرة عمرة سريعة", "إقامة في برج الساعة أو الصفوة", "إطلالة مباشرة على الحرم", "متابعة مخصصة"],
    cta: "اسأل عن السعر والتوفر",
    fine: "برنامج برج الساعة وأبراج الصفوة أسعاره متغيرة ولا يُعلن عنها كرقم ثابت؛ تواصل معنا لمعرفة السعر الحالي. هذا البرنامج غير متاح هذا الموسم ومن المتوقع أن يبدأ من الموسم القادم إن شاء الله.",
  },
  {
    key: "hajj",
    tab: "الحج",
    title: "تأشيرات ورحلات الحج",
    lead:
      "نشاط الشركة يشمل تأشيرات الحج إلى جانب العمرة. تفاصيل برنامج الحج وأسعاره تُعلن مع فتح الموسم، وننصح بالتسجيل المبكر لأن المقاعد محدودة.",
    features: [
      { icon: IdCard, title: "استخراج تأشيرة الحج", text: "نتولى إجراءات التأشيرة بالكامل عبر مقر الشركة في القاهرة." },
      { icon: Hotel, title: "إقامة قريبة من الحرم", text: "الفنادق نفسها في شارع إبراهيم الخليل، بحسب ما يتاح في الموسم." },
      { icon: PlaneTakeoff, title: "انطلاق من الصعيد", text: "مجموعات من قنا والمحافظات المجاورة، بلا حاجة للسفر إلى القاهرة." },
    ],
    priceLabel: "حج الموسم القادم",
    price: "يُعلن قريبًا",
    includes: ["تسجيل مبكر للاهتمام", "أولوية للمسجلين أولًا", "تفاصيل كاملة عبر واتساب"],
    cta: "سجّل اهتمامك",
    fine: "تُرسل تفاصيل الحج للمسجلين فور اعتمادها.",
  },
];

export default function Programs() {
  const active = useProgram();

  const onKey = (e: React.KeyboardEvent<HTMLButtonElement>, i: number) => {
    let n: number | null = null;
    if (e.key === "ArrowLeft") n = (i + 1) % programs.length; // RTL: left moves forward
    if (e.key === "ArrowRight") n = (i - 1 + programs.length) % programs.length;
    if (n !== null) {
      e.preventDefault();
      setProgram(programs[n].key);
      (e.currentTarget.parentElement?.children[n] as HTMLElement | undefined)?.focus();
    }
  };

  return (
    <section className="sec" id="programs">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">البرامج</span>
          <h2>اختر البرنامج الذي يناسب أسرتك وميزانيتك</h2>
          <p>الفرق بين الأسعار يرجع إلى عدد الأفراد في الغرفة، والبرنامج، ومدى قرب الفندق من برج الساعة والحرم.</p>
        </div>

        <div className="tabs" role="tablist" aria-label="برامج العمرة والحج">
          {programs.map((p, i) => (
            <button
              key={p.key}
              className="tab"
              role="tab"
              id={`tab-${p.key}`}
              aria-controls={`panel-${p.key}`}
              aria-selected={active === p.key}
              tabIndex={active === p.key ? 0 : -1}
              onClick={() => setProgram(p.key)}
              onKeyDown={(e) => onKey(e, i)}
            >
              {p.tab}
              {p.pill && <span className="pill">{p.pill}</span>}
            </button>
          ))}
        </div>

        {programs.map((p) => (
          <div
            key={p.key}
            className="panel program"
            role="tabpanel"
            id={`panel-${p.key}`}
            aria-labelledby={`tab-${p.key}`}
            data-active={active === p.key}
          >
            <div className="program-body">
              <h3>{p.title}</h3>
              <p className="lead">{p.lead}</p>
              <ul className="feat">
                {p.features.map((f) => (
                  <li key={f.title}>
                    <f.icon strokeWidth={1.75} />
                    <div>
                      <b>{f.title}</b>
                      <span>{f.text}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <aside className="price-card">
              <span className="lbl">{p.priceLabel}</span>
              <div className="price" style={p.priceUnit ? undefined : { fontSize: "1.6rem" }}>
                {p.price}
                {p.priceUnit && <small>{p.priceUnit}</small>}
              </div>
              <ul>
                {p.includes.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <a className="btn btn-gold" href="#contact">
                {p.cta}
              </a>
              <p className="fine">{p.fine}</p>
            </aside>
          </div>
        ))}
      </div>
    </section>
  );
}