# O(n) time | O(1) space
def longestSubarrayWithSum(array, targetSum):
    i, j = 0, 0
    result = []
    currSum, change = array[0], 0
    while j < len(array):
        currSum += change
        if currSum == targetSum:
            if len(result) == 0 or (j - i > result[1] - result[0]):
                result = [i, j]
                
        if currSum <= targetSum:
            j += 1
            change = array[j] if j < len(array) else change
        else:
            change = -array[i]
            i += 1

        if i > j:
            j = i
            currSum = array[i] if i < len(array) else currSum
            change = 0
                
    return result
