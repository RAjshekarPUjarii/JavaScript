 //using new keyword in aproblem 
//constructor
function CreateUser(firstName,lastName,email,age,address){
          this.firstName = firstName;
          this.lastName =  lastName;
          this.email = email;
          this.age =  age;
          this.address = address;
        //   return this;  it is an optional 
}

const user1 = new CreateUser("rajshekar","pujari","rajshekarpujari@gamil.com",20,"my address");

CreateUser.prototype.about = function(){
return `firstName ${this.firstName} and age is ${this.age}`
}
CreateUser.prototype.is18 = function(){
return this.age >= 18;
}
CreateUser.prototype.sing = function(){
return " la la la la ";
}
console.log(user1);
for(let key in user1 )
{
    console.log(key);
}
console.log(user1.about());


// for(let key in user1 )
// {
//     // it is an optional for getting only own property not getting from __proto__
//     if(user1.hasOwnProperty(key)){
//     console.log(key,":",user1[key]);
//     }
// }