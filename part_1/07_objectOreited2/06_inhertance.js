//inheritance in javascript

// simple class
class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    isEat()
    {
        return `${this.name} is eating`;
    }
    iscute(){
        return true;
    }
    isSupercute(){
        return this.age>23;
    }
}

// const animal = new Animal("tom",3);
// console.log(animal);
// console.log(animal.isEat());
// console.log(animal.iscute());



//inheritance
// extends keyword is used inheritance parent class or base class
class dog extends Animal{
 
}

const ans = new  dog("cattyy",2);
console.log(ans.isEat());
console.log(ans.name);
console.log(ans.age);

