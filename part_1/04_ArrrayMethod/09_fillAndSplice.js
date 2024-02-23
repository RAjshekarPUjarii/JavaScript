// fill method 
// (method) Array<number>.fill(value: number, start?: number | undefined, end?: number | undefined): number[]

// Changes all array elements from start to end index to a static value and returns the modified array

// @param value — value to fill array section with

// @param start
// index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array.

// @param end
// index to stop filling the array at. If end is negative, it is treated as length+end.

//  fill(value ,startingIndex, endingIndex-1)
// const numbers = [1,27,37,4,5,6,7,8,9];
// const ans = numbers.fill(0,2,-2);
// console.log("ans ",ans);  //same as below
// console.log("numbers ",numbers);




// splice method
//  syntax : splice(startingIndex , endingIndex, addingNewElement)


// (method) Array<number>.splice(start: number, deleteCount?: number | undefined): number[] (+1 overload)

// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

// @param start — The zero-based location in the array from which to start removing elements.

// @param deleteCount — The number of elements to remove.

// @returns — An array containing the elements that were deleted.
console.log("hello")
const numbers = [1,2,3,4,5,6,7,8];

// we can store  deleted item into new array 

const deletedNumber = numbers.splice(2,3,0.23,"raj","pujari")
console.log("deleted  ",deletedNumber);
console.log("array ",numbers);