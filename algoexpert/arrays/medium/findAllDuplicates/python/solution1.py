# Time: O(n) | Space: O(1)
class Solution(object):
    def findDuplicates(self, nums):
        dups = []
        for i in range(len(nums)):
            idx = abs(nums[i]) - 1
            if (nums[idx] < 0):
                dups.append(abs(nums[i]))
            
            nums[idx] *= -1

        return dups


def findDuplicates(nums):
    return Solution().findDuplicates(nums)

        