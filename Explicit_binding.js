var obj = { name: "Lian" };
//.call
function sayHello(age) {
  return "Hello " + this.name + " is " + age;
}
console.log(sayHello.call(obj, 27));

//.call polyfill
Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + " is not callable");
  }

  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;

  return result;
};
console.log(sayHello.myCall(obj, 27));

//.apply
function sayJob(job, profession) {
  return "Hello " + this.name + " is " + job + " and also " + profession;
}
console.log(sayJob.apply(obj, ["devo", "guitarist"]));

//.apply polyfill
Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(this + " is not callable");
  }

  if (!Array.isArray(args)) {
    throw new Error("CreateListFromArrayLike called on non-object");
  }

  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;

  return result;
};
console.log(sayJob.myApply(obj, ["devo", "guitarist"]));

//.bind
function sayAnotherJob(job, profession, value) {
  return `Hello ${this.name} is ${value ? job : profession}`;
}
const jobFun = sayAnotherJob.bind(obj);
console.log(jobFun("musican", "desginer", true));

//.bind polyfill
Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "cannot be bound as it's not callable");
  }

  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};

const jobFunMyBind = sayAnotherJob.myBind(obj);
console.log(jobFunMyBind("musican", "desginer", false));
