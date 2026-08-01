export function hashIndex(seed: string, length: number, salt = 0): number {
  let hash = 0;
  const input = `${seed}::${salt}`;
  for (let i = 0; i < input.length; i++) {
    hash = (hash * 31 + input.charCodeAt(i)) >>> 0;
  }
  return hash % length;
}

export function pick<T>(items: T[], seed: string, salt = 0): T {
  return items[hashIndex(seed, items.length, salt)];
}

/**
 * Builds a title from (template x action) combinations, preferring one that
 * lands inside [minLen, maxLen]. Falls back to the closest-fitting option.
 */
export function buildLengthAwareTitle(
  templates: ((label: string, action: string) => string)[],
  actions: string[],
  label: string,
  seed: string,
  salt: number,
  minLen = 50,
  maxLen = 60
): string {
  const candidates: string[] = [];
  for (const template of templates) {
    for (const action of actions) {
      candidates.push(template(label, action));
    }
  }

  const inRange = candidates.filter((c) => c.length >= minLen && c.length <= maxLen);
  if (inRange.length > 0) {
    return pick(inRange, seed, salt);
  }

  const target = (minLen + maxLen) / 2;
  return candidates.reduce((closest, current) =>
    Math.abs(current.length - target) < Math.abs(closest.length - target) ? current : closest
  );
}

/** Picks the template (from a single-argument pool) whose output best fits [minLen, maxLen]. */
export function buildLengthAwareText(
  templates: ((label: string) => string)[],
  label: string,
  seed: string,
  salt: number,
  minLen: number,
  maxLen: number
): string {
  const candidates = templates.map((template) => template(label));
  const inRange = candidates.filter((c) => c.length >= minLen && c.length <= maxLen);
  if (inRange.length > 0) {
    return pick(inRange, seed, salt);
  }

  const target = (minLen + maxLen) / 2;
  return candidates.reduce((closest, current) =>
    Math.abs(current.length - target) < Math.abs(closest.length - target) ? current : closest
  );
}
