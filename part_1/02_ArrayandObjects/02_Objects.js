            //1. Objects
            // two ways to acces the data from the objects
            //first using dot 
            //second using square bracket
// const person={
//     "full name":"rajshekar",
//     age:20,
//     array:[1,2,3,4,5]
// }

// console.log(person);
// console.log(" using dot:",person.name);
// //OR
//  console.log("using square bracket:",person["full name"]); 

// console.log(person.age);
// //OR
// console.log(person["age"]);

//adding another pair to object
// person.anotherName="raju";
//OR
// person["anotherName"]="raju";
// console.log(person);    
 
// we can use push,pop,unshift,shift and..soon in object


// person.array.push(23);
// person.array.push("rajshekar");
// person.array.unshift(3);
// console.log(person);

// 2.  differene between dot and  square bracket
// first
// const person1={
//     name:"rajshekar", //
//     "full name":"rajshekar pujari", //we can use "double qoutation here"
//     age:20
// }
// console.log(person1);
// console.log(person1["full name"]);

//second
// const key="email";
// person1[key]="rajshekarpujari@gmail.com";
// console.log(person1.email);  


// 3. how to iteration object
//   for in loop
// Objects.keys
// for of loop

// const person={
//     name:"rajshekar",
//     age:22,
//     array:[1,2,3,4]
// }
//for in loop

// for(let key in person)
// {
//     console.log(person[key]);
// }

// Object.keys

// console.log(Object.keys(person));
// const val=Array.isArray(person.array);
// console.log(val);

//for of loop
// for(let key of person) it will not work on for of loop in object rather we can use as beloow
// for(let key of Object.keys(person))
// {
//     console.log(key,person[key]);
// }  

// 4.  computed property

    const var1="name";
const var2="age";
 
const value1="rajshekar";
const value2="20";

// first way

// const person1={};
// person1[var1]=value1;
// // person[var2]=value2;
// // console.log("Detail",person);
// console.log("name is ",person1.name);

// second way
// const person={
//     [var1]:value1,
//     [var2]:value2
// };
// console.log("Detail",person);

// console.log(person.name);
// console.log(person.age);

// 5. Spread Operator

//  In Array(revision )
//  const array1=[1,2,3,4,5];
//  const array2=[1,2,3,4,5];
//  const array3=[...array1,...array2];
//  console.log(array3);
//  const name1="rajshekar";
//  console.log(name1);
//  console.log("spread operator",array3);
//  console.log(array2.length);
//  console.log(Array.isArray(array2));
 // using in problems
//  const name2={..."abcdefghijklmnopqrstuvwxyz"}
//  console.log(name2); 
// for(let i of Object.keys(name2)){
//     console.log(name2[i]);
// }



// Spread Operator in Objects

//  const Details={
//     name :"rajshekar",
//     fatherName:"mallikarjun",
//     age:23,
// };
// const missingDetail={
//     usn:"sg20cse104",
//     section:"a2"
// };
// // console.log(Details);
// const person={...Details,...missingDetail};
// console.log("answer",Details);    
// console.log("answer",person);    
    
//6.  object destruction


// revision of array destruction
// const array1 = [1,2,3,4];
// let [v1,v2,v3,v4] = array1;
// v4=34343;
// console.log(v2,v3);
// console.log(array1);

// object destruction
// const object={
//     array1:["item1","item2","item3"],
//     name:"rajshekar",
//     age:23,
// };
// object.Surname="pujari";
// console.log(object);
/// ...detail if for rest property value
// const {array1,...detail}=object;
// for(let key in array1)
// {
//     console.log(array1[key]);
// }
// console.log(object.name);
// console.log(detail);
// for(let i in detail)
// {
//     console.log(detail[i]);
// }      

//7. Objects inside Array


// const users=[
//     {userId:1,name:"rajshekar",gender:"male"},
//     {userId:2,name:"rachesh",gender:"male1"},
//     {userId:3,name:"sachidananda",gender:"male"}, 
// ];
//accessing
// console.log(users);
// //for entire
// for(let user of users){
//     console.log(user);
// }
// for individual
// for(let user of users){
//     // console.log(user.userId);
//     console.log(user.name);
// }
// we can use push pop,ushift,shift in object in array
// users.push({userId:4,name:"prajwal",gender:"male"});
// console.log(users.shift());
// console.log(users); 


// 8. Nested destruction ------marked down
 
// const users=[
//     {userId:1,name:"rajshekar",gender:"male"},
//     {userId:2,name:"rachesh",gender:"male1"},
//     {userId:3,name:"sachidananda",gender:"male"}, 
// ];
// all accessing 
// const [user1, user2,user3]=users;
// console.log(user1);
// console.log(user2);
// console.log(user3);

// accessing inside a object
// const [{userId},{name},{gender}]=users;
// console.log(userId);
// console.log(name);
// console.log(gender);
// changing property inside  array inside in object
// const [{userId:id},{name:na},{gender:gen}]=users;
// console.log(id);
// console.log(na);
// console.log(gen);
 

//pratice nested destructed
const users=[
    {userId:1,name:"rajshekar",gender:"male"},
    {userId:2,name:"rachesh",gender:"male1"},
    {userId:3,name:"sachidananda",gender:"male"}, 
];
// console.log(users);
users.push({userId:4,name:"girl",gender:"female"})
console.log(users);
const [user1,user2]= users;
const [{userId:id},{name:n}]= users;
console.log(user1);
console.log(id);
console.log(n);



 








