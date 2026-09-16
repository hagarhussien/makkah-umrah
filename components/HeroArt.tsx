export default function HeroArt() {
  return (
    <div className="hero-art" aria-hidden="true">
<svg viewBox="0 0 1200 520" preserveAspectRatio="xMidYMax slice">
      <defs>
        <linearGradient id="tw" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3A3C4E"/><stop offset="1" stopColor="#15161F"/>
        </linearGradient>
        <linearGradient id="tw2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2B2D3C"/><stop offset="1" stopColor="#121319"/>
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#4FB287" stopOpacity=".9"/><stop offset="1" stopColor="#4FB287" stopOpacity="0"/>
        </radialGradient>
        <pattern id="win" width="10" height="14" patternUnits="userSpaceOnUse">
          <rect x="3" y="3" width="3" height="5" fill="#D4AE4A" opacity=".55"/>
        </pattern>
      </defs>
      
      <g fill="#F5F1E6" opacity=".7">
        <circle cx="120" cy="60" r="1.2"/><circle cx="260" cy="110" r="1"/><circle cx="410" cy="40" r="1.4"/>
        <circle cx="760" cy="70" r="1"/><circle cx="930" cy="130" r="1.3"/><circle cx="1080" cy="50" r="1"/>
        <circle cx="540" cy="150" r=".9"/><circle cx="1010" cy="210" r="1.1"/><circle cx="180" cy="200" r="1"/>
      </g>
      
      <path d="M40 150 C 260 90, 520 60, 820 88" fill="none" stroke="#F5F1E6" strokeOpacity=".28" strokeWidth="1.5" strokeDasharray="6 8"/>
      <g transform="translate(790 58) scale(2.6)" fill="#F5F1E6"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></g>
      
      <path d="M0 400 Q150 330 300 380 T600 370 T900 385 T1200 360 V520 H0Z" fill="#1A1B25"/>
      
      <g fill="url(#tw2)">
        <rect x="120" y="300" width="14" height="220"/><rect x="200" y="290" width="14" height="230"/>
        <rect x="90" y="400" width="200" height="120"/>
        <rect x="1000" y="310" width="14" height="210"/><rect x="1080" y="300" width="14" height="220"/>
        <rect x="960" y="405" width="180" height="115"/>
      </g>
      <g fill="#D4AE4A" opacity=".8"><circle cx="127" cy="296" r="4"/><circle cx="207" cy="286" r="4"/><circle cx="1007" cy="306" r="4"/><circle cx="1087" cy="296" r="4"/></g>
      
      <g>
        <rect x="380" y="260" width="90" height="260" fill="url(#tw2)"/>
        <rect x="380" y="260" width="90" height="260" fill="url(#win)" opacity=".7"/>
        <rect x="730" y="250" width="90" height="270" fill="url(#tw2)"/>
        <rect x="730" y="250" width="90" height="270" fill="url(#win)" opacity=".7"/>
        <rect x="320" y="330" width="60" height="190" fill="url(#tw2)"/>
        <rect x="820" y="320" width="60" height="200" fill="url(#tw2)"/>
        <rect x="320" y="330" width="60" height="190" fill="url(#win)" opacity=".5"/>
        <rect x="820" y="320" width="60" height="200" fill="url(#win)" opacity=".5"/>
      </g>
      
      <g>
        <rect x="470" y="300" width="260" height="220" fill="url(#tw)"/>
        <rect x="470" y="300" width="260" height="220" fill="url(#win)" opacity=".75"/>
        <rect x="540" y="190" width="120" height="120" fill="url(#tw)"/>
        <rect x="540" y="190" width="120" height="120" fill="url(#win)" opacity=".7"/>
        
        <rect x="520" y="120" width="160" height="84" rx="4" fill="#23253A"/>
        <rect x="524" y="124" width="152" height="76" rx="3" fill="#1A2A28"/>
        <circle cx="600" cy="162" r="60" fill="url(#glow)" opacity=".6"/>
        <circle cx="600" cy="162" r="32" fill="#2E8F6A"/>
        <circle cx="600" cy="162" r="32" fill="none" stroke="#D4AE4A" strokeWidth="2.5"/>
        <path d="M600 162 V140 M600 162 L616 170" stroke="#F5F1E6" strokeWidth="2.5" strokeLinecap="round"/>
        
        <rect x="586" y="66" width="28" height="54" fill="#2C2E40"/>
        <path d="M600 22 L612 66 H588 Z" fill="#D4AE4A"/>
        
        <mask id="cm"><rect x="585" y="-2" width="30" height="26" fill="#fff"/><circle cx="605.5" cy="7" r="7.5" fill="#000"/></mask>
        <circle cx="600" cy="10" r="9" fill="#D4AE4A" mask="url(#cm)"/>
      </g>
      
      <g fill="#D4AE4A" opacity=".9">
        <circle cx="60" cy="470" r="2"/><circle cx="160" cy="470" r="2"/><circle cx="260" cy="470" r="2"/><circle cx="1140" cy="470" r="2"/><circle cx="1040" cy="470" r="2"/>
      </g>
      <rect x="0" y="480" width="1200" height="40" fill="#0E0F14"/>
    </svg>
    </div>
  );
}
