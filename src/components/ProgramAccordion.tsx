"use client";
import { useState } from "react";

function chunk3(arr: string[]): string[] {
  const out: string[] = [];
  for (let i = 0; i < arr.length; i += 3) out.push(arr.slice(i, i + 3).join(" · "));
  return out;
}

export function ProgramAccordion({
  blocks,
}: {
  blocks: { title: string; items: string[] }[];
}) {
  const [open, setOpen] = useState(0); // первый блок раскрыт

  return (
    <>
      {blocks.map((b, i) => (
        <div key={b.title} className={`acc${open === i ? " open" : ""}`}>
          <button
            className="acc-head"
            onClick={() => setOpen(open === i ? -1 : i)}
          >
            {b.title}
            <span className="chev">▾</span>
          </button>
          <div className="acc-body">
            <ul>
              {chunk3(b.items).map((line, j) => (
                <li key={j}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}
