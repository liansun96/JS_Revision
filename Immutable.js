let string = "I'm an immutable string";

let str1 = string.slice(0, 10);

console.log(string);
console.log(str1);

function sum(...number) {
  return number.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4));


