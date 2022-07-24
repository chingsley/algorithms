/**
 * * NOTE: THIS ASSUMES 'string' IS ALL LOWERCASE (USE toLowerCase() IF THAT IS NOT THE CASE)
 * Time: O(n^2)
 * space: O(n)
 * @param string n
 * @returns string
 */
export function longestPalindromicSubstring(string: string): string {
  let [start, end] = [0, 0];

  for (let i = 0; i < string.length; i++) {
    const odd: { [key: string]: number; } = countOddPalindromeAt(i, string);
    const even: { [key: string]: number; } = countEvenPalindromeAt(i, string);
    const longer = odd.end - odd.start > even.end - even.start ? odd : even;
    if (longer.end - longer.start > end - start) {
      [start, end] = [longer.start, longer.end];
    }
  }

  return string.slice(start, end + 1);
}

function countOddPalindromeAt(i: number, string: string): { [key: string]: number; } {
  let result = { start: i, end: i };
  let leftIdx = i - 1;
  let rightIdx = i + 1;
  while (leftIdx >= 0 && rightIdx < string.length && string[leftIdx] === string[rightIdx]) {
    result.start = leftIdx;
    result.end = rightIdx;
    leftIdx -= 1;
    rightIdx += 1;
  }

  return result;
}

function countEvenPalindromeAt(i: number, string: string): { [key: string]: number; } {
  let result = { start: i, end: i };
  let leftIdx = i;
  let rightIdx = i + 1;
  while (leftIdx >= 0 && rightIdx < string.length && string[leftIdx] === string[rightIdx]) {
    result.start = leftIdx;
    result.end = rightIdx;
    leftIdx -= 1;
    rightIdx += 1;
  }

  return result;
}

console.log(
  longestPalindromicSubstring('chetnhaah')
);
