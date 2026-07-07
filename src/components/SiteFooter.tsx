import { contact } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="site">
      <div className="orbf" aria-hidden="true" />
      <div className="foot-contact" id="contacts">
        <div className="wrap">
          <div>
            <div className="fc-title">Учебный отдел · {contact.person}</div>
            <div className="fc-lines">
              <a href={`tel:${contact.phoneTel}`}>{contact.phone}</a> ·{" "}
              <a href={`mailto:${contact.email}`}>{contact.email}</a> ·{" "}
              <a href={contact.max} target="_blank" rel="noopener">
                МАКС
              </a>{" "}
              ·{" "}
              <a href={contact.telegram} target="_blank" rel="noopener">
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="foot-slogan">
        <div className="wrap brandline">
          Специализированная техника / Продажа / Сервис / Гарантийный надзор /
          Запчасти / <b>Инструктажи</b>
        </div>
      </div>
    </footer>
  );
}
