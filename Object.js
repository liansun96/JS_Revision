//Object loop
const stoner = {
  name: "Lian",
  age: 27,
  job: "devo",
  "joint per day": 1,
  fullName: {
    first: "Lian",
    last: "Sun",
  },
};

const {
  fullName: { first, last },
} = stoner;

console.log(first, last);

// for(key in stoner){
//     console.log(stoner[key]);
// }

function findText(obj) {
  let stringArray = [];
  for (key in obj) {
    if (typeof obj[key] === "string") {
      stringArray.push(obj[key]);
    }
  }
  return stringArray;
}
// console.log(findText(stoner));

//Multiply by two function if the value of obj in nums is number
let nums = {
  a: 100,
  b: 200,
  title: "My nums",
};

function multiplyByTwo(obj) {
  for (key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}

// multiplyByTwo(nums)
// console.log(nums);

//Object referencing
const value = { number: 10 };

const multiply = (x = { ...value }) => {
  return (x.number *= 2);
};

// console.log(multiply())
// console.log(multiply())
// console.log(multiply())
// console.log(multiply(value))
// console.log(multiply(value))
// console.log(multiply(value))

//Clone object
const stonerObj = {
  name: "Lian",
  age: 27,
  job: "devo",
  "joint per day": 1,
};

//shallow copy
b = stonerObj

//deep copy
// const cloneStoneObj = Object.assign({}, stonerObj);
// const cloneStoneObj = JSON.parse(JSON.stringify(stonerObj));
const cloneStoneObj = {...stonerObj}


stonerObj.name = "lian sun";
console.log(stonerObj);
console.log(cloneStoneObj);
console.log(b);


