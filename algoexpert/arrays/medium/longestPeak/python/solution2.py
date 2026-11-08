def longestPeak( arr: list[int]) -> int:
    max_len, peakIdx = 0, 1
    while peakIdx < len(arr) - 1:
        # Check whether the current element is a peak before searching left and right
        if arr[peakIdx - 1] >= arr[peakIdx] or arr[peakIdx + 1] >= arr[peakIdx]:
            peakIdx += 1
            continue

        i, j = peakIdx, peakIdx
        while i - 1 >= 0 and arr[i - 1] < arr[i]: i -= 1
        while j + 1 < len(arr) and arr[j + 1] < arr[j]: j += 1
        if i != peakIdx and j != peakIdx:
            max_len = max(max_len, j - i + 1)
        
        peakIdx = j + 1
    
    return max_len