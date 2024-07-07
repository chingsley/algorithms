# O(n^2) time | O(n) space
def threeNumberSum(array, targetSum):
    array.sort()
    triplets = []
    for i, _ in enumerate(array):
        j, k = i + 1, len(array) - 1
        while j < k:
            sum = array[i] + array[j] + array[k]
            if sum < targetSum:
                j += 1
            elif sum > targetSum:
                k -= 1
            else:
                triplets.append([array[i], array[j], array[k]])
                j, k = j + 1, k - 1
    
    return triplets