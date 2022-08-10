/**
 * 
 * @param array (N)
 * @param sequence (n)
 * @returns boolean
 * 
 * Time: O(N)
 *    Proof: Time = O(N+n)
 *    But since n is gaurantted to be <= N
 *    If at worst case, n becomes = N
 *    Then Time: O(N + N) = O(2N) = O(N)
 * Space: O(1)
 */
export function isValidSubsequence(array: number[], sequence: number[]) {
  let i = 0;
  for(const num of sequence) {
    let numFoundInArr = false;
    while(i < array.length && !numFoundInArr) {
      if (array[i] === num) {
        numFoundInArr = true;
      }
      i++;
    }

    if(!numFoundInArr) {
      return false;
    }
  }
  return true;
}

const data = {
  "array": [5, 1, 22, 25, 6, -1, 8, 10],
  "sequence": [1, 6, -1, 10]
};

const data2 = {
  "array": [5, 1, 22, 25, 6, -1, 8, 10],
  "sequence": [6, 1, -1, 10]
};

console.log(
  isValidSubsequence(data.array, data.sequence)
);

console.log(
  isValidSubsequence(data2.array, data2.sequence)
);