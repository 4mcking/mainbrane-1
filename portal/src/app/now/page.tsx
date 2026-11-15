import type { Metadata } from "next";
import { Room } from "@/components/room";
import { now } from "@/lib/hive";

export const metadata: Metadata = {
  title: "now",
  description: "a small pulse of what the hive knows king is into.",
};

export default function NowPage() {
  return (
    <Room name="now" line="a pulse, not a status update. only what this room actually knows.">
      <div className="now-pulse" aria-hidden="true">
        <span className="pulse big" />
      </div>
      <ul className="now-list">
        {now.map((item) => (
          <li key={item.label} className="paper now-card">
            {item.placeholder ? <span className="tag">placeholder</span> : <span className="tag real">known</span>}
            <h2>{item.label}</h2>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </Room>
  );
}
