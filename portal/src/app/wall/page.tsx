import type { Metadata } from "next";
import { Room } from "@/components/room";
import { ScrapWall } from "@/components/scrap-wall";

export const metadata: Metadata = {
  title: "the wall",
  description: "king's scraps, taped up. lyric lines, notes, what he is building.",
};

export default function WallPage() {
  return (
    <Room tone="wall" name="the wall" line="his scraps, taped up. no testimonials. just lines.">
      <ScrapWall />
    </Room>
  );
}
