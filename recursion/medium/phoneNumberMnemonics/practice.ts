{
  const dict: { [key: string]: string; } = {
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

    // console.log(
    //   phoneNumberMnemonics('1905')
    // );
  }
  {
    function phoneNumberMnemonics(phoneNumber: string): string[] {
      return backtrack(phoneNumber, 0);
    }

    function backtrack(phoneNumber: string, idx: number): string[] {
      if (idx >= phoneNumber.length) return [""];

      const num = phoneNumber[idx];
      const result: string[] = [];
      for (let letter of dict[num]) {
        for (let string of backtrack(phoneNumber, idx + 1)) {
          result.push([letter, string].join(''));
        }
      }

      return result;
    }

    console.log(
      phoneNumberMnemonics('1905')
    );
  }
  {
    // O(n * 4^n) time | O(n * 4^n) space
    function phoneNumberMnemonics(phoneNumber: string): string[] {
      return backtrack(phoneNumber, 0);
    }

    function backtrack(phoneNumber: string, idx: number): string[] {
      if (idx >= phoneNumber.length) return [""];

      const numChar = phoneNumber[idx];
      const result: string[] = [];
      for (let letter of dict[numChar]) {
        for (let string of backtrack(phoneNumber, idx + 1)) {
          result.push([letter, string].join(''));
        }
      }

      return result;
    }
  }
  {
    // O(n * 4^n) time | O(n * 4^n) space
    function phoneNumberMnemonics(phoneNumber: string): string[] {
      const result: string[] = [];
      backtrack(phoneNumber, 0, "", result);
      return result;
    }

    function backtrack(str: string, idx: number, current: string, result: string[]) {
      if (idx >= str.length) return result.push(current);

      for (let ch of dict[str[idx]]) {
        backtrack(str, idx + 1, current + ch, result);
      }
    }
  }
  {
    function phoneNumberMnemonics(phoneNumber: string): string[] {
      const result = backtrack(phoneNumber, 0);
      return result.map(arr => arr.join(''));
    }

    function backtrack(str: string, idx: number): string[][] {
      if (idx >= str.length) return [[]];

      let result: string[][] = [];
      for (let ch of dict[str[idx]]) {
        const res = backtrack(str, idx + 1);
        for (let arr of res) {
          result.push([ch, ...arr]);
        }
      }

      return result;
    }
  }
  {
    // O(n * 4^n) time | O(n * 4^n) space
    function phoneNumberMnemonics(phoneNumber: string): string[] {
      const result: string[] = [];
      backtrack(phoneNumber, 0, "", result);
      return result;
    }

    function backtrack(str: string, idx: number, current: string, result: string[]) {
      if (idx >= str.length) return result.push(current);

      for (let ch of dict[str[idx]]) {
        backtrack(str, idx + 1, current + ch, result);
      }
    }
  }
}

export const __ = '__';