{{
  # O(n) time | O(1) space
def isPalindrome(string):
    i, j = 0, len(string) - 1
    while i <= j:
        if string[i] != string[j]:
            return False
        i, j = i + 1, j - 1
        
    return True

}}