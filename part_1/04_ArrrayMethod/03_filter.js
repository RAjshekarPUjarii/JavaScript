// filter method 
// Returns the elements of an array that meet the condition specified in a callback function 

// const numbers = [1,2,3,4,5,6];

// //function expresion 
// const evenNumber = numbers.filter(number =>{
//     if(number % 2 === 0)
//     return number;

// });
// console.log(evenNumber);

//practice
const array = [1,2,3,2,6,2];
const ans = array.filter((arr,i) =>{
    console.log(`aswer: ,2 !== arr and index is ${i}`,2 !== arr)
//      let cnt = 0
//     if(arr !== 2){
//         cnt++
//     }
//     return cnt
})
console.log(ans);

