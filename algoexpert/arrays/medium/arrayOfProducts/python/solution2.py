# O(n) time | O(n) space
class Solution:
    def arrayOfProducts(self, nums: list[int]) -> list[int]:
        right: list[int] = [1] * len(nums)
        for j in range(len(nums) - 2, -1, -1):
            right[j] = right[j + 1] * nums[j + 1]

        product = 1
        result: list[int] = [right[0]]
        for i in range(1, len(nums), 1):
            product *= nums[i - 1]
            result.append(product * right[i])

        return result


def arrayOfProducts(array):
    return Solution().arrayOfProducts(array)
