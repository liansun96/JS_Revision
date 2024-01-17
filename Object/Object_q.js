let myObject = { name: "John", age: 25, city: "New York", job: "devo" };

//Way to Iterating Over Object
for (key in myObject) {
  console.log(key + ":" + myObject[key]);
}

for (const [key, value] of Object.entries(myObject)) {
  console.log(key + " : " + value);
}

Object.entries(myObject).forEach(([key, value]) => {
  console.log(key + " : " + value);
});

Object.keys(myObject).forEach((key) => {
  console.log(key + ": " + myObject[key]);
});

Object.values(myObject).forEach((value) => {
  console.log(value);
});

var person = {
  name: "Alice",
  age: 30,
  city: "Wonderland",
};

//deep clone object

const cloneObj = JSON.parse(JSON.stringify(person));
console.log(person);
console.log((person.name = "lian"));
console.log(person);
console.log(cloneObj);

// var desiredProperty = 'job';

// for (var key in myObject) {
//   if (key === desiredProperty) {
//     console.log('The property exists:', key);
//     // You can perform additional actions here
//   }
// }

// Alternatively, you can use the 'hasOwnProperty' method:
// if (myObject.hasOwnProperty(desiredProperty)) {
//   console.log('The property exists using hasOwnProperty:', desiredProperty);
// }

function findName(obj) {
  let result = "";
  if (obj.hasOwnProperty("name")) {
    result += obj.name;
  }
  return result;
}
// console.log(findName(myObject))

const population = {
  male: 4,
  female: 93,
  others: 10,
};

const genders = Object.keys(population);
genders.forEach(
  (gender) => console.log(gender),
  console.log(population["male"])
);
// Output: "male", "female", "others"

//method
const calculator = {
  add: function (a, b) {
    return a + b;
  },
  multiply: function (a, b) {
    return a * b;
  },
};

console.log(calculator.add(2, 3));
console.log(calculator.multiply(2, 3));

//What is the purpose of the Object.create() method in JavaScript? Provide an example.
//Ans : Object.create() creates a new object with the specified prototype object. It allows for explicit control over the prototype chain.
const developer = {
  createApp: function () {
    console.log("Some awsome app");
  },
};

developer.createApp();

const webDevo = Object.create(developer);

webDevo.createApp();

//What is an object constructor?
function Book(title, author) {
  this.title = title;
  this.author = author;
}

const myBook = new Book("Giant on my shoulder", "Kyar Pauk");
const mine = new Book("Developer", "Lian Sun");
console.log(myBook, mine);

//Object currying in the context of method
const calculation = {
  multiply: function (x) {
    return function (y) {
      return x * y;
    };
  },
};
const multiplyByTwo = calculation.multiply(2);
const multiplyByFive = calculation.multiply(5);
console.log(multiplyByTwo(5));
console.log(multiplyByFive(5));

//Implement a function to calculate the depth of a nested object
function calculateDepth(obj) {
  if (typeof obj !== "object" || obj === null) {
    return 0;
  }

  const maxDepth = 0;

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === "object") {
        const currentDepth = 1 + calculateDepth(obj[key]);
        maxDepth = Math.max(maxDepth, currentDepth);
      }
    }
  }

  return maxDepth;
}

const nestedObject = { a: { b: { c: { d: 1 } } }, e: 2 };
console.log(calculateDepth(nestedObject));
