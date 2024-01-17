function createJoint(){
  let joint = 100;
  
  function smokeSome(){
    console.log("Somking....");
    joint -= 100;
    return joint
  }

  function rolling(){
    console.log("Rolling....");
    joint += 100; 
    return joint
  }

  function getJoint(){
    return joint
  }

  return{
    smokeSome,
    rolling,
    getJoint
  }
}

const smoke = createJoint();
console.log(smoke.smokeSome());
console.log(smoke.getJoint());
console.log(smoke.rolling());
console.log(smoke.getJoint());

const smokerOne = createJoint();
smokerOne.smokeSome();
console.log(smokerOne.getJoint());
smokerOne.rolling();
smokerOne.rolling();
console.log(smokerOne.getJoint());
