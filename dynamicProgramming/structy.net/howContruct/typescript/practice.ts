{
  {
    interface Memo { [key: string]: string[]; };
    function howConstruct(target: string, words: string[], memo: Memo = {}): string[] | null {
      if (target === "") return [];
      if (target in memo) return memo[target];

      for (let word of words) {
        if (target.indexOf(word) !== 0) continue;

        const rem = target.slice(word.length);
        const res = howConstruct(rem, words, memo);
        if (res !== null) {
          memo[target] = [word, ...res];
          return memo[target];
        };
      }

      memo[target] = null;
      return null;
    }

    console.log(howConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
    console.log(howConstruct('abcdef', ['ab', 'abc', 'cd', 'ef', 'def']));
    console.log(howConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
    console.log(
      howConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
        'e',
        'ee',
        'eee',
        'eeee',
        'eeeee',
      ])
    ); // expect null
  }
}

export const __ = '__';