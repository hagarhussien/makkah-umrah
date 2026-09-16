export default function StreetMap() {
  return (
    <div className="street-scroll">
<svg viewBox="0 0 640 260" role="img" aria-label="رسم توضيحي لشارع إبراهيم الخليل من الحرم حتى نهاية الشارع">
          <defs>
            <linearGradient id="road" x1="1" y1="0" x2="0" y2="0">
              <stop offset="0" stopColor="var(--gold)" stopOpacity=".55"/><stop offset="1" stopColor="var(--gold)" stopOpacity=".12"/>
            </linearGradient>
          </defs>
          
          <rect x="520" y="60" width="100" height="100" rx="8" fill="var(--green-soft)" stroke="var(--green)" strokeWidth="1.5"/>
          <rect x="556" y="96" width="28" height="28" fill="var(--ink)"/>
          <text x="570" y="180" textAnchor="middle" fontSize="13" fill="var(--ink)" fontFamily="var(--font-kufi), sans-serif" fontWeight="600">الحرم المكي</text>
          
          <rect x="452" y="40" width="52" height="150" rx="4" fill="var(--night)"/>
          <rect x="466" y="14" width="24" height="30" fill="var(--night)"/>
          <circle cx="478" cy="60" r="12" fill="var(--green)"/>
          <circle cx="478" cy="60" r="12" fill="none" stroke="var(--gold-2)" strokeWidth="2"/>
          <text x="478" y="212" textAnchor="middle" fontSize="12" fill="var(--ink)" fontFamily="var(--font-body), sans-serif">برج الساعة</text>
          
          <rect x="520" y="10" width="100" height="40" rx="4" fill="var(--bg-2)" stroke="var(--line)"/>
          <text x="570" y="35" textAnchor="middle" fontSize="11" fill="var(--ink-2)" fontFamily="var(--font-body), sans-serif">أبراج الصفوة</text>
          
          <rect x="20" y="105" width="432" height="26" rx="13" fill="url(#road)"/>
          <line x1="40" y1="118" x2="440" y2="118" stroke="var(--surface)" strokeWidth="2" strokeDasharray="10 10"/>
          
          <path d="M392 100 q18 -22 36 0" fill="none" stroke="var(--ink-2)" strokeWidth="3" strokeLinecap="round"/>
          <text x="410" y="90" textAnchor="middle" fontSize="11" fill="var(--ink-2)" fontFamily="var(--font-body), sans-serif">كوبري المسفلة</text>
          
          <g fill="var(--surface)" stroke="var(--gold)" strokeWidth="1.5">
            <rect x="350" y="52" width="30" height="46" rx="3"/><rect x="300" y="60" width="30" height="38" rx="3"/>
            <rect x="250" y="56" width="30" height="42" rx="3"/><rect x="200" y="64" width="30" height="34" rx="3"/>
            <rect x="150" y="58" width="30" height="40" rx="3"/><rect x="100" y="66" width="30" height="32" rx="3"/>
            <rect x="50" y="62" width="30" height="36" rx="3"/>
            <rect x="350" y="138" width="30" height="44" rx="3"/><rect x="300" y="138" width="30" height="36" rx="3"/>
            <rect x="250" y="138" width="30" height="40" rx="3"/><rect x="200" y="138" width="30" height="34" rx="3"/>
            <rect x="150" y="138" width="30" height="42" rx="3"/><rect x="100" y="138" width="30" height="32" rx="3"/>
            <rect x="50" y="138" width="30" height="38" rx="3"/>
          </g>
          <g fill="var(--gold)"><rect x="359" y="60" width="4" height="4"/><rect x="367" y="60" width="4" height="4"/><rect x="359" y="70" width="4" height="4"/><rect x="367" y="70" width="4" height="4"/>
            <rect x="259" y="64" width="4" height="4"/><rect x="267" y="64" width="4" height="4"/><rect x="159" y="66" width="4" height="4"/><rect x="167" y="66" width="4" height="4"/>
            <rect x="359" y="146" width="4" height="4"/><rect x="367" y="146" width="4" height="4"/><rect x="259" y="146" width="4" height="4"/><rect x="267" y="146" width="4" height="4"/>
            <rect x="159" y="146" width="4" height="4"/><rect x="167" y="146" width="4" height="4"/><rect x="59" y="146" width="4" height="4"/><rect x="67" y="146" width="4" height="4"/></g>
          
          <text x="236" y="230" textAnchor="middle" fontSize="14" fill="var(--ink)" fontFamily="var(--font-kufi), sans-serif" fontWeight="600">شارع إبراهيم الخليل · فنادقنا على الجانبين</text>
          <text x="410" y="250" textAnchor="middle" fontSize="11" fill="var(--gold)" fontFamily="var(--font-body), sans-serif">الأقرب للحرم</text>
          <text x="60" y="250" textAnchor="middle" fontSize="11" fill="var(--gold)" fontFamily="var(--font-body), sans-serif">الأبعد · أوفر</text>
          <text x="30" y="122" textAnchor="middle" fontSize="11" fill="var(--ink-3)" fontFamily="var(--font-body), sans-serif">آخر الشارع</text>
        </svg>
    </div>
  );
}