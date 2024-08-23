##
 # 
 # @param array array of numbers
 # @returns integer
 # NOTE: this solution works only if it's gauranteed that the array must
 # have a majority element. If that is NOT gauranteed, then this solution
 # will fail. For e.g with this input: [1, 1, 4, 4, 7, 2, 2], there is no
 # majority element and in that case this solution will fail.
 #
def majorityElement(array):
    majElement = array[0]
    count = 0
    for num in array:
        if count == 0:
            majElement = num

        if num == majElement:
            count += 1
        else:
            count -= 1
            
    return majElement
