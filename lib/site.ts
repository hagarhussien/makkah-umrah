/**
 * كل البيانات القابلة للتعديل في مكان واحد.
 * عدّل الأرقام والأسعار والمواعيد هنا فقط.
 */
export const site = {
  name: "شركة مكة",
  tagline: "للعمرة والحج · القاهرة · قنا",
  owner: "الأستاذ مدثر",

  // ضع الأرقام بصيغة دولية بلا مسافات، مثال: "966512345678" و "201012345678"
  phones: {
    saudi: "966XXXXXXXXX",
    egypt: "20XXXXXXXXXX",
  },

  // الرحلة القادمة (توقيت القاهرة)
  trip: {
    label: "23 – 29 سبتمبر",
    departure: "2026-09-23T06:00:00+03:00",
    days: 7,
  },

  group: { min: 40, full: 80 },
} as const;

export const waLink = (phone: string) => `https://wa.me/${phone}`;
export const telLink = (phone: string) => `tel:+${phone}`;