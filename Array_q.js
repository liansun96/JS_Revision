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
console.log([[1, 2], [3, [4, 5]], 6].flatten());
