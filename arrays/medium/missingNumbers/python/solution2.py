# O(n) time | O(1) space
def missingNumbers(nums):
    sumToN, sumNums = 0, 0
    
    for i in range(1, len(nums) + 3):
        sumToN += i
        
    for num in nums:
        sumNums += num

    avg = (sumToN - sumNums) // 2

    leftHalfSum, rightHalfSum = 0, 0
    for num in nums:
        if num <= avg:
            leftHalfSum += num
        else:
            rightHalfSum += num

    actualLeftHalfSum, actualRightHalfSum = 0, 0
    for  i in range(1, len(nums) + 3):
        if i <= avg:
            actualLeftHalfSum += i
        else:
            actualRightHalfSum += i
    
    return [actualLeftHalfSum - leftHalfSum, actualRightHalfSum - rightHalfSum]
