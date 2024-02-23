// const userMethod = {
//     about : function(){
//         return `firstName ${this.firstName} and age is ${this.age}`;
//       },
//      is18 : function(){
//     return this.age >= 18;},
//     sing : function(){
//         return " la la la la ";
//     }
// }
// rather than creating another  object we can prototype(free space)or empty object
// combining both prototype and __proto__
function createUser(firstName,lastName,email,age,adress){
                                  //__proto__
        const user = Object.create(createUser.prototype);
        user.firstName = firstName;
        user.lastName =  lastName;
        user.email = email;
        user.age =  age;
        user.adress = adress;
        
        return user;
    }
  const user1 = createUser("rajshekar","pujari","rajshekarpujari@gamil.com",20,"my address");
  console.log(createUser.prototype);

  //   prototype
  createUser.prototype.about = function(){
    return `firstName ${this.firstName} and age is ${this.age}`
  }
  createUser.prototype.is18 = function(){
        return this.age >= 18;
    }
createUser.prototype.sing = function(){
            return " la la la la ";
        }

console.log(user1.firstName,user1.age);
console.log(user1.about());
console.log(user1.is18());
console.log(user1.sing());