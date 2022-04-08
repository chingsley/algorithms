/**
 * O(n * l) time | O(c) space
 * where:
 *    n = the number of words
 *    l = the length of the longest word
 *    c = number of uinque characters across all words
 */
export function minimumCharactersForWords(words: string[]): string[] {
  const charsBank: {[key: string]: number;} = {};
  for(let word of words) {
    const requiredCharsForWord = findRequiredLetters(word, {...charsBank});
    for(let char of requiredCharsForWord) {
      if(charsBank[char]) {
        charsBank[char] += 1;
      } else {
        charsBank[char] = 1;
      }
    }
  }
  return Object.entries(charsBank).reduce((acc: string[], [key, count]: [string, number]) => {
    // while(count-- > 0) acc.push(key); // this line is same as the next 4  lines
    while(count > 0) {
      acc.push(key);
      count -= 1;
    }
    return acc;
  }, []);
}

function findRequiredLetters(word: string, charsBank: { [key: string]: number; }): string[]{
  const requiredChars = [];
  for(const char of word) {
    if(charsBank[char]) {
      // --charsBank[char] && delete charsBank[char]// this line is same as the next 3 lines;
      if(--charsBank[char] === 0) {
        delete charsBank[char];
      }
    } else {
      requiredChars.push(char);
    }
  }

  return requiredChars;
}


console.log(
  minimumCharactersForWords(["this", "that", "did", "deed", "them!", "a"])
)
