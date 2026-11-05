def firstDuplicateValue(array: list[int]) -> list[int]:
    for i in range(len(array)):
        idx = abs(array[i]) - 1
        if array[idx] < 1:
            return abs(array[i])
        
        array[idx] *= -1

    return -1