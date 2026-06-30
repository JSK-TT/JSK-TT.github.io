import Link from "next/link";

export function SiteHeader() {
  return (
    <>
      <header className="site">
        <div className="wrap">
          <Link href="/" className="brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="logo" src="/assets/logo-tt.png?v=4" alt="ТехноТранс" />
          </Link>
          <div className="req">
            <div className="req-name">ООО «НПФ «ТЕХНОТРАНС»</div>
            <div>Юридический адрес: 640004, г. Курган, ул. С. Тюленина, 80, стр. 1, оф. 1</div>
            <div>ИНН 4501110957 · КПП 450101001 · ОГРН 1044500021906</div>
            <div>Тел.: 8 (3522) 63-40-63 · 8 (800) 600-71-90</div>
          </div>
        </div>
      </header>
      <nav className="sitenav">
        <div className="wrap">
          <span>Каталог спецтехники</span>
          <span>Запчасти</span>
          <span>Сервис</span>
          <span>Лизинг</span>
          <span>Аренда</span>
          <Link href="/" className="active">
            Учебный центр
          </Link>
          <span>Акции</span>
          <span>Компания</span>
          <a href="#contacts">Контакты</a>
        </div>
      </nav>
    </>
  );
}
