let str = "testing string";

//Reverse String
function reverseString(str) {
  return str.split("");
}

console.log(reverseString(str));

// (1)//isPalindrome
function isPalindrome(str) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  console.log(cleanStr);
  // Reverse the cleaned string
  const reversedStr = cleanStr.split("").reverse().join("");
  console.log(reversedStr);
  // Check if the cleaned string is equal to its reverse
  return cleanStr === reversedStr;
}

// console.log(isPalindrome("A man, a plan, a canal, Panama"));

// (2)//find the longest words (tradational for loop)
function findLongestWord(sentence) {
  let words = sentence.split(" ");
  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    // console.log(words[i]);
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}
const long = findLongestWord(
  "wake up in the morning and I ask myself Is life worth living"
);
console.log(long);

// (3)//find the longest words (for of loop)
function findLongestWordOne(sentence) {
  let words = sentence.split(" ");
  let longestWord = "";
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

const longOne = findLongestWord(
  "wake up in the morning and I ask myself Is life worth living"
);
console.log(longOne);

// (4)//find the longest word (reduce)
function findLongestWordTwo(sentence) {
  let words = sentence.split(" ");
  let longestWord = words.reduce((acc, curr) => {
    return curr.length > acc.length ? curr : acc;
  }, "");
  return longestWord;
}
const longTwo = findLongestWord(
  "wake up in the morning and I ask myself Is life worth living"
);
console.log(longTwo);


// (5)//Find the First Non-Repeated Character in a String.
function firstNonRepeatedChar(str){
  for(let i = 0; i < str.length; i ++){
      let char = str[i]
      console.log(str.indexOf(char) ,str.lastIndexOf(char) , str[i]);
      
      if(str.indexOf(char) === str.lastIndexOf(char)){
      console.log(str.indexOf(char) ,str.lastIndexOf(char) , str[i]);

          return char
      }
  }
  return null
}

// Example usage:
const inputString = "high";
const firstNonRepeated = firstNonRepeatedChar(inputString);
console.log("The first non-repeated character is:", firstNonRepeated);



//The factorial of a number is the multiplication of all the numbers between 1 and the number itself. It is written like this: n!. For example, 4! is shorthand for 4 × 3 × 2 × 1 = 24.
//Factorial Calculation
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// console.log(factorial(3));

//Factorial Calculation using (for...loop)
// program to find the factorial of a number
// take input from the user
// const number = parseInt(prompt("Enter a positive integer: "));

// checking if number is negative
// if (number < 0) {
//   console.log("Error! Factorial for negative number does not exist.");
// }

// if number is 0
// else if (number === 0) {
//   console.log(`The factorial of ${number} is 1.`);
// }

// if number is positive
// else {
//   let fact = 1;
//   for (i = 1; i <= number; i++) {
//     fact *= i;
//   }
//   console.log(`The factorial of ${number} is ${fact}.`);
// }

