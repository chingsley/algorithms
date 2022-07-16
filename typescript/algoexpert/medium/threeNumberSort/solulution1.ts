// O(n) time | O(1) space; where n = length of the array
function threeNumberSort(array: number[], order: number[]): number[] {
  const bucket: number[] = [0, 0, 0];

  for (const num of array) {
    const idxOfNumInOrderArr = order.indexOf(num);
    bucket[idxOfNumInOrderArr] += 1;
  }

  let currentIdx = 0;
  bucket.forEach((bucketValue, bucketValueIdx) => {
    while (bucketValue > 0) {
      array[currentIdx] = order[bucketValueIdx];
      bucketValue -= 1;
      currentIdx += 1;
    }
  });
  return array;
}

// O(n) time | O(1) space; where n = length of the array
function threeNumberSort2(array: number[], order: number[]): number[] {
  parseLeftToRight(array, order);
  parseRightToLeft(array, order);
  return array;
}

function parseLeftToRight(array: number[], order: number[]): number[] {
  let valueToMove = order[0];
  let positionToReplace = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === valueToMove && i !== positionToReplace) {
      swap(i, positionToReplace, array);
    }
    if (array[positionToReplace] === valueToMove) {
      positionToReplace += 1;
    }
  }
  return array;
}
function parseRightToLeft(array: number[], order: number[]): number[] {
  let valueToMove = order[order.length - 1];
  let positionToReplace = array.length - 1;
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === valueToMove && i !== positionToReplace) {
      swap(i, positionToReplace, array);
    }
    if (array[positionToReplace] === valueToMove) {
      positionToReplace -= 1;
    }
  }
  return array;
}

function swap(i: number, j: number, array: number[]): number[] {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return array;
}

const array = [1, 0, 0, -1, -1, 0, 1, 1];
const order = [0, 1, -1];

// [7, 8, 9, 7, 8, 9, 9, 9, 9, 9, 9, 9],

// [8, 7, 9]

// O(n) time | O(1) space; where n = length of the array
function threeNumberSort3(array: number[], order: number[]): number[] {
  let firstPointer = 0;
  let secondPointer = 0;
  let thirdPointer = array.length - 1;
  const [first, second, third] = order;

  while (secondPointer <= thirdPointer) {
    if (array[secondPointer] === second) {
      secondPointer += 1;
    } else if (array[secondPointer] === first) {
      swap(firstPointer, secondPointer, array);
      firstPointer += 1;
      secondPointer += 1;
    } else {
      // ie. array[secondPointer] === third
      swap(secondPointer, thirdPointer, array);
      thirdPointer -= 1;
    }
  }
  return array;
}

const test1 = {
  array: [7, 8, 9, 7, 8, 9, 9, 9, 9, 9, 9, 9],
  order: [8, 7, 9],
};

console.log(threeNumberSort2(test1.array, test1.order));

console.log(threeNumberSort3(test1.array, test1.order));
