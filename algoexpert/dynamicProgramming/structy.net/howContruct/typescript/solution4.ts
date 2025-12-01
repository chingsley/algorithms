export function howConstruct(target: string, words: string[]): string[] | null {
  const array: string[][] | null[] = new Array(target.length + 1).fill(null);
  array[0] = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === null) continue;

    for (let word of words) {
      if (target.slice(i, i + word.length) !== word) continue;

      if (i + word.length < array.length) {
        array[i + word.length] = [...array[i], word];
      }
    }
  }
  return array[target.length];
}

console.log(howConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // expect: [ 'abc', 'def' ]
console.log(howConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // expect: null
console.log(
  howConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])
); // expect: [ 'enter', 'a','p',     'o', 't',     'ent', 'p',     'o', 't']
console.log(
  howConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
  ])
); // expect: null