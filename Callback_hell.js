//Synchronous vs Aaynchronous

console.log("start");

function asyncAction(name, cb) {
  setTimeout(() => {
    cb(name + " is doing grate");
  }, 1000);
}

function doSomething(action, cb) {
  setTimeout(() => {
    cb(" and " + action + " right now ");
  }, 500);
}

function goSomewhrer(place, cb) {
  setTimeout(() => {
    cb(" and will go to the " + place + " in the next month");
  }, 0);
}

// callback hell
const action = asyncAction("Lian", function (action) {
  console.log(action);
  doSomething("smoking weed", function (hobby) {
    console.log(hobby);
    goSomewhrer("bagan", function (place) {
      console.log(place);
    });
  });
});

//less second will display first
//  asyncAction("Lian", function (action) {
//     console.log(action);
// });
// doSomething("smoking weed", function (hobby) {
//   console.log(hobby);
// });
// goSomewhrer("bagan", function (place) {
//   console.log(place);
// });

console.log("end");
