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
 *          Time complexity = O((n^m))
 *          Space complexity = O(n^m)
 *      (ie. The algorithm has both exponential time and space complexity)
 */

const allConstruct = (target, wordBank) => {
  const table = Array(target.length + 1)
    .fill()
    .map(() => []);

  table[0] = [[]];

  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        const newCombinations = table[i].map((subArray) => [...subArray, word]);
        table[i + word.length].push(...newCombinations);
      }
    }
  }

  return table[target.length];
};

// returns  [
//   ['purp', 'le'],
//   ['p', 'ur', 'p', 'le']
// ]
console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));

// returns [
//   ['abc', 'cd', 'ef'],
//   ['ab', 'c', 'def'],
//   ['abc', 'def'],
//   ['abcd', 'ef']
// ]
console.log(
  allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c'])
);

// returns  []
console.log(
  allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
);

// returns  []
console.log(
  allConstruct('aaaaaaaaaaaaaz', ['a', 'aa', 'aaa', 'aaaa', 'aaaaa'])
);

// Will throw a RangeError (max call stack size exceeded) because of the exponential time complexity
console.log(
  allConstruct('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaz', [
    'a',
    'aa',
    'aaa',
    'aaaa',
    'aaaaa',
  ])
);
