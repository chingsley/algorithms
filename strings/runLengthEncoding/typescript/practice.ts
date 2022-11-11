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
  {
    // O(n) time | O(n) space
    function runLengthEncoding(string: string) {
      const result: string[] = [];
      let i = 0;
      while (i < string.length) {
        const count = countOccurrence(i, string);
        result.push(`${count}${string[i]}`);
        i += count;
      }

      return result.join('');
    }

    function countOccurrence(i: number, string: string): number {
      let ch = string[i];
      let count = 0;
      while (i < string.length && count < 9 && string[i] === ch) {
        count += 1;
        i += 1;
      }

      return count;
    }
    /**
     * 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0
     * A A A A A A A A A A A A A B B C C C C D D
     * 0               9 9  
    */
  }
  {
    // O(n) time | O(n) space
    function runLengthEncoding(string: string) {
      const outputArr: string[] = [];

      let i = 0;
      while (i < string.length) {
        let j = i + 1;
        let count = 1;
        while (string[i] === string[j] && j < string.length && count < 9) {
          count += 1;
          j += 1;
        }

        outputArr.push(count.toString() + string[i]);
        i = j;
      }

      return outputArr.join('');
    }
  }
  {
    // O(n) time | O(n) space;
    // n = length of the string
    function runLengthEncoding(string: string) {
      const result: string[] = [];
      let i = 0;
      while (i < string.length) {
        const [nextIdx, count] = countOccurrence(i, string);
        result.push(`${count}${string[i]}`);
        i = nextIdx;
      }
      return result.join('');
    }

    function countOccurrence(i: number, string: string): [number, number] {
      let count = 0;
      let ch = string[i];
      while (string[i] === ch && count < 9) [i, count] = [i + 1, count + 1];
      return [i, count];
    }

  }
}

export const __ = '__';