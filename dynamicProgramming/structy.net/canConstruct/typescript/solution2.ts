// O(t * w^t) time | (t^2) space
export function canConstruct(target: string, words: string[]) {
  if (target === '') return true;

  for (let word of words) {
    // console.log(word, target.slice(0, word.length), word === target.slice(0, word.length));
    if (word !== target.slice(0, word.length)) continue;

    const rest = target.slice(word.length);
    const canConstructRest = canConstruct(rest, words);
    if (canConstructRest === true) return true;
  }

  return false;
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