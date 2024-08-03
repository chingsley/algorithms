{
  {
    # O(nlog(n)) time | O(n) space
    def mergeOverlappingIntervals(intervals):
        intervals.sort(key=lambda x: x[0])
        
        merged = [intervals[0]]
        for x in intervals:
            lastMerged = merged[len(merged) -1]
            a, b = lastMerged[0], lastMerged[1]
            c, d = x[0], x[1]
            if b >= c:
                merged[len(merged) -1] = [a, max(b, d)]
            else:
                merged.append([c, d])
                
      return merged
  }
}