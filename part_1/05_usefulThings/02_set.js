// set ---> collection of element unique element
// it is iterable 
// unique element in set(duplicate not allowed)
// no indexed based
// order is not garunteed
// it has its own method like add , has etc

const numbers = ["item1","item2","item3"];
const arr = new Set([122,121,89]);//first priority
// add() method to add in set arr
arr.add(1);
let a=3,b=3;
arr.add(a>=b);
arr.add("itemmm");   
arr.add(4**2);
arr.add([1,2]); 
arr.add([1,2]);
arr.add(numbers);
arr.add({1:'first',2:'second'})
// console.log(typeof(arr))
// (method) Set<any>.has(value: any): boolean
// @returns — a boolean indicating whether an element with the specified value exists in the Set or not.

// console.log("true or false: ",arr.has(122));
// console.log(arr);
for(let number of arr)
{
    console.log(number);
}