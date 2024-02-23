// hoisting in javaScript
//  it will  work on function declaration and it does not work on function expression and arrow function

console.log(hello());
function hello(){
    return "hello";
}



// accesing before decalartion 
//output will be undefined but const and let will through error

console.log(ans);
var ans=9;