//new keyword
// 1.) it will  create  empty object -> this ={}
// 2.) it will return --> this={}
// 3.) it will create -> example->const user = Object.create(createUser.prototype);
  

// example
function user1(firstName,age){
this.firstName= firstName;
this.age = age;
}
user1.prototype.about=function(){
    console.log(this.firstName,this.age);
}
const ans = new user1("rajshekar",20);
ans.about()
console.log(ans);