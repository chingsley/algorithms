/**
 * NOTE: THIS ASSUMES 'string' IS ALL LOWERCASE (USE toLowerCase() IF THAT IS NOT THE CASE)
 * Time: O(n^2)
 * space: O(n)
 * @param string n
 * @returns string
 */
export function longestPalindromicSubstring(string: string): string {
  let [start, end] = [0, 0];


  for (let i = 0; i < string.length; i++) {
    const odd: { [key: string]: number; } = getPalindromeRange(i, string, i - 1, i + 1);
    const even: { [key: string]: number; } = getPalindromeRange(i, string, i, i + 1);
    const longer = odd.end - odd.start > even.end - even.start ? odd : even;
    if (longer.end - longer.start > end - start) {
      [start, end] = [longer.start, longer.end];
    }
  }

  return string.slice(start, end + 1);
}

function getPalindromeRange(i: number, string: string, nextLeft: number, nextRight: number): { [key: string]: number; } {
  let result = { start: i, end: i };
  while (nextLeft >= 0 && nextRight < string.length && string[nextLeft] === string[nextRight]) {
    result.start = nextLeft;
    result.end = nextRight;
    nextLeft -= 1;
    nextRight += 1;
  }

  return result;
}