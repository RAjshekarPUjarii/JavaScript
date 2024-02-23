console.log("hello")
const button = document.querySelector("button");
const body = document.querySelector("body");
// console.log(button);

const setIntervalId =setInterval(()=>{
    const red = Math.floor(Math.random()*158);
    const green = Math.floor(Math.random()*158);
    const blue = Math.floor(Math.random()*158);
    const rgba= `rgba(${red},${green},${blue},0.8)`;
    // button.style.background = rgb;
    body.style.background = rgba;
},1000)
console.log(setIntervalId);
button.addEventListener("click",()=>{
    clearInterval(setIntervalId)
button.textContent=body.style.background;
// button.style.borderColor = body.style.background;

})
    