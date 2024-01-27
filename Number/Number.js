//The factorial of a number is the multiplication of all the numbers between 1 and the number itself. It is written like this: n!. For example, 4! is shorthand for 4 × 3 × 2 × 1 = 24.
// (1)//Write a function to find a factorial of a number
function factorial(num) {
  if (num === 0 || num === 1) return 1;
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}
console.log(factorial(6));

// (2)Calculate factorial number using recursive
function factorialNum(num){
  if(num === 0 || num === 1){
    return 1
  }else{
    return num * factorialNum(num - 1)
  }  
}
console.log(factorialNum(5));

// (3)//Write a function to check if a given number is prime.
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
  }
  return true;
}
console.log(isPrime(5));

// (or)

function isPrimeOne(num){
  if(num <= 1) return false;
  for(let i = 2; i < num; i++){
    if(num % i ===0) return false; 
  }
  return true
}
console.log(isPrimeOne(5));



// (4)//Write a function to check if a given number is a palindrome.
function isPalindromeNumber(num) {
  const reversed = parseInt(num.toString().split('').reverse().join(''));
  return num === reversed;
}

console.log(isPalindromeNumber(1212));

// (5)//Write a function to find the nth Fibonacci number
function fibonacci(n) {
  if (n <= 1) return n;
  let prev = 0, curr = 1;
  for (let i = 2; i <= n; i++) {
      let temp = curr;
      curr = prev + curr;
      prev = temp;
  }
  return curr;
}
console.log(fibonacci(10));

// (6)//Find the nth FIbonacci number using recursion
function nthFibonacci(n){
  if(n <= 1) return n;
  return nthFibonacci(n -1) + nthFibonacci(n -2)
}

console.log(nthFibonacci(10));