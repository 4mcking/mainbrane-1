import type { Metadata } from "next";
import { Room } from "@/components/room";
import { Sleeves } from "@/components/sleeves";

export const metadata: Metadata = {
  title: "sound",
  description: "the sound room. empty sleeves until king's songs are shelved.",
};

export default function SoundPage() {
  return (
    <Room tone="sound" name="sound" line="the sleeves are here. the songs are not. yet.">
      <p className="lede">
        music is a real room in this hive. king has not put the records on this
        shelf, so the sleeves are empty and say so.
      </p>
      <Sleeves />
      <article className="sheet lyric">
        <span className="tag">placeholder</span>
        <p>a few lines of a lyric sit here, in his words, when he wants them read.</p>
        <p className="sign">— king, later</p>
      </article>
    </Room>
  );
}
