// Event capturing 

// working
//                                  |             |
//    this is know as capturing--->  |           | ---> this is know as bubbling 
//                                    |         |
//                                     |_______|

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

grandparent.addEventListener("click",()=>{
    console.log("capture grandparent ");
},true)
parent.addEventListener("click",()=>{
    console.log("capture parent ");
},true)
child.addEventListener("click",()=>{
    console.log("capture child ");
},true)
document.body.addEventListener("click",()=>{
    console.log("capture body");
},true);

// not capturing or bubbling event
grandparent.addEventListener("click",()=>{
    console.log(" bubbling grandparent ");
})
parent.addEventListener("click",()=>{
    console.log("bubbling  parent ");
})
child.addEventListener("click",()=>{
    console.log("bubbling  child ");
})
document.body.addEventListener("click",()=>{
    console.log("bubbling  body");
})