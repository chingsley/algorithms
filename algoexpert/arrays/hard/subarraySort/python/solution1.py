# O(n) time | O(1) space
def subarraySort(array):
    minUnsorted = float("inf")
    maxUnsorted = float("-inf")
    sorted = True
    for i in range(0, len(array)):
        prev = array[i - 1] if i - 1 >= 0 else float("-inf")
        curr = array[i]
        next = array[i + 1] if i + 1 < len(array) else float("inf")
        if not (prev <= curr and curr <= next):
            sorted = False
            minUnsorted = curr if curr < minUnsorted else minUnsorted
            maxUnsorted = curr if curr > maxUnsorted else maxUnsorted

    if sorted:
        return [-1, -1]

    minIdx, maxIdx = -1, -1
    for i in range(0, len(array)):
        left = array[i - 1] if i - 1 >= 0 else float("-inf")
        curr = array[i]

        if minIdx < 0 and left <= minUnsorted and minUnsorted < curr:
            minIdx = i
            
    for i in reversed(range(0, len(array))):
        curr = array[i]
        right = array[i + 1] if i + 1 < len(array) else float("inf")

        if maxIdx < 0 and maxUnsorted <= right  and maxUnsorted > curr:
            maxIdx = i


    return [minIdx, maxIdx]
