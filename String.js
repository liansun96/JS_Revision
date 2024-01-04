let str = "testing string";

//Reverse String
function reverseString(str) {
  return str.split("");
}

console.log(reverseString(str));

//isPalindrome
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

//find the longest words (tradational for loop)
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
const long = findLongestWord("Hello motherfucker getout of my room");
console.log(long);


//find the longest words (for of loop)
function findLongestWordOne(sentence){
    let words = sentence.split(" ");
    let longestWord = ''
    for(let word of words){
        if(word.length > longestWord.length){
            longestWord = word
        }
    }
    return longestWord
}

const longOne = findLongestWord("Hello motherfucker getout of my room");
console.log(longOne);

//find the longest word (reduce)
function findLongestWordTwo(sentence){
    let words = sentence.split(" ");
    let longestWord = words.reduce((acc , curr)=>{
        return curr.length > acc.length ? curr : acc
    },'')
    return longestWord
}
const longTwo = findLongestWord("Hello motherfucker getout of my room");
console.log(longTwo);