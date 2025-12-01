// O(n) time
// O(1) space
export function findThreeLargestNumbers(array: number[]) {
  const threeLargestArr: Array<number | null> = [null, null, null];
  for (const num of array) {
    updateThreeLargestArr(threeLargestArr, num);
  }
  return threeLargestArr;
}

function updateThreeLargestArr(
  threeLargestArr: Array<number | null>,
  num: number
) {
  if (threeLargestArr[2] === null || num > threeLargestArr[2]) {
    shiftAndUpdate(threeLargestArr, num, 2);
  } else if (threeLargestArr[1] === null || num > threeLargestArr[1]) {
    shiftAndUpdate(threeLargestArr, num, 1);
  } else if (threeLargestArr[0] === null || num > threeLargestArr[0]) {
    shiftAndUpdate(threeLargestArr, num, 0);
  }
}

function shiftAndUpdate(array: Array<number | null>, num: number, idx: number) {
  for (let i = 0; i <= idx; i++) {
    if (i === idx) {
      array[i] = num;
    } else {
      array[i] = array[i + 1];
    }
  }
}

console.log(
  findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])
);
