def compareTriplets(a, b):
    alice = 0
    bob = 0
    for i, score in enumerate(a):
        if a[i] > b[i]:
            alice += 1
        elif a[i] < b[i]:
            bob += 1

    return [alice, bob]


result = compareTriplets([11, 12, 80], [20, 2, 20])
print(result)
