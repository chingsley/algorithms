{
  {
    // O(w * w^n) time | O(n^2) space (n = length of target string, w = length of words arrray)
    function howConstruct(target: string, words: string[]): string[] | null {
      if (target === "") return [];

      for (let word of words) {
        if (target.slice(0, word.length) !== word) continue;

        const rest = target.slice(word.length);
        const howConstructRest = howConstruct(rest, words);
        if (howConstructRest === null) continue;

        return [word, ...howConstructRest];
      }

      return null;
    }

    // console.log(howConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // expect: [ 'abc', 'def' ]
    // console.log(howConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // expect: null
    // console.log(
    //   howConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])
    // ); // expect: [ 'enter', 'a','p',     'o', 't',     'ent', 'p',     'o', 't']
    // // console.log(
    // //   howConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    // //     'e',
    // //     'ee',
    // //     'eee',
    // //     'eeee',
    // //     'eeeee',
    // //   ])
    // // ); // expect: null (will likely timeout due to lack of memoization)
  }

}


{
  {
    // O(w * w^n) time | O(n^2) space (n = length of target string, w = length of words arrray)
    function howConstruct(target: string, words: string[]): string[] | null {
      if (target === "") return [];

      for (let word of words) {
        if (target.indexOf(word) === 0) {
          const rest = target.slice(word.length);
          const howConstructRest = howConstruct(rest, words);
          if (howConstructRest !== null) return [word, ...howConstructRest];;
        }
      }

      return null;
    }
    console.log(howConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // expect: [ 'abc', 'def' ]
    console.log(howConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // expect: null
    console.log(
      howConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])
    ); // expect: [ 'enter', 'a','p',     'o', 't',     'ent', 'p',     'o', 't']
    // console.log(
    //   howConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    //     'e',
    //     'ee',
    //     'eee',
    //     'eeee',
    //     'eeeee',
    //   ])
    // ); // expect: null (will likely timeout due to lack of memoization)
  }
}




export const __ = '__';

