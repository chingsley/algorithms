Tournament Winner

Problem Description
You are given two arrays, competitions and results, representing the outcomes of a sports tournament.

The competitions array contains pairs of teams, where each pair represents a match between a home team and an away team.

The results array contains the outcome of each match, where:

- 1 indicates that the home team won.
- 0 indicates that the away team won.
  Each winning team receives 3 points, while the losing team receives 0 points. There are no draws.

A team can participate in multiple matches.

Write a function tournamentWinner that returns the name of the team with the highest total points after all matches have been played.

You are guaranteed that there will be exactly one tournament winner.
Example 1
Input:
competitions = [
["HTML", "C#"],
["C#", "Python"],
["Python", "HTML"]
]

results = [0, 0, 1]

Output:
"Python"

let champion: {[key: string]: number } = {team: '', score: 0 };
scores: {[key: string]: number } = {}
for (let i = 0; i < results.length; i++) {
const [homeTeam, away] = competitions[i];
scores[homeTeam] = scores[homeTeam] || 0;
scores[away] = scores[away] || 0;
const winner = results[i] === 1 ? homeTeam : away;
scores[winner] += 3;
if (scores[winner] > champion.score) {
champion = { team: winner, score: scores[winner] }
}
}

return champion.team;
