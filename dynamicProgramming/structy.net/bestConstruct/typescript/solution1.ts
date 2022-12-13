// O(w^t * w) time | O(t*w) space
export function bestConstruct(target: string, words: string[]): string[] | null {
  if (target === "") return [];

  let result: string[] = [];
  for (let word of words) {
    if (target.indexOf(word) !== 0) continue;

    const rest = target.slice(word.length);
    let resOfRest = bestConstruct(rest, words);
    if (resOfRest === null) continue;

    resOfRest = [word, ...resOfRest];
    if (result.length === 0 || resOfRest.length < result.length) result = resOfRest;
  }

  return result.length > 0 ? result : null;
}

console.log(bestConstruct('abcd', ['ab', 'abc', 'cd', 'def', 'abcd'])); // expect: ['abcd']
console.log(bestConstruct('abcdef', ['abc', 'def', 'ab', 'cd', 'ef'])); // expect: ['abc', 'def']