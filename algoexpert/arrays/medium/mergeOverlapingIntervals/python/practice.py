# O(nlog(n)) time | O(n) space
def mergeOverlappingIntervals(intervals):
    intervals.sort(key=lambda x: x[0])

    merged = [intervals[0]]
    for x in intervals:
        lastMerged = merged[len(merged) - 1]
        a, b = lastMerged[0], lastMerged[1]
        c, d = x[0], x[1]
        if b >= c:
            merged[len(merged) - 1] = [a, max(b, d)]
        else:
            merged.append([c, d])

    return merged


def mergeOverlappingIntervals(intervals: list[list[int]]) -> list[list[int]]:
    intervals.sort(key=lambda x: x[0])
    merged = [intervals[0]]
    for i in range(1, len(intervals)):
        [start1, end1] = merged[len(merged) - 1]  # merged[-1] also works
        [start2, end2] = intervals[i]
        if end1 >= start2:
            merged[len(merged) - 1] = [start1, max(end1, end2)]
        else:
            merged.append([start2, end2])

    return merged
