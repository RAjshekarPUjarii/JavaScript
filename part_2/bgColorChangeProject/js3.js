// Math.random()*10 it will give random value in fractional(from 1 to 9)
// Math.floor(Math.random *256) it will give random value in non fractional (from 1 to 255)


function randomColorGenerator(){
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const randomColor = `rgb(${red},${green},${blue})`;
    return randomColor;
}

const button = document.querySelector(".btn");
const body = document.querySelector("body");
const heading = document.querySelector(".heading");
const currentColor = document.querySelector(".current-color");
button.addEventListener("click",()=>{
    // body.style.backgroundColor= "orange";
    // heading.style.backgroundColor= "green";
    const random = randomColorGenerator();
    body.style.backgroundColor = random;
    currentColor.textContent = random;
    heading.style.color= random;
    button.style.color= random;

    
})
