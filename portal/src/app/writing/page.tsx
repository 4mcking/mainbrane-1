import type { Metadata } from "next";
import Link from "next/link";
import { Room } from "@/components/room";
import { pieces } from "@/lib/hive";

export const metadata: Metadata = {
  title: "writing",
  description: "king's essay, and empty drawers for poems.",
};

export default function WritingPage() {
  return (
    <Room tone="writing" name="writing" line="one real essay. the poems are still in his head.">
      <ul className="sheets">
        {pieces.map((piece) => (
          <li key={piece.slug}>
            <Link href={`/writing/${piece.slug}`} className="sheet piece">
              {piece.kind === "placeholder" ? (
                <span className="tag">placeholder</span>
              ) : (
                <span className="tag real">essay</span>
              )}
              <strong>{piece.title}</strong>
              <em>{piece.summary}</em>
            </Link>
          </li>
        ))}
      </ul>
    </Room>
  );
}
