
//     function inside another funtion

function fun(){
    console.log("outside function");
    const add2Num = (num1,num2) => num1+num2;
    const mul2Num = (num1,num2) => num1*num2;
    console.log(add2Num(2,3));
    console.log(mul2Num(2,3));
}               
fun();