# O(n) time | O(n) space
# n = height of the staircase

def staircaseTraversal(height, maxSteps):
  currentNumberOfWays = 0
  waysToTop = [1]

  for currentHeight in range(1, height + 1):
    startOfWindow = currentHeight - maxSteps - 1
    endOfWindow = currentHeight - 1
    if startOfWindow >=  0:
      currentNumberOfWays -= waysToTop[startOfWindow]

    currentNumberOfWays += waysToTop[endOfWindow]
    waysToTop.append(currentNumberOfWays)
  
  return waysToTop[height]