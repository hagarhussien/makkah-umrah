import WhatsAppIcon from "./WhatsAppIcon";
import { site, waLink } from "@/lib/site";

export default function WhatsAppFab() {
  return (
    <a
      className="fab"
      href={waLink(site.phones.saudi)}
      target="_blank"
      rel="noopener"
      aria-label="تواصل عبر واتساب"
    >
      <WhatsAppIcon />
    </a>
  );
}
