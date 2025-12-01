# O(n) time | O(1) space
def isMonotonic(array):
    isNonIncreasing, isNonDecreasing = True, True
    
    i, j = 0, 1
    while j < len(array):
        if array[j] > array[i]: isNonIncreasing = False
        if array[i] > array[j]: isNonDecreasing = False
        if isNonIncreasing == False and  isNonDecreasing == False: return False # break early if failure detected
        i, j = i + 1, j + 1
    
    return isNonIncreasing or isNonDecreasing

