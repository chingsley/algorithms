# O(n) time | O(n) space
def minRewards(scores):
    minRewards = [1 for n in scores]
    for i in range(1, len(scores)):
        if scores[i] < scores[i - 1]:
            continue
        minRewards[i] = max(minRewards[i], minRewards[i - 1] + 1)

    for i in reversed(range(0, len(scores)-1)):
        if scores[i] < scores[i + 1]:
            continue
        minRewards[i] = max(minRewards[i], minRewards[i + 1] + 1)
    
    return sum(minRewards)
