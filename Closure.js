//PrivateCounter Closure
const makeCounter = function () {
  let privateCount = 0;
  function changeBy(val) {
    privateCount += val;
  }

  return {
    increment(val) {
      changeBy(val);
    },

    decrement(val) {
      changeBy(-val);
    },

    value() {
      return privateCount;
    },
  };
};

// const counter1 = makeCounter();
// const counter2 = makeCounter();

// counter1.increment(10);
// counter1.decrement(5)

// console.log(counter1.value());
// console.log(counter2.value());

const makeCount = function(){
  let count = 0;
  function changeBy(val){
    count += val
  }

  return {
    increment(val){
      changeBy(val)
    },
    
    decrement(val){
      changeBy(-val)
    },

    value(){
      return count;
    }
  }
}

const count1 = makeCount();
const count2 = makeCount();

count1.increment(5)
count2.increment(10)
count2.decrement(1)
console.log(count1.value())
console.log(count2.value())


// Closure Scpoe Chain
var userName = "Lian Sun";
function jointsPerDay(x) {
  return function jointsPerWeek(y) {
    return console.log(
      `${userName} smoke ${x} joints a day and around ${y} joints within a week`
    );
  };
}

jointsPerDay(2)(15);

//Currying function
function sumOfnums(a) {
  return function (b) {
    return function (c) {
      return console.log(a + b + c);
    };
  };
}
sumOfnums(2)(6)(1);

//Calculate by operation
function calculate(operation) {
  return function (a) {
    return function (b) {
      if (operation === "sum") return a + b;
      else if (operation === "myltiply") return a * b;
      else if (operation === "devide") return a / b;
      else if (operation === "substract") return a - b;
      else return "Invilid Operaton";
    };
  };
}

const calNums = calculate("devide");
console.log(calNums(5)(5));

//Infinte Carrying
function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

console.log(add(1)(2)(3)(4)(5)(6)(7)(8)(9)());


//Partial Application

