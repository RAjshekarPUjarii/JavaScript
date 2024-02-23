// introduction to the Events------------->

// most of the developer use ---click event ----
//  there are three way to add click event

//  first way
//  In element as attribute ->onclick="console.log('you clicked me ')"  and we don't use this method because this is a old method 


// second way -> this too we don't use
// const btn = document.querySelector(".btn-headline");
// btn.onclick = function(){
//     console.log("you clicked ");
// }


// third way using ------>
// -------> addEventListener <-------
const btn = document.querySelector(".btn-headline");
// function clickMe(){
//     console.log("you click me ");
// }
// btn.addEventListener("click",clickMe); 
// or 
//  btn.addEventListener("click",function(){
//     console.log("you click me ");
//  })
// or 
//  btn.addEventListener("click",()=>{
//     console.log("you click me  using arrow function");
//  })

