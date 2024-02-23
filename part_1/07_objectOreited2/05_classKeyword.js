//  array is also have a prototype

// let numbers = [1,2,3,4];
// console.log(Array.isArray(Array.prototype));
// console.log(Array.prototype);
// Array.prototype.hello = function()
// {
//     console.log("hello");
// }
// console.log(Array.prototype.u=10);
// to see prototype we can use .getPrototypeOff
// console.log(Object.getPrototypeOf(numbers));

// ------------------------------------------------------------------------------------------------

class CreateUser{
    constructor(firstName,lastName,email,age,address){
        this.firstName = firstName;
        this.lastName =  lastName;
        this.email = email;
        this.age =  age;
        this.address = address;
      //   return this;  it is an optional 
}
about (){
    return `firstName ${this.firstName} and age is ${this.age}`
}
is18 (){
return this.age >= 18;
}
sing (){
    return " la la la la ";
}
fun(name){
    console.log("my name is ",name);
}

}
// output
const user1 = new CreateUser("rajshekar","pujari","rajshekarpujari@gamil.com",20,"my address");
console.log(user1.about());
console.log(user1.is18());
console.log(user1.sing());
console.log(user1.firstName);
user1.fun("raju")
console.log(Object.getPrototypeOf(user1));

// to number to string
const arr =12;
console.log(typeof arr.toString());