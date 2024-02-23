// Promise Method
//  1. Promise.resolve
// 2.promise chaining

// const myPromises = Promise.resolve(5);// it returning a promise
// console.log(myPromises);

function myPromises() {
    return new Promise((resolve, reject) => {
        
        resolve("foo");
        
        // if(true){
        // resolve("foo");
        // }else{
        //     reject();
        // }
    })
}
// then() method it return Promise always this is know as promise chaining
myPromises().then((value) => {
     console.log(value)
      value =value + "bar";
     return value  //or return Promise.resolve(value);// in the internally its not returning a string, it is returning a Promise
    //  like return Promise.resolve(value);
     }).then((value)=>{
        console.log(value);
        value+="baaz";
        return value; // if we not return then it javascript wiill return like 
        // return Promise.resolve(undefined)
     }).then((value)=>{
        console.log(value)
     })
    //  .catch(()=>{
    //     console.log("rejected");
    //  })