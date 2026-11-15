import Link from "next/link";
import { doors, rooms, type Tone } from "@/lib/hive";
import { Hallway } from "./hallway";
import { Face } from "./host";

export function Room({
  tone,
  name,
  line,
  bare = false,
  nameAs = "h1",
  children,
}: {
  tone: Tone;
  name: string;
  line?: string;
  bare?: boolean;
  nameAs?: "h1" | "p";
  children: React.ReactNode;
}) {
  const Name = nameAs;
  const index = rooms.findIndex((room) => room.tone === tone);
  const before = index >= 0 ? rooms[(index + rooms.length - 1) % rooms.length] : null;
  const after = index >= 0 ? rooms[(index + 1) % rooms.length] : null;

  return (
    <div className={`room tone-${tone}`}>
      <div className="iris" aria-hidden="true" />
      <a className="skip" href="#room">
        skip to the room
      </a>
      <header className="top">
        <Link href="/" className="brand tone-hive">
          <span className="hexdot" aria-hidden="true" />
          mainbrane
        </Link>
        <Hallway />
      </header>
      <main id="room" className="stage">
        {bare ? null : (
          <>
            <div className="greet">
              <Face />
              <p className="bubble">{line}</p>
            </div>
            <Name className="room-name">{name}</Name>
          </>
        )}
        {children}
        {before && after ? (
          <nav className="next-doors" aria-label="next door">
            <Link href={before.href} className={`tone-${before.tone}`}>
              <span className="hexdot" aria-hidden="true" />
              <span>
                <small>next door, left</small>
                {before.label}
              </span>
            </Link>
            <Link href={after.href} className={`tone-${after.tone}`}>
              <span>
                <small>next door, right</small>
                {after.label}
              </span>
              <span className="hexdot" aria-hidden="true" />
            </Link>
          </nav>
        ) : null}
      </main>
      <footer className="colophon">
        <p>future written in the stars.</p>
        <ul className="doors">
          {doors.map((door) => {
            const external = door.href.startsWith("http");
            return (
              <li key={door.href}>
                <a href={door.href} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
                  {door.label}
                </a>
              </li>
            );
          })}
        </ul>
      </footer>
    </div>
  );
}
