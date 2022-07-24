// O(n) time | O(1) space
export function isPalindrome(string: string) {
  let [i, j] = [0, string.length - 1];
  while (i <= j) {
    if (string[i] !== string[j]) return false;
    i += 1;
    j -= 1;
  }

  return true;
}