/***
 * Problem:
 *    Write a function `countConstruct(target, wordBank)` that takes in a
 *    target string and an array of strings.
 *
 *    The function should return the number of ways that the "target" can
 *    be constructed by concatenating elements of the "wordBank" array.
 *
 *    You may reuse elements of the `wordBank` as many times as needed
 *
 *    EXAMPLES: countConstruct(abcdef, [ab, abc, cd, def, abcd]) => 1
 *              countConstruct(skateboard, [bo, rd, ate, t, ska, sk, boar]) => 0
 *              countConstruct(purple, [purp, p, ur, le, purpl]) => 2
 *              countConstruct('', [cat, dog, mouse]) => 1 => (this will be the base case)
 *
 * Analysis:
 *    E.g. for a call countConstruct(targetString, wordBank)
 *    Let m = length of targetString, n = length of the wordBank array
 *    without memoization:
 *          Time complexity = O((n^m) * m) = O(m*(n^m)) ===> the " * m " is due to the slice operator
 *          Space complexity = O(m * m) = O(m^2) ===> the " * m " is because the 'slice' operator returns an array which has to be stored in the 'suffix' variable
 *    with memoization:
 *          Time complexity = O(m * n * m) = O(n * m^2) ===> the " * m " is due to the slice operator
 *          Space complexity = O(m * m) = O(m^2) the " * m " is because the 'slice' operator returns an array which has to be stored in the 'suffix' variable
 */
const countConstruct = (target, wordBank) => {
  if (target === '') return 1;

  let totalCount = 0;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const numberOfWaysForRemainingWords = countConstruct(suffix, wordBank);
      totalCount += numberOfWaysForRemainingWords;
    }
  }

  return totalCount;
};

/**
 *  Memoized Version
 * @param {string} target The target string
 * @param {array} wordBank Array of substrings
 * @returns
 */
const countConstructV2 = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === '') return 1;

  let totalCount = 0;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const numberOfWaysForRemainingWords = countConstructV2(
        suffix,
        wordBank,
        memo
      );
      // memo[target] = numberOfWaysForRemainingWords;
      totalCount += numberOfWaysForRemainingWords;
    }
  }

  memo[target] = totalCount;

  return totalCount;
};

console.log(countConstructV2('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); // expect: 2
console.log(countConstructV2('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // expect: 1
console.log(
  countConstructV2('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
); // expect: 0
console.log(
  countConstructV2('enterapotentpot', [
    'a',
    'p',
    'ent',
    'enter',
    'ot',
    'o',
    't',
  ])
); // expect: 4
console.log(
  countConstructV2('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
  ])
); // expect: 0
