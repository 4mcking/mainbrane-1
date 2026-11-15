import Link from "next/link";
import { doors } from "@/lib/hive";
import { Hallway } from "./hallway";
import { Host } from "./host";

export function Room({
  name,
  line,
  largeHost = false,
  children,
}: {
  name: string;
  line: string;
  largeHost?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="room">
      <a className="skip" href="#room">
        skip to the room
      </a>
      <header className="room-top">
        <Link href="/" className="brand">
          mainbrane
        </Link>
        <Host line={line} large={largeHost} />
      </header>
      <main id="room" className="stage">
        <p className="room-kicker">{name}</p>
        {children}
      </main>
      <Hallway />
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
