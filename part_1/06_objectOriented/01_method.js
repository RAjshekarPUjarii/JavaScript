
// method 
// if  any function have inside a object then it know as method
// example
// const person = {
//   firstName : "rajshekar",
//   age : 20,
//   about : function(){
//     console.log("name is rajshekar and age is 20");
//   }
// }
// console.log(person);


// const person = {
//     firstName : "rajshekar",
//     age : 20,
//     about : function(){
//         console.log("name is rajshekar and age is 20");
//     }
// }

// person.firstName="raj"; //here i update my firstName with raj
// console.log(person);
// person.about();
// console.log(person.about()); // it will print  undefined
// console.log(person.about); // it will print all function



// this keyword

//type of globe this
//it refers to object
// const person = {
//     firstName : "raj",
//     age : 20,
//     about : function(){
//         console.log(`name is ${this.firstName} and age is ${this.age}`);
//     }
// }
// person.about();


// function userInfo(){
//     console.log(`name is ${this.firstName} and age is ${this.age}`)
// }
// const person1 = {
//     firstName : "raj",
//     age : 9,
//     about : userInfo
// }
// const person2 = {
//     firstName : "rajshekar",
//     age : 19,
//     about : userInfo
// }
// const person3 = {
//     firstName : "shekar",
//     age : 22,
//     about : userInfo
// }
// person1.about();
// person2.about();
// person3.about();



// object window and this
// console.log(this);
// console.log(window);

// console.log(this === window); //both are same

// 'use strict'
 function fun(){
   console.log(this); //it will  print object window but we use strict mode then it will print undefined
 }
 fun();