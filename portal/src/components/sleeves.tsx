"use client";

import { useState } from "react";
import { sleeves } from "@/lib/hive";

export function Sleeves() {
  const [open, setOpen] = useState<string | null>(null);
  const current = sleeves.find((sleeve) => sleeve.id === open);

  return (
    <div>
      <ul className="records">
        {sleeves.map((sleeve, index) => {
          const isOpen = open === sleeve.id;
          return (
            <li key={sleeve.id} className={isOpen ? "record is-open" : "record"}>
              <span className="disc" aria-hidden="true" />
              <button
                type="button"
                className="sleeve"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : sleeve.id)}
              >
                <span className="tag">placeholder</span>
                <span className="sleeve-foot">
                  <span className="sleeve-no" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <strong>{sleeve.title}</strong>
                  <span className="sleeve-hint">{isOpen ? "slide it back" : "pull the record out"}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      {current ? (
        <p className="liner" role="status">
          <span className="tag">placeholder</span>
          {current.title}: {current.note}
        </p>
      ) : (
        <p className="liner is-quiet">three empty sleeves. none of these are songs yet.</p>
      )}
    </div>
  );
}
