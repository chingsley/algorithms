
/**
 * O(n) time
 * O(n) space; b/c of the revArr
 * where n = length of the strToReverse
 *
 * @param strToReverse 
 * @returns 
 */
export function reverseWordsInString(strToReverse: string): string {
  const SPACE = ' ';

  let wordEnd = strToReverse.length;

  const resArr: string[] = [];
  for (let i = strToReverse.length - 1; i >= 0; i--) {
    const ch = strToReverse[i];
    const prev = strToReverse[i - 1];

    if (ch === SPACE) {
      resArr.push(SPACE);
    }
    if (ch !== SPACE && (prev === SPACE || i === 0)) {
      resArr.push(strToReverse.slice(i, wordEnd));
    }
    if (ch === SPACE && prev !== SPACE) {
      wordEnd = i;
    }
  }

  return resArr.join('');
}