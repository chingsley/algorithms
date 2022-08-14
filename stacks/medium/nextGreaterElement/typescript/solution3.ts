/**
 * O(n) time
 * O(n) space
 * @param array n
 * @returns 
 */
export function nextGreaterElement(array: number[]): number[] {
  const result = new Array(array.length).fill(-1);
  const stackOfIdxs: number[] = [];

  for (let i = 0; i < (2 * array.length); i++) {
    const num: number = array[i % array.length];

    while (stackOfIdxs.length > 0 && num > array[stackOfIdxs[stackOfIdxs.length - 1]]) {
      result[stackOfIdxs.pop()] = num;
    }
    stackOfIdxs.push(i % array.length);
  }


  return result;
}