/**
 * O(n) time (where n is the length of the string)
 * O(n) space (where n is the length of the string)
 * @param string n
 * @param key 
 * @returns string
 */
export function caesarCipherEncryptor(string: string, key: number) {
  const chars: string = 'abcdefghijklmnopqrstuvwxyz';
  const res: string[] = [];
  for (let i = 0; i < string.length; i++) {
    const charIdx = string[i].charCodeAt(0) - 'a'.charCodeAt(0);
    res.push(chars[(charIdx + key) % 26]);
  }
  return res.join('');
}