

//  __proto__ and [[prototype]](ecmaScript documentation likha huva hai)  both are same
// __proto__ and prototype is different from each other

// const obj1 ={
//  key1 : 'value1',
//  key2 : "value2",
// }
// const obj2 = {
//     key3 : 'value3',
//     key4 : 'value4'
// }
//output
// console.log(obj2.key2); // it will print undefined

// const obj2 ={}
// obj2.key3 = "value3";
//there is one more way to create a empty object
// as shown below

const obj1 ={
     key1 : 'value1',
     key2 : "value2"
    };
   
 /* (method) ObjectConstructor.create(o: object | null): any (+1 overload)

 Creates an object that has the specified prototype or that has null prototype.

 @param o — Object to use as a prototype. May be null. */

const obj2 = Object.create(obj1);
// console.log(obj2); //it will print empty object like ---> {}
// obj2.key3 = "value3";
// console.log(obj2);
// console.log(obj2.__proto__); //old way 
// console.log(obj1.__proto__);




// we can now method 4 be optimization in next file




