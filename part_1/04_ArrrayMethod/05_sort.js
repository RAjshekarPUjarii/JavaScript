//  sort method (it will change the original array)
// (method) Array<number>.sort(compareFn?: ((a: number, b: number) => number) | undefined): number[]

// Sorts an array in place. This method mutates the array and returns a reference to the same array
 
//ASCII table
// char : ascii value

//  number
// '0' : 48 , '1' : 49 and .....'9' : 57

// capital letter  
//    'A' : 65 | 'B' : 66 | and .... 'Z' : 90

// small letter
//   'a' : 97 | 'b' : 98 | and .... 'z' : 123


// sort technique
//  this for ascending order like.. 1 2 3 4 and soon and descending order is oppsite of ascending order

// 1. After substraction(a-b) if a is positive(a is greater than b) then change from (a,b) to (b,a)
// 2. After substraction(a-b) if a is negative (a is lesser than b) then  there is no need to change (a,b)
// 3. if a and b is equal then it will remain same as it is

const numbers = [5,32,23,14,2,6];
// numbers.sort();
// console.log(numbers); 
// this will give order according  first name or first number  from asci tabel

// const numbers = [5,32,23,14,2,6,"raj"];
// function sortNumbers(a,b){         // function declaration
//     return a- b;
// }
// const sortNumbers = function(a,b){    // fuction expression 
//     return a-b;
// }
// const sortNumbers = (a,b) => {         //arrow function
// //     return a-b;
// }
// ascendering order(a-b)

// const ans = numbers.sort((a,b) =>{
//     return a-b;
// });
// console.log(ans)



// descending order(b-a)---------------->

// const ans = numbers.sort((a,b) =>{
//     return b-a;
// });
// console.log(ans);
//OR
// const ans = numbers.sort((a,b) => a-b);
// console.log(ans);
// Or
// console.log(numbers.sort((a,b)=>a-b));
// console.log(ans)
// console.log(numbers);

// real example

const usersCart = [
    {productId:1,productName:"p1",price:120},
    {productId:2,productName:"p2",price:140},
    {productId:3,productName:"p3",price:1200},
    {productId:4,productName:"p4",price:100},
    {productId:5,productName:"p5",price:14000},
];
// it will change in the original array
//  usersCart.sort((a,b) =>a.price - b.price);
//  console.log(usersCart);

// //  making clone and storing into a lowToHigh and HighToLow using slice 

//1.lowToHigh

const lowToHigh = usersCart.slice(0).sort((a,b)=>{
    return a.price - b.price;
});
console.log(lowToHigh);


// 2.highToLow

// const highToLow = usersCart.slice(0).sort((a,b)=>{
//     return b.price - a.price;
// });

// console.log(highToLow);



