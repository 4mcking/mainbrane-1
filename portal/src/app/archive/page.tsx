import type { Metadata } from "next";
import { Room } from "@/components/room";
import { archive } from "@/lib/hive";

export const metadata: Metadata = {
  title: "archive",
  description: "older fragments, and the first public room of mainbrane.",
};

export default function ArchivePage() {
  return (
    <Room tone="archive" name="archive" line="older things. most of the boxes are still shut.">
      <ul className="boxes">
        {archive.map((item, index) => (
          <li key={item.id} className="index-card" data-no={`mb-00${index + 1}`}>
            {item.placeholder ? (
              <span className="tag">placeholder</span>
            ) : (
              <span className="tag real">still up</span>
            )}
            <h2>{item.title}</h2>
            <p>{item.line}</p>
            {item.href ? (
              <a className="go" href={item.href} target="_blank" rel="noreferrer">
                the earlier site
              </a>
            ) : null}
          </li>
        ))}
      </ul>
    </Room>
  );
}
