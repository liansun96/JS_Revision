// (1)//Find the name in the mixArray and reutrn as array
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

console.log(findName.flat());

function findName2(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].hasOwnProperty("name")) {
      result.push(arr[i].name);
    }
  }
  return result;
}

console.log(findName2(mixArray));

const findName3 = mixArray.map((arr) => {
  let result = [];
  if (typeof arr.name === "string") {
    result.push(arr.name);
  }
  return result;
});

console.log(findName3.flat());

// (2)//Find the missing number in the array
const numbers = [1, 2, 3, 4, 6, 7, 8];

function findMissingNum(arr) {
  let n = arr.length + 1;
  let sum = (n * (n + 1)) / 2;
  let arrSum = arr.reduce((acc, val) => acc + val, 0);

  return sum - arrSum;
}

console.log(findMissingNum(numbers));

// (3)//Find the intersection of two Array
let a = [1, 2, 3, 4];
let b = [3, 4, 5, 6];

function interset(a, b) {
  return a.filter((value) => b.includes(value));
}

console.log(interset(a, b));

// (4)//Sum of Array element (tradational for loop)
function sumArray(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

const nums = [1, 2, 3, 4, 5];
console.log(sumArray(nums));

// (5)//Finding the Maximum Value
//Question: Create a function that returns the maximum value from an array.
function maxArray(arr) {
  if (arr.length === 0) return null;
  let max = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

const values = [3, 7, 2, 9, 1, 5];
console.log(maxArray(values));

// (6)//Reversing an Array
//Question: Create a function that reverses an array without using the built-in reverse() method.
function reverseArray(arr) {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

const original = [1, 2, 3, 4, 5, 6, 7];
console.log(reverseArray(original)); // Output: [5, 4, 3, 2, 1]

// (7)//Finding Average of Array Elements
function arrayAverage(arr) {
  let average = 0;
  let sum = arr.reduce((acc, val) => acc + val, 0);
  average = sum / arr.length;
  return average;
}

const someArray = [10, 20, 30, 40, 50];
console.log(arrayAverage(someArray));

// (8)//Checking if array is sorted
function isArraySorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}

const sortedArray = [1, 2, 3, 4, 5];
const unsortedArray = [7, 2, 9, 1, 5];
console.log(isArraySorted(sortedArray)); // Output: true
console.log(isArraySorted(unsortedArray)); // Output: false

// (9)//Find second largest number ih Array
function findSecondLargest(arr) {
  const sortedArr = arr.slice().sort((a, b) => b - a);
  // console.log(sortedArr[1]);
  return sortedArr[1];
}
const randomNumbers = [10, 5, 8, 20, 15];
console.log(findSecondLargest(randomNumbers));

// (10)//Looping Nested Array
let nestedArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function LoopNestedArr(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      // console.log(arr[i][j]);
      result.push(arr[i][j]);
    }
  }
  return result;
}

console.log(LoopNestedArr(nestedArr));

// (11)//Counting Occurrences in an Array
//How would you count the occurrences of elements in an array?
let countingArr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
let frequencyCounter = countingArr.reduce((acc, val) => {
  acc[val] = (acc[val] || 0) + 1;
  console.log(acc[val], acc);
  return acc;
}, {});

console.log(frequencyCounter);
