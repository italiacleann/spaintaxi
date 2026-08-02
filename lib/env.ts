/** Returns the value of the first set (non-empty) environment variable among the given names. */
export function firstEnv(...names: string[]): string | undefined {
  for (const name of names) {
    const value = process.env[name];
    if (value) return value;
  }
  return undefined;
}
