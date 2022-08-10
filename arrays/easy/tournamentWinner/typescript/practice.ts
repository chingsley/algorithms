{
  {
    // O(n) time | O(k) space;
    // n = length of competitions array or lenght of results array;
    // k = no. of unique teams in the competition
    function tournamentWinner(competitions: string[][], results: number[]) {
      const scores: { [key: string]: number; } = {};
      let maxScore = 0;
      let champion = '';

      for (let i = 0; i < competitions.length; i++) {
        const [home, away] = competitions[i];
        const winner = results[i] === 1 ? home : away;
        (winner in scores) ? scores[winner] += 3 : scores[winner] = 3;

        if (scores[winner] > maxScore) {
          maxScore = scores[winner];
          champion = winner;
        }
      }

      return champion;
    }
  }
}

export const ___ = '___';