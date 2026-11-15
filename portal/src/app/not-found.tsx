import Link from "next/link";
import { Room } from "@/components/room";

export default function NotFound() {
  return (
    <Room tone="hive" name="nowhere" line="that door isn't a room. the hive still is.">
      <p className="lede">nothing lives at this address. the hive is small on purpose.</p>
      <p>
        <Link className="go" href="/">
          back to the middle of the hive
        </Link>
      </p>
    </Room>
  );
}
