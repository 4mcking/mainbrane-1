"use client";

import { FormEvent, useState, useSyncExternalStore } from "react";
import { wall, type Scrap } from "@/lib/hive";

const KEY = "mainbrane.pins.v1";

function subscribe(onStoreChange: () => void) {
  window.addEventListener("mainbrane-pins", onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    window.removeEventListener("mainbrane-pins", onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

function readPins(raw: string): Scrap[] {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (item): item is Scrap =>
        typeof item === "object" &&
        item !== null &&
        "id" in item &&
        "text" in item &&
        typeof (item as Scrap).text === "string",
    );
  } catch {
    return [];
  }
}

export function ScrapWall() {
  const raw = useSyncExternalStore(subscribe, () => localStorage.getItem(KEY) ?? "", () => "");
  const pins = readPins(raw);
  const [draft, setDraft] = useState("");
  const [error, setError] = useState("");
  const broken = raw.length > 0 && pins.length === 0 && !raw.startsWith("[");

  function write(next: Scrap[]) {
    localStorage.setItem(KEY, JSON.stringify(next));
    window.dispatchEvent(new Event("mainbrane-pins"));
  }

  function onPin(event: FormEvent) {
    event.preventDefault();
    const text = draft.trim();
    if (!text) {
      setError("write a line first. even a short one.");
      return;
    }
    if (text.length > 140) {
      setError("keep it to 140 characters. scraps are small.");
      return;
    }
    setError("");
    write([{ id: crypto.randomUUID(), text, from: "this browser" }, ...pins]);
    setDraft("");
  }

  return (
    <section className="wall" aria-label="wall of scraps">
      <ul className="scraps">
        {pins.map((scrap) => (
          <li key={scrap.id} className="scrap is-yours">
            <span className="tag real">this browser</span>
            <p>{scrap.text}</p>
            <button type="button" className="unpin" onClick={() => write(pins.filter((item) => item.id !== scrap.id))}>
              take it down
            </button>
          </li>
        ))}
        {wall.map((scrap) => (
          <li key={scrap.id} className="scrap">
            {scrap.placeholder ? <span className="tag">placeholder</span> : null}
            <p>{scrap.text}</p>
            <p className="from">{scrap.from}</p>
          </li>
        ))}
      </ul>
      {broken ? (
        <p className="field-error" role="alert">
          the pins in this browser could not be read.{" "}
          <button type="button" className="unpin" onClick={() => write([])}>
            clear them
          </button>
        </p>
      ) : null}
      <form onSubmit={onPin} className="pin-form">
        <label htmlFor="pin-line">pin a scrap of your own. it stays on this machine.</label>
        <div className="pin-row">
          <input
            id="pin-line"
            value={draft}
            maxLength={140}
            onChange={(event) => setDraft(event.target.value)}
            placeholder="a line, a lyric, a thing you're making"
          />
          <button type="submit">pin it</button>
        </div>
        {error ? (
          <p className="field-error" role="alert">
            {error}
          </p>
        ) : null}
      </form>
    </section>
  );
}
