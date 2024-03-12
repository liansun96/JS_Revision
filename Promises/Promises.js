console.log("start");

// const bob = new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         const result = true;
//         if(result) resolve("You Are doing grate sir bob")
//         else reject (new Error ("Sir , may I roll a joint for you?"))
//     },2000)
// })

// console.log(bob);
// bob.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

const url = "https://fakestoreapi.com/products/15";

function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url).then((res)=>{
        if(!res.ok){
            throw new Error(`Http error status:${res.status}`)
        }
        return res.json();
    }).then((data)=>{
        resolve(data)
    }).catch((err)=>{
        console.error(err);
    })
  });
}

fetchData(url).then((data)=>console.log(data)).catch((err)=>console.error(err))

setTimeout(() => console.log("setTimeout"), 0);

console.log("end");
