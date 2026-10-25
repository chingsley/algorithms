class Solution:
    # returns the indices (not the values) of the two numbers that add up to the target
    # O(n) time | O(n) space
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        cmplmnt: dict[str, int] = {}
        for i in range(len(nums)):
            key = str(nums[i])
            if key in cmplmnt:
                return [cmplmnt[key], i]
            cmplmnt[str(target - nums[i])] = i

        return []
        