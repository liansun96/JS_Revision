const  square = function(num){
    return num*num
}

console.log(square(5));

const squareA = square(3)
console.log(squareA);

for (var i = 0; i < 5; i ++){
    setTimeout(()=>{
        console.log(i);
    }, i * 1000)
}
