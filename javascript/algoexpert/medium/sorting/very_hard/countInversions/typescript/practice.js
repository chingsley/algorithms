{
    {
        // O(nlog(n)) time | o(n) space
        function countInversions(array) {
            const inversion = { count: 0 };
            mergeSort(array, inversion);
            return inversion.count;
        }
        ;
        function mergeSort(array, inversion) {
            if (array.length <= 1)
                return array;
            const [left, right] = split(array);
            const sortedLeft = mergeSort(left, inversion);
            const sortedRight = mergeSort(right, inversion);
            return merge(sortedLeft, sortedRight, inversion);
        }
        function merge(left, right, inversion) {
            const merged = [];
            let [i, j] = [0, 0];
            while (i < left.length && j < right.length) {
                if (left[i] <= right[j]) {
                    merged.push(left[i]);
                    i += 1;
                }
                else {
                    inversion.count += left.length - i; // instead of left.slice(i).length
                    merged.push(right[j]);
                    j += 1;
                }
            }
            merged.push(...left.slice(i));
            merged.push(...right.slice(j));
            return merged;
        }
        function split(array) {
            const midIdx = Math.floor(array.length / 2);
            return [array.slice(0, midIdx), array.slice(midIdx)];
        }
    }
    {
        class Inversion {
            constructor() {
                this.count = 0;
            }
        }
        // O(nlog(n)) time | O(nlog(n)) space
        function countInversions(array) {
            const inversion = new Inversion();
            mergeSort(array, inversion);
            return inversion.count;
        }
        function mergeSort(array, inversion) {
            if (array.length <= 1)
                return array;
            const [left, right] = split(array);
            const sortedLeft = mergeSort(left, inversion);
            const sortedRight = mergeSort(right, inversion);
            return merge(sortedLeft, sortedRight, inversion);
        }
        function merge(left, right, inversion) {
            let [i, j] = [0, 0];
            const merged = [];
            while (i < left.length && j < right.length) {
                if (left[i] <= right[j]) {
                    merged.push(left[i]);
                    i += 1;
                }
                else {
                    inversion.count += left.length - i;
                    merged.push(right[j]);
                    j += 1;
                }
            }
            merged.push(...left.slice(i));
            merged.push(...right.slice(j));
            return merged;
        }
        function split(array) {
            const midIdx = Math.floor(array.length / 2);
            return [array.slice(0, midIdx), array.slice(midIdx)];
        }
        // [1, 2, 3, 4, 5]
        //  0  1  2  3  4
    }
    {
        // O(nlog(n)) time | O(nlog(n)) space
        function countInversions(array) {
            const inversion = { count: 0 };
            mergeSort(array, inversion);
            return inversion.count;
        }
        function mergeSort(array, inversion) {
            if (array.length <= 1)
                return array;
            const [left, right] = split(array);
            const sortedLeft = mergeSort(left, inversion);
            const sortedRight = mergeSort(right, inversion);
            return merge(sortedLeft, sortedRight, inversion);
        }
        function split(array) {
            const midIdx = Math.floor(array.length / 2);
            return [array.slice(0, midIdx), array.slice(midIdx)];
        }
        function merge(sortedLeft, sortedRight, inversion) {
            const merged = [];
            let [i, j] = [0, 0];
            while (i < sortedLeft.length && j < sortedRight.length) {
                if (sortedLeft[i] <= sortedRight[j]) {
                    merged.push(sortedLeft[i]);
                    i += 1;
                }
                else {
                    inversion.count += sortedLeft.length - i;
                    merged.push(sortedRight[j]);
                    j += 1;
                }
            }
            merged.push(...sortedLeft.slice(i));
            merged.push(...sortedRight.slice(j));
            return merged;
        }
    }
    {
        class Inversion {
            constructor() {
                this.count = 0;
            }
        }
        // O(nlog(n)) time | O(nlog(n)) space
        function countInversions(array) {
            const inversion = new Inversion();
            mergeSort(array, inversion);
            return inversion.count;
        }
        function mergeSort(array, inversion) {
            if (array.length <= 1)
                return array;
            const midIdx = Math.floor(array.length / 2);
            const [left, right] = [array.slice(0, midIdx), array.slice(midIdx)];
            const sortedLeft = mergeSort(left, inversion);
            const sortedRight = mergeSort(right, inversion);
            return merge(sortedLeft, sortedRight, inversion);
        }
        function merge(sortedLeft, sortedRight, inversion) {
            const merged = [];
            let [i, j] = [0, 0];
            while (i < sortedLeft.length && j < sortedRight.length) {
                if (sortedLeft[i] <= sortedRight[j]) {
                    merged.push(sortedLeft[i]);
                    i += 1;
                }
                else {
                    inversion.count += sortedLeft.length - i;
                    merged.push(sortedRight[j]);
                    j += 1;
                }
            }
            merged.push(...sortedLeft.slice(i));
            merged.push(...sortedRight.slice(j));
            return merged;
        }
    }
    {
        ;
        // O(nlog(n)) time | O(nlog(n)) space
        function countInversions(array) {
            const inversion = { count: 0 };
            mergeSort(array, inversion);
            return inversion.count;
        }
        // O(nlog(n)) time | O(nlog(n)) space
        function mergeSort(array, inversion) {
            if (array.length <= 1)
                return array;
            const [left, right] = split(array);
            const sortedLeft = mergeSort(left, inversion);
            const sortedRight = mergeSort(right, inversion);
            return merge(sortedLeft, sortedRight, inversion);
        }
        function split(array) {
            const mid = Math.floor(array.length / 2);
            return [array.slice(0, mid), array.slice(mid)];
        }
        function merge(sortedLeft, sortedRight, inversion) {
            const merged = [];
            let [i, j] = [0, 0];
            while (i < sortedLeft.length && j < sortedRight.length) {
                if (sortedLeft[i] <= sortedRight[j]) {
                    merged.push(sortedLeft[i]);
                    i += 1;
                }
                else {
                    inversion.count += sortedLeft.length - i;
                    merged.push(sortedRight[j]);
                    j += 1;
                }
            }
            merged.push(...sortedLeft.slice(i));
            merged.push(...sortedRight.slice(j));
            return merged;
        }
        // [4, 5, 6], [1, 2, 3]
    }
    {
        // O(nlog(n)) time | O(nlog(n)) space
        function countInversions(array) {
            const inversions = { count: 0 };
            mergeSort(array, inversions);
            return inversions.count;
        }
        function mergeSort(array, inversions) {
            if (array.length <= 1)
                return array;
            const midIdx = Math.floor(array.length / 2);
            const [left, right] = [array.slice(0, midIdx), array.slice(midIdx)];
            const sortedLeft = mergeSort(left, inversions);
            const sortedRight = mergeSort(right, inversions);
            return merge(sortedLeft, sortedRight, inversions);
        }
        function merge(sortedLeft, sortedRight, inversions) {
            const merged = [];
            let [leftIdx, rightIdx] = [0, 0];
            while (leftIdx < sortedLeft.length && rightIdx < sortedRight.length) {
                if (sortedLeft[leftIdx] <= sortedRight[rightIdx]) {
                    merged.push(sortedLeft[leftIdx]);
                    leftIdx += 1;
                }
                else {
                    inversions.count += sortedLeft.slice(leftIdx).length;
                    merged.push(sortedRight[rightIdx]);
                    rightIdx += 1;
                }
            }
            merged.push(...sortedLeft.slice(leftIdx));
            merged.push(...sortedRight.slice(rightIdx));
            return merged;
        }
        // [4, 5, 10], [1, 7, 8]
    }
}
export const __ = '__';
