
def isMonotonic(nums: list[int]) -> bool:
    increasing, decreasing = False, False
    for i in range(len(nums) - 1):
        if nums[i + 1] > nums[i]:
            increasing = True
        if nums[i + 1] < nums[i]:
            decreasing = True

    return not (increasing and decreasing)

  
def isMonotonicV2( nums: list[int]) -> bool:
    increasing, decreasing = False, False
    for i in range(len(nums) - 1):
        if nums[i + 1] > nums[i]:
            increasing = True
        if nums[i + 1] < nums[i]:
            decreasing = True
        if increasing and decreasing: # break early if failure detected
            return False

    return not (increasing and decreasing)