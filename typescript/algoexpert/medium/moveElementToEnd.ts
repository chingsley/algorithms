// O(n) time | O(1) space
export function moveElementToEnd(array: number[], toMove: number) {
  let rightIdx = array.length - 1;
  let leftIdx = 0;
  while(leftIdx < rightIdx) {
    while(leftIdx < rightIdx && array[rightIdx] === toMove) {
      rightIdx--;
    }

    if(array[leftIdx] === toMove) {
      swapValues(leftIdx, rightIdx, array)
    }
    leftIdx++;
  }
  return array;
}

function swapValues(leftIdx: number, rightIdx: number, array: number[]) {
  const temp = array[rightIdx];
  array[rightIdx] = array[leftIdx];
  array[leftIdx] = temp;
}

const { array, toMove } = {
  "array": [2, 1, 2, 2, 2, 3, 4, 2],
  "toMove": 2
};

console.log(
  moveElementToEnd(array, toMove)
)

/**
 * [2, 1, 2, 2, 2, 3, 4, 2]
 * [4, 1, 3., 2., 2, 2,2, 2]
 */