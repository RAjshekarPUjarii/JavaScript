
// promises

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");

function changeText(element , text , color,time){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        leti =1;
        if(element){
            // let r=Math.floor(Math.random()*4005);
           element.textContent=text;
           element.style.color=color;
        //    element.textContent=`${r}`;
          resolve();
        }
        else{
           reject();
            }
        
    },time)
})
}
// changeText(heading1,"one","red",1000)
// .then(()=>{ return changeText(heading2,"two","green",1000)})
// .then(()=>{ return changeText(heading3,"three","green",1000)})
// .then(()=>{ return changeText(heading4,"four","green",1000)})

//or

changeText(heading1,"one","red",1000)
.then(()=>changeText(heading2,"two","green",1000))
.then(()=>changeText(heading3,"three","blue",1000))
.then(()=>changeText(heading4,"four","purple",1000))
.then(()=>changeText(heading5,"five","pink",1000))
.then(()=>changeText(heading6,"six","yellow",1000))
.then(()=>changeText(heading7,"seven","voilet",1000))
.then(()=>changeText(heading8,"eight","red",1000))
.then(()=>changeText(heading9,"nine","orange",1000))
.catch(()=>console.log("heading not found")); // this line means to handle a error

