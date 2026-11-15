"use client";

import { useState } from "react";
import { sleeves } from "@/lib/hive";

export function Sleeves() {
  const [open, setOpen] = useState<string | null>(null);
  const current = sleeves.find((sleeve) => sleeve.id === open);

  return (
    <div>
      <ul className="sleeve-row">
        {sleeves.map((sleeve) => (
          <li key={sleeve.id}>
            <button
              type="button"
              className={open === sleeve.id ? "sleeve is-open" : "sleeve"}
              aria-expanded={open === sleeve.id}
              onClick={() => setOpen(open === sleeve.id ? null : sleeve.id)}
            >
              <span className="tag">placeholder</span>
              <strong>{sleeve.title}</strong>
              <span>pull the sleeve</span>
            </button>
          </li>
        ))}
      </ul>
      {current ? (
        <p className="drawer" role="status">
          <span className="tag">placeholder</span>
          {current.note}
        </p>
      ) : (
        <p className="quiet">three empty sleeves. none of these are songs yet.</p>
      )}
    </div>
  );
}
