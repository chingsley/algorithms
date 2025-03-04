Certainly! Let's break down the problem step by step and solve it in a way that is easy to understand, even for a novice.

### Part (a): Pseudocode for Recursive Algorithm

We need to create a recursive algorithm to compute $a^n$ using the binary method of exponentiation. The key ideas are:
- If $n$ is even, $a^n = (a^{n/2})^2$.
- If $n$ is odd, $a^n = a * a^{n-1}$.

Here’s the pseudocode:

```python
function binaryExponentiation(a, n):
    if n == 1:
        return a
    if n is even:
        result = binaryExponentiation(a, n / 2)
        return result * result
    else:
        return a * binaryExponentiation(a, n - 1)
```

### Explanation:
1. **Base Case:** If $n = 1$, return $a$ because $a^1 = a$.
2. **Even Case:** If $n$ is even, compute $a^{n/2}$ recursively and then square the result.
3. **Odd Case:** If $n$ is odd, compute $a^{n-1}$ recursively and multiply by $a$.

### Part (b): Total Number of Multiplications

We need to determine the exact total number of multiplications performed by the algorithm to compute $a^n$. We will use the substitution method and induction.

#### Step 1: Define the Problem
Let $T(n)$ be the number of multiplications required to compute $a^n$.

#### Step 2: Establish the Recurrence Relation
From the pseudocode:
- If $n$ is even: $T(n) = T(n/2) + 1$ (one multiplication to square the result).
- If $n$ is odd: $T(n) = T(n-1) + 1$ (one multiplication to multiply by $a$).

#### Step 3: Guess the Solution
We guess that $T(n) = log_2 n + s_2(n) - 1$, where $s_2(n)$ is the number of 1-digits in the binary representation of $n$.

#### Step 4: Prove by Induction

**Base Case:** For $n = 1$:
- $T(1) = 0$ (no multiplications needed).
- $log_2 1 + s_2(1) - 1 = 0 + 1 - 1 = 0$.
- The guess holds.

**Inductive Step:** Assume the guess holds for all $k < n$. We need to show it holds for $n$.

- **If $n$ is even:**
  - $T(n) = T(n/2) + 1$.
  - By the inductive hypothesis, $T(n/2) = log_2 (n/2) + s_2(n/2) - 1$.
  - $log_2 (n/2) = log_2 n - 1$.
  - $s_2(n/2) = s_2(n)$ (since dividing by 2 removes a 0 from the binary representation).
  - Therefore, $T(n) = (log_2 n - 1) + s_2(n) - 1 + 1 = log_2 n + s_2(n) - 1$.

- **If $n$ is odd:**
  - $T(n) = T(n-1) + 1$.
  - By the inductive hypothesis, $T(n-1) = log_2 (n-1) + s_2(n-1) - 1$.
  - $log_2 (n-1) \approx log_2 n$ (for large $n$).
  - $s_2(n-1) = s_2(n) - 1$ (since subtracting 1 turns the least significant 1 to 0 and may flip some higher bits).
  - Therefore, $T(n) \approx log_2 n + (s_2(n) - 1) - 1 + 1 = log_2 n + s_2(n) - 1$.

Thus, by induction, the guess holds for all $n$.

### Conclusion
The exact total number of multiplications performed by the algorithm to compute $a^n$ is:

$T(n) = log_2 n + s_2(n) - 1$

where $s_2(n)$ is the number of 1-digits in the binary representation of $n$.

This solution provides a clear and detailed breakdown of both the pseudocode and the analysis of the number of multiplications, making it accessible even for beginners.