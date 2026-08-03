export interface TocEntry {
  id: string;
  text: string;
  level: 2 | 3;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function stripTags(html: string): string {
  return html.replace(/<[^>]+>/g, "").trim();
}

/**
 * Walks the article HTML for <h2>/<h3> tags, injects deduped slug ids for
 * anchor-linking (used by the table of contents), and wraps <table> elements
 * so wide comparison tables scroll instead of breaking the layout on mobile.
 * Regex-based on purpose: this content is authored by us (seed script/DB),
 * not third-party input, so a targeted match for exactly these two patterns
 * is safe and avoids pulling in a full HTML parser dependency.
 */
export function processContentHtml(html: string): { html: string; toc: TocEntry[] } {
  const toc: TocEntry[] = [];
  const seen = new Map<string, number>();

  const withHeadingIds = html.replace(
    /<h([23])(\s[^>]*)?>([\s\S]*?)<\/h\1>/g,
    (match, levelStr: string, attrs = "", inner: string) => {
      const level = Number(levelStr) as 2 | 3;
      const text = stripTags(inner);
      let id = slugify(text) || "section";
      const count = seen.get(id) ?? 0;
      seen.set(id, count + 1);
      if (count > 0) id = `${id}-${count}`;

      toc.push({ id, text, level });
      return `<h${level} id="${id}"${attrs ?? ""}>${inner}</h${level}>`;
    }
  );

  const withScrollableTables = withHeadingIds.replace(
    /<table(\s[^>]*)?>([\s\S]*?)<\/table>/g,
    (match) => `<div class="overflow-x-auto">${match}</div>`
  );

  return { html: withScrollableTables, toc };
}

/** Word-count-based reading time, used by the seed script when authoring posts. */
export function computeReadingTimeMinutes(html: string): number {
  const words = stripTags(html).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
