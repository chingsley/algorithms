/**
 * ax palin subsequence
Write a function, maxPalinSubsequence, that takes in a string as an argument.
The function should return the length of the longest subsequence of the string that is also a palindrome.

A subsequence of a string can be created by deleting any characters of the string, while maintaining the relative order of characters.

e.g
maxPalinSubsequence("luwxult"); // -> 5
 */


interface Memo { [key: string]: number; };

export const maxPalinSubsequence = (str: string, memo: Memo = {}): number => {
  if (str.length === 0) return 0;
  if (str.length === 1) return 1;
  if (str in memo) return memo[str];

  let currLength = 0;
  const nextStrs = [];
  if (str[0] === str[str.length - 1]) {
    currLength += 2;
    nextStrs.push(str.slice(1, str.length - 1));
  } else {
    nextStrs.push(str.slice(1));
    nextStrs.push(str.slice(0, str.length - 1));
  }

  let max = 0;
  for (let stri of nextStrs) {
    max = Math.max(max, maxPalinSubsequence(stri, memo));
  }

  memo[str] = max + currLength;
  return memo[str];
};


