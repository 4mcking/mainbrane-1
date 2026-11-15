import type { Metadata } from "next";
import { Room } from "@/components/room";
import { bench } from "@/lib/hive";

export const metadata: Metadata = {
  title: "build lab",
  description: "scraps from king's bench. not a portfolio.",
};

export default function LabPage() {
  return (
    <Room name="build lab" line="the bench is messy. that is the point.">
      <p className="quiet">
        these are scraps, not case studies. three of them are live. one is waiting for a name.
      </p>
      <ul className="bench">
        {bench.map((scrap) => (
          <li key={scrap.id} className="paper scrap-card">
            {scrap.placeholder ? <span className="tag">placeholder</span> : <span className="tag real">live scrap</span>}
            <h2>{scrap.title}</h2>
            <p>{scrap.line}</p>
            {scrap.href ? (
              <a href={scrap.href} target="_blank" rel="noreferrer">
                open it
              </a>
            ) : null}
          </li>
        ))}
      </ul>
    </Room>
  );
}
