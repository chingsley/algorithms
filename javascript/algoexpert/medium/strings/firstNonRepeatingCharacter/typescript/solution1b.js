// O(n) time, O(n) space
export function firstNonRepeatingCharacter(string) {
    const charCount = {};
    for (let char of string) {
        if (char in charCount) {
            charCount[char] += 1;
        }
        else {
            charCount[char] = 1;
        }
    }
    for (let i = 0; i < string.length; i++) {
        if (charCount[string[i]] === 1) {
            return i;
        }
    }
    return -1;
}
