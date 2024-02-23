// event delagation 

const grandparent = document.querySelector(".grandparent");
grandparent.addEventListener("click",(e)=>{
    // console.log("grandparent ");
    // console.log(e);
    // console.log(e.target);
    console.log(e.target.textContent);
},true)