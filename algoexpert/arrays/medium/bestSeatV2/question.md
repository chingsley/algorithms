### Maximize Distance to Closest Person

You are given an integer array `seats` representing a row of seats, where:

- `seats[i] = 1` means someone is sitting in seat `i`
- `seats[i] = 0` means seat `i` is empty

Indices are **0-based**. There is **at least one** empty seat and **at least one** occupied seat.

Alex chooses **one** empty seat. His **distance to the closest occupied seat** is how many seats away that nearest person is (along the row).

Return the **maximum** possible value of that distance (over all empty seats Alex could pick). You return the **distance**, not the index.

### Examples

```
Input: seats = [1,0,0,0,1,0,1]
Output: 2
```

If Alex sits at index `2`, the nearest person is 2 seats away. Any other empty seat has a closest person only 1 seat away. So the answer is `2`.

```
Input: seats = [1,0,0,0]
Output: 3
```

Sitting at the last seat (index `3`), the nearest person is 3 seats away. That is the best possible, so the answer is `3`.

```
Input: seats = [0,1]
Output: 1
```

### Constraints

- `2 <= seats.length <= 2 * 10^4`
- `seats[i]` is `0` or `1`
- At least one empty seat and at least one occupied seat

**Reference:** [LeetCode 849 — Maximize Distance to Closest Person](https://leetcode.com/problems/maximize-distance-to-closest-person/)
