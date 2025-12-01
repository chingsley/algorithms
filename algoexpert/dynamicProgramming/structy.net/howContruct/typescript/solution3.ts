interface Memo { [key: string]: string[]; };

// where (n = length of target string, w = length of words arrray)
// Time O(n * w^2) time 
// Space = O(wn + n^2) space (wn is space due to memo, n^2 is space due to recursive call and the slice within each recursive call)
//       = O(n(w + n)) space
export function howConstruct(target: string, words: string[], memo: Memo = {}): string[] | null {
  if (target === "") return [];
  if (target in memo) return memo[target];

  for (let word of words) {
    if (target.slice(0, word.length) !== word) continue;

    const rest = target.slice(word.length);
    const howConstructRest = howConstruct(rest, words, memo);
    if (howConstructRest === null) continue;

    memo[target] = [word, ...howConstructRest];
    return memo[target];
  }

  memo[target] = null;
  return memo[target];
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