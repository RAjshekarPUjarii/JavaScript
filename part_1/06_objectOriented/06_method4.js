//    __proto__
// another object for method
const userMethod = {
    about : function(){
        return `firstName ${this.firstName} and age is ${this.age}`;
      },
     is18 : function(){
    return this.age >= 18;},
    sing : function(){
        return " la la la la ";
    }
}

function createUser(firstName,lastName,email,age,adress){
        // creating a empty object 
        const user = Object.create(userMethod);
        user.firstName = firstName;
        user.lastName =  lastName;
        user.email = email;
        user.age =  age;
        user.adress = adress;
        
        return user;
    }
// now  we can create multiple users detail
  const user1 = createUser("rajshekar","pujari","rajshekarpujari@gamil.com",20,"my address");
  
  console.log(user1); 
  console.log(user1.is18()); 
  console.log(user1.about()); 
  console.log(user1.sing()); 
  console.log(userMethod.__proto__); 
