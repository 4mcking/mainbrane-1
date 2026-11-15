import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Room } from "@/components/room";
import { pieceBySlug, pieces } from "@/lib/hive";

export const dynamicParams = false;

export function generateStaticParams() {
  return pieces.map((piece) => ({ slug: piece.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const piece = pieceBySlug(slug);
  if (!piece) return { title: "empty drawer" };
  return { title: piece.title, description: piece.summary };
}

export default async function PiecePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const piece = pieceBySlug(slug);
  if (!piece) notFound();

  return (
    <Room
      tone="writing"
      name="writing"
      nameAs="p"
      line={
        piece.kind === "essay"
          ? "this one is real. it lives outside, on medium."
          : "this drawer is empty on purpose."
      }
    >
      <article className="sheet reading">
        {piece.kind === "placeholder" ? (
          <span className="tag">placeholder</span>
        ) : (
          <span className="tag real">essay</span>
        )}
        <h1>{piece.title}</h1>
        {piece.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {piece.href ? (
          <p>
            <a className="go" href={piece.href} target="_blank" rel="noreferrer">
              read it where king published it
            </a>
          </p>
        ) : null}
        <p>
          <Link className="go" href="/writing">
            back to the drawers
          </Link>
        </p>
      </article>
    </Room>
  );
}
