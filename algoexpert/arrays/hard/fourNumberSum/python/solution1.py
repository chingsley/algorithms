# Average: O(n^2) time | O(n^2) space
# Worst: O(n^3) time | O(n^2) space
def fourNumberSum(array, targetSum):
    dict = {}
    quad = []
    for i in range(0, len(array) - 1):
        for j in range(i + 1, len(array)):
            num1, num2 = array[i], array[j]
            diff = targetSum - (num1 + num2)
            if diff in dict:
                [quad.append(pair + [num1, num2]) for pair in dict[diff]]
                    

        for k in range(0, i):
            num1, num2 = array[i], array[k]
            sum = num1 + num2
            if not sum in dict: # if sum not in dict:   also works
                dict[sum] = []
            dict[sum].append([num1, num2])
    
    
    return quad
