Array.prototype.myMap = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i, this));
  }
  return result;
};

const arr = [1, 2, 3, 4, 5];
arr.myMap((z)=> console.log(z += 1))
const arr1 = arr.myMap((x) => (x *= 5));
console.log(arr1);
console.log(arr);

function fatchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Http error status : ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        console.error(err);
      });
  });
}

const url = "https://fakestoreapi.com/products";

// fatchData(url).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.error(err);
// })

// async function fetchItem(url){
//     try {
//         const res = await fetch(url)
//         if(!res.ok){
//             throw new Error(`Http error status : ${res.status}`)
//         }
//         const data = res.json();
//         console.log(data);
//         return data
//     } catch (error) {
//         console.error(error);
//     }
// }

// fetchItem(url).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.error(err);
// })

const fetchItem = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Http error status : ${res.status}`);
    }
    const data = res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

fetchItem(url).then((data) => {
  // console.log(data);
});

Array.prototype.myFilter = function (cb) {
  let result = [];
  for (i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) result.push(this[i]);
  }
  return result;
};

// const lessThanThree = () =>
//   arr.myFilter((num) => {
//     return num < 3;
//   });

// const lessThanThree = function () {
//   return arr.myFilter((x) => {
//     return x < 3;
//   });
// };

function lessThanThree() {
  return arr.myFilter((x) => x < 3);
}

// console.log(lessThanThree());

const lessThanFive = () =>
  arr.myFilter((num) => {
    return num < 5;
  });
// console.log(lessThanFive());

// Array.prototype.myReduce = function (cb, initialValue) {
//   let accumulator = initialValue;
//   for (i = 0; i < this.length; i++) {
//     accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
//   }

//   return accumulator;
// };

Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue;
  for (i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

const sumOfnums = () => {
  return arr.myReduce((prev, curr) => {
    return prev + curr;
  }, 0);
};

// console.log(sumOfnums(arr));
