// 1.callback function

// function add(a,b)
// {
//     return (a+b);
// }
// function addition(add2){
//     console.log("addition of two number is ");
//     // console.log(add2(2,3));
//     console.log(add2(2,45));
// }
// addition(add);

// const even = function(num){
//     console.log(num % 2 === 0);
//     }
// function isEven(callback){
//  (callback(4))
// }
// isEven(even);


// // 2.function returning function

//  function print()
//  {
//     console.log("printing task");
//     function display()
//     {
//         // console.log("hello world");
//          return ("hello world");
//     }
//     return display;
//  }
// const ans =print();
// // console.log(ans); //it will print all funtion
// // ans();//will print hello world
// console.log(ans())

 
// 3.practice(both callback and function returning function)
function name()
{
    return "rajshekar";
}
function printName(callback)
{ 
    function display()
    {
       console.log("Your Name is ");
       console.log(callback());
    }  
    return display;

}

const ans=printName(name);
ans();