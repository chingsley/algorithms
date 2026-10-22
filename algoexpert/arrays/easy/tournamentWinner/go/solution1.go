package main

// O(n) time | O(k) space — k = number of unique teams
func TournamentWinner(competitions [][]string, results []int) string {
	scores := make(map[string]int)
	champion := struct {
		team  string
		score int
	}{}

	for i, comp := range competitions {
		homeTeam, awayTeam := comp[0], comp[1]
		winner := homeTeam
		if results[i] == 0 {
			winner = awayTeam
		}

		scores[winner] += 3

		if scores[winner] > champion.score {
			champion.team = winner
			champion.score = scores[winner]
		}
	}

	return champion.team
}
