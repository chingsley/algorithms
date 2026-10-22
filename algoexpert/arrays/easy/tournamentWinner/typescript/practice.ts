{
  {
    function tournamentWinner(competitions: string[][], results: number[]): Champion["name"] {
      const scores: { [key: string]: number; } = {};
      let champion: Champion = { name: '', score: -Infinity };
      for (let i = 0; i < competitions.length; i++) {
        const [home, away] = competitions[i];
        const winner = results[i] === 1 ? home : away;
        winner in scores ? scores[winner] += 3 : scores[winner] = 3;
        if (scores[winner] > champion.score) {
          champion = { name: winner, score: scores[winner] };
        }
      }

      return champion.name;
    }

    interface Champion {
      name: string;
      score: number;
    }

  }
  {
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
    function tournamentWinner(competitions: string[][], results: number[]) {
      const scores: { [key: string]: number; } = {};
      const champion: Champion = { name: '', score: -Infinity };

      for (let i = 0; i < competitions.length; i++) {
        const [home, away] = competitions[i];
        const winner = results[i] === 1 ? home : away;
        (winner in scores) ? scores[winner] += 3 : scores[winner] = 3;
        if (scores[winner] > champion.score) {
          champion.name = winner;
          champion.score = scores[winner];
        }
      }

      return champion.name;
    }

    interface Champion {
      name: string;
      score: number;
    }
  }
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
  {
    function tournamentWinner(competitions: string[][], results: number[]) {
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
  }
  {
    interface Champion { name: string; score: number; };

    // O(n) time | O(k) space
    // n = no. of teams in the competitions array
    // k = no. of unique teams in competitions array
    function tournamentWinner(competitions: string[][], results: number[]) {
      const scores: { [key: string]: number; } = {};
      const champion: Champion = { name: '', score: 0 };

      for (let i = 0; i < competitions.length; i++) {
        const [home, away] = competitions[i];
        const winner = results[i] === 1 ? home : away;

        if (!(winner in scores)) scores[winner] = 0;
        scores[winner] += 3;

        if (scores[winner] > champion.score) {
          champion.score = scores[winner];
          champion.name = winner;
        }
      }

      return champion.name;
    }
  }
  {
    function tournamentWinner(competitions: string[][], results: number[]) {
      let champion: { team: string, score: number; } = { team: '', score: 0 };
      const scores: { [key: string]: number; } = {};

      for (let i = 0; i < results.length; i++) {
        const [homeTeam, awayTeam] = competitions[i];
        scores[homeTeam] = scores[homeTeam] || 0;
        scores[awayTeam] = scores[awayTeam] || 0;
        const winner = results[i] === 1 ? homeTeam : awayTeam;
        scores[winner] += 3;
        if (scores[winner] > champion.score) {
          champion = { team: winner, score: scores[winner] };
        }
      }

      return champion.team;
    }
  }
}

export const ___ = '___';