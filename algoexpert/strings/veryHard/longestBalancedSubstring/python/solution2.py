# O(n) time | O(1) space
def longestBalancedSubstring(string):
    leftCount = getMaxCount(string, True)
    rightCount = getMaxCount(string, False)
    return leftCount if leftCount > rightCount else rightCount


def getMaxCount(string, leftToRight):
    startIdx = 0 if leftToRight else len(string) - 1
    step = 1 if leftToRight else -1
    opens = '(' if leftToRight else ')'
    closes = ')' if leftToRight else '('
    opensCount, closesCount = 0, 0
    max = 0
    i = startIdx
    while i >= 0 and i < len(string):
        if string[i] == opens:
            opensCount += 1
        else:
            closesCount += 1

        if opensCount == closesCount:
            max = opensCount + closesCount if (opensCount + closesCount) > max else max
        if closesCount > opensCount:
            opensCount, closesCount = 0, 0

        i += step

    return max