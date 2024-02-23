const button = document.querySelector("button");
console.log(button);
const body = document.querySelector("body");
const div= document.querySelector("div");
// button.style.backgroundColor="red";
// console.log(body);

const id =setInterval(()=>{
   let red = Math.floor(Math.random()*255);
   let green = Math.floor(Math.random()*255);
   let blue = Math.floor(Math.random()*255);
   let rgb= `rgb(${red},${green},${blue})`;
   let rgba= `rgb(${red},${green},${blue},0.1)`;
 body.style.background=rgb;
 button.style.background=rgba;

},1000);
button.addEventListener("click",()=>{
    clearInterval(id);
    button.textContent=body.style.background;
    button.style.background="rgb(255,255,255)";
    button.style.border="red solid 4px";
    

    

})



