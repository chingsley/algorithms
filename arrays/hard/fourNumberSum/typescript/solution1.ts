// Averag;: O(n^2) time | O(n^2) space
// Worst: O(n^3) time | O(n^2) space
export function fourNumberSum(array: number[], targetSum: number) {
  const dict: { [key: number]: number[][]; } = {};
  const quad: number[][] = [];
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const [num1, num2] = [array[i], array[j]];
      const diff = targetSum - (num1 + num2);
      if (!(diff in dict)) continue;
      for (const pair of dict[diff]) quad.push([...pair, num1, num2]);
    }

    for (let k = 0; k < i; k++) {
      const [num1, num2] = [array[k], array[i]];
      const sum = num1 + num2;
      if (!dict[sum]) dict[sum] = [];
      dict[sum].push([num1, num2]);
    }
  }

  return quad;
}

