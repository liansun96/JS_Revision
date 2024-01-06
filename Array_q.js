let mixArray = [
  {},
  { name: "Lebron" },
  { w: 1 },
  { x: 2 },
  { name: "Jordan" },
  {},
  { name: "Curry" },
];

const findName = mixArray.map((arr) => {
  let result = [];
  if (arr.hasOwnProperty("name")) {
    result.push(arr.name);
  }
  return result;
});

// console.log(findName.flat());

function findName2(arr) {
  let result = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i].hasOwnProperty("name")) {
      result.push(arr[i].name);
    }
  }
  return result;
}
// console.log(findName2(mixArray));

const findName3 = mixArray.map((arr) => {
  let result = [];
  if (typeof arr.name === "string") {
    result.push(arr.name);
  }
  return result;
});

// console.log(findName3.flat());

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let copyArr = [];

arr.forEach((x) => copyArr.push(x));
// console.log(copyArr);

for (x in arr) {
  // console.log(typeof x);
}

for (x of arr) {
  // console.log(typeof x);
}

//Flatten Array Polyfill
// Array.prototype.flatten = function () {
//   let result = [];
//   for (const value of this) {
//     if (Array.isArray(value)) {
//       console.log(value);
//       const flattened = value.flatten();
//       console.log(flattened);
//       result.push(...flattened);
//     } else {
//       result.push(value);
//     }
//   }
//   return result;
// };

//Array Prototype Flatten Polyfill
Array.prototype.flatten = function () {
  let result = [];
  for (const value of this) {
    if (Array.isArray(value)) {
      console.log(value);
      const flattened = value.flatten();
      result.push(...flattened);
    } else {
      result.push(value);
      console.log(value);
    }
  }
  return result;
};

// console.log([].flatten());
// console.log([1, 2, 3].flatten());
// console.log([[1, 2], 3, 4].flatten());
// console.log([[1, 2], [3, [4, 5]], 6].flatten());

const nestedArray = [1, 2, [3, 4, [5, 6]]];

//The flat() method with Infinity as an argument will recursively flatten sub-arrays.
console.log(nestedArray.flat(Infinity));

//Find the missing number in the array
const numbers = [1, 2, 3, 4, 6, 7, 8];

function findMissingNum(arr) {
  let n = arr.length + 1;
  let sum = (n * (n + 1)) / 2;
  let arrSum = arr.reduce((acc, val) => acc + val, 0);

  return sum - arrSum;
}
console.log(findMissingNum(numbers));


//Find the intersection of two Array
let a = [1, 2, 3, 4];
let b = [3, 4, 5, 6];

function interset(a,b){
  return a.filter(value => b.includes(value))
}

console.log(interset(a,b));


//Sum of Array element (tradational for loop)
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Example usage:
const nums = [1, 2, 3, 4, 5];
console.log(sumArray(nums));


// Finding the Maximum Value
//Question: Create a function that returns the maximum value from an array.
function maxArray(arr) {
  if (arr.length === 0) return null; // Return null for an empty array
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Example usage:
const values = [3, 7, 2, 9, 1, 5];
console.log(maxArray(values)); 