interface Memo { [key: string]: string[]; };
{
  {
    // O(wt * (w + t)) time | O(t*w) space
    function bestConstruct(target: string, words: string[], memo: Memo = {}): string[] | null {
      if (target === "") return [];
      if (target in memo) return memo[target];

      let result: string[] = [];
      for (let word of words) {
        if (target.indexOf(word) !== 0) continue;

        const rest = target.slice(word.length);
        let resOfRest = bestConstruct(rest, words, memo);
        if (resOfRest === null) continue;

        resOfRest = [word, ...resOfRest];
        if (result.length === 0 || resOfRest.length < result.length) result = resOfRest;
      }

      memo[target] = result.length > 0 ? result : null;
      return memo[target];
    }

    console.log(bestConstruct('abcd', ['ab', 'abc', 'cd', 'def', 'abcd'])); // expect: ['abcd']
    console.log(bestConstruct('abcdef', ['abc', 'def', 'ab', 'cd', 'ef'])); // expect: ['abc', 'def']
    console.log(
      bestConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
        'e',
        'ee',
        'eee',
        'eeee',
        'eeeee',
      ])
    ); // expect: null
  }
  {
    interface Memo { [key: string]: string[] | null; };
    function bestConstruct(target: string, words: string[], memo: Memo = {}): string[] | null {
      if (target === "") return [];
      if (target in memo) return memo[target];

      let comb = null;
      for (let word of words) {
        if (target.indexOf(word) !== 0) continue;

        const rem = target.slice(word.length);
        const res = bestConstruct(rem, words, memo);
        if (res === null) continue;

        const newComb = [word, ...res];
        if (comb === null || newComb.length < comb.length) {
          comb = newComb;
        }
      }

      memo[target] = comb;
      return memo[target];
    }

    console.log(bestConstruct('abcd', ['ab', 'abc', 'cd', 'def', 'abcd'])); // expect: ['abcd']
    console.log(bestConstruct('abcdef', ['abc', 'def', 'ab', 'cd', 'ef'])); // expect: ['abc', 'def']
    console.log(
      bestConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
        'e',
        'ee',
        'eee',
        'eeee',
        'eeeee',
      ])
    ); // expect: null
  }
}

export const __ = '__';