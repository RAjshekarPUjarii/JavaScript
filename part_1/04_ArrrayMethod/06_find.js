// find method

// (method) Array<number>.find<S>(predicate: (this: void, value: number, index: number, obj: number[]) => value is S, thisArg?: any): S | undefined (+1 overload)

// Returns the value of the first element in the array where predicate is true, and undefined otherwise.

const numbers = [6,23,1,1,3];
// const find1 = num =>{
//     return 4 === num;
// }
// const ans = numbers.find((num) =>{
//     console.log(num);
//     return 16 === num;
// });
// console.log("answer:",ans);

const array = ["raj","shekar","shivv","sachidanand"];
const ans = array.find(string =>string.length ===6);
console.log(ans);


//practice

// const users = [
//     { userId :1,userName :"rajshekar",age:23,},
//     {userId :2,userName :"raj",age:20,},
//     {userId :3,userName :"shekar",age:23,}
// ];
// // console.log(users.length);
// const ans = users.find(user =>{
//     console.log(`userid is ${user.userId} and username is ${user.userName}`);
//     return user.userId === 2 ; // (2)it point to element in the array
// });
// console.log(ans);
