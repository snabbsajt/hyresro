import { parseCsv, rowsToObjects } from "./csv";

export type SiteNote = {
  text: string;
  href: string;
};

const NOTES_CSV =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR9Ob65NunStHSg6JB1wQei-hjO4HY0DC4OihuM9OI2fqxbJlnO35C7ZJoIzwu_pLJ3lInZI1KFDVzL/pub?gid=504020336&single=true&output=csv";

/** Built-in map when NOTES_CSV failar. */
export const fallbackNotes: Record<string, SiteNote> = {
  kontrakt: {
    text: "Kolla kontraktet innan ni sätter upp något på vägg.",
    href: "/guide/kolla-kontraktet",
  },
  borra: {
    text: "Vad som oftast gäller om ni vill borra.",
    href: "/guide/borra-i-hyresratt",
  },
  rullgardin: {
    text: "Rullgardin utan att borra.",
    href: "/guide/rullgardin-utan-borra",
  },
  hylla: {
    text: "Hylla utan att borra.",
    href: "/guide/hylla-utan-borra",
  },
  flytt: {
    text: "Checklista när ni flyttar.",
    href: "/checklista-flytta",
  },
  solskydd: {
    text: "Solskydd till hyresrätten.",
    href: "/solskydd",
  },
  fasten: {
    text: "Fästen utan onödiga hål.",
    href: "/fasten",
  },
};

function parseNotes(csv: string): Record<string, SiteNote> {
  const rows = rowsToObjects(parseCsv(csv));
  const map: Record<string, SiteNote> = {};
  for (const row of rows) {
    const key = row.key?.trim();
    const text = row.text?.trim();
    const href = row.href?.trim();
    if (!key || !text || !href) continue;
    map[key] = { text, href };
  }
  return Object.keys(map).length > 0 ? map : fallbackNotes;
}

export async function getNotes(): Promise<Record<string, SiteNote>> {
  try {
    const res = await fetch(NOTES_CSV, { next: { revalidate: 900 } });
    if (!res.ok) return fallbackNotes;
    const text = await res.text();
    if (!text.trim()) return fallbackNotes;
    return parseNotes(text);
  } catch {
    return fallbackNotes;
  }
}

export async function getNote(key: string): Promise<SiteNote | undefined> {
  const notes = await getNotes();
  return notes[key];
}
