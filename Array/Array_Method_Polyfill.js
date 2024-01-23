// (1)//Flatten Array Polyfill_flat the array without using the flat() method;
const nestedArray = [1, 2, [3, 4, [5, 6]]];

Array.prototype.flatten = function () {
  let result = [];
  for (const value of this) {
    if (Array.isArray(value)) {
      const flattened = value.flatten();
      result.push(...flattened);
    } else {
      result.push(value);
    }
  }
  return result;
};

console.log(nestedArray.flatten());
// console.log(nestedArray.flat(2));
//The flat() method with Infinity as an argument will recursively flatten sub-arrays.
console.log(nestedArray.flat(Infinity));

let arr = [1, 2, 3, 4, 5];

// (2)//Array method map polyfill

Array.prototype.myMap = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i, this));
  }
  return result;
};

let newArr = arr.myMap((x) => x + 1);
console.log(arr);
console.log(newArr);

// (3)//Array method filter polyfill

Array.prototype.myFilter = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) result.push(this[i]);
  }
  return result;
};

let lessThanFive = arr.myFilter((x) => x <= 3);
console.log(lessThanFive);

// (4)//Array method reduce polyfill

Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

let sumofArr = arr.myReduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(sumofArr);
