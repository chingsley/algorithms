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
}