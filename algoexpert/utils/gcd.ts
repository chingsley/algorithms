export default function getGCD(m: number, n: number): number {
  if (n === 0) return m;
  while ((m % n) !== 0) {
    console.log({ m, n }, m % n);
    const prevM = m;
    const prevN = n;

    m = prevN;
    n = prevM % prevN;
  }

  return n;
}

console.log(
  // getGCD(-5, -10),
  // getGCD(5, 10),
  // getGCD(6, 8),
  // getGCD(12, 68)
);