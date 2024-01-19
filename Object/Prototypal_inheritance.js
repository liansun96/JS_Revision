let stoner = {
    name : 'lian',
    sayHi(){
        alert(`${this.name} say hi to you`)
    }
}

stoner.sayHi();

let roller = Object.create(stoner);
roller.name = 'shoke',

roller.sayHi();