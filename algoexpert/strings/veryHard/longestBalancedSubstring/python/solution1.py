# O(n) time | O(n) space (n = length of string)
def longestBalancedSubstring(string):
    stack = [-1]
    max = 0
    for i in range(0, len(string)):
        if string[i] == '(':
            stack.append(i)
        else:
            stack.pop()
            if len(stack) == 0:
                stack.append(i)
            else:
                size = i - stack[len(stack) - 1]
                max = size if size > max else max
    
    return max
