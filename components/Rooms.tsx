import { Bed } from "lucide-react";

const rooms = [
  { beds: 2, title: "غرفة ثنائية", text: "لأعلى درجة من الخصوصية. سعر الفرد أعلى من الرباعي." },
  { beds: 3, title: "غرفة ثلاثية", text: "لأسرة صغيرة أو ثلاثة أصدقاء يريدون الخصوصية. سعر الفرد أعلى قليلًا من الرباعي." },
  {
    beds: 4,
    title: "غرفة رباعية",
    std: true,
    text: "الحجز الافتراضي لكل برامجنا، وعليه تُحسب الأسعار المعلنة.",
  },
  { beds: 5, title: "غرفة خماسية", text: "للعائلات الكبيرة التي تريد البقاء في غرفة واحدة. بنفس سعر الفرد في الرباعية تمامًا." },
];

export default function Rooms() {
  return (
    <section className="sec alt" id="rooms">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">الغرف</span>
          <h2>الأسرة تنزل معًا كما تريد</h2>
          <p>الحجز الأساسي في غرف رباعية. ويمكن للأسر التي تفضل الإقامة في ثلاثي أو خماسي ترتيب ذلك، مع فرق في السعر.</p>
        </div>
        <div className="rooms">
          {rooms.map((r) => (
            <div key={r.title} className={r.std ? "room std" : "room"}>
              {r.std && <span className="badge">الأساسي</span>}
              <div className="beds" aria-hidden="true">
                {Array.from({ length: r.beds }, (_, i) => (
                  <Bed key={i} strokeWidth={1.75} />
                ))}
              </div>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}