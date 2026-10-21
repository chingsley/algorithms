export function deepCloneArgs(args: unknown[]): unknown[] {
  return JSON.parse(JSON.stringify(args)) as unknown[];
}
