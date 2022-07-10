/**
 * Question:
 * 
 * Solution:
 * Time: O(n) time (n = length of competitons or length of results)
 * Space O(k) space (k = no. of unique teams in the competitions)
 * @param competitions n
 * @param results n
 * @returns string
 */
export function tournamentWinner(competitions: string[][], results: number[]) {
  const scores: { [key: string]: number; } = {};
  let champion: string = '';
  let highestScore: number = -Infinity;

  for (let i = 0; i < competitions.length; i++) {
    const [home, away] = competitions[i];
    const currentWinner = results[i] === 1 ? home : away;
    scores[currentWinner] = currentWinner in scores ? scores[currentWinner] += 3 : scores[currentWinner] = 3;

    if (scores[currentWinner] > highestScore) {
      champion = currentWinner;
      highestScore = scores[currentWinner];
    }
  }

  return champion;
}