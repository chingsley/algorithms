# O(n) time | O(1) space (n = length of array)
def sortedSquaredArray(array):
    leftIdx, rightIdx = 0, len(array) - 1
    sqList = [0] * len(array)
    idx = len(array) - 1
    while leftIdx <= rightIdx:
        sqLeft, sqRight = array[leftIdx] ** 2, array[rightIdx] ** 2
        print(sqLeft, sqRight)
        if sqLeft > sqRight:
            sqList[idx] = sqLeft
            leftIdx += 1
        else:
            sqList[idx] = sqRight
            rightIdx -= 1
        idx -= 1

    return sqList