export const doors = [
  { label: "the earlier site", href: "https://4mcking.github.io/mainbrane/" },
  {
    label: "what is mainbrane",
    href: "https://kingceo.medium.com/what-is-mainbrane-6d6130032ea5",
  },
  { label: "linkedin, the studio", href: "https://www.linkedin.com/company/mainbrane" },
  { label: "linkedin, king", href: "https://www.linkedin.com/in/kingceo" },
  { label: "x @mainbrane", href: "https://x.com/mainbrane" },
  { label: "x @4mcking", href: "https://x.com/4mcking" },
  { label: "heymcking@gmail.com", href: "mailto:heymcking@gmail.com" },
] as const;

export const hallway = [
  { href: "/", label: "desk" },
  { href: "/sound", label: "sound" },
  { href: "/writing", label: "writing" },
  { href: "/lab", label: "lab" },
  { href: "/archive", label: "archive" },
  { href: "/now", label: "now" },
] as const;

export type Scrap = {
  id: string;
  text: string;
  from: string;
  placeholder?: boolean;
};

export const wall: Scrap[] = [
  {
    id: "equation",
    text: "mainframe × membrane.",
    from: "the name",
  },
  {
    id: "stars",
    text: "future written in the stars.",
    from: "king",
  },
  {
    id: "lyric",
    text: "a lyric line goes here, when king shelves one.",
    from: "sound",
    placeholder: true,
  },
  {
    id: "margin",
    text: "a margin from a poem, not written into this room yet.",
    from: "writing",
    placeholder: true,
  },
  {
    id: "bench",
    text: "something half-built is on the bench in the lab.",
    from: "lab",
    placeholder: true,
  },
];

export type Sleeve = {
  id: string;
  title: string;
  note: string;
};

export const sleeves: Sleeve[] = [
  {
    id: "sleeve-01",
    title: "sleeve 01",
    note: "empty on purpose. drop a song title here.",
  },
  {
    id: "sleeve-02",
    title: "sleeve 02",
    note: "empty on purpose. a chorus can live in this one.",
  },
  {
    id: "sleeve-03",
    title: "sleeve 03",
    note: "empty on purpose. lyrics, when they are ready.",
  },
];

export type Piece = {
  slug: string;
  title: string;
  kind: "essay" | "placeholder";
  summary: string;
  body: string[];
  href?: string;
};

export const pieces: Piece[] = [
  {
    slug: "what-is-mainbrane",
    title: "what is mainbrane",
    kind: "essay",
    summary: "the long version of the name. it lives on medium, where king wrote it.",
    href: "https://kingceo.medium.com/what-is-mainbrane-6d6130032ea5",
    body: [
      "this room does not paste the essay. the essay is his, on his page.",
      "the short version, the one the hive keeps by the door: mainbrane is mainframe × membrane. a beautiful hive mind. king's, from lagos, still young.",
    ],
  },
  {
    slug: "untitled-margin",
    title: "untitled margin",
    kind: "placeholder",
    summary: "a poem drawer. nothing of king's is in it yet.",
    body: [
      "this page is a blank sleeve.",
      "when a poem is ready, it replaces this note. until then the drawer stays honest and empty.",
    ],
  },
  {
    slug: "for-later",
    title: "for later",
    kind: "placeholder",
    summary: "another blank page, waiting on a real piece.",
    body: [
      "placeholder. not a poem king wrote.",
      "swap this text for the piece when it exists.",
    ],
  },
];

export type ScrapOnBench = {
  id: string;
  title: string;
  line: string;
  href?: string;
  placeholder?: boolean;
};

export const bench: ScrapOnBench[] = [
  {
    id: "cafe-fausse",
    title: "café fausse",
    line: "a dining room. menu, chefs, a way to hold a table.",
    href: "https://cafe-fausse-iota.vercel.app/",
  },
  {
    id: "rich-media",
    title: "rich media gallery",
    line: "ad formats that move, built for dochase. mtn, milo, colgate passed through.",
    href: "https://dochase.com/creative-gallery.html",
  },
  {
    id: "malware",
    title: "header, not the file",
    line: "a classifier that reads a windows header and never runs the program.",
    href: "https://malware-detection-5eix.onrender.com/",
  },
  {
    id: "next-scrap",
    title: "the next scrap",
    line: "placeholder. whatever is on the bench this month can be named here.",
    placeholder: true,
  },
];

export const archive = [
  {
    id: "first-room",
    title: "the first public room",
    line: "the earlier site is still up. it is a door, not this hive.",
    href: "https://4mcking.github.io/mainbrane/",
  },
  {
    id: "old-line",
    title: "an older line",
    line: "placeholder. a fragment from before, when king wants one here.",
    placeholder: true,
  },
  {
    id: "old-bit",
    title: "a leftover bit",
    line: "placeholder. code, a sketch, a sentence that aged out of the other rooms.",
    placeholder: true,
  },
];

export const now = [
  { label: "making", text: "this hive. the rooms are still being furnished.", placeholder: false },
  { label: "listening", text: "a record king has not named in this room yet.", placeholder: true },
  { label: "reading", text: "a page he has not left on the desk yet.", placeholder: true },
  { label: "a line in his head", text: "placeholder. the one he would actually say today.", placeholder: true },
];

export function pieceBySlug(slug: string) {
  return pieces.find((piece) => piece.slug === slug);
}
