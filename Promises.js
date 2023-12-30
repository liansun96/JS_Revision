console.log('start');

const bob = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        const result = true;
        if(result) resolve("You Are doing grate sir bob")
        else reject (new Error ("Sir , may I roll a joint for you?"))
    },2000)
})

console.log(bob);
bob.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})

console.log('end');