//  mistake
// const user1 = {
//     firstName : "rajshekar",
//     age : 20,
//     about : function(){
//    console.log(`firstName is ${this.firstName}and age is ${this.age}`);
//     }
// }

// user1.about();

/* we cant do this
const ans = user1.about();
ans();  */
//  i can use this as below bind method
// const ans = user1.about.bind(user1);
// ans();
  



// arrow function inside a object and short function inside a object
// this keyword doesn't  refer  to arrow funtion [output will be undefined (if arrow is  pointing to this keyword ) ]

const user1 = {
        firstName : "rajshekar",
        age : 20,
        about() {
       console.log(`firstName is ${this.firstName} and age is ${this.age}`);
        }
    }
user1.about();

