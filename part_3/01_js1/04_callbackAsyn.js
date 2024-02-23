//-------> callback in asynchrounous programming

//basic about the callback function--->
// function fun1(callback){
//     console.log("tast 1")
//     callback();
// }
// function fun2(){
//     console.log("task 2");
// }
// fun1(fun2);
// or
// function fun1(callback){
//     console.log("tast 1")
//     callback();
// }
// // arrow function also be used
// fun1(function fun2(){
//     console.log("task 2");
// });


//practice

// function addTwoNumber(number1, number2, cbSucces, cbFailure) {
//     if ((typeof number1) === "number" && (typeof number2) === "number") {
//         cbSucces(number1, number2);
//     }
//     else {
//         cbFailure();
//     }
// }
// addTwoNumber(3, "a", (num1, num2) => {
//     console.log(`${num1} + ${num2}:`, num1 + num2);
// }, () => {
//     console.log("wrong data type and only numbers");
// })


// practice
 function getTwoNumber(num1,num2,onSuccess,onFailure){
   if(typeof num1 === typeof num2){
    onSuccess(num1,num2);
   }
   else{
    onFailure();
   }
 }
 
 getTwoNumber(4,'d',(num1,num2)=>{
console.log(num1+num2);
 },()=>{
    console.log("please enter a correct data");
 })
 



