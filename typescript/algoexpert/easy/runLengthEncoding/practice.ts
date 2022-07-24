{
  {
    function runLengthEncoding(string: string) {
      const result: string[] = [];
      let i = 0;
      while (i < string.length) {
        let nextIdx = i + 1;
        let count = 1;
        while (nextIdx < string.length && string[nextIdx] === string[i] && count < 9) {
          count += 1;
          nextIdx += 1;
        }

        result.push(count.toString());
        result.push(string[i]);
        i = nextIdx;
      }

      return result.join('');
    }
  }
  {
    // O(n) time | O(n) space
    function runLengthEncoding(string: string) {
      let result: string[] = [];
      let i = 0;
      while (i < string.length) {
        const [count, nextIdx] = countCharsAt(i, string);
        result.push(count + string[i]);
        i = nextIdx;
      }

      return result.join('');
    }

    function countCharsAt(i: number, string: string) {
      let count = 1;
      while (i < string.length && count < 9 && string[i] === string[i + 1]) {
        count += 1;
        i += 1;
      }

      return [count, i + 1];
    }
  }
}

export const __ = '__';