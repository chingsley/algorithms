# O(n) time | O(1) space
def majorityElement(self, nums: list[int]) -> int:
    count, majNum = 0, nums[0]
    for num in nums:
        if count == 0: # If there is no current leader
            majNum = num # Become the leader first
        
        if num == majNum:
            count += 1 # Then upvote the count second
        else:
            count -= 1
    
    return majNum