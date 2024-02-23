// key press Event---->

const body = document.body;
body.addEventListener("keypress",(e)=>{
   console.log(e);
   console.log(e.key);
})

//mouseOver Event---->
const mainButton = document.querySelector(".btn-headline");
mainButton.addEventListener("mouseover",()=>{
   console.log("mouse over occured");
});


// mouseLeave Event---->
const mainButton1 = document.querySelector(".btn-headline");
mainButton1.addEventListener("mouseleave",()=>{
   console.log("mouse leave occured");
});

