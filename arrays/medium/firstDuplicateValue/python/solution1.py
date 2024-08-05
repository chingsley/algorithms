# O(n) time | O(n) space
def firstDuplicateValue(array):
    dict = {}
    for num in array:
        if num in dict: return num
        dict[num] = num
            
    return -1

