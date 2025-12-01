import { indent } from "../../../utils/index";
{
    {
        /*
        * O(n * 2^n) time
        * O(n * 2 ^ n) space
        */
        function powerset(array) {
            if (array.length === 0)
                return [[]];
            const [first, ...rest] = array;
            const result = [];
            for (const arr of powerset(rest)) {
                result.push(arr);
                result.push([first, ...arr]);
            }
            return result;
        }
        // console.log(
        //   powerset([1, 2, 3])
        // );
    }
    {
        // O(n * 2 ^ n) time | O(n * 2 ^ n) space
        function powerset(array) {
            if (array.length === 0)
                return [[]];
            const [first, ...rest] = array;
            const result = [];
            for (let set of powerset(rest)) {
                result.push(set);
                result.push([first, ...set]);
            }
            console.log(result);
            return result;
        }
        console.log(powerset([1, 2, 3]));
    }
    {
        // O(n * 2^n) time | O(n * 2^n) space
        function powerset(array) {
            if (array.length === 0)
                return [[]];
            const [first, ...rest] = array;
            const result = [];
            const powerSetOfRest = powerset(rest);
            for (let arr of powerSetOfRest) {
                result.push(arr);
                result.push([first, ...arr]);
            }
            // console.log({ first, result })
            return result;
        }
    }
    {
        // O(n * 2^n) time | O(n * 2^n) space
        function powerset(array, originalArrLength = null) {
            originalArrLength = originalArrLength || array.length;
            const indentSize = 3 * (-1 * array.length + originalArrLength);
            console.log(`${indent(indentSize)}powerset(${array})`);
            if (array.length === 0)
                return [[]];
            const [first, ...rest] = array;
            const powersetOfRest = powerset(rest, originalArrLength);
            const result = [];
            for (let set of powersetOfRest) { // max length of powerset is 2^n. So this for loop is the cause of the 2^n (worst case)
                result.push(set);
                result.push([first, ...set]);
            }
            return result;
        }
    }
    {
        // O(n * 2^n) time | O(n * 2^n) space (Worst Case)
        function powerset(array, idx = 0) {
            console.log(`${indent(3 * idx)}powerset(${array})`);
            if (idx === array.length)
                return [[]];
            const first = array[idx];
            const powersetOfRest = powerset(array, idx + 1);
            const result = [];
            for (let set of powersetOfRest) { // max length of powerset is 2^n. So this for loop is the cause of the 2^n (worst case)
                result.push(set);
                result.push([first, ...set]);
            }
            return result;
        }
        /*
         why O(n * 2^n) space?
         
         Answer:
         For [1, 2, 3], result = [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]
         the result is an array of the numbers array. number[][];
         the result has length of 8 = 2 ^ n (where n = length of input [1, 2, 3])
         The maximum inner array is [1, 2, 3], which has length of n
         Assuming each item in the result has length n. But the result has a length of 2^n.
         The overall space becomes n * 2^n
        */
    }
    {
        /*
        * O(2^n * n) time
        * O(2^n * n) space
        */
        function powerset(array) {
            if (array.length === 0)
                return [[]];
            const [first, ...rest] = array;
            const powersetOfRest = powerset(rest);
            const result = [];
            for (let set of powersetOfRest) {
                result.push(set);
                result.push([first, ...set]);
            }
            return result;
        }
    }
    {
        // O(n * 2^n) time | O(n * 2^n) space
        function powerset(array) {
            const result = [[]];
            psetAt(0, array, result);
            return result;
        }
        function psetAt(idx, array, result) {
            if (idx >= array.length)
                return;
            let resultLength = result.length;
            for (let i = 0; i < resultLength; i++) {
                result.push([...result[i], array[idx]]);
            }
            psetAt(idx + 1, array, result);
        }
    }
    {
        // O(n * 2^n) time | O(n * 2^n) space
        function powerset(array) {
            return powersetHelper([...array]);
        }
        function powersetHelper(array) {
            if (array.length === 0)
                return [[]];
            const last = array.pop();
            const powersetWithoutLast = powersetHelper(array);
            const powersetWithLast = [];
            for (let arr of powersetWithoutLast) {
                powersetWithLast.push(arr);
                powersetWithLast.push([...arr, last]);
            }
            return powersetWithLast;
        }
    }
}
export const __ = '__';
