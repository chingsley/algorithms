# O(n) time | O(n) space. n = len(string)
def caesarCipherEncryptor(string, key):
    outputStr = []
    alphabets = list("abcdefghijklmnopqrstuvwxyz")
    for ch in string:
        chIdx = alphabets.index(ch)
        shiftedIdx = (chIdx + key) % 26
        outputStr.append(alphabets[shiftedIdx])

    return "".join(outputStr)
