// O(n^2) time
// O(1) space
export function selectionSort(array: number[]) {
  let smallestIdx: number = 0;
  while(smallestIdx < array.length -1) {
    for(let i = smallestIdx + 1; i < array.length; i++) {
      if(array[i] < array[smallestIdx]) {
        swap(i, smallestIdx, array)
      }
    }
    smallestIdx++;
  }
return array;
}

function swap(a: number, b: number, array: number[]) {
const temp = array[a];
array[a] = array[b];
array[b] = temp; 
}
