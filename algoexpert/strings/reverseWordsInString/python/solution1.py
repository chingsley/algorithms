# WORK IN PROGRESS
# FAILS THE THE TEST CASE WHEN string = "a ab a"
def reverseWordsInString(string):
    arr = []
    i, j = 0, 1
    while j < len(string) - 1:
        if string[j] == ' ' and string[j - 1] != ' ':
           arr.append(string[i: j])
           i = j
        if string[j] != ' ' and string[j - 1] == ' ':
            arr.append(string[i: j])
            i = j
        j += 1

    print(i, j)
    arr.append(string[i: j + 1])
    result = []
    for i in reversed(range(0, len(arr))):
        result.append(arr[i])

    print(arr, result)

    return "".join(result)
