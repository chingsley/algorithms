
{
  {
    // O(w^t * w) time | O(t*w) space
    function allConstruct(target: string, words: string[]): string[][] {
      if (target === "") return [[]];

      const result: string[][] = [];
      for (let word of words) {
        if (target.indexOf(word) !== 0) continue;

        const restResult = allConstruct(target.slice(word.length), words);
        for (let arr of restResult) result.push([word, ...arr]);
      }

      return result;
    }

    console.log(allConstruct('abcd', ['ab', 'abc', 'cd', 'def', 'abcd'])); // [ [ 'ab', 'cd' ], [ 'abcd' ] ]
    console.log(allConstruct('abcdef', ['abc', 'def'])); // expect: [ [ 'abc', 'def' ] ]
    console.log(allConstruct('abcdef', ['abc', 'def', 'ab', 'cd', 'ef'])); // expect: [ [ 'abc', 'def' ], [ 'ab', 'cd', 'ef' ] ]
    // console.log(
    //   allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    //     'e',
    //     'ee',
    //     'eee',
    //     'eeee',
    //     'eeeee',
    //   ])
    // ); // expect: null (will likely timeout without memoization. See solution2.ts for memoized solution)
  }
  {
    // O(w^t * w) time | O(t*w) space
    function allConstruct(target: string, words: string[], idx: number = 0): string[][] {
      if (idx === target.length) return [[]];

      let result: string[][] = [];
      for (let word of words) {
        if (word !== target.slice(idx, idx + word.length)) continue;

        const res = allConstruct(target, words, idx + word.length);
        for (let arr of res) result.push([word, ...arr]);
      }

      return result;
    }

    console.log(allConstruct('abcd', ['ab', 'abc', 'cd', 'def', 'abcd'])); // [ [ 'ab', 'cd' ], [ 'abcd' ] ]
    console.log(allConstruct('abcdef', ['abc', 'def'])); // expect: [ [ 'abc', 'def' ] ]
    console.log(allConstruct('abcdef', ['abc', 'def', 'ab', 'cd', 'ef'])); // expect: [ [ 'abc', 'def' ], [ 'ab', 'cd', 'ef' ] ]
  }
}

export const __ = '__';
