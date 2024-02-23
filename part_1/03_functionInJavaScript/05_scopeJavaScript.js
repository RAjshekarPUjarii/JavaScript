// 1. lexical scope

// const v= "value";                        3

// function firstFunc(){
// // const v= "value";                        2

//         console.log("first function");

//     const secFun = function(){
// // const v= "value";                        1

//         console.log("second function :",v);
//     }
//     secFun();
// }
// firstFunc(); 



// 2. block scope  vs  function scope

// let and const are block scope (it can access only within a block)

// var is function scope(it can access in entire program)

// if(true)
// {
//     var r=2;
// }
// console.log(r);     


//  3. default parameter

//  a. before we use like this as below
// function add(a,b){
//     if(typeof b === "undefined")
//     {
//         b=34;
//     }
//     return a+b;
// }
// console.log(add(2));

// NaN ---> Stands for Not a Number

// b.  now we can use as below

// const add = (a,b=2) => a+b;
//     console.log(add(2));


// rest parameter

// const fun = (a,b,...c) =>{
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`,typeof c);
// }
// fun(1,2,3,4,5,6,7,8,9);

// const addAll= (...a) =>{
//     let sum=0;
//  for(let i in a)
//  {
//   sum+=a[i];  
//  }
//  return sum;
// }
// console.log(addAll(1,2,3));


//parameter destruction in object

const person={
    name:"rajshekar",
    gender:"male"
}
// const fun = (obj) =>{
//     console.log(obj.name);
//     console.log(obj.gender);
// }
// fun(person);

// rather than doing above code we can do para destruction as below
//  const fun = ({name,gender}) =>{
//     console.log(name);
//     console.log(gender);
//  }
//  fun(person);

 // para destruction in array
const arr=[1,2,3,4];
 const fun = ([index1,,,index2]) =>{
    console.log(index1);
    console.log(index2);
 }
 fun(arr);


