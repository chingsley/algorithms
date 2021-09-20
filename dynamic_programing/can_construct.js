/***
 * Problem:
 *    Write a function `canConstruct(target, wordBank)` that takes in a
 *    target string and an array of strings.
 *
 *    The function should return a boolean indicating whether or not the
 *    `target` can be constructed by concatenating elements of the `wordBank` array
 *
 *    You may reuse elements of the `wordBank` as many times as needed
 *
 *    EXAMPLES: canConstruct(abcdef, [ab, abc, cd, def, abcd]) => abc + def => true
 *              canConstruct(skateboard, [bo, rd, ate, t, ska, sk, boar]) => false
 *              canConstruct('', [cat, dog, mouse]) => true => returns true if target string is empty
 *
 * Analysis:
 *    E.g. for a call canConstruct(targetString, wordBank)
 *    Let m = length of targetString, n = length of the wordBank array
 *    without memoization:
 *          Time complexity = O((n^m) * m) = O(m*(n^m)) ===> the " * m " is due to the slice operator
 *          Space complexity = O(m * m) = O(m^2) ===> the " * m " is because the 'slice' operator returns an array which has to be stored in the 'suffix' variable
 *    with memoization:
 *          Time complexity = O(m * n * m) = O(n * m^2) ===> the " * m " is due to the slice operator
 *          Space complexity = O(m * m) = O(m^2) the " * m " is because the 'slice' operator returns an array which has to be stored in the 'suffix' variable
 */
const canConstruct = (target, wordBank) => {
  if (target === '') {
    return true;
  }

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordBank) === true) {
        return true;
      }
    }
  }

  return false;
};

/**
 *  Memoized Version
 * @param {string} target The target string
 * @param {array} wordBank Array of substrings
 * @returns
 */
const canConstructV2 = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === '') return true;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if (canConstructV2(suffix, wordBank, memo) === true) {
        memo[target] = true;
        return true;
      }
    }
  }

  memo[target] = false;
  return false;
};

console.log(canConstructV2('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // expect: true
console.log(
  canConstructV2('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
); // expect: false
console.log(
  canConstructV2('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])
); // expect: true
console.log(
  canConstructV2('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
  ])
); // expect: true
