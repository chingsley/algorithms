// O(t * w^t) time | (t^2) space
export function canConstruct(target: string, words: string[]) {
  const array = new Array(target.length + 1).fill(false);
  array[0] = true;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === false) continue;

    for (let word of words) {
      if (target.slice(i, i + word.length) !== word) continue;
      if (i + word.length < array.length) array[i + word.length] = true;;
    }
  }

  return array[target.length];
}

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