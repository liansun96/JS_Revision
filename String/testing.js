function capsOneLetterApart(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    i % 2 === 0 ? (result += str[i].toUpperCase()) : (result += str[i]);
  }
  return result;
}
console.log(capsOneLetterApart("hello"));
console.log(capsOneLetterApart("hey lian"));

// function closeSecondDiv(str) {
//   let result = "";
//   let divCount = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "<") {
//       divCount++;
//     }
//     if (str[i] === "<" && divCount % 2 === 0) {
//       result += str[i] + "/";
//       result += str[i];
//     } else {
//     }
//   }
//   return result;
// }

function closeSecondDiv(str) {
  let result = "";
  let divCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "<") {
      console.log(str[i], i);
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

console.log(closeSecondDiv("<div>hello<div>"));
console.log(closeSecondDiv("<div><div><div>"));
