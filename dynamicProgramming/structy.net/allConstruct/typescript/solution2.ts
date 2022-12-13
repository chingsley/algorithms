interface Memo { [key: string]: string[][]; };
{
  {
    // O(wt * (w + t)) time | O(tw) space
    function allConstruct(target: string, words: string[], memo: Memo = {}): string[][] {
      if (target === "") return [[]];
      if (target in memo) return memo[target];

      const result: string[][] = [];
      for (let word of words) {
        if (target.indexOf(word) !== 0) continue;

        const restResult = allConstruct(target.slice(word.length), words, memo);
        for (let arr of restResult) result.push([word, ...arr]);
      }

      memo[target] = result;
      return memo[target];
    }

    console.log(allConstruct('abcd', ['ab', 'abc', 'cd', 'def', 'abcd'])); // [ [ 'ab', 'cd' ], [ 'abcd' ] ]
    console.log(allConstruct('abcdef', ['abc', 'def'])); // expect: [ [ 'abc', 'def' ] ]
    console.log(allConstruct('abcdef', ['abc', 'def', 'ab', 'cd', 'ef'])); // expect: [ [ 'abc', 'def' ], [ 'ab', 'cd', 'ef' ] ]
    console.log(
      allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
        'e',
        'ee',
        'eee',
        'eeee',
        'eeeee',
      ])
    ); // expect: []
  }
}