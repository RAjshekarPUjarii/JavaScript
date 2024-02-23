
// map method

//  1.  it will return always something(if not then undefined will return
// 2. it will created always new array 

// const arr = [1,2,3,4,5];
// function square(number)
// {
    // console.log( number*number);
    // return number*number;

//     if(number %2 !== 0)
//     {
//       return number;
//     }
//     else{
//     //   return -1;
//     }
// }
// const ans=arr.map(square);
// console.log(ans);

// OR
// we can use either function expression or arrow function
// const ans = arr.map((number) =>{
//    return number *7;
// });
// console.log(ans);

// practice
const users =[
    {firstName:"rajshekar",age:34},
    {firstName:"raj",age:3},
    {firstName:"shekar",age:3},
];

// function userNames(names){
//     return names.firstName;
// }
// function userAge(ages){
//     return ages.age;
// }

const ans1 = users.map((names,i,arr) =>{
    // console.log(i,arr[i].firstName)
  return names.firstName;
});
const ans2 = users.map(ages =>{
    return ages.age;
});
console.log(ans1);
console.log(ans2);
