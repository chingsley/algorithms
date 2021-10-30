function isMonotonic(arr) {
  let decreasing;
  let increasing;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] > arr[i]) {
      increasing = true;
    }
    if (arr[i + 1] < arr[i]) {
      decreasing = true;
    }

    if (decreasing === true && increasing === true) {
      return false;
    }
  }
  return true;
}

// Do not edit the line below.
exports.isMonotonic = isMonotonic;
