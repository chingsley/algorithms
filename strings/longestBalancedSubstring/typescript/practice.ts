{
  {
    // O(n) time | O(n) space
    function longestBalancedSubstring(string: string) {
      const opens: { [key: string]: string; } = { "(": ")", "[": "]", "{": "}" };
      const closes: { [key: string]: string; } = { ")": "(", "]": "[", "}": "{" };
      let stack: number[] = [-1];
      let maxCount = 0;
      for (let i = 0; i < string.length; i++) {
        const ch = string[i];
        if (ch in opens) {
          stack.push(i);
        } else if (ch in closes) {
          stack.pop();
          if (stack.length === 0) {
            stack.push(i);
          } else {
            const count = i - stack[stack.length - 1];
            if (count > maxCount) maxCount = count;
          }
        }
      }
      return maxCount;
    }

  }
  {
    // O(n) time | O(n) space
    function longestBalancedSubstring(string: string) {
      const idxStack = [- 1];
      let max = 0;
      for (let i = 0; i < string.length; i++) {
        if (string[i] === '(') {
          idxStack.push(i);
        } else {
          idxStack.pop();
          if (idxStack[idxStack.length - 1] === undefined) {
            idxStack.push(i);
          } else {
            max = Math.max(max, i - idxStack[idxStack.length - 1]);
          }
        }
      }
      return max;
    }
  }
  {
    // O(n) time | O(1) space
    function longestBalancedSubstring(string: string) {
      const maxRightToLeft = countCh(false, string);
      const maxLeftToRight = countCh(true, string);
      return Math.max(maxLeftToRight, maxRightToLeft);
    }

    function countCh(leftToRight: boolean, string: string): number {
      const startIdx = leftToRight ? 0 : string.length - 1;
      const step = leftToRight ? 1 : -1;
      const [opens, closes] = leftToRight ? ['(', ')'] : [')', '('];
      let [opensCount, closesCount] = [0, 0];
      let max = 0;

      for (let i = startIdx; i < string.length && i >= 0; i += step) {
        if (string[i] === opens) opensCount += 1;
        if (string[i] === closes) closesCount += 1;

        if (opensCount === closesCount) max = Math.max(max, opensCount * 2);
        if (closesCount > opensCount) [opensCount, closesCount] = [0, 0];
      }

      return max;
    }
  }
  {
    // O(n) time | O(n) space
    // n = length of string
    function longestBalancedSubstring(string: string) {
      const idxStack = [-1];
      let max = 0;
      for (let i = 0; i < string.length; i++) {
        if (string[i] === '(') {
          idxStack.push(i);
        } else {
          idxStack.pop();
          if (idxStack.length > 0) {
            max = Math.max(max, i - idxStack[idxStack.length - 1]);
          } else {
            idxStack.push(i);
          }
        }
      }
      return max;
    }

  }
  {
    // O(n) time | O(1) space
    function longestBalancedSubstring(string: string) {
      const leftToRightMax = findMax(string, true);
      const rightToLeftMax = findMax(string, false);
      return Math.max(leftToRightMax, rightToLeftMax);
    }

    function findMax(string: string, leftToRight: boolean): number {
      const startIdx = leftToRight ? 0 : string.length - 1;
      const step = leftToRight ? 1 : -1;
      const openCh = leftToRight ? '(' : ')';
      let max = 0;
      let [open, close] = [0, 0];
      for (let i = startIdx; i >= 0 && i < string.length; i += step) {
        if (string[i] === openCh) open += 1;
        if (string[i] !== openCh) close += 1;

        if (open === close) max = Math.max(max, open * 2);
        if (close > open) [close, open] = [0, 0];
      }

      return max;
    }

  }
  {
    // O(n) time | O(n) space
    // n = length of string
    function longestBalancedSubstring(string: string) {
      const idxStack = [-1];
      let max = 0;
      for (let i = 0; i < string.length; i++) {
        const ch = string[i];
        if (ch === '(') {
          idxStack.push(i);
        } else {
          idxStack.pop();
          if (idxStack.length > 0) {
            max = Math.max(max, i - idxStack[idxStack.length - 1]);
          } else {
            idxStack.push(i);
          }
        }
      }
      return max;
    }
  }
  {
    // O(n) time | O(1) space
    // n = length of string
    function longestBalancedSubstring(string: string) {
      const leftToRightCount = countBalanced(string, true);
      const rightToLeftCount = countBalanced(string, false);
      return Math.max(leftToRightCount, rightToLeftCount);
    }

    function countBalanced(string: string, leftToRight: boolean) {
      const startIdx = leftToRight ? 0 : string.length - 1;
      const step = leftToRight ? 1 : -1;
      const openCh = leftToRight ? '(' : ')';

      let max = 0;
      let [opens, closes] = [0, 0];
      for (let i = startIdx; i >= 0 && i < string.length; i += step) {
        string[i] === openCh ? opens += 1 : closes += 1;
        if (opens === closes) max = Math.max(max, opens * 2);
        if (closes > opens) [opens, closes] = [0, 0];
      }

      return max;
    }
  }
  {
    // O(n) time | O(1) space
    function longestBalancedSubstring(string: string) {
      const leftToRightCount = count(string, true);
      const rightToLeftCount = count(string, false);
      return Math.max(leftToRightCount, rightToLeftCount);
    }

    function count(string: string, leftToRight: boolean): number {
      const startIdx = leftToRight ? 0 : string.length - 1;
      const step = leftToRight ? 1 : -1;
      const openCh = leftToRight ? '(' : ')';
      let [opens, closes] = [0, 0];
      let max = 0;
      for (let i = startIdx; i >= 0 && i < string.length; i += step) {
        string[i] === openCh ? opens += 1 : closes += 1;
        if (opens === closes) max = Math.max(max, opens + closes);
        if (closes > opens) [opens, closes] = [0, 0];
      }

      return max;
    }
  }
  {
    // O(n) time | O(n) space
    function longestBalancedSubstring(string: string) {
      const idxStack = [-1];
      let max = 0;
      for (let i = 0; i < string.length; i++) {
        if (string[i] === '(') {
          idxStack.push(i);
        } else {
          idxStack.pop();
          if (idxStack.length === 0) {
            idxStack.push(i);
            continue;
          }
          max = Math.max(max, i - idxStack[idxStack.length - 1]);
        }
      }

      return max;
    }
  }
  {
    // O(n) time | O(1) space
    function longestBalancedSubstring(string: string) {
      const leftToRightCount = countChars(string, true);
      const rightToLeftCount = countChars(string, false);
      return Math.max(leftToRightCount, rightToLeftCount);
    }

    function countChars(string: string, leftToRight: boolean) {
      const startIdx = leftToRight ? 0 : string.length - 1;
      const step = leftToRight ? 1 : -1;
      const openCh = leftToRight ? '(' : ')';

      let max = 0;
      let [opens, closes] = [0, 0];
      for (let i = startIdx; i < string.length && i >= 0; i += step) {
        string[i] === openCh ? opens += 1 : closes += 1;
        if (opens === closes) max = Math.max(max, opens + closes);
        if (closes > opens) [opens, closes] = [0, 0];
      }

      return max;
    }


  }
}

export const __ = '__';