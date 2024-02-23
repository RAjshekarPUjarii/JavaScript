// function is returning a Promises


// function makingFriedRice(){
//     const bucket=["salt","rice","vegetables","one", "two"];

    // return new Promise((resolve,reject)=>{
//         if(bucket.includes("salt") && bucket.includes("rice") && bucket.includes("vegetables")){
//             resolve("rice is ready and lets have it ");
//         }
//         else{
//             reject("we could not make rice because some gradeint is not there");
//         }
//     })
// }

//or
function makingFriedRice(){
    const bucket=["salt","rice","vegetables","one", "two"];
const ans =new Promise((resolve,reject)=>{
        if(bucket.includes("salt") && bucket.includes("rice") && bucket.includes("vegetables")){
            resolve("rice is ready and lets have it ");
        }
        else{
            // reject("we could not make rice because some gradeint is not there");
            reject([34,5,5]);
           
        }
    })
    console.log("ans :",ans);//if condition  is true then it will print in the form of object then it says it is fullfilled
    // if condition  is  not true then it will print in the form of object then it says it is rejected || we cn see in console
    return ans;
}

makingFriedRice().then((riceReady)=>{
    console.log(riceReady)
}).catch(
    (NotReady)=>{
         console.log(NotReady);
    }
)
