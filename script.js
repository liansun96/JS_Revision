//Closures function

// function outter(x) {
//   let num = 10;
//   function inner(x) {
//     console.log(num + x);
//   }

//   return inner;
// }

// const closureFun = outter();

// closureFun(10);

//callback function

function doSomethingAsync (callback) {
    setTimeout(()=>{
        console.log('Task is done');
        callback;
    },1000)    
}

function onComplete () {
    console.log('Callback excuated');
}

doSomethingAsync(onComplete)