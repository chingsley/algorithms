/**
 * Time: O(n)
 * Space O(n)
 * @param array n
 * @returns array
 */
export function sortedSquaredArray(array: number[]) {
  let res: number[] = new Array().fill(0);

  let i = 0;
  let j = array.length - 1;
  for (let resIdx = res.length - 1; resIdx >= 0; resIdx--) {
    if (Math.abs(array[i]) > Math.abs(array[j])) {
      res[resIdx] = array[i] * array[i];
      i++;
    } else {
      res[resIdx] = array[j] * array[j];
      j--;
    }
  }
  return res;
}