import Link from "next/link";
import { Room } from "@/components/room";
import { ScrapWall } from "@/components/scrap-wall";

const doors = [
  { href: "/sound", index: "01", title: "sound", line: "sleeves. lyrics, when they exist." },
  { href: "/writing", index: "02", title: "writing", line: "the essay, and empty drawers for poems." },
  { href: "/lab", index: "03", title: "build lab", line: "scraps on the bench. not a portfolio." },
  { href: "/archive", index: "04", title: "archive", line: "older fragments, and the first public room." },
];

export default function DeskPage() {
  return (
    <Room
      name="the desk"
      largeHost
      line="hey. i'm the face of the hive. king left the door open."
    >
      <div className="desk">
        <article className="paper note">
          <p>
            mainbrane is mainframe × membrane. a beautiful hive mind, from lagos,
            still young. this is not a résumé and not a shop. it is a few rooms
            in his mind.
          </p>
          <p>
            i write. i make sounds. i leave bits of code on the bench. if a room
            looks empty, it is empty. the label says so.
          </p>
          <p className="sign">— king, founder</p>
        </article>

        <Link href="/now" className="pulse-card">
          <span className="pulse" aria-hidden="true" />
          <span>
            <strong>now</strong>
            <em>what this room knows of him right now.</em>
          </span>
        </Link>
      </div>

      <ul className="room-doors">
        {doors.map((door) => (
          <li key={door.href}>
            <Link href={door.href}>
              <span>{door.index}</span>
              <strong>{door.title}</strong>
              <em>{door.line}</em>
            </Link>
          </li>
        ))}
      </ul>

      <ScrapWall />
    </Room>
  );
}
