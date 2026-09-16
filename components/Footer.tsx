import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div>
          © {new Date().getFullYear()} {site.name} للعمرة والحج · القاهرة – قنا – مكة المكرمة
        </div>
        <ul className="links">
          <li>
            <a href="#programs">البرامج</a>
          </li>
          <li>
            <a href="#trip">الرحلة القادمة</a>
          </li>
          <li>
            <a href="#hotels">الفنادق</a>
          </li>
          <li>
            <a href="#contact">تواصل معنا</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
