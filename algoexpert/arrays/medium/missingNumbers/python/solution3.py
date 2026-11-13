def missingNumbers(nums: list[int]) -> list[int]:
    totalSum = sumRange(1, len(nums) + 2)
    arrSum = sum(nums)
    missingSum = totalSum - arrSum
    mid = missingSum // 2

    totalLeftSum = sumRange(1, mid)
    totalRightSum = sumRange(mid + 1, len(nums) + 2)

    numsLeftSum, numsRightSum = 0, 0
    for num in nums:
        if num <= mid:
            numsLeftSum += num
        else:
            numsRightSum += num

    return [totalLeftSum - numsLeftSum, totalRightSum - numsRightSum]


def sumRange(start: int, end: int) -> int:
    total = 0
    for num in range(start, end + 1):
        total += num
    return total