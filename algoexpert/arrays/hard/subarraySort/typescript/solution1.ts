type Range = [number, number];

// O(n) time | O(1) space;
export function subarraySort(array: number[]): Range {
  let [minUnsorted, maxUnsorted] = [Infinity, -Infinity];
  for (let i = 0; i < array.length; i++) {
    const prevNum = i - 1 < 0 ? -Infinity : array[i - 1];
    const currNum = array[i];
    const nextNum = i + 1 > array.length - 1 ? Infinity : array[i + 1];
    // if (currNum < prevNum || currNum > nextNum) {
    if (!(prevNum <= currNum && currNum <= nextNum)) {
      if (currNum < minUnsorted) minUnsorted = currNum;
      if (currNum > maxUnsorted) maxUnsorted = currNum;
    }
  }

  if (minUnsorted === Infinity || maxUnsorted === -Infinity) {
    return [-1, -1];
  }

  let [minIdx, maxIdx] = [-1, -1];
  for (let i = 0; i < array.length; i++) {
    const [prev, curr] = [i - 1 < 0 ? -Infinity : array[i - 1], array[i]];
    if (minIdx > -1) break;
    if (minUnsorted >= prev && minUnsorted < curr) minIdx = i;
  }

  for (let j = array.length - 1; j >= 0; j--) {
    const [curr, nxt] = [array[j], j + 1 > array.length - 1 ? Infinity : array[j + 1]];
    if (maxIdx > -1) break;
    if (maxUnsorted <= nxt && maxUnsorted > curr) maxIdx = j;
  }

  return [minIdx, maxIdx];
}
