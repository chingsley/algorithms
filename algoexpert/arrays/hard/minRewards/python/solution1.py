# O(n) time | O(n) space
def minRewards(scores):
    minRewards = [0 for i in scores]
    localMinIdxs = []
    for i in range(0, len(scores)):
        curr = scores[i]
        left = float("inf") if i == 0 else scores[i - 1]
        right = float("inf") if i == len(scores) - 1 else scores[i + 1]
        if curr < left and curr < right:
            localMinIdxs.append(i)

    for idx in localMinIdxs:
        minRewards[idx] = 1
        for i in reversed(range(0, idx)):
            if scores[i] < scores[i + 1]:
                break
            minRewards[i] = max(minRewards[i], minRewards[i + 1] + 1)

        for i in range(idx + 1, len(scores)):
            if scores[i] < scores[i - 1]:
                break
            minRewards[i] = max(minRewards[i], minRewards[i -1] + 1)
        
    return sum(minRewards)