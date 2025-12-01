/**
 * 
 * Question:
 * Given a non-empty string of *lowercase letters* and a non-negative
 * integer representing a key, write a function that returns a new
 * string objtained by shifting every letter in the input string
 * by k positions in the alphabet, where ke is the key
 * Note: the letters shoud 'wrap' around he alphabet
 * 
 * 
 * O(n) time (where n is the length of the string)
 * O(n) space (where n is the length of the string)
 */
 export function caesarCipherEncryptor(string: string, key: number) {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz'; // b/c question says: *lowercase letters* (only)
  let outputArr: string[] = [];
  for(const char of string) {
    // (see https://github.com/chingsley/runestone/blob/master/anagram_detection.ipynb)
    const charIdxInAlphabets = char.charCodeAt(0) - 'a'.charCodeAt(0);
    const shiftedIdx = charIdxInAlphabets + key < 26 ? charIdxInAlphabets + key : (charIdxInAlphabets + key) % 26;
    outputArr.push(alphabets[shiftedIdx]);
  }
  return outputArr.join('');
}


console.log(
  caesarCipherEncryptor('xyz', 2)
);
