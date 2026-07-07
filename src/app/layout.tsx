import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Практические инструктажи по спецтехнике — Учебный центр Технотранс",
  description:
    "Подберите программу инструктажа под свою технику и задачу. Для операторов и механиков — на вашем объекте по России или на учебной базе в Кургане.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        {/* Декоративная сцена «Индиго-стекло»: орбы + шестерня (дизайн-система ТТ) */}
        <div className="scene-fx" aria-hidden="true">
          <div className="orb orb-a" />
          <div className="orb orb-b" />
          <div className="orb orb-c" />
          <div className="gear-fx">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/gear-tt-white.png" alt="" />
          </div>
        </div>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
