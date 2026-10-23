# O(m x n) time | O(m x n) space
# for an m by n matrix
class Solution:
    def transpose(self, matrix: list[list[int]]) -> list[list[int]]:
        trnxp: list[list[int]] = []
        for colIdx in range(len(matrix[0])):
            newRow: list[int] = []
            for rowIdx in range(len(matrix)):
                newRow.append(matrix[rowIdx][colIdx])
            trnxp.append(newRow)

        return trnxp
        