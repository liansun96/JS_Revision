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

console.log(isPalindrome("A man, a plan, a canal, Panama"));

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
function firstNonRepeatedChar(str) {
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    console.log(str.indexOf(char), str.lastIndexOf(char), str[i]);

    if (str.indexOf(char) === str.lastIndexOf(char)) {
      console.log(str.indexOf(char), str.lastIndexOf(char), str[i]);

      return char;
    }
  }
  return null;
}

// Example usage:
const inputString = "high";
const firstNonRepeated = firstNonRepeatedChar(inputString);
console.log("The first non-repeated character is:", firstNonRepeated);

// (6)//Count Vowel in a string
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels(str));

// (7)//Count Ouucrences of a character
function countOccurrences(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

console.log(countOccurrences("testing", "t"));
console.log(countOccurrences("appleppp", "p"));

// (8)//Capitalize One Letter Apart for given string
function capsOneLetterApart(str){
  let result = ''
  for(let i = 0; i < str.length; i ++){
    if( i % 2 === 0){
      result += str[i].toUpperCase();
    }else{
      result += str[i]
    }
  }
  return result;
}
console.log(capsOneLetterApart("hello"));
console.log(capsOneLetterApart("hey lian"));
console.log(capsOneLetterApart("What upz!!"));

// (9)//Close second <div> => </div> , complete the second div tag
function closeSecondDiv(str) {
  let result = "";
  let divCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "<") {
      divCount++;
    }
    if (str[i] === "<" && divCount % 2 === 0) {
      result += str[i] + "/";
    } else {
      result += str[i];
    }
  }
  return result;
}

console.log(closeSecondDiv("<div>Hello<div>"));
console.log(closeSecondDiv("<div><div><div><div>"));
console.log(closeSecondDiv("<div>Fuck<div><div>The<div><div>Police<div>"));
