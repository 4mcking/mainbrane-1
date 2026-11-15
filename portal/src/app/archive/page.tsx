import type { Metadata } from "next";
import { Room } from "@/components/room";
import { archive } from "@/lib/hive";

export const metadata: Metadata = {
  title: "archive",
  description: "older fragments, and the first public room of mainbrane.",
};

export default function ArchivePage() {
  return (
    <Room name="archive" line="older things. most of the boxes are still shut.">
      <ul className="bench">
        {archive.map((item) => (
          <li key={item.id} className="paper scrap-card">
            {item.placeholder ? <span className="tag">placeholder</span> : <span className="tag real">still up</span>}
            <h2>{item.title}</h2>
            <p>{item.line}</p>
            {item.href ? (
              <a href={item.href} target="_blank" rel="noreferrer">
                the earlier site
              </a>
            ) : null}
          </li>
        ))}
      </ul>
    </Room>
  );
}
