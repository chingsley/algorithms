{
  {
    // Avg. Case: O(nlog(n)) time | O(n) space
    // Worst Case: O(n^2) time | O(n) space
    function rightSmallerThan(array: number[]) {
      let result = new Array(array.length).fill(0);
      const root = new CustomBST(array[array.length - 1]);

      for (let i = array.length - 2; i >= 0; i--) {
        let currNode = root;
        let count = 0;
        while (true) {
          if (array[i] > currNode.value) {
            count += currNode.leftChildren + 1;
            if (currNode.right === null) {
              currNode.right = new CustomBST(array[i]);
              result[i] = count;
              break;
            } else {
              currNode = currNode.right;
            }
          } else {
            currNode.leftChildren += 1;
            if (currNode.left === null) {
              currNode.left = new CustomBST(array[i]);
              result[i] = count;
              break;
            } else {
              currNode = currNode.left;
            }
          }
        }
      }

      return result;
    }


    class CustomBST {
      value: number;
      left: CustomBST | null;
      right: CustomBST | null;
      leftChildren: number;
      constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.leftChildren = 0;
      }
    }
  }
  {
    function rightSmallerThan(array: number[]) {
      const result = new Array(array.length).fill(0);
      const root = new CustomBST(array[array.length - 1]);
      for (let i = array.length - 2; i >= 0; i--) {
        let currNode = root;
        let count = 0;
        while (true) {
          if (array[i] > currNode.value) {
            count += currNode.leftChildren + 1;
            if (currNode.right === null) {
              currNode.right = new CustomBST(array[i]);
              result[i] = count;
              break;
            } else {
              currNode = currNode.right;
            }
          } else {
            currNode.leftChildren += 1;
            if (currNode.left === null) {
              currNode.left = new CustomBST(array[i]);
              result[i] = count;
              break;
            } else {
              currNode = currNode.left;
            }
          }
        }
      }

      return result;
    }

    class CustomBST {
      value: number;
      left: CustomBST | null;
      right: CustomBST | null;
      leftChildren: number;
      constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.leftChildren = 0;
      }
    }
  }
  {
    // avg. case: O(nlog(n)) time | O(n) space
    // worst case: O(n^2) time | (n) space
    function rightSmallerThan(array: number[]) {
      const result = new Array(array.length).fill(0);
      const root = new CustomBST(array[array.length - 1]);

      for (let i = array.length - 2; i >= 0; i--) {
        let currNode: CustomBST | null = root;
        let count = 0;
        while (true) {
          if (array[i] > currNode.value) {
            count += currNode.leftChildren + 1;
            if (currNode.right === null) {
              currNode.right = new CustomBST(array[i]);
              result[i] = count;
              break;
            } else {
              currNode = currNode.right;
            }
          } else {
            currNode.leftChildren += 1;
            if (currNode.left === null) {
              currNode.left = new CustomBST(array[i]);
              result[i] = count;
              break;
            } else {
              currNode = currNode.left;
            }
          }
        }
      }

      return result;
    }

    class CustomBST {
      value: number;
      left: CustomBST | null;
      right: CustomBST | null;
      leftChildren: number;
      constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.leftChildren = 0;
      }
    }
  }
  {

    class CustomBST {
      value: number;
      left: CustomBST | null;
      right: CustomBST | null;
      leftChildren: number;
      constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.leftChildren = 0;
      }
    }

    // best/avg case: O(nlog(n)) time | O(n) space
    // worst case: O(n^2) time | O(n) space
    function rightSmallerThan(array: number[]) {
      const result = new Array(array.length).fill(0);
      const root = new CustomBST(array[array.length - 1]);
      for (let i = array.length - 2; i >= 0; i--) {
        let currNode = root;
        let count = 0;
        while (true) {
          if (array[i] > currNode.value) {
            count += currNode.leftChildren + 1;
            if (currNode.right === null) {
              currNode.right = new CustomBST(array[i]);
              result[i] = count;
              break;
            } else {
              currNode = currNode.right;
            }
          } else {
            currNode.leftChildren += 1;
            if (currNode.left === null) {
              currNode.left = new CustomBST(array[i]);
              result[i] = count;
              break;
            } else {
              currNode = currNode.left;
            }
          }
        }
      }
      return result;
    }
  }
  {
    // avg. case: O(nlog(n)) time | O(n) space
    // worst case: O(n^2) time | O(n) space
    function rightSmallerThan(array: number[]) {
      const result = new Array(array.length).fill(0);

      const root = new CustomBST(array[array.length - 1]);
      for (let i = array.length - 2; i >= 0; i--) {
        let currNode = root;
        let count = 0;
        while (true) {
          if (array[i] > currNode.value) {
            count += currNode.leftChildren + 1;
            if (currNode.right === null) {
              currNode.right = new CustomBST(array[i]);
              result[i] = count;
              break;
            }
            currNode = currNode.right;
          } else {
            currNode.leftChildren += 1;
            if (currNode.left === null) {
              currNode.left = new CustomBST(array[i]);
              result[i] = count;
              break;
            }
            currNode = currNode.left;
          }
        }
      }

      return result;
    }


    class CustomBST {
      value: number;
      left: CustomBST | null;
      right: CustomBST | null;
      leftChildren: number;
      constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.leftChildren = 0;
      }
    }
  }
  {
    //Avg. case: O(nlog(n)) time | O(n) space
    //Worst case: O(n^2) time | O(n) space
    function rightSmallerThan(array: number[]) {
      const result = new Array(array.length).fill(0);
      const root = new CustomBST(array[array.length - 1]);
      for (let i = array.length - 2; i >= 0; i--) {
        let currNode = root;
        let count = 0;
        while (true) {
          if (array[i] > currNode.value) {
            count += currNode.leftChildren + 1;
            if (currNode.right === null) {
              currNode.right = new CustomBST(array[i]);
              result[i] = count;
              break;
            }
            currNode = currNode.right;
          } else {
            currNode.leftChildren += 1;
            if (currNode.left === null) {
              currNode.left = new CustomBST(array[i]);
              result[i] = count;
              break;
            }
            currNode = currNode.left;
          }
        }
      }
      return result;
    }

    class CustomBST {
      value: number;
      left: CustomBST | null;
      right: CustomBST | null;
      leftChildren: number;
      constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.leftChildren = 0;
      }
    }
  }
}

export const __ = '__';