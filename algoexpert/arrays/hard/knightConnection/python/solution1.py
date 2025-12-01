import math

# O(n x m) time | O(n x m) space
# n = horizontal distance between the two knights
# m = vertical distance between the two knights
def knightConnection(knightA, knightB):
    visited = {}
    queue = [[knightA[0], knightA[1], 0]]
   
    while len(queue) > 0:
        [x, y, dist] = queue.pop(0)
        key = str(x) + ',' + str(y)
        if key in visited:
            continue
        visited[key] = True
        if x == knightB[0] and y == knightB[1]:
            return math.ceil(dist/2)

        queue.append([x + 2, y + 1, dist + 1])
        queue.append([x + 2, y - 1, dist + 1])
        queue.append([x - 2, y + 1, dist + 1])
        queue.append([x - 2, y - 1, dist + 1])
        queue.append([x + 1, y + 2, dist + 1])
        queue.append([x - 1, y + 2, dist + 1])
        queue.append([x + 1, y - 2, dist + 1])
        queue.append([x - 1, y - 2, dist + 1])
        
    return -1
