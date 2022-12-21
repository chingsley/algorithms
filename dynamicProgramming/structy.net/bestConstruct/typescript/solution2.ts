// let m = target, n = words.length
// O(m^2 * n) time | O(mn) space
export function bestConstruct(target: string, words: string[]): string[] | null {
  const array: string[][] | null[] = new Array(target.length + 1).fill(null);
  array[0] = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === null) continue;

    for (let word of words) {
      if (target.slice(i, i + word.length) !== word) continue;

      if (i + word.length >= array.length) continue;

      const oldComb = array[i + word.length];
      const newComb = [...array[i], word];
      if (oldComb === null || newComb.length < oldComb.length) {
        array[i + word.length] = newComb;
      }
    }
  }

  return array[target.length];
}

console.log(bestConstruct('abcd', ['ab', 'abc', 'cd', 'def', 'abcd'])); // expect: ['abcd']
console.log(bestConstruct('abcdef', ['abc', 'def', 'ab', 'cd', 'ef'])); // expect: ['abc', 'def']
console.log(
  bestConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
  ])
); // expect null