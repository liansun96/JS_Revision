function maxArray(arr){
    if(arr.length === 0) return null;
    let max = arr[0];
    for(let i = 0; i < arr.length; i ++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}

arr = [1,2,3,4,5,6,7,8,9]
console.log(maxArray(arr));

//reverse array
function reverseArr(arr){
    let result = [];
    for(let i = arr.length -1; i >= 0; i --){
        result.push(arr[i])
    }
    return result;
}

console.log(reverseArr(arr));

//find missing num in the array
function findMissingNum(arr){
    let n = arr.length + 1;
    let sum = (n * (n + 1)) / 2;
    let arrSum = arr.reduce((acc , val) => acc + val , 0);
    return sum - arrSum
}

console.log(findMissingNum([1,2,4,5,6]));

//find the intersection of two array
let a = [1, 2, 3, 4];
let b = [3, 4, 5, 6];

function intersetOfTwoArray(a, b){
    return a.filter((value)=> b.includes(value))
}
console.log(intersetOfTwoArray(a , b));

//Sum of array element
function sumOfArray(arr){
    let result = 0;
    for(let i = 0; i < arr.length; i ++){
        result += arr[i]
    }
    return result;
}
console.log(sumOfArray(arr));

//finding average of array elements
function averageOfArr(arr){
    let average = 0;
    let arrSum = arr.reduce((acc , val ) => acc + val , 0);
    average = arrSum / arr.length;
    return average
}
console.log(averageOfArr(arr));

//checking if array is sorted
function isArrSorted(arr){
    for(let i = 0; i < arr.length; i ++){
        if(arr[i] > arr[i + 1]) return false
    }
    return true;
} 
let unSort = [6,5,71,43,2]
console.log(isArrSorted(arr));
console.log(isArrSorted(unSort));

//find the second largest number
function secondLargestNum(arr){
    const sortArr = arr.slice().sort((a,b)=> b -a)
    return sortArr[1];
}
console.log(secondLargestNum(unSort));

//looping nested array
let nestedArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

function loopNestedArr(arr){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            result.push(arr[i][j])
        }
    }
    return result;
}
console.log(loopNestedArr(nestedArr));

//
function removeElement(arr , target){
    return arr.filter((item) => item !== target)
}
console.log(removeElement(arr , 1));