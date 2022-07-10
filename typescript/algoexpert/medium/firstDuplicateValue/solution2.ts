/**
 * Time: O(n)
 * Space: O(n)
 * @param array n
 * @returns number
 */
export function firstDuplicateValue(array: number[]) {
  const seen: Set<number> = new Set();
  for (let num of array) {
    if (seen.has(num)) return num;
    seen.add(num);
  }
  return -1;
}
