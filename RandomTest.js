let arr = [1, 2, 3, 4, 5];

Array.prototype.myMap = function(cb){
  let result = [];
  for(let i = 0; i < this.length; i ++){
    result.push(cb(this[i], i , this))
  }
  return result;
}

let newArr = arr.myMap((x) => x + 1);
console.log(arr);
console.log(newArr);

Array.prototype.myFilter = function(cb){
  let result = [];
  for(let i = 0; i < this.length; i ++){
    if(cb(this[i] , i , this)) result.push(this[i])
  }
  return result;
}

let lessThanFive = arr.myFilter((x) => x <= 3);
console.log(lessThanFive);


Array.prototype.myReduce = function(cb , initialValue){
  let accumulator = initialValue;
  for(let i = 0; i < this.length; i ++){
    accumulator = accumulator ? cb(accumulator , this[i] , i , this) : this[i]
  }
  return accumulator;
}

let sumofArr = arr.myReduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(sumofArr);
