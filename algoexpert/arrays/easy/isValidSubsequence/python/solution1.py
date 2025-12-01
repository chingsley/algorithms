#
 # 
 # @param array (N)
 # @param sequence (n)
 # @returns boolean
 # 
 # Time: O(N)
 #    Proof: Time = O(N+n)
 #    But since n is gaurantted to be <= N
 #    If at worst case, n becomes = N
 #    Then Time: O(N + N) = O(2N) = O(N)
 # Space: O(1)
 #
def isValidSubsequence(array, sequence):
    lastFoundIdx = -1
    for x in sequence:
        exists = False
        i = lastFoundIdx + 1
        while i < len(array) and exists == False:
            if array[i] == x:
                exists = True
                lastFoundIdx = i
            else:
                i += 1

        if exists == False:
            return False
            
    return True
