# assignment 3, question 3
def find_candidates(S):
    if len(S) <= 1:
        return S.copy()
    mid = len(S) // 2
    left = find_candidates(S[:mid])
    right = find_candidates(S[mid:])
    merged = merge(left, right)
    print("merged", merged)
    filtered = []
    min_price = float('inf')
    for hotel in merged:
        if hotel[1] < min_price:
            filtered.append(hotel)
            min_price = hotel[1]
    return filtered

def merge(left, right):
    merged = []
    i = j = 0
    while i < len(left) and j < len(right):
        print("left: ", left, "right: ", right)
        if left[i][0] < right[j][0] or \
            (left[i][0] == right[j][0] and left[i][1] <= right[j][1]): # distance is same but left price is <= right price. If distance is same, we want the hotel with the lower price to come first
            merged.append(left[i])
            i += 1
        else:
            merged.append(right[j])
            j += 1
    merged.extend(left[i:])
    merged.extend(right[j:])
    return merged
    

find_candidates([(2, 80), (2, 150), (3, 79), (4, 70),(5, 69)])