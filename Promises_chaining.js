//Synchronous vs Aaynchronous

console.log("start");

function asyncAction(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(name + " is doing grate");
    }, 1000);
  });
}

function doSomething(action) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Get your ass off and " + action + " right now");
    }, 0);
  });
}

function goSomewhrer(place) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I will go to " + place + " the next month ,would you come with me?");
    }, 100);
  });
}



// promises chaining
// asyncAction("Lian").then((res) =>{
//     console.log(res);
//     return doSomething("smoking weed")
// }).then((res)=> {
//     console.log(res);
//     return goSomewhrer("london")
// }).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//   console.log(err);
// })

//promise.all //promise.race //promise.allsettled //promise.any

Promise.any([
  asyncAction("Lian"),
  doSomething("smoking weed"),
  goSomewhrer("london"),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(" Error : promises failed in =>" ,err);
  });

// console.log(
//   Promise.race([
//     asyncAction("Lian"),
//     doSomething("smoking weed"),
//     goSomewhrer("london"),
//   ])
// );

console.log("end");
