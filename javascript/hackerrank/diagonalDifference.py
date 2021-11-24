

def diagonalDifference(n, arr):
    primary_diagonals = []
    secondary_diagonals = []
    for i in range(n):
        primary_diagonals.append(arr[i][i])
        secondary_diagonals.append(arr[i][n-1-i])
    return abs(sum(primary_diagonals) - sum(secondary_diagonals))


print(diagonalDifference(3, [[11, 2, 4], [4, 5, 6], [10, 8, -12]]))

a = [6, 6, 7, -10, 9, -3, 8, 9, -1]
b = [9, 7, -10, 6, 4, 1, 6, 1, 1]
c = [-1, -2, 4, -6, 1, -4, -6, 3, 9]
d = [-8, 7, 6, -1, -6, -6, 6, -7, 2]
e = [-10, -4, 9, 1, -7, 8, -5, 3, -5]
f = [-8, -3, -4, 2, -3, 7, -5, 1, -5]
g = [-2, -7, -4, 8, 3, -1, 8, 2, 3]
h = [-3, 4, 6, -7, -7, -8, -3, 9, -6]
i = [-2, 0, 5, 4, 4, 4, -3, 3, 0]

print(diagonalDifference(9, [a, b, c, d, e, f, g, h, i]))
