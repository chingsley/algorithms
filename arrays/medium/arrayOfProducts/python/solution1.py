# O(n) time | O(n) space
def arrayOfProducts(array):
    left, right = [1] * len(array), [1] * len(array)

    product = 1
    for i in range(1, len(array)):
        left[i] = array[i - 1] * product
        product = left[i]

    product = 1
    for i in reversed(range(0, len(array) - 1)):
        right[i] = product * array[i + 1]
        product = right[i]

    result = []
    for i, _ in enumerate(array):
        result.append(left[i] * right[i])

    return result