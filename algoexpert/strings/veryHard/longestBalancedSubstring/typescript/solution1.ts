// O(n) time | O(n) space
export function longestBalancedSubstring(string: string) {
  const stack: number[] = [-1];
  let max = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(') {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length === 0) {
        stack.push(i);
      } else {
        const size = i - stack[stack.length - 1];
        max = Math.max(max, size);
      }

    }
  }

  return max;
}