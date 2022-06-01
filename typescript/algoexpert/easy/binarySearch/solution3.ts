// Least Acceptable Solution: *
// O(log(n)) time (n = no. of items in the array)
// O(n) space (the .map creates a new array, same length as n)
export function binarySearch(array: number[], target: number): number {
  return performBinSearch(array.map((value, idx) => ({ value, idx})), target) ;
}


type Obj = {
  value: number;
  idx: number
}

function performBinSearch(array: Obj[], target: number): number {
  if(array.length === 0) return -1;

  const midIdx: number = Math.floor((array.length - 1) / 2);
  // console.log({ midIdx })

  if(target < array[midIdx].value) {
    return performBinSearch(array.slice(0, midIdx), target);
  } else if (target > array[midIdx].value) {
    return performBinSearch(array.slice(midIdx + 1, array.length), target)
  } else {
    return array[midIdx].idx;
  }
}


console.log(
  binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33)
);