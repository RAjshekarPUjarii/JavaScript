// Maps 
// map  is a iterable
// store data in ordered collection
// store key value pair (like object)
// duplicate keys not allowed like object


//  object (revision)
// key ->string 
//  keys -> symbol
// const person = {
//     firstName : "rajshekar",
//     age : 23,
//     3 : "three"
// }
// console.log(typeof person["3"]); 
// console.log( person["age"]);
// console.log( person[3]);
// object is not iterable in for loop but it is iterable in of loop
// for  of loop
// for(let i of person){
//     console.log(person.keys);     //error
// }
// for in loop
// for(let i in person){
//         console.log(person[i]);     //no error
//     }



//maps ------------->
// key value pair
// const person = new Map();
// console.log(person);
// console.log(typeof person); //object
// to set key pair in map we use --->setMethod and to access from map we use ---> getmethod 

//set method
// Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.
// person.set("key","value");
// person.set('firstName','rajshekar');
// person.set('age',20);
// person.set(1,"one");
// person.set(1,"oneeee"); //upadated key pair value

// console.log(person);

// for(let i of person){
// console.log(i);
// }

// get method
// Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.

// console.log(person.get(1));
// console.log(person.get("firstName"));

// keys and values
// keys->>Returns an iterable of keys in the map
// for(let key of  person.keys()){
//     console.log(key);
// }

 //values --> Returns an iterable of values in the map
// for(let key of  person.values()){
//     console.log(key);
// }

// person.set([2,3,4,5,6],'array');

// for(let key of person.keys()){
//     console.log(key,Array.isArray(key));
// }

// to get both
// for(let [key,value] of person){
//     console.log(`both key and value `,key,value);
// }


//combining both object and maps
// object
const person1 ={
    id : 1,
    name : "rajshekar",
}
const person2 ={
    id : 2,
    name : "shekar",
}
//maps
const extraInfo = new Map();
extraInfo.set(person1,{age : 20,gender : "male"});
extraInfo.set(person2,{age : 20,gender : "male"});
console.log(extraInfo)
console.log(person1.id);
console.log(extraInfo.get(person1).age)
console.log(extraInfo.get(person2).gender)

for(let [key,value] of extraInfo)
{
    console.log(key,value);
}