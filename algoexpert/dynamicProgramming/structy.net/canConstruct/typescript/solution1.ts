export function canConstruct(target: string, words: string[], idx: number = 0) {
  // console.log({ target, words, idx });
  if (idx === target.length) return true;

  for (let word of words) {
    let found = false;
    // console.log({ word, slice: target.slice(idx, idx + word.length) });
    if (word === target.slice(idx, idx + word.length)) {
      found = canConstruct(target, words, idx + word.length);
    }
    if (found === true) return true;
  }

  return false;
}

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(canConstruct('abcdef', ['abc', 'def']));