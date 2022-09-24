
/**
 * O(n) time
 * O(n) space; b/c of the revArr
 * where n = length of the strToReverse
 *
 * @param strToReverse 
 * @returns 
 */
function reverseWordsInString(strToReverse: string): string {
  const revArr: string[] = [];

  let endOfWord: number = strToReverse.length;
  for (let i = strToReverse.length - 1; i >= 0; i--) {
    const char: string = strToReverse[i];
    if (char === ' ') {
      if (i !== endOfWord - 1) {
        revArr.push(strToReverse.slice(i + 1, endOfWord));
      }
      revArr.push(char);
      endOfWord = i;
    }
    if (char !== ' ' && i === 0) {
      revArr.push(strToReverse.slice(i, endOfWord));
    }
  }
  return revArr.join('');
}

console.log(reverseWordsInString('*HE**REVERSE**STRING**FUNCTION'));
