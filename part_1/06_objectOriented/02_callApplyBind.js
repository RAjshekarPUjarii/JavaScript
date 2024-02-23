//  call ,apply and bind method

// const person1 ={
// firstName : "rajshekar",
// age : 20,
// about : function(){
//   console.log(`firstname is ${this.firstName} and  age is ${this.age}`);
// }
// }
// const person2 ={
//   firstName : "shekar",
//   age : 2,
// }
// person1.about();
// person1.about.call(person1);
// person1.about.call(person2);

// rather doing  above we use as below
let about = function(town,state){
  console.log(`firstname is ${this.firstName} and  age is ${this.age} and town,state is ${town}`,state);
}
const person1 ={
  firstName : "rajshekar",
  age : 20,
  
  }
  const person2 ={
    firstName : "shekar",
    age : 2,
  }

  // about(); // ->undefined
  //1.call method  or borrowing function
  // Calls a method of an object, substituting another object for the current object.

  // @param thisArg — The object to be used as the current object.
  
  // @param argArray — A list of arguments to be passed to the method.

  about.call(person1,"wadi","karnataka");
  about.call(person2,"wadi","karnataka");


  //2.apply is similar to call method but one difference is that we pass an argument in array list["item1","item2",and soon]
  about.apply(person1,["wadi","karnataka"]);
  about.apply(person2,["wadi","karnataka"]);


  // 3.bind is similar to call method but one main differnce is that it return the call to store in some where and invoke whenever we want or copy[then we can call when we need]

  // const firstAns=about.bind(person1,"wadi","karnataka")
  // firstAns();
  // const secondAns = about.bind(person2,"wadi","karnataka");
  // secondAns();



  



