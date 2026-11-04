import math


def maxDistToClosest(seats: list[int]) -> int:
    maxDist = -1
    i = 0
    while i < len(seats):
        if seats[i] == 1:
            i += 1
            continue

        currZerosCount = 0
        j = i
        while j < len(seats) and seats[j] == 0:
            currZerosCount += 1
            j += 1

        currMaxDist = math.ceil(currZerosCount / 2)
        if i == 0 or j == len(seats):
            currMaxDist = currZerosCount

        if currMaxDist > maxDist:
            maxDist = currMaxDist

        i = j

    return maxDist
