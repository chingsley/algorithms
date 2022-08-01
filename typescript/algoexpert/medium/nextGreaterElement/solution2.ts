/**
 * O(n^2) time
 * O(n) space
 * @param array n
 * @returns 
 */
export function nextGreaterElement(array: number[]) {
  const output: number[] = [];
  for (let i = 0; i < array.length; i++) {
    let j = i + 1;
    let foundIdx = -1;
    while (j < (2 * array.length) && foundIdx < 0) {
      if (array[j % array.length] > array[i]) {
        foundIdx = j % array.length;
      }
      j += 1;
    }
    if (foundIdx > -1) {
      output.push(array[foundIdx]);
    } else {
      output.push(-1);
    }
  }
  return output;
}
