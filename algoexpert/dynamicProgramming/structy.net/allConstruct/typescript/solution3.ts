export function allConstruct(target: string, words: string[]): string[][] {
  const array: string[][][] = new Array(target.length + 1).fill(0).map(() => []);
  array[0] = [[]];

  for (let i = 0; i < array.length; i++) {
    if (array[i].length === 0) continue;

    for (let word of words) {
      if (target.slice(i, i + word.length) !== word) continue;

      if (i + word.length >= array.length) continue;

      for (let arr of array[i]) {
        array[i + word.length].push([...arr, word]);
      }
    }
  }

  return array[target.length];
}

console.log(allConstruct('abcd', ['ab', 'abc', 'cd', 'def', 'abcd'])); // [ [ 'ab', 'cd' ], [ 'abcd' ] ]
console.log(allConstruct('abcdef', ['abc', 'def'])); // expect: [ [ 'abc', 'def' ] ]
console.log(allConstruct('abcdef', ['abc', 'def', 'ab', 'cd', 'ef'])); // expect: [ [ 'abc', 'def' ], [ 'ab', 'cd', 'ef' ] ]
console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // expect: []
console.log(
  allConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])
); // expect: 4 different combinations

// console.log(
//   allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
//     'e',
//     'ee',
//     'eee',
//     'eeee',
//     'eeeee',
//   ])
// ); // exceeds usable memory and throws an error. But is solvable with memoized recursion (see solution 2)