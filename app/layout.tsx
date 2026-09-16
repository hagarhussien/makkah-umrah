import type { Metadata, Viewport } from "next";
import { Reem_Kufi, Readex_Pro } from "next/font/google";
import "./globals.css";

const kufi = Reem_Kufi({
  subsets: ["arabic", "latin"],
  variable: "--font-kufi",
  display: "swap",
});

const body = Readex_Pro({
  subsets: ["arabic", "latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "شركة مكة للعمرة والحج",
  description:
    "شركة مكة — تأشيرات ورحلات عمرة وحج من الصعيد والقاهرة، إقامة في فنادق مختارة بشارع إبراهيم الخليل خلف برج الساعة، رحلات جماعية معظم أشهر السنة.",
  openGraph: {
    title: "شركة مكة للعمرة والحج",
    description: "عمرتك من الصعيد إلى خطوات من الحرم. فنادق مختارة بشارع إبراهيم الخليل خلف برج الساعة، تواصل معنا لمعرفة السعر الحالي.",
    locale: "ar_EG",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F4F2EC" },
    { media: "(prefers-color-scheme: dark)", color: "#0E0F14" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${kufi.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}