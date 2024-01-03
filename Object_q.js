let myObject = { name: "John", age: 25, city: "New York", job: "devo" };

for (key in myObject) {
  // console.log(key + ":" + myObject[key]);
}

// Object.keys(myObject).forEach((key) => {
//   console.log(key + ": " + myObject[key]);
// });

// Object.entries(myObject).forEach(([key, value]) => {
//   console.log(key + ": " + value);
// });

// Object.values(myObject).forEach((value) => {
//   console.log(value);
// });

var person = {
  name: 'Alice',
  age: 30,
  city: 'Wonderland'
};

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

function findName(obj){
  let result = '';
  if(obj.hasOwnProperty("name")){
    result += obj.name
  }
  return result
}
// console.log(findName(myObject))

const population = {
  male: 4,
  female: 93,
  others: 10
};

const genders = Object.keys(population);
genders.forEach((gender) => console.log(gender) , console.log(population['male']));
// Output: "male", "female", "others"


//method
const calculator = {
  add : function(a,b){
    return a+b
  },
  multiply : function (a,b){
    return a*b
  }
}

console.log(calculator.add(2,3))
console.log(calculator.multiply(2,3))

//What is the purpose of the Object.create() method in JavaScript? Provide an example.
//Ans : Object.create() creates a new object with the specified prototype object. It allows for explicit control over the prototype chain.

const developer = {
  createApp : function(){
    console.log('Some awsome app');
  }
}

developer.createApp();

const webDevo = Object.create(developer)

webDevo.createApp();

