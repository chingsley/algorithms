// O(n) time | O(n) space
// n = length of the array;
export function nextGreaterElement(array: number[]) {
  const result = new Array(array.length).fill(-1);
  const idxStack: number[] = [0];

  for (let i = 1; i < (2 * array.length); i++) {
    const idx = i % array.length;

    while (idxStack.length > 0 && array[idx] > array[idxStack[idxStack.length - 1]]) {
      result[idxStack.pop()!] = array[idx];
    }

    idxStack.push(idx);
  }

  return result;
}