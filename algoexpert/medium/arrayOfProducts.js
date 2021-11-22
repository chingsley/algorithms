{
  /**
   * Time: O(n)
   * Space: O(n)
   * @param {Array} array array of numbers
   * @returns array
   */
  function arrayOfProducts(array) {
    const result = [];

    let product = 1;
    const leftProducts = [1];
    for (let i = 1; i < array.length; i++) {
      product *= array[i - 1];
      leftProducts.push(product);
    }

    product = 1;
    const rightProducts = new Array(array.length);
    rightProducts[array.length - 1] = 1;
    for (let j = array.length - 2; j > -1; j--) {
      product *= array[j + 1];
      rightProducts[j] = product;
    }

    console.log({ leftProducts, rightProducts });

    for (let k = 0; k < leftProducts.length; k++) {
      result.push(leftProducts[k] * rightProducts[k]);
    }
    return result;
  }

  const ts1 = {
    array: [5, 1, 4, 2],
  };
  // console.log(arrayOfProducts(ts1.array));
}

// SOLUTION 2
{
  function arrayOfProducts(array) {
    const result = new Array(array.length);

    let product = 1;
    const leftProducts = [1];
    for (let i = 1; i < array.length; i++) {
      product *= array[i - 1];
      leftProducts.push(product);
    }

    product = 1;
    result[array.length - 1] = 1 * leftProducts[array.length - 1];
    for (let j = array.length - 2; j > -1; j--) {
      product *= array[j + 1];
      result[j] = product * leftProducts[j];
    }

    return result;
  }

  const ts1 = {
    array: [5, 1, 4, 2],
  };
  console.log(arrayOfProducts(ts1.array));
}

// SOLUTION 3
{
  function arrayOfProducts(array) {
    const result = [];

    const leftProducts = [1];
    for (let i = 1; i < array.length; i++) {
      leftProducts[i] = leftProducts[i - 1] * array[i - 1];
    }

    const rightProducts = new Array(array.length);
    rightProducts[array.length - 1] = 1;
    for (let j = array.length - 2; j >= 0; j--) {
      rightProducts[j] = rightProducts[j + 1] * array[j + 1];
    }

    for (let k = 0; k < leftProducts.length; k++) {
      result.push(leftProducts[k] * rightProducts[k]);
    }
    return result;
  }

  // Do not edit the line below.
  exports.arrayOfProducts = arrayOfProducts;

}

// Do not edit the line below.
// exports.arrayOfProducts = arrayOfProducts;
