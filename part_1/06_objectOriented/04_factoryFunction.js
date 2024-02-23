// factory function and discuss about the memory related problems

// 1.method -------->
// const  createUser = {
//   firstName :"rajshekar",
//   lastName : "pujari",
//   email : "rajshekarpujari@gmail.com",
//   age : 20,
//   address : "HoueseNumber , colony, pincode , state",
//   about : function(){
//     return  console.log(this.firstName," ",this.lastName);
//   },
//   is18 : function(){
//     return this.age >= 18;
//   }
// }
// we can create above object 2 or 3 times(user1 detail) but we cant create more than 1 million as same(different users)[waste of time (it does'nt make any sense)]

// ------------------------------------------------------------------------------------------------


//2.method -------->

// to improve above code we can use or create 
//function(function inside object)
// 1.) add key pair value
// 2.)  and return  a object

// function createUser(firstName,lastName,email,age,adress){
//     // creating a empty object 
//     const user = {};
//     user.firstName = firstName;
//     user.lastName =  lastName;
//     user.email = email;
//     user.age =  age;
//     user.adress = adress;
//     user.about = function(){
//             return `firstName ${this.firstName} and age is ${this.age}`;
//           };
//     user.is18 = function(){
//         return this.age >= 18;
//     }
//     return user;
// }

// output
// const user1 = createUser("rajshekar","pujari","rajshekarpujari@gmail.com",20,"my adress");
// console.log(user1);
// const aboutAns = user1.about();
// console.log(aboutAns);
// const is18Ans = user1.is18();
// console.log(is18Ans);
// 
// for(let i in user1){
//     console.log(user1[i]);
// }


// ------------------------------------------------------------------------------------------------


// 3.method ------->
// to improve  above code we use as below
//  we are creating another Object ,in that object storing a method(in my example two method)

//another object for method
// const userMethod = {
//     about : function(){
//         return `firstName ${this.firstName} and age is ${this.age}`;
//       },
//      is18 : function(){
//     return this.age >= 18;
// }
// }
// function createUser(firstName,lastName,email,age,adress){
//         // creating a empty object 
//         const user = {};
//         user.firstName = firstName;
//         user.lastName =  lastName;
//         user.email = email;
//         user.age =  age;
//         user.adress = adress;
        // storing a address of userMethod into a about and is18[that means referrence to heap memory ,we learned in array concept]
    //     user.about = userMethod.about;
    //     user.is18 = userMethod.is18;
    //     return user;
    // }

//output
// const user1 = createUser("rajshekar","pujari","rajshekarpujari@gmail.com",9,"my adress");
// const user2 = createUser("shekar","pujari","shekarpujari@gmail.com",25,"my adress");
// console.log(user1);
// console.log(user2);
// console.log(user1.is18());
// console.log(user2.is18());
// console.log(user1.about());
// console.log(user2.about());


// ------------------------------------------------------------------------------------------------

// 4.method ----->  continued in next file








