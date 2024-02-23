// promise or future values
// promise is just like a object only and it is asynchronouses
// ------>
const bucket =["coffee","chips","vegetables","salt","rice"];
// console.log(bucket);
// how to produce or create---->
const friedRice =new Promise((resolve,reject)=>{
    if(bucket.includes("rice") && bucket.includes("vegetables") && bucket.includes("salt")){
        // resolve("friedRice"); // here i can pass array or object or string
        resolve(["rice","chicken","bothRiceMeal"]);
    }else{
        reject("any error message"); //here i can pass array or object or string
        //    reject([1,2,3,4]);
    }
});

// how to consume----> this consumed by APIs or browers 

// friedRice.then((myFriedRice)=>{ // we can pass only one argument and basically it is error message
//     console.log("lets eat ",myFriedRice);
// },(anymsg)=>{
//    console.log(anymsg)
//     // console.log(anymsg);
  
// })

// OR

// we can use by  catch keyword to handle an error

friedRice.then((myFriedRice)=>{ // we can pass only one argument and basically it is error message
    console.log("lets eat ",myFriedRice);
}).catch(
    (anymsg)=>{
       console.log(anymsg);
    }  
)
