# O(n) time | O(k) space — k = number of unique teams
def tournamentWinner(competitions, results):
    scores = {}
    champion = {"name": "", "score": 0}

    for i in range(len(competitions)):
        home, away = competitions[i]
        winner = home if results[i] == 1 else away

        if winner not in scores:
            scores[winner] = 0
        scores[winner] += 3

        if scores[winner] > champion["score"]:
            champion["name"] = winner
            champion["score"] = scores[winner]

    return champion["name"]
