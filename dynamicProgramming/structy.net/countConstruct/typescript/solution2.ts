export function countConstruct(target: string, words: string[]) {
  const array = new Array(target.length + 1).fill(0);
  array[0] = 1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < 1) continue;

    for (let word of words) {
      if (target.slice(i, i + word.length) !== word) continue;

      if (i + word.length < array.length) {
        array[i + word.length] += array[i];
      }
    }
  }

  return array[target.length];
}

console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // expect 1;
console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'ef', 'def'])); // expect 2;
console.log(countConstruct('abcdef', ['abc', 'def', 'ab', 'cd', 'ef', 'abcd'])); // expect 3
console.log(
  countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
  ])
); // expect 0