# O(n) time | O(n) space (n = length of results = lenght of competitions)
def tournamentWinner(competitions, results):
    dict = {}
    for idx, x in enumerate(results):
        home, away = competitions[idx] # destructuring: e.g, competitions[0] = ["HTML", "C#"]. home = "HTML", away = "C#"
        if not home in dict: dict[home] = 0
        if not away in dict: dict[away] = 0

        if x == 1:
            dict[home] += 3
        else:
            dict[away] += 3

    maxPoint, winner = 0, ""
    for team in dict:
        if dict[team] > maxPoint:
            maxPoint, winner = dict[team], team
        
    return winner