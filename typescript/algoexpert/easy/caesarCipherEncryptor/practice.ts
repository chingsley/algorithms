// O(n) time | O(n) space
// n = length of string
export function caesarCipherEncryptor(string: string, key: number) {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const result: string[] = [];
  for (let ch of string) {
    let idx = Math.abs(ch.charCodeAt(0) - 'a'.charCodeAt(0)) + key;
    while (idx >= letters.length) idx = idx % letters.length;
    result.push(letters[idx]);
  }

  return result.join('');
}