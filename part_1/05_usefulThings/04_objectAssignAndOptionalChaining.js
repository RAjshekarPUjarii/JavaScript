// object assign
// to make clone of object assign
// const obj = {
//     key1 :"value1",
//     key2 :"value2"
// }
//spread operator
// const obj2 = {...obj};
// or
// to assign objec to another but it same value in both
// Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.

// const obj2 = Object.assign(...obj);

// obj.key3="value3";
// console.log("object 1 :",obj);
// console.log("object 2 :",obj2);


//optional chaining

const user = {
    firstname : "rajshekar",
    address : {houseNumber :1234}
}
console.log(user.firstname);
console.log(user.address);
console.log(user?.address?.houseNumber);