type Range = [number, number];

export function searchForRange(array: number[], target: number): Range {
  let result: Range = [-1, -1];
  let [i, j] = [0, array.length - 1];
  while (i <= j) {
    console.log({ i, j });
    const midIdx = Math.floor((i + j) / 2);
    if (array[midIdx] > target) {
      j = midIdx - 1;
    } else if (array[midIdx] < target) {
      i = midIdx + 1;
    } else {
      if (array[midIdx - 1] !== target) {
        result[0] = midIdx;
        break;
      } else {
        j = midIdx - 1;
      }
    }
  }

  [i, j] = [0, array.length - 1];
  while (i <= j) {
    console.log({ i, j });
    const midIdx = Math.floor((i + j) / 2);
    if (array[midIdx] > target) {
      j = midIdx - 1;
    } else if (array[midIdx] < target) {
      i = midIdx + 1;
    } else {
      if (array[midIdx + 1] !== target) {
        result[1] = midIdx;
        break;
      } else {
        i = midIdx + 1;
      }
    }
  }

  return result;
}

console.log(
  searchForRange([0, 1, 21, 33, 45, 45, 45, 45, 45, 45, 61, 71, 73], 45)
);