// O(nlogn) time, O(1) space
export function tandemBicycle(redShirtSpeeds: number[], blueShirtSpeeds: number[], fastest: boolean) {
  // sort redShirtSpeeds in ascending order
  redShirtSpeeds.sort((a, b) => a - b);
  // if fastest === true, sort blueShirtSpeds in reverse order of redShirtSpeds, else sort blueShirtSpeed in same order as redShirtSpeddd
  if (fastest) {
    blueShirtSpeeds.sort((a, b) => b - a);
  } else {
    blueShirtSpeeds.sort((a, b) => a - b);
  }
  console.log({
    redShirtSpeeds,
    blueShirtSpeeds
  });
  let totalSpeed = 0;
  for (let i = 0; i < redShirtSpeeds.length; i++) {
    totalSpeed += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
  }
  return totalSpeed;
}


const data = {
  "redShirtSpeeds": [5, 5, 3, 9, 2],
  "blueShirtSpeeds": [3, 6, 7, 2, 1],
  "fastest": false
};

console.log(
  tandemBicycle(
    data.redShirtSpeeds,
    data.blueShirtSpeeds,
    data.fastest
  )
);