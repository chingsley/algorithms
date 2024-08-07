# O(n) time | O(1) space
def moveElementToEnd(array, toMove):
    left, right = 0, len(array) - 1
    while left < right:
        while left < right and array[right] == toMove: right -= 1

        if array[left] == toMove:
            array[left], array[right] = array[right], array[left]
        left += 1
    return array