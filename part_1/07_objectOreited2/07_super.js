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
class dog extends Animal{
  constructor(name,age,speed){
    super(name,age);
    this.speed = speed;
  }
    run(){
        return `${this.name} is running at ${this.speed}kmph`;
    }

}

const ans = new dog("dogggy",2,34);
console.group(ans);
console.group(ans.run());