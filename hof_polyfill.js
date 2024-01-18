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

Array.prototype.myFilter = function (cb) {
  let result = [];
  for (i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) result.push(this[i]);
  }
  return result;
};


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
