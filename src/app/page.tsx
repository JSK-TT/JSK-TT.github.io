import Link from "next/link";
import { equipment } from "@/lib/data";

export default function Home() {
  return (
    <>
      <div className="crumbs">
        <div className="wrap">
          <Link href="/">Главная</Link> → <Link href="/">Учебный центр</Link> →{" "}
          <b>Инструктажи по спецтехнике</b>
        </div>
      </div>

      <div className="intro">
        <div className="wrap">
          <div>
            <h1>Практические инструктажи по спецтехнике</h1>
            <p>Подберите программу под свою технику и задачу.</p>
          </div>
        </div>
      </div>

      <main>
        <div className="wrap">
          <div className="mlist">
            {equipment.map((e, i) => (
              <Link
                key={e.id}
                href={`/equipment/${e.id}`}
                className="mrow"
                style={{ animationDelay: `${i * 35}ms` }}
              >
                <span className="mn">
                  <div className="name">{e.title}</div>
                </span>
                <span className={`fmt${e.progWork ? " work" : ""}`}>
                  {e.progWork ? "программа в работе" : e.format}
                </span>
                <span className="arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
