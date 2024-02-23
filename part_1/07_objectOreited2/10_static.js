   // static method and its property

class  Person
{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName  = lastName;
        // this.age = age;
    }
    
    static info(){
        // static will not refer to this keyword
        console.log("this is static method without calling using object  rather calling using class name");
    }
    static variable =23;
}
const user = new Person("rajshekar","pujari");
Person.info();
// static property
console.log(Person.variable);

