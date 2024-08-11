# O(n^2) time | O(1) space
def longestPeak(array):
    maxPeakLength = 0
    for i in range(1, len(array) - 1):
        peakLength = getPeakLengthAtIdx(i, array)
        if peakLength > maxPeakLength:
            maxPeakLength = peakLength
            
    return maxPeakLength


def getPeakLengthAtIdx(i, array):
    leftIdx, rightIdx = i - 1, i + 1
    leftSize, rightSize = 0, 0
    
    currIdx = i
    while leftIdx >= 0 and array[leftIdx] < array[currIdx]:
        leftSize += 1
        leftIdx, currIdx = leftIdx - 1, currIdx - 1

    currIdx = i
    while rightIdx < len(array) and array[rightIdx] < array[currIdx]:
        rightSize += 1
        rightIdx, currIdx = rightIdx + 1, currIdx + 1

    if leftSize == 0 or rightSize == 0:
        return 0

    return leftSize + rightSize + 1