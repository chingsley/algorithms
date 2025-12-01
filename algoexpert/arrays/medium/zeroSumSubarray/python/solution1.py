# O(n) time | O(n) space
def zeroSumSubarray(nums):
    sums = set([0])
    currSum = 0
    for num in nums:
        currSum += num
        if currSum in sums:
            return True
        sums.add(currSum)

    return False
