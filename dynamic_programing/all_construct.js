/***
 * Problem:
 *    Write a function `allConstruct(target, wordBank)` that takes in a
 *    target string and an array of strings.
 *
 *    The function should return a 2D array containing all of the ways that the
 *    `target` can be constructed by concatenating elements of the `wordBank` arrya.
 *    Each element of the 2D array should represent one combination that constructs
 *    the `target`.
 *
 *    You may reuse elements of the `wordBank` as many times as needed
 *
 *    EXAMPLES: allConstruct(abcdef, [ab, abc, cd, def, abcd, ef, c]) => 4 ways => [ [ab, cd, ef], [ab, c, def], [abc, def], [abcd, ef]]
 *              allConstruct(purple, [purp, p, ur, le, purpl]) =>  2 ways =>[ [purp, le], [p, ur, p, le]]
 *              allConstruct('', [cat, dog, mouse]) => 1 way => [[]] -> i.e a 2D empty array
 *              allConstruct(hello, [cat, dog, mouse]) => 0 ways => [] -> ie. a 1D empty array
 *
 * Analysis:
 *    E.g. for a call allConstruct(targetString, wordBank)
 *    Let m = length of targetString, n = length of the wordBank array
 *    without memoization:
 *          Time complexity = O((n^m))
 *          Space complexity = O(m)
 *    with memoization:
 *          Time complexity = O((n^m))
 *          Space complexity = O(m)
 */
const allConstruct = (target, wordBank) => {
  if (target === '') return [[]];

  let result = [];

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank);
      const targetWays = suffixWays.map((way) => [word, ...way]);
      result.push(...targetWays);
    }
  }

  return result;
};

const allConstructMemoized = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === '') return [[]];

  let result = [];

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstructMemoized(suffix, wordBank, memo);
      const targetWays = suffixWays.map((way) => [word, ...way]);
      result.push(...targetWays);
    }
  }

  memo[target] = result;
  return result;
};

console.log(allConstructMemoized('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
// [
//   ['purp', 'le'],
//   ['p', 'ur', 'p', 'le']
// ]
console.log(
  allConstructMemoized('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c'])
);
// [
//   ['abc', 'cd', 'ef'],
//   ['ab', 'c', 'def'],
//   ['abc', 'def'],
//   ['abcd', 'ef']
// ]
console.log(
  allConstructMemoized('skateboard', [
    'bo',
    'rd',
    'ate',
    't',
    'ska',
    'sk',
    'boar',
  ])
); // []
console.log(
  allConstructMemoized('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaz', [
    'a',
    'aa',
    'aaa',
    'aaaa',
    'aaaaa',
  ])
); // []
