var obj = {
    name : 'Lian',    
}

//.call()
function sayHello(age){
    return "Hello " + this.name + " is " + age
}

Function.prototype.myCall = function(context = {} , ...args){
    if(typeof this !== 'function'){
        throw new Error( this + 'is not callable')
    }

    context.fn = this;
    const result = context.fn(...args);
    delete context.fn;
    return result;
}

console.log(sayHello.call(obj, 27));
console.log(sayHello.myCall(obj, 27));


//.apply()
function intruduce(passion ,profession ){
    return "Hey " + this.name + " is " + passion + " and he is a professional " + profession 
}

Function.prototype.myApply = function(context = {} , args = []){
    if(typeof this !== 'function'){
        throw new Error( this + 'is not callable')
    }

    if(!Array.isArray(args)){
        throw new Error("CreateListFromArrayLike called on non-object");
    }

    context.fn = this;
    const result = context.fn(...args);
    delete context.fn;

    return result;
}

console.log(intruduce.apply(obj , ['guitarist' , 'devo']));
console.log(intruduce.myApply(obj , ['guitarist' , 'devo']));


//.bind()
function hobby(desginer,rapper,value){
    return `Yoo .. this is ${this.name} and my hobby is ${value ? desginer : rapper} `
}

Function.prototype.myBind = function(context = {} , ...args){
    if(typeof this !== 'function'){
        throw new Error('Cannot be bound as it is not callable')
    }

    context.fn = this;
    return function(...newArgs){
        return context.fn(...args, ...newArgs)
    }
}

const interest = hobby.bind(obj)
const sayHobby = hobby.myBind(obj)
console.log(sayHobby("to be a fashion desginer" , "rapping"  , false));
console.log(sayHobby("to be a fashion desginer" , "rapping"  , true));