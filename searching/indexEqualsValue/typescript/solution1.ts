// O(n) time | O(1) space;
export function indexEqualsValue(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    if (i === array[i]) return i;
  }
  return -1;
}
