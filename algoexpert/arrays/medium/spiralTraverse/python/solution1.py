# O(n) time | O(n) space
def spiralTraverse(array):
    result = []
    startCol, endCol = 0, len(array[0]) - 1
    startRow, endRow = 0, len(array) - 1

    while startCol <= endCol and  startRow <= endRow:
        for col in range(startCol, endCol + 1):
            result.append(array[startRow][col])

        for row in range(startRow + 1, endRow + 1):
            result.append(array[row][endCol])

        if startRow != endRow:
            for col in reversed(range(startCol, endCol)):
                result.append(array[endRow][col])

        if startCol != endCol:
            for row in reversed(range(startRow + 1, endRow)):
                result.append(array[row][startCol])

        startCol, endCol = startCol + 1, endCol - 1
        startRow, endRow = startRow + 1, endRow - 1
        
    return result