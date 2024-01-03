const nums = [1, 2, 3, 4, 5];

nums.forEach((x,i,arr)=> console.log(x,i,arr))

//Polyfill for map()
Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const multiplyByFive = () =>
  nums.myMap((num, i, arr) => {
    return num * 5;
  });

// console.log(multiplyByFive());

//Pollyfill for filter()
Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }
  return temp;  
};

const lessThanFive = () =>
  nums.myFilter((num) => {
    return num < 5;
  });
// console.log(lessThanFive());

//Pollyfill for reduce()
Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }

  return accumulator;
};

const sumOfnums = () =>
  nums.myReduce((prev, curr, i, arr) => {
    return prev + curr;
  }, 0);
// console.log(sumOfnums());

let stoners = [
  { name: "Shoke", level: 3, joints: 3 },
  { name: "Moe Gyi", level: 4, joints: 2 },
  { name: "Michael", level: 5, joints: 5 },
  { name: "Myo Gyi", level: 6, joints: 4 },
];

const nameOfStoner = stoners.map((stoner) => {
  return stoner.name;
});

const sunOfJoints = stoners.reduce((prev, curr, i, arr) => {
  return prev + curr.joints;
}, 0);

const moreThanTwoJoints = stoners.filter((stoner) => {
  if (stoner.joints > 2) return stoner.name;
});

const result = stoners
  .map((stoner) => {
    if (stoner.joints < 4) {
      stoner.joints += 2;
    }
    return stoner;
  })
  .filter((stoner) => stoner.level > 4)
  .reduce((prev, currv, i) => prev + currv.joints, 0);

console.log(nameOfStoner);
console.log(sunOfJoints);
console.log(moreThanTwoJoints);
console.log(result);

//result => ['Lebron','Jordan','Curry']
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
  if (typeof arr.name === "string") {
    result.push(arr.name);
    // console.log(arr.name)
  }
  return result;
});
// console.log(findName.flat());

const findName2 = mixArray.map((arr, i) => {
  let result = [];
  if (arr.hasOwnProperty("name")) {
    result.push(arr.name);
    // console.log(arr.name);
  }
  return result;
});

// console.log(findName2.flat());

function findName3(arr) {
  let result = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i].hasOwnProperty("name")) {
      result.push(arr[i].name);
    }
  }
  return result;
}
// findName3(mixArray)


//getLargestNumberIndex
const randomArr = [5, 3, 7, 1, 9, 4];

function getLargestNumberIndex(arr) {
  const maxNumber = Math.max(...arr);
  const maxIndex = arr.indexOf(maxNumber);
  console.log(maxIndex);
}

getLargestNumberIndex(randomArr);
