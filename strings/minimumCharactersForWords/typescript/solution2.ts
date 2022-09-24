/**
 * O(n * l) time | O(c) space
 *Could have been constant Space, b/c their is a mzximum of 26 characters in any English. But since the word can contain symbols, then that is not the case
 *    n = the number of words
 *    l = the length of the longest word
 *    c = number of uinque characters across all words
 */
export function minimumCharactersForWords(words: string[]): string[] {
  const charsBank: CharsBank = {};

  for (let word of words) {
    const charsRequired = getCharsRequiredForWord(word, JSON.parse(JSON.stringify(charsBank))); // SEE NOTE BELOW ABOUT WHY WE USE JSON.stringify INSTEAD OF SPREAD OPERATOR
    updateCharsBank(charsRequired, charsBank);
  }

  return Object.keys(charsBank).reduce((acc, letter) => {
    for (let char of charsBank[letter]) {
      acc.push(char);
    }
    return acc;
  }, []);
}

function getCharsRequiredForWord(word: string, charsBank: CharsBank): string[] {
  const requiredChars: string[] = [];
  for (let char of word) {
    if (!charsBank[char] || charsBank[char].pop() === undefined) {
      requiredChars.push(char);
    }
  }

  return requiredChars;
}

function updateCharsBank(charsRequired: string[], charsBank: CharsBank): void {
  for (let char of charsRequired) {
    if (char in charsBank) {
      charsBank[char].push(char);
    } else {
      charsBank[char] = [char];
    }
  }
}


interface CharsBank { [key: string]: string[]; }


console.log(
  minimumCharactersForWords(["this", "that", "did", "deed", "them!", "a"])
);

/**
 *
 * NOTE ABOUT THE LINE: const charsRequired = getCharsRequiredForWord(word, JSON.parse(JSON.stringify(charsBank)));
 *      The second argument to the "getcharsRequiredForWord" function is a COPY of the "charsBank".
 * But "charsBank" contains array as as values, e.g charsBank is { 'a': ['a', 'a'] }
 * If we try to call the function like getCharsRequiredForWord(word, { ...charsBank });
 * { ...charsBank } only permforms a shallow copy of the charsBannk, which means it will pass a pointer to the arra ['a', 'a']
 * and any chages in the copy will change the values in the actual charsBank, which is NOT what we want in this case.
 * JSON.parse(JSON.stringify(obj)) is a way of performing deep copy in javascript.
 *
 * PS: Read about the possible down side of using JSON.parse(JSON.stringify()) to perform deep copy
 */
