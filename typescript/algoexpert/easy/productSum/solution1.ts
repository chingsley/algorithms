type SpecialArray = Array<number | SpecialArray>;

// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
// O(N) time (N is the total no. of elements in all arrays including nested arrays)
// O(D) space (D is the depth of the most nested array)
export function productSum(array: SpecialArray, weight: number = 1) {
  let sum = 0;
  for(let n of array) {
    // console.log({ n, weight })
    if(Array.isArray(n)){
			sum += weight * productSum(n, weight +1)
    } else {
        sum += weight * n;
    }
  }
  return sum;
}

console.log(
  productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]])
);