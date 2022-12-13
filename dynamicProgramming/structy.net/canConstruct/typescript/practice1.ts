{
  {
    // O(w^t) time | O(t) space; (t = length of target string, w = lenght of words bank)
    function canConstruct(target: string, words: string[], idx: number = 0): boolean {
      if (idx === target.length) return true;

      for (let word of words) {
        if (word !== target.slice(idx, idx + word.length)) continue;
        const found = canConstruct(target, words, idx + word.length);
        if (found === true) return true;
      }

      return false;
    }

    console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // expect true
    console.log(canConstruct('abcdef', ['abc', 'def'])); // expect true
  }
  {
    // O(w^t) time | O(t) space; (t = length of target string, w = lenght of words bank)
    function canConstruct(target: string, words: string[], idx: number = 0): boolean {
      if (idx === target.length) return true;

      for (let word of words) {
        if (word !== target.slice(idx, idx + word.length)) continue;
        if (canConstruct(target, words, idx + word.length)) return true;
      }

      return false;
    }

    console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'de', 'abcd'])); // expect false
    console.log(canConstruct('abcdef', ['abc', 'def'])); // expect true
  }
}

export const __ = '__';