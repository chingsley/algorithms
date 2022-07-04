/**
 * Time: O(n * m)
 *    n = no. of words in the "words" array
 *    m = no. of characters in the longest word
 * 
 * Space O(u)
 *    u = no. of unique characters in the "words" array
 * 
 * @param words n
 * @returns array of chars
 */
export function minimumCharactersForWords(words: string[]): string[] {
  const charsBank: CharBank = {};
  for (let word of words) {
    const requiredChars = getRequiredChars(word, { ...charsBank });
    updateCharsBank(requiredChars, charsBank);
  }

  return Object.entries(charsBank).reduce((acc: string[], [letter, count]) => {
    while (count-- > 0) acc.push(letter);
    return acc;
  }, []);
}

function getRequiredChars(word: string, charsBank: CharBank): string[] {
  const result: string[] = [];
  for (let char of word) {
    if (char in charsBank && charsBank[char] > 0) {
      charsBank[char] -= 1;
    } else {
      result.push(char);
    }
  }

  return result;
}

function updateCharsBank(requiredChars: string[], charsBank: CharBank): void {
  for (let char of requiredChars) {
    if (char in charsBank) {
      charsBank[char] += 1;
    } else {
      charsBank[char] = 1;
    }
  }
}

interface CharBank { [key: string]: number; };

console.log(
  minimumCharactersForWords(["this", "that", "did", "deed", "them!", "a"])
);
