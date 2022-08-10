/**
 * Same as soltion 2, just looped differently
 * Time: O(n)
 * Space: O(n)
 * @param array n
 * @returns array
 */
 export function sortedSquaredArray(array: number[]) {
  const result: number[] = new Array(array.length).fill(0);
  let leftIdx = 0;
  let rightIdx = array.length - 1;

  for(let i = result.length - 1; i >= 0; i--) {
    if(Math.abs(array[leftIdx]) > Math.abs(array[rightIdx])) {
      result[i] = array[leftIdx] * array[leftIdx];
      leftIdx++;
    } else {
      result[i] = array[rightIdx] * array[rightIdx];
      rightIdx--;
    }
  }

  return result;
}