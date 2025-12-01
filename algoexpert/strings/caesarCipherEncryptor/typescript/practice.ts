{
  {
    // O(n) time | O(n) space
    // n = length of string
    function caesarCipherEncryptor(string: string, key: number) {
      const letters = 'abcdefghijklmnopqrstuvwxyz';
      const result: string[] = [];
      for (let ch of string) {
        let idx = Math.abs(ch.charCodeAt(0) - 'a'.charCodeAt(0)) + key;
        while (idx >= letters.length) idx = idx % letters.length;
        result.push(letters[idx]);
      }

      return result.join('');
    }
  }
  {
    // O(n) time | O(n) space
    function caesarCipherEncryptor(string: string, key: number) {
      const alphabets = 'abcdefghijklmnopqrstuvwxyz';
      const result: string[] = [];
      for (let ch of string) {
        const idx = ch.charCodeAt(0) - 'a'.charCodeAt(0);
        let rotatedIdx = idx + key;
        while (rotatedIdx > alphabets.length - 1) {
          rotatedIdx -= alphabets.length;
        }
        result.push(alphabets[rotatedIdx]);
      }

      return result.join('');
    }

  }
  {
    function caesarCipherEncryptor(string: string, key: number) {
      const chars: string = 'abcdefghijklmnopqrstuvwxyz';
      const res: string[] = [];
      for (let i = 0; i < string.length; i++) {
        const charIdx = string[i].charCodeAt(0) - 'a'.charCodeAt(0);
        res.push(chars[(charIdx + key) % 26]);
      }
      return res.join('');
    }
  }
  {
    // O(n) time
    // O(n) space // please check this, the outputStr, as a string could take constant space, please confirm
    // where n is length of input string
    function caesarCipherEncryptor(string: string, key: number) {
      const alphabets = 'abcdefghijklmnopqrstuvwxyz';
      let outputStr = '';
      for (const char of string) {
        const charIdxInAlphabets = char.charCodeAt(0) - 'a'.charCodeAt(0);
        const shiftedIdx = charIdxInAlphabets + key < 26 ? charIdxInAlphabets + key : (charIdxInAlphabets + key) % 26;
        outputStr += alphabets[shiftedIdx];
      }
      return outputStr;
    }

  }
  {
    // O(n) time
    // O(n) space (due to outputArr)
    // where n = length of input string
    function caesarCipherEncryptor(string: string, key: number) {
      const alphabets = 'abcdefghijklmnopqrstuvwxyz';
      let outputArr: string[] = [];
      for (const char of string) {
        const charIdxInAlphabets = char.charCodeAt(0) - 'a'.charCodeAt(0);
        const shiftedIdx = charIdxInAlphabets + key < 26 ? charIdxInAlphabets + key : (charIdxInAlphabets + key) % 26;
        outputArr.push(alphabets[shiftedIdx]);
      }
      return outputArr.join('');
    }
  }
  {
    // O(n) time | O(n) space; (n = length of the string)
    function caesarCipherEncryptor(string: string, key: number) {
      const alphabets = 'abcdefghijklmnopqrstuvwxyz';
      const encrypted: string[] = [];
      for (let ch of string) {
        const i = (ch.charCodeAt(0) - 'a'.charCodeAt(0)) + key;
        encrypted.push(alphabets[i % 26]);
      }
      return encrypted.join('');
    }

  }
}

export const __ = '__';