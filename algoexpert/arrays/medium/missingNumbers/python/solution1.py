# O(n) time | O(1) space
def missingNumbers(nums):
    nFactorial = 1
    for i in range(1, len(nums) + 3):
        nFactorial *= i

    productOfNums = 1
    for num in nums:
        productOfNums *= num

    prodOfMissingNums = nFactorial / productOfNums

    for num1 in range(1, len(nums) + 2):
        num2 = prodOfMissingNums / num1
        if num2 % 1 == 0 and num2 <= len(nums) + 2:
            return [num1, num2]

    return []
