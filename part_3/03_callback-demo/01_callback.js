//   callback synchronous
// callback hell
// pyramid doom

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

// this is know as a <---- callbacks hell---->
// setTimeout(()=>{
//     heading1.style.color="yellow";
//     setTimeout(()=>{
//         heading2.style.color="aqua";
//         setTimeout(()=>{
//             heading3.style.color="rgb(100,10,40)";
//             setTimeout(()=>{
//                 heading4.style.color="green";
//                 setTimeout(()=>{
//                     heading5.style.color="orange";
//                     setTimeout(()=>{
//                         heading6.style.color="red";
//                         setTimeout(()=>{
//                             heading7.style.color="blue";
//                         },1000)
//                     },3000)
//                 },2000)
//             },1000)
//         },2000)

//     },2000)    
// },1000)


function changeText(element , text , color,time,onSuccesCallback,onFailureCallback){
    setTimeout(()=>{
        if(element){
           element.textContent=text;
           element.style.color=color;
           if(onSuccesCallback){
              onSuccesCallback();
            }
        }
        else{
            if(onFailureCallback){
                onFailureCallback();
              }
            }
        
    },time)
    
}

// this is  know as pyramid doom
// changeText(heading1,"one","blue",2000,()=>{
//     changeText(heading2,"two","red",1000,()=>{
//         changeText(heading3,"three","grey",1000,()=>{
//             changeText(heading4,"four","yellow",2000,()=>{
//                 changeText(heading5,"five","aqua",1000,()=>{
//                     changeText(heading6,"six","purple",2000,()=>{
//                         changeText(heading7,"seven","orange",1000,()=>{
    
//                         },()=>{console.log("heading7 does not exit")});
//                     },()=>{console.log("heading6 does not exit")});
//                 },()=>{console.log("heading5 does not exit")});
//             },()=>{console.log("heading4 does not exit")});
//         },()=>{console.log("heading3 does not exit")});
//     },()=>{console.log("heading2 does not exit")});
// },()=>{console.log("heading1 does not exit")});

