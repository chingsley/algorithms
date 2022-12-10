// O(w^t * w) time | O(t*w) space
export function howConstruct(target: string, words: string[], idx: number = 0): string[] | null {
  if (idx === target.length) return [];

  for (let word of words) {
    if (word !== target.slice(idx, idx + word.length)) continue;

    const res = howConstruct(target, words, idx + word.length);
    if (res === null) continue;

    return [word, ...res];
  }

  return null;
}

console.log(howConstruct('abcd', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(howConstruct('abcdef', ['abc', 'def']));