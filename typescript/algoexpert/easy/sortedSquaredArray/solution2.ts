/**
 * Time: O(n)
 * Space: O(n)
 * @param array n
 * @returns array
 */
 export function sortedSquaredArray(array: number[]) {
  const result: number[] = new Array(array.length).fill(0);
  let leftIdx = 0;
  let rightIdx = array.length - 1;
  let currentOutputIdx = result.length - 1;
  while(leftIdx < rightIdx) {
    if(Math.abs(array[leftIdx]) > Math.abs(array[rightIdx])) {
      result[currentOutputIdx] = array[leftIdx] * array[leftIdx];
      leftIdx++;
    } else {
      result[currentOutputIdx] = array[rightIdx] * array[rightIdx];
      rightIdx--;
    }
    currentOutputIdx--;
  }
  result[0] = array[leftIdx] * array[leftIdx]

  return result;
}


console.log(
  sortedSquaredArray([-9, 1, 2, 3, 5, 6, 8])
)