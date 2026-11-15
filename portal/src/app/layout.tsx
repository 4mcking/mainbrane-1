import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, Literata } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
});

const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin"],
});

const plex = IBM_Plex_Mono({
  variable: "--font-plex",
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
      className={`${fraunces.variable} ${literata.variable} ${plex.variable} h-full antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
