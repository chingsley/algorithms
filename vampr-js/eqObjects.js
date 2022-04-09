// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!equalArrs(object1[key], object2[key])) {
        return false;
      }
    }
    if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
      return eqObjects(object1[key], object2[key]);
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

function equalArrs(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false



const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false


const ef = { e: "1", f: { e1: 2, e2: 3 }, };
const fe = { f: { e1: 2, e2: 3 }, e: "1" };
console.log(eqObjects(ef, fe)); // => true

const ef2 = { e: "1", f: { e1: 2, e2: 3, e3: 4 }, };
console.log(eqObjects(ef, ef2)); // => false


const ef3 = { e: "1", f: { e1: 2, e2: 7 }, };
console.log(eqObjects(ef, ef3)); // => false