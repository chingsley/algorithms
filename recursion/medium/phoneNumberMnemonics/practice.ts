import { indent } from "../../../utils/index";

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
      const letterDict = dict;

      const result = backTrack(phoneNumber, 0, letterDict);
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

    // console.log(
    //   phoneNumberMnemonics('1905')
    // );
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
  {// MEMOIZED SOLUTION
    type Memo = { [key: number]: string[]; };

    // O(4 * n * x) time | O(n * x)
    // determine x
    function phoneNumberMnemonics(phoneNumber: string): string[] {
      return backtrack(phoneNumber, 0);
    }

    function backtrack(str: string, idx: number, memo: Memo = {}): string[] {
      if (idx in memo) return memo[idx];
      console.log(indent(idx * 5), 'backtrack(', str, ',', idx, ')');
      if (idx >= str.length) return [""];

      const letters = dict[str[idx]];
      const result: string[] = [];
      for (let ch of letters) {
        const res = backtrack(str, idx + 1, memo);
        for (let val of res) result.push(ch + val); // x
      }
      memo[idx] = result;
      // console.log(memo)
      return memo[idx];
    }

    console.log(
      phoneNumberMnemonics("4163420000")
    );
  }
  {
    interface Memo { [key: string]: string[]; }

    // O(4 * n * x) time | O(n * x)
    // determine x
    function phoneNumberMnemonics(phoneNumber: string): string[] {
      const memo: Memo = {};
      return backtrack(phoneNumber, memo);
    }

    function backtrack(string: string, memo: Memo): string[] {
      if (string.length === 0) return [""];
      if (string in memo) return memo[string];

      const [firstCh, ...rest] = string.split('');
      const letters = dict[firstCh];
      const result: string[] = [];
      for (let ch of letters) {
        const resOfRest = backtrack(rest.join(''), memo);
        for (let str of resOfRest) {
          result.push(ch + str);
        }
      }

      console.log(JSON.stringify({ sr: string, r: result }));
      memo[string] = result;
      return memo[string];
    }
  }
  {
    interface Memo { [key: string]: string[]; }

    // O(4 * n * x) time | O(n * x)
    // determine x
    function phoneNumberMnemonics(phoneNumber: string): string[] {
      const memo: Memo = {};
      return backtrack(phoneNumber, 0, memo);
    }

    function backtrack(string: string, idx: number, memo: Memo): string[] {
      if (idx === string.length) return [""];
      if (string in memo) return memo[string];

      const firstCh = string[idx];
      const letters = dict[firstCh];
      const result: string[] = [];
      for (let ch of letters) {
        const resOfRest = backtrack(string, idx + 1, memo);
        for (let str of resOfRest) {
          result.push(ch + str);
        }
      }

      console.log(JSON.stringify({ sr: string, r: result }));
      memo[string] = result;
      return memo[string];
    }
  }
  {
    //   O(n * 4 * 4^n) time | O(n * 4^n)
    // = O(4n * 4^n) time | O(n * 4^n)
    // = O(n * 4^n) time | O(n * 4^n)
    function phoneNumberMnemonics(phoneNumber: string): string[] {
      return backtrack(phoneNumber, 0);
    }

    function backtrack(string: string, idx: number): string[] {// called n times
      if (idx === string.length) return [""];

      const charsOfCurrentNum = dict[string[idx]];
      const combs = backtrack(string, idx + 1); // calling this here is better than calling it inside the first for loop. When it's called here, then this solution does not need Momoization
      const result: string[] = [];
      for (let ch of charsOfCurrentNum) { // charsOfCurrentNum is 4 chars max (e.g digits 7 and 9)
        for (let str of combs) {// combs has max length 4^n
          result.push(ch + str);
        }
      }
      console.log({ idx: string[idx], result });
      return result;
    }
    /**
     * Space = O(n * 4^n)
     * 
     * Reason: the final result will have a max lenght of 4^n. Each item in the result
     * will have same length as the length of the input string (n). Therefore total space
     * equals O(n * 4^n) space
     */
  }
  {
    function phoneNumberMnemonics(phoneNumber: string): string[] {
      const result: string[] = [];
      backtrack(phoneNumber, 0, "", result);
      return result;
    }

    function backtrack(string: string, idx: number, currentPnemonic: string, result: string[]) {// called n times
      if (idx === string.length) return result.push(currentPnemonic);
      console.log({ idx, curr: currentPnemonic });

      for (let ch of dict[string[idx]]) {
        backtrack(string, idx + 1, currentPnemonic + ch, result);
      }
    }
  }
}

export const __ = '__';