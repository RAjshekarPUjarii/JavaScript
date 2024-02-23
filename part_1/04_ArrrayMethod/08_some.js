
//  some method 
// (method) Array<number>.some(predicate: (value: number, index: number, array: number[]) => unknown, thisArg?: any): boolean

// Determines whether the specified callback function returns true for any element of an array

// const numbers = [1,23,9,43,3];
// const ans = numbers.some(function(number,index)
// {
// console.log(`answer  ${index}:"`,number === 3);
//     return number === 3;
// });
// console.log(ans);



// practice

// const usersCart = [
//     {productId:1,productName:"p1",price:120},
//     {productId:2,productName:"p2",price:140},
//     {productId:3,productName:"p3",price:1200},
//     {productId:4,productName:"p4",price:100},
//     {productId:5,productName:"p5",price:14000},
// ]
//  const ans =usersCart.some(user => {
//     console.log(`user price  is ${user.price}`,user.price>139);
//     return user.price>139;
//  })
//  console.log(ans);

//practice

const numbers = [2,3,4,53,"@"];
const ans = numbers.some((a,index,arr) =>{
    console.log(`a is ${a} and arr is ${arr[index]}:`,arr[index]);
    return a === "3";
})
console.log(ans);
