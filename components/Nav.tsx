"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, MoonStar } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { site, waLink } from "@/lib/site";
import { setProgram, type ProgramKey } from "@/lib/programStore";

const programs: { key: ProgramKey; title: string; sub: string; price: string }[] = [
  {
    key: "eco",
    title: "عمرة شارع إبراهيم الخليل",
    sub: "فنادق خلف برج الساعة · غرف رباعية",
    price: "تبدأ من 40 ألف جنيه",
  },
  {
    key: "vip",
    title: "عمرة VIP",
    sub: "برج الساعة أو أبراج الصفوة · الموسم القادم إن شاء الله",
    price: "تواصل معنا للسعر",
  },
  {
    key: "hajj",
    title: "تأشيرات الحج",
    sub: "سجّل اهتمامك مبكرًا وسنتواصل معك",
    price: "حسب الموسم",
  },
];

const links = [
  { href: "#trip", label: "الرحلة القادمة" },
  { href: "#hotels", label: "الفنادق والموقع" },
  { href: "#rooms", label: "الغرف" },
  { href: "#about", label: "من نحن" },
  { href: "#contact", label: "تواصل معنا" },
];

export default function Nav() {
  const [ddOpen, setDdOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const ddRef = useRef<HTMLLIElement>(null);
  const hoverT = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (ddRef.current && !ddRef.current.contains(e.target as Node)) setDdOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDdOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("click", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const pick = (key: ProgramKey) => {
    setProgram(key);
    setDdOpen(false);
    setMobileOpen(false);
  };

  return (
    <header className="nav" id="top">
      <div className="wrap">
        <a className="brand" href="#top" aria-label={`${site.name} — الرئيسية`}>
          <span className="brand-mark" aria-hidden="true">
            <MoonStar strokeWidth={1.75} />
          </span>
          <span>
            <span className="brand-name">{site.name}</span>
            <br />
            <span className="brand-sub">{site.tagline}</span>
          </span>
        </a>

        <nav aria-label="القائمة الرئيسية">
          <ul className="menu">
            <li
              ref={ddRef}
              onMouseEnter={() => {
                if (hoverT.current) clearTimeout(hoverT.current);
                setDdOpen(true);
              }}
              onMouseLeave={() => {
                hoverT.current = setTimeout(() => setDdOpen(false), 180);
              }}
            >
              <button
                className="dd-btn"
                id="dd-btn"
                aria-expanded={ddOpen}
                aria-controls="dd-menu"
                aria-haspopup="true"
                onClick={(e) => {
                  e.stopPropagation();
                  setDdOpen((v) => !v);
                }}
              >
                البرامج
                <ChevronDown strokeWidth={2.2} />
              </button>
              <div className="dd" id="dd-menu" role="menu" aria-labelledby="dd-btn" data-open={ddOpen}>
                {programs.map((p) => (
                  <a key={p.key} href="#programs" role="menuitem" onClick={() => pick(p.key)}>
                    <b>{p.title}</b>
                    <small>{p.sub}</small>
                    <span className="dd-price">{p.price}</span>
                  </a>
                ))}
              </div>
            </li>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-cta">
          <a className="btn btn-ghost" href="#contact">
            اتصل بنا
          </a>
          <a className="btn btn-wa" href={waLink(site.phones.saudi)} target="_blank" rel="noopener">
            <WhatsAppIcon />
            <span className="lbl">واتساب</span>
          </a>
          <button
            className="burger"
            id="burger"
            aria-expanded={mobileOpen}
            aria-controls="mobile"
            aria-label={mobileOpen ? "إغلاق القائمة" : "فتح القائمة"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <Menu strokeWidth={2} />
          </button>
        </div>
      </div>

      <div className="mobile" id="mobile" data-open={mobileOpen}>
        {programs.map((p, i) => (
          <a key={p.key} href="#programs" className={i ? "sub" : undefined} onClick={() => pick(p.key)}>
            {p.title}
          </a>
        ))}
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)}>
            {l.label}
          </a>
        ))}
        <a className="btn btn-gold" href="#contact" onClick={() => setMobileOpen(false)}>
          احجز مقعدك
        </a>
      </div>
    </header>
  );
}