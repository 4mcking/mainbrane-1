import type { Metadata } from "next";
import { Room } from "@/components/room";
import { bench } from "@/lib/hive";

export const metadata: Metadata = {
  title: "build lab",
  description: "scraps from king's bench. not a portfolio.",
};

export default function LabPage() {
  return (
    <Room tone="lab" name="build lab" line="the bench is messy. that is the point.">
      <p className="lede">
        scraps, not case studies. three of them are live. one is waiting for a name.
      </p>
      <ul className="board">
        {bench.map((scrap, index) => (
          <li key={scrap.id} className="spec">
            <p className="spec-head">
              <span>scrap 0{index + 1}</span>
              {scrap.placeholder ? (
                <span className="tag">placeholder</span>
              ) : (
                <span className="live">
                  <i className="led" aria-hidden="true" />
                  live
                </span>
              )}
            </p>
            <h2>{scrap.title}</h2>
            <p>{scrap.line}</p>
            {scrap.href ? (
              <a className="go" href={scrap.href} target="_blank" rel="noreferrer">
                open it
              </a>
            ) : null}
          </li>
        ))}
      </ul>
    </Room>
  );
}
