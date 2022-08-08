{
  {
    function balancedBrackets(str: string): boolean {
      const opens: { [key: string]: string; } = {
        "{": "}",
        "(": ")",
        "[": "]",
      };
      const closes: { [key: string]: string; } = {
        "}": "{",
        ")": "(",
        "]": "[",
      };

      const stack: string[] = [];
      for (let ch of str) {
        if (ch in opens) {
          stack.push(ch);
        } else if (ch in closes) {
          if (stack.length === 0) return false;
          if (closes[ch] !== stack.pop()) return false;
        }
      }

      return stack.length === 0;
    }
  }
  {
    // O(n) time | O(n) space
    function balancedBrackets(str: string): boolean {
      const opens: { [key: string]: string; } = { "{": "}", "[": "]", "(": ")" };
      const closes: { [key: string]: string; } = { "}": "{", "]": "[", ")": "(" };

      const stack: string[] = [];
      for (let ch of str) {
        if (ch in opens) {
          stack.push(ch);
        } else if (ch in closes) {
          if (stack.length === 0 || stack.pop() !== closes[ch]) {
            return false;
          }
        }
      }

      return stack.length === 0;
    }

  }
  {
    function balancedBrackets(str: string): boolean {
      const opens: { [key: string]: string; } = { "{": "}", "[": "]", "(": ")" };
      const closes: { [key: string]: string; } = { "}": "{", "]": "[", ")": "(" };

      const stack: string[] = [];
      for (let ch of str) {
        if (ch in opens) {
          stack.push(ch);
        } else if (ch in closes) {
          if (stack.length === 0) return false;
          if (closes[ch] !== stack.pop()!) return false;
        }
      }

      return stack.length === 0;
    }
  }
}

export const ___ = '___';