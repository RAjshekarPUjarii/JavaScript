// function execution context 
// arguments-> are array like object


// function returns function
// function outerFunction( firstName,lastName){
//     function innerFuntion(){
//         console.log("hello world",firstName , lastName);
//     }
//     return innerFuntion;
// }
// const ans1 = outerFunction("rajshekar","pujari");
// ans1();





// closures
  
// closure example 1

// function hello(x){
//     const a =  " var1";
//     const b = " var2";
//     return function(){
//         console.log(x,a,b);
//     }
// }

// const ans = hello("arg");
// ans();




// practice
function myFunction(x){
    return function(y){
         return (x**y)
    }
}
const cube = myFunction(3)
const ans1 = cube(2);
console.log(ans1);