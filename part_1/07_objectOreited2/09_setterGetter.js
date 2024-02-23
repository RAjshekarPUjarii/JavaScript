// setter and getter
class  Person
{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName  = lastName;
        this.age = age;
    }
    // we can treate as property now like fullName
   get  fullName(){
     return `${this.firstName} ${this.lastName}`;
    }
    // it must have only one parameter
    set fullName(fullName){
       // split --->fullName.split(" ") --> it  will split into a list from space

     //destructuring
       const [firstName,lastName] = fullName.split(" ");
       this.firstName =firstName;
       this.lastName =lastName;

    }
}
const user = new Person("rajshekar","pujari",20);
// console.log(user.fullName());
// console.log(user.fullName()); without using get 
// or
// console.log(user.fullName);// using get

//one method  to set 
// user.firstName = "raju";
// user.lastName = "poojari";
// console.log(user);

//second method to set using set
user.fullName ="raj pujarii";
console.log(user);
console.log(user.firstName);
//if we use get to access  anything we cant use direct function but we can use normal just like property(rather writing fullName() we can we use fullName as bellow)
console.log(user.fullName);