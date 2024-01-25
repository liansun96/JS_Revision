// Define a class called Animal
class Animal {
    // Define a constructor method to initialize object properties
    constructor(name, age, sound) {
      this.name = name;
      this.age = age;
      this.sound = sound;
    }
  
    // Define a method to make the animal eat
    eat = (food) => {
      console.log(`${this.name} is eating ${food}.`);
    }
  
    // Define a method to make the animal sleep
    sleep() {
      console.log(`${this.name} is sleeping.`);
    }
  
    // Define a method to make the animal make noise
    makeNoise() {
      console.log(`${this.name} says ${this.sound}.`);
    }
  }
  
  // Create an object from the Animal class, called dog
  let dog = new Animal("Rex", 3, "woof");
  
  // Access the object properties
  console.log(dog.name); // Rex
  console.log(dog.age); // 3
  console.log(dog.sound); // woof
  
  // Call the object methods
  dog.eat("bone"); // Rex is eating bone.
  dog.sleep(); // Rex is sleeping.
  dog.makeNoise(); // Rex says woof.
  