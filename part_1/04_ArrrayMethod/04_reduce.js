//                reduce method

// (method) Array<number>.reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number): number (+2 overloads)

// Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

//sum of array[1+2+3+4]=10 using loop same as using reduce method
// I'm using arrow function
//sum of array

// const array = [4,1,1,1,1,1];
//  const ans = array.reduce((accumulator,currentValue ,currentIndex)=>{
//     console.log(`currentIndex is  ${currentIndex} accumulator value is ${accumulator} + currentValue value is ${currentValue}:`,accumulator + currentValue);

// return accumulator + currentValue; 

// },0); //initialization = 0

// console.log("result :",ans);

// const users = [
//     {productId:1, productName:"mobile", productPrice:10000},
//     {productId:2, productName:"laptop", productPrice:30000},
//     {productId:3, productName:"tv", productPrice:40000},
// ]
// const ans1 = users.reduce((totalPrice,currentValue) => {
// console.log(`totalprice  is ${totalPrice} and currentValue is ${currentValue.productPrice}: `,totalPrice + currentValue.productPrice);
//     return totalPrice + currentValue.productPrice;
// },0)
console.log(ans1);
