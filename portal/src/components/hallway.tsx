"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { hallway } from "@/lib/hive";

export function Hallway() {
  const pathname = usePathname();

  return (
    <nav className="hallway" aria-label="rooms">
      {hallway.map((room) => {
        const active =
          room.href === "/"
            ? pathname === "/"
            : pathname === room.href || pathname.startsWith(`${room.href}/`);
        return (
          <Link
            key={room.href}
            href={room.href}
            aria-current={active ? "page" : undefined}
            className={active ? "door is-here" : "door"}
          >
            {room.label}
          </Link>
        );
      })}
    </nav>
  );
}
