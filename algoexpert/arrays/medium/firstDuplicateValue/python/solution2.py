# O(n) time | O(1) space
def firstDuplicateValue(array):
    for num in array:
        absNum = abs(num)
        if array[absNum - 1] < 0:
            return absNum
        else:
            array[absNum - 1] *= -1
            
    return -1