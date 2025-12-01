# O(w*h) time | O(w*h) space
def largestIsland(matrix):
    islandSizes = []
    marker = 2
    for i, _ in enumerate(matrix):
        for j, _ in enumerate(matrix[i]):
            if matrix[i][j] == 0:
                size = countIslands(i, j, matrix, marker)
                islandSizes.append(size)
                marker += 1
            
    return getMax(matrix, islandSizes)


def countIslands(i, j, matrix, marker):
    if matrix[i][j] != 0:
        return 0
        
    matrix[i][j] = marker
    neighbors = getUnmarkedLandNeigbors(i, j, matrix)
    size = 1
    for pos in neighbors:
        size += countIslands(pos[0], pos[1], matrix, marker)

    return size


def getUnmarkedLandNeigbors(i, j, matrix):
    positions = []
    if j - 1 >= 0 and matrix[i][j - 1] == 0:
        positions.append([i, j - 1])
    if j + 1 < len(matrix[0]) and matrix[i][j + 1] == 0:
        positions.append([i, j + 1])
    if i - 1 >= 0 and matrix[i - 1][j] == 0:
        positions.append([i - 1, j])
    if i + 1 < len(matrix) and matrix[i + 1][j] == 0:
        positions.append([i + 1, j])
        
    return positions


def getMax(matrix, islandSizes):
    max = 0
    for i, _ in enumerate(matrix):
        for j, _ in enumerate(matrix[i]):
            seen = {}
            if matrix[i][j] != 1:
                continue
            size = 1
            if i - 1 >= 0 and matrix[i - 1][j] not in seen and matrix[i - 1][j] != 1:
                size += islandSizes[matrix[i - 1][j] - 2]
                seen[matrix[i - 1][j]] = True
            if i + 1 < len(matrix) and matrix[i + 1][j] not in seen and matrix[i + 1][j] != 1:
                size += islandSizes[matrix[i + 1][j] - 2]
                seen[matrix[i + 1][j]] = True
            if j - 1 >= 0 and matrix[i][j - 1] not in seen and matrix[i][j - 1] != 1:
                size += islandSizes[matrix[i][j - 1] - 2]
                seen[matrix[i][j - 1]] = True
            if j + 1 < len(matrix[0]) and matrix[i][j + 1] not in seen and matrix[i][j + 1] != 1:
                size += islandSizes[matrix[i][j + 1] - 2]
                seen[matrix[i][j + 1]] = True

            if size > max:
                max = size
    return max


# [
#     [1, 2, 1, 3, 3],
#     [1, 1, 1, 1, 3],
#     [4, 1, 1, 1, 1],
#     [4, 1, 1, 5, 5]
# ]