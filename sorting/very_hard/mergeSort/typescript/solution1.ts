// O(n logn n)
export function mergeSort(array: number[]): number[] {
  if (array.length <= 1) return array;

  const [left, right] = splitInHalf(array);
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}

// O(log n) time
function splitInHalf(array: number[]): number[][] {
  const midIdx = Math.floor(array.length / 2);
  return [array.slice(0, midIdx), array.slice(midIdx)];
}

// O(n) time
function merge(left: number[], right: number[]): number[] {
  const list: number[] = [];
  let [i, j] = [0, 0];
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      list.push(left[i]);
      i += 1;
    } else {
      list.push(right[j]);
      j += 1;
    }
  }
  list.push(...left.slice(i));
  list.push(...right.slice(j));

  return list;
}