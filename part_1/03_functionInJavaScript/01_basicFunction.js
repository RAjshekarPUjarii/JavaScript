//function in java script
// two method
//  function declaration

//  function twoSum(num1 ,num2){
//      return num1+num2;
//  }
//  console.log(twoSum(10,23));

//  function expression

// const  twoSum = function(num1,num2){
// return num1+num2;
// }
// console.log(twoSum(2,3));

//IsEven problem
function isEven(number)
{
    return number % 2 === 0;
}
console.log(isEven(3));
// first character return from string
function firstChar(str){
    return str[0];
}
console.log(firstChar("rajshekar"));

//search a element in an array

function search(arr,key){
    for(let i in arr)
    {
        if(arr[i]==key)
        {
            return i;
        }
    }
    return -1;
}

console.log(search([1,23,434,23],1));