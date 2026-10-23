# O(m x n) time | O(m x n) space
# for an m by n matrix
def transposeMatrix(matrix):
    transposed = []
    i = 0
    while i < len(matrix[0]):
        newArr = []
        for arr in matrix:
            newArr.append(arr[i])
            
        i += 1
        transposed.append(newArr)

    return transposed