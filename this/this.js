const myObject = {
    value: 42,
    getValue: () => {
        console.log(this.value); // 'this' refers to the global object (window)
    }
  };
  
  myObject.getValue();
  
  function show(){
    console.log(this);
  }
  
  show();
  
  
  // Arrow function
  const arrowFunction = () => {
    console.log("Arrow function this:", this);
  };
  arrowFunction();
  
  // Regular function
  function regularFunction() {
    console.log("Regular function this:", this);
  }
  regularFunction();
  
  console.dir(console);