import type { Metadata } from "next";
import { Room } from "@/components/room";
import { now } from "@/lib/hive";

export const metadata: Metadata = {
  title: "now",
  description: "a small pulse of what the hive knows king is into.",
};

export default function NowPage() {
  return (
    <Room tone="now" name="now" line="a pulse, not a status update. only what this room actually knows.">
      <div className="now-wrap">
        <div className="beacon" aria-hidden="true">
          <i />
          <i />
          <i />
          <b />
        </div>
        <ul className="signals">
          {now.map((item) => (
            <li key={item.label} className={item.placeholder ? "signal is-blank" : "signal"}>
              <span className="signal-label">
                {item.label}
                {item.placeholder ? <span className="tag">placeholder</span> : <span className="tag real">known</span>}
              </span>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </Room>
  );
}
