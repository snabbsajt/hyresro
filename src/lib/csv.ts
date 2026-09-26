/** Minimal CSV parser (quoted fields, commas, newlines). */
export function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let i = 0;
  let inQuotes = false;

  const pushCell = () => {
    row.push(cell);
    cell = "";
  };
  const pushRow = () => {
    // skip fully empty trailing lines
    if (row.length === 1 && row[0] === "" && rows.length > 0) {
      row = [];
      return;
    }
    rows.push(row);
    row = [];
  };

  while (i < text.length) {
    const ch = text[i]!;
    if (inQuotes) {
      if (ch === '"') {
        if (text[i + 1] === '"') {
          cell += '"';
          i += 2;
          continue;
        }
        inQuotes = false;
        i += 1;
        continue;
      }
      cell += ch;
      i += 1;
      continue;
    }
    if (ch === '"') {
      inQuotes = true;
      i += 1;
      continue;
    }
    if (ch === ",") {
      pushCell();
      i += 1;
      continue;
    }
    if (ch === "\r") {
      i += 1;
      continue;
    }
    if (ch === "\n") {
      pushCell();
      pushRow();
      i += 1;
      continue;
    }
    cell += ch;
    i += 1;
  }
  if (cell.length > 0 || row.length > 0) {
    pushCell();
    pushRow();
  }
  return rows;
}

export function rowsToObjects(rows: string[][]): Record<string, string>[] {
  if (rows.length < 2) return [];
  const header = rows[0]!.map((h) => h.trim());
  return rows.slice(1).map((cols) => {
    const obj: Record<string, string> = {};
    header.forEach((key, idx) => {
      obj[key] = (cols[idx] ?? "").trim();
    });
    return obj;
  });
}
