{
  {
    function reverseWordsInString(strToReverse: string): string {
      const resArr: string[] = [];
      const SPACE = ' ';

      let i = strToReverse.length - 1;
      let j = strToReverse.length;
      while (i >= 0) {
        const ch = strToReverse[i];
        const leftCh = strToReverse[i - 1];

        if (ch !== SPACE && (leftCh === SPACE || i === 0)) {
          resArr.push(strToReverse.slice(i, j));
        }
        if (ch === SPACE) {
          resArr.push(strToReverse[i]);
          if (leftCh && leftCh !== SPACE) {
            j = i;
          }
        }

        i--;
      }
      return resArr.join('');
    }

    // console.log(
    //   reverseWordsInString("AlgoExpert is the best!")
    // );

  }
  {
    function reverseWordsInString(strToReverse: string): string {
      let output: string[] = [];
      let j = strToReverse.length;
      for (let i = strToReverse.length - 1; i >= 0; i--) {
        const ch = strToReverse[i];
        if (ch === ' ') {
          output.push(strToReverse.slice(i + 1, j));
          output.push(' ');
          j = i;
        }
        console.log({ i, j, output });
      }
      output.push(strToReverse.slice(0, j));
      return output.join('');
    }

    console.log(
      reverseWordsInString("  AlgoExpert is the best!"), '.'
    );
  }
  {
    /**
 * O(n) time
 * O(n) space; b/c of the revArr
 * where n = length of the strToReverse
 *
 * @param strToReverse 
 * @returns 
 */
    function reverseWordsInString(string: string) {
      let i: number = string.length - 1;
      let endOfWord: number = string.length;
      let revArr: string[] = [];
      const SPACE_CHAR: string = ' ';

      while (i >= 0) {
        if (string[i] === SPACE_CHAR) {
          revArr.push(string.slice(i + 1, endOfWord));
          while (string[i] === SPACE_CHAR && i >= 0) {
            revArr.push(SPACE_CHAR);
            i -= 1;
          }
          endOfWord = i + 1;
        } else {
          i -= 1;
        }
      }
      if (endOfWord > 0) revArr.push(string.slice(0, endOfWord));
      return revArr.join('');
    }
  }
  {
    /**
 * O(n) time
 * O(n) space; b/c of the resArr. NOTE resArr.length >= stack.length, therefore, it dwarfs the space complexity due to the stack
 * where n = length of the strToReverse
 * @param strToReverse 
 * @returns 
 */
    function reverseWordsInString(strToReverse: string): string {
      const resArr: string[] = [];
      const stack: string[] = [];
      const SPACE_CHAR = " ";
      for (let i = strToReverse.length - 1; i >= 0; i--) {
        const char: string = strToReverse[i];
        if (char === SPACE_CHAR) {
          while (stack.length > 0) resArr.push(stack.pop()!);
          resArr.push(char);
        } else {
          stack.push(char);
        }
      }
      while (stack.length > 0) resArr.push(stack.pop()!);
      return resArr.join('');
    }
  }
  {
    // O(n) time | O(n) space
    function reverseWordsInString(strToReverse: string): string {
      let output: string[] = [];
      let wordEndIdx = strToReverse.length;
      for (let i = strToReverse.length - 1; i >= 0; i--) {
        const ch = strToReverse[i];
        if (ch === ' ') {
          output.push(strToReverse.slice(i + 1, wordEndIdx));
          output.push(' ');
          wordEndIdx = i;
        }
      }
      output.push(strToReverse.slice(0, wordEndIdx));
      return output.join('');
    }

  }
}

export const ___ = '___';