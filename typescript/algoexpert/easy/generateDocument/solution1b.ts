// O(n + m) time => O(n) :bounded by the length of the characters (n)
// O(c) space
// where n = length of 'characters'
//       m = lenth of 'document'
//       c = no. of unique letters in 'characters'
export function generateDocument(characters: string, document: string) {
  const charsCount: { [key: string]: number; } = {};
  const SPACE = 'SPACE';
  for (let char of characters) {
    char = char === ' ' ? SPACE : char;
    if (char in charsCount) {
      charsCount[char] += 1;
    } else {
      charsCount[char] = 1;
    }
  }

  for (let char of document) {
    char = char === ' ' ? SPACE : char;
    if (!charsCount[char] || charsCount[char] < 1) return false;
    charsCount[char] -= 1;
  }

  return true;
}
