/*
* Time: O(w * c) 
* w = no. of words, c = no. of characters in the longest word
*
* Space: O(u * n)
* u = the no. of unique characters across all the words
* n = the frequency of occurrence of the most occurred character
*/
export function minimumCharactersForWords(words: string[]): string[] {
  const charsBank: { [key: string]: number; } = {};
  for (let word of words) {
    const wordCharFreq = getRequiredChars(word);
    updateCharsBank(wordCharFreq, charsBank);
  }

  const res: string[] = [];
  for (const ch in charsBank) {
    while (charsBank[ch]-- > 0) res.push(ch);
  }
  return res;
}

function getRequiredChars(word: string): { [key: string]: number; } {
  const chFreq: { [key: string]: number; } = {};
  for (let ch of word) {
    ch in chFreq ? chFreq[ch] += 1 : chFreq[ch] = 1;
  }
  return chFreq;
}

function updateCharsBank(wordCharFreq: { [key: string]: number; }, charsBank: { [key: string]: number; }) {
  for (let ch in wordCharFreq) {
    if (ch in charsBank) {
      charsBank[ch] = Math.max(wordCharFreq[ch], charsBank[ch]);
    } else {
      charsBank[ch] = wordCharFreq[ch];
    }
  }
}