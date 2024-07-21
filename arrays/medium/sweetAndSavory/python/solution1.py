# O(nlog(n)) time | O(n) space
def sweetAndSavory(dishes, target):
    sweet = sorted([dish for dish in dishes if dish < 0], key=abs)
    savory = sorted([dish for dish in dishes if dish > 0])

    bestPair = [0, 0]
    bestDiff = float("inf")
    swIdx, svIdx = 0, 0
    while swIdx < len(sweet) and svIdx < len(savory):
        sw, sv = sweet[swIdx], savory[svIdx]
        if sw + sv <= target:
            currSum = sw + sv
            currDiff = target - currSum
            if currDiff < bestDiff:
                bestDiff = currDiff
                bestPair = [sw, sv]
            svIdx += 1
        else:
            swIdx += 1

    return bestPair
