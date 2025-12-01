
/**
 * Time: O(n)
 * Space: O(n)
 *  Where n = length of the array
 * 
 * @param array numbers[][]
 * @returns boolean
 */
export function hasSingleCycle(array: number[]) {
  let visited: Set<number> = new Set();

  const firstIdx = 0;
  visited.add(firstIdx);

  let currentIdx = firstIdx;
  while (visited.size < array.length) {
    const nextIdx = computeNextIdx(array, currentIdx);

    if (visited.has(nextIdx)) return false;

    visited.add(nextIdx);
    currentIdx = nextIdx;
  }

  const lastIdx = computeNextIdx(array, currentIdx);
  return firstIdx === lastIdx;
}







function computeNextIdx(array: number[], currentIdx: number) {
  let nextIdx = currentIdx + array[currentIdx];
  while (nextIdx < 0) nextIdx += array.length;
  while (nextIdx > array.length - 1) nextIdx -= array.length;
  return nextIdx;
}


console.log(
  hasSingleCycle(
    [2, 3, 1, -4, -4, 2]
  ),
  hasSingleCycle(
    [1, 1, 1, 1, 2]
  )
);