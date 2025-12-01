// O(n) time | O(k) space
// n = length of the competitions array = length of the results array
// k = no. of unique teams in the competition 
export function tournamentWinner(competitions, results) {
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
