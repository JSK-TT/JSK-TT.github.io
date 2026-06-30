"use client";
import { useState } from "react";

export function Materials({
  companyHtml,
  resumeHtml,
}: {
  companyHtml: string;
  resumeHtml: string;
}) {
  const [openCompany, setOpenCompany] = useState(false);
  const [openResume, setOpenResume] = useState(false);
  return (
    <div className="downloads">
      <div className="dl-row">
        <span className="dl" onClick={() => setOpenCompany((v) => !v)}>
          Карточка предприятия
        </span>
        <span className="dl" onClick={() => setOpenResume((v) => !v)}>
          Резюме инструктора
        </span>
        <a className="dl" href="https://технотранс.рф" target="_blank" rel="noopener">
          Сертификат дилера
        </a>
      </div>
      {openCompany && (
        <div className="resume" dangerouslySetInnerHTML={{ __html: companyHtml }} />
      )}
      {openResume && (
        <div className="resume" dangerouslySetInnerHTML={{ __html: resumeHtml }} />
      )}
    </div>
  );
}
