/**
 * let m = taret, n = length of words array
 * Time = O((n^m) * m ) time
 * Space = O(m) space (due to recursive callstack)
 */
export function countConstruct(target: string, words: string[]) {
  if (target === "") return 1;

  let count = 0;
  for (let word of words) {
    if (target.indexOf(word) !== 0) continue;

    const rem = target.slice(word.length);
    count += countConstruct(rem, words);
  }

  return count;
}

console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // expect 1;
console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'ef', 'def'])); // expect 2;
console.log(countConstruct('abcdef', ['abc', 'def', 'ab', 'cd', 'ef', 'abcd'])); // expect 3
// console.log(
//   countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
//     'e',
//     'ee',
//     'eee',
//     'eeee',
//     'eeeee',
//   ])
// ); // will time out without memoization



/**
 * let m = taret, n = length of words array
 * Time = O(m^2 * n ) time
 * Space = O(m) space (due to recursive callstack and size of memo)
 */
interface Memo { [key: string]: number; };
export function countConstructMemoized(target: string, words: string[], memo: Memo = {}) {
  if (target === "") return 1;
  if (target in memo) return memo[target];

  let count = 0;
  for (let word of words) {
    if (target.indexOf(word) !== 0) continue;

    const rem = target.slice(word.length);
    count += countConstructMemoized(rem, words, memo);
  }

  memo[target] = count;
  return count;
}

console.log(countConstructMemoized('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // expect 1;
console.log(countConstructMemoized('abcdef', ['ab', 'abc', 'cd', 'ef', 'def'])); // expect 2;
console.log(countConstructMemoized('abcdef', ['abc', 'def', 'ab', 'cd', 'ef', 'abcd'])); // expect 3
console.log(
  countConstructMemoized('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
  ])
); // expect 0