import Link from "next/link";
import { Room } from "@/components/room";

export default function NotFound() {
  return (
    <Room name="nowhere" line="that door isn't a room. the desk still is.">
      <article className="paper">
        <p>nothing lives at this address. the hive is small on purpose.</p>
        <p>
          <Link href="/">back to the desk</Link>
        </p>
      </article>
    </Room>
  );
}
