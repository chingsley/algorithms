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
 *    Let m = length of targetString, n = length of the wordBank array
 *     Time complexity = O(m * n * m) = O(n * m^2) the " * m " is due to the slice operator
 *     Space complexity = O(m * m) = O(m)
 */
const canConstruct = (target, wordBank) => {
  const table = Array(target.length + 1).fill(false);
  table[0] = true;

  for (let i = 0; i <= target.length; i++) {
    if (table[i] === true) {
      for (let word of wordBank) {
        // if the word matches the characters starting at position i
        if (target.slice(i, i + word.length) === word) {
          table[i + word.length] = true;
        }
      }
    }
  }

  return table[target.length];
};

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // expect: true
console.log(
  canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
); // expect: false
console.log(
  canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])
); // expect: true
console.log(
  canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
  ])
); // expect: false
