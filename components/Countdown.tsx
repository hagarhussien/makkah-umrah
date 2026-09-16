"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const pad = (n: number) => (n < 10 ? "0" : "") + n;

export default function Countdown() {
  const [left, setLeft] = useState<number | null>(null);

  useEffect(() => {
    const target = new Date(site.trip.departure).getTime();
    const tick = () => setLeft(Math.max(0, target - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (left === 0) {
    return (
      <div className="count" aria-live="polite">
        <div style={{ gridColumn: "1 / -1" }}>
          <b style={{ fontSize: "1.05rem" }}>انطلقت الرحلة · احجز في الموعد التالي</b>
        </div>
      </div>
    );
  }

  const s = left === null ? null : Math.floor(left / 1000);
  const cell = (v: number | null, label: string) => (
    <div>
      <b>{v === null ? "--" : pad(v)}</b>
      <span>{label}</span>
    </div>
  );

  return (
    <div className="count" aria-live="polite">
      {cell(s === null ? null : Math.floor(s / 86400), "يوم")}
      {cell(s === null ? null : Math.floor((s % 86400) / 3600), "ساعة")}
      {cell(s === null ? null : Math.floor((s % 3600) / 60), "دقيقة")}
      {cell(s === null ? null : s % 60, "ثانية")}
    </div>
  );
}
