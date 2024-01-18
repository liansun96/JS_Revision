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
      resolve(
        "I will go to " + place + " the next month ,would you come with me?"
      );
    }, 100);
  });
}

const taskOne = async () => {
  try {
    const message1 = await asyncAction("Lian sun");
    console.log(message1);
    const message2 = await doSomething("show me your skills");
    console.log(message2);
    const message3 = await goSomewhrer("Amsterdam");
    console.log(message3);

    console.log([message1, message2, message3]);
  } catch (error) {
    console.error("Promises Failed :" ,error)
  }
};k

taskOne();

console.log("end");
