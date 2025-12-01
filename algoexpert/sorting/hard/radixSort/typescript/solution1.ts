// O(p * (n + b));
// p = total no. of passes
// n = length of input array;
// b = number base used (here we used decimal, so base = 10)
export function radixSort(array: number[]) {
  const maxNumber = Math.max(...array);
  const passes = maxNumber.toString().length;
  let sorted: number[] = [];
  let currentPass = passes;
  while (currentPass > 0) {
    const digitIndex = currentPass - 1;
    const counts: number[][] = new Array(10).fill(0).map(() => []);
    for (let i = array.length - 1; i >= 0; i--) {
      const countIdx = pad(array[i], passes)[digitIndex];
      counts[Number(countIdx)].push(array[i]);
    }

    for (let arr of counts) {
      while (arr.length > 0) {
        sorted.push(arr.pop()!);
      }
    }

    array = sorted;
    sorted = [];
    currentPass -= 1;
  }
  return array;
}

function pad(num: number, size: number) {
  let numString = num.toString();
  while (numString.length < size) numString = "0" + numString;
  return numString;
}


console.log(
  radixSort([8762, 654, 3008, 345, 87, 65, 234, 12, 2])
);