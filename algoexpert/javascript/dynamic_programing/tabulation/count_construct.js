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
 *     Time complexity = O(m * n * m) = O(n * m^2) ===> the " * m " is due to the slice operator
 *     Space complexity = O(m * m) = O(m)
 */
const countConstruct = (target, wordBank) => {
  const table = Array(target.length + 1).fill(0);
  table[0] = 1;

  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        table[i + word.length] += table[i];
      }
    }
  }

  return table[target.length];
};

console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); // expect: 2
console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // expect: 1
console.log(
  countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
); // expect: 0
console.log(
  countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])
); // expect: 4
console.log(
  countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
  ])
); // expect: 0
