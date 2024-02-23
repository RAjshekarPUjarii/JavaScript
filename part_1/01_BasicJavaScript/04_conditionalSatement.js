//if else condition
 /*
 let num=2;
 if(num%2==0){
 console.log("Number is even");
 }
 else{
 console.log("Number is  odd");   
 }
 */

 //ternary  operator
 let ternary=30>=30?30 :0;
 console.log(ternary);

 // nested if else
  let age=34;
  if(age>18){
      if(age>=30)
      {
          console.log("you can ride both car and bike");
      }
      else{
        console.log("you can ride only bike");  
      }
  }
  else{
    console.log("you can  ride only cycle");   
  }

  // if elseif else

  let num=34;
  if(num>=300)
  {
  console.log("number is greater than num");
  }
  else if(num<34)
  {
   console.log("number is lesser than num ");
  }
  else if(num==34)
  {
  console.log("both are equal");
  }

//  AND(&&) and OR(||) operator
if(40>=18 || 30>=30){
console.log(" you can ride both car and bike")
}
else{
console.log(" you can ride only bike")
}

if(40>=18 && 3>=30){
console.log(" you can ride both car and bike")
}
else{
console.log(" you can ride only bike")
}


//switch statement
let swit=10;

switch(swit)
{
    case 1:
        console.log("three");
        break;
    case 2:
        console.log("four");
        break;
    default:
        console.log("any number can be there");
}


//while loop

// let i=0;
// while(i<4){
// console.log(i);
// i++;
// }
//for loop
// for( let i=0; i<4; i++)
// {
//  console.log(i);
// }

//do while loop

// let j=0;
//  do{
//      console.log(j);
//      j++;
//  }while(j>3)

// // break statement in loop
// console.log("break statement");
// for(let i=0;i<15 ;i++)
// {
//  if(i==4)
//  {
//      break;
//  }
//  else{
//      console.log(i);
//  }
// }
// //continue statement 
// console.log("continue statement");
// for(let i=0; i<10; i++)
// {
// if(i==5)
// {
//     continue;
// }
// else{
//     console.log(i)
// }

// }


//guess-number Game
let winningNumber=2;
let guess=+prompt("guess the number");
console.log(typeof(guess));

if(guess==winningNumber){
    console.log("You guessed right!!");
}
else{
    if(guess<winningNumber)
    {
    console.log("Too loww");    
    }else{
    console.log("To high!!");
    }
}

