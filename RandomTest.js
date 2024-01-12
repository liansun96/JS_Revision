const colors = ["red", "green", "blue"];

// Using for...of loop
for (const color of colors) {
  console.log(color);
}

// Using for...in loop
for (const x in colors) {
  console.log(colors[x]);
}

const person = {
  name: "Emily",
  age: 25,
  fly: function () {
    console.log("Flying...");
  },
};

const descriptors = Object.getOwnPropertyDescriptors(person);
console.log(descriptors);

// Using Object.entries()
for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}

const personOne = {};

Object.setPrototypeOf(personOne, person);
person.fly()
personOne.fly()
