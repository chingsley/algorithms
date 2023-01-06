/**
 * Given a non-empty string, wrtie a function that returns the minimum
 * number of cuts needed to perform on the string such that each
 * remaining substring is a palindrome.
 * 
 * A palindrome is defined as a string that's written the same forward
 * as backward. Note that single-character strings are palindromes.
 * 
 * e.g:
 *    staring = "noonabbad"
 *    result = 2 (with two cuts, we get 3 palindromes: "noon", "abba" and "d")
 */

// O(n^3) time | O(n^2) space (n = length of string)
export function palindromePartitioningMinCuts(string: string) {
  const matrix = new Array(string.length).fill(0).map(
    () => new Array(string.length).fill(false)
  );
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (isPalindrome([row, col], string)) matrix[row][col] = true;
    }
  }

  const cuts = new Array(string.length).fill(0);
  for (let i = 1; i < cuts.length; i++) {
    if (matrix[0][i] === true) continue;

    cuts[i] = cuts[i - 1] + 1;
    let col = i;
    for (let row = 1; row < string.length; row++) {
      if (matrix[row][col] === true) {
        cuts[i] = cuts[row - 1] + 1;
        break;
      }
    }
  }

  // console.log(cuts)
  // print2DArr(matrix)
  return cuts[string.length - 1];
}

function isPalindrome([i, j]: number[], string: string) {
  if (i > j) return false;
  while (i <= j) {
    if (string[i] !== string[j]) return false;
    [i, j] = [i += 1, j -= 1];
  }

  return true;
}