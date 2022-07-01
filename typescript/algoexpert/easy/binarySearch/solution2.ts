// 2nd Best Solution: * * *
// O(log(n)) time (n = no. of items in the array)
// O(log(n)) space (due to the recursive calls on each successful half of the array)
export function binarySearch(array: number[], target: number): number {
  return binSearchHelper(array, target, 0, array.length - 1);
}

function binSearchHelper(array: number[], target: number, startIdx: number, endIdx: number): number {
  if (startIdx > endIdx) return -1;

  const midIdx: number = Math.floor((startIdx + endIdx) / 2);
  // console.log({ midIdx })

  if (target < array[midIdx]) {
    return binSearchHelper(array, target, startIdx, midIdx - 1);
  } else if (target > array[midIdx]) {
    return binSearchHelper(array, target, midIdx + 1, endIdx);
  } else {
    return midIdx;
  }
}


console.log(
  binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33)
);


{
  // // O(log(n)) time
  // // O(log(n)) space (due to recursive stack size)
  // export function binarySearch(array: number[], target: number, startIdx = 0, endIdx = array.length - 1): number {
  //   if(startIdx > endIdx) {
  //     return -1;
  //   }

  //   const midIdx = Math.floor((startIdx + endIdx)/2);
  //   if (array[midIdx] === target) {
  //     return midIdx;
  //   }

  //   if(target < array[midIdx]) {
  //     return binarySearch(array, target, startIdx,  midIdx - 1)
  //   } else {
  //     return binarySearch(array, target, midIdx + 1, endIdx)
  //   }
  // }

}