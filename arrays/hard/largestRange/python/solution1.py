# O(n) time | O(n) space
def largestRange(array):
    dict = {}
    maxRange, maxLen = [0, 0], 0
    for num in array:
        dict[num] = False

    for num in array:
        if dict[num] == True:
            continue
        range, len = getRange(num, dict)
        if len > maxLen:
            maxRange, maxLen = range, len

    return maxRange

def getRange(num, dict):
    i, j = num, num
    while i in dict:
        dict[i] = True
        i -= 1
    while j in dict:
        dict[j] = True
        j += 1

    return [i + 1, j -1], j - i - 1
        
    

