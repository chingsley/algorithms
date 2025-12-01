// O(n) time | O(1) space
export function longestBalancedSubstring(string: string) {
  const leftToRightMax = getMaxSubStr(string, true);
  const rightToLeftMax = getMaxSubStr(string, false);

  return Math.max(leftToRightMax, rightToLeftMax);
}

function getMaxSubStr(string: string, leftToRight: boolean): number {
  const startIdx = leftToRight ? 0 : string.length - 1;
  let step = leftToRight ? 1 : -1;
  let [opens, closes] = leftToRight ? ['(', ')'] : [')', '('];
  let [opensCount, closesCount] = [0, 0];

  let max = 0;
  for (let i = startIdx; i >= 0 && i < string.length; i += step) {
    if (string[i] === opens) opensCount += 1;
    if (string[i] === closes) closesCount += 1;

    if (closesCount === opensCount) max = Math.max(max, opensCount * 2);
    if (closesCount > opensCount) [closesCount, opensCount] = [0, 0];
  }

  return max;
}
