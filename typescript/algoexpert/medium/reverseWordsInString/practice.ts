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

    console.log(
      reverseWordsInString("AlgoExpert is the best!")
    );

  }
}

export const ___ = '___';