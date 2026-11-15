import type { Metadata } from "next";
import { Bricolage_Grotesque, Caveat, IBM_Plex_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
});

const body = Newsreader({
  variable: "--font-body",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const hand = Caveat({
  variable: "--font-hand",
  subsets: ["latin"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "mainbrane",
    template: "%s · mainbrane",
  },
  description:
    "a beautiful hive mind. rooms for sound, writing, scraps from the bench, and whatever king is into right now.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${hand.variable} ${mono.variable} h-full antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
