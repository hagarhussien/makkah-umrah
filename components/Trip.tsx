import { site } from "@/lib/site";

export default function Trip() {
  const { group, trip } = site;
  return (
    <section className="sec alt" id="trip">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">الرحلة القادمة</span>
          <h2>من {trip.label.replace(" – ", " إلى ")}، وتنطلق فور اكتمال العدد</h2>
          <p>الرحلات لا ترتبط بموسم؛ متى اكتملت المجموعة انطلقت. هكذا نحدد حجم كل رحلة:</p>
        </div>
        <div className="group">
          <div className="meter">
            <div>
              <span className="eyebrow" style={{ marginBottom: 6 }}>
                حجم المجموعة
              </span>
              <h3 style={{ fontSize: "1.35rem" }}>
                من {group.min} إلى {group.full} معتمرًا
              </h3>
            </div>
            <div className="meter-bar" aria-hidden="true">
              <i />
            </div>
            <div className="meter-marks">
              <span>
                <b>0</b>
              </span>
              <span>
                <b>{group.min}</b> · أتوبيس
              </span>
              <span>
                <b>{group.full}</b> · طيران كامل
              </span>
            </div>
            <p style={{ color: "var(--ink-2)", fontSize: ".92rem" }}>
              لا تُطلق رحلة بأقل من {group.min} معتمرًا. وإذا اكتمل أتوبيس واحد فقط، ينضم إليه أتوبيس آخر من شركة أخرى في
              الموعد نفسه.
            </p>
          </div>
          <ul className="milestones">
            <li>
              <span className="n">{group.min}</span>
              <div>
                <b>اكتمال الأتوبيس الأول</b>
                <span>الحد الأدنى للانطلاق. الفنادق محجوزة والتأشيرات جاهزة للمجموعة.</span>
              </div>
            </li>
            <li>
              <span className="n">{group.full}</span>
              <div>
                <b>اكتمال طيران كامل</b>
                <span>عند بلوغ {group.full} معتمرًا نحجز طائرة كاملة تخصص لهذه الرحلة.</span>
              </div>
            </li>
            <li>
              <span className="n">∞</span>
              <div>
                <b>من محرم إلى شوال</b>
                <span>نتوقف فقط خلال شهرين تقريبًا استعدادًا لموسم الحج. الموعد التالي يُحدد بحجزك أنت ومن معك.</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}