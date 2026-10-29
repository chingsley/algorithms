You are given an array seats representing a row of seats, where:

- 0 represents an empty seat.
- 1 represents an occupied seat.
  The first and last seats are always occupied.

Find the index of the empty seat that maximizes the distance to the closest occupied seat.

If multiple seats satisfy this condition, return the smallest index. If no empty seat exists, return -1.

### Examples

```
Input:
seats = [1, 0, 0, 0, 1, 0, 1]
Output:
2

Input
seats = [1, 0, 0, 1, 0, 0, 0, 1]
Output:
 5
```

Similar Leetcode question (not exactly the same, but similar)
https://leetcode.com/problems/maximize-distance-to-closest-person/?utm_source=chatgpt.com
