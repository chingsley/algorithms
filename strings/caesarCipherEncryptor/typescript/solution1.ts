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
 * O(n) space (where n is the length of the string. Please check this, the outputStr, as a string could take constant space, please confirm)
 */
export function caesarCipherEncryptor(string: string, key: number) {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz'; // b/c question says: *lowercase letters* (only)
  let outputStr = '';
  for(const char of string) {
    // (see https://github.com/chingsley/runestone/blob/master/anagram_detection.ipynb)
    const charIdxInAlphabets = char.charCodeAt(0) - 'a'.charCodeAt(0); // will work b/c we only consider lowercase letters, so we use 'a', and we don't check against 'A'
    const shiftedIdx = charIdxInAlphabets + key < 26 ? charIdxInAlphabets + key : (charIdxInAlphabets + key) % 26;
    outputStr += alphabets[shiftedIdx]; // string concatenation is O(n) operaion in some languages (e.g Java). In such languaage, this line would make the time complexity O(n^2) (See solution 2 for alternative by using array)
  }
  return outputStr;
}


console.log(
  caesarCipherEncryptor('xyz', 2)
);
