{
    {
        function tournamentWinner(competitions, results) {
            const scores = {};
            let champion = { name: '', score: -Infinity };
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
        function tournamentWinner(competitions, results) {
            const scores = {};
            const champion = { name: '', score: -Infinity };
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
    }
    {
        // O(n) time | O(k) space;
        // n = length of competitions array or lenght of results array;
        // k = no. of unique teams in the competition
        function tournamentWinner(competitions, results) {
            const scores = {};
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
        function tournamentWinner(competitions, results) {
            const scores = {};
            let champion = '';
            let highestScore = -Infinity;
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
        ;
        // O(n) time | O(k) space
        // n = no. of teams in the competitions array
        // k = no. of unique teams in competitions array
        function tournamentWinner(competitions, results) {
            const scores = {};
            const champion = { name: '', score: 0 };
            for (let i = 0; i < competitions.length; i++) {
                const [home, away] = competitions[i];
                const winner = results[i] === 1 ? home : away;
                if (!(winner in scores))
                    scores[winner] = 0;
                scores[winner] += 3;
                if (scores[winner] > champion.score) {
                    champion.score = scores[winner];
                    champion.name = winner;
                }
            }
            return champion.name;
        }
    }
}
export const ___ = '___';
