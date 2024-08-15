// O(n) time | O(n) space
export function minRewards(scores: number[]) {
  const minRewards = new Array(scores.length).fill(1);
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] < scores[i - 1]) continue;
    minRewards[i] = Math.max(minRewards[i], minRewards[i - 1] + 1);
  }
  for (let i = scores.length - 2; i >= 0; i--) {
    if (scores[i] < scores[i + 1]) continue;
    minRewards[i] = Math.max(minRewards[i], minRewards[i + 1] + 1);
  }

  return minRewards.reduce((sum, reward) => sum + reward, 0);
}
