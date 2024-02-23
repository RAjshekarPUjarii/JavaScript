// -------------->setTimeOut and clearTimeOut <-------------


// asynchronous programming
//  example 2
// console.log("start here");
// function helo(){
//  console.log("hello");
// }
// 1000milisecond  is eqaul to 1 second
// setTimeout(helo,1000);
// console.log("end");
// console.log("end");

// or

// console.log("start here");
// we can also arrow function
// setTimeout( function(){
//  console.log("hello");
// },1000);
// console.log("end");

// example 2

// first line will print start here as shown below 
// and second line setTimeout this will give to web Apis providing by browser // its over a time by setTimeout and 
//  then it eventLoop  waits setTimeout till further code execute  or its in queue call
//  after this it goes too call stack then this function will execute

// console.log("start here");
// setTimeout(()=>{

//     console.log("inside the setTimeOut");
// },0);
// for(let i=0; i<200; i++){
//     console.log("hi")
// }

// console.log("end here's");


// clearTimeOut  

// clearTimeOut(IdName);
// setTimeout it will return its ID and we can store into variable 
// console.log("start here");
// const id=setTimeout(()=>{
//     console.log("inside the setTimeOut");
// },2000);
// for(let i=0; i<20; i++){
//     console.log("hi")
// }
// console.log("setTimeOut  id is " ,id);
// console.log("clearing a id");
// clearTimeout(id);
// console.log("end here's");

