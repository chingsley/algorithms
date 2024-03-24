###
 # O(n # l) time | O(c) space
 # where:
 #    n = the number of words
 #    l = the length of the longest word
 #    c = number of unique characters across all words
 #/
def minimumCharactersForWords(words):
    bank = {}
    for word in words:
        dict = {}
        for ch in word:
            if not ch in dict:
                dict[ch] = 0
            dict[ch] += 1
            if not ch in bank:
                bank[ch] = 0
            if bank[ch] < dict[ch]:
                bank[ch] += 1

    result = []
    for ch in bank:
        for i in range(bank[ch]):
            result.append(ch)
    return result
