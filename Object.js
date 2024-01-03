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

// console.log(Object.keys(stoner))
// console.log(Object.values(stoner))
console.log(Object.entries(stoner))

const {
  fullName: { first, last },
} = stoner;

// console.log(first, last);

//(for...in) loop
// for(key in stoner){
//     console.log(stoner[key]);
// }


//(for...in) loop
for(var key in stoner){
  if(stoner.hasOwnProperty(key)){
    console.log( key , stoner[key]);
  }
}

//Using Objefct.keys() and forEach loop
Object.keys(stoner).forEach((key)=> console.log(key, stoner[key]))


//Find string in object
function findText(obj) {
  let result = [];
  for (key in obj) {
    if (typeof obj[key] === "string") {
      result.push(obj[key]);
    }
  }
  return result;
}
console.log(findText(stoner));

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
  hobby: {
    instrument: "guitar",
    interest: ["DIY", "redesign", "custom_design"],
  },
  "joint per day": 1,
};

// const {hobby} = stonerObj;
// const {instrument,interest} = hobby

const {
  hobby: { instrument, interest },
} = stonerObj;

console.log(instrument);
console.log(interest);

console.log(Object.keys(stonerObj));
console.log(Object.values(stonerObj));

const profession = "job";

const $kill_$et = "instrument";

stonerObj.height = 180;

const Max_Height = "height";

//dot notation
// console.log(stonerObj.job);
// console.log(stonerObj.hobby.interest);

//bracket notation
// console.log(stonerObj['joint per day']);
// console.log(stonerObj[profession]);
// console.log(stonerObj.hobby[$kill_$et]);
// console.log(stonerObj[Max_Height]);

//shallow copy
b = stonerObj;

//deep copy
// const cloneStoneObj = Object.assign({}, stonerObj);
// const cloneStoneObj = JSON.parse(JSON.stringify(stonerObj));
const cloneStoneObj = { ...stonerObj };

stonerObj.name = "lian sun";
// console.log(stonerObj);
// console.log(cloneStoneObj);
// console.log(b);
