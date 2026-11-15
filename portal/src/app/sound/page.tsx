import type { Metadata } from "next";
import { Room } from "@/components/room";
import { Sleeves } from "@/components/sleeves";

export const metadata: Metadata = {
  title: "sound",
  description: "the sound room. empty sleeves until king's songs are shelved.",
};

export default function SoundPage() {
  return (
    <Room name="sound" line="the sleeves are here. the songs are not. yet.">
      <article className="paper">
        <p>
          music is a real room in this hive. king has not put the records on
          this shelf. these sleeves are placeholders, so the room is not
          pretending.
        </p>
      </article>
      <Sleeves />
      <article className="paper lyric">
        <span className="tag">placeholder</span>
        <p>a few lines of a lyric would sit here, in his words, when he wants them read.</p>
        <p className="sign">— king, later</p>
      </article>
    </Room>
  );
}
