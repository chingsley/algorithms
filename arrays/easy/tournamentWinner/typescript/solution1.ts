/**
 * Time: O(n)
 * Space: O(k)
 * where k = no. of unique teams in the competition, which are used in forming the teamScores obj
 *      Actual: Space: O(30k)
 *      where 30 = max. no. of chars in a team name (see question prompt)
 *      O(30k) = O(k) (since 30 is a constant)
 * 
 * @param competitions n
 * @param results r
 * @returns string
 */
export function tournamentWinner(competitions: string[][], results: number[]) {
  const teamScores: {[key: string]: number} = {};
  let overallWinnerWithScore = ['', 0]
  for(let i = 0; i < competitions.length; i++) {
    const winner = results[i] === 1 ? competitions[i][0] : competitions[i][1];
    if(winner in teamScores) {
      teamScores[winner] += 3;
    } else {
      teamScores[winner] = 3;
    }
    if(teamScores[winner] > overallWinnerWithScore[1]) {
      overallWinnerWithScore = [winner, teamScores[winner]]
    }
  }
  // console.log(teamScores, overallWinnerWithScore)
  return overallWinnerWithScore[0];
}


console.log(
  tournamentWinner([
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
  ], [0, 0, 1])
)