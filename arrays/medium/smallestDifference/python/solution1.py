import math

# O(nlog(n) + mlog(m)) | O(1) space
def smallestDifference(arrayOne, arrayTwo):
    arrayOne.sort()
    arrayTwo.sort()
    
    i, j = 0, 0
    smallestPair, smallestDiff = [], math.inf
    while i < len(arrayOne) and j < len(arrayTwo):
        diff = abs(arrayOne[i] - arrayTwo[j])
        if diff < smallestDiff:
            smallestPair, smallestDiff = [arrayOne[i], arrayTwo[j]], diff

        if arrayOne[i] < arrayTwo[j]:
            i += 1
        else:
            j += 1
        
    return smallestPair