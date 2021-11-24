def sum(numbers):
    if len(numbers) < 1:
        return 0
    print("Calling sum(%s)" % numbers[1:])
    remaining_sums = sum(numbers[1:])
    print("Call to sum(%s) returning: %d + %d" %
          (numbers, numbers[0], remaining_sums))
    return numbers[0] + remaining_sums


numbers = [1, 2, 3, 4, 5, 6, 7, 8]
print(sum(numbers))
