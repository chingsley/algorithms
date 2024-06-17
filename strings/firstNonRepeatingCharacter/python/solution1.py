# O(n) time | O(1) space
def firstNonRepeatingCharacter(string):
    dict = {}
    for ch in string:
        if not ch in dict:
            dict[ch] = 0
        dict[ch] += 1

    for i in range(0, len(string)):
        if dict[string[i]] == 1:
            return i

    return -1