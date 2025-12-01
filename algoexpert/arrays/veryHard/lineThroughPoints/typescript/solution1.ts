// O(n^2) time | O(n) space
export function lineThroughPoints(points: number[][]) {
  let maxValue = 1; // b/c the question says the input array "will contain at least one point", thereofore the when give poists = [[0, 0]], maxValue should be 1
  for (let i = 0; i < points.length; i++) {
    const counts: { [key: string]: number; } = {};
    for (let j = i + 1; j < points.length; j++) {
      const [x1, y1] = points[i];
      const [x2, y2] = points[j];

      const slope = reducedRational((y2 - y1), (x2 - x1));
      if (!(slope in counts)) counts[slope] = 1;
      counts[slope] += 1;
    }

    maxValue = Math.max(maxValue, Math.max(...Object.values(counts)));
  }
  return maxValue;
}

function reducedRational(num: number, den: number): string {
  const gcd = getGCD(num, den);
  num = Math.floor(num / gcd);
  den = Math.floor(den / gcd);

  if (den < 0) {
    den *= - 1;
    num *= -1;
  }
  return num + ':' + den;
}

// get the greatest common divisor
function getGCD(m: number, n: number): number {
  if (n === 0) return m;

  while (m % n !== 0) {
    const prevM = m;
    const prevN = n;

    m = prevN;
    n = prevM % prevN;
  }

  return n;
}
