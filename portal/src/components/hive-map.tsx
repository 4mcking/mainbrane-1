"use client";

import Link from "next/link";
import { useState } from "react";
import { rooms } from "@/lib/hive";
import { Face } from "./host";

const spots = ["c-n", "c-ne", "c-se", "c-s", "c-sw", "c-nw"];
const hello = "hey. i'm the face of the hive. king left the doors open. pick a cell.";

export function HiveMap() {
  const [over, setOver] = useState<string | null>(null);
  const room = rooms.find((item) => item.href === over);

  return (
    <section className="hive" aria-label="rooms in the hive">
      <p className="bubble bubble-down">{room ? room.whisper : hello}</p>
      <div className="comb">
        <div className="cell c-mid tone-hive">
          <Face />
        </div>
        {rooms.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            className={`cell ${spots[index]} tone-${item.tone}`}
            onPointerEnter={() => setOver(item.href)}
            onPointerLeave={() => setOver(null)}
            onFocus={() => setOver(item.href)}
            onBlur={() => setOver(null)}
          >
            <span className="cell-no">0{index + 1}</span>
            <strong>{item.label}</strong>
            {item.tone === "now" ? <span className="pulse" aria-hidden="true" /> : null}
            <span className="visually-hidden">{item.whisper}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
