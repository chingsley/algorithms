// O(nlog(n)) time | O(n) space
export function sweetAndSavory(dishes: number[], target: number) {
  const sweet: number[] = [];
  const savory: number[] = [];
  for (let dish of dishes) {
    if (dish < 0) {
      sweet.push(dish);
    } else {
      savory.push(dish);
    }
  }
  sweet.sort((a, b) => b - a);
  savory.sort((a, b) => a - b);

  let bestDiff = Infinity;
  let [i, j] = [0, 0];
  let bestPair = [0, 0];
  while (i < sweet.length && j < savory.length) {
    const [sw, sv] = [sweet[i], savory[j]];
    if (sw + sv <= target) {
      const currentDiff = target - (sw + sv);
      if (currentDiff < bestDiff) {
        bestDiff = currentDiff;
        bestPair = [sw, sv];
      }
      j += 1;
    } else {
      i += 1;
    }
  }

  return bestPair;
}
