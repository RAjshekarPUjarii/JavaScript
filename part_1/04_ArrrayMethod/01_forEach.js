// Important array method 

// for each method(can be treated as for loop
//)
// console.log("hello world")
// const numbers = [1,2,3,4,5];
// function print(number ,index,arr){
//     console.log(`index is ${index} and number is ${number}-->`,arr[index]*number);
// }

// for(let i in numbers)
// {
//   print(numbers[i],i);
// }

// OR 

//rather than doing above code we can use
//  forEach method as below

// numbers.forEach(print);

//OR

//rather than defining a function outside we can define inside a forEach method

//  numbers.forEach(function(number ,index){
//     console.log(`index is ${index} and number is ${number}`);
// });
// const numbers = [71,27,73,45,85];

// numbers.forEach(function(value,index,arr){
//     console.log(`index is  ${index} * value is  ${value} and  array value is ${arr[index]} = ${value*22}`)
// })



//practice
const users =[
    {firstName:"rajshekar",age:34},
    {firstName:"raj",age:3},
    {firstName:"shekar",age:3},
]
//function expression
users.forEach(function(user,i,arr){
    console.log(i,user.firstName);
})
// we can use arrow function
// console.log("break");
// users.forEach((i,u,arr)=>{
//     console.log(i,user.firstName,user.age,arr[i]);
// })

// users.forEach

