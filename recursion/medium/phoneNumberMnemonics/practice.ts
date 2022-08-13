{
  {
    function phoneNumberMnemonics(phoneNumber: string): string[] {
      const dict = {
        "0": "0",
        "1": "1",
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
      };

      const result = backTrack(phoneNumber, 0, dict);
      return result.map(arr => arr.join(''));
    }

    function backTrack(phoneNumber: string, idx: number, dict: { [key: string]: string; }): string[][] {
      if (idx >= phoneNumber.length) return [[]];

      const ch = phoneNumber[idx];
      const letters = dict[ch];
      const result: string[][] = [];
      for (let letter of letters) {
        const res = backTrack(phoneNumber, idx + 1, dict);
        for (let arr of res) {
          result.push([letter, ...arr]);
        }
      }

      return result;
    }
  }
  {
    // O(n * 4^n) time | O(n * 4^n) space
    function phoneNumberMnemonics(phoneNumber: string): string[] {
      const dict = {
        "0": "0",
        "1": "1",
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
      };

      const result: string[] = [];
      backTrack(phoneNumber, 0, dict, '', result);
      return result;
    }

    function backTrack(phoneNumber: string, idx: number, dict: { [key: string]: string; }, current: string, res: string[]) {
      if (idx >= phoneNumber.length) {
        res.push(current);
        return;
      };

      const ch = phoneNumber[idx];
      const letters = dict[ch];
      for (let letter of letters) {
        backTrack(phoneNumber, idx + 1, dict, current + letter, res);
      }
    }

    console.log(
      phoneNumberMnemonics('1905')
    );
  }
}

export const __ = '__';