export function indent(count: number): string {
  let str = '';
  while (count-- > 0) str += ' ';
  return str;
}