import Link from "next/link";
import { notFound } from "next/navigation";
import { equipment, getEquipment } from "@/lib/data";
import { ProgramAccordion } from "@/components/ProgramAccordion";
import { Materials } from "@/components/Materials";

export function generateStaticParams() {
  return equipment.map((e) => ({ id: String(e.id) }));
}

export default async function EquipmentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const e = getEquipment(Number(id));
  if (!e) notFound();

  const isKuz = e.instructor.includes("Кузнецов");
  const isBurlak = e.instructor.includes("Бурлак");

  const progBlocks: { title: string; items: string[] }[] = [];
  if (e.program && !e.progWork) {
    if (e.program.operator) progBlocks.push({ title: "Программа · Оператор", items: e.program.operator });
    if (e.program.mechanic) progBlocks.push({ title: "Программа · Механик", items: e.program.mechanic });
    if (e.program.combined) {
      // Название комбинированной программы = роль из варианта (Бурлак — водитель-механик вездехода).
      const combinedAud = e.variants[0]?.audience ?? "Оператор-механик";
      progBlocks.push({ title: `Программа · ${combinedAud}`, items: e.program.combined });
    }
  }

  const companyHtml = `<b>ООО «НПФ «ТЕХНОТРАНС»</b><br>Юридический адрес: 640004, г. Курган, ул. Серёжи Тюленина, д. 80, стр. 1, оф. 1<br>Тел.: (3522) 63-40-63 · info@tt45.ru · технотранс.рф<br>ИНН 4501110957 · КПП 450101001 · ОГРН 1044500021906<br>Генеральный директор — Кукало Павел Михайлович · плательщик НДС (ОСН)`;

  const kuznetsovResume = `<b>Кузнецов Алексей Валерьевич</b><br><span style="color:var(--ink-2)">Инструктор · руководитель сервисной службы · 25+ лет в спецтехнике</span>
    <div class="rsec">Ключевой опыт</div>
    <ul>
      <li>Региональный управляющий по сервису СФО — «Майнтек Машинери» (офиц. дистрибьютор Hitachi в РФ): сервис карьерной техники Hitachi, 3 подразделения, ~80 сотрудников</li>
      <li>Руководитель сервисных служб — «Кузбасс-Майнинг», «АлтайБурМаш»: ремонт и обслуживание горнодобывающей и буровой техники</li>
      <li>Заместитель директора по сервису — «МашСервис» / «Техстройконтракт-Сервис»: ТОиР дорожно-строительной и карьерной техники (Hitachi, New Holland, Hyundai)</li>
      <li>Запуск и сервис карьерной техники: самосвалы EH3500, экскаваторы EX3600; клиенты — Кузбассразрезуголь, Евраз, Русал, СУЭК и др.</li>
    </ul>
    <div class="rsec">Компетенции</div>
    Диагностика и устранение неисправностей · ТОиР на объектах заказчика · гарантийное и постгарантийное обслуживание · техническая документация · обучение персонала`;

  const petrovResume = `<b>Петров А. Н.</b>
    <ul>
      <li>Руководитель испытательного участка вездеходов «Бурлак» — организация и проведение испытаний серийной и экспериментальной техники</li>
      <li>Испытание экспериментальных образцов и агрегатов, оценка работоспособности и надёжности в реальных условиях эксплуатации</li>
      <li>Более 6 лет практического опыта эксплуатации и ремонта техники «Бурлак»</li>
      <li>Участие в арктических экспедициях: низкие температуры, бездорожье, снежный и заболоченный покров, преодоление водных преград</li>
    </ul>`;

  const kazakovOrlovResume = `<b>Казаков · Орлов</b><br><span style="color:var(--ink-2)">Инструкторы учебной базы «Технотранс» (г. Курган)</span>
    <div class="rsec">Краткая справка</div>
    Проводят практические инструктажи операторов и механиков по спецтехнике на закрытой учебной площадке.
    <div class="rsec">Профессиональные компетенции</div>
    <ul>
      <li>Устройство, эксплуатация и техническое обслуживание спецтехники</li>
      <li>Диагностика и устранение типовых и нештатных неисправностей</li>
      <li>Подготовка техники к работе, ежедневное и плановое техническое обслуживание</li>
      <li>Практические технические инструктажи для операторов (водителей) и механиков</li>
    </ul>`;

  const resumeHtml = isKuz ? kuznetsovResume : isBurlak ? petrovResume : kazakovOrlovResume;

  return (
    <>
      <div className="crumbs">
        <div className="wrap">
          <Link href="/">Главная</Link> → <Link href="/">Учебный центр</Link> →{" "}
          <Link href="/">Инструктажи по спецтехнике</Link> → <b>{e.titleFull ?? e.title}</b>
        </div>
      </div>

      <main>
        <div className="wrap">
          <Link href="/" className="back">
            ← Ко всей технике
          </Link>

          <div className="detail-card">
            <div className="detail-head">
              <div className="tt">ТТ</div>
              <div>
                <h2>{e.titleFull ?? e.title}</h2>
                <div className="instr">Инструктор: {e.instructor}</div>
              </div>
            </div>

            <div className="detail-body">
              {e.variants.map((v, i) => {
                const work = v.price === "в работе";
                const sub = [v.group, v.duration].filter(Boolean).join(" · ");
                const notes: string[] = [];
                if (!work) notes.push("в т.ч. НДС");
                if (v.travelExcluded) notes.push("командировочные в стоимость не включены");
                if (v.perPerson) notes.push("цена за 1 человека, группа до 6 человек");
                return (
                  <div className="variant" key={i}>
                    <div className="vtop">
                      <span className="vchip">{e.format}</span>
                      <span className="aud">{v.audience}</span>
                      <span className="vsub">{sub}</span>
                      <span className={`price${work ? " work" : ""}`}>{v.price}</span>
                    </div>
                    {notes.length > 0 && <div className="vnote">{notes.join(" · ")}</div>}
                  </div>
                );
              })}

              {!e.noAccess && (
                <div className="access">
                  <svg className="ic" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                  Допуск к управлению спецтехникой при наличии УТМ соответствующей категории
                </div>
              )}

              {progBlocks.length > 0 ? (
                <ProgramAccordion blocks={progBlocks} />
              ) : (
                <div className="work-box">
                  <span className="work-note">
                    Программа инструктажа в подготовке. Условия уточним по запросу — нажмите «Связаться».
                  </span>
                </div>
              )}

              <Materials companyHtml={companyHtml} resumeHtml={resumeHtml} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
