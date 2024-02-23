// click event
console.log("hello world")
// const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click",function(){
//     console.log("you click me")
// })

// const allButton = document.querySelectorAll(".my-button button");
// console.log(allButton)
// allButton.addEventListener("click",function(){
//         console.log("you click me")
//     })


//  we can use loop in eventEvent are for loop , for of loop and forEach method

// for of loop
// for(let button of allButton){
//     button.addEventListener("click",function(){
//         // console.log(button.textContent);
//         console.log(this);
//     })
// }

// for loop
// for(let i =0 ; i<allButton.length; i++)
// {
//     allButton[i].addEventListener("click",function(){
//         // console.log(allButton[i])
//         console.dir(this)
//     })
// }

// forEach method
// allButton.forEach(function(btn){
//     btn.addEventListener("click",function(){
//                 console.log(btn.textContent);
//     //             // console.log(this);
//     });
// })
   

// ---------------------------------------

//  event object --->

// const allButton = document.querySelectorAll(".my-button button");

// for(let button of allButton){
//     button.addEventListener("click",(event)=>{
//         // console.log(event.currentTarget);
//         console.log(event.target);
//     });
// }


// revision
// for it will work slowly
// console.log("script start")
// const allButton = document.querySelectorAll(".my-button button");

// allButton.forEach((button) =>{
//   button.addEventListener("click",(e)=>{
//     let var1=0;
// for (let i = 0; i < 100000000; i++) {
//    var1 +=1;
// }
// console.log(e.currentTarget.textContent);
//   })
// })
// let var2=0;
// for (let i = 0; i < 100000000; i++) {
//    var2 +=1;
// }
// console.log("script ending");
 


// ---------------------------------------------------------

const allButton = document.querySelectorAll(".my-button button");

allButton.forEach((button)=>{
   button.addEventListener("click",e =>{
    e.target.style.backgroundColor="aqua";
    e.target.style.borderStyle="none";
    e.target.style.borderBottom=" solid 2px ";
    // e.target.style.fontSize = "100px";
    // e.target.style.borderRadius = "50%";
    // e.target.style.overflow = "scroll";
   })
});