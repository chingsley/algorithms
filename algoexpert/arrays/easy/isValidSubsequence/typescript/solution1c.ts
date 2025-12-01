/**
 * Time:O(n)
 * Space: O(1)
 * Where n = no. of items in 'array' (first argument)
 * @param array n
 * @param sequence s
 * @returns boolean
 */
export function isValidSubsequence(array: number[], sequence: number[]) {
  let iArr = 0;
  for (let iSeq = 0; iSeq < sequence.length; iSeq++) {
    let found: boolean = false;
    while (iArr < array.length && !found) {
      if (array[iArr] == sequence[iSeq]) {
        found = true;
      }
      iArr += 1;
    }
    if (!found) return false;
  }
  return true;
}
