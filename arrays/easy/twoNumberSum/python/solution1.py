# O(n) time | O(n) space
def twoNumberSum(array, targetSum):
    compl = {}
    for v in array:
        if targetSum - v in compl:
            return [v, targetSum - v]
        else:
            compl[v] = v
    
    return []
