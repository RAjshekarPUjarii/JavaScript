//  this keyword ----->

// function expression--> this is will print what have inside the btn of this keyword -> button have
const btn = document.querySelector(".btn-headline");
// btn.addEventListener("click",function(){
//         console.log("you click me ");
//         console.log(this);
//      })

//  arrow functuon ->it will print window of this  keyword
btn.addEventListener("click",()=>{
        console.log("you click me ");
        console.log(this);
     })