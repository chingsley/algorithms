// O(w^t * w) time | O(t*w) space
export function bestConstruct(target: string, words: string[], idx: number = 0): string[] | null {
  if (idx === target.length) return [];

  let result: string[] = [];
  for (let word of words) {
    if (word !== target.slice(idx, idx + word.length)) continue;

    let res = bestConstruct(target, words, idx + word.length);
    if (res === null) continue;
    res = [word, ...res];
    if (result.length === 0 || res.length < result.length) result = res;
  }

  return result.length > 0 ? result : null;
}

console.log(bestConstruct('abcd', ['ab', 'abc', 'cd', 'def', 'abcd'])); // expect: ['abcd']
console.log(bestConstruct('abcdef', ['abc', 'def', 'ab', 'cd', 'ef'])); // expect: ['abc', 'def']